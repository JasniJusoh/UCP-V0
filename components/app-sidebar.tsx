"use client"

import {
  Activity,
  AlertTriangle,
  BookOpen,
  Box,
  Brain,
  Building2,
  FileCheck,
  FileWarning,
  Globe,
  LayoutDashboard,
  Shield,
  Workflow,
  ChevronDown,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const modules = [
  {
    title: "CRQ & Risk Analytics",
    icon: Activity,
    url: "#",
    badge: "New",
  },
  {
    title: "CTI + Threat Fusion",
    icon: AlertTriangle,
    url: "#",
  },
  {
    title: "Preventive Security",
    icon: Shield,
    url: "#",
  },
  {
    title: "Predictive Intelligence",
    icon: Brain,
    url: "#",
  },
  {
    title: "Emergency Response",
    icon: FileWarning,
    url: "#",
  },
  {
    title: "Compliance Simulator",
    icon: FileCheck,
    url: "#",
  },
  {
    title: "Digital Twin",
    icon: Box,
    url: "#",
  },
  {
    title: "AI Workflow Engine",
    icon: Workflow,
    url: "#",
  },
  {
    title: "Sales & Trust Metrics",
    icon: Building2,
    url: "#",
  },
  {
    title: "Knowledge Base",
    icon: BookOpen,
    url: "#",
  },
]

export function AppSidebar() {
  const { state } = useSidebar()

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Modules</h2>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between border-2 bg-sidebar-accent py-5 text-left">
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal text-muted-foreground">Current Customer</span>
                  <span className="text-base font-semibold">Acme Corp</span>
                </div>
                <ChevronDown className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
              <DropdownMenuItem className="py-2">
                <div className="flex flex-col">
                  <span className="font-medium">Acme Corp</span>
                  <span className="text-xs text-muted-foreground">Technology</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2">
                <div className="flex flex-col">
                  <span className="font-medium">TechGlobal Inc</span>
                  <span className="text-xs text-muted-foreground">Software</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2">
                <div className="flex flex-col">
                  <span className="font-medium">HealthFirst</span>
                  <span className="text-xs text-muted-foreground">Healthcare</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2">
                <div className="flex flex-col">
                  <span className="font-medium">FinSecure Bank</span>
                  <span className="text-xs text-muted-foreground">Financial</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2">
                <div className="flex flex-col">
                  <span className="font-medium">GovSafe Agency</span>
                  <span className="text-xs text-muted-foreground">Government</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={true} tooltip="Dashboard">
                  <a href="#">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {modules.map((module) => (
                <SidebarMenuItem key={module.title}>
                  <SidebarMenuButton asChild tooltip={module.title}>
                    <a href={module.url}>
                      <module.icon />
                      <span>{module.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {module.badge && (
                    <Badge variant="outline" className="absolute right-2 top-2 bg-green-600 text-white">
                      {module.badge}
                    </Badge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button variant="outline" className="w-full justify-start gap-2" size="sm">
          <Globe className="h-4 w-4" />
          <span>Global Settings</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
