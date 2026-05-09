// Centralised content authority for McLir Seaweed website
// Sourced from the McLir Seaweed Animal Feed Range brochure & the
// commercial product brochure. Wording is professional / compliant.

export const BRAND = {
    name: "McLir Seaweed",
    tagline: "Atlantic Ascophyllum nodosum, refined for European agriculture and animal nutrition.",
    email: "McLir@Sea-Weed.DE",
    location: "Plombières, Belgium",
    logo: "https://customer-assets.emergentagent.com/job_seaweed-bio-products/artifacts/6x88xdtg_Mclir%20Logo.png",
};

export const HERO_IMG =
    "https://images.unsplash.com/photo-1697817315238-788e8a16def4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800";

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
            "The workhorse alkaline extract — a 20 % dry-matter formulation balancing performance and price for broad-acre programmes.",
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
            "Grazing & silage swards",
        ],
        rate: "3 – 5 L/ha foliar; 5 – 10 L/ha fertigation.",
        packaging: ["20 L", "200 L drum", "1000 L IBC"],
        storage: "Cool, dark. Shelf life 24 months.",
        batchNote: "Mineral sediment may form — shake before use.",
    },
    {
        slug: "superior-20-dried",
        name: "Liquid Seaweed Superior 20 — Dried",
        line: "Spray-dried equivalent",
        summary:
            "The Superior 20 alkaline profile delivered as a spray-dried solid for cost-efficient shipping and reconstitution at point of use.",
        source: "100% Ascophyllum nodosum extract solids",
        method: "Spray-dried from the Superior 20 alkaline concentrate.",
        spec: [
            ["Form", "Free-flowing dark powder"],
            ["Source material", "Dried Ascophyllum nodosum extract"],
            ["pH (1 % solution)", "9.0 – 10.0"],
            ["Solubility", "Fully water-soluble"],
            ["Colour", "Black / dark brown"],
            ["Moisture", "≤ 8 %"],
            ["Organic matter", "~ 60 %"],
        ],
        bioactives: ["Alginates", "Mannitol", "Polyphenols", "Trace minerals"],
        useCases: [
            "Export markets (lower freight per active kg)",
            "Manufacturers blending into compound fertilisers",
            "Custom dilution at distributor level",
        ],
        rate: "Reconstitute at 1 kg powder ≈ 5 L concentrate. Apply per Superior 20 schedule.",
        packaging: ["10 kg PE bag", "25 kg PE bag", "1 t big-bag"],
        storage: "Dry, sealed, 25 °C max. Shelf life 36 months.",
        batchNote: "Hygroscopic — reseal after each use.",
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
            "Finely milled meal pressed into uniform granules — for blenders, coaters and growers who need precise spreader behaviour.",
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

export const WSP = {
    name: "Water Soluble Powder",
    tagline: "Spray-dried Ascophyllum nodosum extract — ready to dissolve, ready to ship.",
    summary:
        "A free-flowing, fully water-dissolvable seaweed extract powder. Designed for tank-mix, fertigation and industrial blending where rapid dispersion and consistent solubility are non-negotiable.",
    spec: [
        ["Form", "Spray-dried fine powder"],
        ["Solubility", "100 % water-soluble (cold)"],
        ["pH (1 %)", "9.0 – 10.0"],
        ["Moisture", "≤ 8 %"],
        ["Organic matter", "≥ 60 %"],
        ["Alginic acid", "~ 12 – 15 %"],
        ["Mannitol", "~ 5 – 7 %"],
        ["Colour", "Dark brown / black"],
    ],
    benefits: [
        "Supports root and shoot establishment",
        "Helps maintain crop performance under abiotic stress",
        "Compatible with most foliar and fertigation programmes",
        "Low dust, good flow, accurate dosing",
    ],
    rate: "0.5 – 1.5 kg/ha foliar; 1 – 3 kg/ha through fertigation, every 14 – 21 days.",
    packaging: ["10 kg", "25 kg PE bag", "1 000 kg big-bag"],
    storage: "Cool, dry, sealed. Shelf life 36 months.",
};

export const FEED_NUTRITION = [
    ["Carbohydrates", "≈ 56 %"],
    ["Dietary fibre", "≈ 51 %"],
    ["Protein", "≈ 5 %"],
    ["Fat", "≈ 2 %"],
    ["Sugar", "≈ 9 %"],
    ["Alginic acid", "≈ 22 %"],
    ["Ash", "≈ 22 %"],
    ["Moisture", "12 – 14 %"],
];

export const FEED_MINERALS = [
    ["Calcium (Ca)", "Skeletal & milk yield"],
    ["Magnesium (Mg)", "Nerve & muscle function"],
    ["Potassium (K)", "Electrolyte balance"],
    ["Sodium (Na)", "Hydration"],
    ["Iodine (I)", "Thyroid function"],
    ["Iron (Fe)", "Oxygen transport"],
    ["Zinc (Zn)", "Skin, hoof, coat"],
    ["Manganese (Mn)", "Reproduction"],
    ["Copper (Cu)", "Pigmentation, enzymes"],
    ["Selenium (Se)", "Antioxidant defence"],
];

export const FEED_VITAMINS = [
    ["Vitamin A", "Vision & immunity"],
    ["Vitamin B-complex (B1, B2, B3, B6, B12)", "Metabolism & nervous system"],
    ["Vitamin C", "Antioxidant"],
    ["Vitamin D", "Calcium uptake"],
    ["Vitamin E", "Cell protection"],
    ["Vitamin K", "Coagulation"],
];

export const FEED_AAS = ["Alanine", "Arginine", "Glycine", "Glutamic acid", "Aspartic acid", "Lysine", "Leucine", "Valine"];

export const FEEDING_GUIDE = [
    { animal: "Horses — light work", dose: "60 g / day", notes: "Coat, hoof, recovery" },
    { animal: "Horses — moderate work", dose: "100 g / day", notes: "Performance support" },
    { animal: "Horses — heavy training", dose: "150 g / day", notes: "Recovery & electrolytes" },
    { animal: "Mares & young stock", dose: "50 – 80 g / day", notes: "Mineral balance" },
    { animal: "Stallions", dose: "100 – 150 g / day", notes: "Trace element support" },
    { animal: "Dairy cows", dose: "100 – 150 g / day", notes: "Udder health, fertility, calving ease" },
    { animal: "Beef cattle", dose: "80 – 120 g / day", notes: "Feed efficiency, hoof health" },
    { animal: "Calves", dose: "30 – 50 g / day", notes: "Growth & vitality" },
    { animal: "Ewes / does", dose: "60 – 70 g / day", notes: "Lambing ease, milk production" },
    { animal: "Lambs / kids", dose: "20 – 30 g / day", notes: "Growth & weaning support" },
    { animal: "Goats (dairy & meat)", dose: "60 – 70 g / day", notes: "Mineral & iodine balance" },
    { animal: "Poultry — layers", dose: "1 – 2 % of ration", notes: "Yolk pigmentation, shell strength" },
    { animal: "Poultry — broilers", dose: "0.5 – 1 % of ration", notes: "Gut balance, FCR support" },
    { animal: "Dogs", dose: "1 – 2 tsp / day", notes: "Coat & vitality" },
    { animal: "Cats", dose: "1 tsp / day", notes: "Coat & general wellbeing" },
    { animal: "Small pets", dose: "¼ – ½ tsp / day", notes: "Mineral & trace element top-up" },
];

export const PARTICLE_SIZES = [
    { code: "2/10", label: "Ultra-fine", desc: "Premixes & pet food formulations" },
    { code: "6/20", label: "Fine grade", desc: "Compound feed inclusion" },
    { code: "10/20", label: "Standard", desc: "Top-dressing & on-farm mixing" },
    { code: "20/60", label: "Medium", desc: "Cattle, sheep & equine direct feeding" },
    { code: "T60", label: "Coarse", desc: "Free-access mineral blocks" },
];

export const FEED_PACKAGING = [
    { format: "1 000 kg big-bag", use: "Bulk industrial users, feed mills" },
    { format: "25 kg PE bag (40 / pallet)", use: "Farm-grade, easy handling" },
    { format: "20 kg PE bag", use: "Distributor & retail-friendly" },
    { format: "Frozen block / slab", use: "Fresh-frozen FBAM line only" },
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
        desc: "Approximately four tonnes of wet seaweed are required to produce one tonne of finished seaweed meal — the natural concentration ratio.",
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
        desc: "Drying takes place at a maximum of approximately 75 °C, low enough to safeguard heat-sensitive vitamins, amino acids and bioactive compounds.",
    },
    {
        n: "06",
        title: "12 – 14 % final moisture",
        desc: "Final moisture is held between 12 % and 14 % — the proven window for shelf-stability without compromising nutrient density.",
    },
    {
        n: "07",
        title: "Fine milling & micron screening",
        desc: "The dried meal is fine-milled and screened to customer-specific micron specifications: 2/10, 6/20, 10/20, 20/60 or T60.",
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

export const MARKET_BY_REGION = [
    { region: "Asia-Pacific", value: 9.8 },
    { region: "Europe", value: 4.2 },
    { region: "North America", value: 2.6 },
    { region: "Latin America", value: 0.9 },
    { region: "Middle East & Africa", value: 0.5 },
    { region: "Ireland (domestic)", value: 0.08 },
];

export const BUYER_SEGMENTS = [
    { name: "Agricultural biostimulants", value: 34 },
    { name: "Animal feed & nutrition", value: 26 },
    { name: "Food ingredients & hydrocolloids", value: 18 },
    { name: "Cosmetics & personal care", value: 12 },
    { name: "Nutraceuticals & pharma", value: 10 },
];

export const FAQS = [
    {
        q: "Where is McLir Seaweed sourced?",
        a: "Our raw Ascophyllum nodosum is hand-cut from regulated Atlantic beds along the west coast of Ireland and processed under European food and feed standards.",
    },
    {
        q: "Is it suitable for organic certification?",
        a: "Yes. Our liquid and granular ranges are produced under EU organic input standards (CE 2018/848). OMRI-track formulations are available on request for export markets.",
    },
    {
        q: "How is the animal feed positioned regulatorily?",
        a: "It is supplied as a natural seaweed feed material (multimineral) of vegetable origin. We use compliant wording such as 'supports digestive efficiency' and 'contributes to gut balance' — not medicinal claims.",
    },
    {
        q: "Tank-mix compatibility?",
        a: "Our liquids are compatible with most NPK and micronutrient programmes. We recommend a small jar test before scaling. Spray-dried solids must be fully dissolved before mixing.",
    },
    {
        q: "Minimum order quantity?",
        a: "Pallet-level for 25 kg / 20 kg formats; single big-bag for 1 t orders. Container loads available for export.",
    },
    {
        q: "Do you ship internationally?",
        a: "Yes — we ship across the EU, UK and beyond from our Plombières (Belgium) operation. Export documentation is provided per customer requirement.",
    },
];
