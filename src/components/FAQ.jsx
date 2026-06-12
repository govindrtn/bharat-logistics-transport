import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../data/websiteData";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-shell max-w-4xl">
        <SectionHeading
          center
          eyebrow={t("FAQs")}
          title={t("Common questions, clear answers")}
        />
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div
              key={q}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="press-effect flex w-full items-center justify-between gap-4 p-5 text-left font-extrabold text-navy-950"
              >
                <span>{t(q)}</span>
                <ChevronDown
                  size={19}
                  className={`shrink-0 transition ${open === i ? "rotate-180 text-brand-orange" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-5 pb-5 text-sm leading-7 text-slate-500"
                  >
                    {t(a)}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
