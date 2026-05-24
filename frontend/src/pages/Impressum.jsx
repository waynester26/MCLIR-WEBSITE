import { Link } from "react-router-dom";
import { Mail, MapPin, ShieldCheck, FileText, Phone, Globe2, AlertTriangle } from "lucide-react";
import { BRAND, IMG } from "@/data/content";
import { useT } from "@/i18n/i18n";

function Row({ label, children, testid }) {
    return (
        <div
            className="grid sm:grid-cols-[180px_1fr] gap-3 py-3 border-b border-white/5 last:border-b-0"
            data-testid={testid}
        >
            <div className="eyebrow text-slate-400">{label}</div>
            <div className="text-slate-200 text-sm leading-relaxed">{children}</div>
        </div>
    );
}

function Block({ title, children, testid }) {
    return (
        <div className="mt-8" data-testid={testid}>
            <h3 className="font-serif text-2xl text-white">{title}</h3>
            <div className="mt-3 text-slate-300 text-sm leading-relaxed">{children}</div>
        </div>
    );
}

export default function Impressum() {
    const t = useT();
    return (
        <div className="pt-12 pb-32" data-testid="impressum-page">
            {/* HERO */}
            <section className="relative overflow-hidden" data-testid="impressum-hero">
                <div className="absolute inset-0">
                    <img
                        src={IMG.oceanWaves}
                        alt=""
                        className="h-full w-full object-cover opacity-30"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/85 via-[#050B14]/85 to-[#050B14]" />
                </div>
                <div className="relative max-w-5xl mx-auto px-5 lg:px-8 pt-16 pb-12">
                    <Link
                        to="/"
                        className="eyebrow inline-flex items-center gap-2 text-slate-400 hover:text-white"
                        data-testid="impressum-back"
                    >
                        {t("cta.back_brand")}
                    </Link>
                    <div className="eyebrow mt-5">{t("page.impressum.eyebrow")}</div>
                    <h1
                        className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
                        data-testid="impressum-title"
                    >
                        {t("page.impressum.title")}
                    </h1>
                    <p className="mt-5 text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
                        {t("page.impressum.intro")}
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-5 lg:px-8">
                {/* IMPRESSUM */}
                <div
                    className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7 sm:p-9"
                    data-testid="impressum-block"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <FileText className="h-5 w-5 text-kelp-400" />
                        <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
                            {t("impressum.section1.title")}
                        </h2>
                    </div>

                    <div className="mt-5 divide-y divide-white/5">
                        <Row label={t("impressum.company.label")} testid="impressum-row-company">
                            {BRAND.name}
                        </Row>
                        <Row label={t("impressum.owner.label")} testid="impressum-row-owner">
                            {t("impressum.owner.value")}
                        </Row>
                        <Row label={t("impressum.address.label")} testid="impressum-row-address">
                            <span className="inline-flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 text-kelp-400 shrink-0" />
                                {BRAND.address}
                            </span>
                        </Row>
                        <Row label={t("impressum.email.label")} testid="impressum-row-email">
                            <a
                                href={`mailto:${BRAND.email}`}
                                className="inline-flex items-center gap-2 hover:text-white text-kelp-300"
                                data-testid="impressum-email-link"
                            >
                                <Mail className="h-4 w-4" />
                                {BRAND.email}
                            </a>
                        </Row>
                        <Row label={t("impressum.phone.label")} testid="impressum-row-phone">
                            <span className="inline-flex items-center gap-2">
                                <Phone className="h-4 w-4 text-kelp-400" />
                                {BRAND.phone}
                            </span>
                        </Row>
                        <Row label={t("impressum.vat.label")} testid="impressum-row-vat">
                            {t("impressum.vat.value")}
                        </Row>
                        <Row label={t("impressum.register.label")} testid="impressum-row-register">
                            {t("impressum.register.value")}
                        </Row>
                    </div>
                </div>

                {/* PRIVACY POLICY */}
                <div
                    className="rounded-2xl border border-white/10 bg-[#0A1628]/60 p-7 sm:p-9 mt-8"
                    data-testid="privacy-block"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <ShieldCheck className="h-5 w-5 text-kelp-400" />
                        <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
                            {t("privacy.section.title")}
                        </h2>
                    </div>

                    <Block title={t("privacy.controller.title")} testid="privacy-controller">
                        {t("privacy.controller.body")}
                    </Block>
                    <Block title={t("privacy.collected.title")} testid="privacy-collected">
                        {t("privacy.collected.body")}
                    </Block>
                    <Block title={t("privacy.contact.title")} testid="privacy-contact-data">
                        {t("privacy.contact.body")}
                    </Block>
                    <Block title={t("privacy.analytics.title")} testid="privacy-analytics">
                        {t("privacy.analytics.body")}
                    </Block>
                    <Block title={t("privacy.basis.title")} testid="privacy-basis">
                        {t("privacy.basis.body")}
                    </Block>
                    <Block title={t("privacy.storage.title")} testid="privacy-storage">
                        {t("privacy.storage.body")}
                    </Block>
                    <Block title={t("privacy.rights.title")} testid="privacy-rights">
                        {t("privacy.rights.body")}
                    </Block>
                    <Block title={t("privacy.transfers.title")} testid="privacy-transfers">
                        <span className="inline-flex items-start gap-2">
                            <Globe2 className="h-4 w-4 mt-0.5 text-kelp-400 shrink-0" />
                            {t("privacy.transfers.body")}
                        </span>
                    </Block>
                    <Block title={t("privacy.request.title")} testid="privacy-request">
                        {t("privacy.request.body")}{" "}
                        <a
                            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("GDPR request")}`}
                            className="text-kelp-300 hover:text-white underline-offset-4 hover:underline"
                            data-testid="privacy-mailto"
                        >
                            {BRAND.email}
                        </a>
                    </Block>
                    <Block title={t("privacy.updates.title")} testid="privacy-updates">
                        {t("privacy.updates.body")}
                    </Block>
                </div>

                {/* DISCLAIMER */}
                <div
                    className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 flex gap-3"
                    data-testid="impressum-disclaimer"
                >
                    <AlertTriangle className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-100/80 leading-relaxed font-mono">
                        {t("impressum.disclaimer")}
                    </p>
                </div>
            </section>
        </div>
    );
}
