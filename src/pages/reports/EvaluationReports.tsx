import { ReportFilters } from "@/components/reports/ReportFilters";
import { ExportButton } from "@/components/reports/ExportButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const sampleEvaluationData = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "Human Resources",
    position: "HR Manager",
    evaluationPeriod: "Q4 2023",
    evaluationDate: "2024-01-05",
    overallScore: 85,
    rating: "Excellent",
    evaluator: "Jane Wilson",
    goals: "Met",
    communication: 90,
    teamwork: 85,
    initiative: 80,
    technical: 85
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    department: "Finance", 
    position: "Financial Analyst",
    evaluationPeriod: "Q4 2023",
    evaluationDate: "2024-01-05",
    overallScore: 78,
    rating: "Good",
    evaluator: "Robert Davis",
    goals: "Partially Met",
    communication: 80,
    teamwork: 85,
    initiative: 75,
    technical: 70
  },
  {
    id: "EMP003",
    name: "Mike Johnson",
    department: "Operations",
    position: "Operations Supervisor",
    evaluationPeriod: "Q4 2023", 
    evaluationDate: "2024-01-05",
    overallScore: 92,
    rating: "Outstanding",
    evaluator: "Sarah Wilson",
    goals: "Exceeded",
    communication: 90,
    teamwork: 95,
    initiative: 90,
    technical: 85
  },
  {
    id: "EMP004",
    name: "Sarah Wilson",
    department: "Marketing",
    position: "Marketing Specialist",
    evaluationPeriod: "Q4 2023",
    evaluationDate: "2024-01-05",
    overallScore: 72,
    rating: "Satisfactory",
    evaluator: "David Brown", 
    goals: "Met",
    communication: 75,
    teamwork: 70,
    initiative: 75,
    technical: 65
  },
  {
    id: "EMP005",
    name: "David Brown",
    department: "IT",
    position: "Software Developer",
    evaluationPeriod: "Q4 2023",
    evaluationDate: "2024-01-05",
    overallScore: 88,
    rating: "Excellent",
    evaluator: "Mike Johnson",
    goals: "Exceeded", 
    communication: 85,
    teamwork: 90,
    initiative: 90,
    technical: 95
  }
];

export default function EvaluationReports() {
  const getRatingBadge = (rating: string) => {
    switch (rating) {
      case "Outstanding":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Outstanding</Badge>;
      case "Excellent":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>;
      case "Good":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>;
      case "Satisfactory":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Satisfactory</Badge>;
      case "Needs Improvement":
        return <Badge variant="destructive">Needs Improvement</Badge>;
      default:
        return <Badge variant="outline">{rating}</Badge>;
    }
  };

  const getGoalsBadge = (goals: string) => {
    switch (goals) {
      case "Exceeded":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Exceeded</Badge>;
      case "Met":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Met</Badge>;
      case "Partially Met":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Partially Met</Badge>;
      case "Not Met":
        return <Badge variant="destructive">Not Met</Badge>;
      default:
        return <Badge variant="outline">{goals}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Employee Evaluation Reports</h1>
            <p className="text-muted-foreground">Track employee performance and development</p>
          </div>
        </div>
        <ExportButton />
      </div>

      <ReportFilters 
        title="Employee Evaluation Reports"
        showDateRange={true}
        showDepartment={true}
        showEmployee={true}
        showStatus={false}
      />

      <Card>
        <CardHeader>
          <CardTitle>Performance Evaluation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Overall Score</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Goals</TableHead>
                  <TableHead>Evaluator</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleEvaluationData.map((evaluation) => (
                  <TableRow key={evaluation.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{evaluation.name}</div>
                        <div className="text-sm text-muted-foreground">{evaluation.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>{evaluation.department}</TableCell>
                    <TableCell>{evaluation.position}</TableCell>
                    <TableCell>{evaluation.evaluationPeriod}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={evaluation.overallScore} className="w-16 h-2" />
                        <span className="text-sm font-medium">{evaluation.overallScore}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{getRatingBadge(evaluation.rating)}</TableCell>
                    <TableCell>{getGoalsBadge(evaluation.goals)}</TableCell>
                    <TableCell>{evaluation.evaluator}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Outstanding</span>
                <span className="text-sm font-medium">1 (20%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Excellent</span>
                <span className="text-sm font-medium">2 (40%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Good</span>
                <span className="text-sm font-medium">1 (20%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Satisfactory</span>
                <span className="text-sm font-medium">1 (20%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Scores by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Communication</span>
                  <span className="text-sm font-medium">84%</span>
                </div>
                <Progress value={84} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Teamwork</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Initiative</span>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Technical Skills</span>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}