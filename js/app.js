// ============================================================
// AHLAM STORE - LUXURY EGYPTIAN FASHION APPLICATION ENGINE
// ============================================================

const AppState = {
  cart: [],
  wishlist: [],
  activeLookbookStyleId: 'streetwear',
  activeLookbookBagId: 'ahlam-cyber-baguette',
  activeFilter: 'all',
  activeSort: 'featured',
  quickViewProduct: null,
  selectedColorIndex: 0,
  isCartOpen: false
};

// Egyptian Contact WhatsApp Number (can be updated by owner anytime)
const STORE_WHATSAPP_NUMBER = "201000000000";

// UI Texts Dictionary (Purely Egyptian Luxury Arabic)
const I18N = {
  navLookbook: "منسق الإطلالات",
  navCollection: "المجموعة الحصرية",
  navReviews: "آراء عميلاتنا",
  heroBadge: "براند مصري فاخر - تشكيلة كوتور 2026 الحصرية",
  heroTitle1: "ليست مجرد حقيبة..",
  heroTitle2: "إنها تحفة معمارية تصنع حضوركِ.",
  heroDesc: "أرقى تشكيلة حقائب حريمي مصرية بمواصفات عالمية، صُنعت بأيدي أمهر الحرفيين من أفخم الجلود الطبيعية المصقولة لتمنحكِ ثقة وجاذبية في كل مناسبة.",
  heroCtaPrimary: "استكشفي سينما الإطلالات",
  heroCtaSecondary: "المجموعة الكاملة",
  marqueeText: "✦ شحن وتوصيل سريع لجميع محافظات مصر (القاهرة، الجيزة، الإسكندرية وجميع المحافظات) ✦ إمكانية المعاينة قبل الاستلام ✦ جلود طبيعية 100% عالية الجودة ✦ إصدارات حصرية محدودة ✦ خدمة عملاء متميزة ✦",
  
  // Lookbook
  lookbookBadge: "سينما الأزياء ومنسّق الإطلالات",
  lookbookTitle: "مجلة الموضة ومنسّق الإطلالات السينمائي",
  lookbookSubtitle: "اختاري المشهد أو نمط الملابس، وشاهدي كيف تكتمل إطلالتك بتناغم سينمائي مع حقائب متجر أحلام.",
  matchLabel: "نسبة التناغم البصري",
  stylingAdviceTitle: "نصيحة خبيرة المظهر:",
  outfitElementsTitle: "تفاصيل الإطلالة (Look Breakdown):",
  btnShopDuo: "اطلبي الحقيبة لتنسيق هذه الإطلالة",
  switchBagLabel: "جرّبي حقيبة أخرى مع هذا النمط:",
  
  // Catalog
  catalogBadge: "المجموعة الكاملة",
  catalogTitle: "أيقونات متجر أحلام للأزياء الراقية",
  filterAll: "الكل",
  filterCrossbody: "كروس بودي",
  filterShoulder: "حقائب كتف",
  filterTote: "حقائب كبيرة / توت",
  filterClutch: "كلاتش وسهرة",
  filterMicro: "مايكرو باج",
  sortBy: "الترتيب حسب:",
  sortFeatured: "الأبرز",
  sortRating: "الأعلى تقييماً",
  btnQuickView: "معاينة الشنطة",
  btnAddToBag: "طلب الشنطة",
  colorLabel: "الألوان المتوفرة:",
  
  // Cart & Orders
  cartTitle: "الشنط المختارة للطلب",
  cartEmpty: "لم تختاري أي حقيبة بعد. استكشفي المجموعة واختاري ما يناسبكِ!",
  checkoutSuccessTitle: "تم تسجيل طلبكِ بنجاح!",
  checkoutSuccessDesc: "شكراً لاختياركِ Ahlam Store. سنتواصل معكِ هاتفياً لتأكيد موعد الشحن والتوصيل مع حق المعاينة قبل الدفع.",
  reviewsBadge: "آراء عميلاتنا",
  reviewsTitle: "تجارب حية من عميلاتنا في مصر",
  footerDesc: "براند مصري راقٍ للحقائب الحريمي، نصنع كل قطعة بشغف واهتمام بأدق التفاصيل من الجلود الطبيعية الفاخرة لتكون رفيقتكِ الدائمة في كل إطلالة.",
  footerLinksTitle: "روابط سريعة",
  footerRights: "جميع الحقوق محفوظة © 2026 Ahlam Store - جمهورية مصر العربية."
};

function t(key) {
  return I18N[key] || key;
}

// Helper: Sanitize string to prevent XSS
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderLookbook();
  renderCatalog();
  renderReviews();
  updateCartBadge();
  setupEventListeners();
  registerServiceWorker();
});

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.log('SW registration note:', err);
      });
    });
  }
}

// ============================================================
// RENDER LOOKBOOK & OUTFIT MATCHER
// ============================================================
function renderLookbook() {
  const currentStyle = STORE_DATA.lookbookStyles.find(s => s.id === AppState.activeLookbookStyleId) || STORE_DATA.lookbookStyles[0];
  const currentBag = STORE_DATA.products.find(p => p.id === AppState.activeLookbookBagId) || STORE_DATA.products[0];
  
  let score = 92;
  let stylingAdvice = currentStyle.stylingNoteAr;

  if (currentStyle.pairingBagId === currentBag.id) {
    score = currentStyle.matchScore;
    stylingAdvice = currentStyle.stylingNoteAr;
  } else if (currentBag.lookbookTags.includes(currentStyle.id)) {
    score = 95;
    stylingAdvice = `تناغم ممتاز! تصميم حقيبة ${currentBag.nameAr} يبرز أناقة وتفاصيل هذا اللوك السينمائي.`;
  }

  // Render Style Tabs
  const stylesContainer = document.getElementById('lookbook-style-tabs');
  if (stylesContainer) {
    stylesContainer.innerHTML = STORE_DATA.lookbookStyles.map(s => {
      const isActive = s.id === AppState.activeLookbookStyleId;
      return `
        <button onclick="selectLookbookStyle('${s.id}')"
          class="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 ${
            isActive 
              ? 'bg-gold-gradient text-black border-transparent shadow-md scale-105' 
              : 'border-white/10 hover:border-[#c5a059]/40 text-gray-300 bg-white/[0.03]'
          }">
          <span>✦</span>
          <span>${s.nameAr}</span>
        </button>
      `;
    }).join('');
  }

  // Outfit Breakdown
  const outfitList = document.getElementById('lookbook-outfit-pieces');
  if (outfitList) {
    outfitList.innerHTML = currentStyle.outfitPiecesAr.map(p => `
      <li class="flex items-center gap-2 text-xs text-gray-300">
        <span class="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
        <span>${p}</span>
      </li>
    `).join('');
  }

  // Model Card
  const modelImg = document.getElementById('lookbook-model-img');
  if (modelImg) {
    modelImg.src = currentStyle.modelImage;
    modelImg.alt = currentStyle.nameAr;
  }
  const styleTitle = document.getElementById('lookbook-style-title');
  if (styleTitle) styleTitle.innerText = currentStyle.nameAr;
  const styleTagline = document.getElementById('lookbook-style-tagline');
  if (styleTagline) styleTagline.innerText = currentStyle.taglineAr;

  // Matched Bag
  const bagImg = document.getElementById('lookbook-bag-img');
  if (bagImg) bagImg.src = currentBag.colors[0].image;
  const bagTitle = document.getElementById('lookbook-bag-title');
  if (bagTitle) bagTitle.innerText = currentBag.nameAr;
  const bagMaterial = document.getElementById('lookbook-bag-material');
  if (bagMaterial) bagMaterial.innerText = currentBag.materialAr;

  // Stylist advice
  const adviceEl = document.getElementById('lookbook-stylist-note');
  if (adviceEl) adviceEl.innerText = stylingAdvice;

  // Match score meter
  const scoreNum = document.getElementById('lookbook-match-num');
  if (scoreNum) animateCounter(scoreNum, score);
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
      return `
        <button onclick="selectLookbookBag('${p.id}')"
          class="flex items-center gap-2 p-2 rounded-xl border transition-all text-start ${
            isSelected 
              ? 'border-[#c5a059] bg-white/[0.08] shadow-sm' 
              : 'border-white/5 bg-black/40 hover:border-white/20'
          }">
          <img src="${p.colors[0].image}" class="w-10 h-10 rounded-lg object-cover" alt="${p.nameAr}" />
          <div class="flex-1 min-w-0">
            <p class="text-[11px] font-semibold text-gray-200 truncate">${p.nameAr}</p>
            <span class="text-[9px] text-[#dfba89]">قطعة حصرية</span>
          </div>
          ${isSelected ? '<span class="text-xs text-[#dfba89]">✓</span>' : ''}
        </button>
      `;
    }).join('');
  }

  // Shop Duo Button
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

function animateCounter(element, target) {
  let start = 0;
  const duration = 600;
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
// RENDER PRODUCT CATALOG (NO PRICES)
// ============================================================
function renderCatalog() {
  const container = document.getElementById('catalog-products-grid');
  if (!container) return;

  let list = STORE_DATA.products.filter(p => {
    if (AppState.activeFilter === 'all') return true;
    return p.category === AppState.activeFilter;
  });

  if (AppState.activeSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = list.map(p => {
    const isInWishlist = AppState.wishlist.includes(p.id);

    return `
      <div class="product-card glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group relative" data-product-id="${p.id}">
        <!-- Image & Badge (Clickable to preview) -->
        <div class="relative product-image-container bg-neutral-900/50 aspect-[4/5] overflow-hidden cursor-pointer" onclick="openQuickView('${p.id}')">
          <img src="${p.colors[0].image}" alt="${p.nameAr}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" id="prod-img-${p.id}" />
          
          <!-- Hover Preview Overlay Button -->
          <div class="preview-overlay-btn absolute inset-0 flex items-center justify-center pointer-events-none">
            <span class="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#c5a059] text-white text-xs font-bold shadow-xl flex items-center gap-1.5">
              <span>👁️</span>
              <span>معاينة الشنطة</span>
            </span>
          </div>

          <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            <span class="px-2.5 py-1 text-[10px] font-bold rounded-full bg-black/85 backdrop-blur-md text-[#dfba89] border border-[#c5a059]/30">
              ${p.badgeAr}
            </span>
            <button onclick="event.stopPropagation(); toggleWishlist('${p.id}');" class="pointer-events-auto w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-amber-300 transition-colors">
              <span class="${isInWishlist ? 'text-amber-400 scale-110' : 'text-gray-300'}">♥</span>
            </button>
          </div>

          <!-- Color Swatches Float -->
          <div class="absolute bottom-3 inset-x-3 flex items-center justify-center gap-2 p-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 w-fit mx-auto pointer-events-auto" onclick="event.stopPropagation()">
            ${p.colors.map((c, idx) => `
              <button 
                onclick="event.stopPropagation(); switchProductColorCard('${p.id}', ${idx})"
                class="w-3.5 h-3.5 rounded-full border border-white/30 transition-transform hover:scale-125 focus:ring-2 focus:ring-[#c5a059]"
                style="background-color: ${c.hex}"
                title="${c.nameAr}">
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Info Area (Clickable Title & Clear Buttons) -->
        <div class="p-5 flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-baseline justify-between mb-1.5">
              <span class="text-xs text-gray-400 font-mono">${p.categoryAr}</span>
              <div class="flex items-center gap-1 text-xs text-[#dfba89]">
                <span>★</span>
                <span>${p.rating}</span>
                <span class="text-gray-500">(${p.reviewsCount})</span>
              </div>
            </div>

            <h3 onclick="openQuickView('${p.id}')" class="text-base sm:text-lg font-bold font-editorial text-white mb-1.5 hover:text-[#dfba89] cursor-pointer transition-colors">${p.nameAr}</h3>
            <p class="text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed font-light">${p.descriptionAr}</p>
          </div>

          <div>
            <div class="flex items-center justify-between mb-3 border-t border-white/[0.06] pt-2.5">
              <span class="text-xs text-gray-400">${p.dimensions}</span>
              <span class="text-[10px] text-[#dfba89] font-semibold px-2 py-0.5 rounded bg-white/[0.04] border border-[#c5a059]/30">جلد طبيعي فاخر</span>
            </div>

            <!-- Action buttons: 1. Preview Bag, 2. Add To Bag -->
            <div class="grid grid-cols-2 gap-2">
              <button onclick="openQuickView('${p.id}')"
                class="py-2.5 px-2 rounded-xl border border-[#c5a059]/40 hover:border-[#c5a059] bg-white/[0.04] hover:bg-[#c5a059]/15 text-xs font-bold text-white transition-all text-center flex items-center justify-center gap-1">
                <span>🔍</span>
                <span>معاينة الشنطة</span>
              </button>
              <button onclick="addToCart('${p.id}', '${p.colors[0].name}'); triggerFlyAnimation(this);"
                class="py-2.5 px-2 rounded-xl bg-gold-gradient text-black hover:opacity-95 text-xs font-extrabold transition-all text-center flex items-center justify-center gap-1 shadow-[0_2px_15px_rgba(197,160,89,0.2)]">
                <span>+</span>
                <span>طلب الشنطة</span>
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
    btn.classList.toggle('bg-gold-gradient', isAct);
    btn.classList.toggle('text-black', isAct);
    btn.classList.toggle('font-extrabold', isAct);
    btn.classList.toggle('bg-white/[0.04]', !isAct);
    btn.classList.toggle('text-gray-300', !isAct);
  });
  renderCatalog();
}

function setCatalogSort(sortKey) {
  AppState.activeSort = sortKey;
  renderCatalog();
}

// ============================================================
// QUICK VIEW MODAL (PREVIEW BAG SYSTEM)
// ============================================================
function openQuickView(productId) {
  const prod = STORE_DATA.products.find(p => p.id === productId);
  if (!prod) return;
  AppState.quickViewProduct = prod;
  AppState.selectedColorIndex = 0;
  renderQuickViewModal(prod);
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderQuickViewModal(prod) {
  const curColor = prod.colors[AppState.selectedColorIndex] || prod.colors[0];

  const titleEl = document.getElementById('qv-title');
  if (titleEl) titleEl.innerText = prod.nameAr;
  const catEl = document.getElementById('qv-category');
  if (catEl) catEl.innerText = prod.categoryAr;
  const descEl = document.getElementById('qv-desc');
  if (descEl) descEl.innerText = prod.descriptionAr;
  const matEl = document.getElementById('qv-material');
  if (matEl) matEl.innerText = prod.materialAr;
  const dimsEl = document.getElementById('qv-dims');
  if (dimsEl) dimsEl.innerText = prod.dimensions;
  const weightEl = document.getElementById('qv-weight');
  if (weightEl) weightEl.innerText = prod.weight;

  const mainImg = document.getElementById('qv-main-image');
  if (mainImg) mainImg.src = curColor.image;

  // Direct WhatsApp inquiry link for this specific bag
  const waBtn = document.getElementById('qv-whatsapp-btn');
  if (waBtn) {
    const waMsg = `مرحباً متجر أحلام، أود الاستفسار ومعاينة حقيبة (${prod.nameAr}) لون (${curColor.nameAr}).`;
    waBtn.href = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  }

  // Color Swatches
  const colorContainer = document.getElementById('qv-colors-list');
  if (colorContainer) {
    colorContainer.innerHTML = prod.colors.map((c, idx) => `
      <button onclick="setQuickViewColor(${idx})"
        class="flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all ${
          idx === AppState.selectedColorIndex 
            ? 'border-[#c5a059] bg-white/[0.12] text-white font-bold shadow-sm' 
            : 'border-white/10 bg-white/[0.04] text-gray-400 hover:border-white/20'
        }">
        <span class="w-3.5 h-3.5 rounded-full" style="background-color: ${c.hex}"></span>
        <span class="text-xs">${c.nameAr}</span>
      </button>
    `).join('');
  }

  // Add To Bag button inside modal
  const addBtn = document.getElementById('qv-add-to-cart-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(prod.id, curColor.name);
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

// ============================================================
// CART & EGYPTIAN ORDER SYSTEM (FOOLPROOF ACTIVE TRANSITIONS)
// ============================================================
function addToCart(productId, colorName) {
  const prod = STORE_DATA.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = AppState.cart.find(item => 
    item.productId === productId && item.color === colorName
  );

  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({
      productId,
      color: colorName,
      qty: 1
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
  const totalCountEl = document.getElementById('cart-total-count');
  if (totalCountEl) {
    totalCountEl.innerText = `${totalItems} قطع`;
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const orderFormContainer = document.getElementById('cart-order-form-container');
  if (!container) return;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="py-14 text-center text-gray-400">
        <span class="text-4xl block mb-3">🛍️</span>
        <p class="text-sm font-semibold">${t('cartEmpty')}</p>
      </div>
    `;
    if (orderFormContainer) orderFormContainer.classList.add('hidden');
    return;
  }

  if (orderFormContainer) orderFormContainer.classList.remove('hidden');

  container.innerHTML = AppState.cart.map((item, idx) => {
    const prod = STORE_DATA.products.find(p => p.id === item.productId);
    if (!prod) return '';
    const colorObj = prod.colors.find(c => c.name === item.color) || prod.colors[0];

    return `
      <div class="flex items-center gap-3.5 py-3.5 border-b border-white/[0.06]">
        <img src="${colorObj.image}" alt="${prod.nameAr}" class="w-16 h-16 rounded-xl object-cover border border-white/10" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs sm:text-sm font-bold text-white mb-0.5 truncate">${prod.nameAr}</h4>
          <p class="text-xs text-gray-400 mb-1">اللون: <span class="text-gray-200">${colorObj.nameAr}</span></p>
          <span class="text-[10px] text-[#dfba89] font-mono">قطعة حصرية</span>
        </div>

        <div class="flex flex-col items-end gap-2">
          <button onclick="removeFromCart(${idx})" class="text-gray-400 hover:text-red-400 text-xs p-1">✕</button>
          <div class="flex items-center border border-white/10 rounded-lg overflow-hidden bg-black/40">
            <button onclick="changeCartQty(${idx}, -1)" class="px-2 py-0.5 text-xs text-gray-300 hover:bg-white/10">-</button>
            <span class="px-2 text-xs font-bold text-white">${item.qty}</span>
            <button onclick="changeCartQty(${idx}, 1)" class="px-2 py-0.5 text-xs text-gray-300 hover:bg-white/10">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    AppState.isCartOpen = true;
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    AppState.isCartOpen = false;
  }
}

// Submit Order Form (Cash on Delivery with Inspection)
function submitOrderForm() {
  if (AppState.cart.length === 0) {
    alert('حقيبة الطلبات فارغة!');
    return;
  }

  const nameInput = document.getElementById('order-customer-name');
  const phoneInput = document.getElementById('order-customer-phone');
  const govInput = document.getElementById('order-customer-gov');
  const addressInput = document.getElementById('order-customer-address');

  const customerName = nameInput ? nameInput.value.trim() : '';
  const customerPhone = phoneInput ? phoneInput.value.trim() : '';
  const customerGov = govInput ? govInput.value : '';
  const customerAddress = addressInput ? addressInput.value.trim() : '';

  if (!customerName || !customerPhone || !customerAddress) {
    alert('من فضلكِ أكملي جميع البيانات (الاسم، رقم الموبايل، العنوان).');
    return;
  }

  const orderRef = `#AHLAM-EGY-${Math.floor(10000 + Math.random() * 90000)}`;

  // Construct items summary for WhatsApp
  let itemsSummary = AppState.cart.map(item => {
    const prod = STORE_DATA.products.find(p => p.id === item.productId);
    const colorObj = prod ? (prod.colors.find(c => c.name === item.color) || prod.colors[0]) : null;
    return `• ${prod ? prod.nameAr : item.productId} (اللون: ${colorObj ? colorObj.nameAr : item.color}) - عدد: ${item.qty}`;
  }).join('\n');

  const detailsEl = document.getElementById('order-success-details');
  if (detailsEl) {
    detailsEl.innerHTML = `
      <p class="font-bold mb-1">رقم الطلب: ${orderRef}</p>
      <p class="text-gray-300">العميلة: ${escapeHTML(customerName)} | ${escapeHTML(customerPhone)}</p>
      <p class="text-gray-300">العنوان: ${escapeHTML(customerGov)} - ${escapeHTML(customerAddress)}</p>
    `;
  }

  // Pre-fill WhatsApp Link
  const waText = `مرحباً متجر أحلام، قمت بتسجيل طلب جديد:\nرقم الطلب: ${orderRef}\nالاسم: ${customerName}\nرقم الموبايل: ${customerPhone}\nالمحافظة: ${customerGov}\nالعنوان: ${customerAddress}\n\nالقطع المطلوبة:\n${itemsSummary}`;
  const waBtn = document.getElementById('btn-success-whatsapp');
  if (waBtn) {
    waBtn.href = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
  }

  closeCartDrawer();
  const successModal = document.getElementById('checkout-success-modal');
  if (successModal) {
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  AppState.cart = [];
  updateCartBadge();
  renderCart();
  if (document.getElementById('quick-order-form')) {
    document.getElementById('quick-order-form').reset();
  }
}

// Order directly via WhatsApp from cart
function orderViaWhatsAppDirect() {
  if (AppState.cart.length === 0) {
    alert('من فضلكِ اختاري حقيبة أولاً!');
    return;
  }
  let itemsSummary = AppState.cart.map(item => {
    const prod = STORE_DATA.products.find(p => p.id === item.productId);
    const colorObj = prod ? (prod.colors.find(c => c.name === item.color) || prod.colors[0]) : null;
    return `• ${prod ? prod.nameAr : item.productId} (اللون: ${colorObj ? colorObj.nameAr : item.color}) - عدد: ${item.qty}`;
  }).join('\n');

  const waText = `مرحباً متجر أحلام، أود الاستفسار وتأكيد طلب الحقائب التالية:\n${itemsSummary}\n\nبرجاء موافاتي بتفاصيل الشحن والتوصيل للمعاينة.`;
  window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`, '_blank');
}

function closeCheckoutSuccess() {
  const modal = document.getElementById('checkout-success-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
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
// REVIEWS
// ============================================================
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;
  container.innerHTML = STORE_DATA.reviews.map(r => `
    <div class="glass-panel p-5 rounded-2xl flex flex-col justify-between border border-white/[0.08]">
      <div>
        <div class="flex items-center gap-1 text-[#dfba89] mb-2.5">
          ${'★'.repeat(r.rating)}
        </div>
        <p class="text-xs sm:text-sm text-gray-200 leading-relaxed font-light mb-4">
          "${r.commentAr}"
        </p>
      </div>
      <div class="border-t border-white/5 pt-3 flex items-center justify-between">
        <span class="text-xs font-bold text-white">${r.author}</span>
        <span class="text-xs text-[#dfba89]">${r.location}</span>
      </div>
    </div>
  `).join('');
}

// ============================================================
// UI HELPERS & MOBILE MENU
// ============================================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

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

function setupEventListeners() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
  }

  // Keyboard accessibility: Close modals/drawer with Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeCartDrawer();
      closeCheckoutSuccess();
    }
  });
}
