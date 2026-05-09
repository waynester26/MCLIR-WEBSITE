import { Globe } from "lucide-react";
import { LANGS, useLang } from "@/i18n/i18n";

export default function LanguagePicker({ testid = "lang-picker" }) {
    const { lang, setLang } = useLang();
    return (
        <div
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1.5 py-1 text-[11px] shadow-sm"
            data-testid={testid}
            aria-label="Language selector"
        >
            <Globe className="h-3.5 w-3.5 text-kelp-400 ml-1" />
            {LANGS.map((l) => (
                <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    aria-label={`Switch to ${l.name}`}
                    aria-pressed={lang === l.code}
                    title={l.name}
                    data-testid={`${testid}-${l.code}`}
                    className={`px-2 py-1 rounded-full font-mono tracking-[0.14em] uppercase transition-colors ${
                        lang === l.code
                            ? "bg-kelp-600 text-white shadow-[0_2px_10px_-2px_rgba(46,92,66,0.7)]"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
}
