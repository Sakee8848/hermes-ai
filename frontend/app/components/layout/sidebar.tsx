"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    ShieldAlert,
    Ship,
    Settings,
    LogOut,
    Map,
    Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: FileText, label: "Bill of Ladings", href: "/dashboard/documents" },
    { icon: ShieldAlert, label: "Risk Analysis", href: "/dashboard/risk" },
    { icon: Ship, label: "Shipments", href: "/dashboard/shipments" },
    { icon: Map, label: "Global Tracker", href: "/dashboard/tracker" },
    { icon: Users, label: "Team", href: "/dashboard/team" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 h-screen fixed left-0 top-0 pt-20 pb-6 px-4 bg-[#020617] border-r border-[#1e293b] flex flex-col z-40 hidden md:flex">
            <div className="flex-1 space-y-2 mt-4">
                <div className="px-2 mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Platform
                    </p>
                </div>

                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                        >
                            <div
                                className={cn(
                                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative overflow-hidden",
                                    isActive
                                        ? "text-white bg-blue-600/10 border border-blue-500/20"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-r-full" />
                                )}
                                <item.icon className={cn("w-5 h-5", isActive ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300")} />
                                <span className="font-medium text-sm">{item.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="pt-6 border-t border-[#1e293b] space-y-2">
                <Link href="/dashboard/settings">
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        <Settings className="w-5 h-5" />
                        <span className="font-medium text-sm">Settings</span>
                    </div>
                </Link>
                <Button variant="ghost" className="w-full justify-start px-3 text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    <LogOut className="w-5 h-5 mr-3" />
                    <span className="font-medium">Logout</span>
                </Button>
            </div>
        </div>
    );
}
