import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sprout, FlaskConical, Beef, BarChart3, Mail, ChevronRight, Leaf, ShieldCheck, Globe2 } from "lucide-react";
import { BRAND, HERO_IMG, FAQS } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useT } from "@/i18n/i18n";

const useFamilies = () => {
    const t = useT();
    return [
        { to: "/liquid", eyebrow: t("fam.liquid.eyebrow"), title: t("fam.liquid.title"), copy: t("fam.liquid.body"), icon: Droplets, accent: "from-ink-700 to-ink-900" },
        { to: "/granulates", eyebrow: t("fam.granulates.eyebrow"), title: t("fam.granulates.title"), copy: t("fam.granulates.body"), icon: Sprout, accent: "from-earth-900 to-[#0E0B09]" },
        { to: "/water-soluble-powder", eyebrow: t("fam.wsp.eyebrow"), title: t("fam.wsp.title"), copy: t("fam.wsp.body"), icon: FlaskConical, accent: "from-ink-700 to-ink-900" },
        { to: "/animal-feeding", eyebrow: t("fam.feeding.eyebrow"), title: t("fam.feeding.title"), copy: t("fam.feeding.body"), icon: Beef, accent: "from-kelp-700 to-ink-900" },
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

export default function Home() {
    const t = useT();
    const FAMILIES = useFamilies();
    const PILLARS = usePillars();
    const STATS = useStats();
    return (
        <div data-testid="home-page">
            {/* HERO */}
            <section className="relative min-h-[88vh] flex items-end overflow-hidden" data-testid="hero-section">
                <div className="absolute inset-0">
                    <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/70 via-[#050B14]/55 to-[#050B14]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(46,92,66,0.18),transparent_60%)]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pb-20 pt-32 w-full">
                    <div className="max-w-3xl">
                        <div className="eyebrow rise" data-testid="hero-eyebrow">
                            {t("hero.eyebrow")}
                        </div>
                        <h1
                            className="rise-d1 mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white"
                            data-testid="hero-title"
                        >
                            {t("hero.title.line1")}<br />
                            <span className="text-kelp-400 italic">{t("hero.title.italic")}</span> {t("hero.title.line2_en")}
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
                                to="/animal-feeding"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors"
                                data-testid="hero-cta-animal-feeding"
                            >
                                {t("cta.feeding_chapter")} <ChevronRight className="h-4 w-4" />
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

                    {/* Marquee */}
                    <div className="rise-d4 mt-16 overflow-hidden border-y border-white/5 py-4" data-testid="hero-marquee">
                        <div className="marquee-track flex gap-10 font-mono text-xs uppercase tracking-[0.28em] text-slate-400 whitespace-nowrap">
                            {Array.from({ length: 2 }).map((_, k) => (
                                <span key={k} className="flex gap-10">
                                    <span>Vineyards</span><span>·</span>
                                    <span>Orchards</span><span>·</span>
                                    <span>Cereals</span><span>·</span>
                                    <span>Dairy</span><span>·</span>
                                    <span>Sheep & Goats</span><span>·</span>
                                    <span>Equine</span><span>·</span>
                                    <span>Greenhouse</span><span>·</span>
                                    <span>Turf & Golf</span><span>·</span>
                                    <span>Berries</span><span>·</span>
                                    <span>Pet nutrition</span><span>·</span>
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
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <div className="eyebrow">{f.eyebrow}</div>
                                        <h3 className="font-serif text-3xl sm:text-4xl mt-2 text-white">{f.title}</h3>
                                    </div>
                                    <div className="rounded-xl border border-white/10 p-3 bg-white/5 group-hover:bg-kelp-600/20 transition-colors">
                                        <f.icon className="h-6 w-6 text-kelp-400" />
                                    </div>
                                </div>
                                <p className="mt-5 text-slate-300 leading-relaxed max-w-md">{f.copy}</p>
                                <div className="mt-8 inline-flex items-center gap-2 text-sm text-kelp-400 font-medium">
                                    {t("cta.drill_in")} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="border-y border-white/5 bg-[#040912]" data-testid="stats-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
                    {STATS.map((s, i) => (
                        <div key={i} data-testid={`stat-${i}`}>
                            <div className="font-serif text-5xl sm:text-6xl text-white leading-none">{s.v}</div>
                            <div className="mt-3 text-xs font-mono uppercase tracking-[0.18em] text-slate-400 max-w-[14rem]">
                                {s.k}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PILLARS */}
            <section className="py-24 sm:py-32" data-testid="pillars-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="eyebrow">{t("pillars.eyebrow")}</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">
                            {t("pillars.title")}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {PILLARS.map((p, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7 lift-card"
                                data-testid={`pillar-${i}`}
                            >
                                <div className="rounded-lg w-11 h-11 flex items-center justify-center bg-kelp-600/15 border border-kelp-500/30">
                                    <p.icon className="h-5 w-5 text-kelp-400" />
                                </div>
                                <h3 className="font-serif text-2xl mt-5">{p.title}</h3>
                                <p className="mt-3 text-slate-400 leading-relaxed text-sm">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANIMAL FEED CTA */}
            <section className="relative py-24 sm:py-32 noise-overlay earth-bg" data-testid="animal-cta-section">
                <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <div className="eyebrow text-amber-200/70">Chapter · Animal feeding</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 text-white leading-tight">
                            A natural multimineral feed material — readily absorbed, vegetable origin, suitable for animals of all ages.
                        </h2>
                        <p className="mt-5 text-slate-300 max-w-xl leading-relaxed">
                            Atlantic Ascophyllum, low-temperature dried, fine-milled to your micron specification.
                            Used by feed compounders, dairy & beef farms, equine yards, sheep flocks, goat herds,
                            poultry operations and pet-food formulators across Europe.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link
                                to="/animal-feeding"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white text-sm font-medium transition-colors"
                                data-testid="animal-cta-open-chapter"
                            >
                                Open the animal feeding chapter <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/manufacturing"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-colors"
                                data-testid="animal-cta-process"
                            >
                                See the manufacturing process
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <img
                            src="https://images.unsplash.com/photo-1659148566517-9dfe52f802ac?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
                            alt="Healthy dairy herd on pasture"
                            className="w-full h-[420px] object-cover rounded-2xl border border-white/10"
                        />
                    </div>
                </div>
            </section>

            {/* PROCESS TEASER */}
            <section className="py-24 sm:py-32" data-testid="process-teaser-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <div className="eyebrow">{t("process.eyebrow")}</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">
                            {t("process.teaser.title")}
                        </h2>
                        <p className="mt-5 text-slate-400 leading-relaxed">
                            {t("process.teaser.body")}
                        </p>
                        <Link
                            to="/manufacturing"
                            className="mt-7 inline-flex items-center gap-2 text-kelp-400 hover:text-kelp-300 text-sm font-medium"
                            data-testid="process-teaser-cta"
                        >
                            {t("cta.view_full_process")} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="md:col-span-7 grid grid-cols-2 gap-4">
                        {[
                            { k: "01", t: "Atlantic harvest", d: "Hand-cut, regulated beds" },
                            { k: "05", t: "Controlled drying", d: "≤ 75 °C, vitamin-safe" },
                            { k: "07", t: "Micron screening", d: "2/10 to T60" },
                            { k: "09", t: "Final bagging", d: "1 t · 25 kg · 20 kg" },
                        ].map((s) => (
                            <div
                                key={s.k}
                                className="rounded-xl border border-white/10 bg-[#0A1628]/60 p-5"
                                data-testid={`process-mini-${s.k}`}
                            >
                                <div className="font-mono text-xs text-kelp-400">{s.k}</div>
                                <div className="font-serif text-xl mt-2 text-white">{s.t}</div>
                                <div className="text-xs text-slate-400 mt-1 font-mono uppercase tracking-wider">{s.d}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MARKET INSIGHTS TEASER */}
            <section className="py-24 sm:py-32 border-y border-white/5 bg-[#040912]" data-testid="market-teaser-section">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <div className="eyebrow">{t("market.eyebrow")}</div>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">
                            {t("market.title")}
                        </h2>
                        <p className="mt-5 text-slate-400 leading-relaxed max-w-xl">
                            {t("market.body")}
                        </p>
                        <Link
                            to="/market-insights"
                            className="mt-7 inline-flex items-center gap-2 text-kelp-400 hover:text-kelp-300 text-sm font-medium"
                            data-testid="market-teaser-cta"
                        >
                            {t("cta.open_market")} <BarChart3 className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="md:col-span-5 rounded-2xl border border-white/10 p-6 bg-[#0A1628]/60">
                        <div className="eyebrow mb-3">{t("market.segments_label")}</div>
                        {[
                            ["Agricultural biostimulants", 34],
                            ["Animal feed & nutrition", 26],
                            ["Food ingredients", 18],
                            ["Cosmetics", 12],
                            ["Nutraceuticals", 10],
                        ].map(([n, v]) => (
                            <div key={n} className="mt-3" data-testid={`segment-bar-${n}`}>
                                <div className="flex justify-between text-xs font-mono text-slate-400">
                                    <span>{n}</span>
                                    <span>{v}%</span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full mt-1 overflow-hidden">
                                    <div className="h-full bg-kelp-500" style={{ width: `${v * 2.5}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 sm:py-32" data-testid="faq-section">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <div className="eyebrow">{t("faq.eyebrow")}</div>
                    <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">{t("faq.title")}</h2>
                    <Accordion type="single" collapsible className="mt-10" data-testid="faq-accordion">
                        {FAQS.map((f, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                                <AccordionTrigger
                                    data-testid={`faq-trigger-${i}`}
                                    className="font-serif text-xl text-left py-5 hover:no-underline"
                                >
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400 leading-relaxed pb-6">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CONTACT BAND */}
            <section className="py-24 sm:py-32 border-t border-white/5 bg-gradient-to-b from-[#0A1628] to-[#050B14]" data-testid="contact-band">
                <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
                    <div className="eyebrow">{t("contact.eyebrow")}</div>
                    <h2 className="font-serif text-4xl sm:text-6xl mt-3 leading-tight">
                        {t("contact.title")}
                    </h2>
                    <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
                        {t("contact.body")}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${BRAND.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white font-medium transition-colors"
                            data-testid="contact-band-mail"
                        >
                            <Mail className="h-4 w-4" /> {BRAND.email}
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                            data-testid="contact-band-cta"
                        >
                            {t("cta.open_contact")} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
