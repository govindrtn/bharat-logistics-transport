import { useEffect, useState } from "react";
import { Menu, PackageCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/websiteData";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-white/10 bg-navy-950/90 shadow-lg backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 text-white">
          <span className="rounded-xl bg-brand-orange p-2">
            <PackageCheck size={22} />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            BharatMove <span className="text-brand-orange">Logistics</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-semibold text-white/75 transition hover:text-white"
            >
              {t(label)}
            </a>
          ))}
          <button
            aria-label={t(
              language === "en" ? "Switch to Hindi" : "Switch to English"
            )}
            onClick={toggleLanguage}
            className="rounded-full border border-white/20 px-3 py-2 text-xs font-extrabold text-white transition hover:bg-white/10"
          >
            {language === "en" ? "हिंदी" : "EN"}
          </button>
          <a
            href="#pricing"
            className="rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/25 transition hover:-translate-y-0.5 hover:bg-orange-500"
          >
            {t("Get Quote")}
          </a>
        </nav>
        <button
          aria-label={t("Open menu")}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy-950 lg:hidden"
          >
            <div className="container-shell flex flex-col gap-1 py-4">
              {navLinks.map(([label, id]) => (
                <a
                  key={id}
                  onClick={() => setOpen(false)}
                  href={`#${id}`}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/5"
                >
                  {t(label)}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="mt-2 rounded-lg border border-white/15 px-3 py-3 text-left text-sm font-extrabold text-white"
              >
                {language === "en" ? "हिंदी में देखें" : "View in English"}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
