import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Navigation,
  PackageCheck,
  Truck,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ShipmentJourneyAnimation from "./ShipmentJourneyAnimation";

const routes = ["Pune → Mumbai", "Delhi → Jaipur", "Indore → Bhopal"];

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="grid-texture relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pb-28 sm:pt-40"
    >
      <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/85">
            <CheckCircle2 size={15} className="text-emerald-400" />
            {t("Trusted transport partner for Indian businesses")}
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-.045em] sm:text-6xl lg:text-7xl">
            {t("Reliable Logistics & Transportation")}{" "}
            <span className="text-brand-orange">{t("Across India")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {t(
              "Truck booking, parcel movement, B2B delivery and full-load transport solutions for Indian businesses."
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-extrabold shadow-xl shadow-orange-950/30 transition hover:-translate-y-1"
            >
              {t("Get Free Quote")} <ArrowRight size={17} />
            </a>
            <a
              href="#tracking"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-extrabold backdrop-blur transition hover:bg-white/15"
            >
              {t("Track Shipment")}
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {routes.map((route) => (
              <span
                key={route}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/65"
              >
                {route}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="card relative overflow-hidden border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-white/45">
                  {t("Live movement")}
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  {t("MH 12 · Pune to Mumbai")}
                </h3>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-300">
                {t("In transit")}
              </span>
            </div>
            <div className="my-8 flex items-center gap-3">
              <MapPin className="text-brand-orange" />
              <div className="route-line flex-1 bg-white/15" />
              <Navigation className="text-emerald-400" />
            </div>
            <ShipmentJourneyAnimation />
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/7 p-4">
                <PackageCheck className="mb-3 text-brand-orange" />
                <p className="text-xs text-white/45">{t("Goods")}</p>
                <p className="mt-1 font-bold">{t("Retail stock")}</p>
              </div>
              <div className="rounded-2xl bg-white/7 p-4">
                <Truck className="mb-3 text-brand-orange" />
                <p className="text-xs text-white/45">{t("Vehicle")}</p>
                <p className="mt-1 font-bold">{t("14 Feet Truck")}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-brand-orange p-4">
              <div>
                <p className="text-xs text-white/70">
                  {t("Estimated arrival")}
                </p>
                <p className="font-extrabold">{t("Today, 7:30 PM")}</p>
              </div>
              <ArrowRight />
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 text-navy-950 shadow-2xl sm:-left-10"
          >
            <p className="text-xs text-slate-500">{t("Delivery success")}</p>
            <p className="text-xl font-black">98.7%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
