import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Package, Clock, ShieldCheck } from "lucide-react";
import { GRANULATES, BRAND } from "@/data/content";
import { useT } from "@/i18n/i18n";

export default function Granulates() {
    const t = useT();
    return (
        <div className="pt-12 pb-32 noise-overlay earth-bg min-h-screen" data-testid="granulates-page">
            <section className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
                <Link to="/" className="eyebrow text-amber-200/70 hover:text-amber-100" data-testid="granulates-back">
                    {t("cta.back_brand")}
                </Link>
                <div className="grid lg:grid-cols-12 gap-10 mt-5 items-end">
                    <div className="lg:col-span-7">
                        <h1 className="font-serif text-5xl sm:text-6xl leading-[1] tracking-tight">
                            {t("page.granulates.title")}
                        </h1>
                        <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-2xl">
                            {t("page.granulates.intro")}
                        </p>
                    </div>
                    <div className="lg:col-span-5 grid grid-cols-3 gap-3 text-center">
                        {[
                            { v: "12 wk", k: "Release activity in soil" },
                            { v: "65 %", k: "Organic matter typical" },
                            { v: "2 – 6 mm", k: "Conditioner particle band" },
                        ].map((s) => (
                            <div key={s.k} className="rounded-xl border border-amber-500/20 bg-black/30 p-4" data-testid={`granulate-stat-${s.v}`}>
                                <div className="font-serif text-2xl text-amber-200">{s.v}</div>
                                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400 mt-1">
                                    {s.k}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {GRANULATES.map((g, idx) => (
                <section key={g.slug} className="max-w-7xl mx-auto px-5 lg:px-8 mt-24 relative z-10" data-testid={`granulate-section-${g.slug}`}>
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5">
                            <div className="rounded-3xl bg-gradient-to-br from-[#2A1A0F] to-[#0E0B09] border border-amber-500/15 p-8 h-full relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80"
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover opacity-25"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1412]/85 via-[#0E0B09]/80 to-[#0E0B09]/95" />
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,90,43,0.18),transparent_55%)]" />
                                {/* Decorative granule cluster */}
                                <div className="aspect-[4/5] relative z-10 flex items-center justify-center">
                                    <div className="grid grid-cols-7 gap-1.5 rotate-[-8deg]">
                                        {Array.from({ length: 49 }).map((_, i) => {
                                            const sizes = idx === 0 ? [10, 13, 16, 12] : [7, 9, 8, 10];
                                            const sz = sizes[i % sizes.length];
                                            const tones = ["#3F2A18", "#5C3A1E", "#8B5A2B", "#2E5C42", "#1F3F2E"];
                                            const c = tones[i % tones.length];
                                            return (
                                                <span
                                                    key={i}
                                                    className="rounded-full"
                                                    style={{
                                                        width: sz,
                                                        height: sz,
                                                        background: c,
                                                        boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.6)",
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 px-4 py-3 rounded-lg bg-black/60 border border-amber-500/20 text-center backdrop-blur-sm">
                                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-amber-200/70">
                                        McLIR Granulate
                                    </div>
                                    <div className="font-serif text-lg mt-0.5">
                                        {g.spec.find(([k]) => k === "Particle size")?.[1]}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="eyebrow text-amber-200/70 inline-flex items-center gap-2">
                                <Sprout className="h-3 w-3" /> Granulate · 0{idx + 1}
                            </div>
                            <h2 className="font-serif text-4xl mt-2 text-white">{g.name}</h2>
                            <p className="mt-4 text-slate-300 leading-relaxed">{g.summary}</p>

                            <div className="mt-6 rounded-xl border border-amber-500/15 bg-black/30 overflow-hidden">
                                <div className="px-5 py-3 bg-white/5 eyebrow text-amber-200/70">Technical specification</div>
                                <table className="tech-table w-full">
                                    <tbody>
                                        {g.spec.map(([k, v]) => (
                                            <tr key={k}>
                                                <th className="w-[42%]">{k}</th>
                                                <td className="text-slate-200 font-mono text-xs">{v}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6">
                                <div className="eyebrow text-amber-200/70 mb-3">Use cases</div>
                                <div className="flex flex-wrap gap-2">
                                    {g.useCases.map((u) => (
                                        <span
                                            key={u}
                                            className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-100"
                                        >
                                            {u}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-3 mt-6 text-sm">
                                <div className="rounded-lg border border-amber-500/15 bg-black/30 p-4">
                                    <div className="eyebrow text-amber-200/70"><Clock className="inline h-3 w-3 mr-1" /> Application rate</div>
                                    <div className="mt-1 text-slate-200">{g.rate}</div>
                                </div>
                                <div className="rounded-lg border border-amber-500/15 bg-black/30 p-4">
                                    <div className="eyebrow text-amber-200/70"><Package className="inline h-3 w-3 mr-1" /> Packaging</div>
                                    <div className="mt-1 text-slate-200">{g.packaging.join(" · ")}</div>
                                </div>
                                <div className="rounded-lg border border-amber-500/15 bg-black/30 p-4">
                                    <div className="eyebrow text-amber-200/70"><ShieldCheck className="inline h-3 w-3 mr-1" /> Storage</div>
                                    <div className="mt-1 text-slate-200">{g.storage}</div>
                                </div>
                            </div>

                            <a
                                href={`mailto:${BRAND.email}?subject=${encodeURIComponent(`Granulate sample request — ${g.name}`)}`}
                                className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white text-sm font-medium transition-colors"
                                data-testid={`granulate-sample-cta-${g.slug}`}
                            >
                                Request a sample <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>
            ))}

            <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        to="/manufacturing"
                        className="lift-card rounded-2xl border border-amber-500/20 bg-black/30 p-7"
                        data-testid="granulates-next-process"
                    >
                        <div className="eyebrow text-amber-200/70">Process</div>
                        <div className="font-serif text-3xl mt-2">From harvest to bay number</div>
                        <p className="text-slate-400 mt-3 text-sm">75 °C drying, 12 – 14 % moisture, fully traceable.</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-amber-200 text-sm">
                            Open <ArrowRight className="h-4 w-4" />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
