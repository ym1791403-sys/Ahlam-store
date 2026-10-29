// Ahlam Store - Global Fashion & Bags Store Data
const STORE_DATA = {
  brand: {
    name: "Ahlam Store",
    nameAr: "متجر أحلام (Ahlam Store)",
    sloganEn: "CONTEMPORARY AVANT-GARDE LEATHERWEAR",
    sloganAr: "تصاميم جلدية عصرية تُعيد صياغة حضوركِ",
    taglineEn: "Not just a bag. An architectural statement for the modern icon.",
    taglineAr: "ليست مجرد حقيبة.. إنها تحفة معمارية صُممت لأيقونة العصر."
  },

  currencies: {
    USD: { symbol: "$", rate: 1, label: "USD ($)" },
    SAR: { symbol: "ر.س", rate: 3.75, label: "SAR (ر.س)" },
    AED: { symbol: "د.إ", rate: 3.67, label: "AED (د.إ)" },
    EGP: { symbol: "ج.م", rate: 49.5, label: "EGP (ج.م)" }
  },

  products: [
    {
      id: "ahlam-prism-luna",
      name: "The Prism Luna Crescent",
      nameAr: "حقيبة لونا المنشورية",
      priceUSD: 340,
      originalPriceUSD: 390,
      badge: "RUNWAY EXCLUSIVE",
      badgeAr: "حصري من منصة العرض",
      category: "crossbody",
      categoryAr: "كروس بودي",
      rating: 4.9,
      reviewsCount: 128,
      capacityLimit: 55,
      materialEn: "Sculpted Italian Calfskin & Chrome Hardware",
      materialAr: "جلد عجل إيطالي مصقول مع إكسسوارات كروم لماعة",
      dimensions: "26cm x 15cm x 7cm",
      weight: "480g",
      colors: [
        { name: "Cognac Amber", nameAr: "عنبري كونياك فاخر", hex: "#c5a059", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
        { name: "Liquid Chrome", nameAr: "كروم سائل فضي", hex: "#d1d5db", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80" },
        { name: "Obsidian Noir", nameAr: "أسود بركاني فاخر", hex: "#111827", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" }
      ],
      descriptionEn: "Sharp geometric curves meet fluid ergonomic luxury. The Prism Luna cradles your daily essentials while creating an impossible-to-miss focal point for any silhouette.",
      descriptionAr: "انحناءات هندسية جريئة تلتقي مع انسيابية فاخرة ومريحة. تحتضن لونا متعلقاتكِ اليومية بأناقة وتتحول لمحور الجاذبية في كل إطلالة.",
      lookbookTags: ["streetwear", "midnight_gala"]
    },
    {
      id: "ahlam-cyber-baguette",
      name: "The Cyber Baguette",
      nameAr: "حقيبة سايبر باجيت",
      priceUSD: 290,
      originalPriceUSD: 330,
      badge: "TRENDING NOW",
      badgeAr: "الأكثر طلباً",
      category: "shoulder",
      categoryAr: "حقيبة كتف",
      rating: 4.8,
      reviewsCount: 94,
      capacityLimit: 45,
      materialEn: "High-Gloss Mirrored Patent Leather with Custom Buckle",
      materialAr: "جلد ورنيش لماع فائق البريق مع إبزيم معدني مخصص",
      dimensions: "28cm x 13cm x 5cm",
      weight: "410g",
      colors: [
        { name: "Cyber Lilac", nameAr: "ليلكي حريري", hex: "#a78bfa", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" },
        { name: "Gloss Noir", nameAr: "أسود ملكي لامع", hex: "#0a0a0c", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" },
        { name: "Champagne Silk", nameAr: "حرير الشامبين", hex: "#dfba89", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" }
      ],
      descriptionEn: "A 90s cult classic re-engineered for the digital age. Compact, razor-sharp edge with a featherweight shoulder strap that stays comfortably anchored.",
      descriptionAr: "إعادة إحياء لأيقونة التسعينيات برؤية رقمية مستقبلية حادة. خفيفة على الكتف وتمنحكِ مظهراً مفعماً بالثقة والانطلاق.",
      lookbookTags: ["streetwear", "power_tailoring"]
    },
    {
      id: "ahlam-quilted-monolith",
      name: "The Quilted Monolith Maxi",
      nameAr: "حقيبة مونوليث ماكسي المبطنة",
      priceUSD: 420,
      originalPriceUSD: 480,
      badge: "EDITOR'S PICK",
      badgeAr: "اختيار مديرة التحرير",
      category: "tote",
      categoryAr: "حقيبة يد كبيرة / توت",
      rating: 5.0,
      reviewsCount: 167,
      capacityLimit: 95,
      materialEn: "Plush Nappa Lambskin with Ultra-Light Puffer Fill",
      materialAr: "جلد خراف نابا فائق النعومة مع حشوة بافر ريشية خفيفة",
      dimensions: "38cm x 28cm x 14cm",
      weight: "620g",
      colors: [
        { name: "Midnight Charcoal", nameAr: "رمادي فحمي", hex: "#1f2937", image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=900&q=80" },
        { name: "Bone White", nameAr: "أبيض عاجي ملكي", hex: "#f3f4f6", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
        { name: "Tangerine Flash", nameAr: "برتقالي متوهج", hex: "#ea580c", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" }
      ],
      descriptionEn: "The luxury pillow silhouette made for modern mavens. Carries a 13-inch laptop, tablet, vanity kit, and documents effortlessly without losing its dramatic plush volume.",
      descriptionAr: "تصميم وسائدي فاخر صُمم للمرأة القيادية العصرية. يتسع للاب توب 13 بوصة والأوراق ومستحضرات التجميل دون أن يفقد مظهره الهندسي المنتفخ الفاخر.",
      lookbookTags: ["power_tailoring", "streetwear"]
    },
    {
      id: "ahlam-obsidian-hourglass",
      name: "The Obsidian Hourglass",
      nameAr: "حقيبة أوبسيديان الزجاجية المعمارية",
      priceUSD: 380,
      originalPriceUSD: 440,
      badge: "AVANT-GARDE",
      badgeAr: "تصميم طليعي",
      category: "clutch",
      categoryAr: "كلاتش وسهرة",
      rating: 4.9,
      reviewsCount: 78,
      capacityLimit: 48,
      materialEn: "Matte Structured Box-Calf with Palladium Hardware",
      materialAr: "جلد بوكس-كالف غير لامع مع إكسسوارات بالاديوم بلاتينية",
      dimensions: "24cm x 16cm x 8cm",
      weight: "510g",
      colors: [
        { name: "Velvet Obsidian", nameAr: "أسود أوبسيديان مخملي", hex: "#0f172a", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" },
        { name: "Gilded Emerald", nameAr: "أخضر زمردي مذهب", hex: "#065f46", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" }
      ],
      descriptionEn: "An architectural sculpture masquerading as a handbag. Its asymmetric flared base turns any gala or black-tie soirée into a personal runway entrance.",
      descriptionAr: "قطعة فنية معمارية تتجسد في هيئة حقيبة يد. قاعدتها العريضة غير المتماثلة تحول أي أمسية أو حفل عشاء إلى منصة استعراض خاصة بكِ.",
      lookbookTags: ["midnight_gala"]
    },
    {
      id: "ahlam-emerald-kinetic",
      name: "The Kinetic Mini Prism",
      nameAr: "حقيبة كينيتك مينى بريزم",
      priceUSD: 260,
      originalPriceUSD: 300,
      badge: "MICRO BAG",
      badgeAr: "مايكرو باج",
      category: "micro",
      categoryAr: "مايكرو وصغيرة",
      rating: 4.7,
      reviewsCount: 112,
      capacityLimit: 32,
      materialEn: "Jeweled Croc-Embossed Vegan Leather with Detachable Coin Charm",
      materialAr: "جلد نباتي منقوش بطبعة التمساح الفاخر مع محفظة عملات معدنية قابلة للفصل",
      dimensions: "18cm x 12cm x 6cm",
      weight: "320g",
      colors: [
        { name: "Emerald Royale", nameAr: "أخضر زمردي ملكي", hex: "#047857", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" },
        { name: "Sunset Gold", nameAr: "ذهبي غروب الشمس", hex: "#f59e0b", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80" },
        { name: "Pure Onyx", nameAr: "أونيكس نقي", hex: "#000000", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" }
      ],
      descriptionEn: "Small size, immense attitude. Engineered to hold your phone, cards, and favorite gloss while keeping you unrestricted on dancefloors and art openings.",
      descriptionAr: "حجم صغير وحضور طاغٍ. صُممت لتتسع لهاتفك وبطاقاتك وملمع شفاهك المفضل، لتمنحكِ خفة وحرية مطلقة في كل مناسبة.",
      lookbookTags: ["resort_brunch", "midnight_gala"]
    },
    {
      id: "ahlam-solar-crescent",
      name: "The Solar Arch Shoulder Bag",
      nameAr: "حقيبة القوس الشمسي للكتف",
      priceUSD: 310,
      originalPriceUSD: 360,
      badge: "NEW DROP",
      badgeAr: "إصدار جديد",
      category: "shoulder",
      categoryAr: "حقيبة كتف",
      rating: 4.9,
      reviewsCount: 83,
      capacityLimit: 60,
      materialEn: "Semi-Matte Calf Leather with Ergonomic Integrated Arch Handle",
      materialAr: "جلد عجل نصف لامع بمقبض قوسي انسيابي مدمج",
      dimensions: "30cm x 18cm x 7cm",
      weight: "460g",
      colors: [
        { name: "Solar Saffron", nameAr: "زعفراني مشمس", hex: "#f97316", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
        { name: "Chalk Cream", nameAr: "كريمي طباشيري", hex: "#fef3c7", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" }
      ],
      descriptionEn: "Embrace warmth and structural boldness. Its flowing ergonomic arch hugs the torso seamlessly whether worn on the shoulder or cradled as an oversized clutch.",
      descriptionAr: "عانقي الدفء والجرأة الهندسية. تصميمها القوسي ينساب مع حركة الجسد بسلاسة مذهلة سواء حُملت على الكتف أو احتضنتيها ككلاتش جريء.",
      lookbookTags: ["resort_brunch", "streetwear"]
    }
  ],

  lookbookStyles: [
    {
      id: "streetwear",
      name: "Noir City Streets",
      nameAr: "المشهد الأول: شوارع نوار العصرية",
      taglineEn: "Deconstructed layers, slate charcoal tones, and sharp sculptural metal accents.",
      taglineAr: "طبقات متحررة، درجات الفحم الأردوازي، وتفاصيل معدنية مصقولة بأناقة عواصم الموضة.",
      modelImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      palette: ["#c5a059", "#0f172a", "#d1d5db"],
      outfitPiecesEn: [
        "Oversized Deconstructed Trench in Slate Gray",
        "Chunky Platform Sculptural Lug-Boots",
        "Narrow Cybernetic Shield Eyewear"
      ],
      outfitPiecesAr: [
        "ترنش كوت فضفاض بتصميم معاصر باللون الرمادي الأردوازي",
        "بوت ضخم بقاعدة هندسية بارزة",
        "نظارة شمسية رفيعة مستوحاة من المستقبل"
      ],
      pairingBagId: "ahlam-cyber-baguette",
      matchScore: 98,
      stylingNoteEn: "The high-gloss patent finish delivers an electric reflective pop against matte heavy cotton trench coats.",
      stylingNoteAr: "البريق الفائق لجلد الورنيش يصنع تبايناً بصرياً مبهراً مع الأقمشة القطنية الثقيلة والمعاطف الفضفاضة."
    },
    {
      id: "midnight_gala",
      name: "Midnight Black-Tie Gala",
      nameAr: "المشهد الثاني: سهرة السجادة الحمراء",
      taglineEn: "Architectural luxury replacing conventional jewelry with pure form and fluid satin.",
      taglineAr: "فخامة معمارية تعوض المجوهرات التقليدية بخطوط هندسية ساحرة وأقمشة الساتان الملكي.",
      modelImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
      palette: ["#0f172a", "#d1d5db", "#c5a059"],
      outfitPiecesEn: [
        "Draped Floor-Length Satin Column Gown in Noir",
        "Minimalist Razor-Thin Stiletto Heels",
        "Palladium Sculptural Ear Cuffs"
      ],
      outfitPiecesAr: [
        "فستان سهرة ماكسي منسدل من الساتان الأسود الفاخر",
        "حذاء بكعب رفيع مينيمالي حاد",
        "أقراط أذن عصرية بتصميم بلاتيني هندسي"
      ],
      pairingBagId: "ahlam-obsidian-hourglass",
      matchScore: 99,
      stylingNoteEn: "The flared asymmetric base creates a theatrical silhouette that looks sublime under ambient evening spotlighting.",
      stylingNoteAr: "القاعدة العريضة غير المتماثلة تخلق ظلاً مسرحياً ساحراً تحت إضاءات السهرة وحفلات العشاء الراقية."
    },
    {
      id: "power_tailoring",
      name: "Executive Couture",
      nameAr: "المشهد الثالث: كوتور الإدارة والقيادة",
      taglineEn: "Reinvented corporate authority with razor precision and tactile opulent leather.",
      taglineAr: "حضور مهيب يجمع الدقة الهندسية للبدلات مع نعومة أفخم الجلود الإيطالية.",
      modelImage: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=80",
      palette: ["#1f2937", "#f3f4f6", "#c5a059"],
      outfitPiecesEn: [
        "Double-Breasted Hourglass Wool Blazer",
        "Wide-Leg Pleated Tailored Trousers",
        "Brushed Platinum Wrist Armor Watch"
      ],
      outfitPiecesAr: [
        "بليزر صوف بقصة كلاسيكية مزدوجة ومحددة الخصر",
        "بنطلون قماش بقصة واسعة وثنيات أمامية أنيقة",
        "ساعة يد عريضة من البلاتين المصقول"
      ],
      pairingBagId: "ahlam-quilted-monolith",
      matchScore: 97,
      stylingNoteEn: "Combines high boardroom utility with supreme plush softness, breaking stiff tailoring with effortless poise.",
      stylingNoteAr: "تجمع بين العملية الفائقة لاحتواء الأجهزة والملفات مع النعومة الفاخرة التي تكسر جمود بدلات العمل الرسمية."
    },
    {
      id: "resort_brunch",
      name: "Riviera Sunset",
      nameAr: "المشهد الرابع: غروب شمس الريفيرا",
      taglineEn: "Warm golden hues, airy organic textures, and cinematic sunset attitude.",
      taglineAr: "درجات دافئة مشمسة وتناغم ناعم مع أقمشة الكتان والحرير الفاخرة.",
      modelImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      palette: ["#c5a059", "#fef3c7", "#047857"],
      outfitPiecesEn: [
        "Raw Silk Halter Top with Open Back",
        "Breezy Sand-Hued Tailored Linen Culottes",
        "Amber Tortoiseshell Cat-Eye Eyewear"
      ],
      outfitPiecesAr: [
        "توب حرير خام برباط عنق وظهر مكشوف",
        "بنطلون كتان صيفي واسع بلون الرمال الناعمة",
        "نظارة شمسية كلاسيكية بنقشة التايجر الكهرمانية"
      ],
      pairingBagId: "ahlam-solar-crescent",
      matchScore: 99,
      stylingNoteEn: "The solar saffron curve captures sunlight in motion, elevating natural neutral linens into high-street art.",
      stylingNoteAr: "اللون البرتقالي الزعفراني يتناغم مع ضوء الشمس ويحول درجات الكتان الحيادية إلى لوحة فنية ساحرة."
    }
  ],

  // Interactive "What fits inside" items
  capacityItems: [
    { id: "phone", name: "iPhone 16 Pro Max", nameAr: "آيفون 16 برو ماكس", size: 18, icon: "📱", isEssential: true },
    { id: "sunglasses", name: "Designer Sunglasses Case", nameAr: "نظارة شمسية في علبتها", size: 16, icon: "🕶️", isEssential: false },
    { id: "cardholder", name: "Slim Leather Cardholder", nameAr: "محفظة بطاقات جلدية نحيفة", size: 9, icon: "💳", isEssential: true },
    { id: "keys", name: "Car Key Fob & House Keys", nameAr: "مفتاح السيارة والمفاتيح", size: 8, icon: "🔑", isEssential: true },
    { id: "lipstick", name: "Luxury Matte Lipstick & Mirror", nameAr: "روج مات ومرآة يد صغيرة", size: 8, icon: "💄", isEssential: true },
    { id: "perfume", name: "Pocket Atomizer Perfume", nameAr: "زجاجة عطر للجيب (10ml)", size: 8, icon: "✨", isEssential: false },
    { id: "airpods", name: "AirPods Pro Case", nameAr: "سماعات إيربودز برو", size: 7, icon: "🎧", isEssential: false },
    { id: "powerbank", name: "Magnetic Slim Powerbank", nameAr: "باور بانك مغناطيسي نحيف", size: 14, icon: "🔋", isEssential: false },
    { id: "handcream", name: "Nourishing Hand Balm", nameAr: "كريم يد مرطب صغير", size: 10, icon: "🧴", isEssential: false }
  ],

  reviews: [
    {
      author: "Nadine E.",
      location: "Dubai, UAE",
      rating: 5,
      commentEn: "The Cyber Baguette in Lilac is unmatched. People stop me on streets to ask where it's from!",
      commentAr: "حقيبة السايبر باجيت بلون الليلك خيالية تماماً! الناس في الشارع والمطاعم بتسألني جايباها منين!"
    },
    {
      author: "Lina K.",
      location: "Riyadh, KSA",
      rating: 5,
      commentEn: "The quality of the Italian calfskin on the Prism Luna is equal to houses 4x the price.",
      commentAr: "جودة الجلد الإيطالي في حقيبة لونا المنشورية تضاهي براندات عالمية بأربعة أضعاف السعر. فخر حقيقي!"
    },
    {
      author: "Salma M.",
      location: "Cairo, Egypt",
      rating: 5,
      commentEn: "The Quilted Monolith is my everyday luxury armor. Fits my iPad, cosmetics, and still looks sculptural.",
      commentAr: "حقيبة مونوليث أصبحت رفيقتي اليومية الدائمة، شيك جداً وبتشيل الآيباد والميك أب ومحافظة على هيبتها."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = STORE_DATA;
}
