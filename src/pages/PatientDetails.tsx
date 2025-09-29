import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Edit, ChefHat, User, Calendar, Activity, Weight, Stethoscope } from "lucide-react";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";

const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hasDietChart, setHasDietChart] = useState(false);

  // Mock patient data - in a real app, this would be fetched based on the ID
  const patient = {
    id: parseInt(id || "1"),
    name: "Rajesh Kumar",
    age: 45,
    gender: "Male",
    weight: 75,
    height: 175,
    dosha: "Pitta-Kapha",
    prakriti: "Pitta dominant with Kapha secondary",
    dateOfBirth: new Date("1979-03-15"),
    activityLevel: "Moderately Active",
    lastVisit: "2024-01-15",
    status: "Active",
    nextAppointment: "2024-01-22",
    medicalHistory: "Hypertension, managed with lifestyle modifications",
    allergies: "Shellfish, Peanuts",
    currentMedications: "Lisinopril 10mg daily"
  };

  const calculateAge = (dateOfBirth: Date) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const generateDietChart = () => {
    setHasDietChart(true);
    navigate(`/diet-charts/${patient.id}`);
  };

  const getDoshaColor = (dosha: string) => {
    if (dosha.includes("Pitta")) return "bg-orange-100 text-orange-800";
    if (dosha.includes("Vata")) return "bg-purple-100 text-purple-800";
    if (dosha.includes("Kapha")) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      "Active": "bg-green-100 text-green-800",
      "Follow-up": "bg-yellow-100 text-yellow-800",
      "Inactive": "bg-gray-100 text-gray-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate("/patients")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Patients
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{patient.name}</h1>
              <p className="text-muted-foreground">Patient ID: #{patient.id}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate(`/patients/${id}/edit`)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Patient
            </Button>
            <Button onClick={generateDietChart}>
              <ChefHat className="h-4 w-4 mr-2" />
              Generate Diet Chart
            </Button>
          </div>
        </div>

        {/* Patient Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Age</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{calculateAge(patient.dateOfBirth)}</div>
              <p className="text-xs text-muted-foreground">Born {format(patient.dateOfBirth, "MMM dd, yyyy")}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weight</CardTitle>
              <Weight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{patient.weight} kg</div>
              <p className="text-xs text-muted-foreground">Height: {patient.height} cm</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Badge className={getStatusColor(patient.status)} variant="secondary">
                {patient.status}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">Last visit: {patient.lastVisit}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dosha Type</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Badge className={getDoshaColor(patient.dosha)} variant="secondary">
                {patient.dosha}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">Constitution type</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <Tabs defaultValue="personal" className="space-y-4">
          <TabsList>
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="medical">Medical History</TabsTrigger>
            <TabsTrigger value="ayurvedic">Ayurvedic Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Basic patient demographics and physical characteristics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Full Name</Label>
                    <p className="text-sm text-muted-foreground">{patient.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Gender</Label>
                    <p className="text-sm text-muted-foreground">{patient.gender}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Date of Birth</Label>
                    <p className="text-sm text-muted-foreground">{format(patient.dateOfBirth, "MMMM dd, yyyy")}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Activity Level</Label>
                    <p className="text-sm text-muted-foreground">{patient.activityLevel}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Weight</Label>
                    <p className="text-sm text-muted-foreground">{patient.weight} kg</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Height</Label>
                    <p className="text-sm text-muted-foreground">{patient.height} cm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medical">
            <Card>
              <CardHeader>
                <CardTitle>Medical History & Current Status</CardTitle>
                <CardDescription>Medical background and current health information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Medical History</Label>
                  <p className="text-sm text-muted-foreground mt-1">{patient.medicalHistory}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Allergies</Label>
                  <p className="text-sm text-muted-foreground mt-1">{patient.allergies}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Current Medications</Label>
                  <p className="text-sm text-muted-foreground mt-1">{patient.currentMedications}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Last Visit</Label>
                    <p className="text-sm text-muted-foreground">{patient.lastVisit}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Next Appointment</Label>
                    <p className="text-sm text-muted-foreground">{patient.nextAppointment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ayurvedic">
            <Card>
              <CardHeader>
                <CardTitle>Ayurvedic Constitution Profile</CardTitle>
                <CardDescription>Dosha analysis and Ayurvedic characteristics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Primary Dosha</Label>
                  <div className="mt-1">
                    <Badge className={getDoshaColor(patient.dosha)} variant="secondary">
                      {patient.dosha}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Prakriti (Constitution)</Label>
                  <p className="text-sm text-muted-foreground mt-1">{patient.prakriti}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Constitutional Characteristics</Label>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p>• Strong digestive fire (Agni) with tendency towards heat accumulation</p>
                    <p>• Balanced body frame with good muscle development</p>
                    <p>• Responds well to cooling foods and practices</p>
                    <p>• Benefits from regular meal timings</p>
                  </div>
                </div>
                {!hasDietChart && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">No diet chart generated yet.</p>
                    <Button onClick={generateDietChart} size="sm">
                      <ChefHat className="h-4 w-4 mr-2" />
                      Generate Personalized Diet Chart
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default PatientDetails;