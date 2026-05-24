import { Link } from "react-router-dom";
import { Mail, Anchor, Droplets, Hammer, Thermometer, ShieldCheck, Layers, FileText, Boxes, Package, MapPin } from "lucide-react";
import { PROCESS_STEPS, BRAND } from "@/data/content";
import { useT } from "@/i18n/i18n";

const STEP_ICONS = [Anchor, Droplets, Droplets, Hammer, Thermometer, ShieldCheck, Layers, FileText, Package, Boxes, MapPin];

export default function ManufacturingProcess() {
    const t = useT();
    return (
        <div className="pt-12 pb-32" data-testid="process-page">
            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white" data-testid="process-back">
                    {t("cta.back_brand")}
                </Link>
                <div className="grid lg:grid-cols-12 gap-10 items-end mt-5">
                    <div className="lg:col-span-7">
                        <div className="eyebrow">{t("page.process.eyebrow")}</div>
                        <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1] tracking-tight">
                            {t("page.process.title")}
                        </h1>
                        <p className="mt-5 text-slate-400 text-lg leading-relaxed max-w-2xl">
                            {t("page.process.intro")}
                        </p>
                    </div>
                    <div className="lg:col-span-5 grid grid-cols-3 gap-3 text-center">
                        {[
                            { v: "4 : 1", k: t("process.stat.ratio") },
                            { v: "75 °C", k: t("process.stat.temp") },
                            { v: "12 – 14 %", k: t("process.stat.moisture") },
                        ].map((s) => (
                            <div key={s.k} className="rounded-xl border border-white/10 bg-[#0A1628]/60 p-4" data-testid={`process-stat-${s.v}`}>
                                <div className="font-serif text-2xl text-kelp-400">{s.v}</div>
                                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400 mt-1">
                                    {s.k}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline — alternating left/right with central vertical line */}
                <div className="relative mt-20" data-testid="process-timeline">
                    {/* central vertical line (desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-kelp-500/40 to-transparent" />

                    <div className="space-y-10 md:space-y-14">
                        {PROCESS_STEPS.map((step, i) => {
                            const left = i % 2 === 0;
                            const Icon = STEP_ICONS[i] || Layers;
                            return (
                                <div
                                    key={step.n}
                                    className="md:grid md:grid-cols-2 md:gap-12 relative"
                                    data-testid={`process-step-${step.n}`}
                                >
                                    {/* Card — placed in col 1 (left) or col 2 (right) via explicit Tailwind classes */}
                                    {left ? (
                                        <>
                                            <div className="md:pr-10 md:text-right">
                                                <div className="rounded-2xl border border-white/10 bg-[#0A1628]/70 p-6 lift-card text-left md:ml-auto max-w-md w-full">
                                                    <div className="flex items-center gap-3 md:flex-row-reverse">
                                                        <div className="font-mono text-xs text-kelp-400">STEP {step.n}</div>
                                                        <div className="h-8 w-8 rounded-lg bg-kelp-600/15 border border-kelp-500/30 flex items-center justify-center">
                                                            <Icon className="h-4 w-4 text-kelp-400" />
                                                        </div>
                                                    </div>
                                                    <h3 className="font-serif text-2xl mt-3 leading-snug">{step.title}</h3>
                                                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                            <div className="hidden md:block" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="hidden md:block" />
                                            <div className="md:pl-10">
                                                <div className="rounded-2xl border border-white/10 bg-[#0A1628]/70 p-6 lift-card max-w-md w-full">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-lg bg-kelp-600/15 border border-kelp-500/30 flex items-center justify-center">
                                                            <Icon className="h-4 w-4 text-kelp-400" />
                                                        </div>
                                                        <div className="font-mono text-xs text-kelp-400">STEP {step.n}</div>
                                                    </div>
                                                    <h3 className="font-serif text-2xl mt-3 leading-snug">{step.title}</h3>
                                                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* central node */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-7 z-10">
                                        <span className="h-3.5 w-3.5 rounded-full bg-kelp-500 ring-4 ring-kelp-500/15 shadow-[0_0_18px_rgba(46,92,66,0.65)]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-kelp-700/30 to-ink-700/30 p-10 text-center" data-testid="process-cta">
                    <div className="eyebrow">{t("process.cta.eyebrow")}</div>
                    <div className="font-serif text-3xl sm:text-5xl mt-3 leading-tight">
                        {t("process.cta.title")}
                    </div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        {t("process.cta.body")}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Batch traceability request")}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white font-medium transition-colors"
                            data-testid="process-cta-mail"
                        >
                            <Mail className="h-4 w-4" /> {BRAND.email}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
