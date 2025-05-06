'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import CustomTooltip from '@/app/(AdminLayout)/admin/(dashboard)/components/Chart/CustomTooltip';

const chartData = [
    { time: '10:00', user: 1 },
    { time: '11:00', user: 7 },
    { time: '12:00', user: 10 },
    { time: '13:00', user: 6 },
    { time: '14:00', user: 3 },
];

const chartConfig = {
    user: {
        label: 'Người dùng mới',
        color: '#3E8FE4',
    },
};

function Chart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Biểu đồ người dùng mới</CardTitle>
                <CardDescription>Thống kê người dùng mới theo giờ trong ngày</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-60 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
                            <YAxis />
                            <Tooltip content={<CustomTooltip title="người dùng mới" />} />
                            <Area
                                dataKey="user"
                                type="monotone"
                                stroke={chartConfig.user.color}
                                fill={chartConfig.user.color}
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
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">January - June 2024</div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default Chart;
