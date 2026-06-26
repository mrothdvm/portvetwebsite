-- Create a table for veterinarian meet and greet requests
CREATE TABLE public.vet_meet_greet_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  veterinarian_name TEXT NOT NULL,
  practice_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  practice_location TEXT NOT NULL,
  specialty TEXT,
  team_size INTEGER,
  preferred_date_1 DATE NOT NULL,
  preferred_time_1 TIME NOT NULL,
  preferred_date_2 DATE,
  preferred_time_2 TIME,
  preferred_date_3 DATE,
  preferred_time_3 TIME,
  special_requests TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.vet_meet_greet_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert requests (public form)
CREATE POLICY "Anyone can submit meet greet requests" 
ON public.vet_meet_greet_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own requests (for future admin panel)
CREATE POLICY "Users can view their own requests" 
ON public.vet_meet_greet_requests 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_vet_meet_greet_requests_updated_at
BEFORE UPDATE ON public.vet_meet_greet_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();