import { createContext, useContext, useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
// McLir Seaweed — i18n
// Languages: en (English), de (Deutsch), fr (Français)
// Strategy: every visible string is fully translated across all three
// languages. Deep technical specs (numbers, units, scientific names)
// remain in their native units — they read the same in every language.
// ─────────────────────────────────────────────────────────────

const LangCtx = createContext({ lang: "en", setLang: () => {} });

export const LANGS = [
    { code: "en", label: "EN", name: "English" },
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "fr", label: "FR", name: "Français" },
];

const SUPPORTED = ["en", "de", "fr"];

function detectInitialLang() {
    try {
        const saved = localStorage.getItem("mclir_lang");
        if (saved && SUPPORTED.includes(saved)) return saved;
    } catch { /* localStorage may be unavailable (SSR / private mode) */ }

    if (typeof navigator !== "undefined") {
        const candidates = (navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language || "en"]).map((l) => (l || "").toLowerCase());
        for (const c of candidates) {
            const base = c.split("-")[0];
            if (SUPPORTED.includes(base)) return base;
        }
    }
    return "en";
}

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(detectInitialLang);
    const setLang = (l) => {
        setLangState(l);
        try { localStorage.setItem("mclir_lang", l); } catch (_e) { /* noop */ }
        document.documentElement.lang = l;
    };
    useEffect(() => { document.documentElement.lang = lang; }, [lang]);
    return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
    return useContext(LangCtx);
}

// Translation dictionary — { key: { en, de, fr } }
const T = {
    // ── Navigation ──────────────────────────────────────────
    "nav.home": { en: "Home", de: "Startseite", fr: "Accueil" },
    "nav.products": { en: "Products", de: "Produkte", fr: "Produits" },
    "nav.liquid": { en: "Liquid Seaweed", de: "Flüssige Algen", fr: "Algues liquides" },
    "nav.granulates": { en: "Granulates & Soil Conditioner", de: "Granulate & Bodenverbesserer", fr: "Granulés & amendement du sol" },
    "nav.lawns": { en: "Lawns & Turf", de: "Rasen & Sportrasen", fr: "Pelouses & gazon" },
    "nav.process": { en: "Process", de: "Prozess", fr: "Procédé" },
    "nav.insights": { en: "Market Insights", de: "Markteinblicke", fr: "Analyses de marché" },
    "nav.contact": { en: "Contact", de: "Kontakt", fr: "Contact" },
    "nav.impressum": { en: "Imprint & Privacy", de: "Impressum & Datenschutz", fr: "Mentions légales" },

    // ── CTAs ────────────────────────────────────────────────
    "cta.sample": { en: "Request a sample", de: "Muster anfordern", fr: "Demander un échantillon" },
    "cta.request_sample": { en: "Request a sample", de: "Muster anfordern", fr: "Demander un échantillon" },
    "cta.explore_liquid": { en: "Explore liquid products", de: "Flüssigprodukte entdecken", fr: "Découvrir les produits liquides" },
    "cta.explore_granulates": { en: "Explore granulates", de: "Granulate entdecken", fr: "Découvrir les granulés" },
    "cta.see_process": { en: "See the manufacturing process", de: "Herstellungsprozess ansehen", fr: "Voir le procédé de fabrication" },
    "cta.view_full_process": { en: "View the full process", de: "Vollständigen Prozess ansehen", fr: "Voir le procédé complet" },
    "cta.open_market": { en: "Open market insights", de: "Markteinblicke öffnen", fr: "Ouvrir les analyses de marché" },
    "cta.open_contact": { en: "Open contact page", de: "Kontaktseite öffnen", fr: "Ouvrir la page contact" },
    "cta.drill_in": { en: "Drill in", de: "Mehr erfahren", fr: "Approfondir" },
    "cta.open": { en: "Open", de: "Öffnen", fr: "Ouvrir" },
    "cta.back_brand": { en: "← McLir Seaweed", de: "← McLir Seaweed", fr: "← McLir Seaweed" },
    "cta.discover_turf": { en: "Discover lawns & turf", de: "Rasen entdecken", fr: "Découvrir les pelouses & gazons" },
    "cta.talk_to_mclir": { en: "Talk to McLir", de: "Mit McLir sprechen", fr: "Parler à McLir" },
    "cta.download_tds": { en: "Download datasheet", de: "Datenblatt herunterladen", fr: "Télécharger la fiche" },

    // ── Hero ────────────────────────────────────────────────
    "hero.eyebrow": {
        en: "McLir Seaweed · Atlantic origin · Plombières, Belgium",
        de: "McLir Seaweed · Atlantischer Ursprung · Plombières, Belgien",
        fr: "McLir Seaweed · Origine atlantique · Plombières, Belgique",
    },
    "hero.medallion_caption": {
        en: "Atlantic origin · Plombières, Belgium",
        de: "Atlantischer Ursprung · Plombières, Belgien",
        fr: "Origine atlantique · Plombières, Belgique",
    },
    "hero.title.line1": { en: "Grown by the sea.", de: "Vom Meer gewachsen.", fr: "Cultivée par la mer." },
    "hero.title.italic": { en: "Trusted", de: "Vertraut", fr: "Adoptée" },
    "hero.title.line2": { en: "by the soil and the lawn.", de: "vom Boden und vom Rasen.", fr: "par le sol et la pelouse." },
    "hero.sub": {
        en: "McLir Seaweed refines Atlantic Ascophyllum nodosum into liquid concentrates and slow-release granulates. One species. One ocean. Two formats — engineered for professional agriculture, corporate farming, luxury landscaping and world-class lawns across Europe and the Middle East.",
        de: "McLir Seaweed veredelt atlantische Ascophyllum nodosum zu Flüssigkonzentraten und langzeitwirksamen Granulaten. Eine Art. Ein Ozean. Zwei Formate — entwickelt für professionellen Anbau, Großlandwirtschaft, Luxus-Landschaftsbau und erstklassige Rasenflächen in Europa und dem Nahen Osten.",
        fr: "McLir Seaweed transforme l'Ascophyllum nodosum atlantique en concentrés liquides et en granulés à libération lente. Une espèce. Un océan. Deux formats — conçus pour l'agriculture professionnelle, les grandes exploitations, l'aménagement paysager haut de gamme et les pelouses d'exception en Europe et au Moyen-Orient.",
    },

    // ── Marquee ─────────────────────────────────────────────
    "chip.vineyards": { en: "Vineyards", de: "Weinberge", fr: "Vignobles" },
    "chip.orchards": { en: "Orchards", de: "Obstgärten", fr: "Vergers" },
    "chip.cereals": { en: "Cereals", de: "Getreide", fr: "Céréales" },
    "chip.greenhouse": { en: "Greenhouse", de: "Gewächshaus", fr: "Serres" },
    "chip.turf_golf": { en: "Turf & golf", de: "Rasen & Golf", fr: "Gazon & golf" },
    "chip.berries": { en: "Berries", de: "Beeren", fr: "Petits fruits" },
    "chip.lawns": { en: "Luxury lawns", de: "Premium-Rasen", fr: "Pelouses haut de gamme" },
    "chip.estates": { en: "Estates", de: "Anwesen", fr: "Domaines" },
    "chip.hotels": { en: "Hotels & resorts", de: "Hotels & Resorts", fr: "Hôtels & resorts" },
    "chip.sports_turf": { en: "Sports turf", de: "Sportrasen", fr: "Gazons sportifs" },

    // ── Product families section ────────────────────────────
    "sec.families.eyebrow": { en: "Two formats. One ocean.", de: "Zwei Formate. Ein Ozean.", fr: "Deux formats. Un océan." },
    "sec.families.title": { en: "A complete seaweed system — not a single bottle.", de: "Ein komplettes Algen-System — nicht nur eine Flasche.", fr: "Un système complet d'algues — pas une simple bouteille." },
    "sec.families.body": {
        en: "Apply the liquid for fast biostimulation. Apply the granulate for slow, soil-deep release. Each format draws on the same hand-cut Atlantic raw material — refined to fit a different point in the agronomic and landscape calendar.",
        de: "Flüssig für schnelle Biostimulation. Granulat für langsame, bodentiefe Freisetzung. Jedes Format basiert auf demselben handgeschnittenen atlantischen Rohstoff — veredelt für unterschiedliche Punkte im agronomischen und landschaftspflegerischen Kalender.",
        fr: "Appliquez le liquide pour une biostimulation rapide. Appliquez le granulé pour une libération lente et profonde dans le sol. Chaque format repose sur la même matière première atlantique récoltée à la main — raffinée pour un moment différent du calendrier agronomique et paysager.",
    },
    "fam.liquid.eyebrow": { en: "Liquid range", de: "Flüssig-Sortiment", fr: "Gamme liquide" },
    "fam.liquid.title": { en: "Liquid Seaweed", de: "Flüssige Algen", fr: "Algues liquides" },
    "fam.liquid.body": {
        en: "Two cold-press concentrations — Cold Press 10 % and Cold Press 15 % — engineered for foliar spray and fertigation across agriculture, corporate farming and luxury turf.",
        de: "Zwei Kaltpress-Konzentrationen — Cold Press 10 % und Cold Press 15 % — entwickelt für Blattanwendung und Fertigation in Landwirtschaft, Großfarming und Premium-Rasen.",
        fr: "Deux concentrations pressées à froid — Cold Press 10 % et Cold Press 15 % — conçues pour la pulvérisation foliaire et la fertigation en agriculture, grandes exploitations et gazons de prestige.",
    },
    "fam.granulates.eyebrow": { en: "Soil & turf", de: "Boden & Rasen", fr: "Sol & gazon" },
    "fam.granulates.title": { en: "Granulates & Soil Conditioner", de: "Granulate & Bodenverbesserer", fr: "Granulés & amendement du sol" },
    "fam.granulates.body": {
        en: "Slow-release dried Ascophyllum granules and graded seaweed meal — broadcast, blend, top-dress on turf or rebuild soil structure across professional acres.",
        de: "Langzeitwirksame getrocknete Ascophyllum-Granulate und sortiertes Algenmehl — streuen, mischen, als Top-Dressing für Rasen oder zum Bodenaufbau in professionellen Flächen.",
        fr: "Granulés d'Ascophyllum séchés à libération lente et farine d'algues calibrée — à épandre, mélanger, sursemer sur gazon ou pour reconstruire la structure du sol sur des hectares professionnels.",
    },

    // ── Stats ───────────────────────────────────────────────
    "stats.yield": { en: "Indicative grower yield uplift in trials", de: "Indikative Ertragssteigerung bei Anbau-Versuchen", fr: "Hausse de rendement indicative dans les essais" },
    "stats.species": { en: "Atlantic Ascophyllum nodosum, single species", de: "Atlantische Ascophyllum nodosum, einzige Art", fr: "Ascophyllum nodosum atlantique, espèce unique" },
    "stats.drying": { en: "Maximum drying temperature — nutrient-safe", de: "Max. Trocknungstemperatur — nährstoffschonend", fr: "Température maximale de séchage — préserve les nutriments" },
    "stats.release": { en: "Granulate slow-release activity in soil", de: "Langzeit-Wirkung des Granulats im Boden", fr: "Libération lente du granulé dans le sol" },

    // ── Pillars ─────────────────────────────────────────────
    "pillars.eyebrow": { en: "Why McLir", de: "Warum McLir", fr: "Pourquoi McLir" },
    "pillars.title": { en: "It is not a fertiliser. It is biology, refined.", de: "Es ist kein Düngemittel. Es ist veredelte Biologie.", fr: "Ce n'est pas un engrais. C'est de la biologie raffinée." },
    "pillars.bio.title": { en: "Native bioactives, intact", de: "Native Wirkstoffe, intakt", fr: "Bioactifs natifs, intacts" },
    "pillars.bio.body": {
        en: "Cold and low-temperature processes preserve auxins, cytokinins, betaines and alginates — the seaweed chemistry the soil, the root and the turf actually recognise.",
        de: "Kalte und niedrige Prozesstemperaturen bewahren Auxine, Cytokinine, Betaine und Alginate — die Algenchemie, die Boden, Wurzel und Rasen wirklich erkennen.",
        fr: "Les procédés à froid et à basse température préservent auxines, cytokinines, bétaïnes et alginates — la chimie marine que le sol, la racine et le gazon reconnaissent vraiment.",
    },
    "pillars.trace.title": { en: "Traceable, batch by batch", de: "Rückverfolgbar, Charge für Charge", fr: "Traçable, lot par lot" },
    "pillars.trace.body": {
        en: "Every delivery is logged on arrival and every bag is batch-numbered, so any finished product can be walked back to a single Atlantic harvest.",
        de: "Jede Lieferung wird bei Ankunft erfasst, jeder Sack erhält eine Chargennummer — so kann jedes Endprodukt bis zu einer einzigen Atlantik-Ernte zurückverfolgt werden.",
        fr: "Chaque livraison est consignée à l'arrivée et chaque sac porte un numéro de lot — tout produit fini peut être retracé jusqu'à une récolte atlantique unique.",
    },
    "pillars.export.title": { en: "Built for export", de: "Für den Export gebaut", fr: "Conçu pour l'export" },
    "pillars.export.body": {
        en: "Pallet-ready 20 kg / 25 kg formats, 1 t big-bags and IBC liquids — moving daily out of Plombières to growers, landscapers and distributors across Europe and the Middle East.",
        de: "Palettenfertige 20 kg / 25 kg Formate, 1 t Big-Bags und IBC-Flüssigkeiten — verlassen täglich Plombières Richtung Höfen, Landschaftsbauern und Distributoren in Europa und dem Nahen Osten.",
        fr: "Formats palette 20 kg / 25 kg, big-bags 1 t et liquides en IBC — quittent chaque jour Plombières vers cultivateurs, paysagistes et distributeurs en Europe et au Moyen-Orient.",
    },

    // ── Process teaser ──────────────────────────────────────
    "process.eyebrow": { en: "Process", de: "Prozess", fr: "Procédé" },
    "process.teaser.title": { en: "From the cold North Atlantic to your bay number.", de: "Vom kalten Nord-Atlantik bis zu Ihrer Lager-Nummer.", fr: "De l'Atlantique Nord glacé jusqu'à votre numéro de baie." },
    "process.teaser.body": {
        en: "Four tonnes of wet seaweed yield one tonne of finished product. Drying never exceeds 75 °C. Final moisture is held at 12 – 14 %. Every shipment is batch-numbered against its harvest.",
        de: "Vier Tonnen feuchte Algen ergeben eine Tonne fertiges Produkt. Trocknung nie über 75 °C. Endfeuchte bei 12 – 14 %. Jede Sendung wird gegen ihre Ernte chargennummeriert.",
        fr: "Quatre tonnes d'algues humides donnent une tonne de produit fini. Le séchage ne dépasse jamais 75 °C. L'humidité finale est maintenue à 12 – 14 %. Chaque expédition porte un numéro de lot relié à sa récolte.",
    },

    // ── Market teaser ───────────────────────────────────────
    "market.eyebrow": { en: "Market context", de: "Marktkontext", fr: "Contexte de marché" },
    "market.title": { en: "Ireland is a small market. The world is not.", de: "Irland ist ein kleiner Markt. Die Welt nicht.", fr: "L'Irlande est un petit marché. Le monde ne l'est pas." },
    "market.body": {
        en: "Five buyer categories — agricultural biostimulants, turf and landscape, food ingredients, cosmetics and nutraceuticals — drive global seaweed demand. McLir is built around the two with the strongest agronomic fit: biostimulants and turf / landscape.",
        de: "Fünf Käufer-Kategorien — Biostimulanzien, Rasen & Landschaftsbau, Lebensmittelzutaten, Kosmetik und Nutrazeutika — treiben die globale Algen-Nachfrage. McLir konzentriert sich auf die zwei mit dem stärksten agronomischen Profil: Biostimulanzien und Rasen & Landschaftsbau.",
        fr: "Cinq catégories d'acheteurs — biostimulants agricoles, gazons et paysage, ingrédients alimentaires, cosmétiques et nutraceutiques — portent la demande mondiale d'algues. McLir s'appuie sur les deux qui correspondent le mieux à son profil agronomique : biostimulants et gazons / paysage.",
    },
    "market.segments_label": { en: "Buyer segments — global", de: "Käufersegmente — global", fr: "Segments d'acheteurs — global" },

    // ── FAQ ─────────────────────────────────────────────────
    "faq.eyebrow": { en: "FAQ", de: "FAQ", fr: "FAQ" },
    "faq.title": { en: "Plain answers, before you call.", de: "Klare Antworten — bevor Sie anrufen.", fr: "Des réponses claires, avant d'appeler." },

    // ── Contact band ────────────────────────────────────────
    "contact.eyebrow": { en: "Talk to us", de: "Sprechen Sie mit uns", fr: "Parlons-en" },
    "contact.title": { en: "Tell us what you grow, manage or landscape.", de: "Sagen Sie uns, was Sie anbauen, pflegen oder gestalten.", fr: "Dites-nous ce que vous cultivez, gérez ou aménagez." },
    "contact.body": {
        en: "Real humans answer — typically within one working day. Sample shipments to verified growers, landscapers and distributors are free.",
        de: "Echte Menschen antworten — meist innerhalb eines Werktages. Muster-Sendungen an verifizierte Höfe, Landschaftsbauer und Distributoren sind kostenlos.",
        fr: "De vraies personnes répondent — généralement sous un jour ouvré. Les envois d'échantillons aux cultivateurs, paysagistes et distributeurs vérifiés sont gratuits.",
    },

    // ── Footer ──────────────────────────────────────────────
    "footer.explore": { en: "Explore", de: "Entdecken", fr: "Explorer" },
    "footer.contact": { en: "Contact", de: "Kontakt", fr: "Contact" },
    "footer.legal": { en: "Legal", de: "Rechtliches", fr: "Mentions légales" },
    "footer.tagline": {
        en: "Atlantic Ascophyllum nodosum, refined for professional agriculture and luxury landscaping. Liquid concentrates and slow-release granulates — produced for export to professional growers, landscapers, golf courses and distributors across Europe and the Middle East.",
        de: "Atlantische Ascophyllum nodosum, veredelt für professionellen Anbau und Luxus-Landschaftsbau. Flüssigkonzentrate und langzeitwirksame Granulate — für den Export an professionelle Höfe, Landschaftsbauer, Golfplätze und Distributoren in Europa und dem Nahen Osten.",
        fr: "Ascophyllum nodosum atlantique, raffiné pour l'agriculture professionnelle et l'aménagement paysager haut de gamme. Concentrés liquides et granulés à libération lente — produits pour l'export vers cultivateurs professionnels, paysagistes, parcours de golf et distributeurs en Europe et au Moyen-Orient.",
    },
    "footer.signature": {
        en: "Atlantic raw material · European processing · Export ready",
        de: "Atlantischer Rohstoff · Europäische Verarbeitung · Exportbereit",
        fr: "Matière première atlantique · Transformation européenne · Prêt à l'export",
    },

    // ── Page titles & intros ────────────────────────────────
    "page.liquid.eyebrow": { en: "Liquid range", de: "Flüssig-Sortiment", fr: "Gamme liquide" },
    "page.liquid.title": { en: "Liquid Seaweed Products", de: "Flüssige Algen-Produkte", fr: "Produits d'algues liquides" },
    "page.liquid.intro": {
        en: "Two cold-press liquid formats from a single Atlantic raw material. Cold Press 10 % for foliar programmes and standard fertigation; Cold Press 15 % for higher-load dry-matter delivery in stressed crops and premium turf.",
        de: "Zwei Kaltpress-Flüssigformate aus einem einzigen atlantischen Rohstoff. Cold Press 10 % für Blattanwendungen und Standardfertigation; Cold Press 15 % für höhere Trockenmasse-Konzentration in gestressten Kulturen und Premium-Rasen.",
        fr: "Deux formats liquides pressés à froid issus d'une seule matière première atlantique. Cold Press 10 % pour les programmes foliaires et la fertigation standard ; Cold Press 15 % pour une livraison de matière sèche plus concentrée sur cultures stressées et gazons d'exception.",
    },
    "page.granulates.title": { en: "Granulates, Soil Conditioner & Seaweed Meal", de: "Granulate, Bodenverbesserer & Algenmehl", fr: "Granulés, amendement du sol & farine d'algues" },
    "page.granulates.intro": {
        en: "Dried, broken, sized and graded — the same Atlantic Ascophyllum nodosum, presented as a slow-release granular feed for the soil and the soil food web. Designed to spread cleanly on professional acres and luxury turf, blend uniformly into NPK and rebuild structure season over season.",
        de: "Getrocknet, gebrochen, klassiert und sortiert — dieselbe atlantische Ascophyllum nodosum als langzeitwirksames Granulat für Boden und Bodenleben. Entwickelt für sauberes Ausbringen auf professionellen Flächen und Premium-Rasen.",
        fr: "Séchés, brisés, calibrés et triés — la même Ascophyllum nodosum atlantique, présentée comme une alimentation granulaire à libération lente pour le sol et son réseau biologique. Conçue pour un épandage net sur grandes surfaces professionnelles et gazons de prestige.",
    },
    "page.process.eyebrow": { en: "Manufacturing process", de: "Herstellungsprozess", fr: "Procédé de fabrication" },
    "page.process.title": { en: "Ten steps from the cold North Atlantic to your numbered storage bay.", de: "Zehn Schritte vom kalten Nord-Atlantik bis zu Ihrer nummerierten Lagerbucht.", fr: "Dix étapes de l'Atlantique Nord glacé jusqu'à votre baie de stockage numérotée." },
    "page.process.intro": {
        en: "Every batch follows the same documented chain. Drying never exceeds 75 °C. Final moisture is held at 12 – 14 %. Every shipment is batch-numbered against the original delivery, so any finished bag can be walked all the way back to the Atlantic harvest it came from.",
        de: "Jede Charge folgt derselben dokumentierten Kette. Trocknung nie über 75 °C. Endfeuchte bei 12 – 14 %. Jede Sendung wird gegen die Originallieferung chargennummeriert — jeder fertige Sack lässt sich bis zur atlantischen Ernte zurückverfolgen.",
        fr: "Chaque lot suit la même chaîne documentée. Le séchage ne dépasse jamais 75 °C. L'humidité finale est maintenue à 12 – 14 %. Chaque expédition porte un numéro de lot relié à la livraison d'origine — tout sac fini peut être retracé jusqu'à la récolte atlantique dont il provient.",
    },
    "page.insights.eyebrow": { en: "Market insights", de: "Markteinblicke", fr: "Analyses de marché" },
    "page.contact.eyebrow": { en: "Contact", de: "Kontakt", fr: "Contact" },
    "page.contact.title": { en: "Tell us what you grow, manage or landscape.", de: "Sagen Sie uns, was Sie anbauen, pflegen oder gestalten.", fr: "Dites-nous ce que vous cultivez, gérez ou aménagez." },

    // ── Lawns & Turf page ───────────────────────────────────
    "page.lawns.eyebrow": { en: "Lawns & Turf", de: "Rasen & Sportrasen", fr: "Pelouses & gazon" },
    "page.lawns.title": { en: "World-class English-style lawns. Engineered by the sea.", de: "Englische Rasenflächen in Weltklasse. Vom Meer entwickelt.", fr: "Pelouses anglaises d'exception. Inspirées par la mer." },
    "page.lawns.intro": {
        en: "A two-product programme — Liquid Seaweed for foliar and fertigation use, Granulates and Soil Conditioner for soil and turf — positioned to support root systems, colour, density and stress resilience on the lawns that the world looks at: golf courses, palace grounds, luxury hotels, estates and sports turf across Europe and the Middle East.",
        de: "Ein Zwei-Produkt-Programm — Flüssige Algen für Blatt- und Tröpfchen-Anwendung, Granulate und Bodenverbesserer für Boden und Rasen — positioniert, um Wurzelsysteme, Farbe, Dichte und Stressresistenz auf den Rasenflächen zu unterstützen, die die Welt betrachtet: Golfplätze, Palastanlagen, Luxushotels, Anwesen und Sportrasen in Europa und im Nahen Osten.",
        fr: "Un programme à deux produits — Algues liquides pour pulvérisation foliaire et fertigation, Granulés et amendement du sol pour le sol et le gazon — positionné pour soutenir les systèmes racinaires, la couleur, la densité et la résistance au stress sur les pelouses que le monde admire : parcours de golf, parcs de palais, hôtels de luxe, domaines et gazons sportifs en Europe et au Moyen-Orient.",
    },
    "lawns.why.title": { en: "Why seaweed for turf", de: "Warum Algen für den Rasen", fr: "Pourquoi les algues pour le gazon" },
    "lawns.why.body": {
        en: "Ascophyllum nodosum carries alginates that contribute to soil aggregation, mannitol that helps plants withstand osmotic and heat stress, and a profile of native bioactives — auxins, cytokinins, betaines — that contribute to root architecture and recovery. It is not a quick-burn fertiliser; it is a marine biology programme that helps turf maintain itself through difficult weeks.",
        de: "Ascophyllum nodosum enthält Alginate, die zur Boden-Aggregatbildung beitragen, Mannitol, das Pflanzen bei osmotischem und Hitzestress unterstützt, und ein Profil nativer Wirkstoffe — Auxine, Cytokinine, Betaine — die zur Wurzelarchitektur und Erholung beitragen. Es ist kein Schnellwirkungsdünger; es ist ein meeresbiologisches Programm, das hilft, Rasen durch schwierige Wochen zu tragen.",
        fr: "L'Ascophyllum nodosum contient des alginates qui contribuent à l'agrégation du sol, du mannitol qui aide la plante face au stress osmotique et thermique, et un profil de bioactifs natifs — auxines, cytokinines, bétaïnes — qui contribuent à l'architecture racinaire et à la récupération. Ce n'est pas un engrais coup de fouet ; c'est un programme de biologie marine qui aide le gazon à se maintenir pendant les semaines difficiles.",
    },
    "lawns.roots.title": { en: "Deep-root support", de: "Tiefwurzel-Unterstützung", fr: "Soutien des racines profondes" },
    "lawns.roots.body": {
        en: "Cytokinin- and auxin-bearing extracts are positioned to support cell division and root elongation. Deeper roots reach moisture below the surface — a structural answer to short, dry European summers.",
        de: "Extrakte mit Cytokininen und Auxinen unterstützen Zellteilung und Wurzelverlängerung. Tiefere Wurzeln erreichen Bodenfeuchte unter der Oberfläche — eine strukturelle Antwort auf kurze, trockene europäische Sommer.",
        fr: "Les extraits porteurs de cytokinines et d'auxines sont positionnés pour soutenir la division cellulaire et l'élongation racinaire. Des racines plus profondes atteignent l'humidité sous la surface — une réponse structurelle aux étés européens courts et secs.",
    },
    "lawns.drought.title": { en: "Drought & heat stress support", de: "Unterstützung bei Trockenheit & Hitze", fr: "Soutien face à la sécheresse et au stress thermique" },
    "lawns.drought.body": {
        en: "Mannitol is an osmoprotectant. Combined with alginate-driven moisture retention in the rhizosphere, this is the programme that turf managers reach for when irrigation becomes the limiting factor — peak summer in Southern Europe and year-round in the GCC.",
        de: "Mannitol ist ein Osmoprotektor. Kombiniert mit alginatgestützter Feuchtigkeitsspeicherung in der Rhizosphäre ist dies das Programm, zu dem Rasenmanager greifen, wenn Bewässerung zum begrenzenden Faktor wird — Sommer in Südeuropa und ganzjährig in den Golfstaaten.",
        fr: "Le mannitol est un osmoprotecteur. Combiné à la rétention d'humidité induite par les alginates dans la rhizosphère, c'est le programme vers lequel se tournent les gestionnaires de gazon lorsque l'irrigation devient un facteur limitant — pleine saison estivale en Europe du Sud et toute l'année dans les pays du Golfe.",
    },
    "lawns.colour.title": { en: "Colour, density & lawn quality", de: "Farbe, Dichte & Rasenqualität", fr: "Couleur, densité et qualité du gazon" },
    "lawns.colour.body": {
        en: "Trace minerals (Mg, Fe, Mn, Zn) and natural plant-active compounds contribute to chlorophyll synthesis and visible turf vigour. The outcome targeted is denser sward, deeper green and faster recovery from cut and play.",
        de: "Spurenelemente (Mg, Fe, Mn, Zn) und natürliche pflanzenaktive Verbindungen tragen zur Chlorophyll-Synthese und zur sichtbaren Rasen-Vitalität bei. Das angestrebte Ergebnis: dichtere Grasnarbe, tieferes Grün und schnellere Erholung nach Schnitt und Belastung.",
        fr: "Les oligo-éléments (Mg, Fe, Mn, Zn) et les composés naturels actifs sur la plante contribuent à la synthèse de la chlorophylle et à la vigueur visible du gazon. L'objectif : un tapis plus dense, un vert plus profond et une récupération plus rapide après tonte et utilisation.",
    },
    "lawns.programme.title": { en: "Two-product programme", de: "Zwei-Produkt-Programm", fr: "Programme à deux produits" },
    "lawns.programme.body": {
        en: "Liquid Seaweed handles fast biostimulation through foliar and fertigation. Granulates handle slow, deep, structural soil support. Used together across the season, the two formats cover both the visible and the invisible halves of turf performance.",
        de: "Flüssige Algen übernehmen die schnelle Biostimulation über Blatt und Tröpfchenbewässerung. Granulate übernehmen die langsame, tiefe, strukturelle Bodenunterstützung. Gemeinsam über die Saison eingesetzt, decken die beiden Formate sowohl die sichtbare als auch die unsichtbare Hälfte der Rasenleistung ab.",
        fr: "Les algues liquides assurent la biostimulation rapide en pulvérisation foliaire et fertigation. Les granulés assurent le soutien structurel lent et profond du sol. Utilisés ensemble sur l'ensemble de la saison, les deux formats couvrent à la fois la moitié visible et la moitié invisible de la performance du gazon.",
    },
    "lawns.climate.title": { en: "Built for Europe & the Middle East", de: "Für Europa und den Nahen Osten gemacht", fr: "Conçu pour l'Europe et le Moyen-Orient" },
    "lawns.climate.body": {
        en: "Northern European fairways, Mediterranean estates, Gulf palace lawns, North African resort grounds — the underlying biology is the same; the application rates and seasonal timing are adapted to the climate. McLir ships into all of these markets out of Plombières.",
        de: "Nordeuropäische Fairways, mediterrane Anwesen, Palastrasen am Golf, Resort-Anlagen in Nordafrika — die zugrundeliegende Biologie ist gleich; Aufwandmengen und saisonale Zeitfenster werden an das Klima angepasst. McLir liefert ab Plombières in all diese Märkte.",
        fr: "Fairways nord-européens, domaines méditerranéens, pelouses de palais du Golfe, parcs de resorts d'Afrique du Nord — la biologie sous-jacente est la même ; les doses et le calendrier saisonnier sont adaptés au climat. McLir livre tous ces marchés depuis Plombières.",
    },
    "lawns.refs.title": { en: "Reference applications", de: "Referenz-Anwendungen", fr: "Applications de référence" },
    "lawns.refs.body": {
        en: "The portfolio is positioned for golf courses, luxury hotels, private estates, palace grounds, sports pitches, premium landscaping companies and lawn-care distributors. Programmes are scoped per client.",
        de: "Das Portfolio ist positioniert für Golfplätze, Luxushotels, Privatgüter, Palastanlagen, Sportplätze, Premium-Landschaftsbauer und Rasenpflege-Distributoren. Programme werden pro Kunde abgestimmt.",
        fr: "Le portefeuille est positionné pour les parcours de golf, les hôtels de luxe, les domaines privés, les parcs de palais, les terrains de sport, les sociétés d'aménagement paysager haut de gamme et les distributeurs d'entretien de pelouse. Les programmes sont définis par client.",
    },
    "lawns.refs.golf": { en: "Golf courses", de: "Golfplätze", fr: "Parcours de golf" },
    "lawns.refs.hotels": { en: "Hotels & resorts", de: "Hotels & Resorts", fr: "Hôtels & resorts" },
    "lawns.refs.estates": { en: "Private estates", de: "Privatgüter", fr: "Domaines privés" },
    "lawns.refs.sports": { en: "Sports pitches", de: "Sportplätze", fr: "Terrains de sport" },
    "lawns.refs.landscaping": { en: "Luxury landscaping", de: "Luxus-Landschaftsbau", fr: "Aménagement paysager de prestige" },
    "lawns.refs.palaces": { en: "Palace lawns", de: "Palast-Rasenflächen", fr: "Pelouses de palais" },
    "lawns.disclaimer": {
        en: "Language used on this page is positioned to describe mechanisms (supports, contributes to, helps maintain). Outcomes depend on local climate, soil, irrigation regime and turf species.",
        de: "Die Sprache auf dieser Seite beschreibt Mechanismen (unterstützt, trägt bei, hilft beim Erhalt). Ergebnisse hängen von lokalem Klima, Boden, Bewässerungsregime und Rasenart ab.",
        fr: "Le langage de cette page décrit des mécanismes (soutient, contribue à, aide à maintenir). Les résultats dépendent du climat local, du sol, du régime d'irrigation et de l'espèce de gazon.",
    },

    // ── Market insights — chart captions ────────────────────
    "chart.region.title": { en: "Seaweed market size — billions USD", de: "Algenmarktgröße — Milliarden USD", fr: "Taille du marché des algues — milliards USD" },
    "chart.region.eyebrow": { en: "By region", de: "Nach Region", fr: "Par région" },
    "chart.region.caption": {
        en: "Indicative figures · directional, used for business-development context. Ireland shown separately to illustrate the scale gap between domestic and export markets.",
        de: "Indikative Zahlen · richtungsweisend, verwendet für Business-Development-Kontext. Irland gesondert dargestellt, um den Skalenunterschied zwischen Inlands- und Exportmärkten zu zeigen.",
        fr: "Chiffres indicatifs · directionnels, utilisés à des fins de développement commercial. L'Irlande est présentée séparément pour illustrer l'écart d'échelle entre marché intérieur et marchés d'exportation.",
    },
    "chart.segments.title": { en: "Global demand split — %", de: "Globale Nachfrageaufteilung — %", fr: "Répartition de la demande mondiale — %" },
    "chart.segments.eyebrow": { en: "Buyer segments", de: "Käufersegmente", fr: "Segments d'acheteurs" },
    "chart.segments.caption": {
        en: "Five buyer categories drive demand. McLir is built around biostimulants and turf & landscape — the two with the strongest agronomic fit.",
        de: "Fünf Käufer-Kategorien treiben die Nachfrage. McLir konzentriert sich auf Biostimulanzien und Rasen & Landschaftsbau — die zwei mit dem stärksten agronomischen Profil.",
        fr: "Cinq catégories d'acheteurs portent la demande. McLir s'appuie sur les biostimulants et les gazons & paysage — les deux à la plus forte adéquation agronomique.",
    },
    "chart.biostim.title": { en: "Global biostimulants market — billions USD", de: "Globaler Biostimulanzien-Markt — Milliarden USD", fr: "Marché mondial des biostimulants — milliards USD" },
    "chart.biostim.eyebrow": { en: "Sector growth", de: "Sektorwachstum", fr: "Croissance sectorielle" },
    "chart.biostim.caption": {
        en: "Directional trajectory derived from published industry research. Used here to frame agronomic biostimulants as a long-cycle category, not a fad.",
        de: "Indikativer Verlauf aus veröffentlichter Branchenforschung. Hier dient er dazu, Biostimulanzien als langfristige Kategorie und nicht als kurzlebigen Trend einzuordnen.",
        fr: "Trajectoire indicative tirée de recherches sectorielles publiées. Utilisée ici pour situer les biostimulants comme une catégorie de long cycle, et non comme un effet de mode.",
    },
    "chart.imports.title": { en: "European seaweed extract imports — kilotonnes", de: "Europäische Importe von Algenextrakten — Kilotonnen", fr: "Importations européennes d'extraits d'algues — kilotonnes" },
    "chart.imports.eyebrow": { en: "Trade flow", de: "Handelsfluss", fr: "Flux commerciaux" },
    "chart.imports.caption": {
        en: "Indicative European import volumes for seaweed extract material. Trend supports a structural shift in European agronomy toward marine biostimulants.",
        de: "Indikative europäische Importmengen für Algenextrakt-Material. Trend stützt einen strukturellen Wandel der europäischen Agronomie hin zu marinen Biostimulanzien.",
        fr: "Volumes d'importations européennes indicatifs pour les extraits d'algues. La tendance soutient un basculement structurel de l'agronomie européenne vers les biostimulants marins.",
    },
    "chart.turf.title": { en: "Turf & landscape market — by region", de: "Rasen- & Landschaftsmarkt — nach Region", fr: "Marché gazon & paysage — par région" },
    "chart.turf.eyebrow": { en: "Addressable demand", de: "Adressierbare Nachfrage", fr: "Demande adressable" },
    "chart.turf.caption": {
        en: "Indicative addressable demand split between professional (golf, sports, commercial) and residential. McLir prioritises the professional layer first.",
        de: "Indikative adressierbare Nachfrage aufgeteilt zwischen professionellem Bereich (Golf, Sport, Kommerz) und Wohnbereich. McLir priorisiert zunächst die professionelle Schicht.",
        fr: "Demande adressable indicative répartie entre professionnel (golf, sport, commercial) et résidentiel. McLir priorise d'abord la couche professionnelle.",
    },
    "chart.turf.professional": { en: "Professional", de: "Professionell", fr: "Professionnel" },
    "chart.turf.residential": { en: "Residential", de: "Wohnbereich", fr: "Résidentiel" },
    "chart.drought.title": { en: "Drought-stress acreage — Europe & Middle East", de: "Trockenstress-Fläche — Europa & Naher Osten", fr: "Surface en stress hydrique — Europe & Moyen-Orient" },
    "chart.drought.eyebrow": { en: "Climate signal", de: "Klimasignal", fr: "Signal climatique" },
    "chart.drought.caption": {
        en: "Directional trend of acreage reported under drought stress (million hectares). Aligns with rising demand for stress-tolerance biology in turf and crop programmes.",
        de: "Indikativer Trend der gemeldeten Fläche unter Trockenstress (Mio. ha). Korrespondiert mit steigender Nachfrage nach Stresstoleranz-Biologie in Rasen- und Anbauprogrammen.",
        fr: "Tendance indicative des surfaces signalées en stress hydrique (millions d'hectares). En cohérence avec la demande croissante pour une biologie de tolérance au stress dans les programmes gazon et culture.",
    },
    "chart.sources": {
        en: "Sources: indicative figures compiled from FAO 2024 seaweed sector review, public biostimulants market briefings (MarketsandMarkets, Mordor Intelligence), Eurostat trade signals and JRC European Drought Observatory bulletins. Directional only.",
        de: "Quellen: indikative Zahlen aus FAO-Übersicht zur Algenbranche 2024, öffentlichen Biostimulanzien-Marktberichten (MarketsandMarkets, Mordor Intelligence), Eurostat-Handelssignalen und JRC European Drought Observatory. Nur richtungsweisend.",
        fr: "Sources : chiffres indicatifs compilés à partir de l'étude FAO 2024 sur le secteur des algues, des notes de marché publiques sur les biostimulants (MarketsandMarkets, Mordor Intelligence), des signaux commerciaux Eurostat et des bulletins de l'Observatoire européen de la sécheresse du JRC. Donnée directionnelle uniquement.",
    },

    // ── Market insights — takeaways ────────────────────────
    "insights.takeaways.label": { en: "Takeaways for distributors & partners", de: "Erkenntnisse für Distributoren & Partner", fr: "Enseignements pour distributeurs & partenaires" },
    "insights.t1.title": { en: "Export-first orientation", de: "Export-orientiert", fr: "Orientation export d'abord" },
    "insights.t1.body": { en: "Plombières, Belgium gives McLir same-week reach across the EU and rapid load-out for UK, GCC and overseas containers.", de: "Plombières, Belgien ermöglicht McLir EU-weite Lieferung innerhalb einer Woche und schnellen Versand für UK-, GCC- und Übersee-Container.", fr: "Plombières, en Belgique, permet à McLir de couvrir toute l'UE en une semaine et un chargement rapide pour le Royaume-Uni, le Golfe et les conteneurs outre-mer." },
    "insights.t2.title": { en: "Two anchor segments", de: "Zwei Ankersegmente", fr: "Deux segments d'ancrage" },
    "insights.t2.body": { en: "Around 60 % of global seaweed demand is in agriculture biostimulants and turf & landscape combined — exactly where McLir's two-format portfolio sits.", de: "Rund 60 % der globalen Algen-Nachfrage entfallen auf landwirtschaftliche Biostimulanzien sowie Rasen & Landschaftsbau — genau dort, wo McLirs Zwei-Format-Portfolio positioniert ist.", fr: "Environ 60 % de la demande mondiale d'algues se concentrent dans les biostimulants agricoles et le gazon & paysage réunis — exactement le terrain de jeu du portefeuille à deux formats de McLir." },
    "insights.t3.title": { en: "Format-focused", de: "Format-fokussiert", fr: "Centré sur les formats" },
    "insights.t3.body": { en: "Liquid concentrate and slow-release granulate — one species, the two formats that actually move at scale for professional growers and luxury landscaping.", de: "Flüssigkonzentrat und langzeitwirksames Granulat — eine Art, die zwei Formate, die sich wirklich in der Praxis durchsetzen für professionellen Anbau und Luxus-Landschaftsbau.", fr: "Concentré liquide et granulé à libération lente — une espèce, les deux formats qui passent vraiment à l'échelle pour les cultivateurs professionnels et l'aménagement paysager de prestige." },

    // ── Market insights — CTA ──────────────────────────────
    "insights.cta.title": { en: "Build a regional distribution programme with us.", de: "Bauen Sie mit uns ein regionales Distributionsprogramm auf.", fr: "Construisez avec nous un programme de distribution régional." },
    "insights.cta.body": {
        en: "We work with master distributors, mill networks and own-brand formulators across Europe and the Middle East. Volume, label and format are all customisable.",
        de: "Wir arbeiten mit Master-Distributoren, Mühlennetzwerken und Eigenmarken-Formulierern in Europa und im Nahen Osten. Volumen, Etikett und Format sind anpassbar.",
        fr: "Nous travaillons avec des distributeurs maîtres, des réseaux de minoteries et des formulateurs en marque propre, en Europe et au Moyen-Orient. Volume, étiquette et format sont tous personnalisables.",
    },

    // ── Process page CTA ────────────────────────────────────
    "process.cta.eyebrow": { en: "Quality & traceability assured", de: "Qualität & Rückverfolgbarkeit gesichert", fr: "Qualité & traçabilité garanties" },
    "process.cta.title": { en: "Want to audit a batch? Send us a delivery number.", de: "Möchten Sie eine Charge prüfen? Senden Sie uns eine Liefernummer.", fr: "Vous souhaitez auditer un lot ? Envoyez-nous un numéro de livraison." },
    "process.cta.body": {
        en: "We can walk any finished pallet back to the original harvest, with documentation suitable for distributor QA, organic-certifier audits and export inspection.",
        de: "Wir können jede fertige Palette bis zur ursprünglichen Ernte zurückverfolgen, mit Dokumentation für Distributor-QS, Bio-Audits und Exportkontrolle.",
        fr: "Nous pouvons retracer toute palette finie jusqu'à la récolte d'origine, avec une documentation adaptée à la QA distributeur, aux audits organiques et à l'inspection à l'export.",
    },

    // ── Process stat labels ─────────────────────────────────
    "process.stat.ratio": { en: "Wet to finished product ratio", de: "Verhältnis nass zu fertigem Produkt", fr: "Ratio humide / produit fini" },
    "process.stat.temp": { en: "Maximum drying temperature", de: "Max. Trocknungstemperatur", fr: "Température maximale de séchage" },
    "process.stat.moisture": { en: "Final moisture window", de: "Endfeuchte-Fenster", fr: "Fenêtre d'humidité finale" },

    // ── Liquid page small ───────────────────────────────────
    "liquid.bioactives": { en: "Bioactive components", de: "Bioaktive Bestandteile", fr: "Composants bioactifs" },
    "liquid.usecases": { en: "Use cases", de: "Anwendungsfälle", fr: "Cas d'usage" },
    "liquid.spec": { en: "Technical specification", de: "Technische Spezifikation", fr: "Spécification technique" },
    "liquid.heavy_metals": { en: "Heavy metals analysis", de: "Schwermetall-Analyse", fr: "Analyse des métaux lourds" },
    "liquid.source": { en: "Source", de: "Quelle", fr: "Source" },
    "liquid.extraction": { en: "Extraction", de: "Extraktion", fr: "Extraction" },
    "liquid.rate": { en: "Directions for use", de: "Anwendungshinweise", fr: "Mode d'emploi" },
    "liquid.usage": { en: "How to apply", de: "Anwendung", fr: "Comment appliquer" },
    "liquid.packaging": { en: "Packaging", de: "Verpackung", fr: "Conditionnement" },
    "liquid.storage": { en: "Storage & shelf life", de: "Lagerung & Haltbarkeit", fr: "Stockage & durée de conservation" },
    "liquid.batch_note": { en: "Batch note", de: "Chargenhinweis", fr: "Note de lot" },
    "liquid.certifications": { en: "Certifications", de: "Zertifizierungen", fr: "Certifications" },
    "liquid.origin": { en: "Origin", de: "Herkunft", fr: "Origine" },

    // ── Granulate page small ───────────────────────────────
    "gran.spec": { en: "Technical specification", de: "Technische Spezifikation", fr: "Spécification technique" },
    "gran.usecases": { en: "Use cases", de: "Anwendungsfälle", fr: "Cas d'usage" },
    "gran.rate": { en: "Application rate", de: "Anwendungsmenge", fr: "Dose d'application" },
    "gran.packaging": { en: "Packaging", de: "Verpackung", fr: "Conditionnement" },
    "gran.storage": { en: "Storage", de: "Lagerung", fr: "Stockage" },
    "gran.stat.release": { en: "Release activity in soil", de: "Wirkung im Boden", fr: "Libération dans le sol" },
    "gran.stat.om": { en: "Organic matter typical", de: "Organische Substanz typisch", fr: "Matière organique typique" },
    "gran.stat.particle": { en: "Conditioner particle band", de: "Partikelband Bodenverbesserer", fr: "Plage granulométrique de l'amendement" },
    "gran.label.granulate": { en: "McLir Granulate", de: "McLir Granulat", fr: "Granulé McLir" },

    // ── Generic ─────────────────────────────────────────────
    "generic.indicator": { en: "Indicative", de: "Indikativ", fr: "Indicatif" },

    // ── Contact page (additional, original kept) ────────────
    "contact.tile.operation": { en: "Operation", de: "Betrieb", fr: "Site" },
    "contact.tile.email": { en: "E-mail", de: "E-Mail", fr: "E-mail" },
    "contact.tile.logistics": { en: "Logistics", de: "Logistik", fr: "Logistique" },
    "contact.tile.documentation": { en: "Documentation", de: "Dokumentation", fr: "Documentation" },
    "contact.tile.logistics_value": { en: "Pallet, big-bag, container", de: "Palette, Big-Bag, Container", fr: "Palette, big-bag, conteneur" },
    "contact.tile.docs_value": { en: "EU spec sheets, MSDS, COA", de: "EU-Spezifikationen, MSDS, COA", fr: "Fiches techniques UE, FDS, COA" },
    "contact.direct_mailbox": { en: "Direct mailbox", de: "Direkter Posteingang", fr: "Boîte mail directe" },
    "contact.quick_subjects": { en: "Quick subjects", de: "Schnellauswahl", fr: "Sujets rapides" },
    "contact.subject.liquid": { en: "Liquid Seaweed sample", de: "Muster Flüssige Algen", fr: "Échantillon Algues liquides" },
    "contact.subject.granulate": { en: "Granulate sample", de: "Granulat-Muster", fr: "Échantillon de granulés" },
    "contact.subject.distribution": { en: "Distribution / partnership", de: "Distribution / Partnerschaft", fr: "Distribution / partenariat" },
    "contact.subject.lawns": { en: "Lawns & turf programme", de: "Rasen- & Sportrasen-Programm", fr: "Programme pelouses & gazon" },
    "contact.export.eyebrow": { en: "Export ready", de: "Exportbereit", fr: "Prêt à l'export" },
    "contact.export.title": { en: "Plombières — central, bonded, container-ready.", de: "Plombières — zentral, zollgebunden, containerfähig.", fr: "Plombières — centrale, sous douane, prête au conteneur." },
    "contact.export.body": {
        en: "From Belgium we move pallets across the EU within days, big-bags and container loads worldwide on request. Documentation is prepared per market: EU spec sheets, MSDS, COA, organic-input statements and customer-specific QA paperwork.",
        de: "Aus Belgien bewegen wir Paletten EU-weit innerhalb von Tagen, Big-Bags und Container-Ladungen weltweit auf Anfrage. Dokumentation wird je Markt vorbereitet: EU-Spezifikationen, MSDS, COA, Bio-Eingangserklärungen und kundenspezifische QS-Unterlagen.",
        fr: "Depuis la Belgique, nous expédions des palettes dans toute l'UE en quelques jours, et des big-bags et conteneurs partout dans le monde sur demande. La documentation est préparée par marché : fiches techniques UE, FDS, COA, attestations intrants biologiques et documents QA spécifiques au client.",
    },

    // ── Impressum & Datenschutz page ────────────────────────
    "page.impressum.eyebrow": { en: "Legal", de: "Rechtliches", fr: "Mentions légales" },
    "page.impressum.title": {
        en: "Imprint and Privacy Policy",
        de: "Impressum und Datenschutz",
        fr: "Mentions légales et politique de confidentialité",
    },
    "page.impressum.intro": {
        en: "This page sets out the legally required imprint information for McLir Seaweed and a GDPR-aligned privacy notice covering visitors from the European Union and beyond.",
        de: "Diese Seite enthält die gesetzlich vorgeschriebenen Impressumsangaben für McLir Seaweed sowie eine an die DSGVO angelehnte Datenschutzerklärung für Besucher aus der Europäischen Union und darüber hinaus.",
        fr: "Cette page présente les mentions légales obligatoires de McLir Seaweed ainsi qu'une politique de confidentialité conforme au RGPD pour les visiteurs depuis l'Union européenne et au-delà.",
    },
    "impressum.section1.title": { en: "Imprint", de: "Impressum", fr: "Mentions légales" },
    "impressum.company.label": { en: "Company", de: "Unternehmen", fr: "Société" },
    "impressum.owner.label": { en: "Responsible person", de: "Verantwortliche Person", fr: "Responsable" },
    "impressum.owner.value": { en: "Editable placeholder — please supply the final legal name of the authorised representative.", de: "Editierbarer Platzhalter — bitte den endgültigen Namen des bevollmächtigten Vertreters einsetzen.", fr: "Espace réservé — veuillez fournir le nom légal définitif du représentant autorisé." },
    "impressum.address.label": { en: "Business address", de: "Geschäftsadresse", fr: "Adresse de l'entreprise" },
    "impressum.email.label": { en: "E-mail", de: "E-Mail", fr: "E-mail" },
    "impressum.phone.label": { en: "Phone", de: "Telefon", fr: "Téléphone" },
    "impressum.vat.label": { en: "VAT / Tax ID", de: "USt-IdNr.", fr: "N° TVA" },
    "impressum.vat.value": { en: "VAT number to be inserted by McLir Seaweed.", de: "USt-IdNr. wird von McLir Seaweed eingetragen.", fr: "Numéro de TVA à compléter par McLir Seaweed." },
    "impressum.register.label": { en: "Commercial register", de: "Handelsregister", fr: "Registre du commerce" },
    "impressum.register.value": { en: "Commercial register entry to be inserted where applicable.", de: "Handelsregistereintrag, sofern zutreffend, einzutragen.", fr: "Inscription au registre du commerce à compléter le cas échéant." },

    "privacy.section.title": { en: "Privacy Policy (GDPR)", de: "Datenschutzerklärung (DSGVO)", fr: "Politique de confidentialité (RGPD)" },

    "privacy.controller.title": { en: "Data controller", de: "Verantwortlicher", fr: "Responsable du traitement" },
    "privacy.controller.body": {
        en: "The data controller responsible for personal data processed via this website is McLir Seaweed, based in Plombières, Belgium. Contact details are listed under the imprint above.",
        de: "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist McLir Seaweed mit Sitz in Plombières, Belgien. Kontaktdaten sind im obigen Impressum aufgeführt.",
        fr: "Le responsable du traitement des données personnelles via ce site est McLir Seaweed, établi à Plombières, Belgique. Les coordonnées figurent dans les mentions légales ci-dessus.",
    },
    "privacy.collected.title": { en: "Personal data collected", de: "Erhobene personenbezogene Daten", fr: "Données personnelles collectées" },
    "privacy.collected.body": {
        en: "We may collect: name, business name, e-mail address, phone number, postal address and any further information you choose to share with us when you contact us by e-mail or via the mailto links on this site. We do not run a public web form.",
        de: "Wir können folgende Daten erfassen: Name, Firma, E-Mail-Adresse, Telefonnummer, Postanschrift sowie weitere Angaben, die Sie uns bei einer Kontaktaufnahme per E-Mail oder über die Mailto-Links dieser Website mitteilen. Ein öffentliches Webformular wird nicht betrieben.",
        fr: "Nous pouvons collecter : nom, dénomination sociale, adresse e-mail, numéro de téléphone, adresse postale et toute autre information que vous nous communiquez lorsque vous nous contactez par e-mail ou via les liens mailto de ce site. Aucun formulaire web public n'est utilisé.",
    },
    "privacy.contact.title": { en: "Contact form & e-mail data", de: "Daten aus Kontaktformular und E-Mail", fr: "Données issues du formulaire de contact et e-mails" },
    "privacy.contact.body": {
        en: "When you write to us at the published e-mail address, your message and all data it contains are stored on our mail server for the purpose of handling your enquiry. We do not use it for unsolicited marketing.",
        de: "Wenn Sie uns an die veröffentlichte E-Mail-Adresse schreiben, werden Ihre Nachricht und die darin enthaltenen Daten zur Bearbeitung Ihrer Anfrage auf unserem Mailserver gespeichert. Eine Nutzung zu Werbezwecken ohne Einwilligung erfolgt nicht.",
        fr: "Lorsque vous nous écrivez à l'adresse e-mail publiée, votre message et toutes les données qu'il contient sont conservés sur notre serveur de messagerie aux fins du traitement de votre demande. Aucune utilisation marketing non sollicitée n'est effectuée.",
    },
    "privacy.analytics.title": { en: "Website analytics & cookies", de: "Website-Analyse & Cookies", fr: "Analyse du site & cookies" },
    "privacy.analytics.body": {
        en: "This website is built as a static marketing site. We do not deploy third-party advertising trackers. Essential, privacy-respecting cookies (such as language preference) may be set in your browser. If we later add web analytics, you will see an updated notice and a consent banner.",
        de: "Diese Website ist eine statische Marketing-Website. Es werden keine Drittanbieter-Werbe-Tracker eingesetzt. Wesentliche, datenschutzfreundliche Cookies (z. B. Sprachpräferenz) können in Ihrem Browser gespeichert werden. Sollte später Web-Analyse hinzugefügt werden, erhalten Sie einen aktualisierten Hinweis und einen Einwilligungsbanner.",
        fr: "Ce site est un site marketing statique. Nous n'utilisons pas de traceurs publicitaires tiers. Des cookies essentiels et respectueux de la vie privée (par exemple la préférence de langue) peuvent être stockés dans votre navigateur. Si une solution d'analyse web est ajoutée ultérieurement, vous verrez un avis mis à jour et une bannière de consentement.",
    },
    "privacy.basis.title": { en: "Legal basis for processing", de: "Rechtsgrundlage der Verarbeitung", fr: "Base légale du traitement" },
    "privacy.basis.body": {
        en: "Processing of contact data is based on Art. 6(1)(b) GDPR (steps prior to entering into a contract / fulfilling an enquiry) and, where applicable, Art. 6(1)(f) GDPR (legitimate interest in answering a commercial enquiry).",
        de: "Die Verarbeitung von Kontaktdaten stützt sich auf Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen / Bearbeitung einer Anfrage) sowie ggf. auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung einer geschäftlichen Anfrage).",
        fr: "Le traitement des données de contact repose sur l'art. 6, §1, b) du RGPD (mesures précontractuelles / réponse à une demande) et, le cas échéant, sur l'art. 6, §1, f) du RGPD (intérêt légitime à répondre à une demande commerciale).",
    },
    "privacy.storage.title": { en: "Data storage duration", de: "Speicherdauer", fr: "Durée de conservation" },
    "privacy.storage.body": {
        en: "Personal data is stored only for as long as needed to handle the relevant enquiry or business relationship, plus any statutory retention periods under Belgian, German and EU law (typically up to 10 years for commercial correspondence).",
        de: "Personenbezogene Daten werden nur so lange gespeichert, wie es zur Bearbeitung der jeweiligen Anfrage oder Geschäftsbeziehung erforderlich ist, zuzüglich gesetzlicher Aufbewahrungsfristen nach belgischem, deutschem und EU-Recht (in der Regel bis zu 10 Jahre für Geschäftskorrespondenz).",
        fr: "Les données personnelles ne sont conservées que le temps nécessaire au traitement de la demande ou de la relation commerciale concernée, augmenté des durées légales de conservation au titre du droit belge, allemand et européen (généralement jusqu'à 10 ans pour la correspondance commerciale).",
    },
    "privacy.rights.title": { en: "Your rights under GDPR", de: "Ihre Rechte nach der DSGVO", fr: "Vos droits au titre du RGPD" },
    "privacy.rights.body": {
        en: "You have the right to access, correct, delete, restrict and object to the processing of your personal data, the right to data portability, and the right to lodge a complaint with a supervisory authority (e.g. the Belgian Data Protection Authority).",
        de: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten, das Recht auf Datenübertragbarkeit sowie das Beschwerderecht bei einer Aufsichtsbehörde (z. B. der belgischen Datenschutzbehörde).",
        fr: "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données personnelles, d'un droit à la portabilité ainsi que du droit d'introduire une réclamation auprès d'une autorité de contrôle (par exemple l'Autorité belge de protection des données).",
    },
    "privacy.transfers.title": { en: "Data transfers outside the EU", de: "Datenübermittlung außerhalb der EU", fr: "Transferts de données hors UE" },
    "privacy.transfers.body": {
        en: "We do not actively transfer personal data outside the EU. Where contact data is unavoidably touched by international service providers (e.g. e-mail and hosting), we rely on adequacy decisions or EU Standard Contractual Clauses.",
        de: "Eine aktive Übermittlung personenbezogener Daten außerhalb der EU findet nicht statt. Soweit Kontaktdaten unvermeidlich durch internationale Dienstleister (z. B. E-Mail- und Hosting-Anbieter) berührt werden, stützen wir uns auf Angemessenheitsbeschlüsse oder EU-Standardvertragsklauseln.",
        fr: "Nous ne transférons pas activement de données personnelles hors de l'UE. Lorsque les données de contact sont incidemment traitées par des prestataires internationaux (e-mail, hébergement), nous nous appuyons sur des décisions d'adéquation ou sur les clauses contractuelles types de l'UE.",
    },
    "privacy.request.title": { en: "Contact for privacy requests", de: "Kontakt für Datenschutzanfragen", fr: "Contact pour les demandes RGPD" },
    "privacy.request.body": {
        en: "To exercise any of the rights listed above, please write to our published e-mail address with the subject line \"GDPR request\". We will reply within statutory deadlines.",
        de: "Zur Ausübung der oben genannten Rechte richten Sie bitte eine E-Mail an unsere veröffentlichte E-Mail-Adresse mit dem Betreff „DSGVO-Anfrage\". Wir antworten innerhalb der gesetzlichen Fristen.",
        fr: "Pour exercer l'un des droits ci-dessus, veuillez écrire à notre adresse e-mail publiée avec l'objet « Demande RGPD ». Nous répondrons dans les délais légaux.",
    },
    "privacy.updates.title": { en: "Updates to this policy", de: "Aktualisierungen dieser Erklärung", fr: "Mises à jour de cette politique" },
    "privacy.updates.body": {
        en: "This policy may be updated to reflect changes in legal requirements or in the way the site operates. Material changes will be communicated on this page.",
        de: "Diese Erklärung kann an geänderte gesetzliche Anforderungen oder Funktionsweisen der Website angepasst werden. Wesentliche Änderungen werden auf dieser Seite mitgeteilt.",
        fr: "Cette politique peut être mise à jour pour refléter les évolutions des exigences légales ou du fonctionnement du site. Les changements significatifs seront communiqués sur cette page.",
    },
    "impressum.disclaimer": {
        en: "This page provides standard, GDPR-aware wording. It does not constitute legal advice. Please have it reviewed by a qualified legal professional before publication for your specific jurisdiction and business activities.",
        de: "Diese Seite enthält standardmäßige, DSGVO-orientierte Formulierungen. Sie stellt keine Rechtsberatung dar. Vor Veröffentlichung sollten Sie sie von einer fachlich qualifizierten Person für Ihre konkrete Rechtsordnung und Geschäftstätigkeit prüfen lassen.",
        fr: "Cette page propose un libellé standard, conforme à l'esprit du RGPD. Elle ne constitue pas un conseil juridique. Veuillez la faire vérifier par un professionnel du droit qualifié avant publication pour votre juridiction et vos activités spécifiques.",
    },
};

export function useT() {
    const { lang } = useLang();
    return (key) => {
        const entry = T[key];
        if (!entry) return key;
        if (entry[lang] !== undefined) return entry[lang];
        return entry.en || key;
    };
}
