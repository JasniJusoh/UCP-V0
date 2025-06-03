import { Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SecurityBadge() {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-green-600 bg-background">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              A+
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-semibold">Acme Corp</h3>
              <Badge className="bg-green-600">Level 8</Badge>
            </div>
            <div className="mb-1 text-xs text-muted-foreground">Customer Security Score</div>
            <div className="flex items-center gap-2">
              <Progress value={85} className="h-2" />
              <span className="text-xs font-medium">85%</span>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-md bg-muted p-1">
            <div className="font-medium">12</div>
            <div className="text-muted-foreground">Tasks</div>
          </div>
          <div className="rounded-md bg-muted p-1">
            <div className="font-medium">850</div>
            <div className="text-muted-foreground">XP</div>
          </div>
          <div className="rounded-md bg-muted p-1">
            <div className="font-medium">3</div>
            <div className="text-muted-foreground">Badges</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
