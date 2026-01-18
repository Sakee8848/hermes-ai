"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
    FileText,
    Upload,
    Search,
    Filter,
    Download,
    Eye,
    Edit,
    Trash2,
    Plus,
    CheckCircle,
    Clock,
    AlertTriangle,
    Bot
} from "lucide-react";

// Mock data for B/L documents
const mockDocuments = [
    {
        id: "BL-2024-001",
        blNumber: "MAEU123456789",
        shipper: "Shanghai Export Co., Ltd.",
        consignee: "Rotterdam Import GmbH",
        vessel: "MAERSK ESSEX",
        voyage: "424E",
        pol: "Shanghai, China",
        pod: "Rotterdam, Netherlands",
        status: "issued",
        createdAt: "2024-01-15",
        aiProcessed: true,
        complianceScore: 98
    },
    {
        id: "BL-2024-002",
        blNumber: "COSCO987654321",
        shipper: "Shenzhen Tech Manufacturing",
        consignee: "Los Angeles Distributors Inc.",
        vessel: "COSCO SHIPPING ARIES",
        voyage: "033W",
        pol: "Shenzhen, China",
        pod: "Los Angeles, USA",
        status: "draft",
        createdAt: "2024-01-16",
        aiProcessed: true,
        complianceScore: 95
    },
    {
        id: "BL-2024-003",
        blNumber: "OOLU456789123",
        shipper: "Ningbo Textiles Export",
        consignee: "Hamburg Trading AG",
        vessel: "OOCL HONG KONG",
        voyage: "052E",
        pol: "Ningbo, China",
        pod: "Hamburg, Germany",
        status: "pending_review",
        createdAt: "2024-01-17",
        aiProcessed: true,
        complianceScore: 92
    },
    {
        id: "BL-2024-004",
        blNumber: "HLCU789456123",
        shipper: "Guangzhou Auto Parts Ltd.",
        consignee: "Dubai Logistics Center",
        vessel: "HAPAG LLOYD EXPRESS",
        voyage: "018W",
        pol: "Guangzhou, China",
        pod: "Dubai, UAE",
        status: "amendment_required",
        createdAt: "2024-01-14",
        aiProcessed: true,
        complianceScore: 78
    }
];

const statusConfig = {
    issued: { label: "Issued", color: "text-green-400 bg-green-500/10 border-green-500/20", icon: CheckCircle },
    draft: { label: "Draft", color: "text-blue-400 bg-blue-500/10 border-blue-500/20", icon: Edit },
    pending_review: { label: "Pending Review", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", icon: Clock },
    amendment_required: { label: "Amendment Required", color: "text-red-400 bg-red-500/10 border-red-500/20", icon: AlertTriangle }
};

export default function DocumentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");

    const filteredDocuments = mockDocuments.filter(doc => {
        const matchesSearch = doc.blNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.shipper.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.consignee.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === "all" || doc.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Bill of Lading Management</h2>
                    <p className="text-muted-foreground">Create, manage, and track your shipping documents with AI assistance.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload SI
                    </Button>
                    <Button variant="glow" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        New B/L
                    </Button>
                </div>
            </div>

            {/* AI Processing Banner */}
            <Card className="mb-6 border-blue-500/20 bg-blue-500/5">
                <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-blue-500/10">
                            <Bot className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-blue-400 mb-1">AI Document Processing Active</h3>
                            <p className="text-sm text-gray-400">
                                Our AI automatically extracts data from uploaded documents, validates compliance, and suggests improvements.
                                Average processing time: <span className="text-blue-400 font-medium">0.8 seconds</span>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Filters */}
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search by B/L number, shipper, or consignee..."
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
                                <option value="issued">Issued</option>
                                <option value="draft">Draft</option>
                                <option value="pending_review">Pending Review</option>
                                <option value="amendment_required">Amendment Required</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Documents Grid */}
            <div className="grid gap-4">
                {filteredDocuments.map((doc) => {
                    const StatusIcon = statusConfig[doc.status as keyof typeof statusConfig].icon;
                    return (
                        <Card key={doc.id} className="hover:border-blue-500/50 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                                    {/* Left: Document Info */}
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h3 className="text-lg font-semibold">{doc.blNumber}</h3>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusConfig[doc.status as keyof typeof statusConfig].color}`}>
                                                        <StatusIcon className="w-3 h-3 mr-1" />
                                                        {statusConfig[doc.status as keyof typeof statusConfig].label}
                                                    </span>
                                                    {doc.aiProcessed && (
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                                            <Bot className="w-3 h-3 mr-1" />
                                                            AI Processed
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-400">Document ID: {doc.id}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div>
                                                <span className="text-gray-500">Shipper:</span>
                                                <p className="text-gray-200 font-medium">{doc.shipper}</p>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Consignee:</span>
                                                <p className="text-gray-200 font-medium">{doc.consignee}</p>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Vessel/Voyage:</span>
                                                <p className="text-gray-200 font-medium">{doc.vessel} / {doc.voyage}</p>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Route:</span>
                                                <p className="text-gray-200 font-medium">{doc.pol} → {doc.pod}</p>
                                            </div>
                                        </div>

                                        {/* Compliance Score */}
                                        <div className="flex items-center space-x-3">
                                            <span className="text-sm text-gray-500">Compliance Score:</span>
                                            <div className="flex-1 max-w-xs">
                                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${doc.complianceScore >= 95 ? 'bg-green-500' :
                                                            doc.complianceScore >= 85 ? 'bg-blue-500' :
                                                                doc.complianceScore >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                                                            }`}
                                                        style={{ width: `${doc.complianceScore}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <span className={`text-sm font-bold ${doc.complianceScore >= 95 ? 'text-green-400' :
                                                doc.complianceScore >= 85 ? 'text-blue-400' :
                                                    doc.complianceScore >= 75 ? 'text-yellow-400' : 'text-red-400'
                                                }`}>
                                                {doc.complianceScore}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Actions */}
                                    <div className="flex lg:flex-col items-center lg:items-end space-x-2 lg:space-x-0 lg:space-y-2">
                                        <Button variant="outline" size="sm" className="flex-1 lg:flex-none lg:w-32">
                                            <Eye className="mr-2 h-4 w-4" />
                                            View
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1 lg:flex-none lg:w-32">
                                            <Edit className="mr-2 h-4 w-4" />
                                            Edit
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1 lg:flex-none lg:w-32">
                                            <Download className="mr-2 h-4 w-4" />
                                            Export
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredDocuments.length === 0 && (
                <Card className="mt-8">
                    <CardContent className="pt-12 pb-12 text-center">
                        <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No documents found</h3>
                        <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                        <Button variant="glow">
                            <Plus className="mr-2 h-4 w-4" />
                            Create New B/L
                        </Button>
                    </CardContent>
                </Card>
            )}
        </>
    );
}
