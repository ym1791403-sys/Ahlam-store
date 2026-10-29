// ============================================================
// AHLAM STORE - LUXURY EGYPTIAN FASHION APPLICATION ENGINE
// ============================================================

const AppState = {
  cart: [],
  wishlist: [],
  activeLookbookStyleId: 'streetwear',
  activeLookbookBagId: 'ahlam-cyber-baguette',
  capacityBagId: 'ahlam-prism-luna',
  capacitySelectedItems: ['phone', 'cardholder', 'lipstick', 'keys'],
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
  navCapacity: "ماذا تكفي حقيبتك؟",
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
  
  // Capacity Visualizer
  capacityBadge: "ميزة 'إيه اللي هيكفّي جوة الشنطة؟'",
  capacityTitle: "ستوديو السعة التفاعلي (Inside The Bag)",
  capacitySubtitle: "اختاري حقيبتك، وضعي متعلقاتكِ اليومية بضغطة زر للتأكد من المقاس الفعلي قبل الطلب.",
  selectBagToTest: "اختاري الموديل للتجربة:",
  itemsToPack: "انقري لإضافة أو إزالة المتعلقات:",
  capacityStatusComfort: "مساحة مريحة جداً ومثالية للحقيبة!",
  capacityStatusFull: "الحقيبة ممتلئة تماماً ومتناسقة!",
  capacityStatusOver: "تجاوزتِ السعة المريحة! ننصحكِ باختيار حقيبة مونوليث الأكبر حجماً.",
  currentUsage: "السعة المستخدمة:",
  
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
  btnQuickView: "تفاصيل الشنطة",
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
  renderCapacityTester();
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
// RENDER "WHAT FITS INSIDE?" CAPACITY VISUALIZER
// ============================================================
function renderCapacityTester() {
  const currentBag = STORE_DATA.products.find(p => p.id === AppState.capacityBagId) || STORE_DATA.products[0];
  const maxCap = currentBag.capacityLimit;

  const usedCap = AppState.capacitySelectedItems.reduce((acc, itemId) => {
    const item = STORE_DATA.capacityItems.find(i => i.id === itemId);
    return acc + (item ? item.size : 0);
  }, 0);

  const percent = Math.min(Math.round((usedCap / maxCap) * 100), 120);

  // Bag pills
  const bagPills = document.getElementById('capacity-bag-pills');
  if (bagPills) {
    bagPills.innerHTML = STORE_DATA.products.map(p => {
      const isSel = p.id === currentBag.id;
      return `
        <button onclick="selectCapacityBag('${p.id}')"
          class="px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${
            isSel 
              ? 'bg-gold-gradient text-black font-extrabold border-transparent shadow-sm' 
              : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-[#c5a059]/40'
          }">
          ${p.nameAr}
        </button>
      `;
    }).join('');
  }

  // Items grid
  const itemsContainer = document.getElementById('capacity-items-grid');
  if (itemsContainer) {
    itemsContainer.innerHTML = STORE_DATA.capacityItems.map(item => {
      const isPacked = AppState.capacitySelectedItems.includes(item.id);
      return `
        <button onclick="toggleCapacityItem('${item.id}')"
          class="flex items-center justify-between p-2.5 rounded-xl border text-start transition-all ${
            isPacked 
              ? 'bg-white/[0.12] border-[#c5a059] text-white shadow-sm' 
              : 'bg-black/30 border-white/5 text-gray-400 hover:border-white/20'
          }">
          <div class="flex items-center gap-2">
            <span class="text-lg">${item.icon}</span>
            <div>
              <p class="text-xs font-semibold leading-tight">${item.nameAr}</p>
            </div>
          </div>
          <span class="text-xs font-bold ${isPacked ? 'text-[#dfba89]' : 'text-gray-500'}">
            ${isPacked ? '✓' : '+'}
          </span>
        </button>
      `;
    }).join('');
  }

  // Bag Visual
  const bagImg = document.getElementById('capacity-bag-img');
  if (bagImg) bagImg.src = currentBag.colors[0].image;
  const bagName = document.getElementById('capacity-bag-name');
  if (bagName) bagName.innerText = currentBag.nameAr;
  const bagDimensions = document.getElementById('capacity-bag-dims');
  if (bagDimensions) bagDimensions.innerText = `${currentBag.dimensions} • الوزن: ${currentBag.weight}`;

  // Progress Bar & Status
  const bar = document.getElementById('capacity-bar-fill');
  const percentLabel = document.getElementById('capacity-percent-label');
  const statusMsg = document.getElementById('capacity-status-msg');

  if (bar) {
    bar.style.width = `${Math.min(percent, 100)}%`;
    if (percent > 100) {
      bar.style.backgroundColor = '#ef4444';
    } else if (percent > 85) {
      bar.style.backgroundColor = '#f59e0b';
    } else {
      bar.style.backgroundColor = '#c5a059';
    }
  }

  if (percentLabel) {
    percentLabel.innerText = `${percent}% من سعة الحقيبة`;
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
        <!-- Image & Badge -->
        <div class="relative product-image-container bg-neutral-900/50 aspect-[4/5] overflow-hidden">
          <img src="${p.colors[0].image}" alt="${p.nameAr}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" id="prod-img-${p.id}" />
          
          <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            <span class="px-2.5 py-1 text-[10px] font-bold rounded-full bg-black/85 backdrop-blur-md text-[#dfba89] border border-[#c5a059]/30">
              ${p.badgeAr}
            </span>
            <button onclick="toggleWishlist('${p.id}')" class="pointer-events-auto w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-amber-300 transition-colors">
              <span class="${isInWishlist ? 'text-amber-400 scale-110' : 'text-gray-300'}">♥</span>
            </button>
          </div>

          <!-- Color Swatches Float -->
          <div class="absolute bottom-3 inset-x-3 flex items-center justify-center gap-2 p-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 w-fit mx-auto">
            ${p.colors.map((c, idx) => `
              <button 
                onclick="switchProductColorCard('${p.id}', ${idx})"
                class="w-3.5 h-3.5 rounded-full border border-white/30 transition-transform hover:scale-125 focus:ring-2 focus:ring-[#c5a059]"
                style="background-color: ${c.hex}"
                title="${c.nameAr}">
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Info Area (No Price) -->
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

            <h3 class="text-base sm:text-lg font-bold font-editorial text-white mb-1.5 group-hover:text-[#dfba89] transition-colors">${p.nameAr}</h3>
            <p class="text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed font-light">${p.descriptionAr}</p>
          </div>

          <div>
            <div class="flex items-center justify-between mb-3 border-t border-white/[0.06] pt-2.5">
              <span class="text-xs text-gray-400">${p.dimensions}</span>
              <span class="text-[10px] text-[#dfba89] font-semibold px-2 py-0.5 rounded bg-white/[0.04] border border-[#c5a059]/30">جلد طبيعي فاخر</span>
            </div>

            <!-- Action buttons -->
            <div class="grid grid-cols-2 gap-2">
              <button onclick="openQuickView('${p.id}')"
                class="py-2.5 px-2 rounded-xl border border-white/15 hover:border-[#c5a059]/40 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-semibold text-gray-200 transition-all text-center">
                ${t('btnQuickView')}
              </button>
              <button onclick="addToCart('${p.id}', '${p.colors[0].name}'); triggerFlyAnimation(this);"
                class="py-2.5 px-2 rounded-xl bg-gold-gradient text-black hover:opacity-95 text-xs font-extrabold transition-all text-center flex items-center justify-center gap-1 shadow-[0_2px_15px_rgba(197,160,89,0.2)]">
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
// QUICK VIEW MODAL
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
  const curColor = prod.colors[AppState.selectedColorIndex];

  document.getElementById('qv-title').innerText = prod.nameAr;
  document.getElementById('qv-category').innerText = prod.categoryAr;
  document.getElementById('qv-desc').innerText = prod.descriptionAr;
  document.getElementById('qv-material').innerText = prod.materialAr;
  document.getElementById('qv-dims').innerText = prod.dimensions;
  document.getElementById('qv-weight').innerText = prod.weight;
  document.getElementById('qv-capacity').innerText = `${prod.capacityLimit} نقطة سعة`;

  const mainImg = document.getElementById('qv-main-image');
  if (mainImg) mainImg.src = curColor.image;

  // Color Swatches
  const colorContainer = document.getElementById('qv-colors-list');
  if (colorContainer) {
    colorContainer.innerHTML = prod.colors.map((c, idx) => `
      <button onclick="setQuickViewColor(${idx})"
        class="flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all ${
          idx === AppState.selectedColorIndex 
            ? 'border-[#c5a059] bg-white/[0.1] text-white font-bold' 
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
// CART & EGYPTIAN ORDER SYSTEM
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
          <button onclick="removeFromCart(${idx})" class="text-gray-400 hover:text-red-400 text-xs">✕</button>
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
    drawer.classList.remove('-translate-x-full');
    backdrop.classList.remove('hidden');
    AppState.isCartOpen = true;
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
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
  document.getElementById('checkout-success-modal').classList.remove('hidden');
  document.getElementById('checkout-success-modal').classList.add('flex');

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
}
