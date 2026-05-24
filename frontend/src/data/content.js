// Centralised content authority for McLir Seaweed website
// Focus: Liquid Seaweed + Granulates / Soil Conditioner for
// professional agriculture, corporate farming, lawns and turf,
// luxury landscaping. Distribution: Europe & Middle East.
// Liquid range simplified to two SKUs (Cold Press 10 & 15)
// per official McLir TDS datasheets.

export const BRAND = {
    name: "McLir Seaweed",
    tagline: "Atlantic Ascophyllum nodosum, refined for professional agriculture and luxury landscaping.",
    email: "McLir@Sea-Weed.DE",
    location: "Plombières, Belgium",
    address: "Belderbusch 10, Plombières, Belgium",
    phone: "+49 177 1546204",
    emergency: "+49 177 9253050",
    logo: "https://customer-assets.emergentagent.com/job_seaweed-bio-products/artifacts/6x88xdtg_Mclir%20Logo.png",
};

export const HERO_IMG =
    "https://images.unsplash.com/photo-1697817315238-788e8a16def4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800";

// Premium imagery used across the site
export const IMG = {
    // Lawns / turf / luxury landscape
    golfGreen: "https://images.unsplash.com/photo-1605147861225-7bcd55f8e513?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    golfFairway: "https://images.unsplash.com/photo-1606443192517-919653213206?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    luxuryEstate: "https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    luxuryEstate2: "https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",

    // Ocean / Atlantic / seaweed origin
    kelpUnderwater: "https://images.pexels.com/photos/12829684/pexels-photo-12829684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    atlanticCoast: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    oceanWaves: "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    seaweedKelpForest: "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",

    // Granulate / soil / crop / agriculture
    granulateNatural: "https://images.unsplash.com/photo-1647012250603-9f02b8343af9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    granulateOnSoil: "https://images.unsplash.com/photo-1591830340860-8e6d621851d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    soilHandHold: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    cornfield: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    vineyards: "https://images.unsplash.com/photo-1559529837-b40bdd6e2cf2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",

    // Liquid / bottle visuals
    liquidBottle: "https://images.unsplash.com/photo-1567001847230-ed5da95bd055?auto=format&fit=crop&w=900&q=80",
    coldPressLabel10: "/cold press 10.png",
    coldPressLabel15: "/cold press 15.png",
    amberLiquid: "https://images.unsplash.com/photo-1543362906-acfc16c67564?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    foliarSpray: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
};

// ─── Liquid Seaweed — two SKUs from official TDS datasheets ─────
export const LIQUID_PRODUCTS = [
    {
        slug: "cold-press-10",
        name: "Cold Press 10",
        line: "10% w/v concentration",
        title: "McLir Cold Press 10",
        image: IMG.coldPressLabel10,
        summary:
            "10 % w/v Ascophyllum nodosum extract — mechanically cold-pressed from fresh North Atlantic seaweed, retaining the full native bioactive profile without thermal denaturation. Designed for foliar spray and fertigation across professional agriculture and luxury landscaping.",
        source: "100 % Ascophyllum nodosum, North Atlantic, hand-cut",
        method: "Cold mechanical pressing — no heat, no synthetic stabilisers, fully water-miscible.",
        spec: [
            ["Form", "Green liquid concentrate"],
            ["Solubility", "99.5 %"],
            ["Dry matter", "10 % w/v"],
            ["Potassium (K)", "0.46 % w/w"],
            ["Potassium Oxide (K₂O)", "0.55 % w/w"],
            ["Total nitrogen (N)", "0.20 % w/w"],
            ["Amino acids", "6.6 % w/w"],
            ["Organic Matter", "22.4 % DM"],
            ["Alginic acid", "4.7 % DM"],
            ["Mannitol", "2.0 % DM"],
            ["Laminarin", "8.4 % DM"],
            ["Phenolics", "13.9 % DM"],
            ["pH", "4.5"],
        ],
        heavyMetals: [
            ["Iodine", "209 mg/Kg"],
            ["Iron (Fe)", "166.0 mg/Kg"],
            ["Copper (Cu)", "< 2.5 mg/Kg"],
            ["Inorganic Arsenic (iAs)", "< 5.0 mg/Kg"],
            ["Lead (Pb)", "< 5.0 mg/Kg"],
            ["Mercury (Hg)", "< 0.4 mg/Kg"],
            ["Nickel (Ni)", "< 2.5 mg/Kg"],
            ["Tin (Sn)", "< 1.4 mg/Kg"],
            ["Zinc (Zn)", "< 23.4 mg/Kg"],
        ],
        bioactives: ["Auxins", "Cytokinins", "Betaines", "Alginates", "Mannitol", "Laminarin", "Phenolics", "Amino acids"],
        useCases: [
            "Vineyards & orchards — set, finish, drought tolerance",
            "Cereals & root crops — tillering, grain and tuber fill",
            "Greenhouse & soft-fruit — root re-establishment after transplant",
            "Turf, golf greens & sports pitches — recovery & colour",
            "Corporate farming foliar programmes",
            "Luxury lawns & estate landscaping",
        ],
        rate: "1 L mixes with 200 L of water (1 : 200). Apply foliar or via fertigation. Compatible with most insecticides, fungicides and fertilisers — perform a small bucket compatibility test before tank-mixing.",
        usage: [
            { label: "Foliar spray", text: "Mix 1 L with 200 L of water and apply to leaves on a calm, low-evaporation window." },
            { label: "Fertigation", text: "Compatible with most insecticides, fungicides and fertilisers via standard drip and pivot systems." },
            { label: "Mixing", text: "Avoid mixing with highly acidic chemicals or calcium-rich fertilisers — may cause precipitation. Always bucket-test first." },
        ],
        packaging: ["1 L", "5 L", "10 L", "20 L", "210 L", "1000 L", "1040 L"],
        storage: "Store above 4 °C and below 40 °C, away from direct sunlight. Shelf life 3 years from manufacturing date.",
        batchNote: "Natural product — properties may vary between batches and seasons. Keep out of reach of children. Use protective clothing.",
        certifications: ["Organic Association Certified", "Ecocert Inputs Approved", "OMRI Listed for Organic Use", "Sustainable Seaweed Harvest"],
        origin: "Made in Ireland · Harvested from the North Atlantic",
        tagline: "Nature from the ocean, nutrition for the earth.",
    },
    {
        slug: "cold-press-15",
        name: "Cold Press 15",
        line: "15% w/v concentration",
        title: "McLir Cold Press 15",
        image: IMG.coldPressLabel15,
        summary:
            "15 % w/v Ascophyllum nodosum extract — a higher-load cold-press concentrate engineered for growers and turf managers who want maximum dry-matter delivery per litre while preserving the native bioactive profile.",
        source: "100 % Ascophyllum nodosum, North Atlantic, hand-cut",
        method: "Cold mechanical pressing — no heat, no synthetic stabilisers, fully water-miscible.",
        spec: [
            ["Form", "Green liquid concentrate"],
            ["Solubility", "99.5 %"],
            ["Dry matter", "15 % w/v"],
            ["Potassium (K)", "0.5 % w/w"],
            ["Potassium Oxide (K₂O)", "0.6 % w/w"],
            ["Total nitrogen (N)", "0.25 % w/w"],
            ["Amino acids", "6.6 % w/w"],
            ["Organic Matter", "22.4 % DM"],
            ["Alginic acid", "4.7 % DM"],
            ["Mannitol", "2.0 % DM"],
            ["Laminarin", "8.4 % DM"],
            ["Phenolics", "13.9 % DM"],
            ["pH", "4.5 – 5.0"],
        ],
        heavyMetals: [
            ["Iodine", "209 mg/Kg"],
            ["Iron (Fe)", "166.0 mg/Kg"],
            ["Copper (Cu)", "< 2.5 mg/Kg"],
            ["Inorganic Arsenic (iAs)", "< 5.0 mg/Kg"],
            ["Lead (Pb)", "< 5.0 mg/Kg"],
            ["Mercury (Hg)", "< 0.4 mg/Kg"],
            ["Nickel (Ni)", "< 2.5 mg/Kg"],
            ["Tin (Sn)", "< 1.4 mg/Kg"],
            ["Zinc (Zn)", "< 23.4 mg/Kg"],
        ],
        bioactives: ["Auxins", "Cytokinins", "Betaines", "Alginates", "Mannitol", "Laminarin", "Phenolics", "Amino acids"],
        useCases: [
            "Large-acre arable: cereals, potatoes, sugar beet",
            "Drip-irrigated vegetables & berries",
            "Premium turf & golf course programmes",
            "Stressed crops under drought or heat pressure",
            "Hotel, resort & palace lawn maintenance",
            "Compatible with most NPK liquid programmes",
        ],
        rate: "1 L mixes with 200 L of water (1 : 200). Apply foliar or via fertigation. Compatible with most insecticides, fungicides and fertilisers — perform a small bucket compatibility test before tank-mixing.",
        usage: [
            { label: "Foliar spray", text: "Mix 1 L with 200 L of water and apply to leaves on a calm, low-evaporation window." },
            { label: "Fertigation", text: "Compatible with most insecticides, fungicides and fertilisers via standard drip and pivot systems." },
            { label: "Mixing", text: "Avoid mixing with highly acidic chemicals or calcium-rich fertilisers — may cause precipitation. Always bucket-test first." },
        ],
        packaging: ["1 L", "5 L", "10 L", "20 L", "210 L", "1000 L", "1040 L"],
        storage: "Store above 4 °C and below 40 °C, away from direct sunlight. Shelf life 3 years from manufacturing date.",
        batchNote: "Natural product — properties may vary between batches and seasons. Keep out of reach of children. Use protective clothing.",
        certifications: ["Organic Association Certified", "Ecocert Inputs Approved", "OMRI Listed for Organic Use", "Sustainable Seaweed Harvest"],
        origin: "Made in Ireland · Harvested from the North Atlantic",
        tagline: "From sea to soil, life flourishes.",
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

// Process steps — each carries a relevant imagery URL displayed
// beside the timeline card on the Manufacturing Process page.
export const PROCESS_STEPS = [
    {
        n: "01",
        title: "Atlantic harvest",
        desc: "Ascophyllum nodosum is selectively cut from regulated Atlantic beds and delivered to the factory with a unique delivery number assigned for full traceability.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "02",
        title: "4 : 1 throughput",
        desc: "Approximately four tonnes of wet seaweed are required to produce one tonne of finished seaweed product — the natural concentration ratio.",
        img: "https://images.pexels.com/photos/12829684/pexels-photo-12829684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
    },
    {
        n: "03",
        title: "Seawater wash",
        desc: "Raw weed is washed with clean seawater to lift silt, sand and shell fragments while preserving the native mineral and bioactive profile.",
        img: "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "04",
        title: "Hammer milling",
        desc: "Mechanical hammer milling breaks down the cell structure to expose nutrients and prepare the biomass for controlled drying.",
        img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "05",
        title: "Controlled drying — 75 °C",
        desc: "Drying takes place at a maximum of approximately 75 °C, low enough to safeguard heat-sensitive vitamins, alginates and bioactive compounds.",
        img: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "06",
        title: "12 – 14 % final moisture",
        desc: "Final moisture is held between 12 % and 14 % — the proven window for shelf-stability without compromising nutrient density.",
        img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "07",
        title: "Granulate sizing & screening",
        desc: "The dried material is sized and screened to particle bands suitable for soil broadcast, turf top-dressing and NPK blending.",
        img: "https://images.unsplash.com/photo-1647012250603-9f02b8343af9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "08",
        title: "Batch numbering",
        desc: "Every shipment is assigned a batch number, linking the finished bag back to the original harvest delivery for full chain-of-custody.",
        img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "09",
        title: "Final bagging",
        desc: "Filled into 1 000 kg big-bags, 25 kg PE bags or 20 kg PE bags depending on customer line.",
        img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    },
    {
        n: "10",
        title: "Palletisation & numbered-bay storage",
        desc: "Pallets are stored in numbered bays for first-in / first-out dispatch and rapid traceable retrieval.",
        img: "https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
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
