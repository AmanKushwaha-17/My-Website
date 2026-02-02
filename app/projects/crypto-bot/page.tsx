"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

export default function CryptoBotPage() {
    return (
        <div className="min-h-screen bg-surface transition-colors duration-300 dark:bg-background">
            <div className="mx-auto max-w-4xl px-6 py-24">
                {/* Back Button */}
                <Link
                    href="/#experience"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-white/80 hover:text-secondary transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl font-bold text-primary dark:text-white mb-4">
                        Hybrid Crypto Trading Bot
                    </h1>
                    <p className="text-xl text-secondary mb-6">
                        Binance Mainnet Data + Testnet Execution
                    </p>
                    <p className="text-lg text-fg-muted dark:text-white/80 mb-8">
                        Machine learning-driven crypto trading system designed for safe forward testing on Binance Futures. Evolved from rapid prototyping (V1) into a production-grade engine-based system (V2) with clean architecture, deterministic exits, and restart-safe state management.
                    </p>

                    {/* Links */}
                    <div className="flex gap-4 mb-12">
                        <a
                            href="https://github.com/AmanKushwaha-17/Crypto-ML-Trading-Engine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-secondary/90"
                        >
                            <Github size={18} />
                            View on GitHub
                        </a>
                    </div>
                </motion.div>

                {/* Version Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Version Overview</h2>
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-green-500/30 dark:border-green-500/20 bg-green-500/5 p-8">
                            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">V1 – Hybrid Trading Bot (Legacy)</h3>
                            <p className="text-fg-muted dark:text-white/80 mb-4">
                                Initial live trading implementation representing rapid prototyping and experimentation phase.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-fg-muted dark:text-white/80">
                                <li>Monolithic execution script</li>
                                <li>Uses real Binance mainnet market data</li>
                                <li>Executes trades on Binance Futures Testnet</li>
                                <li>ML model predicts direction + confidence</li>
                                <li>Fixed HOLD_BARS-based exits</li>
                                <li>Telegram alerts</li>
                                <li>Performance analytics (Sharpe, Profit Factor, Drawdown)</li>
                                <li>JSON-based trade & state tracking</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-blue-500/30 dark:border-blue-500/20 bg-blue-500/5 p-8">
                            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">V2 – Engine-Based System (Current/Recommended)</h3>
                            <p className="text-fg-muted dark:text-white/80 mb-4">
                                Production-grade architecture demonstrating system design maturity and professional trading discipline.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-fg-muted dark:text-white/80">
                                <li>Modular, production-style architecture</li>
                                <li>Strict separation of concerns: Engine, Risk Manager, Strategy, Execution, State Persistence</li>
                                <li><strong>ML is entry-only</strong> (no ML exits)</li>
                                <li><strong>Deterministic time-based exits</strong></li>
                                <li>Volatility regime filtering (ATR vs ATR MA)</li>
                                <li>Pyramiding support in expanding volatility</li>
                                <li>Candle-synchronized scheduler</li>
                                <li>Restart-safe, crash-safe state persistence</li>
                                <li>Structured logging</li>
                                <li>Designed for long-running VM execution</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* System Architecture */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">V2 Architecture: Engine-Based Design</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8 mb-6">
                        <div className="text-center font-mono text-sm text-fg-muted dark:text-white/70 leading-relaxed">
                            <div className="mb-2">Market Data</div>
                            <div className="mb-2">↓</div>
                            <div className="mb-2">Feature Builder</div>
                            <div className="mb-2">↓</div>
                            <div className="mb-2">ML Strategy (ENTRY ONLY)</div>
                            <div className="mb-2">↓</div>
                            <div className="mb-2">Risk Manager (permission + sizing)</div>
                            <div className="mb-2">↓</div>
                            <div className="mb-2">Engine (trade lifecycle owner)</div>
                            <div className="mb-2">↓</div>
                            <div className="mb-2">Execution (Testnet)</div>
                            <div className="mb-2">↓</div>
                            <div>State Persistence + Logs</div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-dashed border-secondary/30 bg-secondary/5 p-6">
                        <p className="text-lg font-semibold text-secondary mb-2">Key Philosophy:</p>
                        <div className="space-y-1 text-fg-muted dark:text-white/80">
                            <p>→ ML suggests.</p>
                            <p>→ Risk decides.</p>
                            <p>→ Engine executes.</p>
                            <p>→ Exits are deterministic.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Component Breakdown */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Component Breakdown</h2>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Feature Builder",
                                description: "Transforms raw market data into ML-ready features",
                                features: [
                                    "Technical indicators: RSI, MACD, Bollinger Bands, ADX",
                                    "Price-based features: returns, volatility, rolling statistics",
                                    "Volume analysis and market microstructure signals"
                                ]
                            },
                            {
                                title: "ML Strategy (Entry-Only)",
                                description: "Machine learning model generates entry signals with confidence scores",
                                features: [
                                    "Trained on historical Binance mainnet data",
                                    "Confidence-based signal filtering",
                                    "Direction prediction (LONG/SHORT)",
                                    "No ML-predicted exits to reduce overfitting"
                                ]
                            },
                            {
                                title: "Risk Manager",
                                description: "Controls position sizing and exposure based on market conditions",
                                features: [
                                    "ATR-based volatility regime detection",
                                    "Dynamic position sizing",
                                    "Daily loss and drawdown controls",
                                    "Permission system for entry signals"
                                ]
                            },
                            {
                                title: "Engine",
                                description: "Core trade lifecycle management and orchestration",
                                features: [
                                    "Manages open positions",
                                    "Coordinates between all system components",
                                    "Enforces deterministic exit logic",
                                    "Candle-synchronized execution"
                                ]
                            },
                            {
                                title: "Execution Layer",
                                description: "Handles order placement and fills via Binance API",
                                features: [
                                    "Real mainnet data, testnet execution",
                                    "Atomic order operations",
                                    "Error handling and retry logic",
                                    "No real capital at risk"
                                ]
                            },
                            {
                                title: "State Persistence",
                                description: "Restart-safe state management for long-running deployments",
                                features: [
                                    "Crash recovery support",
                                    "Equity curve tracking",
                                    "Daily PnL logs",
                                    "Position state preservation"
                                ]
                            }
                        ].map((component, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-dashed border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6"
                            >
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                                    {component.title}
                                </h3>
                                <p className="text-sm text-fg-muted dark:text-white/80 mb-4">
                                    {component.description}
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    {component.features.map((feature, i) => (
                                        <li key={i} className="text-sm text-fg-muted dark:text-white/70">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Risk & Safety */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Risk & Safety</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <ul className="space-y-3 text-fg-muted dark:text-white/80">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>Trades only on <strong>Binance Futures Testnet</strong> - no real capital at risk</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>Daily loss & drawdown controls prevent runaway losses</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>Confidence-based entry filtering ensures quality signals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>Volatility regime filtering (V2) adapts to market conditions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>Credentials stored via environment variables</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>Restart-safe state persistence prevents data loss</span>
                            </li>
                        </ul>
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Python", "Pandas", "NumPy", "Scikit-learn",
                            "Binance API", "Machine Learning", "Feature Engineering",
                            "Time Series Analysis", "Risk Management", "System Design"
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-primary dark:bg-white/10 dark:text-white/90"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.section>

                {/* Project Goal */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Project Goal</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <p className="text-fg-muted dark:text-white/80 leading-relaxed mb-4">
                            This is <strong>not</strong> a &ldquo;plug-and-play trading bot.&rdquo;
                        </p>
                        <p className="text-fg-muted dark:text-white/80 leading-relaxed mb-4">
                            It is a <strong>research → forward-testing → system-design project</strong> focused on:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-fg-muted dark:text-white/80">
                            <li>Learning how real trading systems are built</li>
                            <li>Validating ML signals under live conditions</li>
                            <li>Enforcing professional risk and execution discipline</li>
                            <li>Evolving architecture over time</li>
                        </ul>
                        <p className="text-fg-muted dark:text-white/80 leading-relaxed mt-4">
                            The project demonstrates the <strong>evolution of a trading system</strong>: V1 shows rapid prototyping and experimentation, while V2 shows architectural maturity and production thinking.
                        </p>
                    </div>
                </motion.section>

                {/* Project Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Project Timeline</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <p className="text-lg font-semibold text-secondary mb-2">Aug 2025 – Nov 2025</p>
                        <p className="text-fg-muted dark:text-white/80">
                            Completed two-generation evolution: V1 (hybrid bot with rapid prototyping) and V2 (production-grade engine-based architecture). Successfully forward tested on Binance Futures Testnet with comprehensive risk controls and state management.
                        </p>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
