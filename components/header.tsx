"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Input } from "@/components/ui/input"

const navItems = [
  "Dashboard",
  "Risk Quantification",
  "CTI",
  "Preventive Engine",
  "Response & Workflow",
  "Reports",
  "Settings",
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="h-8 w-8" />
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <span className="hidden text-xl font-bold md:inline-block">UCP</span>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Button key={item} variant="ghost" className="text-sm font-medium">
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-64 rounded-full bg-muted pl-8 md:w-80 lg:w-96" />
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
        <ModeToggle />
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
