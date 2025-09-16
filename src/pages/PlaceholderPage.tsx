import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  objectiveNumber: number;
}

export default function PlaceholderPage({ title, description, objectiveNumber }: PlaceholderPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Construction className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="text-xl">Objective {objectiveNumber}</CardTitle>
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              This section is currently under development. Only the Generate Reports (Objective 5) 
              section has been implemented with full UI design.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}