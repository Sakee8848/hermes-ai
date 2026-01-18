"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
    ShieldAlert,
    AlertTriangle,
    CheckCircle,
    TrendingUp,
    TrendingDown,
    Globe,
    Package,
    Ship,
    DollarSign,
    Bot,
    Eye,
    Download,
    RefreshCw
} from "lucide-react";

// Mock risk analysis data
const riskAlerts = [
    {
        id: "RISK-001",
        shipmentId: "BL-2024-004",
        severity: "high",
        category: "Compliance",
        title: "Potential Sanctions Match Detected",
        description: "Consignee name partially matches entity on OFAC sanctions list. Manual review required.",
        aiConfidence: 87,
        createdAt: "2024-01-17 14:30",
        status: "pending"
    },
    {
        id: "RISK-002",
        shipmentId: "BL-2024-003",
        severity: "medium",
        category: "Documentation",
        title: "HS Code Classification Uncertainty",
        description: "AI detected ambiguous product description. Recommended HS code: 8471.30, confidence: 78%",
        aiConfidence: 78,
        createdAt: "2024-01-17 12:15",
        status: "under_review"
    },
    {
        id: "RISK-003",
        shipmentId: "BL-2024-002",
        severity: "low",
        category: "Route",
        title: "Weather Delay Prediction",
        description: "Tropical storm forecast along route. Estimated delay: 2-3 days.",
        aiConfidence: 92,
        createdAt: "2024-01-17 09:45",
        status: "acknowledged"
    },
    {
        id: "RISK-004",
        shipmentId: "BL-2024-001",
        severity: "medium",
        category: "Financial",
        title: "Currency Fluctuation Alert",
        description: "EUR/USD volatility detected. Potential impact on freight charges.",
        aiConfidence: 85,
        createdAt: "2024-01-16 16:20",
        status: "resolved"
    }
];

const riskMetrics = {
    totalAlerts: 23,
    highSeverity: 4,
    mediumSeverity: 12,
    lowSeverity: 7,
    resolvedToday: 8,
    avgResolutionTime: "2.4 hours",
    aiAccuracy: 94.2
};

const severityConfig = {
    high: { label: "High", color: "text-red-400 bg-red-500/10 border-red-500/20", icon: AlertTriangle },
    medium: { label: "Medium", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", icon: AlertTriangle },
    low: { label: "Low", color: "text-blue-400 bg-blue-500/10 border-blue-500/20", icon: AlertTriangle }
};

const statusConfig = {
    pending: { label: "Pending", color: "text-gray-400" },
    under_review: { label: "Under Review", color: "text-yellow-400" },
    acknowledged: { label: "Acknowledged", color: "text-blue-400" },
    resolved: { label: "Resolved", color: "text-green-400" }
};

export default function RiskAnalysisPage() {
    const [selectedSeverity, setSelectedSeverity] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredAlerts = riskAlerts.filter(alert => {
        const matchesSeverity = selectedSeverity === "all" || alert.severity === selectedSeverity;
        const matchesCategory = selectedCategory === "all" || alert.category === selectedCategory;
        return matchesSeverity && matchesCategory;
    });

    return (
        <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Risk Analysis & Compliance</h2>
                    <p className="text-muted-foreground">AI-powered risk detection and compliance monitoring for your shipments.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                    <Button variant="glow" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Scan All
                    </Button>
                </div>
            </div>

            {/* Risk Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
                        <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{riskMetrics.totalAlerts}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-red-400 font-medium">{riskMetrics.highSeverity} high</span> priority
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-400">{riskMetrics.resolvedToday}</div>
                        <p className="text-xs text-muted-foreground">
                            Avg time: {riskMetrics.avgResolutionTime}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
                        <Bot className="h-4 w-4 text-purple-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-purple-400">{riskMetrics.aiAccuracy}%</div>
                        <p className="text-xs text-green-400 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +2.1% from last week
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-400">Medium</div>
                        <p className="text-xs text-muted-foreground">
                            Portfolio risk level
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* AI Analysis Banner */}
            <Card className="mb-6 border-purple-500/20 bg-purple-500/5">
                <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-purple-500/10">
                            <Bot className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-purple-400 mb-1">AI Risk Engine Active</h3>
                            <p className="text-sm text-gray-400">
                                Continuously monitoring shipments against global sanctions lists, customs regulations, and route conditions.
                                Last scan: <span className="text-purple-400 font-medium">2 minutes ago</span>
                            </p>
                        </div>
                        <Button variant="outline" size="sm" className="border-purple-500/20 text-purple-400 hover:bg-purple-500/10">
                            View Details
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Filters */}
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">Severity:</span>
                            <select
                                className="px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                value={selectedSeverity}
                                onChange={(e) => setSelectedSeverity(e.target.value)}
                            >
                                <option value="all">All Levels</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">Category:</span>
                            <select
                                className="px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="all">All Categories</option>
                                <option value="Compliance">Compliance</option>
                                <option value="Documentation">Documentation</option>
                                <option value="Route">Route</option>
                                <option value="Financial">Financial</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Risk Alerts */}
            <div className="grid gap-4">
                {filteredAlerts.map((alert) => {
                    const SeverityIcon = severityConfig[alert.severity as keyof typeof severityConfig].icon;
                    return (
                        <Card key={alert.id} className="hover:border-purple-500/50 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                                    {/* Left: Alert Info */}
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${severityConfig[alert.severity as keyof typeof severityConfig].color}`}>
                                                        <SeverityIcon className="w-3 h-3 mr-1" />
                                                        {severityConfig[alert.severity as keyof typeof severityConfig].label}
                                                    </span>
                                                    <span className="text-xs text-gray-500">{alert.category}</span>
                                                    <span className={`text-xs font-medium ${statusConfig[alert.status as keyof typeof statusConfig].color}`}>
                                                        {statusConfig[alert.status as keyof typeof statusConfig].label}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold mb-1">{alert.title}</h3>
                                                <p className="text-sm text-gray-400 mb-2">{alert.description}</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                    <span>Shipment: <span className="text-blue-400 font-medium">{alert.shipmentId}</span></span>
                                                    <span>•</span>
                                                    <span>Alert ID: {alert.id}</span>
                                                    <span>•</span>
                                                    <span>{alert.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AI Confidence */}
                                        <div className="flex items-center space-x-3">
                                            <Bot className="w-4 h-4 text-purple-400" />
                                            <span className="text-sm text-gray-500">AI Confidence:</span>
                                            <div className="flex-1 max-w-xs">
                                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-purple-500 rounded-full"
                                                        style={{ width: `${alert.aiConfidence}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold text-purple-400">{alert.aiConfidence}%</span>
                                        </div>
                                    </div>

                                    {/* Right: Actions */}
                                    <div className="flex lg:flex-col items-center lg:items-end space-x-2 lg:space-x-0 lg:space-y-2">
                                        <Button variant="outline" size="sm" className="flex-1 lg:flex-none lg:w-40">
                                            <Eye className="mr-2 h-4 w-4" />
                                            View Details
                                        </Button>
                                        {alert.status === "pending" && (
                                            <Button variant="glow" size="sm" className="flex-1 lg:flex-none lg:w-40">
                                                <CheckCircle className="mr-2 h-4 w-4" />
                                                Acknowledge
                                            </Button>
                                        )}
                                        {alert.status === "under_review" && (
                                            <Button variant="outline" size="sm" className="flex-1 lg:flex-none lg:w-40 border-green-500/20 text-green-400 hover:bg-green-500/10">
                                                <CheckCircle className="mr-2 h-4 w-4" />
                                                Mark Resolved
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredAlerts.length === 0 && (
                <Card className="mt-8">
                    <CardContent className="pt-12 pb-12 text-center">
                        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No risk alerts found</h3>
                        <p className="text-gray-400 mb-6">All shipments are compliant with current filters</p>
                    </CardContent>
                </Card>
            )}
        </>
    );
}
