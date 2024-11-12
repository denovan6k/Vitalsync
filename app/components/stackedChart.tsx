"use client"

import { useState } from "react"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const generateChartData = (month:any) => {
  const daysInMonth = new Date(2024, month, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, i) => ({
    date: `2024-${String(month).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`,
    running: Math.floor(Math.random() * 300) + 100,
    swimming: Math.floor(Math.random() * 300) + 100,
    jogging: Math.floor(Math.random() * 300) + 100,
  }))
}

const chartConfig = {
  activities: {
    label: "Activities",
  },
  running: {
    label: "Running",
    color: "hsl(210, 100%, 50%)", // Blue
  },
  swimming: {
    label: "Swimming",
    color: "hsl(25, 100%, 85%)", // Peach
  },
  jogging: {
    label: "Jogging",
    color: "hsl(30, 100%, 50%)", // Orange
  },
} satisfies ChartConfig

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export default function Chart() {
  const [selectedMonth, setSelectedMonth] = useState(1) // January by default
  const chartData = generateChartData(selectedMonth)

  return (
    <Card className="w-full shadow-custom-black  ">
      <CardHeader>
        <CardTitle>Activity Growth</CardTitle>
        <CardDescription>
          Running, swimming, and jogging activities for the selected month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select
            value={selectedMonth.toString()}
            onValueChange={(value) => setSelectedMonth(parseInt(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month, index) => (
                <SelectItem key={index + 1} value={(index + 1).toString()}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  day: "numeric",
                })
              }}
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill="var(--color-running)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="var(--color-swimming)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="jogging"
              stackId="a"
              fill="var(--color-jogging)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent labelKey="activities" indicator="line" />
              }
              cursor={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}