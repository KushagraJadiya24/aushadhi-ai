import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus, Search, Filter, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const navigate = useNavigate();

  const samplePatients = [
    {
      id: 1,
      name: "Rajesh Kumar",
      age: 45,
      gender: "Male",
      dosha: "Pitta-Kapha",
      lastVisit: "2024-01-15",
      status: "Active",
      nextAppointment: "2024-01-22"
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 32,
      gender: "Female",
      dosha: "Vata-Pitta",
      lastVisit: "2024-01-14",
      status: "Active",
      nextAppointment: "2024-01-21"
    },
    {
      id: 3,
      name: "Amit Patel",
      age: 28,
      gender: "Male",
      dosha: "Kapha-Vata",
      lastVisit: "2024-01-10",
      status: "Follow-up",
      nextAppointment: "2024-01-25"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      age: 38,
      gender: "Female",
      dosha: "Pitta",
      lastVisit: "2024-01-08",
      status: "Active",
      nextAppointment: "2024-01-20"
    }
  ];

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
          <div>
            <h1 className="text-3xl font-bold text-foreground">Patient Management</h1>
            <p className="text-muted-foreground">Manage your patient records and health profiles.</p>
          </div>
          <Button onClick={() => navigate("/add-patient")} className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add New Patient
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{samplePatients.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{samplePatients.filter(p => p.status === "Active").length}</div>
              <p className="text-xs text-muted-foreground">Currently under treatment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Follow-ups</CardTitle>
              <Calendar className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{samplePatients.filter(p => p.status === "Follow-up").length}</div>
              <p className="text-xs text-muted-foreground">Pending follow-ups</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Scheduled for today</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Records</CardTitle>
            <CardDescription>View and manage your patient database</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search patients by name..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Dosha Type</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Appointment</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {samplePatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>
                      <Badge className={getDoshaColor(patient.dosha)} variant="secondary">
                        {patient.dosha}
                      </Badge>
                    </TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(patient.status)} variant="secondary">
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{patient.nextAppointment}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View</Button>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Patients;