import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Droplets, Sun, Leaf, ShieldCheck, Globe2, Trophy, Flag, Building2, Castle, Building, Layers } from "lucide-react";
import { BRAND, IMG } from "@/data/content";
import { useT } from "@/i18n/i18n";

const useSections = (t) => [
    { icon: Leaf, title: t("lawns.why.title"), body: t("lawns.why.body") },
    { icon: Sprout, title: t("lawns.roots.title"), body: t("lawns.roots.body") },
    { icon: Sun, title: t("lawns.drought.title"), body: t("lawns.drought.body") },
    { icon: Trophy, title: t("lawns.colour.title"), body: t("lawns.colour.body") },
];

const useReferences = (t) => [
    { icon: Flag, label: t("lawns.refs.golf") },
    { icon: Building2, label: t("lawns.refs.hotels") },
    { icon: Castle, label: t("lawns.refs.estates") },
    { icon: Trophy, label: t("lawns.refs.sports") },
    { icon: Layers, label: t("lawns.refs.landscaping") },
    { icon: Building, label: t("lawns.refs.palaces") },
];

export default function LawnsAndTurf() {
    const t = useT();
    const SECTIONS = useSections(t);
    const REFERENCES = useReferences(t);
    return (
        <div data-testid="lawns-page">
            {/* HERO */}
            <section className="relative min-h-[78vh] flex items-end overflow-hidden" data-testid="lawns-hero">
                <div className="absolute inset-0">
                    <img
                        src={IMG.golfGreen}
                        alt="World-class English-style lawn — premium golf green"
                        className="h-full w-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/65 via-[#050B14]/55 to-[#050B14]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(46,92,66,0.25),transparent_60%)]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pb-20 pt-32 w-full">
                    <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-200/80 hover:text-white" data-testid="lawns-back">
                        {t("cta.back_brand")}
                    </Link>
                    <div className="eyebrow rise mt-5">{t("page.lawns.eyebrow")}</div>
                    <h1
                        className="rise-d1 mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.96] tracking-tight text-white max-w-4xl"
                        data-testid="lawns-title"
                    >
                        {t("page.lawns.title")}
                    </h1>
                    <p className="rise-d2 mt-6 text-lg text-slate-200/90 max-w-2xl leading-relaxed">
                        {t("page.lawns.intro")}
                    </p>
                    <div className="rise-d3 mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white text-sm font-medium transition-colors"
                            data-testid="lawns-hero-contact"
                        >
                            {t("cta.talk_to_mclir")} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/liquid"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] text-slate-100 hover:text-white text-sm font-medium transition-colors"
                            data-testid="lawns-hero-liquid"
                        >
                            {t("cta.explore_liquid")} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why seaweed for turf */}
            <section className="py-24 sm:py-28" data-testid="lawns-why-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <div className="eyebrow">{t("page.lawns.eyebrow")}</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">{t("lawns.why.title")}</h2>
                    </div>
                    <p className="lg:col-span-7 text-slate-400 text-lg leading-relaxed">{t("lawns.why.body")}</p>
                </div>

                {/* Mechanism cards */}
                <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 grid md:grid-cols-2 gap-6">
                    {SECTIONS.map((s, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7 lift-card"
                            data-testid={`lawns-mechanism-${i}`}
                        >
                            <div className="rounded-lg w-11 h-11 flex items-center justify-center bg-kelp-600/15 border border-kelp-500/30">
                                <s.icon className="h-5 w-5 text-kelp-400" />
                            </div>
                            <h3 className="font-serif text-2xl mt-5">{s.title}</h3>
                            <p className="mt-3 text-slate-400 leading-relaxed text-sm">{s.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Two-product programme */}
            <section className="border-y border-white/5 bg-[#040912] py-24" data-testid="lawns-programme-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="max-w-2xl">
                        <div className="eyebrow">{t("sec.families.eyebrow")}</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">{t("lawns.programme.title")}</h2>
                        <p className="mt-5 text-slate-400 leading-relaxed">{t("lawns.programme.body")}</p>
                    </div>

                    <div className="mt-12 grid md:grid-cols-2 gap-6">
                        <Link
                            to="/liquid"
                            className="lift-card group relative rounded-2xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-900 p-8 overflow-hidden"
                            data-testid="lawns-programme-liquid"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <div className="eyebrow">{t("fam.liquid.eyebrow")}</div>
                                    <h3 className="font-serif text-3xl mt-2 text-white">{t("fam.liquid.title")}</h3>
                                </div>
                                <div className="rounded-xl border border-white/10 p-3 bg-white/5 group-hover:bg-kelp-600/20 transition-colors">
                                    <Droplets className="h-6 w-6 text-kelp-400" />
                                </div>
                            </div>
                            <p className="mt-5 text-slate-300 leading-relaxed">{t("fam.liquid.body")}</p>
                            <div className="mt-7 inline-flex items-center gap-2 text-sm text-kelp-400 font-medium">
                                {t("cta.drill_in")} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                        <Link
                            to="/granulates"
                            className="lift-card group relative rounded-2xl border border-white/10 bg-gradient-to-br from-earth-900 to-[#0E0B09] p-8 overflow-hidden"
                            data-testid="lawns-programme-granulates"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <div className="eyebrow">{t("fam.granulates.eyebrow")}</div>
                                    <h3 className="font-serif text-3xl mt-2 text-white">{t("fam.granulates.title")}</h3>
                                </div>
                                <div className="rounded-xl border border-white/10 p-3 bg-white/5 group-hover:bg-kelp-600/20 transition-colors">
                                    <Sprout className="h-6 w-6 text-kelp-400" />
                                </div>
                            </div>
                            <p className="mt-5 text-slate-300 leading-relaxed">{t("fam.granulates.body")}</p>
                            <div className="mt-7 inline-flex items-center gap-2 text-sm text-kelp-400 font-medium">
                                {t("cta.drill_in")} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Climate band — visual */}
            <section className="relative py-24 overflow-hidden" data-testid="lawns-climate-section">
                <div className="absolute inset-0">
                    <img src={IMG.luxuryEstate} alt="Luxury estate grounds — premium landscaping" className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/85 to-[#050B14]/30" />
                </div>
                <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7">
                        <div className="eyebrow"><Globe2 className="inline h-3 w-3 mr-1" /> {t("lawns.climate.title")}</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight text-white">{t("lawns.climate.title")}</h2>
                        <p className="mt-5 text-slate-200/90 leading-relaxed max-w-2xl">{t("lawns.climate.body")}</p>
                    </div>
                </div>
            </section>

            {/* Reference applications */}
            <section className="py-24" data-testid="lawns-refs-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="max-w-2xl">
                        <div className="eyebrow">{t("lawns.refs.title")}</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">{t("lawns.refs.title")}</h2>
                        <p className="mt-5 text-slate-400 leading-relaxed">{t("lawns.refs.body")}</p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {REFERENCES.map((r, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-5 text-center lift-card"
                                data-testid={`lawns-ref-${i}`}
                            >
                                <div className="mx-auto rounded-lg w-12 h-12 flex items-center justify-center bg-kelp-600/15 border border-kelp-500/30">
                                    <r.icon className="h-5 w-5 text-kelp-400" />
                                </div>
                                <div className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-300">
                                    {r.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-12" data-testid="lawns-disclaimer-section">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <div className="rounded-2xl border border-white/10 bg-[#0A1628]/40 p-5 text-xs text-slate-400 font-mono leading-relaxed flex gap-3">
                        <ShieldCheck className="h-4 w-4 text-kelp-400 shrink-0 mt-0.5" />
                        <span>{t("lawns.disclaimer")}</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 sm:py-28 border-t border-white/5 bg-gradient-to-b from-[#0A1628] to-[#050B14]" data-testid="lawns-cta-section">
                <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
                    <div className="eyebrow">{t("contact.eyebrow")}</div>
                    <h2 className="font-serif text-4xl sm:text-6xl mt-3 leading-tight">{t("page.lawns.title")}</h2>
                    <p className="mt-5 text-slate-400 max-w-2xl mx-auto">{t("contact.body")}</p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white font-medium transition-colors"
                            data-testid="lawns-cta-contact"
                        >
                            {t("cta.open_contact")} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Lawns & turf programme enquiry")}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                            data-testid="lawns-cta-mail"
                        >
                            {BRAND.email}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
