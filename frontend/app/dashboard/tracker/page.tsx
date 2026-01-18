"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
    Globe,
    MapPin,
    Ship,
    Anchor,
    Navigation,
    TrendingUp,
    Activity,
    Zap
} from "lucide-react";

export default function TrackerPage() {
    return (
        <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Global Shipment Tracker</h2>
                    <p className="text-muted-foreground">Real-time visualization of worldwide shipment movements.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Activity className="mr-2 h-4 w-4" />
                        Live Feed
                    </Button>
                    <Button variant="glow" size="sm">
                        <Zap className="mr-2 h-4 w-4" />
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Map Placeholder */}
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-950/50 to-cyan-950/30 rounded-lg border border-blue-500/20 overflow-hidden">
                        {/* Simulated World Map */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Globe className="w-64 h-64 text-blue-500/20 animate-pulse" />
                        </div>

                        {/* Active Shipment Markers */}
                        <div className="absolute top-1/4 left-1/4 animate-ping">
                            <div className="w-4 h-4 rounded-full bg-cyan-500 opacity-75"></div>
                        </div>
                        <div className="absolute top-1/3 right-1/3 animate-ping" style={{ animationDelay: '0.5s' }}>
                            <div className="w-4 h-4 rounded-full bg-green-500 opacity-75"></div>
                        </div>
                        <div className="absolute bottom-1/3 left-1/2 animate-ping" style={{ animationDelay: '1s' }}>
                            <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-75"></div>
                        </div>

                        {/* Info Overlay */}
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                            <h3 className="text-sm font-semibold mb-2 flex items-center">
                                <Activity className="w-4 h-4 mr-2 text-cyan-400" />
                                Live Tracking
                            </h3>
                            <div className="space-y-1 text-xs">
                                <div className="flex items-center justify-between space-x-4">
                                    <span className="text-gray-400">Active Vessels:</span>
                                    <span className="text-cyan-400 font-bold">432</span>
                                </div>
                                <div className="flex items-center justify-between space-x-4">
                                    <span className="text-gray-400">In Transit:</span>
                                    <span className="text-green-400 font-bold">287</span>
                                </div>
                                <div className="flex items-center justify-between space-x-4">
                                    <span className="text-gray-400">At Port:</span>
                                    <span className="text-yellow-400 font-bold">145</span>
                                </div>
                            </div>
                        </div>

                        {/* Coming Soon Badge */}
                        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg px-4 py-2">
                            <p className="text-sm font-semibold">🚀 Interactive Map Coming Soon</p>
                            <p className="text-xs text-blue-100">Real-time vessel positions powered by AIS data</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Regional Statistics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Asia-Pacific</CardTitle>
                        <MapPin className="h-4 w-4 text-cyan-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">187</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-cyan-400">43%</span> of total
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Europe</CardTitle>
                        <MapPin className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">124</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-blue-400">29%</span> of total
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Americas</CardTitle>
                        <MapPin className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">89</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-400">21%</span> of total
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Middle East</CardTitle>
                        <MapPin className="h-4 w-4 text-yellow-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-yellow-400">7%</span> of total
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Major Routes */}
            <Card>
                <CardHeader>
                    <CardTitle>Top Trade Routes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            { route: "Shanghai → Rotterdam", shipments: 87, trend: "+12%" },
                            { route: "Shenzhen → Los Angeles", shipments: 64, trend: "+8%" },
                            { route: "Ningbo → Hamburg", shipments: 52, trend: "+15%" },
                            { route: "Guangzhou → Dubai", shipments: 38, trend: "+5%" },
                            { route: "Qingdao → New York", shipments: 29, trend: "+3%" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                        <Navigation className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{item.route}</p>
                                        <p className="text-xs text-gray-500">{item.shipments} active shipments</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-green-400 text-sm font-medium">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>{item.trend}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
