import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Mail, MapPin } from "lucide-react";
import { BRAND } from "@/data/content";
import { useT } from "@/i18n/i18n";
import LanguagePicker from "@/i18n/LanguagePicker";

const useNav = () => {
    const t = useT();
    return [
        { to: "/", label: t("nav.home") },
        {
            label: t("nav.products"),
            children: [
                { to: "/liquid", label: t("nav.liquid") },
                { to: "/granulates", label: t("nav.granulates") },
                { to: "/water-soluble-powder", label: t("nav.wsp") },
            ],
        },
        { to: "/animal-feeding", label: t("nav.feeding") },
        { to: "/manufacturing", label: t("nav.process") },
        { to: "/market-insights", label: t("nav.insights") },
        { to: "/contact", label: t("nav.contact") },
    ];
};

function DesktopMenu() {
    const NAV = useNav();
    return (
        <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {NAV.map((item) =>
                item.children ? (
                    <div key={item.label} className="relative group">
                        <button
                            data-testid={`nav-${item.label.toLowerCase()}-trigger`}
                            className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                            {item.label}
                            <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                            <div className="min-w-[260px] rounded-xl border border-white/10 bg-[#0A1628]/95 backdrop-blur-xl p-2 shadow-2xl">
                                {item.children.map((c) => (
                                    <NavLink
                                        key={c.to}
                                        to={c.to}
                                        data-testid={`nav-link-${c.to.replace(/\//g, "")}`}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-sm transition-colors ${
                                                isActive
                                                    ? "bg-kelp-600/20 text-white"
                                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                                            }`
                                        }
                                    >
                                        {c.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        data-testid={`nav-link-${item.label.toLowerCase()}`}
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium transition-colors ${
                                isActive ? "text-white" : "text-slate-300 hover:text-white"
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                )
            )}
        </nav>
    );
}

function MobileMenu({ open, setOpen }) {
    const NAV = useNav();
    return (
        <div
            className={`lg:hidden fixed inset-0 z-[60] bg-[#050B14]/98 backdrop-blur-xl transition-opacity ${
                open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            data-testid="mobile-nav-panel"
        >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3" data-testid="mobile-logo-link">
                    <img src={BRAND.logo} alt="McLir" className="h-9 w-9 rounded-full bg-white/5 object-contain p-1" />
                    <span className="font-serif text-xl">McLir Seaweed</span>
                </Link>
                <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    data-testid="mobile-nav-close"
                    className="p-2 rounded-md hover:bg-white/5"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
            <div className="px-6 py-6 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
                <div className="pb-4 mb-2 border-b border-white/10">
                    <LanguagePicker testid="mobile-lang-picker" />
                </div>
                {NAV.flatMap((item) =>
                    item.children
                        ? [
                              <div key={item.label} className="eyebrow pt-4 pb-2">
                                  {item.label}
                              </div>,
                              ...item.children.map((c) => (
                                  <NavLink
                                      key={c.to}
                                      to={c.to}
                                      onClick={() => setOpen(false)}
                                      data-testid={`mobile-nav-link-${c.to.replace(/\//g, "")}`}
                                      className="block px-2 py-3 rounded-md text-lg font-serif text-slate-100 hover:bg-white/5"
                                  >
                                      {c.label}
                                  </NavLink>
                              )),
                          ]
                        : [
                              <NavLink
                                  key={item.to}
                                  to={item.to}
                                  onClick={() => setOpen(false)}
                                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                                  className="block px-2 py-3 rounded-md text-lg font-serif text-slate-100 hover:bg-white/5"
                              >
                                  {item.label}
                              </NavLink>,
                          ]
                )}
            </div>
        </div>
    );
}

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);
    const t = useT();
    return (
        <div className="min-h-screen bg-[#050B14] text-slate-100">
            <header className="fixed top-0 inset-x-0 z-50 glass-nav" data-testid="site-header">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group" data-testid="header-logo-link">
                        <img
                            src={BRAND.logo}
                            alt="McLir Seaweed crest"
                            className="h-10 w-10 rounded-full bg-white/5 object-contain p-1 ring-1 ring-white/10 group-hover:ring-kelp-500/40 transition"
                        />
                        <div className="leading-tight">
                            <div className="font-serif text-xl tracking-tight text-white">McLir</div>
                            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-400">
                                Seaweed
                            </div>
                        </div>
                    </Link>
                    <DesktopMenu />
                    <div className="flex items-center gap-3">
                        <LanguagePicker testid="header-lang-picker" />
                        <Link
                            to="/contact"
                            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kelp-600 hover:bg-kelp-500 text-white text-sm font-medium transition-colors"
                            data-testid="header-cta-contact"
                        >
                            <Mail className="h-3.5 w-3.5" />
                            {t("cta.sample")}
                        </Link>
                        <button
                            className="lg:hidden p-2 rounded-md hover:bg-white/5"
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                            data-testid="mobile-nav-open"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>
            <MobileMenu open={open} setOpen={setOpen} />

            <main className="pt-[72px]">{children}</main>

            <footer className="border-t border-white/5 bg-[#040912]" data-testid="site-footer">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={BRAND.logo}
                                alt="McLir crest"
                                className="h-10 w-10 rounded-full bg-white/5 object-contain p-1 ring-1 ring-white/10"
                            />
                            <div>
                                <div className="font-serif text-2xl">McLir Seaweed</div>
                                <div className="eyebrow mt-0.5">Atlantic Ascophyllum nodosum</div>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                            {t("footer.tagline")}
                        </p>
                    </div>
                    <div>
                        <div className="eyebrow mb-3">{t("footer.explore")}</div>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/liquid" className="hover:text-white text-slate-300" data-testid="footer-link-liquid">{t("nav.liquid")}</Link></li>
                            <li><Link to="/granulates" className="hover:text-white text-slate-300" data-testid="footer-link-granulates">{t("nav.granulates")}</Link></li>
                            <li><Link to="/water-soluble-powder" className="hover:text-white text-slate-300" data-testid="footer-link-wsp">{t("nav.wsp")}</Link></li>
                            <li><Link to="/animal-feeding" className="hover:text-white text-slate-300" data-testid="footer-link-animal-feeding">{t("nav.feeding")}</Link></li>
                            <li><Link to="/manufacturing" className="hover:text-white text-slate-300" data-testid="footer-link-process">{t("nav.process")}</Link></li>
                            <li><Link to="/market-insights" className="hover:text-white text-slate-300" data-testid="footer-link-insights">{t("nav.insights")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className="eyebrow mb-3">{t("footer.contact")}</div>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2 text-slate-300">
                                <Mail className="h-4 w-4 mt-0.5 text-kelp-500" />
                                <a
                                    href={`mailto:${BRAND.email}`}
                                    className="hover:text-white"
                                    data-testid="footer-email-link"
                                >
                                    {BRAND.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-slate-300">
                                <MapPin className="h-4 w-4 mt-0.5 text-kelp-500" />
                                <span>{BRAND.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs font-mono text-slate-500">
                            © {new Date().getFullYear()} McLir Seaweed — Plombières, Belgium
                        </div>
                        <div className="text-xs font-mono text-slate-500">
                            {t("footer.signature")}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
