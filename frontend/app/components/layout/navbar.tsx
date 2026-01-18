"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Hermes <span className="text-blue-400">AI</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        Capabilities
                    </Link>
                    <Link
                        href="#solutions"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        Solutions
                    </Link>
                    <Link
                        href="#enterprise"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        Enterprise
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-gray-300">
                            Log in
                        </Button>
                        <Link href="/dashboard">
                            <Button variant="glow" size="sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="#features"
                                className="text-gray-300 hover:text-white py-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                Capabilities
                            </Link>
                            <Link
                                href="#solutions"
                                className="text-gray-300 hover:text-white py-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                Solutions
                            </Link>
                            <Link
                                href="#enterprise"
                                className="text-gray-300 hover:text-white py-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                Enterprise
                            </Link>
                            <div className="pt-4 flex flex-col space-y-3">
                                <Button variant="ghost" className="w-full justify-start text-gray-300">
                                    Log in
                                </Button>
                                <Link href="/dashboard" className="w-full">
                                    <Button variant="glow" className="w-full">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
