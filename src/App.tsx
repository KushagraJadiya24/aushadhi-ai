import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Patients from "./pages/Patients";
import PatientDetails from "./pages/PatientDetails";
import EditPatient from "./pages/EditPatient";
import AddPatient from "./pages/AddPatient";
import DietCharts from "./pages/DietCharts";
import PatientDietChart from "./pages/PatientDietChart";
import FoodDatabase from "./pages/FoodDatabase";
import Assessments from "./pages/Assessments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/patients/:id/edit" element={<EditPatient />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/diet-charts" element={<DietCharts />} />
          <Route path="/diet-charts/:id" element={<PatientDietChart />} />
          <Route path="/food-database" element={<FoodDatabase />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
