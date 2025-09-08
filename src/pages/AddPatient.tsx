import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AddPatientForm } from "@/components/forms/AddPatientForm";

const AddPatient = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Patient Registration</h1>
            <p className="text-muted-foreground">Add a new patient to your practice</p>
          </div>
        </div>
        
        <AddPatientForm />
      </div>
    </DashboardLayout>
  );
};

export default AddPatient;