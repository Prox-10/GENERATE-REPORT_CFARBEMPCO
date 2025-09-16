import { ReportFilters } from "@/components/reports/ReportFilters";
import { ExportButton } from "@/components/reports/ExportButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const sampleData = [
  {
    id: "EMP001", 
    name: "John Doe", 
    department: "Human Resources",
    date: "2024-01-15",
    timeIn: "08:00 AM",
    timeOut: "05:00 PM",
    totalHours: "9.0",
    status: "Present"
  },
  {
    id: "EMP002", 
    name: "Jane Smith", 
    department: "Finance",
    date: "2024-01-15",
    timeIn: "08:15 AM",
    timeOut: "05:15 PM",
    totalHours: "9.0",
    status: "Present"
  },
  {
    id: "EMP003", 
    name: "Mike Johnson", 
    department: "Operations",
    date: "2024-01-15",
    timeIn: "09:00 AM",
    timeOut: "06:00 PM",
    totalHours: "9.0",
    status: "Late"
  },
  {
    id: "EMP004", 
    name: "Sarah Wilson", 
    department: "Marketing",
    date: "2024-01-15",
    timeIn: "-",
    timeOut: "-",
    totalHours: "0.0",
    status: "Absent"
  },
  {
    id: "EMP005", 
    name: "David Brown", 
    department: "IT",
    date: "2024-01-15",
    timeIn: "07:45 AM",
    timeOut: "04:45 PM",
    totalHours: "9.0",
    status: "Present"
  }
];

export default function DailyTimeRecords() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Present":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>;
      case "Late":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Late</Badge>;
      case "Absent":
        return <Badge variant="destructive">Absent</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Clock className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Daily Time Records</h1>
            <p className="text-muted-foreground">Track employee attendance and working hours</p>
          </div>
        </div>
        <ExportButton />
      </div>

      <ReportFilters 
        title="Daily Time Records"
        showDateRange={true}
        showDepartment={true}
        showEmployee={true}
        showStatus={false}
      />

      <Card>
        <CardHeader>
          <CardTitle>Time Records Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Employee Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead>Total Hours</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.id}</TableCell>
                    <TableCell>{record.name}</TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.timeIn}</TableCell>
                    <TableCell>{record.timeOut}</TableCell>
                    <TableCell>{record.totalHours}</TableCell>
                    <TableCell className="text-center">{getStatusBadge(record.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">5</div>
            <p className="text-sm text-muted-foreground">Employees tracked today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Present Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">3</div>
            <p className="text-sm text-muted-foreground">60% attendance rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Average Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">7.2</div>
            <p className="text-sm text-muted-foreground">Hours worked today</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}