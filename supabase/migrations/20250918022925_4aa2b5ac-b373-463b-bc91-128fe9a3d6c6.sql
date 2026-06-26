-- Fix security vulnerability: Remove public read access to sensitive veterinarian data
-- The current SELECT policy allows anyone to view all veterinarian contact information
-- This is a security risk as it exposes emails, phone numbers, and practice details

-- Drop the problematic policy that allows all users to view all requests
DROP POLICY IF EXISTS "Users can view their own requests" ON public.vet_meet_greet_requests;

-- Since this is a contact form for veterinarians to request meetings,
-- there's no need for public read access to the submitted data.
-- Only internal staff should be able to view these requests through the Supabase dashboard.
-- The INSERT policy remains unchanged to allow form submissions.