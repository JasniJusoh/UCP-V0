"use client"

import { useState } from "react"
import { Bot, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface AiAssistantProps {
  onClose: () => void
}

export function AiAssistant({ onClose }: AiAssistantProps) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your UCP AI Assistant. How can I help you with Acme Corp's security needs today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      let response = ""
      if (input.toLowerCase().includes("risk")) {
        response =
          "Acme Corp's current risk score is 72/100. There are 3 high-risk items that need attention in the compliance module."
      } else if (input.toLowerCase().includes("threat")) {
        response =
          "There are 7 active threats in Acme Corp's environment. 2 are critical and require immediate attention."
      } else if (input.toLowerCase().includes("workflow")) {
        response =
          "I can help you create a new security workflow for Acme Corp. Would you like to start with an incident response template or build one from scratch?"
      } else {
        response =
          "I can provide information about Acme Corp's security posture, help with workflows, or explain any metrics you see on the dashboard. What specific area would you like to know more about?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setInput("")
  }

  return (
    <Card className="fixed bottom-20 right-6 z-50 w-72 shadow-lg md:w-80">
      <CardHeader className="flex flex-row items-center justify-between p-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Bot className="h-5 w-5 text-green-500" />
          UCP Assistant
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-64 overflow-y-auto p-3">
          {messages.map((message, i) => (
            <div key={i} className={`mb-3 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-2 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t p-3">
          <Input
            placeholder="Ask about security..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="h-9"
          />
          <Button size="icon" className="h-9 w-9 rounded-full bg-green-600 hover:bg-green-700" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
