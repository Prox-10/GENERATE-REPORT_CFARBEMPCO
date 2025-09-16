import { ReportFilters } from "@/components/reports/ReportFilters";
import { ExportButton } from "@/components/reports/ExportButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plane } from "lucide-react";

const sampleLeaveData = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "Human Resources",
    leaveType: "Annual Leave",
    startDate: "2024-01-20",
    endDate: "2024-01-22",
    days: 3,
    status: "Approved",
    appliedDate: "2024-01-10"
  },
  {
    id: "EMP002",
    name: "Jane Smith", 
    department: "Finance",
    leaveType: "Sick Leave",
    startDate: "2024-01-18",
    endDate: "2024-01-18",
    days: 1,
    status: "Approved",
    appliedDate: "2024-01-18"
  },
  {
    id: "EMP003",
    name: "Mike Johnson",
    department: "Operations", 
    leaveType: "Personal Leave",
    startDate: "2024-01-25",
    endDate: "2024-01-26",
    days: 2,
    status: "Pending",
    appliedDate: "2024-01-15"
  },
  {
    id: "EMP004",
    name: "Sarah Wilson",
    department: "Marketing",
    leaveType: "Annual Leave", 
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    days: 5,
    status: "Pending",
    appliedDate: "2024-01-12"
  },
  {
    id: "EMP005",
    name: "David Brown",
    department: "IT",
    leaveType: "Emergency Leave",
    startDate: "2024-01-16",
    endDate: "2024-01-16", 
    days: 1,
    status: "Rejected",
    appliedDate: "2024-01-16"
  }
];

export default function LeaveRecords() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
      case "Rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getLeaveTypeBadge = (type: string) => {
    switch (type) {
      case "Annual Leave":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Annual</Badge>;
      case "Sick Leave":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Sick</Badge>;
      case "Personal Leave":
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Personal</Badge>;
      case "Emergency Leave":
        return <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Emergency</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Plane className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Leave Records</h1>
            <p className="text-muted-foreground">Manage and track employee leave applications</p>
          </div>
        </div>
        <ExportButton />
      </div>

      <ReportFilters 
        title="Leave Records"
        showDateRange={true}
        showDepartment={true}
        showEmployee={true}
        showStatus={true}
      />

      <Card>
        <CardHeader>
          <CardTitle>Leave Applications Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Employee Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Leave Type</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Days</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleLeaveData.map((leave) => (
                  <TableRow key={`${leave.id}-${leave.appliedDate}`}>
                    <TableCell className="font-medium">{leave.id}</TableCell>
                    <TableCell>{leave.name}</TableCell>
                    <TableCell>{leave.department}</TableCell>
                    <TableCell>{getLeaveTypeBadge(leave.leaveType)}</TableCell>
                    <TableCell>{leave.startDate}</TableCell>
                    <TableCell>{leave.endDate}</TableCell>
                    <TableCell className="font-medium">{leave.days}</TableCell>
                    <TableCell>{leave.appliedDate}</TableCell>
                    <TableCell className="text-center">{getStatusBadge(leave.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">5</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">2</div>
            <p className="text-sm text-muted-foreground">40% approval rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">2</div>
            <p className="text-sm text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Total Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">11</div>
            <p className="text-sm text-muted-foreground">Leave days requested</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}