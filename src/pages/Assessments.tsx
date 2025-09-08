import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Assessments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Prakriti Assessments</h1>
        <p className="text-muted-foreground">Conduct dosha analysis and Ayurvedic evaluations.</p>
        
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg">
          <p className="text-muted-foreground">Assessment tools coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assessments;