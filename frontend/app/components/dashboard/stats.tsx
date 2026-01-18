import { ArrowUpRight, ArrowDownRight, MoreHorizontal, FileText, CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface StatCardProps {
    title: string;
    value: string;
    trend: string;
    trendUp?: boolean;
    icon: any;
    description: string;
}

export function StatCard({ title, value, trend, trendUp, icon: Icon, description }: StatCardProps) {
    return (
        <Card className="hover:border-blue-500/30 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
                <div className="h-8 w-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-blue-400" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{value}</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    {trendUp ? (
                        <ArrowUpRight className="h-3 w-3 text-green-400 mr-1" />
                    ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-400 mr-1" />
                    )}
                    <span className={trendUp ? "text-green-400" : "text-red-400"}>{trend}</span>
                    <span className="ml-1 opacity-70">{description}</span>
                </p>
            </CardContent>
        </Card>
    );
}

export function RecentShipments() {
    const shipments = [
        { id: "BL-2024-001", origin: "Shanghai, CN", dest: "Los Angeles, US", status: "In Transit", date: "2 mins ago", risk: "Low" },
        { id: "BL-2024-002", origin: "Ningbo, CN", dest: "Rotterdam, NL", status: "Pending Analysis", date: "15 mins ago", risk: "Medium" },
        { id: "BL-2024-003", origin: "Shenzhen, CN", dest: "Jebel Ali, AE", status: "Risk Alert", date: "1 hour ago", risk: "High" },
        { id: "BL-2024-004", origin: "Singapore, SG", dest: "Hamburg, DE", status: "Cleared", date: "3 hours ago", risk: "Low" },
        { id: "BL-2024-005", origin: "Busan, KR", dest: "Vancouver, CA", status: "In Transit", date: "5 hours ago", risk: "Low" },
    ];

    return (
        <Card className="col-span-1 lg:col-span-4">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Recent Shipments</CardTitle>
                    <CardDescription>Real-time processing feed from global agents</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                    View All
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {shipments.map((shipment) => (
                        <div key={shipment.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center space-x-4">
                                <div className={`p-2 rounded-full ${shipment.risk === 'High' ? 'bg-red-500/10 text-red-400' :
                                        shipment.risk === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                                            'bg-green-500/10 text-green-400'
                                    }`}>
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm text-gray-200 group-hover:text-blue-400 transition-colors">{shipment.id}</div>
                                    <div className="text-xs text-gray-500 flex items-center">
                                        {shipment.origin} <span className="mx-1">→</span> {shipment.dest}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="text-right hidden sm:block">
                                    <div className={`text-xs font-medium px-2 py-1 rounded-full border ${shipment.status === 'Risk Alert' ? 'border-red-500/30 text-red-400 bg-red-500/10' :
                                            shipment.status === 'Pending Analysis' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' :
                                                'border-green-500/30 text-green-400 bg-green-500/10'
                                        }`}>
                                        {shipment.status}
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
