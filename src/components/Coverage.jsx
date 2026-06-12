import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cities } from "../data/websiteData";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function Coverage() {
  const { t } = useLanguage();
  return (
    <section
      id="coverage"
      className="section-pad overflow-hidden bg-navy-950 text-white"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow={t("Pan India reach")}
          title={t("Your goods, moving across Bharat")}
          copy={t(
            "Strong route network connecting key business hubs, markets and industrial cities."
          )}
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.035 }}
              whileTap={{ scale: 0.98 }}
              className="tap-card rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-brand-orange/50 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-brand-orange/15 p-2 text-brand-orange">
                  <MapPin size={16} />
                </span>
                <strong>{city}</strong>
              </div>
              <div className="route-line mt-4 bg-white/10" />
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white/50">
          {t(
            "Aur bhi cities available. Share your route and hum best transport option batayenge."
          )}
        </p>
      </div>
    </section>
  );
}
