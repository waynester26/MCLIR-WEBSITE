import { Link } from "react-router-dom";
import { ArrowRight, Beaker, Package, Clock, ShieldCheck, FileText } from "lucide-react";
import { WSP, BRAND } from "@/data/content";

export default function WaterSolublePowder() {
    return (
        <div className="pt-12 pb-32" data-testid="wsp-page">
            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white" data-testid="wsp-back">
                    ← McLir Seaweed
                </Link>
                <div className="grid lg:grid-cols-12 gap-10 mt-5">
                    <div className="lg:col-span-7">
                        <div className="eyebrow">Soluble solids</div>
                        <h1 className="font-serif text-5xl sm:text-6xl mt-3 leading-[1] tracking-tight">{WSP.name}</h1>
                        <p className="mt-3 italic font-serif text-2xl text-kelp-300">{WSP.tagline}</p>
                        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">{WSP.summary}</p>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="liquid-vessel rounded-3xl p-8 h-full flex flex-col items-center justify-center relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(46,92,66,0.15),transparent_60%)]" />
                            <div className="relative z-10 text-center">
                                <div className="mx-auto w-44 h-56 rounded-2xl bg-gradient-to-b from-[#1A2A1F] to-[#070E08] border border-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] flex items-center justify-center">
                                    <div className="text-center px-3">
                                        <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-kelp-400">McLir</div>
                                        <div className="font-serif text-2xl text-white mt-1 leading-tight">Water Soluble<br />Powder</div>
                                        <div className="mt-3 mx-auto h-px w-12 bg-kelp-500/40" />
                                        <div className="mt-3 font-mono text-[10px] text-slate-400">25 kg net</div>
                                    </div>
                                </div>
                                <div className="mt-5 eyebrow">Spray-dried · Ascophyllum nodosum</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 mt-16">
                    <div className="lg:col-span-7">
                        <div className="rounded-xl border border-white/10 overflow-hidden">
                            <div className="px-5 py-3 bg-white/5 eyebrow flex items-center gap-2">
                                <FileText className="h-3 w-3" /> Technical specification
                            </div>
                            <table className="tech-table w-full">
                                <tbody>
                                    {WSP.spec.map(([k, v]) => (
                                        <tr key={k}>
                                            <th className="w-[42%]">{k}</th>
                                            <td className="text-slate-200 font-mono text-xs">{v}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="eyebrow flex items-center gap-2 mb-4"><Beaker className="h-3 w-3" /> What it supports</div>
                        <ul className="space-y-3 text-slate-300">
                            {WSP.benefits.map((b) => (
                                <li key={b} className="flex gap-3 text-sm leading-relaxed">
                                    <span className="text-kelp-400 mt-0.5">✦</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-12">
                    <div className="rounded-xl border border-white/10 p-6 bg-[#0A1628]/60" data-testid="wsp-rate">
                        <div className="eyebrow"><Clock className="inline h-3 w-3 mr-1" /> Application rate</div>
                        <div className="mt-2 text-slate-200 leading-relaxed">{WSP.rate}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 p-6 bg-[#0A1628]/60" data-testid="wsp-packaging">
                        <div className="eyebrow"><Package className="inline h-3 w-3 mr-1" /> Packaging</div>
                        <div className="mt-2 text-slate-200 leading-relaxed">{WSP.packaging.join(" · ")}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 p-6 bg-[#0A1628]/60" data-testid="wsp-storage">
                        <div className="eyebrow"><ShieldCheck className="inline h-3 w-3 mr-1" /> Storage & shelf life</div>
                        <div className="mt-2 text-slate-200 leading-relaxed">{WSP.storage}</div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-kelp-700/30 to-ink-700/30 p-8">
                    <div>
                        <div className="eyebrow">Order &amp; sample</div>
                        <div className="font-serif text-2xl mt-2">Free samples ship to verified customers.</div>
                    </div>
                    <a
                        href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Water Soluble Powder — sample request")}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white text-sm font-medium transition-colors"
                        data-testid="wsp-sample-cta"
                    >
                        Request a sample <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
