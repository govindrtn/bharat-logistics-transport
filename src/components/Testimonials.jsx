import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/websiteData";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow={t("Customer stories")}
          title={t("Trusted by businesses across India")}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card p-6"
            >
              <Quote className="text-brand-orange" />
              <div className="mt-4 flex text-amber-400">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                “{t(item.text)}”
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <strong className="text-sm text-navy-950">{item.name}</strong>
                <p className="mt-1 text-xs text-slate-400">{t(item.role)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
