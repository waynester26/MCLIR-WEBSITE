import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight, Building2, Truck, FileCheck } from "lucide-react";
import { BRAND } from "@/data/content";

const TILES = [
    { icon: Building2, label: "Operation", value: BRAND.location },
    { icon: Mail, label: "E-mail", value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: Truck, label: "Logistics", value: "Pallet, big-bag, container" },
    { icon: FileCheck, label: "Documentation", value: "EU spec sheets, MSDS, COA" },
];

const SUBJECTS = [
    "Liquid Seaweed sample",
    "Granulate sample",
    "Water Soluble Powder sample",
    "Animal feed enquiry",
    "Distribution / partnership",
];

export default function Contact() {
    return (
        <div className="pt-12 pb-32" data-testid="contact-page">
            <section className="max-w-7xl mx-auto px-5 lg:px-8">
                <Link to="/" className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white" data-testid="contact-back">
                    ← McLir Seaweed
                </Link>
                <div className="grid lg:grid-cols-12 gap-10 mt-5">
                    <div className="lg:col-span-7">
                        <div className="eyebrow">Contact</div>
                        <h1 className="mt-3 font-serif text-5xl sm:text-7xl leading-[0.95] tracking-tight">
                            Tell us what you grow, raise or formulate.
                        </h1>
                        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
                            Real humans answer — typically within one working day. Sample shipments to verified
                            growers, mills and feed compounders are free. Bulk and own-label enquiries handled directly
                            from our Plombières operation.
                        </p>

                        <div className="mt-10 grid sm:grid-cols-2 gap-4">
                            {TILES.map((t) => {
                                const Wrap = t.href ? "a" : "div";
                                return (
                                    <Wrap
                                        key={t.label}
                                        {...(t.href ? { href: t.href } : {})}
                                        className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-5 flex items-start gap-4 lift-card"
                                        data-testid={`contact-tile-${t.label.toLowerCase()}`}
                                    >
                                        <div className="rounded-lg w-11 h-11 flex items-center justify-center bg-kelp-600/15 border border-kelp-500/30 shrink-0">
                                            <t.icon className="h-5 w-5 text-kelp-400" />
                                        </div>
                                        <div>
                                            <div className="eyebrow">{t.label}</div>
                                            <div className="font-serif text-xl mt-1 break-words">{t.value}</div>
                                        </div>
                                    </Wrap>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-kelp-700/30 to-ink-700/40 p-8" data-testid="contact-mailbox">
                            <div className="eyebrow">Direct mailbox</div>
                            <div className="font-serif text-4xl mt-3 leading-tight break-words">
                                <a href={`mailto:${BRAND.email}`} className="hover:text-kelp-300 transition-colors" data-testid="contact-email-large">
                                    {BRAND.email}
                                </a>
                            </div>
                            <div className="mt-3 inline-flex items-center gap-2 text-slate-300 text-sm">
                                <MapPin className="h-4 w-4 text-kelp-400" /> {BRAND.location}
                            </div>

                            <div className="mt-8">
                                <div className="eyebrow mb-3">Quick subjects</div>
                                <div className="space-y-2">
                                    {SUBJECTS.map((s) => (
                                        <a
                                            key={s}
                                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent(s)}`}
                                            className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
                                            data-testid={`contact-subject-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                        >
                                            <span>{s}</span>
                                            <ArrowRight className="h-4 w-4 text-kelp-400" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 rounded-3xl border border-white/10 bg-[#040912] p-10" data-testid="contact-export">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="eyebrow">Export ready</div>
                            <h2 className="font-serif text-3xl mt-3 leading-tight">
                                Plombières — central, bonded, container-ready.
                            </h2>
                            <p className="mt-4 text-slate-400 leading-relaxed">
                                From Belgium we move pallets across the EU within days, big-bags and container loads
                                worldwide on request. Documentation is prepared per market: EU feed material declarations,
                                MSDS, COA, organic-input statements and customer-specific QA paperwork.
                            </p>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-300">
                            {["Pallet · 25 kg & 20 kg PE bags", "Big-bag · 1 000 kg", "IBC · 1 000 L liquids", "Drum · 200 L liquids", "Container · LCL & FCL", "Cold-chain · FBAM only"].map((l) => (
                                <li key={l} className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#0A1628]/40 px-4 py-3">
                                    <span className="h-2 w-2 rounded-full bg-kelp-500" />
                                    <span>{l}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
