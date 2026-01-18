"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
    Ship,
    Package,
    MapPin,
    Clock,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    Anchor,
    Navigation,
    Calendar,
    Search,
    Filter,
    Eye,
    Download
} from "lucide-react";

// Mock shipment data
const mockShipments = [
    {
        id: "SHP-2026-001",
        blNumber: "MAEU123456789",
        containerNo: "MAEU1234567",
        status: "in_transit",
        vessel: "MAERSK ESSEX",
        voyage: "424E",
        carrier: "Maersk Line",
        pol: "Shanghai",
        polCountry: "China",
        pod: "Rotterdam",
        podCountry: "Netherlands",
        etd: "2026-01-10",
        eta: "2026-02-15",
        actualDeparture: "2026-01-10",
        currentLocation: "Singapore",
        progress: 45,
        containerType: "40HC",
        weight: "24,500 KG",
        volume: "67.5 CBM",
        commodity: "Electronics"
    },
    {
        id: "SHP-2026-002",
        blNumber: "COSCO987654321",
        containerNo: "COSU9876543",
        status: "at_port",
        vessel: "COSCO SHIPPING ARIES",
        voyage: "033W",
        carrier: "COSCO Shipping",
        pol: "Shenzhen",
        polCountry: "China",
        pod: "Los Angeles",
        podCountry: "USA",
        etd: "2026-01-18",
        eta: "2026-02-08",
        actualDeparture: null,
        currentLocation: "Shenzhen Port",
        progress: 5,
        containerType: "40GP",
        weight: "22,800 KG",
        volume: "65.2 CBM",
        commodity: "Textiles"
    },
    {
        id: "SHP-2026-003",
        blNumber: "OOLU456789123",
        containerNo: "OOLU4567891",
        status: "delivered",
        vessel: "OOCL HONG KONG",
        voyage: "052E",
        carrier: "OOCL",
        pol: "Ningbo",
        polCountry: "China",
        pod: "Hamburg",
        podCountry: "Germany",
        etd: "2025-12-20",
        eta: "2026-01-25",
        actualDeparture: "2025-12-20",
        actualArrival: "2026-01-24",
        currentLocation: "Hamburg",
        progress: 100,
        containerType: "20GP",
        weight: "18,200 KG",
        volume: "28.3 CBM",
        commodity: "Machinery Parts"
    },
    {
        id: "SHP-2026-004",
        blNumber: "HLCU789456123",
        containerNo: "HLCU7894561",
        status: "delayed",
        vessel: "HAPAG LLOYD EXPRESS",
        voyage: "018W",
        carrier: "Hapag-Lloyd",
        pol: "Guangzhou",
        polCountry: "China",
        pod: "Dubai",
        podCountry: "UAE",
        etd: "2026-01-05",
        eta: "2026-01-28",
        actualDeparture: "2026-01-07",
        currentLocation: "Colombo",
        progress: 60,
        containerType: "40HC",
        weight: "25,100 KG",
        volume: "68.0 CBM",
        commodity: "Auto Parts",
        delayReason: "Port congestion"
    }
];

const statusConfig = {
    at_port: { label: "At Port", color: "text-blue-400 bg-blue-500/10 border-blue-500/20", icon: Anchor },
    in_transit: { label: "In Transit", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20", icon: Ship },
    delayed: { label: "Delayed", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", icon: AlertCircle },
    delivered: { label: "Delivered", color: "text-green-400 bg-green-500/10 border-green-500/20", icon: CheckCircle }
};

export default function ShipmentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");

    const filteredShipments = mockShipments.filter(shipment => {
        const matchesSearch = shipment.blNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shipment.containerNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shipment.vessel.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === "all" || shipment.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Shipment Tracking</h2>
                    <p className="text-muted-foreground">Real-time visibility of your global shipments and containers.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export Data
                    </Button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
                        <Ship className="h-4 w-4 text-cyan-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">432</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-cyan-400">+18%</span> from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">In Transit</CardTitle>
                        <Navigation className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-400">287</div>
                        <p className="text-xs text-muted-foreground">
                            66% of active shipments
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Delayed</CardTitle>
                        <AlertCircle className="h-4 w-4 text-yellow-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-400">23</div>
                        <p className="text-xs text-muted-foreground">
                            Avg delay: 2.3 days
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">On-Time Rate</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-400">94.7%</div>
                        <p className="text-xs text-green-400 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +1.2% improvement
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search by B/L, container number, or vessel..."
                                className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-500" />
                            <select
                                className="px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="at_port">At Port</option>
                                <option value="in_transit">In Transit</option>
                                <option value="delayed">Delayed</option>
                                <option value="delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Shipments List */}
            <div className="grid gap-4">
                {filteredShipments.map((shipment) => {
                    const StatusIcon = statusConfig[shipment.status as keyof typeof statusConfig].icon;
                    return (
                        <Card key={shipment.id} className="hover:border-cyan-500/50 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <h3 className="text-lg font-semibold">{shipment.blNumber}</h3>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusConfig[shipment.status as keyof typeof statusConfig].color}`}>
                                                    <StatusIcon className="w-3 h-3 mr-1" />
                                                    {statusConfig[shipment.status as keyof typeof statusConfig].label}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-400">Container: {shipment.containerNo} • {shipment.containerType}</p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            <Eye className="mr-2 h-4 w-4" />
                                            Track
                                        </Button>
                                    </div>

                                    {/* Vessel Info */}
                                    <div className="flex items-center space-x-6 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Ship className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">{shipment.vessel}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Package className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">{shipment.commodity}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-gray-500">Weight:</span>
                                            <span className="text-gray-300">{shipment.weight}</span>
                                        </div>
                                    </div>

                                    {/* Route Progress */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="w-4 h-4 text-blue-400" />
                                                <span className="font-medium">{shipment.pol}, {shipment.polCountry}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="w-4 h-4 text-green-400" />
                                                <span className="font-medium">{shipment.pod}, {shipment.podCountry}</span>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="relative">
                                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${shipment.status === 'delayed' ? 'bg-yellow-500' :
                                                        shipment.status === 'delivered' ? 'bg-green-500' : 'bg-cyan-500'
                                                        }`}
                                                    style={{ width: `${shipment.progress}%` }}
                                                />
                                            </div>
                                            {shipment.currentLocation && shipment.status !== 'delivered' && (
                                                <div
                                                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                                                    style={{ left: `${shipment.progress}%` }}
                                                >
                                                    <div className="relative">
                                                        <div className="w-4 h-4 rounded-full bg-cyan-500 border-2 border-background animate-pulse" />
                                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 px-2 py-1 rounded text-xs">
                                                            {shipment.currentLocation}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span>ETD: {shipment.etd}</span>
                                            <span>{shipment.progress}% Complete</span>
                                            <span>ETA: {shipment.eta}</span>
                                        </div>
                                    </div>

                                    {/* Delay Warning */}
                                    {shipment.status === 'delayed' && shipment.delayReason && (
                                        <div className="flex items-center space-x-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                            <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                            <span className="text-sm text-yellow-400">Delay: {shipment.delayReason}</span>
                                        </div>
                                    )}

                                    {/* Delivery Confirmation */}
                                    {shipment.status === 'delivered' && shipment.actualArrival && (
                                        <div className="flex items-center space-x-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                            <span className="text-sm text-green-400">Delivered on {shipment.actualArrival}</span>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredShipments.length === 0 && (
                <Card className="mt-8">
                    <CardContent className="pt-12 pb-12 text-center">
                        <Ship className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No shipments found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                    </CardContent>
                </Card>
            )}
        </>
    );
}
