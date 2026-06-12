import { Facebook, Instagram, Linkedin, PackageCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/10 bg-navy-950 pb-28 pt-10 text-white">
      <div className="container-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold">
            <span className="rounded-lg bg-brand-orange p-2">
              <PackageCheck size={18} />
            </span>
            BharatMove Logistics
          </div>
          <p className="mt-4 text-sm leading-6 text-white/45">
            {t("Fast, Safe & Reliable Transport Across India.")}
          </p>
        </div>
        <div>
          <strong className="text-sm">{t("Quick Links")}</strong>
          <div className="mt-4 space-y-2 text-sm text-white/50">
            <p>
              <a href="#services">{t("Services")}</a>
            </p>
            <p>
              <a href="#fleet">{t("Fleet")}</a>
            </p>
            <p>
              <a href="#coverage">{t("Coverage")}</a>
            </p>
          </div>
        </div>
        <div>
          <strong className="text-sm">{t("Services")}</strong>
          <div className="mt-4 space-y-2 text-sm text-white/50">
            <p>{t("Full Truck Load")}</p>
            <p>{t("Part Load")}</p>
            <p>{t("Local Transport")}</p>
          </div>
        </div>
        <div>
          <strong className="text-sm">{t("Connect")}</strong>
          <p className="mt-4 text-sm text-white/50">
            +91 98765 43210
            <br />
            support@bharatmove.in
          </p>
          <div className="mt-4 flex gap-3 text-white/60">
            <Instagram size={18} />
            <Facebook size={18} />
            <Linkedin size={18} />
          </div>
        </div>
      </div>
      <div className="container-shell mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 BharatMove Logistics. {t("All rights reserved.")}</p>
        <p>
          {t("Designed & Developed by")}{" "}
          <span className="font-extrabold text-brand-orange">
            Maithil Webworks
          </span>
        </p>
      </div>
    </footer>
  );
}
