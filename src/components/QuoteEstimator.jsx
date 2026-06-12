import { useState } from "react";
import { Calculator, IndianRupee } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const vehicleRates = {
  "Tata Ace": 900,
  "Pickup Truck": 1500,
  "14 Feet Truck": 3500,
  "17 Feet Truck": 5200,
  "20 Feet Container": 7800,
  "32 Feet Container": 13000,
};
const initial = {
  from: "",
  to: "",
  vehicle: "",
  goods: "",
  weight: "",
  mobile: "",
};

export default function QuoteEstimator() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [price, setPrice] = useState(null);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => !v.trim()))
      return setError("Please fill all details to get an estimate.");
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      return setError("Enter a valid 10-digit Indian mobile number.");
    setError("");
    setPrice(
      700 + vehicleRates[form.vehicle] + Math.ceil(Number(form.weight) || 0) * 3
    );
  };
  return (
    <section id="pricing" className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow={t("Quick estimate")}
            title={t("Get a transport estimate in 30 seconds")}
            copy={t(
              "Fill in basic shipment details for an instant indicative price. No login, no waiting."
            )}
          />
          {price && (
            <div className="mt-7 rounded-3xl bg-brand-orange p-6 text-white shadow-xl shadow-orange-200">
              <p className="text-sm text-white/75">
                {t("Estimated transport price")}
              </p>
              <p className="mt-1 flex items-center text-4xl font-black">
                <IndianRupee size={30} />
                {price.toLocaleString("en-IN")}
              </p>
              <p className="mt-3 text-xs leading-5 text-white/75">
                {t(
                  "This is an estimated price. Our team will call you for final quote."
                )}
              </p>
            </div>
          )}
        </div>
        <form
          onSubmit={submit}
          className="card grid gap-4 p-5 sm:grid-cols-2 sm:p-7"
        >
          {[
            ["from", "From City", "e.g. Pune"],
            ["to", "To City", "e.g. Mumbai"],
            ["goods", "Goods Type", "e.g. Garments"],
            ["weight", "Approx Weight (kg)", "e.g. 500"],
            ["mobile", "Mobile Number", "10-digit mobile"],
          ].map(([name, label, placeholder]) => (
            <label key={name}>
              <span className="label">{t(label)}</span>
              <input
                name={name}
                value={form[name]}
                onChange={update}
                type={name === "weight" ? "number" : "text"}
                className="input"
                placeholder={t(placeholder)}
              />
            </label>
          ))}
          <label>
            <span className="label">{t("Vehicle Type")}</span>
            <select
              name="vehicle"
              value={form.vehicle}
              onChange={update}
              className="input"
            >
              <option value="">{t("Choose vehicle")}</option>
              {Object.keys(vehicleRates).map((v) => (
                <option key={v} value={v}>
                  {t(v)}
                </option>
              ))}
            </select>
          </label>
          {error && (
            <p className="text-sm font-semibold text-red-500 sm:col-span-2">
              {t(error)}
            </p>
          )}
          <button className="flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-6 py-4 font-extrabold text-white transition hover:bg-navy-800 sm:col-span-2">
            <Calculator size={18} /> {t("Estimate Price")}
          </button>
        </form>
      </div>
    </section>
  );
}
