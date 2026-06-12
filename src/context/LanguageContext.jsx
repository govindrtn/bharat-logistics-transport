import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  Home: "होम",
  Services: "सेवाएं",
  Fleet: "वाहन",
  Coverage: "कवरेज",
  Pricing: "कीमत",
  Contact: "संपर्क",
  "Get Quote": "कोटेशन पाएं",
  "Open menu": "मेन्यू खोलें",
  "Switch to Hindi": "हिंदी में बदलें",
  "Switch to English": "अंग्रेज़ी में बदलें",
  "Shipments Delivered": "डिलीवर किए गए शिपमेंट",
  "Cities Covered": "कवर किए गए शहर",
  "Verified Trucks": "सत्यापित ट्रक",
  "Customer Support": "ग्राहक सहायता",
  "Full Truck Load": "फुल ट्रक लोड",
  "Part Load Transport": "पार्ट लोड ट्रांसपोर्ट",
  "Parcel & Courier Movement": "पार्सल और कूरियर परिवहन",
  "E-commerce Delivery": "ई-कॉमर्स डिलीवरी",
  "Warehouse Support": "वेयरहाउस सहायता",
  "Local City Transport": "स्थानीय शहर परिवहन",
  "Tata Ace / Chhota Hathi": "टाटा ऐस / छोटा हाथी",
  "Pickup Truck": "पिकअप ट्रक",
  "14 Feet Truck": "14 फीट ट्रक",
  "17 Feet Truck": "17 फीट ट्रक",
  "20 Feet Container": "20 फीट कंटेनर",
  "32 Feet Container": "32 फीट कंटेनर",
  "Dedicated truck for factory dispatches and large business consignments.":
    "फैक्ट्री डिस्पैच और बड़े व्यावसायिक माल के लिए समर्पित ट्रक।",
  "Share space, save cost. Ideal for regular small and medium loads.":
    "जगह साझा करें और लागत बचाएं। नियमित छोटे और मध्यम लोड के लिए उपयुक्त।",
  "Dependable parcel movement with pickup and tracking support.":
    "पिकअप और ट्रैकिंग सहायता के साथ भरोसेमंद पार्सल परिवहन।",
  "Flexible B2B and last-mile movement for online sellers.":
    "ऑनलाइन विक्रेताओं के लिए सुविधाजनक B2B और लास्ट-माइल परिवहन।",
  "Loading, unloading and short-term storage support when required.":
    "ज़रूरत पड़ने पर लोडिंग, अनलोडिंग और कम अवधि के स्टोरेज की सहायता।",
  "Quick same-city goods movement for shops and local businesses.":
    "दुकानों और स्थानीय व्यवसायों के लिए शहर के अंदर तेज़ माल परिवहन।",
  "Up to 750 kg": "750 किग्रा तक",
  "Up to 1.5 ton": "1.5 टन तक",
  "Up to 4 ton": "4 टन तक",
  "Up to 7 ton": "7 टन तक",
  "Up to 9 ton": "9 टन तक",
  "Up to 16 ton": "16 टन तक",
  "Local shop delivery": "स्थानीय दुकान डिलीवरी",
  "Furniture & appliances": "फर्नीचर और उपकरण",
  "Retail stock movement": "रिटेल स्टॉक परिवहन",
  "Industrial goods": "औद्योगिक माल",
  "Protected long haul": "सुरक्षित लंबी दूरी परिवहन",
  "Bulk interstate loads": "बड़े अंतरराज्यीय लोड",
  "₹999 onwards": "₹999 से शुरू",
  "₹1,499 onwards": "₹1,499 से शुरू",
  "₹3,999 onwards": "₹3,999 से शुरू",
  "₹5,999 onwards": "₹5,999 से शुरू",
  "₹8,999 onwards": "₹8,999 से शुरू",
  "₹14,999 onwards": "₹14,999 से शुरू",
  "Verified drivers": "सत्यापित ड्राइवर",
  "GPS tracking support": "GPS ट्रैकिंग सहायता",
  "Transparent pricing": "पारदर्शी कीमत",
  "On-time delivery": "समय पर डिलीवरी",
  "Safe goods handling": "माल की सुरक्षित हैंडलिंग",
  "GST invoice available": "GST इनवॉइस उपलब्ध",
  "Pan India network": "पूरे भारत में नेटवर्क",
  "Shop owner, Pune": "दुकान मालिक, पुणे",
  "Manufacturer, Indore": "निर्माता, इंदौर",
  "E-commerce seller, Delhi": "ई-कॉमर्स विक्रेता, दिल्ली",
  "Trader, Ahmedabad": "व्यापारी, अहमदाबाद",
  "Booking was simple and the driver arrived on time. Bilkul tension-free delivery.":
    "बुकिंग आसान थी और ड्राइवर समय पर आया। बिल्कुल चिंता-मुक्त डिलीवरी।",
  "Clear pricing and regular updates made our urgent dispatch very smooth.":
    "स्पष्ट कीमत और नियमित अपडेट से हमारा ज़रूरी डिस्पैच बहुत आसान रहा।",
  "We use BharatMove for frequent part-load shipments. The team is responsive and practical.":
    "हम नियमित पार्ट-लोड शिपमेंट के लिए BharatMove का उपयोग करते हैं। टीम तेज़ और व्यावहारिक है।",
  "Good vehicle quality, proper GST invoice and no hidden surprises.":
    "अच्छी वाहन गुणवत्ता, सही GST इनवॉइस और कोई छिपा हुआ शुल्क नहीं।",
  "Do you provide GST invoice?": "क्या आप GST इनवॉइस देते हैं?",
  "Yes. GST invoices are available for all eligible business bookings.":
    "हां। सभी योग्य व्यावसायिक बुकिंग के लिए GST इनवॉइस उपलब्ध हैं।",
  "Can I track my shipment?": "क्या मैं अपना शिपमेंट ट्रैक कर सकता हूं?",
  "Yes. Our team shares tracking updates and live location support for applicable routes.":
    "हां। हमारी टीम लागू रूट के लिए ट्रैकिंग अपडेट और लाइव लोकेशन सहायता देती है।",
  "Do you support small parcel transport?":
    "क्या आप छोटे पार्सल का परिवहन करते हैं?",
  "Absolutely. Part-load and parcel movement options are made for smaller consignments.":
    "बिल्कुल। पार्ट-लोड और पार्सल विकल्प छोटे माल के लिए बनाए गए हैं।",
  "Which cities do you cover?": "आप किन शहरों को कवर करते हैं?",
  "We serve 120+ cities, with strong coverage across major Indian business hubs.":
    "हम 120+ शहरों में सेवा देते हैं और भारत के प्रमुख व्यावसायिक केंद्रों में मज़बूत कवरेज रखते हैं।",
  "How is pricing calculated?": "कीमत कैसे तय होती है?",
  "Pricing depends on route, vehicle type, goods type, weight, and service requirements.":
    "कीमत रूट, वाहन के प्रकार, माल के प्रकार, वजन और सेवा की ज़रूरत पर निर्भर करती है।",
  "Is insurance available?": "क्या बीमा उपलब्ध है?",
  "Transit insurance assistance is available on request for eligible goods.":
    "योग्य माल के लिए अनुरोध पर ट्रांज़िट बीमा सहायता उपलब्ध है।",
  "Share pickup & drop details": "पिकअप और ड्रॉप की जानकारी दें",
  "Choose vehicle type": "वाहन का प्रकार चुनें",
  "Get best quote": "सबसे अच्छा कोटेशन पाएं",
  "Pickup from your location": "आपकी लोकेशन से पिकअप",
  "Track and receive delivery": "ट्रैक करें और डिलीवरी पाएं",
  "Trusted transport partner for Indian businesses":
    "भारतीय व्यवसायों का भरोसेमंद ट्रांसपोर्ट पार्टनर",
  "Reliable Logistics & Transportation": "भरोसेमंद लॉजिस्टिक्स और परिवहन",
  "Across India": "पूरे भारत में",
  "Truck booking, parcel movement, B2B delivery and full-load transport solutions for Indian businesses.":
    "भारतीय व्यवसायों के लिए ट्रक बुकिंग, पार्सल परिवहन, B2B डिलीवरी और फुल-लोड ट्रांसपोर्ट समाधान।",
  "Get Free Quote": "मुफ़्त कोटेशन पाएं",
  "Track Shipment": "शिपमेंट ट्रैक करें",
  "Live movement": "लाइव मूवमेंट",
  "MH 12 · Pune to Mumbai": "MH 12 · पुणे से मुंबई",
  "In transit": "रास्ते में",
  Goods: "माल",
  "Retail stock": "रिटेल स्टॉक",
  Vehicle: "वाहन",
  "Estimated arrival": "अनुमानित पहुंच",
  "Today, 7:30 PM": "आज, शाम 7:30 बजे",
  "Delivery success": "सफल डिलीवरी",
  "Shipment loading and truck movement animation":
    "शिपमेंट लोडिंग और ट्रक चलने का एनिमेशन",
  "Shipment journey": "शिपमेंट यात्रा",
  "Loading to dispatch": "लोडिंग से डिस्पैच",
  "Pickup hub": "पिकअप हब",
  "Built for business": "व्यवसाय के लिए बनाया गया",
  "One logistics partner, every transport need":
    "हर परिवहन ज़रूरत के लिए एक लॉजिस्टिक्स पार्टनर",
  "From ek parcel to a full truck, choose the right service without complicated processes.":
    "एक पार्सल से पूरे ट्रक तक, बिना जटिल प्रक्रिया के सही सेवा चुनें।",
  "Right vehicle, right price": "सही वाहन, सही कीमत",
  "A fleet for every load": "हर लोड के लिए वाहन",
  "Verified vehicles for local, intercity and interstate movement.":
    "स्थानीय, इंटरसिटी और अंतरराज्यीय परिवहन के लिए सत्यापित वाहन।",
  "Best for:": "सबसे उपयुक्त:",
  "Get quote →": "कोटेशन पाएं →",
  "Pan India reach": "पूरे भारत में पहुंच",
  "Your goods, moving across Bharat": "आपका माल, पूरे भारत में गतिशील",
  "Strong route network connecting key business hubs, markets and industrial cities.":
    "प्रमुख व्यावसायिक केंद्रों, बाज़ारों और औद्योगिक शहरों को जोड़ने वाला मज़बूत रूट नेटवर्क।",
  "Aur bhi cities available. Share your route and hum best transport option batayenge.":
    "और भी शहर उपलब्ध हैं। अपना रूट बताएं, हम सबसे अच्छा ट्रांसपोर्ट विकल्प सुझाएंगे।",
  "Why BharatMove": "BharatMove क्यों",
  "Transport that keeps business moving": "ट्रांसपोर्ट जो व्यवसाय को आगे बढ़ाए",
  "Simple booking, dependable support and no unnecessary confusion. Bas route share karo, movement hum sambhalenge.":
    "आसान बुकिंग, भरोसेमंद सहायता और कोई अनावश्यक उलझन नहीं। बस रूट बताएं, परिवहन हम संभालेंगे।",
  "Live visibility": "लाइव जानकारी",
  "Know where your shipment is": "जानें आपका शिपमेंट कहां है",
  "Try our tracking demo. Enter any LR or tracking number to see a sample live movement update.":
    "हमारा ट्रैकिंग डेमो आज़माएं। सैंपल लाइव अपडेट देखने के लिए कोई भी LR या ट्रैकिंग नंबर डालें।",
  "Enter LR / Tracking Number": "LR / ट्रैकिंग नंबर डालें",
  "Track Now": "अभी ट्रैक करें",
  "Current status": "वर्तमान स्थिति",
  "In Transit": "रास्ते में",
  Route: "रूट",
  "Current location": "वर्तमान स्थान",
  "Lonavala Hub": "लोनावला हब",
  ETA: "पहुंचने का समय",
  "Tracking ID": "ट्रैकिंग ID",
  "Booking Confirmed": "बुकिंग की पुष्टि",
  "Pickup Done": "पिकअप पूरा",
  "Out for Delivery": "डिलीवरी के लिए रवाना",
  "Quick estimate": "तुरंत अनुमान",
  "Get a transport estimate in 30 seconds":
    "30 सेकंड में ट्रांसपोर्ट अनुमान पाएं",
  "Fill in basic shipment details for an instant indicative price. No login, no waiting.":
    "तुरंत अनुमानित कीमत के लिए शिपमेंट की सामान्य जानकारी भरें। न लॉगिन, न इंतज़ार।",
  "Estimated transport price": "अनुमानित ट्रांसपोर्ट कीमत",
  "This is an estimated price. Our team will call you for final quote.":
    "यह अनुमानित कीमत है। अंतिम कोटेशन के लिए हमारी टीम आपको कॉल करेगी।",
  "From City": "किस शहर से",
  "To City": "किस शहर तक",
  "Goods Type": "माल का प्रकार",
  "Approx Weight (kg)": "अनुमानित वजन (किग्रा)",
  "Mobile Number": "मोबाइल नंबर",
  "Vehicle Type": "वाहन का प्रकार",
  "Choose vehicle": "वाहन चुनें",
  "Estimate Price": "कीमत का अनुमान लगाएं",
  "e.g. Pune": "जैसे पुणे",
  "e.g. Mumbai": "जैसे मुंबई",
  "e.g. Garments": "जैसे कपड़े",
  "e.g. 500": "जैसे 500",
  "10-digit mobile": "10 अंकों का मोबाइल",
  "Please fill all details to get an estimate.":
    "अनुमान पाने के लिए कृपया सभी जानकारी भरें।",
  "Enter a valid 10-digit Indian mobile number.":
    "कृपया सही 10 अंकों का भारतीय मोबाइल नंबर डालें।",
  "How it works": "यह कैसे काम करता है",
  "From booking to delivery, simple rakho": "बुकिंग से डिलीवरी तक, सब आसान",
  "Customer stories": "ग्राहकों की कहानियां",
  "Trusted by businesses across India": "पूरे भारत के व्यवसायों का भरोसा",
  FAQs: "अक्सर पूछे जाने वाले सवाल",
  "Common questions, clear answers": "सामान्य सवाल, स्पष्ट जवाब",
  "Talk to our team": "हमारी टीम से बात करें",
  "Ready to move your goods?": "अपना माल भेजने के लिए तैयार हैं?",
  "Share your requirement and our transport expert will call you with the right vehicle and quote.":
    "अपनी ज़रूरत बताएं और हमारे ट्रांसपोर्ट विशेषज्ञ सही वाहन और कोटेशन के साथ आपको कॉल करेंगे।",
  "Your Name": "आपका नाम",
  City: "शहर",
  "Tell us about your transport requirement":
    "अपनी ट्रांसपोर्ट ज़रूरत के बारे में बताएं",
  "Request a Callback": "कॉल बैक का अनुरोध करें",
  "Mon–Sat: 8:00 AM – 8:00 PM": "सोम–शनि: सुबह 8:00 – रात 8:00",
  "Please fill all fields and enter a valid mobile number.":
    "कृपया सभी फ़ील्ड भरें और सही मोबाइल नंबर डालें।",
  "Thank you! Our transport expert will contact you shortly.":
    "धन्यवाद! हमारे ट्रांसपोर्ट विशेषज्ञ जल्द आपसे संपर्क करेंगे।",
  "Fast, Safe & Reliable Transport Across India.":
    "पूरे भारत में तेज़, सुरक्षित और भरोसेमंद ट्रांसपोर्ट।",
  "Quick Links": "ज़रूरी लिंक",
  "Part Load": "पार्ट लोड",
  "Local Transport": "स्थानीय ट्रांसपोर्ट",
  Connect: "संपर्क",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  "Designed & Developed by": "डिज़ाइन और डेवलप किया गया",
  "Chat on WhatsApp": "WhatsApp पर चैट करें",
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("bharatmove-language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("bharatmove-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (text) => (language === "hi" ? translations[text] || text : text);
  const toggleLanguage = () =>
    setLanguage((current) => (current === "en" ? "hi" : "en"));

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
