import { ReportFilters } from "@/components/reports/ReportFilters";
import { ExportButton } from "@/components/reports/ExportButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

const sampleServiceData = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "Human Resources",
    position: "HR Manager",
    hireDate: "2019-03-15",
    serviceLength: "4 years, 10 months",
    serviceYears: 4.83,
    status: "Active",
    nextMilestone: "5 Year Award",
    milestoneDate: "2024-03-15"
  },
  {
    id: "EMP002", 
    name: "Jane Smith",
    department: "Finance",
    position: "Financial Analyst", 
    hireDate: "2021-07-20",
    serviceLength: "2 years, 6 months",
    serviceYears: 2.5,
    status: "Active",
    nextMilestone: "3 Year Award", 
    milestoneDate: "2024-07-20"
  },
  {
    id: "EMP003",
    name: "Mike Johnson",
    department: "Operations", 
    position: "Operations Supervisor",
    hireDate: "2016-11-10",
    serviceLength: "7 years, 2 months",
    serviceYears: 7.17,
    status: "Active",
    nextMilestone: "10 Year Award",
    milestoneDate: "2026-11-10"
  },
  {
    id: "EMP004",
    name: "Sarah Wilson", 
    department: "Marketing",
    position: "Marketing Specialist",
    hireDate: "2022-01-05",
    serviceLength: "2 years, 0 months",
    serviceYears: 2.0,
    status: "Active",
    nextMilestone: "3 Year Award",
    milestoneDate: "2025-01-05"
  },
  {
    id: "EMP005",
    name: "David Brown",
    department: "IT",
    position: "Software Developer",
    hireDate: "2020-09-01", 
    serviceLength: "3 years, 4 months",
    serviceYears: 3.33,
    status: "Active",
    nextMilestone: "5 Year Award",
    milestoneDate: "2025-09-01"
  }
];

export default function ServiceReports() {
  const getServiceBadge = (years: number) => {
    if (years >= 10) {
      return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Veteran (10+ years)</Badge>;
    } else if (years >= 5) {
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Senior (5+ years)</Badge>;
    } else if (years >= 3) {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Experienced (3+ years)</Badge>;
    } else {
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">New (0-3 years)</Badge>;
    }
  };

  const getServiceProgress = (years: number) => {
    // Progress towards next major milestone (5, 10, 15, 20 years)
    if (years < 5) return (years / 5) * 100;
    if (years < 10) return ((years - 5) / 5) * 100;
    if (years < 15) return ((years - 10) / 5) * 100;
    return ((years - 15) / 5) * 100;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Award className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Length of Service Reports</h1>
            <p className="text-muted-foreground">Track employee tenure and service milestones</p>
          </div>
        </div>
        <ExportButton />
      </div>

      <ReportFilters 
        title="Length of Service Reports"
        showDateRange={false}
        showDepartment={true}
        showEmployee={true}
        showStatus={false}
      />

      <Card>
        <CardHeader>
          <CardTitle>Employee Service Length Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Hire Date</TableHead>
                  <TableHead>Service Length</TableHead>
                  <TableHead>Service Category</TableHead>
                  <TableHead>Next Milestone</TableHead>
                  <TableHead>Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleServiceData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-muted-foreground">{employee.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.hireDate}</TableCell>
                    <TableCell className="font-medium">{employee.serviceLength}</TableCell>
                    <TableCell>{getServiceBadge(employee.serviceYears)}</TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm font-medium">{employee.nextMilestone}</div>
                        <div className="text-xs text-muted-foreground">{employee.milestoneDate}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={getServiceProgress(employee.serviceYears)} className="w-16 h-2" />
                        <span className="text-xs text-muted-foreground">
                          {Math.round(getServiceProgress(employee.serviceYears))}%
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Average Tenure</CardTitle>  
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">3.9</div>
            <p className="text-sm text-muted-foreground">Years of service</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Veterans (10+ years)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">0</div>
            <p className="text-sm text-muted-foreground">0% of workforce</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Senior (5+ years)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">1</div>
            <p className="text-sm text-muted-foreground">20% of workforce</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Upcoming Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">3</div>
            <p className="text-sm text-muted-foreground">In next 12 months</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Length Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">0-3 years</span>
                <div className="flex items-center gap-2">
                  <Progress value={60} className="w-24 h-2" />
                  <span className="text-sm font-medium">3 (60%)</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">3-5 years</span>
                <div className="flex items-center gap-2">
                  <Progress value={20} className="w-24 h-2" />
                  <span className="text-sm font-medium">1 (20%)</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">5-10 years</span>
                <div className="flex items-center gap-2">
                  <Progress value={20} className="w-24 h-2" />
                  <span className="text-sm font-medium">1 (20%)</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">10+ years</span>
                <div className="flex items-center gap-2">
                  <Progress value={0} className="w-24 h-2" />
                  <span className="text-sm font-medium">0 (0%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Service Awards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium text-sm">John Doe</div>
                  <div className="text-xs text-muted-foreground">5 Year Award</div>
                </div>
                <div className="text-xs text-muted-foreground">Mar 15, 2024</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium text-sm">Jane Smith</div>
                  <div className="text-xs text-muted-foreground">3 Year Award</div>
                </div>
                <div className="text-xs text-muted-foreground">Jul 20, 2024</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium text-sm">Sarah Wilson</div>
                  <div className="text-xs text-muted-foreground">3 Year Award</div>
                </div>
                <div className="text-xs text-muted-foreground">Jan 5, 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}