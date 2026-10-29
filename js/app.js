// ============================================================
// VÉRA STUDIO - HIGH-FASHION INTERACTIVE APPLICATION ENGINE
// ============================================================

const AppState = {
  lang: 'ar', // default to Arabic as requested
  currency: 'SAR',
  theme: 'tangerine',
  cart: [],
  wishlist: [],
  activeLookbookStyleId: 'streetwear',
  activeLookbookBagId: 'vera-cyber-baguette',
  capacityBagId: 'vera-prism-luna',
  capacitySelectedItems: ['phone', 'cardholder', 'lipstick', 'keys'],
  activeFilter: 'all',
  activeSort: 'featured',
  quickViewProduct: null,
  selectedColorIndex: 0,
  monogramText: 'VS',
  monogramFoil: 'gold',
  promoCode: '',
  discountPercent: 0,
  isCartOpen: false,
  isCapacityModalOpen: false,
  isQuickViewOpen: false
};

// UI Translations Dictionary
const I18N = {
  ar: {
    navLookbook: "منسق الإطلالات",
    navCollection: "المجموعة الحصرية",
    navCapacity: "ماذا تكفي حقيبتك؟",
    navCustomizer: "استوديو النقش",
    navReviews: "آراء النجمات",
    heroBadge: "تشكيلة خريف / شتاء 2026 - الإصدار المحدود",
    heroTitle1: "ليست مجرد حقيبة..",
    heroTitle2: "إنها هويتكِ المعمارية.",
    heroDesc: "تصاميم استثنائية للمرأة الجريئة. نجمع بين براعة الجلود الإيطالية الفاخرة والطابع الطليعي المعاصر الذي يلفت كل الأنظار.",
    heroCtaPrimary: "جرّبي منسّق الإطلالات",
    heroCtaSecondary: "استكشفي المجموعة",
    marqueeText: "✦ شحن دولي سريع مجاني للطلبات فوق 1,500 ريال ✦ جلود إيطالية فاخرة 100% ✦ إصدارات حصرية مرقمة ✦ نقش مجاني للأحرف الأولى ✦ تصميم طليعي مستقبلي ✦",
    
    // Lookbook Section
    lookbookBadge: "الميزة التفاعلية الحصرية",
    lookbookTitle: "مجلة الموضة ومنسّق الإطلالات الذكي",
    lookbookSubtitle: "اختاري المناسبة أو نمط الملابس، وشاهدي كيف تكتمل إطلالتك بتناغم سينمائي مع حقائب ڤيرا.",
    matchLabel: "نسبة التناغم البصري",
    stylingAdviceTitle: "نصيحة خبيرة المظهر (Stylist Note):",
    outfitElementsTitle: "تفاصيل الإطلالة (Look Breakdown):",
    btnShopDuo: "اطلبي الحقيبة لتنسيق هذه الإطلالة",
    switchBagLabel: "جرّبي حقيبة أخرى مع هذا النمط:",
    
    // Capacity Visualizer Section
    capacityBadge: "ميزة 'إيه اللي هيكفّي جوة الشنطة؟'",
    capacityTitle: "ستوديو السعة التفاعلي (Interactive Bag Space)",
    capacitySubtitle: "اختاري حقيبتك، وضعي متعلقاتكِ اليومية بضغطة زر للتأكد من المقاس الفعلي قبل الشراء.",
    selectBagToTest: "اختاري الموديل للتجربة:",
    itemsToPack: "انقري لإضافة أو إزالة المتعلقات:",
    capacityStatusComfort: "مساحة مريحة جداً ومثالية!",
    capacityStatusFull: "الحقيبة ممتلئة تماماً!",
    capacityStatusOver: "تجاوزتِ السعة القصوى! ننصح باختيار حقيبة أكبر مثل مونوليث.",
    currentUsage: "السعة المستخدمة:",
    
    // Catalog Section
    catalogBadge: "المجموعة الكاملة",
    catalogTitle: "أيقونات ڤيرا للأزياء الراقية",
    filterAll: "الكل",
    filterCrossbody: "كروس بودي",
    filterShoulder: "حقائب كتف",
    filterTote: "حقائب كبيرة / توت",
    filterClutch: "كلاتش وسهرة",
    filterMicro: "مايكرو باج",
    sortBy: "الترتيب حسب:",
    sortFeatured: "الأبرز",
    sortPriceLow: "السعر: من الأقل للأعلى",
    sortPriceHigh: "السعر: من الأعلى للأقل",
    sortRating: "الأعلى تقييماً",
    btnQuickView: "نظرة سريعة وتخصيص",
    btnAddToBag: "أضيفي إلى الحقيبة",
    colorLabel: "الألوان المتوفرة:",
    
    // Monogram Studio
    monogramBadge: "لمستكِ الخاصة الفريدة",
    monogramTitle: "استوديو النقش والدمغ الحرفي (Bespoke Studio)",
    monogramDesc: "اجعلي حقيبتكِ فريدة تماماً. احفري حروف اسمكِ على بطاقة الجلد الطبيعي الفاخرة بطباعة الرقائق المعدنية الأصلية مجاناً.",
    monogramInputPlaceholder: "أدخلي حرفين أو 3 حروف (مثال: VS أو س.م)",
    foilGold: "ذهب ملكي (Gold Foil)",
    foilSilver: "بلاتين فضي (Silver Chrome)",
    foilDeboss: "حفر غائر كلاسيكي (Deep Deboss)",
    
    // Cart & Checkout
    cartTitle: "حقيبة التسوق الخاصة بكِ",
    cartEmpty: "حقيبة التسوق فارغة حالياً. استكشفي مجموعتنا واختاري ما يلهمكِ!",
    subtotal: "المجموع الفرعي:",
    shipping: "الشحن:",
    freeShipping: "مجاني",
    freeShippingThreshold: "أضيفي منتجات بقيمة {amount} للحصول على شحن دولي مجاني!",
    freeShippingQualified: "🎉 تهانينا! مؤهلة لشحن مجاني سريع!",
    promoApply: "تطبيق",
    promoPlaceholder: "رمز الخصم (جرّبي VIBE20)",
    checkoutBtn: "إتمام الطلب بأمان",
    checkoutSuccessTitle: "تم استلام طلبكِ الراقي بنجاح!",
    checkoutSuccessDesc: "شكراً لثقتكِ بـ VÉRA STUDIO. سنقوم بتجهيز حقيبتكِ وتغليفها بصندوق الهدايا الحصري مع ختم الحرف اليدوية.",
    
    // Reviews
    reviewsBadge: "أيقونات الأناقة يتحدثن",
    reviewsTitle: "تجارب حية من عواصم الموضة",
    
    // Footer
    footerDesc: "دار أزياء معاصرة تعيد تعريف صناعة الحقائب الفاخرة بلمسات هندسية جريئة، تجمع بين فخامة الحرفية الإيطالية وتطلعات الجيل الجديد.",
    footerLinksTitle: "روابط سريعة",
    footerServicesTitle: "خدمات العملاء",
    footerSocialTitle: "تابعي أحدث العروض",
    footerRights: "جميع الحقوق محفوظة © 2026 VÉRA STUDIO.",
    guaranteeText: "ضمان الجلد الطبيعي مدى الحياة • إرجاع مجاني خلال 14 يوماً • تغليف هدايا ملكي"
  },
  en: {
    navLookbook: "Outfit Matcher",
    navCollection: "Runway Collection",
    navCapacity: "What Fits Inside?",
    navCustomizer: "Bespoke Studio",
    navReviews: "Press & Reviews",
    heroBadge: "Fall/Winter 2026 Limited Edition",
    heroTitle1: "Not Just A Bag..",
    heroTitle2: "An Architectural Presence.",
    heroDesc: "Bold sculptural shapes meet uncompromising Italian calfskin. Designed for women who don't just follow trends—they command them.",
    heroCtaPrimary: "Launch Outfit Matcher",
    heroCtaSecondary: "Explore Collection",
    marqueeText: "✦ Complimentary Worldwide Express on Orders Above $400 ✦ 100% Italian Sculpted Leather ✦ Limited Serialized Drops ✦ Complimentary Monogramming ✦ Avant-Garde Silhouettes ✦",
    
    // Lookbook Section
    lookbookBadge: "Signature Interactive Experience",
    lookbookTitle: "Interactive Lookbook & Outfit Matcher",
    lookbookSubtitle: "Select an aesthetic occasion and watch how VÉRA bags forge cinematic visual synergy with curated outfits.",
    matchLabel: "Visual Synergy Score",
    stylingAdviceTitle: "Stylist Advice:",
    outfitElementsTitle: "Curated Look Breakdown:",
    btnShopDuo: "Shop Bag For This Look",
    switchBagLabel: "Test another bag with this aesthetic:",
    
    // Capacity Visualizer Section
    capacityBadge: "Live Capacity Visualizer",
    capacityTitle: "Inside The Bag Studio",
    capacitySubtitle: "Test actual bag volume with your everyday essentials before buying. Zero guesswork.",
    selectBagToTest: "Select Bag Model:",
    itemsToPack: "Tap to pack or unpack daily essentials:",
    capacityStatusComfort: "Comfortable fit with room to spare!",
    capacityStatusFull: "Bag is perfectly at full capacity!",
    capacityStatusOver: "Capacity exceeded! Switch to The Quilted Monolith for heavier days.",
    currentUsage: "Capacity Used:",
    
    // Catalog Section
    catalogBadge: "The Full Lineup",
    catalogTitle: "Sculptural Icons & Limited Drops",
    filterAll: "All",
    filterCrossbody: "Crossbody",
    filterShoulder: "Shoulder Bags",
    filterTote: "Totes & Maxi",
    filterClutch: "Clutch & Evening",
    filterMicro: "Micro Bags",
    sortBy: "Sort by:",
    sortFeatured: "Featured",
    sortPriceLow: "Price: Low to High",
    sortPriceHigh: "Price: High to Low",
    sortRating: "Highest Rated",
    btnQuickView: "Quick View & Monogram",
    btnAddToBag: "Add to Bag",
    colorLabel: "Available Finishes:",
    
    // Monogram Studio
    monogramBadge: "Personalized Luxury",
    monogramTitle: "Bespoke Monogramming Studio",
    monogramDesc: "Make it entirely yours. Complimentary foil stamping on our handcrafted leather luggage clochette.",
    monogramInputPlaceholder: "Enter 2-3 initials (e.g. VS or LK)",
    foilGold: "Regal 24K Gold Foil",
    foilSilver: "Mirror Chrome Silver",
    foilDeboss: "Deep Blind Deboss",
    
    // Cart & Checkout
    cartTitle: "Your Shopping Bag",
    cartEmpty: "Your bag is currently empty. Explore the collection and discover your signature piece!",
    subtotal: "Subtotal:",
    shipping: "Shipping:",
    freeShipping: "Free",
    freeShippingThreshold: "Add {amount} more for complimentary worldwide shipping!",
    freeShippingQualified: "🎉 You've unlocked Complimentary Express Shipping!",
    promoApply: "Apply",
    promoPlaceholder: "Promo code (try VIBE20)",
    checkoutBtn: "Proceed to Secure Checkout",
    checkoutSuccessTitle: "Order Confirmed with Distinction!",
    checkoutSuccessDesc: "Thank you for joining VÉRA STUDIO. Your piece is being hand-prepped, serialized, and encased in our signature luxury presentation box.",
    
    // Reviews
    reviewsBadge: "Voices of Style",
    reviewsTitle: "What Icons Are Saying",
    
    // Footer
    footerDesc: "An avant-garde luxury house fusing architectural geometry with heritage leather artistry for the modern tastemaker.",
    footerLinksTitle: "Navigation",
    footerServicesTitle: "Client Services",
    footerSocialTitle: "Join The Circle",
    footerRights: "All Rights Reserved © 2026 VÉRA STUDIO.",
    guaranteeText: "Lifetime Leather Warranty • Complimentary 14-Day Returns • Archival Gift Boxing"
  }
};

// Helper: Format Currency
function formatMoney(amountUSD) {
  const curr = STORE_DATA.currencies[AppState.currency] || STORE_DATA.currencies.USD;
  const converted = Math.round(amountUSD * curr.rate);
  return `${converted.toLocaleString()} ${curr.symbol}`;
}

// Get text by key in active language
function t(key) {
  const dict = I18N[AppState.lang] || I18N.ar;
  return dict[key] || key;
}

// ============================================================
// INITIALIZATION & EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderLookbook();
  renderCapacityTester();
  renderCatalog();
  renderReviews();
  updateCartBadge();
  setupEventListeners();
  setup3DTilt();
});

function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
}

function initLanguage() {
  document.documentElement.setAttribute('dir', AppState.lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', AppState.lang);
  updateStaticTexts();
}

function switchLanguage(lang) {
  AppState.lang = lang;
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  updateStaticTexts();
  renderLookbook();
  renderCapacityTester();
  renderCatalog();
  renderReviews();
  renderCart();
  if (AppState.quickViewProduct) {
    renderQuickViewModal(AppState.quickViewProduct);
  }
}

function switchTheme(theme) {
  AppState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  // Highlight active theme button
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.classList.toggle('ring-2', btn.dataset.themeBtn === theme);
    btn.classList.toggle('ring-white', btn.dataset.themeBtn === theme);
  });
}

function switchCurrency(currCode) {
  AppState.currency = currCode;
  document.querySelectorAll('[data-curr-btn]').forEach(btn => {
    btn.classList.toggle('text-white', btn.dataset.currBtn === currCode);
    btn.classList.toggle('font-bold', btn.dataset.currBtn === currCode);
  });
  renderLookbook();
  renderCatalog();
  renderCart();
  if (AppState.quickViewProduct) {
    renderQuickViewModal(AppState.quickViewProduct);
  }
}

// ============================================================
// RENDER LOOKBOOK & OUTFIT MATCHER
// ============================================================
function renderLookbook() {
  const currentStyle = STORE_DATA.lookbookStyles.find(s => s.id === AppState.activeLookbookStyleId) || STORE_DATA.lookbookStyles[0];
  const currentBag = STORE_DATA.products.find(p => p.id === AppState.activeLookbookBagId) || STORE_DATA.products[0];
  
  // Calculate dynamic match score
  let score = 88;
  let stylingAdvice = AppState.lang === 'ar' 
    ? "هذا التنسيق يصنع تبايناً جذاباً يبرز تفاصيل الحقيبة بدقة." 
    : "This combination creates a sharp, complementary rhythm.";

  if (currentStyle.pairingBagId === currentBag.id) {
    score = currentStyle.matchScore;
    stylingAdvice = AppState.lang === 'ar' ? currentStyle.stylingNoteAr : currentStyle.stylingNoteEn;
  } else if (currentBag.lookbookTags.includes(currentStyle.id)) {
    score = 94;
    stylingAdvice = AppState.lang === 'ar'
      ? `تناغم رائع! خطوط حقيبة ${currentBag.nameAr} تنسجم بانسيابية مع قصة هذا الستايل.`
      : `High harmony! The architectural silhouette of ${currentBag.name} complements the movement of this style.`;
  }

  // Render Style Tabs
  const stylesContainer = document.getElementById('lookbook-style-tabs');
  if (stylesContainer) {
    stylesContainer.innerHTML = STORE_DATA.lookbookStyles.map(s => {
      const isActive = s.id === AppState.activeLookbookStyleId;
      const title = AppState.lang === 'ar' ? s.nameAr : s.name;
      return `
        <button onclick="selectLookbookStyle('${s.id}')"
          class="px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
            isActive 
              ? 'bg-accent-solid text-black border-transparent shadow-lg shadow-orange-500/20 font-bold scale-105' 
              : 'border-white/10 hover:border-white/30 text-gray-300 bg-white/5'
          }">
          <span>✦</span>
          <span>${title}</span>
        </button>
      `;
    }).join('');
  }

  // Render Outfit Breakdown
  const outfitList = document.getElementById('lookbook-outfit-pieces');
  if (outfitList) {
    const pieces = AppState.lang === 'ar' ? currentStyle.outfitPiecesAr : currentStyle.outfitPiecesEn;
    outfitList.innerHTML = pieces.map(p => `
      <li class="flex items-center gap-3 text-sm text-gray-300">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-solid"></span>
        <span>${p}</span>
      </li>
    `).join('');
  }

  // Update Model Card
  const modelImg = document.getElementById('lookbook-model-img');
  if (modelImg) {
    modelImg.src = currentStyle.modelImage;
    modelImg.alt = AppState.lang === 'ar' ? currentStyle.nameAr : currentStyle.name;
  }

  const styleTitle = document.getElementById('lookbook-style-title');
  if (styleTitle) {
    styleTitle.innerText = AppState.lang === 'ar' ? currentStyle.nameAr : currentStyle.name;
  }

  const styleTagline = document.getElementById('lookbook-style-tagline');
  if (styleTagline) {
    styleTagline.innerText = AppState.lang === 'ar' ? currentStyle.taglineAr : currentStyle.taglineEn;
  }

  // Update Matched Bag Card
  const bagImg = document.getElementById('lookbook-bag-img');
  if (bagImg) {
    bagImg.src = currentBag.colors[0].image;
  }

  const bagTitle = document.getElementById('lookbook-bag-title');
  if (bagTitle) {
    bagTitle.innerText = AppState.lang === 'ar' ? currentBag.nameAr : currentBag.name;
  }

  const bagPrice = document.getElementById('lookbook-bag-price');
  if (bagPrice) {
    bagPrice.innerText = formatMoney(currentBag.priceUSD);
  }

  const bagMaterial = document.getElementById('lookbook-bag-material');
  if (bagMaterial) {
    bagMaterial.innerText = AppState.lang === 'ar' ? currentBag.materialAr : currentBag.materialEn;
  }

  // Stylist advice note
  const adviceEl = document.getElementById('lookbook-stylist-note');
  if (adviceEl) {
    adviceEl.innerText = stylingAdvice;
  }

  // Match score meter
  const scoreNum = document.getElementById('lookbook-match-num');
  if (scoreNum) {
    animateCounter(scoreNum, score);
  }

  const scoreRing = document.getElementById('lookbook-match-ring');
  if (scoreRing) {
    const offset = 283 - (283 * (score / 100));
    scoreRing.style.strokeDashoffset = offset;
  }

  // Bag switcher buttons
  const bagSelectorEl = document.getElementById('lookbook-bag-alternatives');
  if (bagSelectorEl) {
    bagSelectorEl.innerHTML = STORE_DATA.products.map(p => {
      const isSelected = p.id === AppState.activeLookbookBagId;
      const name = AppState.lang === 'ar' ? p.nameAr : p.name;
      return `
        <button onclick="selectLookbookBag('${p.id}')"
          class="group relative flex items-center gap-3 p-2 rounded-xl border transition-all ${
            isSelected 
              ? 'border-accent bg-white/10 shadow-md' 
              : 'border-white/5 bg-black/40 hover:border-white/20'
          }">
          <img src="${p.colors[0].image}" class="w-12 h-12 rounded-lg object-cover" alt="${name}" />
          <div class="text-start">
            <p class="text-xs font-semibold text-gray-200 line-clamp-1">${name}</p>
            <p class="text-[11px] text-accent-glow">${formatMoney(p.priceUSD)}</p>
          </div>
          ${isSelected ? '<span class="ms-auto text-xs text-accent-glow">✓</span>' : ''}
        </button>
      `;
    }).join('');
  }

  // Update Shop Duo Button
  const btnShop = document.getElementById('btn-shop-lookbook-duo');
  if (btnShop) {
    btnShop.onclick = () => {
      addToCart(currentBag.id, currentBag.colors[0].name);
      triggerFlyAnimation(btnShop);
    };
  }
}

function selectLookbookStyle(styleId) {
  AppState.activeLookbookStyleId = styleId;
  const style = STORE_DATA.lookbookStyles.find(s => s.id === styleId);
  if (style && style.pairingBagId) {
    AppState.activeLookbookBagId = style.pairingBagId;
  }
  renderLookbook();
}

function selectLookbookBag(bagId) {
  AppState.activeLookbookBagId = bagId;
  renderLookbook();
}

// Animate numbers smoothly
function animateCounter(element, target) {
  let start = 0;
  const duration = 800;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.innerText = target + '%';
      clearInterval(timer);
    } else {
      element.innerText = Math.round(start) + '%';
    }
  }, stepTime);
}

// ============================================================
// RENDER "WHAT FITS INSIDE?" CAPACITY VISUALIZER
// ============================================================
function renderCapacityTester() {
  const currentBag = STORE_DATA.products.find(p => p.id === AppState.capacityBagId) || STORE_DATA.products[0];
  const maxCap = currentBag.capacityLimit;

  // Calculate used capacity
  const usedCap = AppState.capacitySelectedItems.reduce((acc, itemId) => {
    const item = STORE_DATA.capacityItems.find(i => i.id === itemId);
    return acc + (item ? item.size : 0);
  }, 0);

  const percent = Math.min(Math.round((usedCap / maxCap) * 100), 120);

  // Bag selector pills
  const bagPills = document.getElementById('capacity-bag-pills');
  if (bagPills) {
    bagPills.innerHTML = STORE_DATA.products.map(p => {
      const isSel = p.id === currentBag.id;
      const title = AppState.lang === 'ar' ? p.nameAr : p.name;
      return `
        <button onclick="selectCapacityBag('${p.id}')"
          class="px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
            isSel 
              ? 'bg-accent-solid text-black font-bold border-transparent shadow-lg' 
              : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'
          }">
          ${title} (${p.capacityLimit} pts)
        </button>
      `;
    }).join('');
  }

  // Items to pack pills
  const itemsContainer = document.getElementById('capacity-items-grid');
  if (itemsContainer) {
    itemsContainer.innerHTML = STORE_DATA.capacityItems.map(item => {
      const isPacked = AppState.capacitySelectedItems.includes(item.id);
      const name = AppState.lang === 'ar' ? item.nameAr : item.name;
      return `
        <button onclick="toggleCapacityItem('${item.id}')"
          class="flex items-center justify-between p-3 rounded-xl border text-start transition-all ${
            isPacked 
              ? 'bg-white/15 border-accent text-white shadow-sm' 
              : 'bg-black/30 border-white/5 text-gray-400 hover:border-white/20'
          }">
          <div class="flex items-center gap-2">
            <span class="text-xl">${item.icon}</span>
            <div>
              <p class="text-xs font-semibold leading-tight">${name}</p>
              <p class="text-[10px] text-gray-400">${item.size} pts</p>
            </div>
          </div>
          <span class="text-xs font-bold ${isPacked ? 'text-accent-glow' : 'text-gray-500'}">
            ${isPacked ? '✓' : '+'}
          </span>
        </button>
      `;
    }).join('');
  }

  // Update Bag image and stats
  const bagImg = document.getElementById('capacity-bag-img');
  if (bagImg) {
    bagImg.src = currentBag.colors[0].image;
  }
  const bagName = document.getElementById('capacity-bag-name');
  if (bagName) {
    bagName.innerText = AppState.lang === 'ar' ? currentBag.nameAr : currentBag.name;
  }
  const bagDimensions = document.getElementById('capacity-bag-dims');
  if (bagDimensions) {
    bagDimensions.innerText = `${currentBag.dimensions} • ${currentBag.weight}`;
  }

  // Update Progress Bar & Status
  const bar = document.getElementById('capacity-bar-fill');
  const percentLabel = document.getElementById('capacity-percent-label');
  const statusMsg = document.getElementById('capacity-status-msg');

  if (bar) {
    bar.style.width = `${Math.min(percent, 100)}%`;
    if (percent > 100) {
      bar.style.backgroundColor = '#ef4444'; // Red overflow
    } else if (percent > 80) {
      bar.style.backgroundColor = '#f59e0b'; // Amber full
    } else {
      bar.style.backgroundColor = 'var(--primary-accent)';
    }
  }

  if (percentLabel) {
    percentLabel.innerText = `${percent}% (${usedCap} / ${maxCap} pts)`;
  }

  if (statusMsg) {
    if (percent > 100) {
      statusMsg.className = 'text-xs text-red-400 font-semibold p-2.5 rounded-lg bg-red-950/40 border border-red-800/40';
      statusMsg.innerText = t('capacityStatusOver');
    } else if (percent >= 85) {
      statusMsg.className = 'text-xs text-amber-300 font-semibold p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/40';
      statusMsg.innerText = t('capacityStatusFull');
    } else {
      statusMsg.className = 'text-xs text-emerald-400 font-semibold p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40';
      statusMsg.innerText = t('capacityStatusComfort');
    }
  }
}

function selectCapacityBag(bagId) {
  AppState.capacityBagId = bagId;
  renderCapacityTester();
}

function toggleCapacityItem(itemId) {
  const index = AppState.capacitySelectedItems.indexOf(itemId);
  if (index > -1) {
    AppState.capacitySelectedItems.splice(index, 1);
  } else {
    AppState.capacitySelectedItems.push(itemId);
  }
  renderCapacityTester();
}

// ============================================================
// RENDER PRODUCT CATALOG
// ============================================================
function renderCatalog() {
  const container = document.getElementById('catalog-products-grid');
  if (!container) return;

  // Filter
  let list = STORE_DATA.products.filter(p => {
    if (AppState.activeFilter === 'all') return true;
    return p.category === AppState.activeFilter;
  });

  // Sort
  if (AppState.activeSort === 'price-low') {
    list.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (AppState.activeSort === 'price-high') {
    list.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (AppState.activeSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = list.map(p => {
    const name = AppState.lang === 'ar' ? p.nameAr : p.name;
    const badge = AppState.lang === 'ar' ? p.badgeAr : p.badge;
    const desc = AppState.lang === 'ar' ? p.descriptionAr : p.descriptionEn;
    const isInWishlist = AppState.wishlist.includes(p.id);

    return `
      <div class="product-card glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group relative" data-product-id="${p.id}">
        <!-- Top Badge & Wishlist -->
        <div class="relative product-image-container bg-neutral-900/50 aspect-[4/5] overflow-hidden">
          <img src="${p.colors[0].image}" alt="${name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" id="prod-img-${p.id}" />
          
          <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            <span class="px-3 py-1 text-[11px] font-bold rounded-full bg-black/75 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
              ${badge}
            </span>
            <button onclick="toggleWishlist('${p.id}')" class="pointer-events-auto w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-red-400 transition-colors">
              <span class="${isInWishlist ? 'text-red-500 scale-110' : 'text-gray-300'}">♥</span>
            </button>
          </div>

          <!-- Color Swatches Float -->
          <div class="absolute bottom-3 inset-x-3 flex items-center justify-center gap-2 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 w-fit mx-auto">
            ${p.colors.map((c, idx) => `
              <button 
                onclick="switchProductColorCard('${p.id}', ${idx})"
                class="w-4 h-4 rounded-full border border-white/30 transition-transform hover:scale-125 focus:ring-2 focus:ring-white"
                style="background-color: ${c.hex}"
                title="${AppState.lang === 'ar' ? c.nameAr : c.name}">
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Info Area -->
        <div class="p-5 flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-baseline justify-between mb-1.5">
              <span class="text-xs uppercase tracking-wider text-gray-400">${AppState.lang === 'ar' ? p.categoryAr : p.category}</span>
              <div class="flex items-center gap-1 text-xs text-amber-400">
                <span>★</span>
                <span>${p.rating}</span>
                <span class="text-gray-500">(${p.reviewsCount})</span>
              </div>
            </div>

            <h3 class="text-lg font-bold font-editorial text-white mb-1.5 group-hover:text-accent-glow transition-colors">${name}</h3>
            <p class="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">${desc}</p>
          </div>

          <div>
            <div class="flex items-center justify-between mb-4">
              <div>
                <span class="text-xl font-bold font-editorial text-white">${formatMoney(p.priceUSD)}</span>
                <span class="text-xs text-gray-500 line-through ms-2">${formatMoney(p.originalPriceUSD)}</span>
              </div>
              <span class="text-[11px] text-accent-glow font-medium">100% Italian Leather</span>
            </div>

            <!-- Action buttons -->
            <div class="grid grid-cols-2 gap-2">
              <button onclick="openQuickView('${p.id}')"
                class="py-2.5 px-3 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-200 transition-all text-center">
                ${t('btnQuickView')}
              </button>
              <button onclick="addToCart('${p.id}', '${p.colors[0].name}'); triggerFlyAnimation(this);"
                class="py-2.5 px-3 rounded-xl bg-accent-solid text-black hover:opacity-90 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5">
                <span>+</span>
                <span>${t('btnAddToBag')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function switchProductColorCard(productId, colorIndex) {
  const prod = STORE_DATA.products.find(p => p.id === productId);
  if (!prod) return;
  const imgEl = document.getElementById(`prod-img-${productId}`);
  if (imgEl && prod.colors[colorIndex]) {
    imgEl.src = prod.colors[colorIndex].image;
  }
}

function setCatalogFilter(filterKey) {
  AppState.activeFilter = filterKey;
  document.querySelectorAll('[data-filter-btn]').forEach(btn => {
    const isAct = btn.dataset.filterBtn === filterKey;
    btn.classList.toggle('bg-accent-solid', isAct);
    btn.classList.toggle('text-black', isAct);
    btn.classList.toggle('font-bold', isAct);
    btn.classList.toggle('bg-white/5', !isAct);
    btn.classList.toggle('text-gray-300', !isAct);
  });
  renderCatalog();
}

function setCatalogSort(sortKey) {
  AppState.activeSort = sortKey;
  renderCatalog();
}

// ============================================================
// QUICK VIEW & BESPOKE MONOGRAM MODAL
// ============================================================
function openQuickView(productId) {
  const prod = STORE_DATA.products.find(p => p.id === productId);
  if (!prod) return;
  AppState.quickViewProduct = prod;
  AppState.selectedColorIndex = 0;
  renderQuickViewModal(prod);
  document.getElementById('quick-view-modal').classList.remove('hidden');
  document.getElementById('quick-view-modal').classList.add('flex');
}

function closeQuickView() {
  document.getElementById('quick-view-modal').classList.add('hidden');
  document.getElementById('quick-view-modal').classList.remove('flex');
}

function renderQuickViewModal(prod) {
  const name = AppState.lang === 'ar' ? prod.nameAr : prod.name;
  const desc = AppState.lang === 'ar' ? prod.descriptionAr : prod.descriptionEn;
  const material = AppState.lang === 'ar' ? prod.materialAr : prod.materialEn;
  const curColor = prod.colors[AppState.selectedColorIndex];

  document.getElementById('qv-title').innerText = name;
  document.getElementById('qv-category').innerText = AppState.lang === 'ar' ? prod.categoryAr : prod.category;
  document.getElementById('qv-price').innerText = formatMoney(prod.priceUSD);
  document.getElementById('qv-desc').innerText = desc;
  document.getElementById('qv-material').innerText = material;
  document.getElementById('qv-dims').innerText = prod.dimensions;
  document.getElementById('qv-weight').innerText = prod.weight;
  document.getElementById('qv-capacity').innerText = `${prod.capacityLimit} pts`;

  const mainImg = document.getElementById('qv-main-image');
  if (mainImg) {
    mainImg.src = curColor.image;
  }

  // Color Swatches
  const colorContainer = document.getElementById('qv-colors-list');
  if (colorContainer) {
    colorContainer.innerHTML = prod.colors.map((c, idx) => `
      <button onclick="setQuickViewColor(${idx})"
        class="flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all ${
          idx === AppState.selectedColorIndex 
            ? 'border-accent bg-white/10 text-white font-bold' 
            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
        }">
        <span class="w-3.5 h-3.5 rounded-full" style="background-color: ${c.hex}"></span>
        <span class="text-xs">${AppState.lang === 'ar' ? c.nameAr : c.name}</span>
      </button>
    `).join('');
  }

  // Update Monogram Live Tag
  updateMonogramPreview();

  // Add To Bag button inside modal
  const addBtn = document.getElementById('qv-add-to-cart-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(prod.id, curColor.name, AppState.monogramText, AppState.monogramFoil);
      triggerFlyAnimation(addBtn);
      closeQuickView();
    };
  }
}

function setQuickViewColor(idx) {
  AppState.selectedColorIndex = idx;
  if (AppState.quickViewProduct) {
    renderQuickViewModal(AppState.quickViewProduct);
  }
}

function updateMonogramPreview() {
  const tagEl = document.getElementById('monogram-live-text');
  if (!tagEl) return;
  const text = AppState.monogramText.trim().toUpperCase() || 'VS';
  tagEl.innerText = text;

  // Apply foil class
  tagEl.className = 'text-xl font-bold font-editorial tracking-widest transition-all';
  if (AppState.monogramFoil === 'gold') {
    tagEl.classList.add('foil-gold');
  } else if (AppState.monogramFoil === 'silver') {
    tagEl.classList.add('foil-silver');
  } else {
    tagEl.classList.add('foil-deboss');
  }
}

function setMonogramFoil(foilType) {
  AppState.monogramFoil = foilType;
  document.querySelectorAll('[data-foil-btn]').forEach(btn => {
    btn.classList.toggle('border-accent', btn.dataset.foilBtn === foilType);
    btn.classList.toggle('border-white/10', btn.dataset.foilBtn !== foilType);
  });
  updateMonogramPreview();
}

function onMonogramInputChange(val) {
  AppState.monogramText = val.slice(0, 4);
  updateMonogramPreview();
}

// ============================================================
// CART & COMMERCE SYSTEM
// ============================================================
function addToCart(productId, colorName, monogram = '', foil = 'gold') {
  const prod = STORE_DATA.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = AppState.cart.find(item => 
    item.productId === productId && item.color === colorName && item.monogram === monogram
  );

  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({
      productId,
      color: colorName,
      monogram,
      foil,
      qty: 1,
      priceUSD: prod.priceUSD
    });
  }

  updateCartBadge();
  renderCart();
  openCartDrawer();
}

function removeFromCart(index) {
  AppState.cart.splice(index, 1);
  updateCartBadge();
  renderCart();
}

function changeCartQty(index, delta) {
  const item = AppState.cart[index];
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    AppState.cart.splice(index, 1);
  }
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const totalItems = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-count-badge');
  if (badge) {
    badge.innerText = totalItems;
    badge.classList.toggle('hidden', totalItems === 0);
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-gray-400">
        <span class="text-4xl block mb-3">🛍️</span>
        <p class="text-sm">${t('cartEmpty')}</p>
      </div>
    `;
    updateCartTotals(0);
    return;
  }

  container.innerHTML = AppState.cart.map((item, idx) => {
    const prod = STORE_DATA.products.find(p => p.id === item.productId);
    if (!prod) return '';
    const name = AppState.lang === 'ar' ? prod.nameAr : prod.name;
    const colorObj = prod.colors.find(c => c.name === item.color) || prod.colors[0];
    const colorLabel = AppState.lang === 'ar' ? colorObj.nameAr : colorObj.name;

    return `
      <div class="flex items-center gap-4 py-4 border-b border-white/5">
        <img src="${colorObj.image}" alt="${name}" class="w-20 h-20 rounded-xl object-cover border border-white/10" />
        <div class="flex-1">
          <h4 class="text-sm font-bold text-white mb-0.5">${name}</h4>
          <p class="text-xs text-gray-400 mb-1">${t('colorLabel')} ${colorLabel}</p>
          ${item.monogram ? `
            <span class="inline-block px-2 py-0.5 rounded text-[10px] bg-white/10 text-amber-300 font-semibold mb-1">
              Monogram: ${item.monogram} (${item.foil})
            </span>
          ` : ''}
          <p class="text-xs font-bold text-accent-glow">${formatMoney(prod.priceUSD)}</p>
        </div>

        <div class="flex flex-col items-end gap-2">
          <button onclick="removeFromCart(${idx})" class="text-gray-400 hover:text-red-400 text-xs">✕</button>
          <div class="flex items-center border border-white/10 rounded-lg overflow-hidden bg-black/40">
            <button onclick="changeCartQty(${idx}, -1)" class="px-2 py-1 text-xs text-gray-300 hover:bg-white/10">-</button>
            <span class="px-2.5 text-xs font-bold text-white">${item.qty}</span>
            <button onclick="changeCartQty(${idx}, 1)" class="px-2 py-1 text-xs text-gray-300 hover:bg-white/10">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const subtotalUSD = AppState.cart.reduce((sum, item) => sum + (item.priceUSD * item.qty), 0);
  updateCartTotals(subtotalUSD);
}

function updateCartTotals(subtotalUSD) {
  const discountAmount = subtotalUSD * (AppState.discountPercent / 100);
  const finalSubtotal = Math.max(0, subtotalUSD - discountAmount);

  const subtotalEl = document.getElementById('cart-subtotal');
  if (subtotalEl) {
    subtotalEl.innerText = formatMoney(finalSubtotal);
  }

  // Free shipping tracker (free above $400 USD)
  const freeThreshold = 400;
  const trackerText = document.getElementById('free-shipping-text');
  const trackerBar = document.getElementById('free-shipping-bar');

  if (trackerText && trackerBar) {
    if (subtotalUSD >= freeThreshold && subtotalUSD > 0) {
      trackerText.innerText = t('freeShippingQualified');
      trackerBar.style.width = '100%';
      trackerBar.style.backgroundColor = '#10b981';
    } else {
      const remaining = freeThreshold - subtotalUSD;
      trackerText.innerText = t('freeShippingThreshold').replace('{amount}', formatMoney(remaining));
      trackerBar.style.width = `${Math.min(100, (subtotalUSD / freeThreshold) * 100)}%`;
      trackerBar.style.backgroundColor = 'var(--primary-accent)';
    }
  }
}

function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'VIBE20') {
    AppState.discountPercent = 20;
    alert(AppState.lang === 'ar' ? '🎉 تم تفعيل خصم 20% بنجاح!' : '🎉 20% Discount code applied!');
    renderCart();
  } else {
    alert(AppState.lang === 'ar' ? 'رمز ترويجي غير صالح. جرّبي: VIBE20' : 'Invalid promo code. Try: VIBE20');
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full', '-translate-x-full');
    backdrop.classList.remove('hidden');
    AppState.isCartOpen = true;
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    const isRtl = AppState.lang === 'ar';
    if (isRtl) {
      drawer.classList.add('-translate-x-full');
    } else {
      drawer.classList.add('translate-x-full');
    }
    backdrop.classList.add('hidden');
    AppState.isCartOpen = false;
  }
}

function executeCheckout() {
  if (AppState.cart.length === 0) {
    alert(AppState.lang === 'ar' ? 'حقيبة التسوق فارغة!' : 'Your bag is empty!');
    return;
  }
  closeCartDrawer();
  document.getElementById('checkout-success-modal').classList.remove('hidden');
  document.getElementById('checkout-success-modal').classList.add('flex');
  AppState.cart = [];
  updateCartBadge();
  renderCart();
}

function closeCheckoutSuccess() {
  document.getElementById('checkout-success-modal').classList.add('hidden');
  document.getElementById('checkout-success-modal').classList.remove('flex');
}

// ============================================================
// WISHLIST
// ============================================================
function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
  } else {
    AppState.wishlist.push(productId);
  }
  renderCatalog();
}

// ============================================================
// REVIEWS SECTION
// ============================================================
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;
  container.innerHTML = STORE_DATA.reviews.map(r => `
    <div class="glass-panel p-6 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-amber-400 mb-3">
          ${'★'.repeat(r.rating)}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed italic mb-6">
          "${AppState.lang === 'ar' ? r.commentAr : r.commentEn}"
        </p>
      </div>
      <div class="border-t border-white/5 pt-4 flex items-center justify-between">
        <span class="text-xs font-bold text-white">${r.author}</span>
        <span class="text-xs text-gray-500">${r.location}</span>
      </div>
    </div>
  `).join('');
}

// ============================================================
// MICRO-INTERACTIONS & 3D TILT
// ============================================================
function setup3DTilt() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// Fly to Cart Animation
function triggerFlyAnimation(sourceElement) {
  const rect = sourceElement.getBoundingClientRect();
  const cartIcon = document.getElementById('cart-button');
  if (!cartIcon) return;
  const targetRect = cartIcon.getBoundingClientRect();

  const ball = document.createElement('div');
  ball.className = 'flying-ball';
  ball.style.left = `${rect.left + rect.width / 2}px`;
  ball.style.top = `${rect.top}px`;
  ball.style.setProperty('--tx', `${targetRect.left - rect.left}px`);
  ball.style.setProperty('--ty', `${targetRect.top - rect.top}px`);

  document.body.appendChild(ball);
  setTimeout(() => {
    ball.remove();
  }, 750);
}

// Update all static data-i18n elements
function updateStaticTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerText = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });
}

function setupEventListeners() {
  // Mobile Nav toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}
