import { createContext, useContext, useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
// McLir Seaweed — i18n
// Languages: en (English), de (Deutsch), ga (Gaeilge / Irish)
// Strategy: high-visibility marketing copy is fully translated.
// Deep technical specs (numbers, units, scientific names) stay
// in English — the universal language of feed mills and export
// documentation.
// ─────────────────────────────────────────────────────────────

const LangCtx = createContext({ lang: "en", setLang: () => {} });

export const LANGS = [
    { code: "en", label: "EN", name: "English" },
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "ga", label: "GA", name: "Gaeilge" },
];

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        try {
            return localStorage.getItem("mclir_lang") || "en";
        } catch {
            return "en";
        }
    });
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

// Translation dictionary — { key: { en, de, ga } }
const T = {
    // Navigation
    "nav.home": { en: "Home", de: "Startseite", ga: "Baile" },
    "nav.products": { en: "Products", de: "Produkte", ga: "Táirgí" },
    "nav.liquid": { en: "Liquid Seaweed", de: "Flüssige Algen", ga: "Feamainn Leachtach" },
    "nav.granulates": { en: "Granulates & Soil Conditioner", de: "Granulate & Bodenverbesserer", ga: "Gráinní agus Coinneálaí Ithreach" },
    "nav.wsp": { en: "Water Soluble Powder", de: "Wasserlösliches Pulver", ga: "Púdar Intuaslagtha in Uisce" },
    "nav.feeding": { en: "Animal Feeding", de: "Tierfütterung", ga: "Beathú Ainmhithe" },
    "nav.process": { en: "Process", de: "Prozess", ga: "Próiseas" },
    "nav.insights": { en: "Market Insights", de: "Markteinblicke", ga: "Léargas Margaidh" },
    "nav.contact": { en: "Contact", de: "Kontakt", ga: "Teagmháil" },
    "cta.sample": { en: "Request a sample", de: "Muster anfordern", ga: "Iarr sampla" },
    "cta.explore_liquid": { en: "Explore liquid products", de: "Flüssigprodukte entdecken", ga: "Féach ar tháirgí leachtacha" },
    "cta.feeding_chapter": { en: "Animal feeding chapter", de: "Kapitel Tierfütterung", ga: "Caibidil bheathú ainmhithe" },
    "cta.open_chapter": { en: "Open the animal feeding chapter", de: "Tierfütterungs-Kapitel öffnen", ga: "Oscail caibidil bheathú ainmhithe" },
    "cta.see_process": { en: "See the manufacturing process", de: "Herstellungsprozess ansehen", ga: "Féach an próiseas déantúsaíochta" },
    "cta.view_full_process": { en: "View the full process", de: "Vollständigen Prozess ansehen", ga: "Féach an próiseas iomlán" },
    "cta.open_market": { en: "Open market insights", de: "Markteinblicke öffnen", ga: "Oscail léargas margaidh" },
    "cta.open_contact": { en: "Open contact page", de: "Kontaktseite öffnen", ga: "Oscail leathanach teagmhála" },
    "cta.drill_in": { en: "Drill in", de: "Mehr erfahren", ga: "Tochail isteach" },
    "cta.open": { en: "Open", de: "Öffnen", ga: "Oscail" },
    "cta.back_brand": { en: "← McLir Seaweed", de: "← McLir Seaweed", ga: "← McLir Seaweed" },
    "cta.request_sample": { en: "Request a sample", de: "Muster anfordern", ga: "Iarr sampla" },

    // Hero
    "hero.eyebrow": {
        en: "McLir Seaweed · Atlantic origin · Belgium-based operation",
        de: "McLir Seaweed · Atlantischer Ursprung · Standort Belgien",
        ga: "McLir Seaweed · Bunús Atlantach · Oibríocht sa Bheilg",
    },
    "hero.title.line1": { en: "Grown by the sea.", de: "Vom Meer gewachsen.", ga: "Fásta cois farraige." },
    "hero.title.italic": { en: "Trusted", de: "Vertraut", ga: "Iontaofa" },
    "hero.title.line2_en": { en: "by the soil and the herd.", de: "vom Boden und der Herde.", ga: "ag an ithir agus ag an tréad." },
    "hero.sub": {
        en: "McLir Seaweed refines Atlantic Ascophyllum nodosum into liquid concentrates, granulates, spray-dried powders and a complete animal-feed range. One species. One ocean. Four commercially proven formats — for European farms, mills, distributors and feed compounders.",
        de: "McLir Seaweed veredelt atlantische Ascophyllum nodosum zu Flüssigkonzentraten, Granulaten, sprühgetrockneten Pulvern und einem kompletten Tierfutter-Sortiment. Eine Art. Ein Ozean. Vier kommerziell bewährte Formate — für europäische Höfe, Mühlen, Distributoren und Futtermischer.",
        ga: "Déanann McLir Seaweed Ascophyllum nodosum Atlantach a thiontú ina thiúchain leachtacha, ina ghráinní, ina phúdair triomaithe agus ina raon iomlán beatha ainmhithe. Speiceas amháin. Aigéan amháin. Ceithre fhormáid trádálach — d'fheirmeacha, do mhuilte agus do dháileoirí na hEorpa.",
    },

    // Marquee / chips
    "chips.vineyards": { en: "Vineyards", de: "Weinberge", ga: "Fíonghoirt" },
    "chips.orchards": { en: "Orchards", de: "Obstgärten", ga: "Úllghoirt" },
    "chips.cereals": { en: "Cereals", de: "Getreide", ga: "Gránaigh" },
    "chips.dairy": { en: "Dairy", de: "Milchwirtschaft", ga: "Déiríocht" },
    "chips.sheep_goats": { en: "Sheep & Goats", de: "Schafe & Ziegen", ga: "Caoirigh & Gabhair" },
    "chips.equine": { en: "Equine", de: "Pferde", ga: "Capaill" },
    "chips.greenhouse": { en: "Greenhouse", de: "Gewächshaus", ga: "Teach gloine" },
    "chips.turf": { en: "Turf & Golf", de: "Rasen & Golf", ga: "Faiche & Gailf" },
    "chips.berries": { en: "Berries", de: "Beeren", ga: "Caora" },
    "chips.pet": { en: "Pet nutrition", de: "Heimtier-Nahrung", ga: "Cothú peataí" },

    // Sections
    "sec.families.eyebrow": { en: "Four formats. One ocean.", de: "Vier Formate. Ein Ozean.", ga: "Ceithre fhormáid. Aigéan amháin." },
    "sec.families.title": { en: "A complete seaweed system — not a single bottle.", de: "Ein komplettes Algen-System — nicht nur eine Flasche.", ga: "Córas iomlán feamainne — ní buidéal aonair." },
    "sec.families.body": {
        en: "Apply the liquid for fast biostimulation. Apply the granulate for slow, soil-deep release. Dose the powder for tank-mix precision. Feed the meal for naturally balanced animal nutrition. Each format draws on the same hand-cut Atlantic raw material — refined to fit a different point in the agronomic and zootechnical calendar.",
        de: "Flüssig für schnelle Biostimulation. Granulat für langsame, bodentiefe Freisetzung. Pulver für präzise Tankmischungen. Mehl für ausgewogene Tier-Nahrung. Jedes Format basiert auf demselben handgeschnittenen atlantischen Rohstoff.",
        ga: "Cuir an leacht le haghaidh bithspreagtha tapa. Cuir an gráinne le haghaidh scaoileadh mall doimhin san ithir. Dáilítí an púdar le haghaidh meascán umair. Beathaigh an mhin chun cothú ainmhithe atá cothrom go nádúrtha.",
    },
    "fam.liquid.eyebrow": { en: "Liquid range", de: "Flüssig-Sortiment", ga: "Raon leachtach" },
    "fam.liquid.title": { en: "Liquid Seaweed", de: "Flüssige Algen", ga: "Feamainn Leachtach" },
    "fam.liquid.body": {
        en: "Cold-press and Superior 20 / 30 extracts — alkaline, aqueous and spray-dried formats for foliar and fertigation.",
        de: "Kaltpress- und Superior 20 / 30 Extrakte — alkalisch, wässrig und sprühgetrocknet für Blatt- und Tröpfchenbewässerung.",
        ga: "Eastóscáin chold-press agus Superior 20 / 30 — formáidí alcaileach, uisceach agus triomaithe.",
    },
    "fam.granulates.eyebrow": { en: "Soil & turf", de: "Boden & Rasen", ga: "Ithir & faiche" },
    "fam.granulates.title": { en: "Granulates & Soil Conditioner", de: "Granulate & Bodenverbesserer", ga: "Gráinní & Coinneálaí Ithreach" },
    "fam.granulates.body": {
        en: "Slow-release dried Ascophyllum granules and graded seaweed meal — broadcast, blend, coat or top-dress.",
        de: "Langzeitwirksame getrocknete Ascophyllum-Granulate und sortiertes Algenmehl — streuen, mischen, beschichten.",
        ga: "Gráinní triomaithe Ascophyllum a scaoileann go mall agus min fheamainne grádaithe.",
    },
    "fam.wsp.eyebrow": { en: "Soluble solids", de: "Lösliche Feststoffe", ga: "Solaid intuaslagtha" },
    "fam.wsp.title": { en: "Water Soluble Powder", de: "Wasserlösliches Pulver", ga: "Púdar Intuaslagtha in Uisce" },
    "fam.wsp.body": {
        en: "Spray-dried extract that dissolves cold — designed for tank-mix, fertigation and industrial blending.",
        de: "Sprühgetrockneter Extrakt, der kalt löst — für Tankmischung, Fertigation und industrielles Mischen.",
        ga: "Eastóscadh triomaithe a thuaslagann fuar — deartha do mheascán umair agus do mheascadh tionsclaíoch.",
    },
    "fam.feeding.eyebrow": { en: "Animal nutrition", de: "Tier-Nahrung", ga: "Cothú ainmhithe" },
    "fam.feeding.title": { en: "Animal Feeding", de: "Tierfütterung", ga: "Beathú Ainmhithe" },
    "fam.feeding.body": {
        en: "Fresh-frozen FBAM and dry seaweed meal — a natural multimineral feed material for livestock, equine and pets.",
        de: "Tiefgefrorenes FBAM und trockenes Algenmehl — ein natürliches Multimineral-Futtermittel.",
        ga: "FBAM úr-reoite agus min fheamainne thirim — ábhar beatha ilmhianrach nádúrtha.",
    },

    // Stats
    "stats.yield": { en: "Average yield uplift across grower trials", de: "Durchschnittlicher Ertragszuwachs in Anbau-Versuchen", ga: "Méadú toraidh ar mheán i dtrialacha feirmeoirí" },
    "stats.species": { en: "Atlantic Ascophyllum nodosum, single species", de: "Atlantische Ascophyllum nodosum, einzige Art", ga: "Ascophyllum nodosum Atlantach, speiceas aonair" },
    "stats.drying": { en: "Maximum drying temperature — nutrient-safe", de: "Max. Trocknungstemperatur — nährstoffschonend", ga: "Uasteocht triomaithe — sábháilte do chothaithigh" },
    "stats.release": { en: "Granulate slow-release activity in soil", de: "Langzeit-Wirkung des Granulats im Boden", ga: "Gníomhaíocht scaoilte mhall an ghráinne san ithir" },

    // Pillars
    "pillars.eyebrow": { en: "Why McLir", de: "Warum McLir", ga: "Cén fáth McLir" },
    "pillars.title": { en: "It is not a fertiliser. It is biology, refined.", de: "Es ist kein Düngemittel. Es ist veredelte Biologie.", ga: "Ní leasachán é. Is bitheolaíocht athchóirithe é." },
    "pillars.bio.title": { en: "Native bioactives, intact", de: "Native Wirkstoffe, intakt", ga: "Bithghníomhaigh dhúchasacha, slán" },
    "pillars.bio.body": {
        en: "Cold and low-temperature processes preserve auxins, cytokinins, betaines and alginates — the seaweed chemistry the soil and the rumen actually recognise.",
        de: "Kalte und niedrige Prozesstemperaturen bewahren Auxine, Cytokinine, Betaine und Alginate — die Algenchemie, die Boden und Pansen wirklich erkennen.",
        ga: "Caomhnaíonn próisis fhuara agus íseal-teochta auxins, cytokinins, betaines agus alginates — ceimic na feamainne a aithníonn an ithir agus an rúmán.",
    },
    "pillars.trace.title": { en: "Traceable, batch by batch", de: "Rückverfolgbar, Charge für Charge", ga: "Inrianaithe, baisc ar bhaisc" },
    "pillars.trace.body": {
        en: "Every delivery is logged on arrival and every bag is batch-numbered, so any finished product can be walked back to a single Atlantic harvest.",
        de: "Jede Lieferung wird bei Ankunft erfasst, jeder Sack erhält eine Chargennummer — so kann jedes Endprodukt bis zu einer einzigen Atlantik-Ernte zurückverfolgt werden.",
        ga: "Cláraítear gach seachadadh ar theacht isteach agus tá uimhir bhaisc ar gach mála — féidir gach táirge críochnaithe a rianú siar go fómhar Atlantach amháin.",
    },
    "pillars.export.title": { en: "Built for export", de: "Für den Export gebaut", ga: "Tógtha le haghaidh easpórtála" },
    "pillars.export.body": {
        en: "Pallet-ready 20 kg / 25 kg formats, 1 t big-bags and IBC liquids — moving daily out of Plombières to mills, growers and distributors across Europe.",
        de: "Palettenfertige 20 kg / 25 kg Formate, 1 t Big-Bags und IBC-Flüssigkeiten — verlassen täglich Plombières Richtung Mühlen, Höfe und Distributoren in ganz Europa.",
        ga: "Formáidí 20 kg / 25 kg réidh do phailléid, mála móra 1 t agus leachtanna IBC — ag bogadh laethúil as Plombières chuig muilte agus dáileoirí na hEorpa.",
    },

    // Animal CTA section
    "animal.cta.eyebrow": { en: "Chapter · Animal feeding", de: "Kapitel · Tierfütterung", ga: "Caibidil · Beathú ainmhithe" },
    "animal.cta.title": {
        en: "A natural multimineral feed material — readily absorbed, vegetable origin, suitable for animals of all ages.",
        de: "Ein natürliches Multimineral-Futtermittel — leicht aufnehmbar, pflanzlichen Ursprungs, für Tiere jeden Alters geeignet.",
        ga: "Ábhar beatha ilmhianrach nádúrtha — ionsúite go furasta, de bhunús plandaí, oiriúnach d'ainmhithe de gach aois.",
    },
    "animal.cta.body": {
        en: "Atlantic Ascophyllum, low-temperature dried, fine-milled to your micron specification. Used by feed compounders, dairy & beef farms, equine yards, sheep flocks, goat herds, poultry operations and pet-food formulators across Europe.",
        de: "Atlantische Ascophyllum, schonend getrocknet, fein gemahlen nach Ihrer Mikron-Spezifikation. Verwendet von Futtermischern, Milch- und Fleischbetrieben, Pferdeställen, Schaf- und Ziegenherden, Geflügelbetrieben und Heimtierfutter-Herstellern in ganz Europa.",
        ga: "Ascophyllum Atlantach, triomaithe ag teocht íseal, mín-mheilte de réir do shonraíocht micrón. In úsáid ag muilte beatha, feirmeacha déiríochta agus mairteola, scioból capall, tréada caorach, gabhair, oibríochtaí éanlaithe agus déantóirí bia peataí ar fud na hEorpa.",
    },

    // Process teaser
    "process.eyebrow": { en: "Process", de: "Prozess", ga: "Próiseas" },
    "process.teaser.title": { en: "From the cold North Atlantic to your bay number.", de: "Vom kalten Nord-Atlantik bis zu Ihrer Lager-Nummer.", ga: "Ón Atlantach Thuaidh fuar go d'uimhir bhá stórála." },
    "process.teaser.body": {
        en: "Four tonnes of wet seaweed yield one tonne of finished meal. Drying never exceeds 75 °C. Final moisture is held at 12 – 14 %. Every shipment is batch-numbered against its harvest.",
        de: "Vier Tonnen feuchte Algen ergeben eine Tonne fertiges Mehl. Trocknung nie über 75 °C. Endfeuchte bei 12 – 14 %. Jede Sendung wird gegen ihre Ernte chargennummeriert.",
        ga: "Tá ceithre thonna feamainne fliucha ag teastáil chun tonna mine críochnaithe a tháirgeadh. Ní sháraíonn an triomú 75 °C. Coinnítear an taise dheireanach ag 12 – 14 %.",
    },

    // Market teaser
    "market.eyebrow": { en: "Market context", de: "Marktkontext", ga: "Comhthéacs an mhargaidh" },
    "market.title": { en: "Ireland is a small market. Europe and the world are not.", de: "Irland ist ein kleiner Markt. Europa und die Welt nicht.", ga: "Margadh beag é Éire. Ní hamhlaidh atá an Eoraip ná an domhan." },
    "market.body": {
        en: "Five buyer categories — biostimulants, animal feed, food ingredients, cosmetics and nutraceuticals — drive global seaweed demand. McLir is built around the two largest: agriculture and animal nutrition.",
        de: "Fünf Käufer-Kategorien — Biostimulanzien, Tierfutter, Lebensmittelzutaten, Kosmetik und Nutrazeutika — treiben die globale Algen-Nachfrage. McLir konzentriert sich auf die zwei größten: Landwirtschaft und Tier-Ernährung.",
        ga: "Cúig chatagóir ceannaitheoirí — bithspreagairí, beatha ainmhithe, comhábhair bia, cosmaidí agus núitriceoirí — a thiomáineann éileamh domhanda na feamainne. Tá McLir tógtha timpeall ar an dá cheann is mó: talmhaíocht agus cothú ainmhithe.",
    },
    "market.segments_label": { en: "Buyer segments — global", de: "Käufersegmente — global", ga: "Deighleoga ceannaitheoirí — domhanda" },

    // FAQ
    "faq.eyebrow": { en: "FAQ", de: "FAQ", ga: "Ceisteanna" },
    "faq.title": { en: "Plain answers, before you call.", de: "Klare Antworten — bevor Sie anrufen.", ga: "Freagraí soiléire, sula nglaonn tú." },

    // Contact band
    "contact.eyebrow": { en: "Talk to us", de: "Sprechen Sie mit uns", ga: "Labhair linn" },
    "contact.title": { en: "Tell us what you grow, raise or formulate.", de: "Sagen Sie uns, was Sie anbauen, halten oder formulieren.", ga: "Inis dúinn cad a fhásann, a thógann nó a fhormálann tú." },
    "contact.body": {
        en: "Real humans answer — typically within one working day. Sample shipments to verified growers, mills and feed compounders are free.",
        de: "Echte Menschen antworten — meist innerhalb eines Werktages. Muster-Sendungen an verifizierte Höfe, Mühlen und Futtermischer sind kostenlos.",
        ga: "Daoine fíor a fhreagraíonn — laistigh de lá oibre de ghnáth. Tá lastaí samplacha do fheirmeoirí, do mhuilte agus do dhéantóirí beatha fíoraithe saor in aisce.",
    },

    // Footer
    "footer.explore": { en: "Explore", de: "Entdecken", ga: "Iniúch" },
    "footer.contact": { en: "Contact", de: "Kontakt", ga: "Teagmháil" },
    "footer.tagline": {
        en: "Atlantic Ascophyllum nodosum, refined for European agriculture and animal nutrition. Liquid concentrates, granulates, water-soluble powder and a complete animal-feed range — produced for export to professional growers, mills and distributors.",
        de: "Atlantische Ascophyllum nodosum, veredelt für europäische Landwirtschaft und Tier-Ernährung. Flüssigkonzentrate, Granulate, wasserlösliches Pulver und ein komplettes Tierfutter-Sortiment — für den Export an professionelle Höfe, Mühlen und Distributoren.",
        ga: "Ascophyllum nodosum Atlantach, athchóirithe do thalmhaíocht agus do chothú ainmhithe na hEorpa. Tiúchain leachtacha, gráinní, púdar intuaslagtha agus raon iomlán beatha ainmhithe — déanta le haghaidh easpórtála.",
    },
    "footer.signature": {
        en: "Atlantic raw material · European processing · Export ready",
        de: "Atlantischer Rohstoff · Europäische Verarbeitung · Exportbereit",
        ga: "Amhábhar Atlantach · Próiseáil Eorpach · Réidh le honnmhairiú",
    },

    // Page titles (per inner page)
    "page.liquid.eyebrow": { en: "Liquid range", de: "Flüssig-Sortiment", ga: "Raon leachtach" },
    "page.liquid.title": { en: "Liquid Seaweed Products", de: "Flüssige Algen-Produkte", ga: "Táirgí Feamainne Leachtacha" },
    "page.liquid.intro": {
        en: "Five distinct liquid formats from a single Atlantic raw material. Cold-pressed for the most native profile, alkaline-extracted for maximum soluble solids, aqueous-extracted for residue-conscious growers, and a spray-dried equivalent for export-efficient logistics.",
        de: "Fünf unterschiedliche Flüssig-Formate aus einem einzigen atlantischen Rohstoff. Kaltgepresst, alkalisch extrahiert, wässrig extrahiert oder als sprühgetrocknetes Äquivalent.",
        ga: "Cúig fhormáid leachtacha éagsúla ó amhábhar Atlantach amháin. Cold-pressed, eastósctha go hailcileach, eastósctha go h-uisceach agus formáid triomaithe.",
    },
    "page.granulates.title": { en: "Granulates, Soil Conditioner & Seaweed Meal", de: "Granulate, Bodenverbesserer & Algenmehl", ga: "Gráinní, Coinneálaí Ithreach & Min Fheamainne" },
    "page.granulates.intro": {
        en: "Dried, broken, sized and graded — the same Atlantic Ascophyllum nodosum, presented as a slow-release granular feed for the soil and the soil food web. Designed to spread cleanly, blend uniformly into NPK and rebuild structure season over season.",
        de: "Getrocknet, gebrochen, klassiert und sortiert — dieselbe atlantische Ascophyllum nodosum als langzeitwirksames Granulat für Boden und Bodenleben.",
        ga: "Triomaithe, briste, méadaithe agus grádaithe — an Ascophyllum nodosum Atlantach céanna, mar bheatha ghráinne mall-scaoilte.",
    },
    "page.wsp.title": { en: "Water Soluble Powder", de: "Wasserlösliches Pulver", ga: "Púdar Intuaslagtha in Uisce" },
    "page.wsp.tagline": { en: "Spray-dried Ascophyllum nodosum extract — ready to dissolve, ready to ship.", de: "Sprühgetrockneter Ascophyllum-nodosum-Extrakt — bereit zum Lösen, bereit zum Versand.", ga: "Eastóscadh Ascophyllum nodosum triomaithe — réidh le tuaslagadh, réidh le seoladh." },
    "page.feeding.eyebrow": { en: "Chapter — Animal feeding", de: "Kapitel — Tierfütterung", ga: "Caibidil — Beathú ainmhithe" },
    "page.process.eyebrow": { en: "Manufacturing process", de: "Herstellungsprozess", ga: "Próiseas déantúsaíochta" },
    "page.process.title": { en: "Ten steps from the cold North Atlantic to your numbered storage bay.", de: "Zehn Schritte vom kalten Nord-Atlantik bis zu Ihrer nummerierten Lagerbucht.", ga: "Deich gcéim ón Atlantach Thuaidh fuar go dtí do bhá stórála uimhrithe." },
    "page.insights.eyebrow": { en: "Market insights", de: "Markteinblicke", ga: "Léargas margaidh" },
    "page.contact.eyebrow": { en: "Contact", de: "Kontakt", ga: "Teagmháil" },
    "page.contact.title": { en: "Tell us what you grow, raise or formulate.", de: "Sagen Sie uns, was Sie anbauen, halten oder formulieren.", ga: "Inis dúinn cad a fhásann, a thógann nó a fhormálann tú." },
};

export function useT() {
    const { lang } = useLang();
    return (key) => {
        const entry = T[key];
        if (!entry) return key;
        return entry[lang] || entry.en || key;
    };
}
