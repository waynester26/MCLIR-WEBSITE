import { Link } from "react-router-dom";
import { ArrowRight, Beef, Droplet, Wheat, Bone, FlaskConical, Package, Mail, ChevronRight, Snowflake } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LabelList,
} from "recharts";
import {
    BRAND,
    FEED_NUTRITION,
    FEED_MINERALS,
    FEED_VITAMINS,
    FEED_AAS,
    FEEDING_GUIDE,
    PARTICLE_SIZES,
    FEED_PACKAGING,
} from "@/data/content";

// --- chart data derived from brochure ---
const COMPOSITION_PIE = [
    { name: "Carbohydrates", value: 56, color: "#2E5C42" },
    { name: "Dietary fibre", value: 51, color: "#5A9A78" },
    { name: "Alginic acid", value: 22, color: "#8B5A2B" },
    { name: "Ash", value: 22, color: "#1A365D" },
    { name: "Sugar", value: 9, color: "#D4AF37" },
    { name: "Protein", value: 5, color: "#C97B3F" },
    { name: "Fat", value: 2, color: "#94A3B8" },
];

const FEEDING_BAR = [
    { species: "Dairy cow", g: 125 },
    { species: "Heavy horse", g: 150 },
    { species: "Beef cattle", g: 100 },
    { species: "Stallion", g: 125 },
    { species: "Ewe / doe", g: 65 },
    { species: "Goat", g: 65 },
    { species: "Calf", g: 40 },
    { species: "Lamb / kid", g: 25 },
];

const SUB_NAV = [
    { id: "why", label: "Why seaweed for animals" },
    { id: "benefits", label: "Benefits by livestock" },
    { id: "fbam", label: "Fresh Frozen FBAM" },
    { id: "dry-meal", label: "Dry seaweed meal" },
    { id: "composition", label: "Minerals · Vitamins · AAs" },
    { id: "feeding", label: "Feeding recommendations" },
    { id: "particle", label: "Particle sizes" },
    { id: "packaging", label: "Packaging" },
];

const SPECIES = [
    {
        icon: Beef,
        title: "Dairy & beef cattle",
        body: "Supports fertility and easier calving. Helps maintain feed efficiency and protein utilisation. Contributes to udder health and stronger hooves.",
        keys: ["Fertility", "Calving ease", "Hoof health"],
    },
    {
        icon: Wheat,
        title: "Sheep & goats",
        body: "Designed to support easier lambing, contribute to milk production and help maintain hoof health through the production cycle.",
        keys: ["Lambing ease", "Milk yield", "Hoof"],
    },
    {
        icon: Bone,
        title: "Equine — leisure to performance",
        body: "Supports recovery, contributes to coat condition and electrolyte balance. Suitable from young stock and mares to stallions and competition horses.",
        keys: ["Recovery", "Coat", "Electrolytes"],
    },
    {
        icon: Droplet,
        title: "Poultry, dogs, cats & small pets",
        body: "Naturally balanced minerals, trace elements and amino acids — designed for daily inclusion in compound feeds, kibble or wet diets.",
        keys: ["Coat & skin", "Pigmentation", "Vitality"],
    },
];

function SectionTitle({ eyebrow, title, kicker }) {
    return (
        <div className="mb-10">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">{title}</h2>
            {kicker ? <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">{kicker}</p> : null}
        </div>
    );
}

export default function AnimalFeeding() {
    return (
        <div className="pt-12 pb-32" data-testid="animal-feeding-page">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1659148566517-9dfe52f802ac?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800"
                        alt=""
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/70 via-[#050B14]/85 to-[#050B14]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20">
                    <Link to="/" className="eyebrow text-slate-300 hover:text-white" data-testid="feed-back">
                        ← McLir Seaweed
                    </Link>
                    <div className="eyebrow mt-6 text-amber-200/80">Chapter — Animal feeding</div>
                    <h1 className="mt-3 font-serif text-5xl sm:text-7xl leading-[0.95] tracking-tight max-w-4xl">
                        A natural multimineral feed material — vegetable origin, easily digested, suitable for animals of all ages.
                    </h1>
                    <p className="mt-6 max-w-3xl text-slate-300 text-lg leading-relaxed">
                        Atlantic <em>Ascophyllum nodosum</em> harvested off the west coast of Ireland, low-temperature dried,
                        fine-milled to your micron specification, delivered to feed mills, dairy and beef farms,
                        equine yards, sheep flocks, goat herds, poultry operations and pet-food formulators across
                        Europe and beyond.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#feeding"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white text-sm font-medium transition-colors"
                            data-testid="feed-cta-feeding"
                        >
                            View feeding guide <ArrowRight className="h-4 w-4" />
                        </a>
                        <Link
                            to="/manufacturing"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-colors"
                            data-testid="feed-cta-process"
                        >
                            Manufacturing process <ChevronRight className="h-4 w-4" />
                        </Link>
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Animal feed enquiry")}`}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-200 hover:text-white text-sm font-medium transition-colors"
                            data-testid="feed-cta-mail"
                        >
                            <Mail className="h-4 w-4" /> {BRAND.email}
                        </a>
                    </div>
                </div>
            </section>

            {/* SUB-NAV */}
            <section className="sticky top-[72px] z-30 glass-nav border-b border-white/5" data-testid="feed-subnav">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-3 flex gap-1 overflow-x-auto scrollbar-hide">
                    {SUB_NAV.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            data-testid={`feed-subnav-${s.id}`}
                            className="px-3 py-2 rounded-full text-xs font-mono uppercase tracking-[0.18em] text-slate-300 hover:text-white hover:bg-white/5 whitespace-nowrap transition-colors"
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
            </section>

            {/* WHY */}
            <section id="why" className="max-w-7xl mx-auto px-5 lg:px-8 py-20" data-testid="feed-why">
                <SectionTitle
                    eyebrow="01 · Why seaweed for animals"
                    title="What modern soils and pastures no longer fully provide, the Atlantic still does."
                    kicker="Modern soils and pastures are often depleted of essential minerals and trace elements. Seaweed naturally replenishes what intensive farming has removed — in a bioavailable, vegetable-origin form that complements rather than replaces the rest of the ration."
                />
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { t: "Naturally balanced", d: "Readily-absorbed minerals, trace elements, amino acids and vitamins, present together in proportions the animal can use." },
                        { t: "Vegetable origin", d: "Easily digested, suitable for all ages, free from animal proteins and synthetic additives." },
                        { t: "Compliant positioning", d: "We use compliant, evidence-led wording: supports digestive efficiency, contributes to gut balance, helps maintain animal performance." },
                    ].map((b, i) => (
                        <div key={i} className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 lift-card" data-testid={`feed-why-${i}`}>
                            <div className="font-serif text-2xl">{b.t}</div>
                            <p className="mt-3 text-slate-400 text-sm leading-relaxed">{b.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENEFITS */}
            <section id="benefits" className="max-w-7xl mx-auto px-5 lg:px-8 py-20" data-testid="feed-benefits">
                <SectionTitle
                    eyebrow="02 · Benefits by livestock"
                    title="Designed for the calendar your animals actually live by."
                />
                <div className="grid md:grid-cols-2 gap-6">
                    {SPECIES.map((s, i) => (
                        <div key={i} className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7 lift-card" data-testid={`feed-species-${i}`}>
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg w-11 h-11 flex items-center justify-center bg-amber-500/10 border border-amber-500/30">
                                    <s.icon className="h-5 w-5 text-amber-300" />
                                </div>
                                <h3 className="font-serif text-2xl">{s.title}</h3>
                            </div>
                            <p className="mt-4 text-slate-400 leading-relaxed text-sm">{s.body}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {s.keys.map((k) => (
                                    <span key={k} className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-mono text-amber-100">
                                        {k}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FBAM */}
            <section id="fbam" className="noise-overlay earth-bg" data-testid="feed-fbam">
                <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7">
                            <SectionTitle
                                eyebrow="03 · Fresh Frozen FBAM"
                                title="Frozen at peak — the rawest expression of the harvest."
                                kicker="Fresh Frozen Animal Feed (FBAM) is washed, milled and immediately frozen into block-slab format. It is the closest representation of the seaweed's original, water-rich state — for customers who prioritise raw bioactive density over shelf-stable convenience."
                            />
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li className="flex gap-2"><span className="text-amber-300">▸</span> Hand-cut Atlantic Ascophyllum nodosum, washed in clean seawater.</li>
                                <li className="flex gap-2"><span className="text-amber-300">▸</span> Hammer-milled then immediately frozen — no thermal step.</li>
                                <li className="flex gap-2"><span className="text-amber-300">▸</span> Packed in frozen block-slab format for direct on-farm use.</li>
                                <li className="flex gap-2"><span className="text-amber-300">▸</span> Best suited to large dairy and beef operations with cold-chain capacity.</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="rounded-3xl border border-amber-500/20 bg-black/30 p-6 h-full">
                                <div className="aspect-[4/5] rounded-2xl border border-white/10 relative overflow-hidden">
                                    {/* Frozen / ice photographic background */}
                                    <img
                                        src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&w=900&q=80"
                                        alt="Frozen ice texture"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/30 via-[#0A1628]/55 to-[#050B14]/85" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(120,170,200,0.18),transparent_60%)]" />
                                    {/* Snowflake decoration */}
                                    <Snowflake className="absolute top-5 right-5 h-5 w-5 text-cyan-200/60" />
                                    <Snowflake className="absolute bottom-7 left-6 h-3.5 w-3.5 text-cyan-200/40" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center px-6">
                                            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-200/90 drop-shadow">
                                                FBAM · Frozen Block
                                            </div>
                                            <div className="font-serif text-5xl mt-3 text-white drop-shadow-lg">−18 °C</div>
                                            <div className="mt-3 text-xs text-cyan-100/80 font-mono">Peak nutrient retention</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <div className="rounded-lg border border-amber-500/15 p-3">
                                        <div className="eyebrow text-amber-200/70">Format</div>
                                        <div className="font-mono text-xs mt-1 text-slate-200">Frozen slab</div>
                                    </div>
                                    <div className="rounded-lg border border-amber-500/15 p-3">
                                        <div className="eyebrow text-amber-200/70">MOQ</div>
                                        <div className="font-mono text-xs mt-1 text-slate-200">Pallet level</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DRY MEAL */}
            <section id="dry-meal" className="max-w-7xl mx-auto px-5 lg:px-8 py-20" data-testid="feed-dry-meal">
                <SectionTitle
                    eyebrow="04 · Dry seaweed meal"
                    title="Shelf-stable. Mill-ready. Fine-milled to your micron specification."
                    kicker="Our flagship feed format. Controlled drying never exceeds 75 °C and the final moisture window is held at 12 – 14 % — proven to combine shelf-stability with nutrient retention."
                />
                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 rounded-2xl border border-white/10 overflow-hidden">
                        <div className="px-5 py-3 bg-white/5 eyebrow">Composition · typical analysis</div>
                        <table className="tech-table w-full">
                            <thead>
                                <tr>
                                    <th>Component</th>
                                    <th>Typical value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEED_NUTRITION.map(([k, v]) => (
                                    <tr key={k}>
                                        <th className="text-slate-200 font-sans text-sm normal-case tracking-normal">{k}</th>
                                        <td className="text-kelp-300 font-mono text-xs">{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Composition donut chart with kelp photo backdrop */}
                    <div className="lg:col-span-5 rounded-2xl border border-white/10 overflow-hidden relative" data-testid="feed-composition-donut">
                        <img
                            src="https://images.unsplash.com/photo-1567001847230-ed5da95bd055?auto=format&fit=crop&w=900&q=80"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-25"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/85 via-[#050B14]/80 to-[#050B14]/95" />
                        <div className="relative p-6 sm:p-7 h-full flex flex-col">
                            <div className="eyebrow">Composition · visual</div>
                            <div className="font-serif text-2xl mt-1 text-white">Dry meal at a glance</div>
                            <div className="flex-1 h-[260px] mt-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={COMPOSITION_PIE}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={56}
                                            outerRadius={100}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {COMPOSITION_PIE.map((d) => (
                                                <Cell key={d.name} fill={d.color} stroke="#050B14" />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                background: "#050B14",
                                                border: "1px solid #1E293B",
                                                borderRadius: 8,
                                                color: "#F8FAFC",
                                            }}
                                            formatter={(v, n) => [`${v} %`, n]}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
                                {COMPOSITION_PIE.map((d) => (
                                    <li key={d.name} className="flex items-center justify-between text-[11px] font-mono">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                                            <span className="text-slate-300">{d.name}</span>
                                        </div>
                                        <span className="text-slate-400">{d.value} %</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPOSITION */}
            <section id="composition" className="bg-[#040912] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20" data-testid="feed-composition">
                    <SectionTitle
                        eyebrow="05 · Minerals · Vitamins · Amino acids"
                        title="The mineral and vitamin density of an Atlantic species, presented at a glance."
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 overflow-hidden" data-testid="feed-minerals-table">
                            <div className="px-5 py-3 bg-white/5 eyebrow">Minerals & trace elements</div>
                            <table className="tech-table w-full">
                                <tbody>
                                    {FEED_MINERALS.map(([k, v]) => (
                                        <tr key={k}>
                                            <th className="text-slate-200 font-sans text-sm normal-case tracking-normal w-[55%]">{k}</th>
                                            <td className="text-slate-400 text-sm">{v}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-2xl border border-white/10 overflow-hidden" data-testid="feed-vitamins-table">
                                <div className="px-5 py-3 bg-white/5 eyebrow">Vitamins</div>
                                <table className="tech-table w-full">
                                    <tbody>
                                        {FEED_VITAMINS.map(([k, v]) => (
                                            <tr key={k}>
                                                <th className="text-slate-200 font-sans text-sm normal-case tracking-normal w-[55%]">{k}</th>
                                                <td className="text-slate-400 text-sm">{v}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="rounded-2xl border border-white/10 p-5" data-testid="feed-aas-list">
                                <div className="eyebrow mb-3">Amino acids identified</div>
                                <div className="flex flex-wrap gap-2">
                                    {FEED_AAS.map((a) => (
                                        <span key={a} className="px-3 py-1 rounded-full bg-kelp-600/15 border border-kelp-500/30 text-xs font-mono text-kelp-300">
                                            {a}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 font-mono mt-4 leading-relaxed">
                                    Bioactive compounds also identified: alginic acid, mannitol, fucoidans, polyphenols.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEEDING */}
            <section id="feeding" className="max-w-7xl mx-auto px-5 lg:px-8 py-20" data-testid="feed-feeding">
                <SectionTitle
                    eyebrow="06 · Feeding recommendations"
                    title="A complete daily-dose matrix from foal to feline."
                    kicker="Mix with the regular ration. Adjust for activity level, lactation, growth and environmental stress. The figures below are starting points based on McLir's commercial customer base."
                />

                {/* Comparison chart */}
                <div className="rounded-2xl border border-white/10 overflow-hidden mb-8 relative" data-testid="feed-dose-bar">
                    <img
                        src="https://images.unsplash.com/photo-1659148566517-9dfe52f802ac?auto=format&fit=crop&w=1600&q=80"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/95 via-[#050B14]/85 to-[#050B14]/95" />
                    <div className="relative p-6 sm:p-8">
                        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
                            <div>
                                <div className="eyebrow">Average daily dose · grams</div>
                                <div className="font-serif text-2xl mt-1 text-white">
                                    Across the McLir feed portfolio
                                </div>
                            </div>
                            <div className="text-xs text-slate-500 font-mono">Indicative midpoints — adjust per animal</div>
                        </div>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={FEEDING_BAR} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                                    <CartesianGrid stroke="#1E293B" strokeDasharray="2 4" vertical={false} />
                                    <XAxis dataKey="species" tick={{ fill: "#94A3B8", fontSize: 11 }} interval={0} angle={-15} textAnchor="end" height={60} />
                                    <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} unit=" g" />
                                    <Tooltip
                                        contentStyle={{
                                            background: "#050B14",
                                            border: "1px solid #1E293B",
                                            borderRadius: 8,
                                            color: "#F8FAFC",
                                        }}
                                        formatter={(v) => [`${v} g / day`, "Dose"]}
                                    />
                                    <Bar dataKey="g" fill="#3C7A58" radius={[6, 6, 0, 0]}>
                                        <LabelList dataKey="g" position="top" fill="#94A3B8" fontSize={10} />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 overflow-hidden">
                    <table className="tech-table w-full">
                        <thead>
                            <tr>
                                <th>Animal · stage</th>
                                <th>Recommended dose</th>
                                <th>Designed to support</th>
                            </tr>
                        </thead>
                        <tbody>
                            {FEEDING_GUIDE.map((row, i) => (
                                <tr key={i} data-testid={`feed-row-${i}`}>
                                    <th className="text-slate-200 font-sans text-sm normal-case tracking-normal">{row.animal}</th>
                                    <td className="text-kelp-300 font-mono text-xs">{row.dose}</td>
                                    <td className="text-slate-400 text-sm">{row.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* PARTICLE SIZE */}
            <section id="particle" className="bg-[#040912] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20" data-testid="feed-particle">
                    <SectionTitle
                        eyebrow="07 · Particle sizes"
                        title="Five micron grades, one source material."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {PARTICLE_SIZES.map((p, i) => {
                            const dotSize = 6 + i * 4;
                            return (
                                <div key={p.code} className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-6 text-center" data-testid={`feed-particle-${p.code}`}>
                                    <div className="h-20 flex items-center justify-center">
                                        <span
                                            className="rounded-full"
                                            style={{
                                                width: dotSize * 2,
                                                height: dotSize * 2,
                                                background: "linear-gradient(135deg, #5C3A1E, #2E5C42)",
                                                boxShadow: "0 0 18px rgba(46,92,66,0.4), inset 1px 1px 0 rgba(255,255,255,0.1)",
                                            }}
                                        />
                                    </div>
                                    <div className="font-mono text-xs text-amber-200/70 mt-3">{p.code}</div>
                                    <div className="font-serif text-xl mt-1">{p.label}</div>
                                    <div className="text-xs text-slate-400 mt-2 leading-relaxed">{p.desc}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PACKAGING */}
            <section id="packaging" className="max-w-7xl mx-auto px-5 lg:px-8 py-20" data-testid="feed-packaging-section">
                <SectionTitle
                    eyebrow="08 · Packaging"
                    title="Big-bag to consumer-friendly. Built for export from Plombières."
                />
                <div className="grid md:grid-cols-2 gap-4">
                    {FEED_PACKAGING.map((p, i) => (
                        <div key={i} className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7 flex items-start gap-4 lift-card" data-testid={`feed-pkg-${i}`}>
                            <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-kelp-600/15 border border-kelp-500/30 shrink-0">
                                <Package className="h-5 w-5 text-kelp-400" />
                            </div>
                            <div>
                                <div className="font-serif text-xl">{p.format}</div>
                                <div className="text-sm text-slate-400 mt-1">{p.use}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-700/30 via-kelp-700/20 to-ink-700/30 p-10 text-center" data-testid="feed-final-cta">
                    <FlaskConical className="mx-auto h-8 w-8 text-amber-200" />
                    <div className="font-serif text-3xl sm:text-5xl mt-4 leading-tight">
                        Send us your species, your scale, your particle size.
                    </div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        We will reply with a sample plan, technical specification and an indicative pallet quotation —
                        typically within one working day.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Animal feed enquiry — sample plan")}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white font-medium transition-colors"
                            data-testid="feed-final-mail"
                        >
                            <Mail className="h-4 w-4" /> {BRAND.email}
                        </a>
                        <Link
                            to="/manufacturing"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                            data-testid="feed-final-process"
                        >
                            See the manufacturing process <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
