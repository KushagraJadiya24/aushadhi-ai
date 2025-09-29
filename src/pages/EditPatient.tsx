import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { EditPatientForm } from "@/components/forms/EditPatientForm";

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(`/patients/${id}`)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Patient
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Edit Patient</h1>
            <p className="text-muted-foreground">Update patient information and health profile</p>
          </div>
        </div>
        
        <EditPatientForm patientId={id} />
      </div>
    </DashboardLayout>
  );
};

export default EditPatient;