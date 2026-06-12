import { useState } from "react";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    message: "",
  });
  const [note, setNote] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.city ||
      !form.message ||
      !/^[6-9]\d{9}$/.test(form.mobile)
    )
      return setNote("Please fill all fields and enter a valid mobile number.");
    setNote("Thank you! Our transport expert will contact you shortly.");
    setForm({ name: "", mobile: "", city: "", message: "" });
  };
  return (
    <section id="contact" className="section-pad bg-navy-950 text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow={t("Talk to our team")}
            title={t("Ready to move your goods?")}
            copy={t(
              "Share your requirement and our transport expert will call you with the right vehicle and quote."
            )}
          />
          <div className="mt-8 space-y-4 text-sm text-white/70">
            <p className="flex gap-3">
              <Phone className="text-brand-orange" size={19} />
              +91 98765 43210
            </p>
            <p className="flex gap-3">
              <Mail className="text-brand-orange" size={19} />
              support@bharatmove.in
            </p>
            <p className="flex gap-3">
              <MapPin className="text-brand-orange" size={19} />
              Pune, Maharashtra
            </p>
            <p className="flex gap-3">
              <Clock3 className="text-brand-orange" size={19} />
              {t("Mon–Sat: 8:00 AM – 8:00 PM")}
            </p>
          </div>
        </div>
        <form
          onSubmit={submit}
          className="grid gap-4 rounded-3xl bg-white p-5 text-navy-950 sm:grid-cols-2 sm:p-7"
        >
          {[
            ["name", "Your Name"],
            ["mobile", "Mobile Number"],
            ["city", "City"],
          ].map(([name, placeholder]) => (
            <input
              key={name}
              value={form[name]}
              onChange={(e) => setForm({ ...form, [name]: e.target.value })}
              className="input"
              placeholder={t(placeholder)}
            />
          ))}
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input min-h-28 sm:col-span-2"
            placeholder={t("Tell us about your transport requirement")}
          />
          <button className="press-effect flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-4 font-extrabold text-white sm:col-span-2">
            <Send size={18} /> {t("Request a Callback")}
          </button>
          {note && (
            <p
              className={`text-sm font-semibold sm:col-span-2 ${note.startsWith("Thank") ? "text-brand-green" : "text-red-500"}`}
            >
              {t(note)}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
