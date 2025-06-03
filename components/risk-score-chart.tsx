"use client"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan", score: 65 },
  { date: "Feb", score: 59 },
  { date: "Mar", score: 62 },
  { date: "Apr", score: 68 },
  { date: "May", score: 71 },
  { date: "Jun", score: 66 },
  { date: "Jul", score: 70 },
  { date: "Aug", score: 72 },
]

export function RiskScoreChart() {
  return (
    <div className="h-[200px] w-full">
      <Chart>
        <ChartContainer
          data={data}
          render={({ formatter }) => (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                <XAxis dataKey="date" className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
                <YAxis
                  className="text-xs text-muted-foreground"
                  tickLine={false}
                  axisLine={false}
                  domain={[50, 100]}
                  ticks={[50, 60, 70, 80, 90, 100]}
                />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => [`${value}`, "Risk Score"]} />} />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorScore)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        />
      </Chart>
    </div>
  )
}
