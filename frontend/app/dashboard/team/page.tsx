"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
    Users,
    UserPlus,
    Mail,
    Phone,
    Shield,
    Crown,
    User,
    MoreVertical,
    Search
} from "lucide-react";
import { useState } from "react";

const teamMembers = [
    {
        id: 1,
        name: "Sarah Chen",
        email: "sarah.chen@hermesai.com",
        phone: "+86 138 0013 8888",
        role: "admin",
        department: "Operations",
        avatar: "SC",
        status: "active",
        lastActive: "2 minutes ago"
    },
    {
        id: 2,
        name: "Michael Zhang",
        email: "michael.zhang@hermesai.com",
        phone: "+86 139 0013 9999",
        role: "operator",
        department: "Documentation",
        avatar: "MZ",
        status: "active",
        lastActive: "5 minutes ago"
    },
    {
        id: 3,
        name: "Emily Wang",
        email: "emily.wang@hermesai.com",
        phone: "+86 137 0013 7777",
        role: "operator",
        department: "Customer Service",
        avatar: "EW",
        status: "active",
        lastActive: "1 hour ago"
    },
    {
        id: 4,
        name: "David Liu",
        email: "david.liu@hermesai.com",
        phone: "+86 136 0013 6666",
        role: "viewer",
        department: "Finance",
        avatar: "DL",
        status: "offline",
        lastActive: "Yesterday"
    }
];

const roleConfig = {
    admin: { label: "Admin", icon: Crown, color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
    operator: { label: "Operator", icon: Shield, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    viewer: { label: "Viewer", icon: User, color: "text-gray-400 bg-gray-500/10 border-gray-500/20" }
};

export default function TeamPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMembers = teamMembers.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Team Management</h2>
                    <p className="text-muted-foreground">Manage team members, roles, and permissions.</p>
                </div>
                <Button variant="glow" size="sm">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Invite Member
                </Button>
            </div>

            {/* Team Stats */}
            <div className="grid gap-4 md:grid-cols-3 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{teamMembers.length}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-400">3 active</span> now
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Administrators</CardTitle>
                        <Crown className="h-4 w-4 text-yellow-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-400">
                            {teamMembers.filter(m => m.role === 'admin').length}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Full system access
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Operators</CardTitle>
                        <Shield className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-400">
                            {teamMembers.filter(m => m.role === 'operator').length}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Document management
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Search */}
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or department..."
                            className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Team Members List */}
            <div className="grid gap-4">
                {filteredMembers.map((member) => {
                    const RoleIcon = roleConfig[member.role as keyof typeof roleConfig].icon;
                    return (
                        <Card key={member.id} className="hover:border-blue-500/50 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    {/* Left: Member Info */}
                                    <div className="flex items-center space-x-4">
                                        {/* Avatar */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                            {member.avatar}
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-1">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${roleConfig[member.role as keyof typeof roleConfig].color}`}>
                                                    <RoleIcon className="w-3 h-3 mr-1" />
                                                    {roleConfig[member.role as keyof typeof roleConfig].label}
                                                </span>
                                                {member.status === 'active' && (
                                                    <span className="flex items-center">
                                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-1"></span>
                                                        <span className="text-xs text-green-400">Online</span>
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-400">{member.department}</p>
                                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                <span className="flex items-center">
                                                    <Mail className="w-3 h-3 mr-1" />
                                                    {member.email}
                                                </span>
                                                <span className="flex items-center">
                                                    <Phone className="w-3 h-3 mr-1" />
                                                    {member.phone}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-600">Last active: {member.lastActive}</p>
                                        </div>
                                    </div>

                                    {/* Right: Actions */}
                                    <Button variant="ghost" size="sm">
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredMembers.length === 0 && (
                <Card className="mt-8">
                    <CardContent className="pt-12 pb-12 text-center">
                        <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No team members found</h3>
                        <p className="text-gray-400 mb-6">Try adjusting your search criteria</p>
                    </CardContent>
                </Card>
            )}
        </>
    );
}
