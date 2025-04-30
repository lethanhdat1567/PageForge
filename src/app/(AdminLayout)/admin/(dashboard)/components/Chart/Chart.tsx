"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import CustomTooltip from "@/app/(AdminLayout)/admin/(dashboard)/components/Chart/CustomTooltip";

const chartData = [
  { time: "10:00", reserved: 5 },
  { time: "11:00", reserved: 7 },
  { time: "12:00", reserved: 10 },
  { time: "13:00", reserved: 6 },
  { time: "14:00", reserved: 3 },
];

const chartConfig = {
  reserved: {
    label: "Đã đặt",
    color: "#3E8FE4", // đỏ
  },
};

function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Biểu đồ Bàn Đã Đặt</CardTitle>
        <CardDescription>
          Thống kê bàn đã đặt theo giờ trong ngày
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Area
                dataKey="reserved"
                type="monotone"
                stroke={chartConfig.reserved.color}
                fill={chartConfig.reserved.color}
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Chart;
