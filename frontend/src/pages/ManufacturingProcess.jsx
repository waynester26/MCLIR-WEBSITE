import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { PROCESS_STEPS, BRAND } from "@/data/content";

export default function ManufacturingProcess() {
    return (
        <div className="pt-12 pb-32" data-testid="process-page">
            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white" data-testid="process-back">
                    ← McLir Seaweed
                </Link>
                <div className="grid lg:grid-cols-12 gap-10 items-end mt-5">
                    <div className="lg:col-span-7">
                        <div className="eyebrow">Manufacturing process</div>
                        <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1] tracking-tight">
                            Ten steps from the cold North Atlantic to your numbered storage bay.
                        </h1>
                        <p className="mt-5 text-slate-400 text-lg leading-relaxed max-w-2xl">
                            Every batch follows the same documented chain. Drying never exceeds 75 °C. Final moisture is
                            held at 12 – 14 %. Every shipment is batch-numbered against the original delivery, so any
                            finished bag can be walked all the way back to the Atlantic harvest it came from.
                        </p>
                    </div>
                    <div className="lg:col-span-5 grid grid-cols-3 gap-3 text-center">
                        {[
                            { v: "4 : 1", k: "Wet to finished meal ratio" },
                            { v: "75 °C", k: "Maximum drying temperature" },
                            { v: "12 – 14 %", k: "Final moisture window" },
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

                {/* Timeline */}
                <div className="relative mt-20" data-testid="process-timeline">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-kelp-500/40 to-transparent hidden md:block" />
                    <div className="space-y-12">
                        {PROCESS_STEPS.map((step, i) => {
                            const left = i % 2 === 0;
                            return (
                                <div key={step.n} className="grid md:grid-cols-2 md:gap-12 relative" data-testid={`process-step-${step.n}`}>
                                    <div className={`md:col-start-${left ? 1 : 2} ${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                                        <div className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 lift-card inline-block max-w-md w-full text-left">
                                            <div className="font-mono text-xs text-kelp-400">STEP {step.n}</div>
                                            <h3 className="font-serif text-2xl mt-2 leading-snug">{step.title}</h3>
                                            <p className="mt-3 text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-7">
                                        <span className="tl-node h-3.5 w-3.5 rounded-full bg-kelp-500" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-kelp-700/30 to-ink-700/30 p-10 text-center" data-testid="process-cta">
                    <div className="eyebrow">Quality &amp; traceability assured</div>
                    <div className="font-serif text-3xl sm:text-5xl mt-3 leading-tight">
                        Want to audit a batch? Send us a delivery number.
                    </div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        We can walk any finished pallet back to the original harvest, with documentation suitable for
                        feed-mill QA, organic-certifier audits and export inspection.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Batch traceability request")}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white font-medium transition-colors"
                            data-testid="process-cta-mail"
                        >
                            <Mail className="h-4 w-4" /> {BRAND.email}
                        </a>
                        <Link
                            to="/animal-feeding"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                            data-testid="process-cta-feeding"
                        >
                            Open animal feeding chapter <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
