import { motion, useReducedMotion } from "framer-motion";
import { Package, Truck, Warehouse } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const journeyTransition = {
  duration: 7,
  ease: "easeInOut",
  repeat: Infinity,
  times: [0, 0.18, 0.38, 0.55, 0.82, 1],
};

export default function ShipmentJourneyAnimation() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-label={t("Shipment loading and truck movement animation")}
      className="relative my-6 overflow-hidden rounded-2xl border border-white/10 bg-navy-950/45 px-4 pb-4 pt-3"
    >
      <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-extrabold uppercase tracking-[.16em]">
        <span className="text-white/45">{t("Shipment journey")}</span>
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : { color: ["#fb923c", "#fb923c", "#34d399", "#34d399"] }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            times: [0, 0.38, 0.55, 1],
          }}
          className="text-orange-400"
        >
          {t("Loading to dispatch")}
        </motion.span>
      </div>

      <div className="relative h-24">
        <div className="absolute bottom-5 left-0 flex flex-col items-center">
          <Warehouse size={31} className="text-white/60" />
          <span className="mt-1 text-[9px] font-bold text-white/35">
            {t("Pickup hub")}
          </span>
        </div>

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 0, 112, 112, 112, 0],
                  y: [0, -8, -8, -8, -8, 0],
                  opacity: [1, 1, 1, 0, 0, 0],
                  rotate: [0, -5, 5, 0, 0, 0],
                }
          }
          transition={journeyTransition}
          className="absolute bottom-7 left-12 z-20 rounded-md bg-brand-orange p-1.5 text-white shadow-lg shadow-orange-950/30"
        >
          <Package size={19} />
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 0, 0, 0, 142, 0] }}
          transition={journeyTransition}
          className="absolute bottom-4 left-[43%] z-10"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -1, 1, -1, 1, 0] }}
            transition={{ duration: 0.45, repeat: Infinity }}
            className="relative flex items-end"
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0, 0, 0, 1, 1, 0],
                      scale: [0.7, 0.7, 0.7, 1, 1, 0.7],
                    }
              }
              transition={journeyTransition}
              className="absolute -top-2 left-4 rounded bg-brand-orange p-1 text-white"
            >
              <Package size={11} />
            </motion.span>
            <Truck size={55} strokeWidth={1.8} className="text-white" />
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-3 h-px bg-white/15" />
        <motion.div
          animate={reduceMotion ? undefined : { x: ["-20%", "420%"] }}
          transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
          className="absolute bottom-2.5 h-1 w-14 rounded-full bg-brand-orange"
        />
      </div>
    </div>
  );
}
