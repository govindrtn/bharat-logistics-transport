import { motion } from "framer-motion";
import { processSteps } from "../data/websiteData";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          center
          eyebrow={t("How it works")}
          title={t("From booking to delivery, simple rakho")}
        />
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileTap={{ scale: 0.97 }}
              className="tap-card relative rounded-2xl border border-transparent bg-white p-5 shadow-sm"
            >
              <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-sm font-black text-white">
                {i + 1}
              </span>
              <p className="text-sm font-extrabold leading-6 text-navy-950">
                {t(step)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
