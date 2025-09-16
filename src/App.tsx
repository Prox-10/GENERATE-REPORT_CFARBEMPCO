import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import ReportsOverview from "./pages/reports/ReportsOverview";
import DailyTimeRecords from "./pages/reports/DailyTimeRecords";
import LeaveRecords from "./pages/reports/LeaveRecords";
import EvaluationReports from "./pages/reports/EvaluationReports";
import ServiceReports from "./pages/reports/ServiceReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1">
              <header className="h-12 flex items-center border-b bg-background px-4">
                <SidebarTrigger />
                <div className="ml-4">
                  <h1 className="font-semibold text-primary">CFARBEMPCO Human Resource Information System</h1>
                </div>
              </header>
              <main className="flex-1 p-6 bg-background">
                <Routes>
                  <Route path="/" element={<Index />} />
                  
                  {/* Placeholder routes for objectives 1-4 */}
                  <Route 
                    path="/employee-management" 
                    element={
                      <PlaceholderPage 
                        title="Employee Management" 
                        description="Manage employee information, profiles, and organizational structure"
                        objectiveNumber={1}
                      />
                    } 
                  />
                  <Route 
                    path="/attendance-tracking" 
                    element={
                      <PlaceholderPage 
                        title="Attendance Tracking" 
                        description="Monitor employee attendance, time-in/time-out, and work schedules"
                        objectiveNumber={2}
                      />
                    } 
                  />
                  <Route 
                    path="/leave-management" 
                    element={
                      <PlaceholderPage 
                        title="Leave Management" 
                        description="Process leave applications, manage leave balances, and track approvals"
                        objectiveNumber={3}
                      />
                    } 
                  />
                  <Route 
                    path="/performance-evaluation" 
                    element={
                      <PlaceholderPage 
                        title="Performance Evaluation" 
                        description="Conduct employee evaluations, set goals, and track performance metrics"
                        objectiveNumber={4}
                      />
                    } 
                  />
                  
                  {/* Reports routes (fully implemented) */}
                  <Route path="/reports" element={<ReportsOverview />} />
                  <Route path="/reports/daily-time-records" element={<DailyTimeRecords />} />
                  <Route path="/reports/leave-records" element={<LeaveRecords />} />
                  <Route path="/reports/evaluation-reports" element={<EvaluationReports />} />
                  <Route path="/reports/service-reports" element={<ServiceReports />} />
                  
                  {/* Catch-all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
