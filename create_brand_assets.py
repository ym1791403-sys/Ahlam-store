import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import arabic_reshaper
from bidi.algorithm import get_display

OUTPUT_DIR = "assets"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Helper for Arabic text rendering
def format_arabic(text):
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

# Colors
GOLD_LIGHT = (255, 235, 175)
GOLD_MID = (212, 175, 55)
GOLD_DARK = (153, 125, 51)
GOLD_DEEP = (89, 69, 25)
NOIR_BG = (7, 7, 9)
NOIR_CARD = (16, 16, 22)

# Fonts
WIN_FONTS = os.environ.get('WINDIR', 'C:\\Windows') + '\\Fonts'
FONT_SERIF = os.path.join(WIN_FONTS, 'georgia.ttf')
FONT_SERIF_BOLD = os.path.join(WIN_FONTS, 'georgiab.ttf')
FONT_SANS = os.path.join(WIN_FONTS, 'segoeui.ttf')
FONT_SANS_BOLD = os.path.join(WIN_FONTS, 'segoeuib.ttf')
FONT_ARABIC = os.path.join(WIN_FONTS, 'tradbdo.ttf') if os.path.exists(os.path.join(WIN_FONTS, 'tradbdo.ttf')) else os.path.join(WIN_FONTS, 'arialbd.ttf')

print(f"Using Arabic font: {FONT_ARABIC}")

# -------------------------------------------------------------
# 1. DRAW ROYAL CREST MONOGRAM (Vector-like PIL drawing)
# -------------------------------------------------------------
def draw_crest(draw, center_x, center_y, scale=1.0, glow=False):
    """Draws a royal luxury crest for Ahlam Store"""
    # Outer diamond & ring
    r_outer = int(70 * scale)
    r_inner = int(58 * scale)
    
    # Gold ambient glow if requested
    if glow:
        for offset in range(15, 0, -3):
            alpha_gold = (180, 140, 50)
            draw.ellipse(
                [center_x - r_outer - offset, center_y - r_outer - offset,
                 center_x + r_outer + offset, center_y + r_outer + offset],
                outline=alpha_gold, width=1
            )
            
    # Concentric fine rings
    draw.ellipse([center_x - r_outer, center_y - r_outer, center_x + r_outer, center_y + r_outer], outline=GOLD_MID, width=max(1, int(2*scale)))
    draw.ellipse([center_x - r_inner, center_y - r_inner, center_x + r_inner, center_y + r_inner], outline=GOLD_LIGHT, width=max(1, int(1*scale)))
    
    # Diamond stars at cardinal points
    star_dist = r_outer + int(10 * scale)
    for dx, dy in [(0, -star_dist), (0, star_dist), (-star_dist, 0), (star_dist, 0)]:
        s = int(4 * scale)
        draw.polygon([
            (center_x + dx, center_y + dy - s),
            (center_x + dx + s, center_y + dy),
            (center_x + dx, center_y + dy + s),
            (center_x + dx - s, center_y + dy)
        ], fill=GOLD_LIGHT)
        
    # Crown pinnacle top
    crown_y = center_y - r_outer - int(18 * scale)
    cw = int(22 * scale)
    ch = int(14 * scale)
    draw.polygon([
        (center_x - cw, crown_y + ch),
        (center_x - cw + int(4*scale), crown_y + int(4*scale)),
        (center_x - int(8*scale), crown_y + int(9*scale)),
        (center_x, crown_y),
        (center_x + int(8*scale), crown_y + int(9*scale)),
        (center_x + cw - int(4*scale), crown_y + int(4*scale)),
        (center_x + cw, crown_y + ch)
    ], outline=GOLD_LIGHT, fill=GOLD_MID)
    # Crown jewels
    draw.ellipse([center_x - int(2*scale), crown_y - int(4*scale), center_x + int(2*scale), crown_y], fill=GOLD_LIGHT)
    
    # Monogram "A" in the center with luxury serifs
    a_top = center_y - int(38 * scale)
    a_bottom = center_y + int(36 * scale)
    a_width = int(32 * scale)
    stroke = max(2, int(4 * scale))
    
    # Left stem
    draw.line([(center_x, a_top), (center_x - a_width, a_bottom)], fill=GOLD_LIGHT, width=stroke)
    # Right stem (thick luxury stroke)
    draw.line([(center_x, a_top), (center_x + a_width, a_bottom)], fill=GOLD_LIGHT, width=stroke + int(2*scale))
    # Crossbar
    bar_y = center_y + int(6 * scale)
    draw.line([(center_x - int(a_width*0.55), bar_y), (center_x + int(a_width*0.55), bar_y)], fill=GOLD_MID, width=max(2, int(2.5*scale)))
    # Serifs at base
    serif_len = int(8 * scale)
    draw.line([(center_x - a_width - serif_len, a_bottom), (center_x - a_width + serif_len, a_bottom)], fill=GOLD_LIGHT, width=stroke)
    draw.line([(center_x + a_width - serif_len, a_bottom), (center_x + a_width + serif_len, a_bottom)], fill=GOLD_LIGHT, width=stroke)
    # Apex diamond
    draw.polygon([
        (center_x, a_top - int(6*scale)),
        (center_x + int(4*scale), a_top),
        (center_x, a_top + int(4*scale)),
        (center_x - int(4*scale), a_top)
    ], fill=GOLD_LIGHT)

# -------------------------------------------------------------
# 2. GENERATE PWA ICONS (512x512, 192x192, 180x180)
# -------------------------------------------------------------
def generate_square_icon(size, filename, bg_rounded=True):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Background
    pad = int(size * 0.04)
    radius = int(size * 0.22) if bg_rounded else 0
    
    # Rich gradient background
    bg = Image.new("RGBA", (size, size), NOIR_BG + (255,))
    bg_draw = ImageDraw.Draw(bg)
    
    # Radial gold ambient glow in center
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    center = size // 2
    glow_r = int(size * 0.45)
    for r in range(glow_r, 0, -4):
        alpha = int(45 * (1 - r / glow_r))
        glow_draw.ellipse([center - r, center - r, center + r, center + r], fill=(197, 160, 89, alpha))
    bg.alpha_composite(glow)
    
    # Subtle border
    bg_draw.rounded_rectangle([pad, pad, size - pad, size - pad], radius=radius, outline=(197, 160, 89, 120), width=max(1, int(size*0.012)))
    
    # Inner gold border
    inner_pad = pad + max(2, int(size * 0.025))
    bg_draw.rounded_rectangle([inner_pad, inner_pad, size - inner_pad, size - inner_pad], radius=max(2, radius - 8), outline=(212, 175, 55, 60), width=1)
    
    # Draw Crest in Center
    crest_scale = size / 310.0
    draw_crest(bg_draw, center, int(center * 0.90), scale=crest_scale)
    
    # Draw Text "AHLAM" below crest
    try:
        font_size = int(size * 0.09)
        font = ImageFont.truetype(FONT_SERIF_BOLD, font_size)
        text = "A H L A M"
        bbox = bg_draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        bg_draw.text((center - tw // 2, int(center * 1.54)), text, fill=GOLD_LIGHT, font=font)
        
        # Subtitle "STORE"
        font_sub = ImageFont.truetype(FONT_SANS, int(size * 0.045))
        sub = "S T O R E"
        bbox_sub = bg_draw.textbbox((0, 0), sub, font=font_sub)
        sw = bbox_sub[2] - bbox_sub[0]
        bg_draw.text((center - sw // 2, int(center * 1.70)), sub, fill=GOLD_MID, font=font_sub)
    except Exception as e:
        print(f"Font render error on icon {size}: {e}")
        
    # Mask to rounded rect if needed
    if bg_rounded:
        mask = Image.new("L", (size, size), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([pad, pad, size - pad, size - pad], radius=radius, fill=255)
        final_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        final_img.paste(bg, (0, 0), mask)
    else:
        final_img = bg
        
    out_path = os.path.join(OUTPUT_DIR, filename)
    final_img.save(out_path, format="PNG")
    print(f"Saved: {out_path} ({size}x{size})")
    return final_img

# Generate icons
icon_512 = generate_square_icon(512, "icon-512.png", bg_rounded=True)
icon_192 = generate_square_icon(192, "icon-192.png", bg_rounded=True)
apple_icon = generate_square_icon(180, "apple-touch-icon.png", bg_rounded=False) # iOS clips automatically
favicon_png = generate_square_icon(32, "favicon-32.png", bg_rounded=False)

# Save multi-size favicon.ico
fav_16 = favicon_png.resize((16, 16), Image.Resampling.LANCZOS)
fav_32 = favicon_png.resize((32, 32), Image.Resampling.LANCZOS)
fav_48 = icon_192.resize((48, 48), Image.Resampling.LANCZOS)
fav_16.save(os.path.join(OUTPUT_DIR, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print("Saved: assets/favicon.ico")

# -------------------------------------------------------------
# 3. GENERATE OPEN GRAPH / TWITTER CARD (1200x630)
# -------------------------------------------------------------
def generate_og_image():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), NOIR_BG)
    draw = ImageDraw.Draw(img)
    
    # 1. Subtle luxury grid/pattern & radial lighting
    center_x = W // 2
    center_y = H // 2
    
    # Ambient radial gold halo
    halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    halo_draw = ImageDraw.Draw(halo)
    for r in range(400, 0, -8):
        alpha = int(35 * (1 - r / 400.0))
        halo_draw.ellipse([center_x - r, center_y - r - 30, center_x + r, center_y + r - 30], fill=(197, 160, 89, alpha))
    img.paste(halo, (0, 0), halo)
    
    # Double gold luxury border
    pad_out = 30
    pad_in = 38
    draw.rectangle([pad_out, pad_out, W - pad_out, H - pad_out], outline=(197, 160, 89), width=2)
    draw.rectangle([pad_in, pad_in, W - pad_in, H - pad_in], outline=(153, 125, 51), width=1)
    
    # Ornate corners
    corner_len = 28
    for cx, cy in [(pad_out, pad_out), (W - pad_out, pad_out), (pad_out, H - pad_out), (W - pad_out, H - pad_out)]:
        sx = 1 if cx == pad_out else -1
        sy = 1 if cy == pad_out else -1
        draw.line([(cx, cy), (cx + sx * corner_len, cy)], fill=GOLD_LIGHT, width=3)
        draw.line([(cx, cy), (cx, cy + sy * corner_len)], fill=GOLD_LIGHT, width=3)
        # Small diamond corner accent
        draw.polygon([
            (cx + sx * 10, cy + sy * 5),
            (cx + sx * 15, cy + sy * 10),
            (cx + sx * 10, cy + sy * 15),
            (cx + sx * 5, cy + sy * 10)
        ], fill=GOLD_MID)
        
    # Top luxury pill tag
    tag_font = ImageFont.truetype(FONT_SANS_BOLD, 14)
    tag_text = "E X C L U S I V E   E G Y P T I A N   A T E L I E R"
    tb = draw.textbbox((0, 0), tag_text, font=tag_font)
    tw = tb[2] - tb[0]
    pill_w = tw + 40
    pill_h = 32
    pill_x1 = center_x - pill_w // 2
    pill_y1 = 65
    draw.rounded_rectangle([pill_x1, pill_y1, pill_x1 + pill_w, pill_y1 + pill_h], radius=16, fill=(22, 22, 30), outline=GOLD_MID, width=1)
    draw.text((center_x - tw // 2, pill_y1 + 8), tag_text, fill=GOLD_LIGHT, font=tag_font)
    
    # Draw Royal Crest in upper-mid
    draw_crest(draw, center_x, 195, scale=1.35, glow=True)
    
    # Main Latin Brand
    brand_font = ImageFont.truetype(FONT_SERIF_BOLD, 46)
    brand_text = "A H L A M   S T O R E"
    bb = draw.textbbox((0, 0), brand_text, font=brand_font)
    bw = bb[2] - bb[0]
    draw.text((center_x - bw // 2, 300), brand_text, fill=GOLD_LIGHT, font=brand_font)
    
    # Thin divider with center diamond
    div_w = 260
    div_y = 362
    draw.line([(center_x - div_w, div_y), (center_x - 20, div_y)], fill=GOLD_DARK, width=1)
    draw.line([(center_x + 20, div_y), (center_x + div_w, div_y)], fill=GOLD_DARK, width=1)
    draw.polygon([(center_x, div_y - 6), (center_x + 6, div_y), (center_x, div_y + 6), (center_x - 6, div_y)], fill=GOLD_LIGHT)
    
    # Arabic Brand Title (Reshaped & BiDi)
    ar_title_font = ImageFont.truetype(FONT_ARABIC, 38)
    ar_title_text = format_arabic("متجر أحلام للحقائب النسائية الفاخرة")
    ab = draw.textbbox((0, 0), ar_title_text, font=ar_title_font)
    aw = ab[2] - ab[0]
    draw.text((center_x - aw // 2, 380), ar_title_text, fill=(255, 255, 255), font=ar_title_font)
    
    # Tagline in Arabic
    ar_sub_font = ImageFont.truetype(FONT_ARABIC, 22)
    ar_sub_text = format_arabic("صناعة مصرية بمواصفات ملكية • معاينة الشنطة قبل الاستلام • شحن سريع لكافة المحافظات")
    asb = draw.textbbox((0, 0), ar_sub_text, font=ar_sub_font)
    asw = asb[2] - asb[0]
    draw.text((center_x - asw // 2, 442), ar_sub_text, fill=(200, 190, 175), font=ar_sub_font)
    
    # 3 Badges at the bottom
    badges = [
        "✦ معاينة كاملة قبل الاستلام",
        "✦ جلود طبيعية 100% فاخرة",
        "✦ شحن سريع لكافة المحافظات"
    ]
    badge_y = 515
    badge_font = ImageFont.truetype(FONT_ARABIC, 17)
    
    total_w = 0
    formatted_badges = [format_arabic(b) for b in badges]
    badge_boxes = []
    for fb in formatted_badges:
        bbox = draw.textbbox((0, 0), fb, font=badge_font)
        bw = bbox[2] - bbox[0] + 36
        badge_boxes.append((fb, bw))
        total_w += bw + 20
    total_w -= 20
    
    cur_x = center_x - total_w // 2
    for fb, bw in badge_boxes:
        draw.rounded_rectangle([cur_x, badge_y, cur_x + bw, badge_y + 38], radius=10, fill=(18, 18, 26), outline=(60, 50, 30), width=1)
        tb = draw.textbbox((0, 0), fb, font=badge_font)
        text_w = tb[2] - tb[0]
        draw.text((cur_x + (bw - text_w) // 2, badge_y + 8), fb, fill=GOLD_MID, font=badge_font)
        cur_x += bw + 20

    og_path = os.path.join(OUTPUT_DIR, "og-image.jpg")
    img.save(og_path, format="JPEG", quality=95)
    print(f"Saved: {og_path} (1200x630)")

generate_og_image()

# -------------------------------------------------------------
# 4. GENERATE CLEAN VECTOR SVG LOGO & FAVICON.SVG
# -------------------------------------------------------------
def generate_svg_assets():
    # Full Brand Logo SVG (Horizontal layout for Navbar & Footer)
    logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 70" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E6C8"/>
      <stop offset="35%" stop-color="#D4AF37"/>
      <stop offset="70%" stop-color="#AA8232"/>
      <stop offset="100%" stop-color="#DFBA89"/>
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Emblem Crest (Left/Start) -->
  <g transform="translate(35, 35)">
    <!-- Outer Rings -->
    <circle cx="0" cy="0" r="28" stroke="url(#goldLinear)" stroke-width="1.8" opacity="0.9"/>
    <circle cx="0" cy="0" r="23" stroke="#F5E6C8" stroke-width="0.8" opacity="0.6"/>
    
    <!-- Stars -->
    <polygon points="0,-33 2,-28 0,-26 -2,-28" fill="#F5E6C8"/>
    <polygon points="0,33 2,28 0,26 -2,28" fill="#F5E6C8"/>
    <polygon points="-33,0 -28,2 -26,0 -28,-2" fill="#F5E6C8"/>
    <polygon points="33,0 28,2 26,0 28,-2" fill="#F5E6C8"/>
    
    <!-- Monogram "A" -->
    <path d="M0 -16 L-12 15 M0 -16 L12 15" stroke="url(#goldLinear)" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M-7 4 L7 4" stroke="#F5E6C8" stroke-width="1.8"/>
    <!-- Serifs -->
    <line x1="-16" y1="15" x2="-8" y2="15" stroke="url(#goldLinear)" stroke-width="2"/>
    <line x1="8" y1="15" x2="16" y2="15" stroke="url(#goldLinear)" stroke-width="2"/>
    <!-- Diamond Peak -->
    <polygon points="0,-20 3,-17 0,-14 -3,-17" fill="#F5E6C8"/>
  </g>

  <!-- Typography -->
  <text x="80" y="34" font-family="'Cinzel', 'Georgia', serif" font-size="24" font-weight="800" letter-spacing="3" fill="#FFFFFF">
    AHLAM
  </text>
  <text x="210" y="34" font-family="'Cinzel', 'Georgia', serif" font-size="14" font-weight="700" letter-spacing="4" fill="url(#goldLinear)">
    STORE
  </text>
  <text x="82" y="52" font-family="'Cairo', 'Segoe UI', sans-serif" font-size="11" font-weight="500" letter-spacing="1.5" fill="#A3A3B0">
    مـتـجـر أحـلام • الـقـاهـرة
  </text>
</svg>
'''
    with open(os.path.join(OUTPUT_DIR, "logo.svg"), "w", encoding="utf-8") as f:
        f.write(logo_svg)
    print("Saved: assets/logo.svg")

    # Favicon SVG (Square Crest with Dark Luxury Background)
    favicon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="favGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E6C8"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#997D33"/>
    </linearGradient>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1A1810"/>
      <stop offset="100%" stop-color="#070709"/>
    </radialGradient>
  </defs>

  <rect width="100" height="100" rx="22" fill="url(#bgGlow)"/>
  <rect x="4" y="4" width="92" height="92" rx="18" fill="none" stroke="url(#favGold)" stroke-width="1.5" opacity="0.6"/>

  <g transform="translate(50, 50) scale(1.15)">
    <!-- Rings -->
    <circle cx="0" cy="0" r="24" stroke="url(#favGold)" stroke-width="1.8"/>
    <circle cx="0" cy="0" r="20" stroke="#F5E6C8" stroke-width="0.7" opacity="0.7"/>

    <!-- Stars -->
    <polygon points="0,-27 2,-24 0,-22 -2,-24" fill="#F5E6C8"/>
    <polygon points="0,27 2,24 0,22 -2,24" fill="#F5E6C8"/>
    <polygon points="-27,0 -24,2 -22,0 -24,-2" fill="#F5E6C8"/>
    <polygon points="27,0 24,2 22,0 24,-2" fill="#F5E6C8"/>

    <!-- Monogram "A" -->
    <path d="M0 -14 L-10 13 M0 -14 L10 13" stroke="url(#favGold)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M-6 3 L6 3" stroke="#F5E6C8" stroke-width="1.5"/>
    <line x1="-13" y1="13" x2="-7" y2="13" stroke="url(#favGold)" stroke-width="2"/>
    <line x1="7" y1="13" x2="13" y2="13" stroke="url(#favGold)" stroke-width="2"/>
    <polygon points="0,-17 2.5,-14 0,-12 -2.5,-14" fill="#F5E6C8"/>
  </g>
</svg>
'''
    with open(os.path.join(OUTPUT_DIR, "favicon.svg"), "w", encoding="utf-8") as f:
        f.write(favicon_svg)
    print("Saved: assets/favicon.svg")

generate_svg_assets()
print("All luxury brand assets generated successfully!")
