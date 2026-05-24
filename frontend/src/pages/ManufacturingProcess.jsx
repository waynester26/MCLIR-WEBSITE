import { Link } from "react-router-dom";
import {
    Mail,
    Anchor,
    Droplets,
    Hammer,
    Thermometer,
    ShieldCheck,
    Layers,
    FileText,
    Boxes,
    Package,
    MapPin,
} from "lucide-react";
import { PROCESS_STEPS, BRAND, IMG } from "@/data/content";
import { useT } from "@/i18n/i18n";

const STEP_ICONS = [
    Anchor,
    Droplets,
    Droplets,
    Hammer,
    Thermometer,
    ShieldCheck,
    Layers,
    FileText,
    Package,
    Boxes,
    MapPin,
];

function StepCard({ step, Icon, mirrored }) {
    return (
        <div
            className={`rounded-2xl border border-white/10 bg-[#0A1628]/70 overflow-hidden lift-card max-w-md w-full ${
                mirrored ? "md:ml-auto" : ""
            }`}
        >
            <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img
                    src={step.img}
                    alt={`Step ${step.n} — ${step.title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-kelp-500/40 bg-[#050B14]/70 backdrop-blur-md">
                    <span className="h-6 w-6 rounded-md bg-kelp-600/25 border border-kelp-500/40 flex items-center justify-center">
                        <Icon className="h-3.5 w-3.5 text-kelp-300" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-kelp-200">
                        STEP {step.n}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-serif text-2xl leading-snug">{step.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
        </div>
    );
}

export default function ManufacturingProcess() {
    const t = useT();
    return (
        <div className="pt-12 pb-32 relative" data-testid="process-page">
            {/* Atmospheric ocean backdrop */}
            <div className="absolute inset-x-0 top-0 h-[520px] -z-10 overflow-hidden">
                <img src={IMG.oceanWaves} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/85 via-[#050B14]/85 to-[#050B14]" />
            </div>

            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link
                    to="/"
                    className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white"
                    data-testid="process-back"
                >
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
                            <div
                                key={s.k}
                                className="rounded-xl border border-white/10 bg-[#0A1628]/60 p-4"
                                data-testid={`process-stat-${s.v}`}
                            >
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
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-kelp-500/40 to-transparent" />

                    <div className="space-y-12 md:space-y-16">
                        {PROCESS_STEPS.map((step, i) => {
                            const left = i % 2 === 0;
                            const Icon = STEP_ICONS[i] || Layers;
                            return (
                                <div
                                    key={step.n}
                                    className="md:grid md:grid-cols-2 md:gap-12 relative"
                                    data-testid={`process-step-${step.n}`}
                                >
                                    {left ? (
                                        <>
                                            <div className="md:pr-10 flex md:justify-end">
                                                <StepCard step={step} Icon={Icon} mirrored />
                                            </div>
                                            <div className="hidden md:block" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="hidden md:block" />
                                            <div className="md:pl-10">
                                                <StepCard step={step} Icon={Icon} />
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
                <div
                    className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-kelp-700/30 to-ink-700/30 p-10 text-center"
                    data-testid="process-cta"
                >
                    <div className="eyebrow">{t("process.cta.eyebrow")}</div>
                    <div className="font-serif text-3xl sm:text-5xl mt-3 leading-tight">
                        {t("process.cta.title")}
                    </div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">{t("process.cta.body")}</p>
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
