"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Clock, Play, Workflow, X } from "lucide-react"

const workflows = [
  {
    id: 1,
    name: "Incident Response",
    status: "running",
    progress: 3,
    totalSteps: 5,
    lastRun: "2 minutes ago",
    steps: ["Detect", "Alert", "Isolate", "Remediate", "Report"],
  },
  {
    id: 2,
    name: "Vulnerability Scan",
    status: "completed",
    progress: 4,
    totalSteps: 4,
    lastRun: "1 hour ago",
    steps: ["Scan", "Analyze", "Prioritize", "Report"],
  },
]

export function WorkflowSnapshot() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="rounded-xl border p-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium">{workflow.name}</h3>
                  <Badge
                    variant={
                      workflow.status === "running"
                        ? "default"
                        : workflow.status === "completed"
                          ? "outline"
                          : "destructive"
                    }
                    className={workflow.status === "completed" ? "bg-green-600 text-white" : ""}
                  >
                    {workflow.status}
                  </Badge>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{workflow.lastRun}</span>
                </Badge>
              </div>

              <div className="mb-2 flex w-full items-center gap-1">
                {workflow.steps.map((step, i) => (
                  <div key={step} className="flex flex-1 flex-col items-center">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        i < workflow.progress
                          ? workflow.status === "failed" && i === workflow.progress - 1
                            ? "bg-red-600 text-white"
                            : "bg-green-600 text-white"
                          : "border border-muted-foreground/30 text-muted-foreground"
                      }`}
                    >
                      {i < workflow.progress ? (
                        workflow.status === "failed" && i === workflow.progress - 1 ? (
                          <X className="h-3 w-3" />
                        ) : (
                          <Check className="h-3 w-3" />
                        )
                      ) : (
                        i + 1
                      )}
                    </div>
                    <div
                      className={`mt-1 text-center text-xs ${
                        i < workflow.progress
                          ? workflow.status === "failed" && i === workflow.progress - 1
                            ? "text-red-500"
                            : "font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step}
                    </div>
                    {i < workflow.steps.length - 1 && (
                      <div
                        className={`mt-3 h-0.5 w-full ${
                          i < workflow.progress - 1 ? "bg-green-600" : "bg-muted-foreground/20"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-end gap-2">
                {workflow.status === "running" ? (
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    <X className="mr-1 h-3 w-3" /> Stop
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
                    <Play className="h-3 w-3" /> Run Again
                  </Button>
                )}
                <Button size="sm" variant="ghost" className="h-7 text-xs">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
