import { LANGS, useLang } from "@/i18n/i18n";

export default function LanguagePicker({ size = "sm", testid = "lang-picker" }) {
    const { lang, setLang } = useLang();
    return (
        <div
            className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 ${
                size === "sm" ? "text-[11px]" : "text-xs"
            }`}
            data-testid={testid}
        >
            {LANGS.map((l) => (
                <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    aria-label={`Switch to ${l.name}`}
                    title={l.name}
                    data-testid={`${testid}-${l.code}`}
                    className={`px-2.5 py-1 rounded-full font-mono tracking-[0.14em] uppercase transition-colors ${
                        lang === l.code
                            ? "bg-kelp-600 text-white"
                            : "text-slate-300 hover:text-white"
                    }`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
}
