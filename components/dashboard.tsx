"use client"

import { useState } from "react"
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Clock,
  FileCheck,
  Lightbulb,
  Mic,
  Shield,
  Workflow,
  X,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RiskScoreChart } from "@/components/risk-score-chart"
import { WorldMap } from "@/components/world-map"
import { AlertStream } from "@/components/alert-stream"
import { WorkflowSnapshot } from "@/components/workflow-snapshot"
import { AiAssistant } from "@/components/ai-assistant"
import { SecurityBadge } from "@/components/security-badge"

export function Dashboard() {
  const [showAssistant, setShowAssistant] = useState(false)

  return (
    <div className="mx-auto h-[calc(100vh-4rem)] max-w-[1800px] overflow-y-auto p-4 md:p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <h1 className="text-2xl font-bold md:text-3xl">Security Dashboard</h1>
            <Badge variant="outline" className="bg-primary/10 px-3 py-1 text-sm">
              Acme Corp
            </Badge>
          </div>
          <p className="text-muted-foreground">Overview of security posture and active threats</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button variant="outline" size="sm">
            Share
          </Button>
          <Button size="sm">Generate Report</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Customer Risk Score</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72/100</div>
            <p className="text-xs text-muted-foreground">Moderate Risk Level</p>
            <Progress value={72} className="mt-2 h-2 bg-muted" indicatorClassName="bg-amber-500" />
            <div className="mt-2 flex items-center justify-between text-xs">
              <span>Last updated: 2h ago</span>
              <Button variant="link" size="sm" className="h-auto p-0">
                Details <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">86%</div>
              <Badge variant="outline" className="bg-green-600 text-white">
                ISO27K
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">92%</div>
              <Badge variant="outline" className="bg-blue-600 text-white">
                NIST
              </Badge>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span>3 pending tasks</span>
              <Button variant="link" size="sm" className="h-auto p-0">
                View Tasks <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="mt-1 flex items-center gap-2">
              <Badge variant="destructive">2 Critical</Badge>
              <Badge variant="outline" className="bg-amber-500 text-white">
                5 Medium
              </Badge>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span>Last detected: 15m ago</span>
              <Button variant="link" size="sm" className="h-auto p-0">
                Investigate <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <SecurityBadge />
      </div>

      <div className="mt-4">
        <h2 className="mb-4 text-xl font-semibold">Real-Time Signals</h2>
        <Tabs defaultValue="alerts">
          <TabsList className="mb-4">
            <TabsTrigger value="alerts">Live Alert Stream</TabsTrigger>
            <TabsTrigger value="preventive">Preventive Actions</TabsTrigger>
            <TabsTrigger value="workflows">Automated Workflows</TabsTrigger>
            <TabsTrigger value="predictive">Predictive Warnings</TabsTrigger>
          </TabsList>
          <TabsContent value="alerts">
            <AlertStream />
          </TabsContent>
          <TabsContent value="preventive">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl border p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                          <Shield className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Malicious IP Blocked{" "}
                            <Badge variant="outline" className="ml-2">
                              Automatic
                            </Badge>
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            IP 192.168.1.{i * 10} blocked due to suspicious activity
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{i * 5}m ago</span>
                        </Badge>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="workflows">
            <WorkflowSnapshot />
          </TabsContent>
          <TabsContent value="predictive">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl border p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Potential Vulnerability{" "}
                            <Badge variant="outline" className="ml-2 bg-amber-500 text-white">
                              Warning
                            </Badge>
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {i === 1
                              ? "Unusual login pattern detected from user jsmith"
                              : "Potential data exfiltration risk in marketing dept"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Dismiss
                        </Button>
                        <Button size="sm">Investigate</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>CRQ Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <RiskScoreChart />
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Workflow Builder</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-center justify-between rounded-lg border bg-muted/50 p-3">
                <div className="flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Incident Response</span>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="mt-3 space-y-2 pl-4">
                {["Detect", "Alert", "Isolate", "Remediate", "Report"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2 text-sm">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        i < 3 ? "bg-green-600 text-white" : "border border-muted-foreground/30 text-muted-foreground"
                      }`}
                    >
                      {i < 3 ? <Check className="h-3 w-3" /> : <span>{i + 1}</span>}
                    </div>
                    <span className={i < 3 ? "font-medium" : "text-muted-foreground"}>{step}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full justify-between" size="sm">
                <span>View Workflow Details</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>CTI Feed Map</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <WorldMap />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>NLP Assistant Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  message: "4 compliance tasks pending for ISO27K certification",
                  icon: FileCheck,
                  color: "text-blue-500",
                },
                {
                  message: "2 anomalies flagged in network traffic patterns",
                  icon: AlertTriangle,
                  color: "text-amber-500",
                },
                {
                  message: "Preventive engine blocked 17 suspicious connection attempts",
                  icon: Shield,
                  color: "text-green-500",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border p-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-background ${item.color}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span>{item.message}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Assistant Button */}
      <Button
        onClick={() => setShowAssistant(!showAssistant)}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 p-0 text-white shadow-lg hover:bg-green-700"
      >
        {showAssistant ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {/* Voice Activation Button */}
      <Button
        className="fixed bottom-6 right-24 flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 p-0 text-white shadow-lg hover:bg-slate-800"
        variant="outline"
      >
        <Mic className="h-6 w-6" />
      </Button>

      {/* AI Assistant Panel */}
      {showAssistant && <AiAssistant onClose={() => setShowAssistant(false)} />}
    </div>
  )
}
