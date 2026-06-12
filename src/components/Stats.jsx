import { motion } from "framer-motion";
import { stats } from "../data/websiteData";
import { useLanguage } from "../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 -mt-8">
      <div className="container-shell grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.97 }}
            className="card tap-card p-5 text-center sm:p-7"
          >
            <p className="text-2xl font-black text-navy-950 sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
              {t(item.label)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
