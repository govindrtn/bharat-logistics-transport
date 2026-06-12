import { motion } from "framer-motion";
import { benefits } from "../data/websiteData";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  return (
    <section className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow={t("Why BharatMove")}
          title={t("Transport that keeps business moving")}
          copy={t(
            "Simple booking, dependable support and no unnecessary confusion. Bas route share karo, movement hum sambhalenge."
          )}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4"
            >
              <span className="rounded-xl bg-emerald-50 p-2.5 text-brand-green">
                <Icon size={20} />
              </span>
              <strong className="text-sm text-navy-950">{t(title)}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
