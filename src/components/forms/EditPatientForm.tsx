import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, User, Weight, Activity, Flower } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const patientSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.enum(["male", "female", "other"]),
  weight: z.number().min(1, "Weight must be greater than 0"),
  height: z.number().min(1, "Height must be greater than 0"),
  activityLevel: z.enum(["sedentary", "lightly_active", "moderately_active", "very_active"]),
  medicalHistory: z.string().optional(),
  allergies: z.string().optional(),
  currentMedications: z.string().optional(),
  primaryDosha: z.enum(["vata", "pitta", "kapha", "vata_pitta", "pitta_kapha", "vata_kapha", "tridosha"]),
  prakriti: z.string().min(5, "Please provide a brief description of the patient's constitution"),
});

type PatientFormData = z.infer<typeof patientSchema>;

interface EditPatientFormProps {
  patientId?: string;
}

export function EditPatientForm({ patientId }: EditPatientFormProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock existing patient data - in a real app, this would be fetched
  const existingPatient = {
    firstName: "Rajesh",
    lastName: "Kumar",
    dateOfBirth: new Date("1979-03-15"),
    gender: "male" as const,
    weight: 75,
    height: 175,
    activityLevel: "moderately_active" as const,
    medicalHistory: "Hypertension, managed with lifestyle modifications",
    allergies: "Shellfish, Peanuts",
    currentMedications: "Lisinopril 10mg daily",
    primaryDosha: "pitta_kapha" as const,
    prakriti: "Pitta dominant with Kapha secondary, moderate build, good digestion with tendency towards heat accumulation",
  };

  const form = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: existingPatient,
  });

  const onSubmit = async (data: PatientFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Updated patient data:", data);
      
      toast({
        title: "Patient Updated Successfully",
        description: `${data.firstName} ${data.lastName}'s information has been updated.`,
      });
      
      navigate(`/patients/${patientId}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update patient. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <User className="h-6 w-6 text-primary" />
          Edit Patient Information
        </CardTitle>
        <CardDescription>
          Update patient information and health profile
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Physical Measurements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Weight className="h-4 w-4" />
                      Weight (kg)
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Enter weight" 
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Enter height" 
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Activity Level
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (Little to no exercise)</SelectItem>
                      <SelectItem value="lightly_active">Lightly Active (Light exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="moderately_active">Moderately Active (Moderate exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="very_active">Very Active (Hard exercise 6-7 days/week)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ayurvedic Constitution */}
            <Card className="bg-sage-50">
              <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Flower className="h-5 w-5 text-sage-600" />
                Ayurvedic Constitution (Prakriti)
              </CardTitle>
                <CardDescription>
                  Determine the patient's inherent constitution and dosha balance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="primaryDosha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Dosha Constitution</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select dosha type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="vata">Vata (Air & Space)</SelectItem>
                          <SelectItem value="pitta">Pitta (Fire & Water)</SelectItem>
                          <SelectItem value="kapha">Kapha (Earth & Water)</SelectItem>
                          <SelectItem value="vata_pitta">Vata-Pitta</SelectItem>
                          <SelectItem value="pitta_kapha">Pitta-Kapha</SelectItem>
                          <SelectItem value="vata_kapha">Vata-Kapha</SelectItem>
                          <SelectItem value="tridosha">Tridosha (Balanced)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prakriti"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Constitutional Description (Prakriti)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the patient's constitutional characteristics, physical traits, mental tendencies, and dosha-specific qualities..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Medical Information */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="medicalHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Medical History</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter any relevant medical history..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="allergies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allergies</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List any known allergies..."
                        className="min-h-[60px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentMedications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Medications</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List current medications and dosages..."
                        className="min-h-[60px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Updating Patient..." : "Update Patient"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate(`/patients/${patientId}`)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}