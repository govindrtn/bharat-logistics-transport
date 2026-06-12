import { useState } from "react";
import { Check, Circle, MapPin, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const timeline = [
  "Booking Confirmed",
  "Pickup Done",
  "In Transit",
  "Out for Delivery",
];

export default function TrackingDemo() {
  const { t } = useLanguage();
  const [number, setNumber] = useState("");
  const [tracked, setTracked] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (number.trim()) setTracked(true);
  };
  return (
    <section id="tracking" className="section-pad bg-slate-50">
      <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow={t("Live visibility")}
          title={t("Know where your shipment is")}
          copy={t(
            "Try our tracking demo. Enter any LR or tracking number to see a sample live movement update."
          )}
        />
        <div className="card p-5 sm:p-7">
          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="input flex-1"
              placeholder={t("Enter LR / Tracking Number")}
            />
            <button className="flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-6 py-3 font-bold text-white">
              <Search size={17} /> {t("Track Now")}
            </button>
          </form>
          <AnimatePresence>
            {tracked && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden"
              >
                <div className="mt-6 rounded-2xl bg-navy-950 p-5 text-white">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="text-xs text-white/50">
                        {t("Current status")}
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold text-emerald-400">
                        {t("In Transit")}
                      </h3>
                    </div>
                    <MapPin className="text-brand-orange" />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-white/45">{t("Route")}</p>
                      <strong>Pune → Mumbai</strong>
                    </div>
                    <div>
                      <p className="text-white/45">{t("Current location")}</p>
                      <strong>{t("Lonavala Hub")}</strong>
                    </div>
                    <div>
                      <p className="text-white/45">{t("ETA")}</p>
                      <strong>{t("Today, 7:30 PM")}</strong>
                    </div>
                    <div>
                      <p className="text-white/45">{t("Tracking ID")}</p>
                      <strong>{number}</strong>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {timeline.map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-2 sm:block"
                    >
                      <span
                        className={`inline-flex rounded-full p-1.5 ${i < 3 ? "bg-brand-green text-white" : "bg-slate-100 text-slate-400"}`}
                      >
                        {i < 3 ? <Check size={13} /> : <Circle size={13} />}
                      </span>
                      <p className="mt-2 text-xs font-bold text-slate-600">
                        {t(step)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
