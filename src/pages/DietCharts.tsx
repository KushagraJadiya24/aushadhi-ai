import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Leaf, Flame, User, Edit } from "lucide-react";

const DietCharts = () => {
  // Multiple diet charts for different patients
  const dietCharts = [
    {
      id: 1,
      patientName: "Rajesh Kumar",
      dosha: "Pitta-Kapha",
      season: "Summer",
      generatedDate: "2024-01-20",
      status: "Active",
      calories: 1650,
      mealsCount: 3,
      lastModified: "2024-01-22"
    },
    {
      id: 2,
      patientName: "Priya Sharma",
      dosha: "Vata-Pitta",
      season: "Winter",
      generatedDate: "2024-01-18",
      status: "Active",
      calories: 1800,
      mealsCount: 4,
      lastModified: "2024-01-21"
    },
    {
      id: 3,
      patientName: "Amit Patel",
      dosha: "Kapha-Vata",
      season: "Monsoon",
      generatedDate: "2024-01-15",
      status: "Pending Review",
      calories: 1500,
      mealsCount: 3,
      lastModified: "2024-01-19"
    },
    {
      id: 4,
      patientName: "Sunita Reddy",
      dosha: "Pitta",
      season: "Spring",
      generatedDate: "2024-01-12",
      status: "Active",
      calories: 1700,
      mealsCount: 3,
      lastModified: "2024-01-20"
    },
    {
      id: 5,
      patientName: "Vikram Singh",
      dosha: "Vata",
      season: "Autumn",
      generatedDate: "2024-01-10",
      status: "Completed",
      calories: 1900,
      mealsCount: 4,
      lastModified: "2024-01-18"
    },
    {
      id: 6,
      patientName: "Meera Krishnan",
      dosha: "Kapha",
      season: "Summer",
      generatedDate: "2024-01-08",
      status: "Active",
      calories: 1400,
      mealsCount: 3,
      lastModified: "2024-01-21"
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
      "Pending Review": "bg-yellow-100 text-yellow-800",
      "Completed": "bg-blue-100 text-blue-800",
      "Draft": "bg-gray-100 text-gray-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Diet Charts</h1>
            <p className="text-muted-foreground">Manage and view personalized Ayurvedic diet recommendations.</p>
          </div>
          <Button className="flex items-center gap-2">
            <ChefHat className="h-4 w-4" />
            Generate New Chart
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Charts</CardTitle>
              <ChefHat className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dietCharts.length}</div>
              <p className="text-xs text-muted-foreground">Across all patients</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Charts</CardTitle>
              <Flame className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dietCharts.filter(c => c.status === "Active").length}</div>
              <p className="text-xs text-muted-foreground">Currently in use</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dietCharts.filter(c => c.status === "Pending Review").length}</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Leaf className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Charts generated</p>
            </CardContent>
          </Card>
        </div>

        {/* Diet Charts Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Diet Chart Library</CardTitle>
            <CardDescription>Browse and manage all patient diet charts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dietCharts.map((chart) => (
                <Card key={chart.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{chart.patientName}</CardTitle>
                      <Badge className={getStatusColor(chart.status)} variant="secondary">
                        {chart.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getDoshaColor(chart.dosha)} variant="outline">
                        {chart.dosha}
                      </Badge>
                      <Badge variant="outline">{chart.season}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Calories</p>
                        <p className="font-medium">{chart.calories} kcal</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Meals</p>
                        <p className="font-medium">{chart.mealsCount} meals</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">Generated: {chart.generatedDate}</p>
                      <p className="text-muted-foreground">Modified: {chart.lastModified}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(`/diet-charts/${chart.id}`, '_blank')}
                      >
                        View Chart
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                <User className="h-5 w-5" />
                <span>Generate for New Patient</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Bulk Update Seasonal Charts</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span>Create Template</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DietCharts;