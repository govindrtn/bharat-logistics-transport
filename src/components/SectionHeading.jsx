import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={center ? "mx-auto flex flex-col items-center text-center" : ""}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  );
}
