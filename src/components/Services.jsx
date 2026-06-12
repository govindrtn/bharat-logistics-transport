import { m } from "framer-motion";
import { services } from "../data/websiteData";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow={t("Built for business")}
          title={t("One logistics partner, every transport need")}
          copy={t(
            "From one parcel to a full truck, choose the right service without complicated processes."
          )}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <m.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -7 }}
              whileTap={{ scale: 0.98 }}
              className="card tap-card group p-6"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-orange-50 p-3 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-navy-950">
                {t(title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{t(text)}</p>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
