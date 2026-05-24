import { createContext, useContext, useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
// McLir Seaweed — i18n
// Languages: en (English), de (Deutsch), ga (Gaeilge / Irish), fr (Français)
// Strategy: every visible string is fully translated across all four
// languages. Deep technical specs (numbers, units, scientific names)
// remain in their native units — they read the same in every language.
// ─────────────────────────────────────────────────────────────

const LangCtx = createContext({ lang: "en", setLang: () => {} });

export const LANGS = [
    { code: "en", label: "EN", name: "English" },
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "ga", label: "GA", name: "Gaeilge" },
    { code: "fr", label: "FR", name: "Français" },
];

const SUPPORTED = ["en", "de", "ga", "fr"];

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

// Translation dictionary — { key: { en, de, ga, fr } }
const T = {
    // ── Navigation ──────────────────────────────────────────
    "nav.home": { en: "Home", de: "Startseite", ga: "Baile", fr: "Accueil" },
    "nav.products": { en: "Products", de: "Produkte", ga: "Táirgí", fr: "Produits" },
    "nav.liquid": { en: "Liquid Seaweed", de: "Flüssige Algen", ga: "Feamainn Leachtach", fr: "Algues liquides" },
    "nav.granulates": { en: "Granulates & Soil Conditioner", de: "Granulate & Bodenverbesserer", ga: "Gráinní agus Coinneálaí Ithreach", fr: "Granulés & amendement du sol" },
    "nav.lawns": { en: "Lawns & Turf", de: "Rasen & Sportrasen", ga: "Faichí & Sportfhaichí", fr: "Pelouses & gazon" },
    "nav.process": { en: "Process", de: "Prozess", ga: "Próiseas", fr: "Procédé" },
    "nav.insights": { en: "Market Insights", de: "Markteinblicke", ga: "Léargas Margaidh", fr: "Analyses de marché" },
    "nav.contact": { en: "Contact", de: "Kontakt", ga: "Teagmháil", fr: "Contact" },

    // ── CTAs ────────────────────────────────────────────────
    "cta.sample": { en: "Request a sample", de: "Muster anfordern", ga: "Iarr sampla", fr: "Demander un échantillon" },
    "cta.request_sample": { en: "Request a sample", de: "Muster anfordern", ga: "Iarr sampla", fr: "Demander un échantillon" },
    "cta.explore_liquid": { en: "Explore liquid products", de: "Flüssigprodukte entdecken", ga: "Féach ar tháirgí leachtacha", fr: "Découvrir les produits liquides" },
    "cta.explore_granulates": { en: "Explore granulates", de: "Granulate entdecken", ga: "Féach ar na gráinní", fr: "Découvrir les granulés" },
    "cta.see_process": { en: "See the manufacturing process", de: "Herstellungsprozess ansehen", ga: "Féach an próiseas déantúsaíochta", fr: "Voir le procédé de fabrication" },
    "cta.view_full_process": { en: "View the full process", de: "Vollständigen Prozess ansehen", ga: "Féach an próiseas iomlán", fr: "Voir le procédé complet" },
    "cta.open_market": { en: "Open market insights", de: "Markteinblicke öffnen", ga: "Oscail léargas margaidh", fr: "Ouvrir les analyses de marché" },
    "cta.open_contact": { en: "Open contact page", de: "Kontaktseite öffnen", ga: "Oscail leathanach teagmhála", fr: "Ouvrir la page contact" },
    "cta.drill_in": { en: "Drill in", de: "Mehr erfahren", ga: "Tochail isteach", fr: "Approfondir" },
    "cta.open": { en: "Open", de: "Öffnen", ga: "Oscail", fr: "Ouvrir" },
    "cta.back_brand": { en: "← McLir Seaweed", de: "← McLir Seaweed", ga: "← McLir Seaweed", fr: "← McLir Seaweed" },
    "cta.discover_turf": { en: "Discover lawns & turf", de: "Rasen entdecken", ga: "Féach ar fhaichí agus shportfhaichí", fr: "Découvrir les pelouses & gazons" },
    "cta.talk_to_mclir": { en: "Talk to McLir", de: "Mit McLir sprechen", ga: "Labhair le McLir", fr: "Parler à McLir" },

    // ── Hero ────────────────────────────────────────────────
    "hero.eyebrow": {
        en: "McLir Seaweed · Atlantic origin · Plombières, Belgium",
        de: "McLir Seaweed · Atlantischer Ursprung · Plombières, Belgien",
        ga: "McLir Seaweed · Bunús Atlantach · Plombières, an Bheilg",
        fr: "McLir Seaweed · Origine atlantique · Plombières, Belgique",
    },
    "hero.medallion_caption": {
        en: "Atlantic origin · Plombières, Belgium",
        de: "Atlantischer Ursprung · Plombières, Belgien",
        ga: "Bunús Atlantach · Plombières, an Bheilg",
        fr: "Origine atlantique · Plombières, Belgique",
    },
    "hero.title.line1": { en: "Grown by the sea.", de: "Vom Meer gewachsen.", ga: "Fásta cois farraige.", fr: "Cultivée par la mer." },
    "hero.title.italic": { en: "Trusted", de: "Vertraut", ga: "Iontaofa", fr: "Adoptée" },
    "hero.title.line2": { en: "by the soil and the lawn.", de: "vom Boden und vom Rasen.", ga: "ag an ithir agus ag an bhfaiche.", fr: "par le sol et la pelouse." },
    "hero.sub": {
        en: "McLir Seaweed refines Atlantic Ascophyllum nodosum into liquid concentrates and slow-release granulates. One species. One ocean. Two formats — engineered for professional agriculture, corporate farming, luxury landscaping and world-class lawns across Europe and the Middle East.",
        de: "McLir Seaweed veredelt atlantische Ascophyllum nodosum zu Flüssigkonzentraten und langzeitwirksamen Granulaten. Eine Art. Ein Ozean. Zwei Formate — entwickelt für professionellen Anbau, Großlandwirtschaft, Luxus-Landschaftsbau und erstklassige Rasenflächen in Europa und dem Nahen Osten.",
        ga: "Déanann McLir Seaweed Ascophyllum nodosum Atlantach a thiontú ina thiúchain leachtacha agus ina ghráinní mall-scaoilte. Speiceas amháin. Aigéan amháin. Dhá fhormáid — deartha do thalmhaíocht ghairmiúil, do mhór-fheirmeoireacht, do thírdhreachú só agus do fhaichí den scoth ar fud na hEorpa agus an Mheánoirthir.",
        fr: "McLir Seaweed transforme l'Ascophyllum nodosum atlantique en concentrés liquides et en granulés à libération lente. Une espèce. Un océan. Deux formats — conçus pour l'agriculture professionnelle, les grandes exploitations, l'aménagement paysager haut de gamme et les pelouses d'exception en Europe et au Moyen-Orient.",
    },

    // ── Marquee ─────────────────────────────────────────────
    "chip.vineyards": { en: "Vineyards", de: "Weinberge", ga: "Fíonghoirt", fr: "Vignobles" },
    "chip.orchards": { en: "Orchards", de: "Obstgärten", ga: "Úllghoirt", fr: "Vergers" },
    "chip.cereals": { en: "Cereals", de: "Getreide", ga: "Gránaigh", fr: "Céréales" },
    "chip.greenhouse": { en: "Greenhouse", de: "Gewächshaus", ga: "Teach gloine", fr: "Serres" },
    "chip.turf_golf": { en: "Turf & golf", de: "Rasen & Golf", ga: "Faiche & Gailf", fr: "Gazon & golf" },
    "chip.berries": { en: "Berries", de: "Beeren", ga: "Caora", fr: "Petits fruits" },
    "chip.lawns": { en: "Luxury lawns", de: "Premium-Rasen", ga: "Faichí só", fr: "Pelouses haut de gamme" },
    "chip.estates": { en: "Estates", de: "Anwesen", ga: "Eastáit", fr: "Domaines" },
    "chip.hotels": { en: "Hotels & resorts", de: "Hotels & Resorts", ga: "Óstáin & ionaid saoire", fr: "Hôtels & resorts" },
    "chip.sports_turf": { en: "Sports turf", de: "Sportrasen", ga: "Sportfhaichí", fr: "Gazons sportifs" },

    // ── Product families section ────────────────────────────
    "sec.families.eyebrow": { en: "Two formats. One ocean.", de: "Zwei Formate. Ein Ozean.", ga: "Dhá fhormáid. Aigéan amháin.", fr: "Deux formats. Un océan." },
    "sec.families.title": { en: "A complete seaweed system — not a single bottle.", de: "Ein komplettes Algen-System — nicht nur eine Flasche.", ga: "Córas iomlán feamainne — ní buidéal aonair.", fr: "Un système complet d'algues — pas une simple bouteille." },
    "sec.families.body": {
        en: "Apply the liquid for fast biostimulation. Apply the granulate for slow, soil-deep release. Each format draws on the same hand-cut Atlantic raw material — refined to fit a different point in the agronomic and landscape calendar.",
        de: "Flüssig für schnelle Biostimulation. Granulat für langsame, bodentiefe Freisetzung. Jedes Format basiert auf demselben handgeschnittenen atlantischen Rohstoff — veredelt für unterschiedliche Punkte im agronomischen und landschaftspflegerischen Kalender.",
        ga: "Cuir an leacht le haghaidh bithspreagtha tapa. Cuir an gráinne le haghaidh scaoileadh mall doimhin san ithir. Tarraingíonn gach formáid ar an amhábhar Atlantach céanna a bhaintear de láimh — athchóirithe d'aimseanna éagsúla sa féilire talmhaíochta agus tírdhreachaithe.",
        fr: "Appliquez le liquide pour une biostimulation rapide. Appliquez le granulé pour une libération lente et profonde dans le sol. Chaque format repose sur la même matière première atlantique récoltée à la main — raffinée pour un moment différent du calendrier agronomique et paysager.",
    },
    "fam.liquid.eyebrow": { en: "Liquid range", de: "Flüssig-Sortiment", ga: "Raon leachtach", fr: "Gamme liquide" },
    "fam.liquid.title": { en: "Liquid Seaweed", de: "Flüssige Algen", ga: "Feamainn Leachtach", fr: "Algues liquides" },
    "fam.liquid.body": {
        en: "Cold-press and Superior 20 / 30 extracts — alkaline, aqueous and concentrated formats for foliar use and fertigation.",
        de: "Kaltpress- und Superior 20 / 30 Extrakte — alkalisch, wässrig und konzentriert für Blatt- und Tröpfchenbewässerung.",
        ga: "Eastóscáin chold-press agus Superior 20 / 30 — formáidí alcaileach, uisceach agus tiubhaithe le haghaidh úsáide duille agus fertigation.",
        fr: "Extraits pressés à froid et Superior 20 / 30 — formats alcalin, aqueux et concentré pour pulvérisation foliaire et fertigation.",
    },
    "fam.granulates.eyebrow": { en: "Soil & turf", de: "Boden & Rasen", ga: "Ithir & faiche", fr: "Sol & gazon" },
    "fam.granulates.title": { en: "Granulates & Soil Conditioner", de: "Granulate & Bodenverbesserer", ga: "Gráinní & Coinneálaí Ithreach", fr: "Granulés & amendement du sol" },
    "fam.granulates.body": {
        en: "Slow-release dried Ascophyllum granules and graded seaweed meal — broadcast, blend, top-dress on turf or rebuild soil structure across professional acres.",
        de: "Langzeitwirksame getrocknete Ascophyllum-Granulate und sortiertes Algenmehl — streuen, mischen, als Top-Dressing für Rasen oder zum Bodenaufbau in professionellen Flächen.",
        ga: "Gráinní triomaithe Ascophyllum a scaoileann go mall agus min fheamainne grádaithe — craol, measc, cuir mar bharrchóiriú ar fhaichí nó atóg struchtúr ithreach.",
        fr: "Granulés d'Ascophyllum séchés à libération lente et farine d'algues calibrée — à épandre, mélanger, sursemer sur gazon ou pour reconstruire la structure du sol sur des hectares professionnels.",
    },

    // ── Stats ───────────────────────────────────────────────
    "stats.yield": { en: "Indicative grower yield uplift in trials", de: "Indikative Ertragssteigerung bei Anbau-Versuchen", ga: "Méadú toraidh táscach do fheirmeoirí i dtrialacha", fr: "Hausse de rendement indicative dans les essais" },
    "stats.species": { en: "Atlantic Ascophyllum nodosum, single species", de: "Atlantische Ascophyllum nodosum, einzige Art", ga: "Ascophyllum nodosum Atlantach, speiceas aonair", fr: "Ascophyllum nodosum atlantique, espèce unique" },
    "stats.drying": { en: "Maximum drying temperature — nutrient-safe", de: "Max. Trocknungstemperatur — nährstoffschonend", ga: "Uasteocht triomaithe — sábháilte do chothaithigh", fr: "Température maximale de séchage — préserve les nutriments" },
    "stats.release": { en: "Granulate slow-release activity in soil", de: "Langzeit-Wirkung des Granulats im Boden", ga: "Gníomhaíocht scaoilte mhall an ghráinne san ithir", fr: "Libération lente du granulé dans le sol" },

    // ── Pillars ─────────────────────────────────────────────
    "pillars.eyebrow": { en: "Why McLir", de: "Warum McLir", ga: "Cén fáth McLir", fr: "Pourquoi McLir" },
    "pillars.title": { en: "It is not a fertiliser. It is biology, refined.", de: "Es ist kein Düngemittel. Es ist veredelte Biologie.", ga: "Ní leasachán é. Is bitheolaíocht athchóirithe é.", fr: "Ce n'est pas un engrais. C'est de la biologie raffinée." },
    "pillars.bio.title": { en: "Native bioactives, intact", de: "Native Wirkstoffe, intakt", ga: "Bithghníomhaigh dhúchasacha, slán", fr: "Bioactifs natifs, intacts" },
    "pillars.bio.body": {
        en: "Cold and low-temperature processes preserve auxins, cytokinins, betaines and alginates — the seaweed chemistry the soil, the root and the turf actually recognise.",
        de: "Kalte und niedrige Prozesstemperaturen bewahren Auxine, Cytokinine, Betaine und Alginate — die Algenchemie, die Boden, Wurzel und Rasen wirklich erkennen.",
        ga: "Caomhnaíonn próisis fhuara agus íseal-teochta auxins, cytokinins, betaines agus alginates — ceimic na feamainne a aithníonn an ithir, an fhréamh agus an fhaiche.",
        fr: "Les procédés à froid et à basse température préservent auxines, cytokinines, bétaïnes et alginates — la chimie marine que le sol, la racine et le gazon reconnaissent vraiment.",
    },
    "pillars.trace.title": { en: "Traceable, batch by batch", de: "Rückverfolgbar, Charge für Charge", ga: "Inrianaithe, baisc ar bhaisc", fr: "Traçable, lot par lot" },
    "pillars.trace.body": {
        en: "Every delivery is logged on arrival and every bag is batch-numbered, so any finished product can be walked back to a single Atlantic harvest.",
        de: "Jede Lieferung wird bei Ankunft erfasst, jeder Sack erhält eine Chargennummer — so kann jedes Endprodukt bis zu einer einzigen Atlantik-Ernte zurückverfolgt werden.",
        ga: "Cláraítear gach seachadadh ar theacht isteach agus tá uimhir bhaisc ar gach mála — féidir gach táirge críochnaithe a rianú siar go fómhar Atlantach amháin.",
        fr: "Chaque livraison est consignée à l'arrivée et chaque sac porte un numéro de lot — tout produit fini peut être retracé jusqu'à une récolte atlantique unique.",
    },
    "pillars.export.title": { en: "Built for export", de: "Für den Export gebaut", ga: "Tógtha le haghaidh easpórtála", fr: "Conçu pour l'export" },
    "pillars.export.body": {
        en: "Pallet-ready 20 kg / 25 kg formats, 1 t big-bags and IBC liquids — moving daily out of Plombières to growers, landscapers and distributors across Europe and the Middle East.",
        de: "Palettenfertige 20 kg / 25 kg Formate, 1 t Big-Bags und IBC-Flüssigkeiten — verlassen täglich Plombières Richtung Höfen, Landschaftsbauern und Distributoren in Europa und dem Nahen Osten.",
        ga: "Formáidí 20 kg / 25 kg réidh do phailléid, mála móra 1 t agus leachtanna IBC — ag bogadh laethúil as Plombières chuig feirmeoirí, tírdhreachadóirí agus dáileoirí ar fud na hEorpa agus an Mheánoirthir.",
        fr: "Formats palette 20 kg / 25 kg, big-bags 1 t et liquides en IBC — quittent chaque jour Plombières vers cultivateurs, paysagistes et distributeurs en Europe et au Moyen-Orient.",
    },

    // ── Process teaser ──────────────────────────────────────
    "process.eyebrow": { en: "Process", de: "Prozess", ga: "Próiseas", fr: "Procédé" },
    "process.teaser.title": { en: "From the cold North Atlantic to your bay number.", de: "Vom kalten Nord-Atlantik bis zu Ihrer Lager-Nummer.", ga: "Ón Atlantach Thuaidh fuar go d'uimhir bhá stórála.", fr: "De l'Atlantique Nord glacé jusqu'à votre numéro de baie." },
    "process.teaser.body": {
        en: "Four tonnes of wet seaweed yield one tonne of finished product. Drying never exceeds 75 °C. Final moisture is held at 12 – 14 %. Every shipment is batch-numbered against its harvest.",
        de: "Vier Tonnen feuchte Algen ergeben eine Tonne fertiges Produkt. Trocknung nie über 75 °C. Endfeuchte bei 12 – 14 %. Jede Sendung wird gegen ihre Ernte chargennummeriert.",
        ga: "Tá ceithre thonna feamainne fliucha ag teastáil chun tonna táirge críochnaithe a tháirgeadh. Ní sháraíonn an triomú 75 °C. Coinnítear an taise dheireanach ag 12 – 14 %.",
        fr: "Quatre tonnes d'algues humides donnent une tonne de produit fini. Le séchage ne dépasse jamais 75 °C. L'humidité finale est maintenue à 12 – 14 %. Chaque expédition porte un numéro de lot relié à sa récolte.",
    },

    // ── Market teaser ───────────────────────────────────────
    "market.eyebrow": { en: "Market context", de: "Marktkontext", ga: "Comhthéacs an mhargaidh", fr: "Contexte de marché" },
    "market.title": { en: "Ireland is a small market. Europe and the Middle East are not.", de: "Irland ist ein kleiner Markt. Europa und der Nahe Osten nicht.", ga: "Margadh beag é Éire. Ní hamhlaidh atá an Eoraip ná an Meánoirthear.", fr: "L'Irlande est un petit marché. L'Europe et le Moyen-Orient ne le sont pas." },
    "market.body": {
        en: "Five buyer categories — agricultural biostimulants, turf and landscape, food ingredients, cosmetics and nutraceuticals — drive global seaweed demand. McLir is built around the two with the strongest agronomic fit: biostimulants and turf / landscape.",
        de: "Fünf Käufer-Kategorien — Biostimulanzien, Rasen & Landschaftsbau, Lebensmittelzutaten, Kosmetik und Nutrazeutika — treiben die globale Algen-Nachfrage. McLir konzentriert sich auf die zwei mit dem stärksten agronomischen Profil: Biostimulanzien und Rasen & Landschaftsbau.",
        ga: "Cúig chatagóir ceannaitheoirí — bithspreagairí, faichí agus tírdhreachú, comhábhair bia, cosmaidí agus núitriceoirí — a thiomáineann éileamh domhanda na feamainne. Tá McLir tógtha timpeall ar an dá cheann is fearr a oireann don talmhaíocht: bithspreagairí agus faichí / tírdhreachú.",
        fr: "Cinq catégories d'acheteurs — biostimulants agricoles, gazons et paysage, ingrédients alimentaires, cosmétiques et nutraceutiques — portent la demande mondiale d'algues. McLir s'appuie sur les deux qui correspondent le mieux à son profil agronomique : biostimulants et gazons / paysage.",
    },
    "market.segments_label": { en: "Buyer segments — global", de: "Käufersegmente — global", ga: "Deighleoga ceannaitheoirí — domhanda", fr: "Segments d'acheteurs — global" },

    // ── FAQ ─────────────────────────────────────────────────
    "faq.eyebrow": { en: "FAQ", de: "FAQ", ga: "Ceisteanna", fr: "FAQ" },
    "faq.title": { en: "Plain answers, before you call.", de: "Klare Antworten — bevor Sie anrufen.", ga: "Freagraí soiléire, sula nglaonn tú.", fr: "Des réponses claires, avant d'appeler." },

    // ── Contact band ────────────────────────────────────────
    "contact.eyebrow": { en: "Talk to us", de: "Sprechen Sie mit uns", ga: "Labhair linn", fr: "Parlons-en" },
    "contact.title": { en: "Tell us what you grow, manage or landscape.", de: "Sagen Sie uns, was Sie anbauen, pflegen oder gestalten.", ga: "Inis dúinn cad a fhásann, a bhainistíonn nó a thírdhreachaíonn tú.", fr: "Dites-nous ce que vous cultivez, gérez ou aménagez." },
    "contact.body": {
        en: "Real humans answer — typically within one working day. Sample shipments to verified growers, landscapers and distributors are free.",
        de: "Echte Menschen antworten — meist innerhalb eines Werktages. Muster-Sendungen an verifizierte Höfe, Landschaftsbauer und Distributoren sind kostenlos.",
        ga: "Daoine fíor a fhreagraíonn — laistigh de lá oibre de ghnáth. Tá lastaí samplacha do fheirmeoirí, do thírdhreachadóirí agus do dháileoirí fíoraithe saor in aisce.",
        fr: "De vraies personnes répondent — généralement sous un jour ouvré. Les envois d'échantillons aux cultivateurs, paysagistes et distributeurs vérifiés sont gratuits.",
    },

    // ── Footer ──────────────────────────────────────────────
    "footer.explore": { en: "Explore", de: "Entdecken", ga: "Iniúch", fr: "Explorer" },
    "footer.contact": { en: "Contact", de: "Kontakt", ga: "Teagmháil", fr: "Contact" },
    "footer.tagline": {
        en: "Atlantic Ascophyllum nodosum, refined for professional agriculture and luxury landscaping. Liquid concentrates and slow-release granulates — produced for export to professional growers, landscapers, golf courses and distributors across Europe and the Middle East.",
        de: "Atlantische Ascophyllum nodosum, veredelt für professionellen Anbau und Luxus-Landschaftsbau. Flüssigkonzentrate und langzeitwirksame Granulate — für den Export an professionelle Höfe, Landschaftsbauer, Golfplätze und Distributoren in Europa und dem Nahen Osten.",
        ga: "Ascophyllum nodosum Atlantach, athchóirithe do thalmhaíocht ghairmiúil agus do thírdhreachú só. Tiúchain leachtacha agus gráinní mall-scaoilte — déanta le haghaidh easpórtála chuig feirmeoirí gairmiúla, tírdhreachadóirí, cúrsaí gailf agus dáileoirí ar fud na hEorpa agus an Mheánoirthir.",
        fr: "Ascophyllum nodosum atlantique, raffiné pour l'agriculture professionnelle et l'aménagement paysager haut de gamme. Concentrés liquides et granulés à libération lente — produits pour l'export vers cultivateurs professionnels, paysagistes, parcours de golf et distributeurs en Europe et au Moyen-Orient.",
    },
    "footer.signature": {
        en: "Atlantic raw material · European processing · Export ready",
        de: "Atlantischer Rohstoff · Europäische Verarbeitung · Exportbereit",
        ga: "Amhábhar Atlantach · Próiseáil Eorpach · Réidh le honnmhairiú",
        fr: "Matière première atlantique · Transformation européenne · Prêt à l'export",
    },

    // ── Page titles & intros ────────────────────────────────
    "page.liquid.eyebrow": { en: "Liquid range", de: "Flüssig-Sortiment", ga: "Raon leachtach", fr: "Gamme liquide" },
    "page.liquid.title": { en: "Liquid Seaweed Products", de: "Flüssige Algen-Produkte", ga: "Táirgí Feamainne Leachtacha", fr: "Produits d'algues liquides" },
    "page.liquid.intro": {
        en: "Four distinct liquid formats from a single Atlantic raw material. Cold-pressed for the most native profile, alkaline-extracted for maximum soluble solids, aqueous-extracted for residue-conscious growers, and a balanced Superior 20 workhorse for broad-acre and turf programmes.",
        de: "Vier unterschiedliche Flüssig-Formate aus einem einzigen atlantischen Rohstoff. Kaltgepresst, alkalisch extrahiert, wässrig extrahiert und das ausgewogene Superior 20 für großflächigen Anbau und Rasenprogramme.",
        ga: "Ceithre fhormáid leachtacha éagsúla ó amhábhar Atlantach amháin. Cold-pressed, eastósctha go hailcileach, eastósctha go h-uisceach, agus Superior 20 cothromaithe le haghaidh mór-fheirmeoireachta agus clár faiche.",
        fr: "Quatre formats liquides distincts issus d'une seule matière première atlantique. Pressé à froid pour le profil le plus naturel, extraction alcaline pour un maximum de solides solubles, extraction aqueuse pour les cultivateurs soucieux des résidus, et un Superior 20 équilibré pour les grandes surfaces et le gazon.",
    },
    "page.granulates.title": { en: "Granulates, Soil Conditioner & Seaweed Meal", de: "Granulate, Bodenverbesserer & Algenmehl", ga: "Gráinní, Coinneálaí Ithreach & Min Fheamainne", fr: "Granulés, amendement du sol & farine d'algues" },
    "page.granulates.intro": {
        en: "Dried, broken, sized and graded — the same Atlantic Ascophyllum nodosum, presented as a slow-release granular feed for the soil and the soil food web. Designed to spread cleanly on professional acres and luxury turf, blend uniformly into NPK and rebuild structure season over season.",
        de: "Getrocknet, gebrochen, klassiert und sortiert — dieselbe atlantische Ascophyllum nodosum als langzeitwirksames Granulat für Boden und Bodenleben. Entwickelt für sauberes Ausbringen auf professionellen Flächen und Premium-Rasen.",
        ga: "Triomaithe, briste, méadaithe agus grádaithe — an Ascophyllum nodosum Atlantach céanna, mar bheatha ghráinne mall-scaoilte. Deartha le craoladh glan ar acraí gairmiúla agus ar fhaichí só.",
        fr: "Séchés, brisés, calibrés et triés — la même Ascophyllum nodosum atlantique, présentée comme une alimentation granulaire à libération lente pour le sol et son réseau biologique. Conçue pour un épandage net sur grandes surfaces professionnelles et gazons de prestige.",
    },
    "page.process.eyebrow": { en: "Manufacturing process", de: "Herstellungsprozess", ga: "Próiseas déantúsaíochta", fr: "Procédé de fabrication" },
    "page.process.title": { en: "Ten steps from the cold North Atlantic to your numbered storage bay.", de: "Zehn Schritte vom kalten Nord-Atlantik bis zu Ihrer nummerierten Lagerbucht.", ga: "Deich gcéim ón Atlantach Thuaidh fuar go dtí do bhá stórála uimhrithe.", fr: "Dix étapes de l'Atlantique Nord glacé jusqu'à votre baie de stockage numérotée." },
    "page.process.intro": {
        en: "Every batch follows the same documented chain. Drying never exceeds 75 °C. Final moisture is held at 12 – 14 %. Every shipment is batch-numbered against the original delivery, so any finished bag can be walked all the way back to the Atlantic harvest it came from.",
        de: "Jede Charge folgt derselben dokumentierten Kette. Trocknung nie über 75 °C. Endfeuchte bei 12 – 14 %. Jede Sendung wird gegen die Originallieferung chargennummeriert — jeder fertige Sack lässt sich bis zur atlantischen Ernte zurückverfolgen.",
        ga: "Leanann gach baisc an slabhra doiciméadaithe céanna. Ní sháraíonn an triomú 75 °C. Coinnítear taise dheireanach ag 12 – 14 %. Tá uimhir bhaisc ar gach lastas in aghaidh an tseachadta bhunaidh.",
        fr: "Chaque lot suit la même chaîne documentée. Le séchage ne dépasse jamais 75 °C. L'humidité finale est maintenue à 12 – 14 %. Chaque expédition porte un numéro de lot relié à la livraison d'origine — tout sac fini peut être retracé jusqu'à la récolte atlantique dont il provient.",
    },
    "page.insights.eyebrow": { en: "Market insights", de: "Markteinblicke", ga: "Léargas margaidh", fr: "Analyses de marché" },
    "page.contact.eyebrow": { en: "Contact", de: "Kontakt", ga: "Teagmháil", fr: "Contact" },
    "page.contact.title": { en: "Tell us what you grow, manage or landscape.", de: "Sagen Sie uns, was Sie anbauen, pflegen oder gestalten.", ga: "Inis dúinn cad a fhásann, a bhainistíonn nó a thírdhreachaíonn tú.", fr: "Dites-nous ce que vous cultivez, gérez ou aménagez." },

    // ── Lawns & Turf page ───────────────────────────────────
    "page.lawns.eyebrow": { en: "Lawns & Turf", de: "Rasen & Sportrasen", ga: "Faichí & Sportfhaichí", fr: "Pelouses & gazon" },
    "page.lawns.title": { en: "World-class English-style lawns. Engineered by the sea.", de: "Englische Rasenflächen in Weltklasse. Vom Meer entwickelt.", ga: "Faichí Sasanacha den scoth. Ceaptha cois farraige.", fr: "Pelouses anglaises d'exception. Inspirées par la mer." },
    "page.lawns.intro": {
        en: "A two-product programme — Liquid Seaweed for foliar and fertigation use, Granulates and Soil Conditioner for soil and turf — positioned to support root systems, colour, density and stress resilience on the lawns that the world looks at: golf courses, palace grounds, luxury hotels, estates and sports turf across Europe and the Middle East.",
        de: "Ein Zwei-Produkt-Programm — Flüssige Algen für Blatt- und Tröpfchen-Anwendung, Granulate und Bodenverbesserer für Boden und Rasen — positioniert, um Wurzelsysteme, Farbe, Dichte und Stressresistenz auf den Rasenflächen zu unterstützen, die die Welt betrachtet: Golfplätze, Palastanlagen, Luxushotels, Anwesen und Sportrasen in Europa und im Nahen Osten.",
        ga: "Clár dhá tháirge — Feamainn Leachtach le haghaidh duille agus fertigation, Gráinní agus Coinneálaí Ithreach le haghaidh ithreach agus faiche — suite chun tacú le córais fhréimhe, le dath, le dlús agus le hathléimneacht strus ar na faichí a fhéachann an domhan orthu: cúrsaí gailf, tailte pálás, óstáin só, eastáit agus sportfhaichí ar fud na hEorpa agus an Mheánoirthir.",
        fr: "Un programme à deux produits — Algues liquides pour pulvérisation foliaire et fertigation, Granulés et amendement du sol pour le sol et le gazon — positionné pour soutenir les systèmes racinaires, la couleur, la densité et la résistance au stress sur les pelouses que le monde admire : parcours de golf, parcs de palais, hôtels de luxe, domaines et gazons sportifs en Europe et au Moyen-Orient.",
    },
    "lawns.why.title": { en: "Why seaweed for turf", de: "Warum Algen für den Rasen", ga: "Cén fáth feamainn don fhaiche", fr: "Pourquoi les algues pour le gazon" },
    "lawns.why.body": {
        en: "Ascophyllum nodosum carries alginates that contribute to soil aggregation, mannitol that helps plants withstand osmotic and heat stress, and a profile of native bioactives — auxins, cytokinins, betaines — that contribute to root architecture and recovery. It is not a quick-burn fertiliser; it is a marine biology programme that helps turf maintain itself through difficult weeks.",
        de: "Ascophyllum nodosum enthält Alginate, die zur Boden-Aggregatbildung beitragen, Mannitol, das Pflanzen bei osmotischem und Hitzestress unterstützt, und ein Profil nativer Wirkstoffe — Auxine, Cytokinine, Betaine — die zur Wurzelarchitektur und Erholung beitragen. Es ist kein Schnellwirkungsdünger; es ist ein meeresbiologisches Programm, das hilft, Rasen durch schwierige Wochen zu tragen.",
        ga: "Tá alginates in Ascophyllum nodosum a chuireann le comhcheangal na hithreach, mannitol a chabhraíonn le plandaí dul i ngleic le strus osmótach agus teasa, agus próifíl bithghníomhach dúchasach — auxins, cytokinins, betaines — a chuireann le hailtireacht na bhfréamhacha agus le téarnamh. Ní leasachán mearghníomhach é; is clár bitheolaíochta mara é a chabhraíonn le faichí coinneáil ar bun trí sheachtainí deacra.",
        fr: "L'Ascophyllum nodosum contient des alginates qui contribuent à l'agrégation du sol, du mannitol qui aide la plante face au stress osmotique et thermique, et un profil de bioactifs natifs — auxines, cytokinines, bétaïnes — qui contribuent à l'architecture racinaire et à la récupération. Ce n'est pas un engrais coup de fouet ; c'est un programme de biologie marine qui aide le gazon à se maintenir pendant les semaines difficiles.",
    },
    "lawns.roots.title": { en: "Deep-root support", de: "Tiefwurzel-Unterstützung", ga: "Tacaíocht do fhréamhacha doimhne", fr: "Soutien des racines profondes" },
    "lawns.roots.body": {
        en: "Cytokinin- and auxin-bearing extracts are positioned to support cell division and root elongation. Deeper roots reach moisture below the surface — a structural answer to short, dry European summers.",
        de: "Extrakte mit Cytokininen und Auxinen unterstützen Zellteilung und Wurzelverlängerung. Tiefere Wurzeln erreichen Bodenfeuchte unter der Oberfläche — eine strukturelle Antwort auf kurze, trockene europäische Sommer.",
        ga: "Tá eastóscáin a iompraíonn cytokinins agus auxins suite chun tacú le roinnt cealla agus le síneadh fréimhe. Sroicheann fréamhacha níos doimhne taise faoin dromchla — freagra struchtúrach do shamhraí gearra, tirim na hEorpa.",
        fr: "Les extraits porteurs de cytokinines et d'auxines sont positionnés pour soutenir la division cellulaire et l'élongation racinaire. Des racines plus profondes atteignent l'humidité sous la surface — une réponse structurelle aux étés européens courts et secs.",
    },
    "lawns.drought.title": { en: "Drought & heat stress support", de: "Unterstützung bei Trockenheit & Hitze", ga: "Tacaíocht do strus triomaigh agus teasa", fr: "Soutien face à la sécheresse et au stress thermique" },
    "lawns.drought.body": {
        en: "Mannitol is an osmoprotectant. Combined with alginate-driven moisture retention in the rhizosphere, this is the programme that turf managers reach for when irrigation becomes the limiting factor — peak summer in Southern Europe and year-round in the GCC.",
        de: "Mannitol ist ein Osmoprotektor. Kombiniert mit alginatgestützter Feuchtigkeitsspeicherung in der Rhizosphäre ist dies das Programm, zu dem Rasenmanager greifen, wenn Bewässerung zum begrenzenden Faktor wird — Sommer in Südeuropa und ganzjährig in den Golfstaaten.",
        ga: "Is osmaprotectant é mannitol. In éineacht le coinneáil taise faoi thiomáint alginate sa rhizosphere, seo an clár a roghnaíonn bainisteoirí faiche nuair a éiríonn uisciú teorann — buaic an tsamhraidh i ndeisceart na hEorpa agus i rith na bliana sa GCC.",
        fr: "Le mannitol est un osmoprotecteur. Combiné à la rétention d'humidité induite par les alginates dans la rhizosphère, c'est le programme vers lequel se tournent les gestionnaires de gazon lorsque l'irrigation devient un facteur limitant — pleine saison estivale en Europe du Sud et toute l'année dans les pays du Golfe.",
    },
    "lawns.colour.title": { en: "Colour, density & lawn quality", de: "Farbe, Dichte & Rasenqualität", ga: "Dath, dlús agus cáilíocht faiche", fr: "Couleur, densité et qualité du gazon" },
    "lawns.colour.body": {
        en: "Trace minerals (Mg, Fe, Mn, Zn) and natural plant-active compounds contribute to chlorophyll synthesis and visible turf vigour. The outcome targeted is denser sward, deeper green and faster recovery from cut and play.",
        de: "Spurenelemente (Mg, Fe, Mn, Zn) und natürliche pflanzenaktive Verbindungen tragen zur Chlorophyll-Synthese und zur sichtbaren Rasen-Vitalität bei. Das angestrebte Ergebnis: dichtere Grasnarbe, tieferes Grün und schnellere Erholung nach Schnitt und Belastung.",
        ga: "Cuireann mianraí rian (Mg, Fe, Mn, Zn) agus comhdhúile nádúrtha plandaghníomhacha le sintéis chlóraifill agus le beogacht infheicthe an fhaiche. An toradh atá á lorg: faiche níos dlúithe, dath glas níos doimhne agus téarnamh níos tapúla tar éis gearrtha agus imeartha.",
        fr: "Les oligo-éléments (Mg, Fe, Mn, Zn) et les composés naturels actifs sur la plante contribuent à la synthèse de la chlorophylle et à la vigueur visible du gazon. L'objectif : un tapis plus dense, un vert plus profond et une récupération plus rapide après tonte et utilisation.",
    },
    "lawns.programme.title": { en: "Two-product programme", de: "Zwei-Produkt-Programm", ga: "Clár dhá tháirge", fr: "Programme à deux produits" },
    "lawns.programme.body": {
        en: "Liquid Seaweed handles fast biostimulation through foliar and fertigation. Granulates handle slow, deep, structural soil support. Used together across the season, the two formats cover both the visible and the invisible halves of turf performance.",
        de: "Flüssige Algen übernehmen die schnelle Biostimulation über Blatt und Tröpfchenbewässerung. Granulate übernehmen die langsame, tiefe, strukturelle Bodenunterstützung. Gemeinsam über die Saison eingesetzt, decken die beiden Formate sowohl die sichtbare als auch die unsichtbare Hälfte der Rasenleistung ab.",
        ga: "Déileálann Feamainn Leachtach le bithspreagadh tapa trí dhuille agus trí fertigation. Déileálann Gráinní le tacaíocht ithreach struchtúrach, mhall agus dhomhain. In éineacht ar feadh an tséasúir, clúdaíonn an dá fhormáid leath infheicthe agus leath dofheicthe na faiche.",
        fr: "Les algues liquides assurent la biostimulation rapide en pulvérisation foliaire et fertigation. Les granulés assurent le soutien structurel lent et profond du sol. Utilisés ensemble sur l'ensemble de la saison, les deux formats couvrent à la fois la moitié visible et la moitié invisible de la performance du gazon.",
    },
    "lawns.climate.title": { en: "Built for Europe & the Middle East", de: "Für Europa und den Nahen Osten gemacht", ga: "Tógtha don Eoraip agus don Mheánoirthear", fr: "Conçu pour l'Europe et le Moyen-Orient" },
    "lawns.climate.body": {
        en: "Northern European fairways, Mediterranean estates, Gulf palace lawns, North African resort grounds — the underlying biology is the same; the application rates and seasonal timing are adapted to the climate. McLir ships into all of these markets out of Plombières.",
        de: "Nordeuropäische Fairways, mediterrane Anwesen, Palastrasen am Golf, Resort-Anlagen in Nordafrika — die zugrundeliegende Biologie ist gleich; Aufwandmengen und saisonale Zeitfenster werden an das Klima angepasst. McLir liefert ab Plombières in all diese Märkte.",
        ga: "Fairways thuaisceart na hEorpa, eastáit Meánmhuirí, faichí pálás sa Mhurascaill, tailte ionaid saoire i dtuaisceart na hAfraice — is é an bhitheolaíocht bhunúsach an rud céanna; oirítear na rátaí agus na tráthanna séasúrtha don aeráid. Seolann McLir chuig na margaí seo go léir ó Plombières.",
        fr: "Fairways nord-européens, domaines méditerranéens, pelouses de palais du Golfe, parcs de resorts d'Afrique du Nord — la biologie sous-jacente est la même ; les doses et le calendrier saisonnier sont adaptés au climat. McLir livre tous ces marchés depuis Plombières.",
    },
    "lawns.refs.title": { en: "Reference applications", de: "Referenz-Anwendungen", ga: "Tagairtí feidhme", fr: "Applications de référence" },
    "lawns.refs.body": {
        en: "The portfolio is positioned for golf courses, luxury hotels, private estates, palace grounds, sports pitches, premium landscaping companies and lawn-care distributors. Programmes are scoped per client.",
        de: "Das Portfolio ist positioniert für Golfplätze, Luxushotels, Privatgüter, Palastanlagen, Sportplätze, Premium-Landschaftsbauer und Rasenpflege-Distributoren. Programme werden pro Kunde abgestimmt.",
        ga: "Tá an punann suite do chúrsaí gailf, óstáin só, eastáit phríobháideacha, tailte pálás, páirceanna spóirt, comhlachtaí tírdhreachaithe den scoth agus dáileoirí cúraim faiche. Déantar cláir a leagan amach in aghaidh an chliaint.",
        fr: "Le portefeuille est positionné pour les parcours de golf, les hôtels de luxe, les domaines privés, les parcs de palais, les terrains de sport, les sociétés d'aménagement paysager haut de gamme et les distributeurs d'entretien de pelouse. Les programmes sont définis par client.",
    },
    "lawns.refs.golf": { en: "Golf courses", de: "Golfplätze", ga: "Cúrsaí gailf", fr: "Parcours de golf" },
    "lawns.refs.hotels": { en: "Hotels & resorts", de: "Hotels & Resorts", ga: "Óstáin & ionaid saoire", fr: "Hôtels & resorts" },
    "lawns.refs.estates": { en: "Private estates", de: "Privatgüter", ga: "Eastáit phríobháideacha", fr: "Domaines privés" },
    "lawns.refs.sports": { en: "Sports pitches", de: "Sportplätze", ga: "Páirceanna spóirt", fr: "Terrains de sport" },
    "lawns.refs.landscaping": { en: "Luxury landscaping", de: "Luxus-Landschaftsbau", ga: "Tírdhreachú só", fr: "Aménagement paysager de prestige" },
    "lawns.refs.palaces": { en: "Palace lawns", de: "Palast-Rasenflächen", ga: "Faichí pálás", fr: "Pelouses de palais" },
    "lawns.disclaimer": {
        en: "Language used on this page is positioned to describe mechanisms (supports, contributes to, helps maintain). Outcomes depend on local climate, soil, irrigation regime and turf species.",
        de: "Die Sprache auf dieser Seite beschreibt Mechanismen (unterstützt, trägt bei, hilft beim Erhalt). Ergebnisse hängen von lokalem Klima, Boden, Bewässerungsregime und Rasenart ab.",
        ga: "Cuireann an teanga ar an leathanach seo síos ar mheicníochtaí (tacaíonn sí, cuireann sí le, cabhraíonn sí coinneáil). Braitheann torthaí ar an aeráid áitiúil, ar an ithir, ar an réimeas uisciúcháin agus ar speiceas faiche.",
        fr: "Le langage de cette page décrit des mécanismes (soutient, contribue à, aide à maintenir). Les résultats dépendent du climat local, du sol, du régime d'irrigation et de l'espèce de gazon.",
    },

    // ── Market insights — chart captions ────────────────────
    "chart.region.title": { en: "Seaweed market size — billions USD", de: "Algenmarktgröße — Milliarden USD", ga: "Méid mhargadh na feamainne — billiún USD", fr: "Taille du marché des algues — milliards USD" },
    "chart.region.eyebrow": { en: "By region", de: "Nach Region", ga: "De réir réigiúin", fr: "Par région" },
    "chart.region.caption": {
        en: "Indicative figures · directional, used for business-development context. Ireland shown separately to illustrate the scale gap between domestic and export markets.",
        de: "Indikative Zahlen · richtungsweisend, verwendet für Business-Development-Kontext. Irland gesondert dargestellt, um den Skalenunterschied zwischen Inlands- und Exportmärkten zu zeigen.",
        ga: "Figiúirí táscacha · treoshuíomh, in úsáid do chomhthéacs forbartha gnó. Tá Éire taispeánta ar leithligh chun an bhearna scála idir margaí intíre agus easpórtála a léiriú.",
        fr: "Chiffres indicatifs · directionnels, utilisés à des fins de développement commercial. L'Irlande est présentée séparément pour illustrer l'écart d'échelle entre marché intérieur et marchés d'exportation.",
    },
    "chart.segments.title": { en: "Global demand split — %", de: "Globale Nachfrageaufteilung — %", ga: "Roinnt éilimh dhomhanda — %", fr: "Répartition de la demande mondiale — %" },
    "chart.segments.eyebrow": { en: "Buyer segments", de: "Käufersegmente", ga: "Deighleoga ceannaitheoirí", fr: "Segments d'acheteurs" },
    "chart.segments.caption": {
        en: "Five buyer categories drive demand. McLir is built around biostimulants and turf & landscape — the two with the strongest agronomic fit.",
        de: "Fünf Käufer-Kategorien treiben die Nachfrage. McLir konzentriert sich auf Biostimulanzien und Rasen & Landschaftsbau — die zwei mit dem stärksten agronomischen Profil.",
        ga: "Tiomáineann cúig chatagóir ceannaitheoirí an t-éileamh. Tá McLir tógtha timpeall ar bhithspreagairí agus ar fhaichí agus thírdhreachú — an dá cheann is fearr a oireann don talmhaíocht.",
        fr: "Cinq catégories d'acheteurs portent la demande. McLir s'appuie sur les biostimulants et les gazons & paysage — les deux à la plus forte adéquation agronomique.",
    },
    "chart.biostim.title": { en: "Global biostimulants market — billions USD", de: "Globaler Biostimulanzien-Markt — Milliarden USD", ga: "Margadh domhanda bithspreagairí — billiún USD", fr: "Marché mondial des biostimulants — milliards USD" },
    "chart.biostim.eyebrow": { en: "Sector growth", de: "Sektorwachstum", ga: "Fás earnála", fr: "Croissance sectorielle" },
    "chart.biostim.caption": {
        en: "Directional trajectory derived from published industry research. Used here to frame agronomic biostimulants as a long-cycle category, not a fad.",
        de: "Indikativer Verlauf aus veröffentlichter Branchenforschung. Hier dient er dazu, Biostimulanzien als langfristige Kategorie und nicht als kurzlebigen Trend einzuordnen.",
        ga: "Treocht threoshuíomh bunaithe ar thaighde tionscail foilsithe. In úsáid anseo chun bithspreagairí a fhrámú mar chatagóir fhad-shaolach.",
        fr: "Trajectoire indicative tirée de recherches sectorielles publiées. Utilisée ici pour situer les biostimulants comme une catégorie de long cycle, et non comme un effet de mode.",
    },
    "chart.imports.title": { en: "European seaweed extract imports — kilotonnes", de: "Europäische Importe von Algenextrakten — Kilotonnen", ga: "Iompórtálacha eastóscán feamainne san Eoraip — cíleathonna", fr: "Importations européennes d'extraits d'algues — kilotonnes" },
    "chart.imports.eyebrow": { en: "Trade flow", de: "Handelsfluss", ga: "Sreabhadh trádála", fr: "Flux commerciaux" },
    "chart.imports.caption": {
        en: "Indicative European import volumes for seaweed extract material. Trend supports a structural shift in European agronomy toward marine biostimulants.",
        de: "Indikative europäische Importmengen für Algenextrakt-Material. Trend stützt einen strukturellen Wandel der europäischen Agronomie hin zu marinen Biostimulanzien.",
        ga: "Líon iompórtála Eorpaigh táscach d'ábhar eastóscáin feamainne. Tacaíonn an treocht le hathrú struchtúrach i dtalmhaíocht na hEorpa i dtreo bithspreagairí mara.",
        fr: "Volumes d'importations européennes indicatifs pour les extraits d'algues. La tendance soutient un basculement structurel de l'agronomie européenne vers les biostimulants marins.",
    },
    "chart.turf.title": { en: "Turf & landscape market — by region", de: "Rasen- & Landschaftsmarkt — nach Region", ga: "Margadh faiche agus tírdhreachaithe — de réir réigiúin", fr: "Marché gazon & paysage — par région" },
    "chart.turf.eyebrow": { en: "Addressable demand", de: "Adressierbare Nachfrage", ga: "Éileamh inléirithe", fr: "Demande adressable" },
    "chart.turf.caption": {
        en: "Indicative addressable demand split between professional (golf, sports, commercial) and residential. McLir prioritises the professional layer first.",
        de: "Indikative adressierbare Nachfrage aufgeteilt zwischen professionellem Bereich (Golf, Sport, Kommerz) und Wohnbereich. McLir priorisiert zunächst die professionelle Schicht.",
        ga: "Roinnt éilimh inléirithe táscach idir gairmiúil (gailf, spórt, tráchtála) agus cónaitheach. Tugann McLir tús áite don sraith ghairmiúil.",
        fr: "Demande adressable indicative répartie entre professionnel (golf, sport, commercial) et résidentiel. McLir priorise d'abord la couche professionnelle.",
    },
    "chart.turf.professional": { en: "Professional", de: "Professionell", ga: "Gairmiúil", fr: "Professionnel" },
    "chart.turf.residential": { en: "Residential", de: "Wohnbereich", ga: "Cónaitheach", fr: "Résidentiel" },
    "chart.drought.title": { en: "Drought-stress acreage — Europe & Middle East", de: "Trockenstress-Fläche — Europa & Naher Osten", ga: "Acra strus triomaigh — an Eoraip agus an Meánoirthear", fr: "Surface en stress hydrique — Europe & Moyen-Orient" },
    "chart.drought.eyebrow": { en: "Climate signal", de: "Klimasignal", ga: "Comhartha aeráide", fr: "Signal climatique" },
    "chart.drought.caption": {
        en: "Directional trend of acreage reported under drought stress (million hectares). Aligns with rising demand for stress-tolerance biology in turf and crop programmes.",
        de: "Indikativer Trend der gemeldeten Fläche unter Trockenstress (Mio. ha). Korrespondiert mit steigender Nachfrage nach Stresstoleranz-Biologie in Rasen- und Anbauprogrammen.",
        ga: "Treocht threoshuíomh den acra a tuairiscíodh faoi strus triomaigh (milliún heicteár). Comhthreomhar le héileamh atá ag fás ar bhitheolaíocht láimhseála struis.",
        fr: "Tendance indicative des surfaces signalées en stress hydrique (millions d'hectares). En cohérence avec la demande croissante pour une biologie de tolérance au stress dans les programmes gazon et culture.",
    },
    "chart.sources": {
        en: "Sources: indicative figures compiled from FAO 2024 seaweed sector review, public biostimulants market briefings (MarketsandMarkets, Mordor Intelligence), Eurostat trade signals and JRC European Drought Observatory bulletins. Directional only.",
        de: "Quellen: indikative Zahlen aus FAO-Übersicht zur Algenbranche 2024, öffentlichen Biostimulanzien-Marktberichten (MarketsandMarkets, Mordor Intelligence), Eurostat-Handelssignalen und JRC European Drought Observatory. Nur richtungsweisend.",
        ga: "Foinsí: figiúirí táscacha tiomsaithe ó athbhreithniú earnála feamainne FAO 2024, faisnéis poiblí ar mhargadh bithspreagairí (MarketsandMarkets, Mordor Intelligence), comharthaí trádála Eurostat agus feasacháin JRC European Drought Observatory. Treoshuíomh amháin.",
        fr: "Sources : chiffres indicatifs compilés à partir de l'étude FAO 2024 sur le secteur des algues, des notes de marché publiques sur les biostimulants (MarketsandMarkets, Mordor Intelligence), des signaux commerciaux Eurostat et des bulletins de l'Observatoire européen de la sécheresse du JRC. Donnée directionnelle uniquement.",
    },

    // ── Market insights — takeaways ────────────────────────
    "insights.takeaways.label": { en: "Takeaways for distributors & partners", de: "Erkenntnisse für Distributoren & Partner", ga: "Príomhthuiscintí do dháileoirí agus do pháirtithe", fr: "Enseignements pour distributeurs & partenaires" },
    "insights.t1.title": { en: "Export-first orientation", de: "Export-orientiert", ga: "Treo easpórtála ar dtús", fr: "Orientation export d'abord" },
    "insights.t1.body": { en: "Plombières, Belgium gives McLir same-week reach across the EU and rapid load-out for UK, GCC and overseas containers.", de: "Plombières, Belgien ermöglicht McLir EU-weite Lieferung innerhalb einer Woche und schnellen Versand für UK-, GCC- und Übersee-Container.", ga: "Cuireann Plombières sa Bheilg ar chumas McLir teacht ar fud an AE laistigh den tseachtain agus lódáil thapa do choimeádáin RA, GCC agus thar lear.", fr: "Plombières, en Belgique, permet à McLir de couvrir toute l'UE en une semaine et un chargement rapide pour le Royaume-Uni, le Golfe et les conteneurs outre-mer." },
    "insights.t2.title": { en: "Two anchor segments", de: "Zwei Ankersegmente", ga: "Dhá phríomhdheighleog", fr: "Deux segments d'ancrage" },
    "insights.t2.body": { en: "Around 60 % of global seaweed demand is in agriculture biostimulants and turf & landscape combined — exactly where McLir's two-format portfolio sits.", de: "Rund 60 % der globalen Algen-Nachfrage entfallen auf landwirtschaftliche Biostimulanzien sowie Rasen & Landschaftsbau — genau dort, wo McLirs Zwei-Format-Portfolio positioniert ist.", ga: "Tá thart ar 60 % d'éileamh domhanda na feamainne i mbithspreagairí talmhaíochta agus i bhfaichí agus i dtírdhreachú le chéile — díreach mar atá punann dhá fhormáid McLir.", fr: "Environ 60 % de la demande mondiale d'algues se concentrent dans les biostimulants agricoles et le gazon & paysage réunis — exactement le terrain de jeu du portefeuille à deux formats de McLir." },
    "insights.t3.title": { en: "Format-focused", de: "Format-fokussiert", ga: "Dírithe ar fhormáidí", fr: "Centré sur les formats" },
    "insights.t3.body": { en: "Liquid concentrate and slow-release granulate — one species, the two formats that actually move at scale for professional growers and luxury landscaping.", de: "Flüssigkonzentrat und langzeitwirksames Granulat — eine Art, die zwei Formate, die sich wirklich in der Praxis durchsetzen für professionellen Anbau und Luxus-Landschaftsbau.", ga: "Tiúchain leachtach agus gráinní mall-scaoilte — speiceas amháin, an dá fhormáid a bhogann i ndáiríre ar scála le haghaidh fásra gairmiúil agus tírdhreachú só.", fr: "Concentré liquide et granulé à libération lente — une espèce, les deux formats qui passent vraiment à l'échelle pour les cultivateurs professionnels et l'aménagement paysager de prestige." },

    // ── Market insights — CTA ──────────────────────────────
    "insights.cta.title": { en: "Build a regional distribution programme with us.", de: "Bauen Sie mit uns ein regionales Distributionsprogramm auf.", ga: "Tóg clár dáileacháin réigiúnach linn.", fr: "Construisez avec nous un programme de distribution régional." },
    "insights.cta.body": {
        en: "We work with master distributors, mill networks and own-brand formulators across Europe and the Middle East. Volume, label and format are all customisable.",
        de: "Wir arbeiten mit Master-Distributoren, Mühlennetzwerken und Eigenmarken-Formulierern in Europa und im Nahen Osten. Volumen, Etikett und Format sind anpassbar.",
        ga: "Oibrímid le máistir-dháileoirí, le líonraí muilte agus le foirmlitheoirí brandaí féin ar fud na hEorpa agus an Mheánoirthir. Tá toirt, lipéad agus formáid uile inoiriúnaithe.",
        fr: "Nous travaillons avec des distributeurs maîtres, des réseaux de minoteries et des formulateurs en marque propre, en Europe et au Moyen-Orient. Volume, étiquette et format sont tous personnalisables.",
    },

    // ── Process page CTA ────────────────────────────────────
    "process.cta.eyebrow": { en: "Quality & traceability assured", de: "Qualität & Rückverfolgbarkeit gesichert", ga: "Cáilíocht agus inrianaitheacht cinntithe", fr: "Qualité & traçabilité garanties" },
    "process.cta.title": { en: "Want to audit a batch? Send us a delivery number.", de: "Möchten Sie eine Charge prüfen? Senden Sie uns eine Liefernummer.", ga: "Ar mhaith leat baisc a iniúchadh? Seol uimhir sheachadta chugainn.", fr: "Vous souhaitez auditer un lot ? Envoyez-nous un numéro de livraison." },
    "process.cta.body": {
        en: "We can walk any finished pallet back to the original harvest, with documentation suitable for distributor QA, organic-certifier audits and export inspection.",
        de: "Wir können jede fertige Palette bis zur ursprünglichen Ernte zurückverfolgen, mit Dokumentation für Distributor-QS, Bio-Audits und Exportkontrolle.",
        ga: "Is féidir linn aon phailléad críochnaithe a rianú siar go dtí an fómhar bunaidh, le doiciméadú oiriúnach do QA dáileora, d'iniúchtaí deimhneoirí orgánacha agus do chigireacht easpórtála.",
        fr: "Nous pouvons retracer toute palette finie jusqu'à la récolte d'origine, avec une documentation adaptée à la QA distributeur, aux audits organiques et à l'inspection à l'export.",
    },

    // ── Process stat labels ─────────────────────────────────
    "process.stat.ratio": { en: "Wet to finished product ratio", de: "Verhältnis nass zu fertigem Produkt", ga: "Cóimheas idir tais agus táirge críochnaithe", fr: "Ratio humide / produit fini" },
    "process.stat.temp": { en: "Maximum drying temperature", de: "Max. Trocknungstemperatur", ga: "Uasteocht triomaithe", fr: "Température maximale de séchage" },
    "process.stat.moisture": { en: "Final moisture window", de: "Endfeuchte-Fenster", ga: "Fuinneog deiridh taise", fr: "Fenêtre d'humidité finale" },

    // ── Liquid page small ───────────────────────────────────
    "liquid.bioactives": { en: "Bioactive components", de: "Bioaktive Bestandteile", ga: "Comhpháirteanna bithghníomhacha", fr: "Composants bioactifs" },
    "liquid.usecases": { en: "Use cases", de: "Anwendungsfälle", ga: "Cásanna úsáide", fr: "Cas d'usage" },
    "liquid.spec": { en: "Technical specification", de: "Technische Spezifikation", ga: "Sonraíocht theicniúil", fr: "Spécification technique" },
    "liquid.source": { en: "Source", de: "Quelle", ga: "Foinse", fr: "Source" },
    "liquid.extraction": { en: "Extraction", de: "Extraktion", ga: "Eastóscadh", fr: "Extraction" },
    "liquid.rate": { en: "Rate", de: "Dosierung", ga: "Ráta", fr: "Dose" },
    "liquid.packaging": { en: "Packaging", de: "Verpackung", ga: "Pacáistiú", fr: "Conditionnement" },
    "liquid.storage": { en: "Storage & shelf life", de: "Lagerung & Haltbarkeit", ga: "Stóráil agus seilfré", fr: "Stockage & durée de conservation" },
    "liquid.batch_note": { en: "Batch note", de: "Chargenhinweis", ga: "Nóta baisce", fr: "Note de lot" },

    // ── Granulate page small ───────────────────────────────
    "gran.spec": { en: "Technical specification", de: "Technische Spezifikation", ga: "Sonraíocht theicniúil", fr: "Spécification technique" },
    "gran.usecases": { en: "Use cases", de: "Anwendungsfälle", ga: "Cásanna úsáide", fr: "Cas d'usage" },
    "gran.rate": { en: "Application rate", de: "Anwendungsmenge", ga: "Ráta cuir", fr: "Dose d'application" },
    "gran.packaging": { en: "Packaging", de: "Verpackung", ga: "Pacáistiú", fr: "Conditionnement" },
    "gran.storage": { en: "Storage", de: "Lagerung", ga: "Stóráil", fr: "Stockage" },
    "gran.stat.release": { en: "Release activity in soil", de: "Wirkung im Boden", ga: "Gníomhaíocht scaoilte san ithir", fr: "Libération dans le sol" },
    "gran.stat.om": { en: "Organic matter typical", de: "Organische Substanz typisch", ga: "Ábhar orgánach gnáth", fr: "Matière organique typique" },
    "gran.stat.particle": { en: "Conditioner particle band", de: "Partikelband Bodenverbesserer", ga: "Banda cáithníní coinneálaí", fr: "Plage granulométrique de l'amendement" },
    "gran.label.granulate": { en: "McLir Granulate", de: "McLir Granulat", ga: "Gráinne McLir", fr: "Granulé McLir" },

    // ── Generic ─────────────────────────────────────────────
    "generic.indicator": { en: "Indicative", de: "Indikativ", ga: "Táscach", fr: "Indicatif" },

    // ── Contact page (additional, original kept) ────────────
    "contact.tile.operation": { en: "Operation", de: "Betrieb", ga: "Oibríocht", fr: "Site" },
    "contact.tile.email": { en: "E-mail", de: "E-Mail", ga: "R-phost", fr: "E-mail" },
    "contact.tile.logistics": { en: "Logistics", de: "Logistik", ga: "Lóistíocht", fr: "Logistique" },
    "contact.tile.documentation": { en: "Documentation", de: "Dokumentation", ga: "Doiciméadúchán", fr: "Documentation" },
    "contact.tile.logistics_value": { en: "Pallet, big-bag, container", de: "Palette, Big-Bag, Container", ga: "Pailléad, mála mór, coimeádán", fr: "Palette, big-bag, conteneur" },
    "contact.tile.docs_value": { en: "EU spec sheets, MSDS, COA", de: "EU-Spezifikationen, MSDS, COA", ga: "Bileoga sonraíochta AE, MSDS, COA", fr: "Fiches techniques UE, FDS, COA" },
    "contact.direct_mailbox": { en: "Direct mailbox", de: "Direkter Posteingang", ga: "Bosca poist díreach", fr: "Boîte mail directe" },
    "contact.quick_subjects": { en: "Quick subjects", de: "Schnellauswahl", ga: "Ábhair thapa", fr: "Sujets rapides" },
    "contact.subject.liquid": { en: "Liquid Seaweed sample", de: "Muster Flüssige Algen", ga: "Sampla Feamainne Leachtacha", fr: "Échantillon Algues liquides" },
    "contact.subject.granulate": { en: "Granulate sample", de: "Granulat-Muster", ga: "Sampla gráinne", fr: "Échantillon de granulés" },
    "contact.subject.distribution": { en: "Distribution / partnership", de: "Distribution / Partnerschaft", ga: "Dáileachán / comhpháirtíocht", fr: "Distribution / partenariat" },
    "contact.subject.lawns": { en: "Lawns & turf programme", de: "Rasen- & Sportrasen-Programm", ga: "Clár faichí agus sportfhaichí", fr: "Programme pelouses & gazon" },
    "contact.export.eyebrow": { en: "Export ready", de: "Exportbereit", ga: "Réidh le honnmhairiú", fr: "Prêt à l'export" },
    "contact.export.title": { en: "Plombières — central, bonded, container-ready.", de: "Plombières — zentral, zollgebunden, containerfähig.", ga: "Plombières — lárnach, faoi cheangal custaim, réidh do choimeádáin.", fr: "Plombières — centrale, sous douane, prête au conteneur." },
    "contact.export.body": {
        en: "From Belgium we move pallets across the EU within days, big-bags and container loads worldwide on request. Documentation is prepared per market: EU spec sheets, MSDS, COA, organic-input statements and customer-specific QA paperwork.",
        de: "Aus Belgien bewegen wir Paletten EU-weit innerhalb von Tagen, Big-Bags und Container-Ladungen weltweit auf Anfrage. Dokumentation wird je Markt vorbereitet: EU-Spezifikationen, MSDS, COA, Bio-Eingangserklärungen und kundenspezifische QS-Unterlagen.",
        ga: "Ón mBeilg bogaimid pailléid ar fud an AE laistigh de laethanta, málaí móra agus lastais choimeádáin ar fud an domhain ar iarratas. Ullmhaítear doiciméadúchán in aghaidh an mhargaidh: bileoga AE, MSDS, COA, ráitis ionchur orgánach agus páipéarachas QA sonrach don chliant.",
        fr: "Depuis la Belgique, nous expédions des palettes dans toute l'UE en quelques jours, et des big-bags et conteneurs partout dans le monde sur demande. La documentation est préparée par marché : fiches techniques UE, FDS, COA, attestations intrants biologiques et documents QA spécifiques au client.",
    },
};

export function useT() {
    const { lang } = useLang();
    return (key) => {
        const entry = T[key];
        if (!entry) return key;
        // Strict: do not silently fall back to English for unsupported lang.
        if (entry[lang] !== undefined) return entry[lang];
        return entry.en || key;
    };
}
