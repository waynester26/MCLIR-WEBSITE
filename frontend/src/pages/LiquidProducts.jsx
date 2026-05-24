import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Droplet,
    Beaker,
    FileText,
    Package,
    Clock,
    ShieldCheck,
    Award,
    Leaf,
    MapPin,
    FlaskConical,
} from "lucide-react";
import { LIQUID_PRODUCTS, BRAND, IMG } from "@/data/content";
import { useT } from "@/i18n/i18n";

/* ── Per-product photo config ── */
const PRODUCT_PHOTOS = {
    "cold-press-10": {
        productImg: "/cold press 10.png",
        seaweedImg: "https://asc-aqua.org/wp-content/uploads/2023/10/AdobeStock_268863676-1570x1047.jpeg?w=3840&q=95",
        seaweedAlt: "Ascophyllum nodosum seaweed on the Atlantic coast — source of McLir Cold Press 10",
    },
    "cold-press-15": {
        productImg: "/cold press 15.png",
        seaweedImg: "https://temperatereefs.org/wp-content/uploads/2019/08/unnamed-4-1024x768.jpg?w=3840&q=95",
        seaweedAlt: "Ascophyllum nodosum rockweed on Atlantic coast — source of McLir Cold Press 15",
    },
};

function ProductPanel({ p, t }) {
    const photos = PRODUCT_PHOTOS[p.slug] || {
        productImg: p.image,
        seaweedImg: IMG.seaweedKelpForest,
        seaweedAlt: "Atlantic seaweed — source of McLir liquid fertiliser",
    };

    return (
        <div data-testid={`liquid-panel-${p.slug}`} className="grid lg:grid-cols-12 gap-10">

            {/* ── Left panel: 2 stacked photos, no animation ── */}
            <div className="lg:col-span-5">
                <div className="liquid-vessel rounded-3xl overflow-hidden h-full flex flex-col" style={{ minHeight: "580px" }}>

                    {/* Top photo — full bottle visible, object-contain on dark bg */}
                    <div
                        className="relative overflow-hidden bg-[#050B14]"
                        style={{ flex: "2 1 60%" }}
                    >
                        <img
                            src={photos.productImg}
                            alt={`${p.title} — McLir liquid seaweed fertiliser, ${p.line}`}
                            className="absolute inset-0 w-full h-full object-contain"
                            loading="eager"
                            data-testid={`liquid-image-${p.slug}`}
                        />
                        {/* Premium inset ring */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                        {/* Concentration badge */}
                        <div className="absolute top-4 left-4 bg-black/55 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-mono text-kelp-300 border border-kelp-500/40 shadow-lg">
                            {p.line}
                        </div>
                    </div>

                    {/* Bottom photo — seaweed, 8K quality, clean no overlays */}
                    <div
                        className="relative overflow-hidden"
                        style={{ flex: "1 1 40%" }}
                    >
                        <img
                            src={photos.seaweedImg}
                            alt={photos.seaweedAlt}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                        {/* Caption at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/65 to-transparent pointer-events-none">
                            <p className="text-[11px] font-mono text-kelp-300 tracking-widest uppercase">
                                100% Ascophyllum nodosum · North Atlantic
                            </p>
                            <p className="text-xs text-slate-300 italic mt-1">"{p.tagline}"</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Right panel: product detail (unchanged) ── */}
            <div className="lg:col-span-7">
                <div className="eyebrow">{p.line}</div>
                <h3
                    className="font-serif text-3xl sm:text-4xl mt-2 leading-tight"
                    data-testid={`liquid-name-${p.slug}`}
                >
                    {p.title}
                </h3>
                <p className="mt-4 text-slate-400 leading-relaxed">{p.summary}</p>

                <div className="grid sm:grid-cols-2 gap-3 mt-6 text-sm">
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow">
                            <Droplet className="inline h-3 w-3 mr-1" /> {t("liquid.source")}
                        </div>
                        <div className="mt-1 text-slate-200">{p.source}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow">
                            <Beaker className="inline h-3 w-3 mr-1" /> {t("liquid.extraction")}
                        </div>
                        <div className="mt-1 text-slate-200">{p.method}</div>
                    </div>
                </div>

                {/* Spec table */}
                <div className="mt-7 rounded-xl border border-white/10 overflow-hidden">
                    <div className="px-5 py-3 bg-white/5 eyebrow flex items-center gap-2">
                        <FileText className="h-3 w-3" /> {t("liquid.spec")}
                    </div>
                    <table className="tech-table w-full">
                        <tbody>
                            {p.spec.map(([k, v]) => (
                                <tr key={k}>
                                    <th className="w-[55%]">{k}</th>
                                    <td className="text-slate-200 font-mono text-xs">{v}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Heavy metals table */}
                {p.heavyMetals && (
                    <div className="mt-5 rounded-xl border border-white/10 overflow-hidden">
                        <div className="px-5 py-3 bg-white/5 eyebrow flex items-center gap-2">
                            <FlaskConical className="h-3 w-3" /> {t("liquid.heavy_metals")}
                        </div>
                        <table className="tech-table w-full">
                            <tbody>
                                {p.heavyMetals.map(([k, v]) => (
                                    <tr key={k}>
                                        <th className="w-[55%]">{k}</th>
                                        <td className="text-slate-200 font-mono text-xs">{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Bioactives */}
                <div className="mt-7">
                    <div className="eyebrow mb-3">{t("liquid.bioactives")}</div>
                    <div className="flex flex-wrap gap-2">
                        {p.bioactives.map((b) => (
                            <span
                                key={b}
                                className="px-3 py-1 rounded-full bg-kelp-600/15 border border-kelp-500/30 text-xs font-mono text-kelp-300"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Use cases */}
                <div className="mt-7">
                    <div className="eyebrow mb-3">{t("liquid.usecases")}</div>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                        {p.useCases.map((u) => (
                            <li key={u} className="flex gap-2">
                                <span className="text-kelp-400 mt-0.5">▸</span>
                                <span>{u}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* How to apply */}
                {p.usage && (
                    <div className="mt-7 rounded-xl border border-white/10 overflow-hidden">
                        <div className="px-5 py-3 bg-white/5 eyebrow flex items-center gap-2">
                            <Droplet className="h-3 w-3" /> {t("liquid.usage")}
                        </div>
                        <div className="divide-y divide-white/5">
                            {p.usage.map((u) => (
                                <div key={u.label} className="px-5 py-3 grid sm:grid-cols-[140px_1fr] gap-3">
                                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-kelp-300">
                                        {u.label}
                                    </div>
                                    <div className="text-slate-300 text-sm leading-relaxed">{u.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Rate, packaging, storage */}
                <div className="grid sm:grid-cols-3 gap-3 mt-7 text-sm">
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow">
                            <Clock className="inline h-3 w-3 mr-1" /> {t("liquid.rate")}
                        </div>
                        <div className="mt-1 text-slate-200 leading-relaxed">{p.rate}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow">
                            <Package className="inline h-3 w-3 mr-1" /> {t("liquid.packaging")}
                        </div>
                        <div className="mt-1 text-slate-200 leading-relaxed">{p.packaging.join(" · ")}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow">
                            <ShieldCheck className="inline h-3 w-3 mr-1" /> {t("liquid.storage")}
                        </div>
                        <div className="mt-1 text-slate-200 leading-relaxed">{p.storage}</div>
                    </div>
                </div>

                {/* Certifications & Origin */}
                {(p.certifications || p.origin) && (
                    <div className="grid sm:grid-cols-2 gap-3 mt-5 text-sm">
                        {p.certifications && (
                            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                                <div className="eyebrow text-amber-200/80">
                                    <Award className="inline h-3 w-3 mr-1" /> {t("liquid.certifications")}
                                </div>
                                <ul className="mt-2 space-y-1">
                                    {p.certifications.map((c) => (
                                        <li
                                            key={c}
                                            className="text-amber-100/85 text-xs font-mono leading-relaxed flex gap-2"
                                        >
                                            <Leaf className="h-3 w-3 mt-0.5 text-amber-300" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {p.origin && (
                            <div className="rounded-lg border border-kelp-500/20 bg-kelp-500/5 p-4">
                                <div className="eyebrow text-kelp-300">
                                    <MapPin className="inline h-3 w-3 mr-1" /> {t("liquid.origin")}
                                </div>
                                <div className="mt-1 text-slate-200 leading-relaxed text-sm">{p.origin}</div>
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-5 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200/80 font-mono leading-relaxed">
                    {t("liquid.batch_note")} · {p.batchNote}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                    <a
                        href={`mailto:${BRAND.email}?subject=${encodeURIComponent(`Sample request — ${p.title}`)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white text-sm font-medium transition-colors"
                        data-testid={`liquid-sample-cta-${p.slug}`}
                    >
                        {t("cta.request_sample")} <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                        href={`mailto:${BRAND.email}?subject=${encodeURIComponent(`Datasheet request — ${p.title}`)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-slate-100 hover:text-white text-sm font-medium transition-colors"
                        data-testid={`liquid-tds-cta-${p.slug}`}
                    >
                        <FileText className="h-4 w-4" /> {t("cta.download_tds")}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function LiquidProducts() {
    const t = useT();
    const [active, setActive] = useState(LIQUID_PRODUCTS[0].slug);
    const product = LIQUID_PRODUCTS.find((p) => p.slug === active);

    return (
        <div className="pt-12 pb-32" data-testid="liquid-page">

            {/* Atmospheric backdrop */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <img
                        src={IMG.atlanticCoast}
                        alt=""
                        className="h-full w-full object-cover opacity-25"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-[#050B14]/85 to-[#050B14]" />
                </div>

                <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
                    <Link
                        to="/"
                        className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white"
                        data-testid="liquid-back"
                    >
                        {t("cta.back_brand")}
                    </Link>
                    <h1 className="mt-5 font-serif text-5xl sm:text-6xl leading-[1] tracking-tight">
                        {t("page.liquid.title")}
                    </h1>
                    <p className="mt-5 max-w-3xl text-slate-300 text-lg leading-relaxed">
                        {t("page.liquid.intro")}
                    </p>

                    {/* Selector tabs */}
                    <div
                        className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-1"
                        data-testid="liquid-tabs"
                    >
                        {LIQUID_PRODUCTS.map((p) => (
                            <button
                                key={p.slug}
                                onClick={() => setActive(p.slug)}
                                data-testid={`liquid-tab-${p.slug}`}
                                className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                                    active === p.slug
                                        ? "text-white border-kelp-500"
                                        : "text-slate-400 border-transparent hover:text-slate-200"
                                }`}
                            >
                                {p.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="mt-12">
                    <ProductPanel p={product} t={t} />
                </div>

                {/* CTA */}
                <div className="mt-24 grid md:grid-cols-2 gap-6">
                    <Link
                        to="/granulates"
                        className="lift-card rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7"
                        data-testid="liquid-next-granulates"
                    >
                        <div className="eyebrow">{t("cta.drill_in")}</div>
                        <div className="font-serif text-3xl mt-2">{t("fam.granulates.title")}</div>
                        <p className="text-slate-400 mt-3 text-sm">{t("fam.granulates.body")}</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-kelp-400 text-sm">
                            {t("cta.open")} <ArrowRight className="h-4 w-4" />
                        </div>
                    </Link>
                    <Link
                        to="/lawns-and-turf"
                        className="lift-card rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7"
                        data-testid="liquid-next-turf"
                    >
                        <div className="eyebrow">{t("cta.drill_in")}</div>
                        <div className="font-serif text-3xl mt-2">{t("fam.turf.title")}</div>
                        <p className="text-slate-400 mt-3 text-sm">{t("fam.turf.body")}</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-kelp-400 text-sm">
                            {t("cta.open")} <ArrowRight className="h-4 w-4" />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
