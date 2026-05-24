// Centralised content authority for McLir Seaweed website
// Focus: Liquid Seaweed + Granulates / Soil Conditioner for
// professional agriculture, corporate farming, lawns and turf,
// luxury landscaping. Distribution: Europe & Middle East.

export const BRAND = {
    name: "McLir Seaweed",
    tagline: "Atlantic Ascophyllum nodosum, refined for professional agriculture and luxury landscaping.",
    email: "McLir@Sea-Weed.DE",
    location: "Plombières, Belgium",
    logo: "https://customer-assets.emergentagent.com/job_seaweed-bio-products/artifacts/6x88xdtg_Mclir%20Logo.png",
};

export const HERO_IMG =
    "https://images.unsplash.com/photo-1697817315238-788e8a16def4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800";

// Premium imagery used across the site
export const IMG = {
    golfGreen: "https://images.unsplash.com/photo-1605147861225-7bcd55f8e513?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    golfFairway: "https://images.unsplash.com/photo-1606443192517-919653213206?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    granulateNatural: "https://images.unsplash.com/photo-1647012250603-9f02b8343af9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    granulateOnSoil: "https://images.unsplash.com/photo-1591830340860-8e6d621851d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    kelpUnderwater: "https://images.pexels.com/photos/12829684/pexels-photo-12829684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    luxuryEstate: "https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    luxuryEstate2: "https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    cornfield: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    liquidBottle: "https://images.unsplash.com/photo-1567001847230-ed5da95bd055?auto=format&fit=crop&w=900&q=80",
};

export const LIQUID_PRODUCTS = [
    {
        slug: "cold-press",
        name: "Liquid Seaweed Cold Press",
        line: "Cold-pressed concentrate",
        summary:
            "Mechanically cold-pressed from fresh Ascophyllum nodosum, preserving the native bioactive profile without thermal denaturation.",
        source: "100% Ascophyllum nodosum (fresh)",
        method: "Cold mechanical pressing — no heat, no synthetic stabilisers.",
        spec: [
            ["Form", "Liquid concentrate"],
            ["Source material", "Fresh Ascophyllum nodosum"],
            ["pH", "4.5 – 5.5"],
            ["Solubility", "Fully water-miscible"],
            ["Colour", "Deep amber / olive"],
            ["Dry matter", "~ 14 – 16 %"],
            ["Organic matter", "~ 70 % of DM"],
        ],
        bioactives: ["Auxins", "Cytokinins", "Betaines", "Alginates", "Mannitol", "Trace minerals"],
        useCases: [
            "Vineyards & orchards — set, finish, drought tolerance",
            "Greenhouse crops — root re-establishment after transplant",
            "Turf, golf greens & sports pitches — recovery & colour",
            "Cereals & root crops — tillering, grain & tuber fill",
        ],
        rate: "1 : 200 to 1 : 500 dilution. Apply foliar or via fertigation every 14 – 21 days.",
        packaging: ["5 L", "20 L", "200 L drum", "1000 L IBC"],
        storage: "Cool, dark, frost-free. Shelf life 24 months from production.",
        batchNote: "Natural product — minor batch-to-batch variability is expected and tolerated.",
    },
    {
        slug: "superior-30-alkaline",
        name: "Liquid Seaweed Superior 30 — Alkaline Extraction",
        line: "Concentrated extract",
        summary:
            "High-load alkaline extract designed for fertigation programmes that require maximal soluble seaweed solids per litre.",
        source: "100% Ascophyllum nodosum (dried, milled feedstock)",
        method: "Controlled alkaline extraction; neutralised and filtered.",
        spec: [
            ["Form", "Liquid concentrate"],
            ["Source material", "Dried Ascophyllum nodosum"],
            ["pH", "9.0 – 10.5"],
            ["Solubility", "Fully soluble in water"],
            ["Colour", "Dark brown / black"],
            ["Dry matter", "~ 30 %"],
            ["Organic matter", "~ 60 % of DM"],
        ],
        bioactives: ["Alginates", "Mannitol", "Polyphenols", "Macro & trace minerals"],
        useCases: [
            "Large-acre arable: cereals, potatoes, sugar beet",
            "Drip-irrigated vegetables & berries",
            "Compatible with most NPK liquid programmes",
        ],
        rate: "2 – 5 L/ha foliar; 5 – 10 L/ha fertigation per cycle.",
        packaging: ["20 L", "200 L drum", "1000 L IBC"],
        storage: "Cool, dark. Shake before use. Shelf life 24 months.",
        batchNote: "Mineral sediment may form on standing — does not affect performance.",
    },
    {
        slug: "superior-30-aqueous",
        name: "Liquid Seaweed Superior 30 — Aqueous Extraction",
        line: "Mild-process extract",
        summary:
            "Water-based extraction (no alkali, no acid) for growers prioritising a near-neutral, residue-conscious profile.",
        source: "100% Ascophyllum nodosum (dried)",
        method: "Aqueous (water-only) extraction at controlled temperature.",
        spec: [
            ["Form", "Liquid concentrate"],
            ["Source material", "Dried Ascophyllum nodosum"],
            ["pH", "6.0 – 7.5"],
            ["Solubility", "Fully water-miscible"],
            ["Colour", "Mid-brown"],
            ["Dry matter", "~ 28 – 30 %"],
            ["Organic matter", "~ 65 % of DM"],
        ],
        bioactives: ["Native polysaccharides", "Mannitol", "Amino acids", "Trace minerals"],
        useCases: [
            "Organic & low-input vegetable production",
            "Soft fruit & viticulture finish sprays",
            "Fertigation in soilless / hydroponic systems",
        ],
        rate: "2 – 4 L/ha foliar; 4 – 8 L/ha through drip systems.",
        packaging: ["20 L", "200 L drum", "1000 L IBC"],
        storage: "Store cool. Shelf life 18 months.",
        batchNote: "Colour darkens slightly with age — performance unaffected.",
    },
    {
        slug: "superior-20-alkaline",
        name: "Liquid Seaweed Superior 20 — Alkaline Extraction",
        line: "Standard concentrate",
        summary:
            "The workhorse alkaline extract — a 20 % dry-matter formulation balancing performance and price for broad-acre and turf programmes.",
        source: "100% Ascophyllum nodosum (dried)",
        method: "Standard alkaline extraction.",
        spec: [
            ["Form", "Liquid concentrate"],
            ["Source material", "Dried Ascophyllum nodosum"],
            ["pH", "9.0 – 10.5"],
            ["Solubility", "Fully soluble"],
            ["Colour", "Dark brown"],
            ["Dry matter", "~ 20 %"],
            ["Organic matter", "~ 60 % of DM"],
        ],
        bioactives: ["Alginates", "Mannitol", "Polyphenols", "Trace minerals"],
        useCases: [
            "Cereals — tillering & grain fill",
            "Apples, grapes, soft fruit — finish & quality",
            "Turf, lawns & sports pitches — colour and recovery",
        ],
        rate: "3 – 5 L/ha foliar; 5 – 10 L/ha fertigation.",
        packaging: ["20 L", "200 L drum", "1000 L IBC"],
        storage: "Cool, dark. Shelf life 24 months.",
        batchNote: "Mineral sediment may form — shake before use.",
    },
];

export const GRANULATES = [
    {
        slug: "soil-conditioner",
        name: "Natural Seaweed Soil Conditioner",
        summary:
            "Coarse-graded dried Ascophyllum nodosum — engineered to open compacted soils, lift cation exchange and feed the soil food web.",
        spec: [
            ["Form", "Dried granulate"],
            ["Particle size", "2 – 6 mm"],
            ["Moisture", "≤ 12 %"],
            ["Organic matter", "~ 65 %"],
            ["Alginates", "~ 18 %"],
            ["Mannitol", "~ 6 %"],
        ],
        useCases: [
            "Lawns, sports turf and golf greens",
            "Poorly structured & compacted soils",
            "Sub-soil rehabilitation programmes",
            "Compost & potting-mix enrichment",
            "Vegetable beds, flowers, shrubs",
        ],
        rate: "100 – 300 kg/ha broadcast; 30 – 60 g/m² for turf and beds.",
        packaging: ["25 kg PE bag", "500 kg big-bag", "1 000 kg big-bag"],
        storage: "Dry, off the floor. Shelf life 24 months.",
    },
    {
        slug: "seaweed-meal",
        name: "Granulated Seaweed Meal",
        summary:
            "Finely milled meal pressed into uniform granules — for blenders, coaters and growers who need precise spreader behaviour on turf and broad-acre.",
        spec: [
            ["Form", "Cylindrical granulate"],
            ["Particle size", "1 – 3 mm"],
            ["Moisture", "12 – 14 %"],
            ["Organic matter", "~ 60 %"],
            ["Ash", "~ 22 %"],
            ["Bulk density", "~ 0.65 kg/L"],
        ],
        useCases: [
            "NPK blenders — uniform mixing & spread",
            "Seed coating & pelleting",
            "Specialty turf maintenance",
            "Slow-release feed for cereals & root crops",
        ],
        rate: "150 – 400 kg/ha depending on crop and soil status.",
        packaging: ["25 kg PE bag", "1 000 kg big-bag"],
        storage: "Dry, sealed. Shelf life 24 months.",
    },
];

export const PROCESS_STEPS = [
    {
        n: "01",
        title: "Atlantic harvest",
        desc: "Ascophyllum nodosum is selectively cut from regulated Atlantic beds and delivered to the factory with a unique delivery number assigned for full traceability.",
    },
    {
        n: "02",
        title: "4 : 1 throughput",
        desc: "Approximately four tonnes of wet seaweed are required to produce one tonne of finished seaweed product — the natural concentration ratio.",
    },
    {
        n: "03",
        title: "Seawater wash",
        desc: "Raw weed is washed with clean seawater to lift silt, sand and shell fragments while preserving the native mineral and bioactive profile.",
    },
    {
        n: "04",
        title: "Hammer milling",
        desc: "Mechanical hammer milling breaks down the cell structure to expose nutrients and prepare the biomass for controlled drying.",
    },
    {
        n: "05",
        title: "Controlled drying — 75 °C",
        desc: "Drying takes place at a maximum of approximately 75 °C, low enough to safeguard heat-sensitive vitamins, alginates and bioactive compounds.",
    },
    {
        n: "06",
        title: "12 – 14 % final moisture",
        desc: "Final moisture is held between 12 % and 14 % — the proven window for shelf-stability without compromising nutrient density.",
    },
    {
        n: "07",
        title: "Granulate sizing & screening",
        desc: "The dried material is sized and screened to particle bands suitable for soil broadcast, turf top-dressing and NPK blending.",
    },
    {
        n: "08",
        title: "Batch numbering",
        desc: "Every shipment is assigned a batch number, linking the finished bag back to the original harvest delivery for full chain-of-custody.",
    },
    {
        n: "09",
        title: "Final bagging",
        desc: "Filled into 1 000 kg big-bags, 25 kg PE bags or 20 kg PE bags depending on customer line.",
    },
    {
        n: "10",
        title: "Palletisation & numbered-bay storage",
        desc: "Pallets are stored in numbered bays for first-in / first-out dispatch and rapid traceable retrieval.",
    },
];

// ─── Market data (indicative figures, directional) ──────────────
// Sources informally referenced: FAO 2024 seaweed sector review,
// MarketsandMarkets biostimulants briefing, public industry reports.
// Used here for business-development context, not financial reporting.

export const MARKET_BY_REGION = [
    { region: "Asia-Pacific", value: 9.8 },
    { region: "Europe", value: 4.2 },
    { region: "North America", value: 2.6 },
    { region: "Latin America", value: 0.9 },
    { region: "Middle East & Africa", value: 0.5 },
    { region: "Ireland (domestic)", value: 0.08 },
];

// Replaced animal feed segment with turf & landscape.
// Values total 100.
export const BUYER_SEGMENTS = [
    { name: "Agricultural biostimulants", value: 38 },
    { name: "Turf & landscape", value: 22 },
    { name: "Food ingredients & hydrocolloids", value: 18 },
    { name: "Cosmetics & personal care", value: 12 },
    { name: "Nutraceuticals & pharma", value: 10 },
];

// Global biostimulants market value — directional, billions USD
export const BIOSTIM_MARKET_GROWTH = [
    { year: "2020", value: 2.5 },
    { year: "2021", value: 2.9 },
    { year: "2022", value: 3.3 },
    { year: "2023", value: 3.8 },
    { year: "2024", value: 4.3 },
    { year: "2025", value: 4.9 },
    { year: "2026", value: 5.6 },
    { year: "2027", value: 6.3 },
    { year: "2028", value: 7.1 },
    { year: "2029", value: 8.0 },
    { year: "2030", value: 9.0 },
];

// European seaweed extract import volume — directional, kilotonnes
export const EU_SEAWEED_IMPORTS = [
    { year: "2018", volume: 18 },
    { year: "2019", volume: 22 },
    { year: "2020", volume: 26 },
    { year: "2021", volume: 31 },
    { year: "2022", volume: 36 },
    { year: "2023", volume: 41 },
    { year: "2024", volume: 47 },
];

// Turf & landscape addressable market by region (directional, billions USD)
export const TURF_BY_REGION = [
    { region: "W. Europe", professional: 3.8, residential: 2.4 },
    { region: "C. & E. Europe", professional: 1.6, residential: 1.1 },
    { region: "UK & Ireland", professional: 2.1, residential: 1.3 },
    { region: "GCC / Middle East", professional: 1.9, residential: 0.6 },
    { region: "North Africa", professional: 0.7, residential: 0.3 },
];

// Drought-stress acreage Europe & Middle East — directional, million hectares
export const DROUGHT_TREND = [
    { year: "2015", hectares: 12 },
    { year: "2016", hectares: 14 },
    { year: "2017", hectares: 18 },
    { year: "2018", hectares: 24 },
    { year: "2019", hectares: 22 },
    { year: "2020", hectares: 26 },
    { year: "2021", hectares: 28 },
    { year: "2022", hectares: 38 },
    { year: "2023", hectares: 41 },
    { year: "2024", hectares: 45 },
];

export const FAQS = [
    {
        q: "Where is McLir Seaweed sourced?",
        a: "Our raw Ascophyllum nodosum is hand-cut from regulated Atlantic beds along the west coast of Ireland and processed at our Plombières, Belgium operation under European agronomic and quality standards.",
    },
    {
        q: "Is it suitable for organic certification?",
        a: "Yes. Our liquid and granular ranges are produced under EU organic input standards (CE 2018/848). OMRI-track formulations are available on request for export markets.",
    },
    {
        q: "How does seaweed support soil and turf?",
        a: "Ascophyllum delivers alginates that improve soil aggregation and water-holding, mannitol that supports plants under osmotic and drought stress, and native plant bioactives (auxins, cytokinins, betaines) that contribute to root development and turf resilience.",
    },
    {
        q: "Tank-mix compatibility?",
        a: "Our liquids are compatible with most NPK and micronutrient programmes. We recommend a small jar test before scaling at field level.",
    },
    {
        q: "Minimum order quantity?",
        a: "Pallet-level for 25 kg / 20 kg formats; single big-bag for 1 t orders. Container loads available for export.",
    },
    {
        q: "Which climates and turf systems is McLir positioned for?",
        a: "The portfolio is positioned for European temperate turf and crop systems and for warm, water-stressed Middle East landscaping, including golf courses, hotel and palace lawns, sports turf and luxury estate grounds.",
    },
    {
        q: "Do you ship internationally?",
        a: "Yes — we ship across the EU, UK, the Middle East and beyond from our Plombières (Belgium) operation. Export documentation is prepared per customer requirement.",
    },
];
