import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe2, Users } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";
import { MARKET_BY_REGION, BUYER_SEGMENTS, BRAND } from "@/data/content";

const PIE_COLORS = ["#2E5C42", "#1A365D", "#8B5A2B", "#D4AF37", "#5A9A78"];

export default function MarketInsights() {
    return (
        <div className="pt-12 pb-32" data-testid="insights-page">
            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white" data-testid="insights-back">
                    ← McLir Seaweed
                </Link>
                <div className="mt-5">
                    <div className="eyebrow">Market insights</div>
                    <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1] tracking-tight max-w-4xl">
                        Ireland is a small market. Europe and the world are not.
                    </h1>
                    <p className="mt-5 text-slate-400 text-lg leading-relaxed max-w-3xl">
                        Two charts to size the opportunity for distributors, partners and investors. Asia-Pacific
                        dominates global seaweed demand by volume. Five buyer categories — biostimulants, animal feed,
                        food, cosmetics and nutraceuticals — split the value pie. McLir is built around the two largest:
                        agriculture and animal nutrition.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 mt-16">
                    {/* Region chart */}
                    <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 sm:p-8" data-testid="chart-by-region">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="eyebrow flex items-center gap-2"><Globe2 className="h-3 w-3" /> By region</div>
                                <div className="font-serif text-2xl mt-1">Seaweed market size — billions USD</div>
                            </div>
                            <BarChart3 className="h-5 w-5 text-kelp-400" />
                        </div>
                        <div className="h-[360px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={MARKET_BY_REGION} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                                    <CartesianGrid stroke="#1E293B" strokeDasharray="2 4" vertical={false} />
                                    <XAxis dataKey="region" tick={{ fill: "#94A3B8", fontSize: 11 }} interval={0} angle={-15} textAnchor="end" height={60} />
                                    <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <Tooltip
                                        contentStyle={{
                                            background: "#050B14",
                                            border: "1px solid #1E293B",
                                            borderRadius: 8,
                                            color: "#F8FAFC",
                                        }}
                                        formatter={(v) => [`${v} B USD`, "Market size"]}
                                    />
                                    <Bar dataKey="value" fill="#2E5C42" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-xs text-slate-500 font-mono mt-4 leading-relaxed">
                            Indicative figures · directional, used for business-development context. Ireland shown
                            separately to illustrate the scale gap between domestic and export markets.
                        </p>
                    </div>

                    {/* Buyer segments */}
                    <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 sm:p-8" data-testid="chart-buyer-segments">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="eyebrow flex items-center gap-2"><Users className="h-3 w-3" /> Buyer segments</div>
                                <div className="font-serif text-2xl mt-1">Global demand split — %</div>
                            </div>
                        </div>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={BUYER_SEGMENTS}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={64}
                                        outerRadius={108}
                                        paddingAngle={2}
                                        dataKey="value"
                                        nameKey="name"
                                    >
                                        {BUYER_SEGMENTS.map((_, i) => (
                                            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="#050B14" />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            background: "#050B14",
                                            border: "1px solid #1E293B",
                                            borderRadius: 8,
                                            color: "#F8FAFC",
                                        }}
                                        formatter={(v, n) => [`${v} %`, n]}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {BUYER_SEGMENTS.map((s, i) => (
                                <li key={s.name} className="flex items-center justify-between text-xs font-mono">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                                        <span className="text-slate-300">{s.name}</span>
                                    </div>
                                    <span className="text-slate-400">{s.value} %</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Takeaways */}
                <div className="mt-20">
                    <div className="eyebrow">Takeaways for distributors &amp; partners</div>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        {[
                            { t: "Export-first orientation", d: "Plombières, Belgium gives McLir same-week reach across the EU and rapid load-out for UK and overseas containers." },
                            { t: "Two anchor segments", d: "60 % of global seaweed demand is in agriculture and animal feed combined — exactly where McLir's portfolio sits." },
                            { t: "Format-agnostic", d: "Liquid concentrate, granulate, water-soluble powder, dry meal and frozen FBAM — one species, every commercial format." },
                        ].map((t, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 lift-card" data-testid={`insight-takeaway-${i}`}>
                                <div className="font-serif text-2xl">{t.t}</div>
                                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{t.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-ink-700/40 to-kelp-700/30 p-10 text-center" data-testid="insights-cta">
                    <div className="font-serif text-3xl sm:text-5xl leading-tight">
                        Build a regional distribution programme with us.
                    </div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        We work with master distributors, mill networks and own-brand formulators. Volume, label and
                        format are all customisable.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Distribution / partnership enquiry")}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white font-medium transition-colors"
                            data-testid="insights-cta-mail"
                        >
                            Talk to McLir <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
