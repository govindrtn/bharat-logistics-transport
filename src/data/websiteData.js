import {
  Boxes,
  Building2,
  CheckCircle2,
  Clock3,
  Container,
  FileCheck2,
  Gauge,
  MapPin,
  PackageCheck,
  PackageOpen,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";

export const navLinks = [
  ["Home", "home"],
  ["Services", "services"],
  ["Fleet", "fleet"],
  ["Coverage", "coverage"],
  ["Pricing", "pricing"],
  ["Contact", "contact"],
];

export const stats = [
  { value: "5000+", label: "Shipments Delivered" },
  { value: "120+", label: "Cities Covered" },
  { value: "300+", label: "Verified Trucks" },
  { value: "24/7", label: "Customer Support" },
];

export const services = [
  {
    icon: Truck,
    title: "Full Truck Load",
    text: "Dedicated truck for factory dispatches and large business consignments.",
  },
  {
    icon: Boxes,
    title: "Part Load Transport",
    text: "Share space, save cost. Ideal for regular small and medium loads.",
  },
  {
    icon: PackageOpen,
    title: "Parcel & Courier Movement",
    text: "Dependable parcel movement with pickup and tracking support.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Delivery",
    text: "Flexible B2B and last-mile movement for online sellers.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Support",
    text: "Loading, unloading and short-term storage support when required.",
  },
  {
    icon: Store,
    title: "Local City Transport",
    text: "Quick same-city goods movement for shops and local businesses.",
  },
];

export const fleet = [
  {
    name: "Tata Ace / Chhota Hathi",
    capacity: "Up to 750 kg",
    use: "Local shop delivery",
    price: "₹999 onwards",
    icon: Truck,
  },
  {
    name: "Pickup Truck",
    capacity: "Up to 1.5 ton",
    use: "Furniture & appliances",
    price: "₹1,499 onwards",
    icon: Truck,
  },
  {
    name: "14 Feet Truck",
    capacity: "Up to 4 ton",
    use: "Retail stock movement",
    price: "₹3,999 onwards",
    icon: Truck,
  },
  {
    name: "17 Feet Truck",
    capacity: "Up to 7 ton",
    use: "Industrial goods",
    price: "₹5,999 onwards",
    icon: Truck,
  },
  {
    name: "20 Feet Container",
    capacity: "Up to 9 ton",
    use: "Protected long haul",
    price: "₹8,999 onwards",
    icon: Container,
  },
  {
    name: "32 Feet Container",
    capacity: "Up to 16 ton",
    use: "Bulk interstate loads",
    price: "₹14,999 onwards",
    icon: Container,
  },
];

export const cities = [
  "Pune",
  "Mumbai",
  "Delhi",
  "Jaipur",
  "Ahmedabad",
  "Indore",
  "Bhopal",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Nagpur",
];

export const benefits = [
  { icon: ShieldCheck, title: "Verified drivers" },
  { icon: MapPin, title: "GPS tracking support" },
  { icon: FileCheck2, title: "Transparent pricing" },
  { icon: Clock3, title: "On-time delivery" },
  { icon: PackageCheck, title: "Safe goods handling" },
  { icon: CheckCircle2, title: "GST invoice available" },
  { icon: Gauge, title: "Pan India network" },
];

export const testimonials = [
  {
    name: "Rohit Kulkarni",
    role: "Shop owner, Pune",
    text: "Booking was simple and the driver arrived on time. Bilkul tension-free delivery.",
  },
  {
    name: "Anjali Mehta",
    role: "Manufacturer, Indore",
    text: "Clear pricing and regular updates made our urgent dispatch very smooth.",
  },
  {
    name: "Arjun Bansal",
    role: "E-commerce seller, Delhi",
    text: "We use BharatMove for frequent part-load shipments. The team is responsive and practical.",
  },
  {
    name: "Nirav Shah",
    role: "Trader, Ahmedabad",
    text: "Good vehicle quality, proper GST invoice and no hidden surprises.",
  },
];

export const faqs = [
  [
    "Do you provide GST invoice?",
    "Yes. GST invoices are available for all eligible business bookings.",
  ],
  [
    "Can I track my shipment?",
    "Yes. Our team shares tracking updates and live location support for applicable routes.",
  ],
  [
    "Do you support small parcel transport?",
    "Absolutely. Part-load and parcel movement options are made for smaller consignments.",
  ],
  [
    "Which cities do you cover?",
    "We serve 120+ cities, with strong coverage across major Indian business hubs.",
  ],
  [
    "How is pricing calculated?",
    "Pricing depends on route, vehicle type, goods type, weight, and service requirements.",
  ],
  [
    "Is insurance available?",
    "Transit insurance assistance is available on request for eligible goods.",
  ],
];

export const processSteps = [
  "Share pickup & drop details",
  "Choose vehicle type",
  "Get best quote",
  "Pickup from your location",
  "Track and receive delivery",
];

export const trustIcons = [Building2, Zap];
