import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, FileText } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  age: number;
  dosha: string;
  lastVisit: string;
  status: "Active" | "Pending" | "Completed";
}

const recentPatients: Patient[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    age: 45,
    dosha: "Vata-Pitta",
    lastVisit: "2024-01-08",
    status: "Active",
  },
  {
    id: "2",
    name: "Meera Patel",
    age: 38,
    dosha: "Kapha",
    lastVisit: "2024-01-07",
    status: "Pending",
  },
  {
    id: "3",
    name: "Arjun Singh",
    age: 52,
    dosha: "Pitta-Kapha",
    lastVisit: "2024-01-06",
    status: "Completed",
  },
  {
    id: "4",
    name: "Lakshmi Iyer",
    age: 29,
    dosha: "Vata",
    lastVisit: "2024-01-05",
    status: "Active",
  },
];

export function RecentPatients() {
  const getStatusVariant = (status: Patient["status"]) => {
    switch (status) {
      case "Active":
        return "default";
      case "Pending":
        return "secondary";
      case "Completed":
        return "outline";
      default:
        return "default";
    }
  };

  const getDoshaColor = (dosha: string) => {
    if (dosha.includes("Vata")) return "text-info";
    if (dosha.includes("Pitta")) return "text-warning";
    if (dosha.includes("Kapha")) return "text-success";
    return "text-muted-foreground";
  };

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Patients</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPatients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {patient.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{patient.name}</p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>Age: {patient.age}</span>
                    <span>•</span>
                    <span className={getDoshaColor(patient.dosha)}>{patient.dosha}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Badge variant={getStatusVariant(patient.status)}>
                  {patient.status}
                </Badge>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}