import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentPatients } from "@/components/dashboard/RecentPatients";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Users, FileText, Database, Activity } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Dr. Sharma</h1>
          <p className="text-muted-foreground">Here's what's happening with your patients today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Patients"
            value="247"
            description="Active patients under care"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
            variant="primary"
          />
          <StatsCard
            title="Diet Charts Created"
            value="89"
            description="This month"
            icon={FileText}
            trend={{ value: 8, isPositive: true }}
            variant="success"
          />
          <StatsCard
            title="Assessments Done"
            value="156"
            description="Prakriti evaluations"
            icon={Activity}
            trend={{ value: 15, isPositive: true }}
          />
          <StatsCard
            title="Food Database"
            value="8,247"
            description="Items with Ayurvedic properties"
            icon={Database}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentPatients />
          </div>
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
