import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Secure webhook URL stored server-side
const CRM_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/8MuQq4EIavkTZfBfHfhe/webhook-trigger/e4222152-bfbc-492b-821f-e7f5d0f988be';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, petType, supportCommunity, consentToContact, source = 'website', isTest = false } = await req.json();
    
    console.log('CRM Webhook Request:', { name, email, petType, supportCommunity, consentToContact, source, isTest });

    // Prepare lead data for CRM
    const leadData = {
      name: name || 'Not provided',
      email,
      petType: petType || 'Not specified',
      supportCommunity: supportCommunity || false,
      consentToContact: consentToContact || false,
      source,
      timestamp: new Date().toISOString(),
      leadSource: 'Port.vet Website',
      isTestData: isTest
    };

    // Send to CRM webhook
    const webhookResponse = await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Port.vet-Webhook/1.0'
      },
      body: JSON.stringify(leadData),
    });

    if (!webhookResponse.ok) {
      throw new Error(`CRM webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
    }

    const responseText = await webhookResponse.text();
    console.log('CRM webhook success:', responseText);

    return new Response(JSON.stringify({ 
      success: true, 
      message: isTest ? 'Test data sent successfully' : 'Lead submitted successfully',
      crmResponse: responseText 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('CRM webhook error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

// Send test load immediately when function loads
console.log('Sending test load to CRM...');
fetch(CRM_WEBHOOK_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Port.vet-Test/1.0'
  },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@port.vet',
    petType: 'dog',
    supportCommunity: true,
    source: 'test_load',
    timestamp: new Date().toISOString(),
    leadSource: 'Port.vet Website Test',
    isTestData: true
  })
}).then(response => {
  console.log('Test load response status:', response.status);
  return response.text();
}).then(text => {
  console.log('Test load response:', text);
}).catch(error => {
  console.error('Test load error:', error);
});