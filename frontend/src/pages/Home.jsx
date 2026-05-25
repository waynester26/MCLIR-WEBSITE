import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sprout, BarChart3, Mail, Leaf, ShieldCheck, Globe2, Flag } from "lucide-react";
import { BRAND, FAQS, BUYER_SEGMENTS } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useT } from "@/i18n/i18n";

const useFamilies = () => {
    const t = useT();
    return [
        { to: "/liquid", eyebrow: t("fam.liquid.eyebrow"), title: t("fam.liquid.title"), copy: t("fam.liquid.body"), icon: Droplets, accent: "from-ink-700 to-ink-900" },
        { to: "/granulates", eyebrow: t("fam.granulates.eyebrow"), title: t("fam.granulates.title"), copy: t("fam.granulates.body"), icon: Sprout, accent: "from-earth-900 to-[#0E0B09]" },
    ];
};

const usePillars = () => {
    const t = useT();
    return [
        { icon: Leaf, title: t("pillars.bio.title"), body: t("pillars.bio.body") },
        { icon: ShieldCheck, title: t("pillars.trace.title"), body: t("pillars.trace.body") },
        { icon: Globe2, title: t("pillars.export.title"), body: t("pillars.export.body") },
    ];
};

const useStats = () => {
    const t = useT();
    return [
        { v: "+15%", k: t("stats.yield") },
        { v: "100%", k: t("stats.species") },
        { v: "75 °C", k: t("stats.drying") },
        { v: "12 wk", k: t("stats.release") },
    ];
};

const useMarquee = () => {
    const t = useT();
    return [
        t("chip.vineyards"),
        t("chip.orchards"),
        t("chip.cereals"),
        t("chip.greenhouse"),
        t("chip.turf_golf"),
        t("chip.berries"),
        t("chip.lawns"),
        t("chip.estates"),
        t("chip.hotels"),
        t("chip.sports_turf"),
    ];
};

export default function Home() {
    const t = useT();
    const FAMILIES = useFamilies();
    const PILLARS = usePillars();
    const STATS = useStats();
    const MARQUEE = useMarquee();
    return (
        <div data-testid="home-page">
            {/* HERO */}
            <section className="relative min-h-[88vh] flex items-end overflow-hidden" data-testid="hero-section">
                <div className="absolute inset-0">
                    <video
                        src="/seaweed-video.mp4"
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/70 via-[#050B14]/55 to-[#050B14]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(46,92,66,0.18),transparent_60%)]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pb-20 pt-32 w-full">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 max-w-3xl">
                            <div className="eyebrow rise" data-testid="hero-eyebrow">
                                {t("hero.eyebrow")}
                            </div>
                            <h1
                                className="rise-d1 mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white"
                                data-testid="hero-title"
                            >
                                {t("hero.title.line1")}<br />
                                <span className="text-kelp-400 italic">{t("hero.title.italic")}</span> {t("hero.title.line2")}
                            </h1>
                            <p className="rise-d2 mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed" data-testid="hero-sub">
                                {t("hero.sub")}
                            </p>
                            <div className="rise-d3 mt-8 flex flex-wrap gap-3" data-testid="hero-cta-row">
                                <Link
                                    to="/liquid"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white text-sm font-medium transition-colors"
                                    data-testid="hero-cta-explore-liquid"
                                >
                                    {t("cta.explore_liquid")} <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    to="/lawns-and-turf"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-slate-100 hover:text-white text-sm font-medium transition-colors"
                                    data-testid="hero-cta-lawns"
                                >
                                    {t("cta.discover_turf")} <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href={`mailto:${BRAND.email}`}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-200 hover:text-white text-sm font-medium transition-colors"
                                    data-testid="hero-cta-mail"
                                >
                                    <Mail className="h-4 w-4" /> {BRAND.email}
                                </a>
                            </div>
                        </div>

                        {/* Premium logo medallion — glass crest, transparent integration */}
                        <div className="hidden lg:flex items-center justify-end lg:col-span-5" data-testid="hero-logo">
                            <div className="relative">
                                {/* Outer kelp glow */}
                                <div className="absolute -inset-14 rounded-full bg-[radial-gradient(circle,rgba(60,122,88,0.32),transparent_70%)] blur-3xl" />
                                {/* Soft ambient ring */}
                                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-kelp-500/35 via-transparent to-kelp-400/20 blur-2xl opacity-80" />

                                <div className="relative h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(20,42,32,0.55),rgba(5,11,20,0.85))] border border-kelp-500/20 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(60,122,88,0.55),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center backdrop-blur-xl">
                                    {/* Inner rings — elegant, thin */}
                                    <div className="absolute inset-3 rounded-full border border-white/[0.06]" />
                                    <div className="absolute inset-7 rounded-full border border-kelp-500/15" />

                                    {/* Transparent glass medallion — no rectangle behind logo */}
                                    <div className="relative h-64 w-64 rounded-full flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_25%,rgba(120,180,150,0.16),transparent_60%)]" />
                                        <img
                                            src={BRAND.logo}
                                            alt="McLir Seaweed crest"
                                            className="relative h-52 w-52 object-contain mix-blend-screen brightness-110 drop-shadow-[0_10px_30px_rgba(60,122,88,0.45)]"
                                            data-testid="hero-logo-img"
                                        />
                                    </div>

                                    {/* Top inner light */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 h-2 w-40 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent blur-md" />
                                    {/* Bottom shine */}
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-kelp-500/70 to-transparent blur-[1px]" />
                                </div>

                                {/* Caption */}
                                <div className="mt-6 text-center" data-testid="hero-medallion-caption">
                                    <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.28em] uppercase text-slate-300">
                                        <Flag className="h-3 w-3 text-kelp-400" />
                                        {t("hero.medallion_caption")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marquee */}
                    <div className="rise-d4 mt-16 overflow-hidden border-y border-white/5 py-4" data-testid="hero-marquee">
                        <div className="marquee-track flex gap-10 font-mono text-xs uppercase tracking-[0.28em] text-slate-400 whitespace-nowrap">
                            {Array.from({ length: 2 }).map((_, k) => (
                                <span key={k} className="flex gap-10">
                                    {MARQUEE.map((m, i) => (
                                        <span key={`${k}-${i}`} className="flex gap-10">
                                            <span>{m}</span>
                                            <span>·</span>
                                        </span>
                                    ))}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT FAMILIES */}
            <section className="relative py-24 sm:py-32" data-testid="families-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
                        <div className="md:col-span-5">
                            <div className="eyebrow">{t("sec.families.eyebrow")}</div>
                            <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">
                                {t("sec.families.title")}
                            </h2>
                        </div>
                        <p className="md:col-span-7 text-slate-400 text-lg leading-relaxed">
                            {t("sec.families.body")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6" data-testid="families-grid">
                        {FAMILIES.map((f) => (
                            <Link
                                key={f.to}
                                to={f.to}
                                className={`lift-card group relative rounded-2xl border border-white/10 bg-gradient-to-br ${f.accent} p-8 sm:p-10 overflow-hidden`}
                                data-testid={`family-card-${f.to.replace("/", "")}`}
                            >
                                <div className="flex items-start 
