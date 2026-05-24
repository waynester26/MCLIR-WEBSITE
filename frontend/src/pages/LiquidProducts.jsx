import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Beaker, FileText, Package, Clock, ShieldCheck } from "lucide-react";
import { LIQUID_PRODUCTS, BRAND } from "@/data/content";
import { useT } from "@/i18n/i18n";

function ProductPanel({ p, t }) {
    return (
        <div data-testid={`liquid-panel-${p.slug}`} className="grid lg:grid-cols-12 gap-10">
            {/* Visual — premium liquid vessel with kelp backdrop */}
            <div className="lg:col-span-5">
                <div className="liquid-vessel rounded-3xl p-8 h-full flex items-center justify-center relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1567001847230-ed5da95bd055?auto=format&fit=crop&w=900&q=80"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/55 via-[#050B14]/70 to-[#050B14]/95" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(46,92,66,0.32),transparent_60%)]" />
                    <div className="relative z-10 text-center">
                        <div className="mx-auto w-40 h-72 rounded-[2rem] bg-gradient-to-b from-kelp-700 via-[#0F2A1B] to-[#050B14] border border-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] relative">
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 rounded-sm bg-[#0A1628] border border-white/10" />
                            <div className="absolute top-7 left-1/2 -translate-x-1/2 w-24 h-6 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="font-mono text-[9px] tracking-[0.25em] text-kelp-400">McLIR</span>
                            </div>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-28 px-2 py-3 rounded-md bg-[#050B14]/90 border border-white/10 text-center">
                                <div className="font-serif text-base text-white leading-none">{p.name.split("—")[0].trim()}</div>
                                <div className="mt-1 font-mono text-[8px] tracking-[0.22em] text-kelp-400 uppercase">
                                    {p.line}
                                </div>
                            </div>
                            <div className="absolute inset-x-4 inset-y-16 rounded-xl bg-gradient-to-b from-kelp-500/30 to-kelp-700/40 blur-md opacity-60" />
                        </div>
                        <div className="mt-6 eyebrow text-slate-200">100 % Ascophyllum nodosum · {t("hero.medallion_caption")}</div>
                    </div>
                </div>
            </div>

            {/* Detail */}
            <div className="lg:col-span-7">
                <div className="eyebrow">{p.line}</div>
                <h3 className="font-serif text-3xl sm:text-4xl mt-2 leading-tight" data-testid={`liquid-name-${p.slug}`}>
                    {p.name}
                </h3>
                <p className="mt-4 text-slate-400 leading-relaxed">{p.summary}</p>

                <div className="grid sm:grid-cols-2 gap-3 mt-6 text-sm">
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow"><Droplet className="inline h-3 w-3 mr-1" /> {t("liquid.source")}</div>
                        <div className="mt-1 text-slate-200">{p.source}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow"><Beaker className="inline h-3 w-3 mr-1" /> {t("liquid.extraction")}</div>
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
                                    <th className="w-[42%]">{k}</th>
                                    <td className="text-slate-200 font-mono text-xs">{v}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

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

                {/* Rate, packaging, storage */}
                <div className="grid sm:grid-cols-3 gap-3 mt-7 text-sm">
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow"><Clock className="inline h-3 w-3 mr-1" /> {t("liquid.rate")}</div>
                        <div className="mt-1 text-slate-200 leading-relaxed">{p.rate}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow"><Package className="inline h-3 w-3 mr-1" /> {t("liquid.packaging")}</div>
                        <div className="mt-1 text-slate-200 leading-relaxed">{p.packaging.join(" · ")}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 p-4">
                        <div className="eyebrow"><ShieldCheck className="inline h-3 w-3 mr-1" /> {t("liquid.storage")}</div>
                        <div className="mt-1 text-slate-200 leading-relaxed">{p.storage}</div>
                    </div>
                </div>

                <div className="mt-5 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200/80 font-mono">
                    {t("liquid.batch_note")} · {p.batchNote}
                </div>

                <div className="mt-7">
                    <a
                        href={`mailto:${BRAND.email}?subject=${encodeURIComponent(`Sample request — ${p.name}`)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white text-sm font-medium transition-colors"
                        data-testid={`liquid-sample-cta-${p.slug}`}
                    >
                        {t("cta.request_sample")} <ArrowRight className="h-4 w-4" />
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
            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white" data-testid="liquid-back">
                    {t("cta.back_brand")}
                </Link>
                <h1 className="mt-5 font-serif text-5xl sm:text-6xl leading-[1] tracking-tight">
                    {t("page.liquid.title")}
                </h1>
                <p className="mt-5 max-w-3xl text-slate-400 text-lg leading-relaxed">
                    {t("page.liquid.intro")}
                </p>

                {/* Selector tabs */}
                <div className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-1" data-testid="liquid-tabs">
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
                            {p.name.replace("Liquid Seaweed ", "").replace(" — ", " · ")}
                        </button>
                    ))}
                </div>

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
                        data-testid="liquid-next-lawns"
                    >
                        <div className="eyebrow">{t("page.lawns.eyebrow")}</div>
                        <div className="font-serif text-3xl mt-2">{t("page.lawns.title")}</div>
                        <p className="text-slate-400 mt-3 text-sm">{t("lawns.programme.body")}</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-kelp-400 text-sm">
                            {t("cta.open")} <ArrowRight className="h-4 w-4" />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
