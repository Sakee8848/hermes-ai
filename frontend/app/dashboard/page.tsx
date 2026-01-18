"use client";

import { StatCard, RecentShipments } from "@/app/components/dashboard/stats";
import {
    FileText,
    ShieldCheck,
    AlertTriangle,
    Activity,
    Plus
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function DashboardPage() {
    return (
        <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground">Overview of your global logistics operations.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        Export Report
                    </Button>
                    <Button variant="glow" size="sm">
                        <Plus className="mr-2 h-4 w-4" /> New Shipment
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Shipments"
                    value="1,284"
                    trend="+12.5%"
                    trendUp={true}
                    icon={FileText}
                    description="from last month"
                />
                <StatCard
                    title="Risk Alerts"
                    value="23"
                    trend="+4.1%"
                    trendUp={false}
                    icon={AlertTriangle}
                    description="requiring attention"
                />
                <StatCard
                    title="Compliance Rate"
                    value="98.2%"
                    trend="+0.4%"
                    trendUp={true}
                    icon={ShieldCheck}
                    description="automated checks passed"
                />
                <StatCard
                    title="Active Monitoring"
                    value="432"
                    trend="+18%"
                    trendUp={true}
                    icon={Activity}
                    description="live tracking feeds"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
                <RecentShipments />

                {/* Quick Actions / System Status Side Panel */}
                <Card className="col-span-1 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>System Health</CardTitle>
                        <CardDescription>Real-time AI Processing Status</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {/* Status Item 1 */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">LLM Processing Queue</span>
                                    <span className="text-blue-400 font-bold">Idle</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[5%] rounded-full" />
                                </div>
                            </div>

                            {/* Status Item 2 */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Risk Analysis Engine</span>
                                    <span className="text-green-400 font-bold">Active</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[92%] rounded-full animate-pulse" />
                                </div>
                            </div>

                            {/* Status Item 3 */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">API Latency (Global)</span>
                                    <span className="text-gray-200 font-bold">124ms</span>
                                </div>
                                <div className="h-32 rounded-lg border border-white/5 bg-black/20 flex items-end justify-between p-2 gap-1 overflow-hidden">
                                    {[40, 60, 45, 70, 30, 50, 80, 55, 65, 40].map((h, i) => (
                                        <div key={i} className="w-full bg-blue-500/20 hover:bg-blue-500/50 transition-colors rounded-sm" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
