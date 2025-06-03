import * as React from "react"

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div className="rounded-md border" ref={ref} {...props} />
})
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  { data: any[]; render: (props: { formatter: (value: any) => string }) => React.ReactNode }
>(({ data, render, className, ...props }, ref) => {
  const formatter = (value: any) => value.toString()
  return (
    <div ref={ref} {...props}>
      {render({ formatter })}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, { formatter: (value: any) => string[] }>(
  ({ formatter }, ref) => {
    return (
      <div className="rounded-md border bg-popover p-4 shadow-sm">
        <div className="grid gap-1">
          <div className="font-semibold">{formatter("100")[0]}</div>
          <p className="text-xs text-muted-foreground">{formatter("100")[1]}</p>
        </div>
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} {...props} />
  },
)
ChartTooltip.displayName = "ChartTooltip"

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent }
