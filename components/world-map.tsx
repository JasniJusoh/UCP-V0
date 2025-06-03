"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

// Simplified world map data - just for visualization
const threatLocations = [
  { lat: 37.7749, lng: -122.4194, country: "USA", threats: 12 }, // San Francisco
  { lat: 51.5074, lng: -0.1278, country: "UK", threats: 8 }, // London
  { lat: 39.9042, lng: 116.4074, country: "China", threats: 15 }, // Beijing
  { lat: 55.7558, lng: 37.6173, country: "Russia", threats: 10 }, // Moscow
  { lat: -33.8688, lng: 151.2093, country: "Australia", threats: 5 }, // Sydney
]

export function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedThreat, setSelectedThreat] = useState<{
    country: string
    threats: number
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Draw simplified world map (just a blue background)
    ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let i = 0; i < canvas.height; i += 30) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(canvas.width, i)
      ctx.stroke()
    }

    // Vertical grid lines
    for (let i = 0; i < canvas.width; i += 30) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, canvas.height)
      ctx.stroke()
    }

    // Draw threat locations
    threatLocations.forEach((location) => {
      // Convert lat/lng to x/y (simplified)
      const x = ((location.lng + 180) / 360) * canvas.width
      const y = ((90 - location.lat) / 180) * canvas.height

      // Draw threat point
      ctx.beginPath()
      ctx.arc(x, y, location.threats / 2 + 3, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(220, 38, 38, 0.7)"
      ctx.fill()

      // Draw pulse effect
      ctx.beginPath()
      ctx.arc(x, y, location.threats / 2 + 8, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(220, 38, 38, 0.2)"
      ctx.fill()
    })

    // Add click handler to show threat details
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Check if click is near any threat location
      for (const location of threatLocations) {
        const threatX = ((location.lng + 180) / 360) * canvas.width
        const threatY = ((90 - location.lat) / 180) * canvas.height
        const distance = Math.sqrt(Math.pow(threatX - x, 2) + Math.pow(threatY - y, 2))

        if (distance < location.threats / 2 + 10) {
          setSelectedThreat({
            country: location.country,
            threats: location.threats,
            x: threatX,
            y: threatY,
          })
          return
        }
      }

      setSelectedThreat(null)
    }

    canvas.addEventListener("click", handleClick)

    return () => {
      canvas.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-b-lg">
      <canvas ref={canvasRef} className="h-full w-full cursor-pointer"></canvas>
      {selectedThreat && (
        <div
          className="absolute z-10 rounded-md border bg-popover p-2 text-sm shadow-md"
          style={{
            left: `${selectedThreat.x}px`,
            top: `${selectedThreat.y + 20}px`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="font-medium">{selectedThreat.country}</div>
          <div className="flex items-center gap-2">
            <span>Active threats:</span>
            <Badge variant="destructive">{selectedThreat.threats}</Badge>
          </div>
        </div>
      )}
      <div className="absolute bottom-2 right-2 rounded-md bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
        Click on threat points to view details
      </div>
    </div>
  )
}
