import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Secure webhook URL for Meet & Greet forms
const MEET_GREET_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/8MuQq4EIavkTZfBfHfhe/webhook-trigger/867f4c55-ac6d-4b2f-aef7-d4ef2fbec15b';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      veterinarian_name, 
      practice_name, 
      email, 
      phone, 
      practice_location, 
      specialty, 
      team_size,
      preferred_date_1,
      preferred_time_1,
      preferred_date_2,
      preferred_time_2,
      preferred_date_3,
      preferred_time_3,
      special_requests,
      isTest = false 
    } = await req.json();
    
    console.log('Meet & Greet Webhook Request:', { 
      veterinarian_name, 
      practice_name, 
      email, 
      phone, 
      practice_location, 
      specialty, 
      team_size,
      isTest 
    });

    // Format preferred visit times
    const preferredVisitTimes = [];
    if (preferred_date_1 && preferred_time_1) {
      preferredVisitTimes.push(`${preferred_date_1} at ${preferred_time_1}`);
    }
    if (preferred_date_2 && preferred_time_2) {
      preferredVisitTimes.push(`${preferred_date_2} at ${preferred_time_2}`);
    }
    if (preferred_date_3 && preferred_time_3) {
      preferredVisitTimes.push(`${preferred_date_3} at ${preferred_time_3}`);
    }

    // Prepare lead data for CRM
    const leadData = {
      name: veterinarian_name || 'Not provided',
      email,
      phone: phone || 'Not provided',
      company: practice_name || 'Not provided',
      location: practice_location || 'Not provided',
      specialty: specialty || 'Not specified',
      teamSize: team_size || 'Not specified',
      preferredVisitTimes: preferredVisitTimes.join('; '),
      specialRequests: special_requests || 'None',
      source: 'meet-and-greet',
      timestamp: new Date().toISOString(),
      leadSource: 'Port.vet Meet & Greet',
      isTestData: isTest
    };

    // Send to CRM webhook
    const webhookResponse = await fetch(MEET_GREET_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Port.vet-MeetGreet/1.0'
      },
      body: JSON.stringify(leadData),
    });

    if (!webhookResponse.ok) {
      throw new Error(`CRM webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
    }

    const responseText = await webhookResponse.text();
    console.log('Meet & Greet CRM webhook success:', responseText);

    return new Response(JSON.stringify({ 
      success: true, 
      message: isTest ? 'Test meet & greet data sent successfully' : 'Meet & greet request submitted successfully',
      crmResponse: responseText 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Meet & Greet CRM webhook error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});