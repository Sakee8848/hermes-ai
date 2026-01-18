"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
    Settings,
    User,
    Bell,
    Shield,
    Globe,
    Palette,
    Database,
    Key,
    Save,
    RefreshCw
} from "lucide-react";

export default function SettingsPage() {
    return (
        <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                    <p className="text-muted-foreground">Manage your account and system preferences.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reset
                    </Button>
                    <Button variant="glow" size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                    </Button>
                </div>
            </div>

            <div className="grid gap-6">
                {/* Profile Settings */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <User className="w-5 h-5 text-blue-400" />
                            <CardTitle>Profile Settings</CardTitle>
                        </div>
                        <CardDescription>Manage your personal information and preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    defaultValue="Admin User"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    defaultValue="admin@hermesai.com"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    defaultValue="+86 138 0000 0000"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Department</label>
                                <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Operations</option>
                                    <option>Documentation</option>
                                    <option>Customer Service</option>
                                    <option>Finance</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <Bell className="w-5 h-5 text-yellow-400" />
                            <CardTitle>Notifications</CardTitle>
                        </div>
                        <CardDescription>Configure how you receive alerts and updates</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { label: "Email Notifications", description: "Receive updates via email" },
                            { label: "Risk Alerts", description: "Get notified about high-priority risks" },
                            { label: "Shipment Updates", description: "Track shipment status changes" },
                            { label: "Document Approvals", description: "Notifications for pending approvals" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                                <div>
                                    <p className="font-medium">{item.label}</p>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Security Settings */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-green-400" />
                            <CardTitle>Security</CardTitle>
                        </div>
                        <CardDescription>Manage your account security and authentication</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-400 mb-2 block">Current Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">New Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Confirm Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        <Button variant="outline" className="w-full md:w-auto">
                            <Key className="mr-2 h-4 w-4" />
                            Update Password
                        </Button>
                    </CardContent>
                </Card>

                {/* System Preferences */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <Settings className="w-5 h-5 text-purple-400" />
                            <CardTitle>System Preferences</CardTitle>
                        </div>
                        <CardDescription>Customize your platform experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block flex items-center">
                                    <Globe className="w-4 h-4 mr-2" />
                                    Language
                                </label>
                                <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>English</option>
                                    <option>中文 (Chinese)</option>
                                    <option>Español (Spanish)</option>
                                    <option>Français (French)</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block flex items-center">
                                    <Palette className="w-4 h-4 mr-2" />
                                    Theme
                                </label>
                                <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Dark (Default)</option>
                                    <option>Light</option>
                                    <option>Auto</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Timezone</label>
                                <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>UTC+8 (Beijing)</option>
                                    <option>UTC+0 (London)</option>
                                    <option>UTC-5 (New York)</option>
                                    <option>UTC-8 (Los Angeles)</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Date Format</label>
                                <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>YYYY-MM-DD</option>
                                    <option>DD/MM/YYYY</option>
                                    <option>MM/DD/YYYY</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* API & Integrations */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <Database className="w-5 h-5 text-cyan-400" />
                            <CardTitle>API & Integrations</CardTitle>
                        </div>
                        <CardDescription>Manage API keys and third-party integrations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-cyan-400">API Key</span>
                                <Button variant="outline" size="sm" className="border-cyan-500/20 text-cyan-400">
                                    Regenerate
                                </Button>
                            </div>
                            <code className="text-sm text-gray-400 font-mono">herm_live_sk_••••••••••••••••••••••••••1234</code>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400">Connected Services:</p>
                            <div className="flex flex-wrap gap-2">
                                {['Maersk API', 'COSCO EDI', 'Customs Gateway', 'AIS Tracking'].map((service, index) => (
                                    <span key={index} className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20">
                                        ✓ {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
