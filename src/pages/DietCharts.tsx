import { DashboardLayout } from "@/components/layout/DashboardLayout";

const DietCharts = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Diet Charts</h1>
        <p className="text-muted-foreground">Create and manage personalized diet recommendations.</p>
        
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg">
          <p className="text-muted-foreground">Diet chart creation interface coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DietCharts;