import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Configure your account and system preferences.</p>
        
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg">
          <p className="text-muted-foreground">Settings interface coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;