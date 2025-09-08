import { DashboardLayout } from "@/components/layout/DashboardLayout";

const FoodDatabase = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Food Database</h1>
        <p className="text-muted-foreground">Explore 8,000+ foods with complete Ayurvedic properties.</p>
        
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg">
          <p className="text-muted-foreground">Food database interface coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FoodDatabase;