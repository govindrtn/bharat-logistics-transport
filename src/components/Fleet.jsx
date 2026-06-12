import { motion } from "framer-motion";
import { Gauge, Package } from "lucide-react";
import { fleet } from "../data/websiteData";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function Fleet() {
  const { t } = useLanguage();
  return (
    <section id="fleet" className="section-pad bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          center
          eyebrow={t("Right vehicle, right price")}
          title={t("A fleet for every load")}
          copy={t(
            "Verified vehicles for local, intercity and interstate movement."
          )}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map(({ name, capacity, use, price, icon: Icon }, i) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="card tap-card overflow-hidden p-2"
            >
              <div className="flex h-36 items-center justify-center rounded-[1.15rem] bg-gradient-to-br from-navy-950 to-navy-800 text-white">
                <Icon size={72} strokeWidth={1.3} />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-navy-950">
                  {t(name)}
                </h3>
                <div className="mt-4 space-y-2 text-sm text-slate-500">
                  <p className="flex gap-2">
                    <Gauge size={17} className="text-brand-orange" />
                    {t(capacity)}
                  </p>
                  <p className="flex gap-2">
                    <Package size={17} className="text-brand-orange" />
                    {t("Best for:")} {t(use)}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <strong className="text-brand-orange">{t(price)}</strong>
                  <a
                    href="#pricing"
                    className="press-effect rounded-full px-2 py-1 text-xs font-extrabold text-navy-950"
                  >
                    {t("Get quote →")}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
