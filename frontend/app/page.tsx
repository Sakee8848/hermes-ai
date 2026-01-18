"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowRight, Bot, Box, FileText, Globe, Layers, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  <span>Next-Gen Logistics Intelligence</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Logistics, <br />
                  <span className="text-gradient-primary">Reimagined.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-lg mt-6 leading-relaxed">
                  The intelligent operating system for global trade. Automate Bills of Lading, predict risks, and track shipments with enterprise-grade AI.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/dashboard">
                    <Button size="lg" className="rounded-full px-8 text-base h-12" variant="glow">
                      Start Platform
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/dashboard/documents">
                    <Button size="lg" variant="glass" className="rounded-full px-8 text-base h-12">
                      View Documentation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Illustration / Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-30" />
                <Card className="relative bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="text-xs text-gray-500 font-mono">AI-AGENT-V1.0.2</div>
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-blue-400" />
                      <span>Analysis Complete</span>
                    </CardTitle>
                    <CardDescription>Shipment #SHP-2026-X92 Processed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-green-500/20 text-green-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-200">Compliance Check</span>
                          <span className="text-xs text-gray-500">Passed • 0.2s</span>
                        </div>
                      </div>
                      <div className="text-green-400 text-sm font-bold">100%</div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-blue-500/20 text-blue-400">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-200">B/L Extraction</span>
                          <span className="text-xs text-gray-500">Structured Data Ready</span>
                        </div>
                      </div>
                      <div className="text-blue-400 text-sm font-bold">Done</div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-purple-500/20 text-purple-400">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-200">Route Optimization</span>
                          <span className="text-xs text-gray-500">Shanghai → Rotterdam</span>
                        </div>
                      </div>
                      <div className="text-purple-400 text-sm font-bold">-12% Cost</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligence Built for <span className="text-blue-500">Scale</span>
            </h2>
            <p className="text-gray-400">
              Transform unstructured logistics data into actionable insights effectively.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <Card className="h-full hover:border-blue-500/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle>AI B/L Processing</CardTitle>
                  <CardDescription>
                    Automatically extract, validate, and digitize Bill of Lading data with 99.9% accuracy using our proprietary LLM models.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full hover:border-cyan-500/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle>Risk Management</CardTitle>
                  <CardDescription>
                    Real-time cargo insurance risk analysis, route forecasting, and automated compliance checks to ensure safe delivery.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full hover:border-purple-500/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle>End-to-End Visibility</CardTitle>
                  <CardDescription>
                    Track shipments across all carriers in one unified dashboard. Predict delays before they happen.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/60">
        <div className="container mx-auto px-4 text-center">
          <div className="flex  justify-center items-center space-x-2 mb-4">
            <Globe className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500 font-medium">Hermes AI Platform © 2026</span>
          </div>
          <p className="text-gray-600 text-sm">
            Empowering the next generation of logistics.
          </p>
        </div>
      </footer>
    </div>
  );
}
