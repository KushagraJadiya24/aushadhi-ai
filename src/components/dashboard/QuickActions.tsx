import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Users, Stethoscope, Database } from "lucide-react";

const quickActions = [
  {
    title: "Add New Patient",
    description: "Register a new patient and create their profile",
    icon: Plus,
    action: "add-patient",
    variant: "primary" as const,
  },
  {
    title: "Create Diet Chart",
    description: "Generate personalized diet recommendations",
    icon: FileText,
    action: "create-diet",
    variant: "secondary" as const,
  },
  {
    title: "Prakriti Assessment",
    description: "Conduct dosha analysis for patients",
    icon: Stethoscope,
    action: "assessment",
    variant: "outline" as const,
  },
  {
    title: "Browse Food Database",
    description: "Explore 8,000+ foods with Ayurvedic properties",
    icon: Database,
    action: "food-database",
    variant: "outline" as const,
  },
];

export function QuickActions() {
  const handleAction = (action: string) => {
    // Navigation logic will be implemented later
    console.log(`Executing action: ${action}`);
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.action}
              variant={action.variant}
              className="h-auto p-4 justify-start"
              onClick={() => handleAction(action.action)}
            >
              <action.icon className="h-5 w-5 mr-3 flex-shrink-0" />
              <div className="text-left">
                <p className="font-medium">{action.title}</p>
                <p className="text-xs opacity-80">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}