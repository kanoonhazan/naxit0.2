export type Language = 'en' | 'ta' | 'si';

export interface SeoPageLocaleData {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatYouGetTitle: string;
  whatYouGet: string[];
  whoWeBuildForTitle?: string;
  whoWeBuildFor?: string;
  howItWorksTitle?: string;
  howItWorks?: string[];
  pricingHighlightTitle?: string;
  pricingHighlight?: string;
  whyChooseTitle?: string;
  whyChoose?: string;
  differenceTitle?: string;
  difference?: string;
  faqs: { question: string; answer: string }[];
  ctaButtonText: string;
  badge?: string;
}

export interface SeoPageData {
  id: string;
  slug: string;
  aliases: string[];
  category: string;
  isMannar?: boolean;
  isRop?: boolean;
  en: SeoPageLocaleData;
  ta: SeoPageLocaleData;
  si: SeoPageLocaleData;
}

export const SEO_PAGES: SeoPageData[] = [
  {
    id: 'web-design',
    slug: 'web-design-sri-lanka',
    aliases: ['website-design-sri-lanka'],
    category: 'Web Design',
    en: {
      title: 'Web Design Sri Lanka | Fast Business Websites | NAXIT',
      metaDescription: 'Fast, mobile-friendly business websites from LKR 5,000, live within 3 days. NAXIT designs and builds websites across Sri Lanka.',
      h1: 'Web Design in Sri Lanka for Businesses That Want More Customers',
      intro: 'Most customers in Sri Lanka find a business on their phone first. If your website is slow, hard to read or missing a WhatsApp button, they leave. NAXIT builds websites that load fast on mobile data, look professional and make it easy to call or message you.',
      whatYouGetTitle: 'What you get',
      whatYouGet: [
        'Mobile-first design that works smoothly on any phone',
        'Direct WhatsApp and click-to-call buttons for instant inquiries',
        'Google Business Profile and local search SEO setup',
        'Sinhala, Tamil and English language versions on request',
        'Clear pricing with no hidden monthly fees'
      ],
      whoWeBuildForTitle: 'Who we build for',
      whoWeBuildFor: 'Retail shops, mini-marts, private schools, clinics, restaurants and new startups across Sri Lanka, from Mannar and Jaffna to Colombo and Kandy.',
      howItWorksTitle: 'How it works',
      howItWorks: [
        'Tell us about your business on WhatsApp (+94 75 681 1228).',
        'We send a clear implementation plan and a fixed quote.',
        'We design and build the pages with milestone reviews as we go.',
        'We launch your website and provide dedicated ongoing support.'
      ],
      pricingHighlightTitle: 'Transparent Pricing & Delivery',
      pricingHighlight: 'Static website / landing page from LKR 5,000 (delivered within 3 days). Full custom web design and UI design are quoted per project with agreed milestones.',
      faqs: [
        {
          question: 'How much does a business website cost in Sri Lanka?',
          answer: 'A static website or landing page starts from LKR 5,000. Custom web design and UI design are quoted per project, so you pay only for what you need. NAXIT gives a fixed quote before work starts.'
        },
        {
          question: 'How long does it take?',
          answer: 'A static website or landing page is ready within 3 days. Bigger web design and UI projects are scheduled per project, and we agree the timeline together with the fixed quote before work starts.'
        },
        {
          question: 'Can you work with clients outside Mannar?',
          answer: 'Yes. We work with clients across Sri Lanka by WhatsApp, phone and video call.'
        }
      ],
      ctaButtonText: 'Get a free quote on WhatsApp',
      badge: 'Starting LKR 5,000'
    },
    ta: {
      title: 'இலங்கையில் வெப் டிசைன் | Web Design Sri Lanka | NAXIT',
      metaDescription: 'இலங்கையில் வணிகங்களுக்கு நவீன வலைத்தளங்கள் மற்றும் லான்டிங் பக்கங்கள். ஸ்டாடிக் இணையதளம் LKR 5,000 முதல், 3 நாட்களில் டெலிவரி. WhatsApp இல் இலவச மதிப்பீடு பெறுங்கள்.',
      h1: 'இலங்கையில் நம்பகமான வெப் டிசைன் சேவை',
      intro: 'NAXIT இலங்கை முழுவதும் சிறிய மற்றும் நடுத்தர வணிகங்களுக்கு வேகமான, மொபைலுக்கு ஏற்ற நவீன வலைத்தளங்களை வடிவமைத்து தருகிறது. உங்கள் வணிகத்தை இணையத்தில் சரியான முறையில் அறிமுகப்படுத்த நாங்கள் உதவுகிறோம்.',
      whatYouGetTitle: 'நீங்கள் பெறுவது',
      whatYouGet: [
        'ஸ்டாடிக் வலைத்தளம் / லான்டிங் பக்கம் - LKR 5,000 முதல், 3 நாட்களில் டெலிவரி',
        'முழு வலைத்தள வடிவமைப்பு மற்றும் UI வடிவமைப்பு - திட்டத்திற்கு ஏற்ப விலை',
        'Google தேடலுக்கு ஏற்ற அடிப்படை SEO அமைப்பு',
        'WhatsApp மூலம் நேரடி, வேகமான தொடர்பு'
      ],
      pricingHighlightTitle: 'விலை மற்றும் டெலிவரி',
      pricingHighlight: 'ஸ்டாடிக் வலைத்தளம் LKR 5,000 முதல் 3 நாட்களில் தயார். முழு வலைத்தள திட்டங்களுக்கு முன்கூட்டியே நிலையான விலை வழங்கப்படும்.',
      faqs: [
        {
          question: 'வலைத்தளத்தின் விலை எவ்வளவு?',
          answer: 'ஸ்டாடிக் வலைத்தளம் அல்லது லான்டிங் பக்கம் LKR 5,000 முதல் தொடங்குகிறது. பெரிய திட்டங்களுக்கு திட்டத்தின் அளவைப் பார்த்து நிலையான விலை முன்கூட்டியே தரப்படும்.'
        },
        {
          question: 'எத்தனை நாட்களில் முடிவடையும்?',
          answer: 'லான்டிங் பக்கம் 3 நாட்களில் டெலிவரி செய்யப்படும். பெரிய திட்டங்களுக்கு கால அட்டவணை திட்டத்துடன் ஒப்புக்கொள்ளப்படும்.'
        }
      ],
      ctaButtonText: 'WhatsApp இல் இலவச மதிப்பீடு பெறுங்கள்',
      badge: 'LKR 5,000 முதல்'
    },
    si: {
      title: 'ශ්‍රී ලංකා වෙබ් අඩවි සැලසුම් | Web Design Sri Lanka | NAXIT',
      metaDescription: 'ශ්‍රී ලංකාවේ ව්‍යාපාර සඳහා නවීන වෙබ් අඩවි සහ landing pages. ස්ථාවර වෙබ් අඩවියක් LKR 5,000 සිට, දින 3ක් තුළ බෙදාහැරීම. WhatsApp හරහා නොමිලේ මිල ගණන් ගන්න.',
      h1: 'ශ්‍රී ලංකාවේ විශ්වාසදායක වෙබ් සැලසුම් සේවය',
      intro: 'NAXIT ශ්‍රී ලංකාව පුරා කුඩා සහ මධ්‍යම ව්‍යාපාර සඳහා වේගවත්, ජංගම දුරකථනවලට ගැලපෙන නවීන වෙබ් අඩවි සාදා දෙයි. ඔබේ ව්‍යාපාරය අන්තර්ජාලයට නිවැරදි ආකාරයට ගෙන ඒමට අපි උදව් කරමු.',
      whatYouGetTitle: 'ඔබට ලැබෙන දේ',
      whatYouGet: [
        'ස්ථාවර වෙබ් අඩවිය / landing page - LKR 5,000 සිට, දින 3ක් තුළ බෙදාහැරීම',
        'සම්පූර්ණ වෙබ් අඩවි සැලසුම සහ UI සැලසුම - ව්‍යාපෘතිය අනුව මිල',
        'Google සෙවීමට ගැලපෙන මූලික SEO සැකසුම',
        'WhatsApp හරහා සෘජු, වේගවත් සම්බන්ධතාවය'
      ],
      pricingHighlightTitle: 'මිල සහ බෙදාහැරීම',
      pricingHighlight: 'ස්ථාවර වෙබ් අඩවි LKR 5,000 සිට දින 3ක් තුළ. විශාල ව්‍යාපෘති සඳහා ස්ථාවර මිල කලින් එකඟ වේ.',
      faqs: [
        {
          question: 'වෙබ් අඩවියක මිල කීයද?',
          answer: 'ස්ථාවර වෙබ් අඩවියක් හෝ landing page එකක් LKR 5,000 සිට ආරම්භ වේ. විශාල ව්‍යාපෘති සඳහා ව්‍යාපෘතියේ පරිමාව අනුව ස්ථාවර මිලක් කලින් දෙනු ලැබේ.'
        },
        {
          question: 'දින කීයකින් අවසන් වේද?',
          answer: 'Landing page එකක් දින 3ක් තුළ බෙදාහැරිය හැක. විශාල ව්‍යාපෘති සඳහා කාලසටහන ව්‍යාපෘතිය සමඟ එකඟ වේ.'
        }
      ],
      ctaButtonText: 'WhatsApp හරහා මිල ගණන් ගන්න',
      badge: 'LKR 5,000 සිට'
    }
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design-sri-lanka',
    aliases: ['ui-ux-sri-lanka'],
    category: 'UI/UX Design',
    en: {
      title: 'UI/UX Design Sri Lanka | App & Website Design | NAXIT',
      metaDescription: 'UI/UX design for apps and websites: wireframes, prototypes and developer-ready Figma files. NAXIT, Mannar, Sri Lanka.',
      h1: 'UI/UX Design Studio in Sri Lanka',
      intro: 'Good UI/UX design means a customer finds what they need in seconds. NAXIT researches how your buyers behave, sketches the flow, designs clean screens and tests them before any code is written. We designed and built ROP, a retail platform used by real shops, so we know how everyday users behave.',
      whatYouGetTitle: 'Core Capabilities',
      whatYouGet: [
        'User research and goal mapping for local and international markets',
        'Interactive wireframes and clickable prototypes',
        'Mobile app and website UI design with high visual fidelity',
        'Scalable design systems (colours, fonts, reusable components)',
        'Comprehensive developer hand-off specs'
      ],
      pricingHighlightTitle: 'Project Pricing',
      pricingHighlight: 'UI and web design are quoted per project after a free chat about what you need. Digital identity setup and strategy (logo, profiles, brand look across the internet) starts from LKR 5,000.',
      whyChooseTitle: 'Why choose NAXIT?',
      whyChoose: 'Local team that understands Sri Lankan buyers, WhatsApp-first communication, fair local pricing.',
      differenceTitle: 'What is the difference between UI and UX?',
      difference: 'UX is how the product works and feels. UI is how it looks. We do both.',
      faqs: [
        {
          question: 'How do you price UI/UX projects?',
          answer: 'UI and web design are quoted per project based on screen complexity and user flows after an initial discovery discussion. Fixed quotes ensure complete transparency.'
        },
        {
          question: 'Do you design for both web and mobile?',
          answer: 'Yes, we design responsive web platforms, iOS, and Android applications with scalable design tokens and component libraries.'
        }
      ],
      ctaButtonText: 'Discuss Your UI/UX Project',
      badge: 'Studio Design'
    },
    ta: {
      title: 'இலங்கையில் UI/UX டிசைன் | UI UX Design Sri Lanka | NAXIT',
      metaDescription: 'மொபைல் ஆப் மற்றும் வெப்சைட் நவீன UI/UX வடிவமைப்பு. பயனர்களை கவரும், பயன்படுத்த எளிதான டிசைன். திட்டத்திற்கு ஏற்ப விலை - NAXIT இலங்கை.',
      h1: 'பயனர்களை கவரும் UI/UX வடிவமைப்பு',
      intro: 'உங்கள் ஆப் அல்லது வெப்சைட் அழகாக இருப்பது மட்டும் போதாது - பயன்படுத்த எளிதாகவும் இருக்க வேண்டும். NAXIT ஆராய்ச்சியுடன் கூடிய, நவீன UI/UX வடிவமைப்பை திட்டத்திற்கு ஏற்ப விலையில் வழங்குகிறது.',
      whatYouGetTitle: 'நாங்கள் வழங்குவது',
      whatYouGet: [
        'மொபைல் ஆப் மற்றும் வெப் இடைமுக வடிவமைப்பு',
        'Wireframes முதல் இறுதி high-fidelity டிசைன் வரை',
        'பயனர் அனுபவத்தை மேம்படுத்தும் UX ஆலோசனை'
      ],
      pricingHighlightTitle: 'விலை விபரம்',
      pricingHighlight: 'UI மற்றும் வெப் வடிவமைப்பு திட்டத்தின் அளவைப் பொறுத்து நிலையான விலையில் வழங்கப்படும்.',
      faqs: [
        {
          question: 'விலை எவ்வளவு?',
          answer: 'UI/UX வடிவமைப்பு திட்டத்தின் அளவைப் பொறுத்தது. உங்கள் தேவையை WhatsApp இல் அனுப்புங்கள், நிலையான மதிப்பீடு தருகிறோம்.'
        }
      ],
      ctaButtonText: 'WhatsApp இல் ஆலோசிக்கவும்',
      badge: 'UI/UX நிபுணத்துவம்'
    },
    si: {
      title: 'ශ්‍රී ලංකාවේ UI/UX සැලසුම් | UI UX Design Sri Lanka | NAXIT',
      metaDescription: 'ජංගම යෙදුම් සහ වෙබ් අඩවි සඳහා නවීන UI/UX සැලසුම්. පරිශීලකයන් ආකර්ෂණය කරන, භාවිතයට පහසු සැලසුම්. ව්‍යාපෘතිය අනුව මිල - NAXIT ශ්‍රී ලංකා.',
      h1: 'පරිශීලකයන් ආකර්ෂණය කරන UI/UX සැලසුම්',
      intro: 'ඔබේ යෙදුම හෝ වෙබ් අඩවිය ලස්සන වීම පමණක් ප්‍රමාණවත් නොවේ - භාවිතයට පහසු විය යුතුය. NAXIT පර්යේෂණ සහිත, නවීන UI/UX සැලසුම් ව්‍යාපෘතියට ගැලපෙන මිලකට සපයයි.',
      whatYouGetTitle: 'අප සපයන දේ',
      whatYouGet: [
        'ජංගම යෙදුම් සහ වෙබ් අතුරුමුහුණත් සැලසුම්',
        'Wireframes සිට අවසාන high-fidelity සැලසුම දක්වා',
        'පරිශීලක අත්දැකීම වැඩිදියුණු කරන UX උපදේශනය'
      ],
      pricingHighlightTitle: 'මිල ගණන්',
      pricingHighlight: 'UI සහ වෙබ් සැලසුම් සඳහා ව්‍යාපෘතියේ පරිමාව අනුව ස්ථාවර මිලක් කලින් ලබා දේ.',
      faqs: [
        {
          question: 'මිල කීයද?',
          answer: 'UI/UX සැලසුම් ව්‍යාපෘතියේ පරිමාව මත රඳා පවතී. ඔබේ අවශ්‍යතාවය WhatsApp මඟින් එවන්න - ස්ථාවර මිල ගණනක් දෙමු.'
        }
      ],
      ctaButtonText: 'WhatsApp හරහා විමසන්න',
      badge: 'UI/UX සැලසුම්'
    }
  },
  {
    id: 'mannar-jaffna',
    slug: 'web-development-mannar-jaffna',
    aliases: ['website-development-mannar', 'web-development-mannar'],
    category: 'Northern Province Web Dev',
    isMannar: true,
    en: {
      title: 'Website Developer in Mannar & Jaffna | NAXIT',
      metaDescription: 'Website development for businesses in Mannar and Jaffna: fast, secure, mobile-ready sites with local support from NAXIT.',
      h1: 'Website Development in Mannar and Northern Sri Lanka',
      intro: 'NAXIT is based in Mannar. We build websites for businesses in Mannar, Vavuniya, Jaffna, Kilinochchi and Mullaitivu. Being local means we can meet you, visit your shop and understand your customers. Add your Google Business Profile and your site appears when people nearby search for your service.',
      whatYouGetTitle: 'Local Web Solutions',
      whatYouGet: [
        'Landing pages starting from LKR 5,000 with 3-day turnaround',
        'Simple, fast-loading websites built for regional shops and services',
        'Google Business Profile setup and Google Maps verification',
        'Direct Tamil, English, and Sinhala multilingual support',
        'In-person support in Mannar and Northern Province'
      ],
      pricingHighlightTitle: 'Local Investment',
      pricingHighlight: 'Landing pages from LKR 5,000. Full business sites and shop solutions quoted with fair, transparent local pricing.',
      faqs: [
        {
          question: 'Where is NAXIT located?',
          answer: 'We are based at 191, 11 Moor St, Mannar, Northern Province 41000, Sri Lanka, open 24 hours every day, and provide in-person local support across Mannar and Jaffna, and remote service island-wide.'
        },
        {
          question: 'Can you visit our shop to discuss the website?',
          answer: 'Yes! For businesses across Mannar and nearby Northern towns, we can visit your premises, understand your stock or services, and plan your site in person.'
        }
      ],
      ctaButtonText: 'Connect With Local Team',
      badge: 'Mannar & Jaffna'
    },
    ta: {
      title: 'மன்னார் & யாழ்ப்பாணம் வெப் டெவலப்மென்ட் | NAXIT',
      metaDescription: 'மன்னார் மற்றும் யாழ்ப்பாணத்தில் வணிகங்களுக்கு வலைத்தளம் உருவாக்க NAXIT. உள்ளூர் நிறுவனம், வேகமான டெலிவரி, நியாயமான விலை. WhatsApp இல் தொடர்பு கொள்ளுங்கள்.',
      h1: 'மன்னார் மற்றும் யாழ்ப்பாணத்தில் வலைத்தள உருவாக்கம்',
      intro: 'NAXIT மன்னாரில் அமைந்துள்ள இலங்கை டிஜிட்டல் நிறுவனம். வட மாகாணத்தின் வணிகங்கள் - கடைகள், ஹோட்டல்கள், சேவை நிறுவனங்கள் - தங்கள் வணிகத்தை இணையத்தில் கொண்டு வர நாங்கள் அருகிலேயே இருக்கிறோம். தமிழிலும், ஆங்கிலத்திலும், சிங்களத்திலும் உங்கள் வலைத்தளத்தை உருவாக்க முடியும்.',
      whatYouGetTitle: 'உள்ளூர் சேவைகள்',
      whatYouGet: [
        'லான்டிங் பக்கம் LKR 5,000 முதல் - 3 நாட்களில்',
        'உள்ளூர் வணிகங்களுக்கு ஏற்ற எளிய, வேகமான வலைத்தளங்கள்',
        'Google Business Profile அமைப்பு உதவியுடன்'
      ],
      pricingHighlightTitle: 'நியாயமான விலை',
      pricingHighlight: 'லான்டிங் பக்கங்கள் LKR 5,000 முதல். உள்ளூர் வணிகங்களுக்கான சிறப்பு சலுகைகள்.',
      faqs: [
        {
          question: 'நீங்கள் எங்கே அமைந்துள்ளீர்கள்?',
          answer: 'நாங்கள் மன்னாரில் அமைந்துள்ளோம்; இலங்கை முழுவதும் ஆன்லைனில் சேவை செய்கிறோம்.'
        }
      ],
      ctaButtonText: 'WhatsApp இல் தொடர்பு கொள்ளுங்கள்',
      badge: 'மன்னார் & யாழ்ப்பாணம்'
    },
    si: {
      title: 'මන්නාරම හා යාපනය වෙබ් සංවර්ධනය | NAXIT',
      metaDescription: 'මන්නාරම සහ යාපනයේ ව්‍යාපාර සඳහා වෙබ් අඩවි සාදන්න NAXIT. දේශීය සමාගම, වේගවත් බෙදාහැරීම, සාධාරණ මිල. WhatsApp හරහා අප අමතන්න.',
      h1: 'මන්නාරම සහ යාපනයේ වෙබ් අඩවි සෑදීම',
      intro: 'NAXIT මන්නාරමේ පිහිටි ශ්‍රී ලාංකික ඩිජිටල් සමාගමකි. උතුරු පළාතේ ව්‍යාපාර - කඩ, හෝටල්, සේවා ආයතන - ඔවුන්ගේ ව්‍යාපාර අන්තර්ජාලයට ගෙන ඒමට අපි ළඟින්ම සිටිමු. ඔබේ වෙබ් අඩවිය සිංහල, දෙමළ හෝ ඉංග්‍රීසි භාෂාවෙන් සාදා දිය හැක.',
      whatYouGetTitle: 'දේශීය සේවාවන්',
      whatYouGet: [
        'Landing page එකක් LKR 5,000 සිට - දින 3ක් තුළ',
        'දේශීය ව්‍යාපාරවලට ගැලපෙන සරල, වේගවත් වෙබ් අඩවි',
        'Google Business Profile සැකසීමේ උදව් සමඟ'
      ],
      pricingHighlightTitle: 'සාධාරණ දේශීය මිල',
      pricingHighlight: 'Landing page LKR 5,000 සිට දින 3කින්.',
      faqs: [
        {
          question: 'ඔබ පිහිටා ඇත්තේ කොහේද?',
          answer: 'අපි මන්නාරමේ පිහිටා ඇත; ශ්‍රී ලංකාව පුරා මාර්ගගතව සේවය කරමු.'
        }
      ],
      ctaButtonText: 'WhatsApp හරහා අමතන්න',
      badge: 'මන්නාරම සහ යාපනය'
    }
  },
  {
    id: 'rop-retail-software',
    slug: 'rop-retail-software-sri-lanka',
    aliases: ['retail-software-sri-lanka', 'rop-pos-sri-lanka'],
    category: 'Offline Retail POS',
    isRop: true,
    en: {
      title: 'Retail Software Sri Lanka | ROP Billing & Stock App | NAXIT',
      metaDescription: "ROP is NAXIT's billing and stock app for Sri Lankan retail shops. Works offline, plans from LKR 399. Free demo on WhatsApp.",
      h1: 'ROP: Billing and Stock Software for Shops Across Sri Lanka',
      intro: 'ROP helps retail shops, mini-marts, pharmacies and distributors anywhere in Sri Lanka run daily work on one screen. Whether your shop is in Colombo, Kandy, Jaffna, Galle or a small town, ROP works the same: make sales receipts fast, track stock on the shelf, record supplier bills and see how the day went. ROP is designed to work completely offline, on your device: billing, stock and daily reports all run with no internet connection. It runs on basic phones and tablets, with no complex setup and no expensive hardware.',
      whatYouGetTitle: 'What ROP does',
      whatYouGet: [
        'Quick counter billing and instant printable or digital receipts',
        'Real-time stock tracking with low-stock warning views',
        'Supplier bills, payment tracking, and purchase records',
        'Daily sales summary and automated end-of-day profit reports',
        '100% offline capability — never stops working when WiFi or power cuts strike'
      ],
      whoWeBuildForTitle: 'Made for Sri Lankan shops',
      whoWeBuildFor: 'ROP is built in Sri Lanka by NAXIT for the way local shops actually work: fast counter billing, simple stock counts, and clear daily totals for the owner. Support is in Sri Lanka too, over WhatsApp and phone, so help is always one message away.',
      pricingHighlightTitle: 'Simple, Affordable Pricing',
      pricingHighlight: 'Setup and registration is a one-time LKR 1,999, then LKR 399 per month. No expensive dedicated hardware needed and no hidden costs.',
      faqs: [
        {
          question: 'Who is ROP for?',
          answer: 'Small and medium retail shops, mini-marts, pharmacies and distributors in any part of Sri Lanka.'
        },
        {
          question: 'Does ROP need the internet to work?',
          answer: 'No. ROP is designed to work completely offline, on your device. You can bill customers, track stock and see daily totals with no internet connection at all.'
        },
        {
          question: 'What does it cost?',
          answer: 'Setup and registration is a one-time LKR 1,999, then LKR 399 per month. No expensive hardware and no hidden fees.'
        },
        {
          question: 'How do I get started?',
          answer: 'Message NAXIT on WhatsApp (+94 75 681 1228) and we will help you set up and get started in minutes.'
        }
      ],
      ctaButtonText: 'Contact us on WhatsApp to get ROP',
      badge: 'Works 100% Offline'
    },
    ta: {
      title: 'இலங்கை ரீடெய்ல் மென்பொருள் | ROP பில்லிங் & ஸ்டாக் ஆப் | NAXIT',
      metaDescription: 'ROP - இலங்கை முழுவதும் கடைகளுக்கான பில்லிங் மற்றும் ஸ்டாக் மென்பொருள். இணையம் இல்லாமலும் முழுமையாக வேலை செய்யும். செட் அப் LKR 1,999, மாதம் LKR 399 மட்டுமே.',
      h1: 'ROP - உங்கள் கடைக்கான முழுமையான ரீடெய்ல் மென்பொருள்',
      intro: 'கொழும்பு, கண்டி, யாழ்ப்பாணம், காலி - இலங்கையின் எந்தப் பகுதியிலும் உள்ள சில்லறை கடைகளுக்காக ROP உருவாக்கப்பட்டது. பில்லிங், ஸ்டாக் மேலாண்மை, தினசரி விற்பனை மொத்தம் - அனைத்தும் இணைய இணைப்பு இல்லாமல், உங்கள் சாதனத்திலேயே வேலை செய்யும்.',
      whatYouGetTitle: 'ROP இன் சிறப்பம்சங்கள்',
      whatYouGet: [
        'இணையம் தேவையில்லை - முழுமையாக ஆஃப்லைனில், on-device',
        'வேகமான பில்லிங் மற்றும் ரசீது',
        'ஸ்டாக் கண்காணிப்பு - எது தீர்ந்து வருகிறது என உடனே தெரியும்',
        'தினசரி விற்பனை மொத்தம் மற்றும் அறிக்கைகள்',
        'விலை: ஒரு முறை செட் அப் LKR 1,999 + மாதம் LKR 399'
      ],
      pricingHighlightTitle: 'விலை திட்டம்',
      pricingHighlight: 'ஒரு முறை பதிவு LKR 1,999 + மாதம் LKR 399 மட்டுமே. விலை உயர்ந்த உபகரணங்கள் தேவையில்லை.',
      faqs: [
        {
          question: 'இணையம் இல்லாமல் ROP வேலை செய்யுமா?',
          answer: 'ஆம். ROP முழுமையாக ஆஃப்லைனில், உங்கள் சாதனத்திலேயே வேலை செய்யும் - பில்லிங், ஸ்டாக், தினசரி மொத்தம் அனைத்தும் இணையம் இல்லாமல்.'
        },
        {
          question: 'ROP இன் விலை எவ்வளவு?',
          answer: 'செட் அப் மற்றும் பதிவு LKR 1,999 (ஒரு முறை), அதன் பின் மாதம் LKR 399 மட்டுமே. ROP பெற WhatsApp இல் எங்களை தொடர்பு கொள்ளுங்கள்.'
        }
      ],
      ctaButtonText: 'ROP பெற WhatsApp இல் தொடர்பு கொள்ளுங்கள்',
      badge: 'முழுமையான ஆஃப்லைன்'
    },
    si: {
      title: 'ශ්‍රී ලංකා සිල්ලර මෘදුකාංගය | ROP බිල්පත් සහ තොග ඇප් | NAXIT',
      metaDescription: 'ROP - ශ්‍රී ලංකාව පුරා කඩ සඳහා බිල්පත් සහ තොග මෘදුකාංගය. අන්තර්ජාලය නොමැතිවත් සම්පූර්ණයෙන් ක්‍රියා කරයි. සැකසුම LKR 1,999, මාසිකව LKR 399 පමණි.',
      h1: 'ROP - ඔබේ කඩය සඳහා සම්පූර්ණ සිල්ලර මෘදුකාංගය',
      intro: 'කොළඹ, මහනුවර, යාපනය, ගාල්ල - ශ්‍රී ලංකාවේ ඕනෑම ප්‍රදේශයක සිල්ලර කඩ සඳහා ROP සාදා ඇත. බිල්පත, තොග කළමනාකරණය, දෛනික විකුණුම් එකතුව - සියල්ල අන්තර්ජාලය නොමැතිව, ඔබේ උපකරණයේම ක්‍රියා කරයි.',
      whatYouGetTitle: 'ROP මඟින් ලැබෙන පහසුකම්',
      whatYouGet: [
        'අන්තර්ජාලය අවශ්‍ය නැහැ - සම්පූර්ණයෙන් offline, on-device',
        'වේගවත් බිල්පත සහ රිසිට්පත',
        'තොග නිරීක්ෂණය - මොනවා හිඟ වෙද්දී කියලා එකපාරටම දැනගන්න',
        'දෛනික විකුණුම් එකතුව සහ වාර්තා',
        'මිල: එක් වරක් සැකසුම LKR 1,999 + මාසිකව LKR 399'
      ],
      pricingHighlightTitle: 'පහසු මිල',
      pricingHighlight: 'ලියාපදිංචිය LKR 1,999 (එක් වරක්) සහ මසකට LKR 399 පමණි.',
      faqs: [
        {
          question: 'අන්තර්ජාලය නොමැතිව ROP වැඩ කරයිද?',
          answer: 'ඔව්. ROP සම්පූර්ණයෙන් offline, ඔබේ උපකරණයේම වැඩ කරයි - බිල්පත, තොග, දෛනික එකතුව සියල්ල අන්තර්ජාලය නොමැතිව.'
        },
        {
          question: 'ROP මිල කීයද?',
          answer: 'සැකසුම සහ ලියාපදිංචිය LKR 1,999 (එක් වරක්), ඉන්පසු මාසිකව LKR 399 පමණි. ROP ලබාගැනීමට WhatsApp හරහා අප අමතන්න.'
        }
      ],
      ctaButtonText: 'ROP ලබාගැනීමට WhatsApp හරහා අමතන්න',
      badge: '100% Offline'
    }
  },
  {
    id: 'graphic-design-branding',
    slug: 'graphic-design-branding-sri-lanka',
    aliases: ['graphic-design-sri-lanka', 'branding-sri-lanka'],
    category: 'Graphic & Branding',
    en: {
      title: 'Graphic Design Sri Lanka | Logos & Branding | NAXIT',
      metaDescription: 'Logos, flyers, social posts and full brand kits. Graphic design from LKR 500, delivered within a day. NAXIT, Sri Lanka.',
      h1: 'Graphic Design and Branding for Sri Lankan Businesses',
      intro: 'A clean logo and a consistent look make a small business look established. NAXIT designs logos, business cards, flyers, social media posts and full brand kits for shops, startups and events across Sri Lanka.',
      whatYouGetTitle: 'Packages & Turnaround',
      whatYouGet: [
        'Graphic designs from LKR 500, delivered within a single day',
        'Complete branding packages from LKR 1,000, delivered in 1 week',
        'Digital identity setup and strategy from LKR 5,000, ready in 2 to 3 days',
        'High-resolution vector files ready for print and screen',
        'Fast turnaround with WhatsApp-first communication'
      ],
      pricingHighlightTitle: 'Confirmed Pricing',
      pricingHighlight: 'Graphic designs from LKR 500 (within a day). Branding packages from LKR 1,000 (1 week). Digital identity strategy from LKR 5,000 (2-3 days).',
      faqs: [
        {
          question: 'How do I order?',
          answer: 'Message us on WhatsApp (+94 75 681 1228) with what you need. We confirm the price before starting and share drafts for your review.'
        },
        {
          question: 'How fast do you deliver branding assets?',
          answer: 'Basic graphic design tasks are completed within a day. Comprehensive branding packages are delivered in approximately 1 week.'
        }
      ],
      ctaButtonText: 'Get Design Quote on WhatsApp',
      badge: 'From LKR 500'
    },
    ta: {
      title: 'கிராபிக் டிசைன் & பிராண்டிங் இலங்கை | NAXIT',
      metaDescription: 'லோகோ, போஸ்டர், சோஷியல் மீடியா டிசைன் LKR 500 முதல் - ஒரே நாளில் டெலிவரி. பிராண்டிங் தொகுப்புகள் LKR 1,000 முதல் - 1 வாரத்தில். NAXIT இலங்கை.',
      h1: 'கிராபிக் டிசைன் மற்றும் பிராண்டிங் சேவைகள்',
      intro: 'உங்கள் வணிகத்திற்கு கவர்ச்சியான லோகோ, போஸ்டர், சோஷியல் மீடியா போஸ்ட்கள் மற்றும் முழுமையான பிராண்ட் அடையாளம் - அனைத்தும் ஒரே இடத்தில்.',
      whatYouGetTitle: 'வழங்கப்படும் சேவைகள்',
      whatYouGet: [
        'கிராபிக் டிசைன்கள் LKR 500 முதல் - ஒரு நாளுக்குள் டெலிவரி',
        'பிராண்டிங் தொகுப்புகள் LKR 1,000 முதல் - 1 வாரத்தில் டெலிவரி',
        'டிஜிட்டல் ஐடென்டிட்டி செட் அப் & ஸ்ட்ராடஜி LKR 5,000 முதல் - 2-3 நாட்களில்'
      ],
      pricingHighlightTitle: 'விலை மற்றும் காலம்',
      pricingHighlight: 'கிராபிக் டிசைன் LKR 500 முதல் (1 நாள்). பிராண்டிங் LKR 1,000 முதல் (1 வாரம்).',
      faqs: [
        {
          question: 'எவ்வளவு விரைவில் கிடைக்கும்?',
          answer: 'அடிப்படை கிராபிக் டிசைன் பணிகள் ஒரே நாளில் முடிவடையும். பிராண்டிங் பணிகள் 1 வாரம் எடுக்கும்.'
        }
      ],
      ctaButtonText: 'WhatsApp இல் ஆர்டர் செய்ய',
      badge: 'LKR 500 முதல்'
    },
    si: {
      title: 'ග්‍රැෆික් සැලසුම් හා බ්‍රෑන්ඩින් ශ්‍රී ලංකා | NAXIT',
      metaDescription: 'ලාංඡන, පෝස්ටර්, සමාජ මාධ්‍ය සැලසුම් LKR 500 සිට - එක දිනකින් බෙදාහැරීම. බ්‍රෑන්ඩින් පැකේජ LKR 1,000 සිට - සතියක් තුළ. NAXIT ශ්‍රී ලංකා.',
      h1: 'ග්‍රැෆික් සැලසුම් සහ බ්‍රෑන්ඩින් සේවා',
      intro: 'ඔබේ ව්‍යාපාරයට ආකර්ෂණීය ලාංඡන, පෝස්ටර්, සමාජ මාධ්‍ය පෝස්ට් සහ සම්පූර්ණ සන්නාම අනන්‍යතාවය - සියල්ල එකම තැනකින්.',
      whatYouGetTitle: 'අප සපයන පැකේජ',
      whatYouGet: [
        'ග්‍රැෆික් සැලසුම් LKR 500 සිට - එක දිනක් තුළ බෙදාහැරීම',
        'බ්‍රෑන්ඩින් පැකේජ LKR 1,000 සිට - සති 1 ක් තුළ බෙදාහැරීම',
        'Digital identity setup සහ strategy LKR 5,000 සිට - දින 2-3ක්'
      ],
      pricingHighlightTitle: 'මිල සහ කාලසීමා',
      pricingHighlight: 'ග්‍රැෆික් සැලසුම් LKR 500 සිට (දින 1කින්). බ්‍රෑන්ඩින් LKR 1,000 සිට (සති 1කින්).',
      faqs: [
        {
          question: 'කොච්චර ඉක්මනින් ලැබේද?',
          answer: 'මූලික ග්‍රැෆික් සැලසුම් වැඩ එකම දිනකින් අවසන් වේ. බ්‍රෑන්ඩින් වැඩ සතියක් ගන්නවා.'
        }
      ],
      ctaButtonText: 'WhatsApp හරහා ඇණවුම් කරන්න',
      badge: 'LKR 500 සිට'
    }
  },
  {
    id: 'mobile-app-dev',
    slug: 'mobile-app-development-sri-lanka',
    aliases: ['app-development-sri-lanka'],
    category: 'Mobile Applications',
    en: {
      title: 'Mobile App Development Sri Lanka | Android Apps | NAXIT',
      metaDescription: 'Android and iOS app development from idea to Play Store. Fast, affordable mobile apps for Sri Lankan businesses.',
      h1: 'Mobile App Development for Sri Lankan Businesses',
      intro: 'With hands-on experience building our own products like ROP, NAXIT turns your business concept into a fast, reliable Android mobile application - from initial architecture to Google Play deployment.',
      whatYouGetTitle: 'App Engineering Scope',
      whatYouGet: [
        'Custom Android mobile app design and development',
        'Predictable fixed project pricing and phased milestones',
        'Comprehensive Google Play Store publishing and verification guidance',
        'Offline-first and local network architecture expertise'
      ],
      pricingHighlightTitle: 'Transparent Quotation',
      pricingHighlight: 'Mobile app projects are quoted with transparent fixed costs according to desired feature set, database scope, and integration requirements.',
      faqs: [
        {
          question: 'How much does mobile app development cost?',
          answer: 'App project pricing depends on specific features and integrations. Share your requirements on WhatsApp for a clear, fixed project estimate.'
        },
        {
          question: 'How do we get started?',
          answer: 'Send us your app idea on WhatsApp (+94 75 681 1228). We discuss your user flow, recommend features, and provide a detailed timeline.'
        }
      ],
      ctaButtonText: 'Discuss Your App Idea on WhatsApp',
      badge: 'Android Engineering'
    },
    ta: {
      title: 'மொபைல் ஆப் டெவலப்மென்ட் இலங்கை | NAXIT',
      metaDescription: 'இலங்கையில் Android மொபைல் ஆப்கள் வடிவமைப்பு மற்றும் உருவாக்கம். ROP போன்ற உண்மையான தயாரிப்புகளை உருவாக்கிய அனுபவம். திட்டத்திற்கு ஏற்ப விலை - NAXIT.',
      h1: 'உங்கள் வணிகத்திற்கான மொபைல் ஆப் உருவாக்கம்',
      intro: 'ROP போன்ற சொந்த தயாரிப்புகளை உருவாக்கிய அனுபவத்துடன், NAXIT உங்கள் வணிக யோசனையை Android மொபைல் ஆப்பாக மாற்றுகிறது - யோசனை முதல் Google Play வெளியீடு வரை.',
      whatYouGetTitle: 'வழங்கப்படும் சேவைகள்',
      whatYouGet: [
        'Android ஆப் வடிவமைப்பு மற்றும் டெவலப்மென்ட்',
        'திட்டத்திற்கு ஏற்ப நிலையான விலை மற்றும் கால அட்டவணை',
        'Google Play வெளியிடும் வழிகாட்டுதல்'
      ],
      pricingHighlightTitle: 'திட்ட மதிப்பீடு',
      pricingHighlight: 'உங்கள் யோசனைக்கேற்ப நிலையான திட்ட மதிப்பீடு வழங்கப்படும்.',
      faqs: [
        {
          question: 'விலை எவ்வளவு?',
          answer: 'ஆப் திட்டங்கள் அவற்றின் அம்சங்களைப் பொறுத்தது. உங்கள் யோசனையை பகிருங்கள் - நிலையான மதிப்பீடு தருகிறோம்.'
        }
      ],
      ctaButtonText: 'WhatsApp இல் பகிருங்கள்',
      badge: 'மொபைல் ஆப்'
    },
    si: {
      title: 'ජංගම යෙදුම් සංවර්ධනය ශ්‍රී ලංකා | NAXIT',
      metaDescription: 'ශ්‍රී ලංකාවේ Android ජංගම යෙදුම් සැලසුම් සහ සංවර්ධනය. ROP වැනි සැබෑ නිෂ්පාදන හදපු පළපුරුද්ද. ව්‍යාපෘතිය අනුව මිල - NAXIT.',
      h1: 'ඔබේ ව්‍යාපාරයට ජංගම යෙදුමක් සෑදීම',
      intro: 'ROP වැනි තමන්ගේම නිෂ්පාදන හදපු පළපුරුද්දෙන්, NAXIT ඔබේ ව්‍යාපාර අදහස Android ජංගම යෙදුමක් බවට පත් කරයි - අදහස සිට Google Play නිකුත් කිරීම දක්වා.',
      whatYouGetTitle: 'අප සපයන සේවා',
      whatYouGet: [
        'Android යෙදුම් සැලසුම් සහ සංවර්ධනය',
        'ව්‍යාපෘතිය අනුව ස්ථාවර මිල සහ කාලසටහන',
        'Google Play නිකුත් කිරීමේ මඟපෙන්වීම'
      ],
      pricingHighlightTitle: 'ව්‍යාපෘති මිල',
      pricingHighlight: 'විශේෂාංග මත පදනම්ව ස්ථාවර මිලක් කලින් ලබා දේ.',
      faqs: [
        {
          question: 'මිල කීයද?',
          answer: 'යෙදුම් ව්‍යාපෘති ඒවායේ විශේෂාංග මත රඳා පවතී. ඔබේ අදහස බෙදාගන්න - ස්ථාවර මිල ගණනක් දෙමු.'
        }
      ],
      ctaButtonText: 'WhatsApp හරහා අදහස බෙදාගන්න',
      badge: 'ජංගම යෙදුම්'
    }
  }
];

export const CONFIRMED_PRICE_LIST = [
  {
    service: 'Graphic designs',
    serviceTa: 'கிராபிக் டிசைன்கள்',
    serviceSi: 'ග්‍රැෆික් සැලසුම්',
    startingPrice: 'From LKR 500',
    deliveryTime: 'Within a day',
    deliveryTimeTa: 'ஒரே நாளில்',
    deliveryTimeSi: 'එක දිනකින්',
    slug: 'graphic-design-branding-sri-lanka'
  },
  {
    service: 'Branding',
    serviceTa: 'பிராண்டிங்',
    serviceSi: 'බ්‍රෑන්ඩින්',
    startingPrice: 'From LKR 1,000',
    deliveryTime: '1 week',
    deliveryTimeTa: '1 வாரம்',
    deliveryTimeSi: 'සති 1ක්',
    slug: 'graphic-design-branding-sri-lanka'
  },
  {
    service: 'Static website / landing page',
    serviceTa: 'ஸ்டாடிக் வலைத்தளம் / லான்டிங் பக்கம்',
    serviceSi: 'ස්ථාවර වෙබ් අඩවි / landing page',
    startingPrice: 'From LKR 5,000',
    deliveryTime: 'Within 3 days',
    deliveryTimeTa: '3 நாட்களில்',
    deliveryTimeSi: 'දින 3ක් තුළ',
    slug: 'web-design-sri-lanka'
  },
  {
    service: 'Digital identity setup & strategy',
    serviceTa: 'டிஜிட்டல் ஐடென்டிட்டி செட் அப் & ஸ்ட்ராடஜி',
    serviceSi: 'Digital identity setup සහ strategy',
    startingPrice: 'From LKR 5,000',
    deliveryTime: '2 to 3 days',
    deliveryTimeTa: '2-3 நாட்களில்',
    deliveryTimeSi: 'දින 2-3ක්',
    slug: 'web-development-mannar-jaffna'
  },
  {
    service: 'Web design & UI design',
    serviceTa: 'வெப் வடிவமைப்பு & UI வடிவமைப்பு',
    serviceSi: 'වෙබ් සැලසුම් සහ UI සැලසුම්',
    startingPrice: 'Quoted per project',
    deliveryTime: 'Agreed per project',
    deliveryTimeTa: 'திட்டத்திற்கு ஏற்ப',
    deliveryTimeSi: 'එකඟ වූ කාලසටහනට අනුව',
    slug: 'ui-ux-design-sri-lanka'
  },
  {
    service: 'ROP retail software',
    serviceTa: 'ROP ரீடெய்ல் மென்பொருள்',
    serviceSi: 'ROP සිල්ලර මෘදුකාංගය',
    startingPrice: '1,999 setup + 399/month',
    deliveryTime: 'Works fully offline, on-device',
    deliveryTimeTa: 'முழுமையாக ஆஃப்லைனில்',
    deliveryTimeSi: 'සම්පූර්ණයෙන් offline',
    slug: 'rop-retail-software-sri-lanka'
  }
];

export const getSeoPage = (slug: string): SeoPageData | undefined => {
  return SEO_PAGES.find(p => p.slug === slug || p.aliases.includes(slug));
};

