import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe2, Users, TrendingUp, Ship, Layout as LayoutIcon, ThermometerSun } from "lucide-react";
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
    LineChart,
    Line,
    AreaChart,
    Area,
    Legend,
} from "recharts";
import {
    MARKET_BY_REGION,
    BUYER_SEGMENTS,
    BIOSTIM_MARKET_GROWTH,
    EU_SEAWEED_IMPORTS,
    TURF_BY_REGION,
    DROUGHT_TREND,
    BRAND,
} from "@/data/content";
import { useT } from "@/i18n/i18n";

const PIE_COLORS = ["#2E5C42", "#5A9A78", "#1A365D", "#8B5A2B", "#D4AF37"];

const TOOLTIP_STYLE = {
    background: "rgba(5, 11, 20, 0.95)",
    border: "1px solid rgba(46, 92, 66, 0.45)",
    borderRadius: 10,
    color: "#F8FAFC",
    boxShadow: "0 18px 40px -18px rgba(0,0,0,0.8)",
    padding: "10px 14px",
    fontSize: "12px",
};

// ─── Interactive donut with centre live-percent label ─────────────
function BuyerDonut({ data, t }) {
    const [active, setActive] = useState(null);
    const centerLabel = active !== null ? data[active] : null;

    return (
        <div className="relative h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={114}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                        isAnimationActive={true}
                        onMouseEnter={(_, idx) => setActive(idx)}
                        onMouseLeave={() => setActive(null)}
                    >
                        {data.map((_, i) => (
                            <Cell
                                key={i}
                                fill={PIE_COLORS[i % PIE_COLORS.length]}
                                stroke="#050B14"
                                strokeWidth={active === i ? 3 : 2}
                                opacity={active === null || active === i ? 1 : 0.45}
                                style={{ transition: "opacity 200ms, stroke-width 200ms, filter 200ms", filter: active === i ? "drop-shadow(0 0 12px rgba(90,154,120,0.65))" : "none", cursor: "pointer" }}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={TOOLTIP_STYLE}
                        formatter={(v, n) => [`${v} %`, n]}
                        cursor={{ fill: "transparent" }}
                    />
                </PieChart>
            </ResponsiveContainer>
            {/* Center live label */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                {centerLabel ? (
                    <>
                        <div className="font-serif text-4xl text-white">{centerLabel.value} %</div>
                        <div className="mt-1 max-w-[10rem] font-mono text-[10px] tracking-[0.2em] uppercase text-kelp-300">
                            {centerLabel.name}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="font-serif text-2xl text-slate-300">100 %</div>
                        <div className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-slate-500">
                            {t("market.segments_label")}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function ChartCard({ eyebrow, title, icon: Icon, caption, children, testid, className = "" }) {
    return (
        <div className={`rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 sm:p-8 ${className}`} data-testid={testid}>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <div className="eyebrow flex items-center gap-2"><Icon className="h-3 w-3" /> {eyebrow}</div>
                    <div className="font-serif text-2xl mt-1 leading-tight">{title}</div>
                </div>
            </div>
            {children}
            <p className="text-xs text-slate-500 font-mono mt-4 leading-relaxed">{caption}</p>
        </div>
    );
}

export default function MarketInsights() {
    const t = useT();
    return (
        <div className="pt-12 pb-32" data-testid="insights-page">
            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white" data-testid="insights-back">
                    {t("cta.back_brand")}
                </Link>
                <div className="mt-5">
                    <div className="eyebrow">{t("page.insights.eyebrow")}</div>
                    <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1] tracking-tight max-w-4xl">
                        {t("market.title")}
                    </h1>
                    <p className="mt-5 text-slate-400 text-lg leading-relaxed max-w-3xl">
                        {t("market.body")}
                    </p>
                </div>

                {/* Row 1 — region + buyer donut */}
                <div className="grid lg:grid-cols-12 gap-6 mt-16">
                    <ChartCard
                        testid="chart-by-region"
                        className="lg:col-span-7"
                        eyebrow={t("chart.region.eyebrow")}
                        title={t("chart.region.title")}
                        icon={Globe2}
                        caption={t("chart.region.caption")}
                    >
                        <div className="h-[360px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={MARKET_BY_REGION} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                                    <CartesianGrid stroke="#1E293B" strokeDasharray="2 4" vertical={false} />
                                    <XAxis dataKey="region" tick={{ fill: "#94A3B8", fontSize: 11 }} interval={0} angle={-15} textAnchor="end" height={60} />
                                    <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <Tooltip
                                        contentStyle={TOOLTIP_STYLE}
                                        cursor={{ fill: "rgba(46,92,66,0.08)" }}
                                        formatter={(v) => [`${v} B USD`, t("chart.region.title")]}
                                    />
                                    <Bar dataKey="value" fill="#2E5C42" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>

                    {/* Buyer segments donut with hover percent */}
                    <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 sm:p-8" data-testid="chart-buyer-segments">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="eyebrow flex items-center gap-2"><Users className="h-3 w-3" /> {t("chart.segments.eyebrow")}</div>
                                <div className="font-serif text-2xl mt-1">{t("chart.segments.title")}</div>
                            </div>
                            <BarChart3 className="h-5 w-5 text-kelp-400" />
                        </div>
                        <BuyerDonut data={BUYER_SEGMENTS} t={t} />
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
                        <p className="text-xs text-slate-500 font-mono mt-4 leading-relaxed">{t("chart.segments.caption")}</p>
                    </div>
                </div>

                {/* Row 2 — Biostimulants growth (line) + EU imports (bar) */}
                <div className="grid lg:grid-cols-2 gap-6 mt-6">
                    <ChartCard
                        testid="chart-biostim-growth"
                        eyebrow={t("chart.biostim.eyebrow")}
                        title={t("chart.biostim.title")}
                        icon={TrendingUp}
                        caption={t("chart.biostim.caption")}
                    >
                        <div className="h-[320px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={BIOSTIM_MARKET_GROWTH} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <CartesianGrid stroke="#1E293B" strokeDasharray="2 4" vertical={false} />
                                    <XAxis dataKey="year" tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v) => [`${v} B USD`, t("chart.biostim.title")]} cursor={{ stroke: "#2E5C42", strokeOpacity: 0.4 }} />
                                    <Line type="monotone" dataKey="value" stroke="#5A9A78" strokeWidth={2.5} dot={{ fill: "#5A9A78", r: 3 }} activeDot={{ r: 6, fill: "#5A9A78", stroke: "#050B14", strokeWidth: 2 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>

                    <ChartCard
                        testid="chart-eu-imports"
                        eyebrow={t("chart.imports.eyebrow")}
                        title={t("chart.imports.title")}
                        icon={Ship}
                        caption={t("chart.imports.caption")}
                    >
                        <div className="h-[320px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={EU_SEAWEED_IMPORTS} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <CartesianGrid stroke="#1E293B" strokeDasharray="2 4" vertical={false} />
                                    <XAxis dataKey="year" tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ fill: "rgba(46,92,66,0.08)" }} formatter={(v) => [`${v} kt`, t("chart.imports.title")]} />
                                    <Bar dataKey="volume" fill="#2E5C42" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>
                </div>

                {/* Row 3 — Turf by region (stacked) + Drought trend (area) */}
                <div className="grid lg:grid-cols-2 gap-6 mt-6">
                    <ChartCard
                        testid="chart-turf-by-region"
                        eyebrow={t("chart.turf.eyebrow")}
                        title={t("chart.turf.title")}
                        icon={LayoutIcon}
                        caption={t("chart.turf.caption")}
                    >
                        <div className="h-[320px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={TURF_BY_REGION} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <CartesianGrid stroke="#1E293B" strokeDasharray="2 4" vertical={false} />
                                    <XAxis dataKey="region" tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ fill: "rgba(46,92,66,0.08)" }} formatter={(v) => [`${v} B USD`, ""]} />
                                    <Legend wrapperStyle={{ fontSize: 11, color: "#94A3B8", paddingTop: 8 }} iconType="circle" />
                                    <Bar dataKey="professional" name={t("chart.turf.professional")} stackId="a" fill="#2E5C42" radius={[0, 0, 0, 0]} />
                                    <Bar dataKey="residential" name={t("chart.turf.residential")} stackId="a" fill="#5A9A78" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>

                    <ChartCard
                        testid="chart-drought-trend"
                        eyebrow={t("chart.drought.eyebrow")}
                        title={t("chart.drought.title")}
                        icon={ThermometerSun}
                        caption={t("chart.drought.caption")}
                    >
                        <div className="h-[320px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={DROUGHT_TREND} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <defs>
                                        <linearGradient id="droughtFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.55} />
                                            <stop offset="100%" stopColor="#D4AF37" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid stroke="#1E293B" strokeDasharray="2 4" vertical={false} />
                                    <XAxis dataKey="year" tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} />
                                    <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ stroke: "#D4AF37", strokeOpacity: 0.3 }} formatter={(v) => [`${v} M ha`, t("chart.drought.title")]} />
                                    <Area type="monotone" dataKey="hectares" stroke="#D4AF37" strokeWidth={2.5} fill="url(#droughtFill)" activeDot={{ r: 6, fill: "#D4AF37", stroke: "#050B14", strokeWidth: 2 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>
                </div>

                <p className="text-[11px] text-slate-500 font-mono mt-4 leading-relaxed">{t("chart.sources")}</p>

                {/* Takeaways */}
                <div className="mt-20">
                    <div className="eyebrow">{t("insights.takeaways.label")}</div>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        {[
                            { title: t("insights.t1.title"), body: t("insights.t1.body") },
                            { title: t("insights.t2.title"), body: t("insights.t2.body") },
                            { title: t("insights.t3.title"), body: t("insights.t3.body") },
                        ].map((take, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 lift-card" data-testid={`insight-takeaway-${i}`}>
                                <div className="font-serif text-2xl">{take.title}</div>
                                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{take.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-ink-700/40 to-kelp-700/30 p-10 text-center" data-testid="insights-cta">
                    <div className="font-serif text-3xl sm:text-5xl leading-tight">
                        {t("insights.cta.title")}
                    </div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        {t("insights.cta.body")}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Distribution / partnership enquiry")}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white font-medium transition-colors"
                            data-testid="insights-cta-mail"
                        >
                            {t("cta.talk_to_mclir")} <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
