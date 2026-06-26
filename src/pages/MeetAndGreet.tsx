import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';
import { CalendarIcon, Clock, Stethoscope, MapPin, Users, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const formSchema = z.object({
  veterinarian_name: z.string().min(2, 'Name must be at least 2 characters'),
  practice_name: z.string().min(2, 'Practice name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  practice_location: z.string().min(2, 'Location is required'),
  specialty: z.string().optional(),
  team_size: z.string().optional(),
  preferred_date_1: z.date({
    required_error: 'First preferred date is required'
  }),
  preferred_time_1: z.string({
    required_error: 'First preferred time is required'
  }),
  preferred_date_2: z.date().optional(),
  preferred_time_2: z.string().optional(),
  preferred_date_3: z.date().optional(),
  preferred_time_3: z.string().optional(),
  special_requests: z.string().optional()
});
type FormData = z.infer<typeof formSchema>;
const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'];
const specialties = ['General Practice', 'Emergency Medicine', 'Surgery', 'Internal Medicine', 'Cardiology', 'Dermatology', 'Oncology', 'Orthopedics', 'Ophthalmology', 'Dentistry', 'Exotic Animal Medicine'];
const MeetAndGreet = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      veterinarian_name: '',
      practice_name: '',
      email: '',
      phone: '',
      practice_location: '',
      specialty: '',
      team_size: '',
      special_requests: ''
    }
  });
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Save to Supabase first
      const {
        error: supabaseError
      } = await supabase.from('vet_meet_greet_requests').insert({
        veterinarian_name: data.veterinarian_name,
        practice_name: data.practice_name,
        email: data.email,
        phone: data.phone,
        practice_location: data.practice_location,
        specialty: data.specialty || null,
        team_size: data.team_size ? parseInt(data.team_size) : null,
        preferred_date_1: data.preferred_date_1.toISOString().split('T')[0],
        preferred_time_1: data.preferred_time_1,
        preferred_date_2: data.preferred_date_2 ? data.preferred_date_2.toISOString().split('T')[0] : null,
        preferred_time_2: data.preferred_time_2 || null,
        preferred_date_3: data.preferred_date_3 ? data.preferred_date_3.toISOString().split('T')[0] : null,
        preferred_time_3: data.preferred_time_3 || null,
        special_requests: data.special_requests || null
      });
      if (supabaseError) throw supabaseError;

      // Send to CRM webhook
      try {
        const webhookData = {
          ...data,
          preferred_date_1: data.preferred_date_1.toISOString().split('T')[0],
          preferred_date_2: data.preferred_date_2 ? data.preferred_date_2.toISOString().split('T')[0] : null,
          preferred_date_3: data.preferred_date_3 ? data.preferred_date_3.toISOString().split('T')[0] : null
        };
        const {
          error: crmError
        } = await supabase.functions.invoke('meet-greet-webhook', {
          body: webhookData
        });
        if (crmError) {
          console.error('CRM webhook error:', crmError);
          // Don't fail the whole process if CRM fails
        }
      } catch (crmError) {
        console.error('Failed to send to CRM:', crmError);
        // Continue with success message even if CRM fails
      }
      setIsSubmitted(true);
      toast({
        title: 'Request Submitted Successfully!',
        description: 'We\'ll be in touch soon to confirm your visit.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return <>
      <Helmet>
        <title>Meet & Greet Confirmation | Port of LA Animal ER</title>
        <link rel="canonical" href="https://port.vet/meet-and-greet/" />
        <meta name="description" content="Thank you for scheduling a visit to Port of LA Animal ER. We'll be in touch soon to confirm your meet and greet appointment." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <Header />
        <main id="main-content" className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your meet and greet request has been submitted successfully. Our team will review your request and contact you within 24 hours to confirm your visit details.
            </p>
            <Button onClick={() => window.location.href = '/'} size="lg">
              Return to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </>;
  }
  return <>
      <Helmet>
        <title>Schedule a Meet & Greet | Port of LA Animal ER</title>
        <link rel="canonical" href="https://port.vet/meet-and-greet/" />
        <meta name="description" content="Schedule a visit to tour our new emergency veterinary facility in Wilmington, CA. Meet our expert team and learn about our services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <Header />
        <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Meet & Greet with Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Join us for an exclusive preview of Port of Los Angeles Animal Emergency Hospital. Schedule a visit to tour our new facility, meet our expert team, and learn about our comprehensive emergency veterinary services.</p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Meet our emergency veterinarians Dr. David Beeh & Dr Melissa Roth!</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Modern Facility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tour our new emergency facility in the Port of Las Angelas!</p>
            </CardContent>
          </Card>
          
        </div>

        {/* Form Section */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Schedule Your Visit</CardTitle>
            <CardDescription className="text-center text-lg">
              Please provide your information and preferred visit times. We'll contact you to confirm the details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="veterinarian_name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Veterinarian Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. John Smith" {...field} aria-required="true" />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>} />
                    <FormField control={form.control} name="practice_name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Practice Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith Veterinary Clinic" {...field} aria-required="true" />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>} />
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="doctor@vetclinic.com" {...field} aria-required="true" />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>} />
                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} aria-required="true" />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>} />
                  </div>
                </div>

                {/* Practice Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Practice Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="practice_location" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Practice Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Los Angeles, CA" {...field} aria-required="true" />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>} />
                    <FormField control={form.control} name="specialty" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Primary Specialty (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select specialty" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {specialties.map(specialty => <SelectItem key={specialty} value={specialty}>
                                  {specialty}
                                </SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="team_size" render={({
                    field
                  }) => <FormItem className="md:col-span-2">
                          <FormLabel>Team Size (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Number of people attending" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1 person</SelectItem>
                              <SelectItem value="2">2 people</SelectItem>
                              <SelectItem value="3">3 people</SelectItem>
                              <SelectItem value="4">4 people</SelectItem>
                              <SelectItem value="5">5+ people</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                </div>

                {/* Preferred Visit Times */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Preferred Visit Times
                  </h3>
                  <p className="text-muted-foreground">
                    Please provide up to 3 preferred dates and times. We'll confirm the best option for both parties.
                  </p>
                  
                  {/* First Preference (Required) */}
                  <div className="grid md:grid-cols-2 gap-6 p-4 border rounded-lg">
                    <FormField control={form.control} name="preferred_date_1" render={({
                    field
                  }) => <FormItem className="flex flex-col">
                          <FormLabel>First Preference - Date *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date < new Date()} initialFocus className="p-3 pointer-events-auto" />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="preferred_time_1" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>First Preference - Time *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map(time => <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  {/* Second Preference (Optional) */}
                  <div className="grid md:grid-cols-2 gap-6 p-4 border rounded-lg">
                    <FormField control={form.control} name="preferred_date_2" render={({
                    field
                  }) => <FormItem className="flex flex-col">
                          <FormLabel>Second Preference - Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                  {field.value ? format(field.value, "PPP") : <span>Pick a date (optional)</span>}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date < new Date()} initialFocus className="p-3 pointer-events-auto" />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="preferred_time_2" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Second Preference - Time</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map(time => <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  {/* Third Preference (Optional) */}
                  <div className="grid md:grid-cols-2 gap-6 p-4 border rounded-lg">
                    <FormField control={form.control} name="preferred_date_3" render={({
                    field
                  }) => <FormItem className="flex flex-col">
                          <FormLabel>Third Preference - Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                  {field.value ? format(field.value, "PPP") : <span>Pick a date (optional)</span>}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date < new Date()} initialFocus className="p-3 pointer-events-auto" />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="preferred_time_3" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Third Preference - Time</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map(time => <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Additional Information
                  </h3>
                  <FormField control={form.control} name="special_requests" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Special Requests or Questions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Please let us know if you have any specific areas of interest, accessibility needs, or questions about our services..." className="min-h-[100px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Request...' : 'Submit Visit Request'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  </>;
};
export default MeetAndGreet;