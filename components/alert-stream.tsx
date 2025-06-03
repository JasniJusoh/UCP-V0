"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, Filter, Shield, User } from "lucide-react"

// Sample alert data
const alerts = [
  {
    id: 1,
    title: "Suspicious Login Attempt",
    description: "Multiple failed login attempts from IP 192.168.1.105",
    severity: "high",
    time: "2 minutes ago",
    source: "Authentication Service",
    icon: User,
  },
  {
    id: 2,
    title: "Malware Detected",
    description: "Potential malware detected in file upload: invoice_april.pdf",
    severity: "critical",
    time: "15 minutes ago",
    source: "Endpoint Protection",
    icon: AlertTriangle,
  },
  {
    id: 3,
    title: "Firewall Rule Triggered",
    description: "Outbound connection to known malicious domain blocked",
    severity: "medium",
    time: "32 minutes ago",
    source: "Network Security",
    icon: Shield,
  },
]

export function AlertStream() {
  const [filter, setFilter] = useState("all")

  const filteredAlerts = filter === "all" ? alerts : alerts.filter((alert) => alert.severity === filter)

  return (
    <Card>
      <CardContent className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by severity:</span>
            <div className="flex gap-1">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className="h-7 text-xs"
              >
                All
              </Button>
              <Button
                variant={filter === "critical" ? "destructive" : "outline"}
                size="sm"
                onClick={() => setFilter("critical")}
                className="h-7 text-xs"
              >
                Critical
              </Button>
              <Button
                variant={filter === "high" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("high")}
                className="h-7 text-xs"
              >
                High
              </Button>
              <Button
                variant={filter === "medium" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("medium")}
                className="h-7 text-xs"
              >
                Medium
              </Button>
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
            <Clock className="h-3 w-3" /> Live
          </Button>
        </div>

        <div className="space-y-3">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between rounded-xl border p-3">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    alert.severity === "critical"
                      ? "bg-red-100 text-red-600 dark:bg-red-900/30"
                      : alert.severity === "high"
                        ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30"
                        : "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
                  }`}
                >
                  <alert.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">
                    {alert.title}{" "}
                    <Badge
                      variant={
                        alert.severity === "critical"
                          ? "destructive"
                          : alert.severity === "high"
                            ? "default"
                            : "outline"
                      }
                      className={alert.severity === "medium" ? "bg-blue-600 text-white" : ""}
                    >
                      {alert.severity}
                    </Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="flex items-center gap-1 text-xs">
                  <Clock className="h-3 w-3" />
                  <span>{alert.time}</span>
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
  )
}
