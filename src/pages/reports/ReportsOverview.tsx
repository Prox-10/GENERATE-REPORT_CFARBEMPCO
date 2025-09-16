import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Plane, Star, Award, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const reportTypes = [
  {
    title: "Daily Time Records",
    description: "Track employee attendance and working hours",
    icon: Clock,
    path: "/reports/daily-time-records",
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200"
  },
  {
    title: "Leave Records", 
    description: "Manage and track employee leave applications",
    icon: Plane,
    path: "/reports/leave-records",
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200"
  },
  {
    title: "Employee Evaluation Reports",
    description: "Track employee performance and development",
    icon: Star,
    path: "/reports/evaluation-reports", 
    color: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-200"
  },
  {
    title: "Length of Service Reports",
    description: "Track employee tenure and service milestones",
    icon: Award,
    path: "/reports/service-reports",
    color: "text-orange-600", 
    bgColor: "bg-orange-50 border-orange-200"
  }
];

export default function ReportsOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">Generate Reports</h1>
          <p className="text-muted-foreground">Access all HR reports and analytics for your organization</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => (
          <Card key={report.path} className={`hover:shadow-lg transition-shadow ${report.bgColor} border-2`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <report.icon className={`h-6 w-6 ${report.color}`} />
                <span>{report.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{report.description}</p>
              <Link to={report.path}>
                <Button className="w-full flex items-center justify-center gap-2">
                  Generate Report
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Total Reports Available</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">4</div>
            <p className="text-sm text-muted-foreground">Different report types</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Reports Generated Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">12</div>
            <p className="text-sm text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Export Formats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">3</div>
            <p className="text-sm text-muted-foreground">PDF, Excel, Print</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}