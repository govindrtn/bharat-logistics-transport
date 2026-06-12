import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  return (
    <a
      aria-label={t("Chat on WhatsApp")}
      href="https://wa.me/919876543210?text=Hi%20BharatMove%20Logistics,%20I%20need%20transport%20service"
      target="_blank"
      rel="noreferrer"
      className="press-effect floating-action bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#20b75a] p-4 font-extrabold text-white shadow-2xl sm:px-5"
    >
      <MessageCircle size={22} />
      <span className="hidden text-sm sm:inline">{t("Chat on WhatsApp")}</span>
    </a>
  );
}
