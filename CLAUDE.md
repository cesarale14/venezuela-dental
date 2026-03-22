# CLAUDE.md — Venezuela Dental Website

## Project Overview

Build a professional website for Venezuela Dental, a company that sells dental supplies, instruments, materials, equipment, and hygiene products in Caracas, Venezuela. The site serves as a product catalog with contact-to-buy flow (no e-commerce checkout). Buyers reach out via WhatsApp, phone, or email to purchase.

The site should feel clean, trustworthy, and medical-professional. Think: modern dental supply company, not a generic store. The design must convey reliability, professionalism, and quality.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **Icons:** Lucide React (clean, professional line icons)
- **Animations:** Framer Motion for scroll-triggered fade-ins and hover states
- **Language:** TypeScript
- **Deployment target:** Vercel

---

## Critical Design Rules

1. **NO EMOJIS.** Use Lucide React icons exclusively. This is a professional medical supply company.
2. The site is in **Spanish by default** with an **English language toggle** in the navbar.
3. The design should feel clinical, clean, and trustworthy — white-dominant with blue accents.
4. All product CTAs lead to WhatsApp or contact methods, NOT a shopping cart.
5. The SVG logo is provided at `public/logo.svg` — use it directly as an `<img>` or inline SVG.

---

## Brand Specifications

### Color Palette

Primary blue from the logo: `#2191b9`

```
colors: {
  blue: {
    DEFAULT: '#2191b9',
    light: '#3fb8e0',
    lighter: '#e8f6fb',
    dark: '#1a7494',
    darker: '#135a72',
  },
  white: '#FFFFFF',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  // Accent for CTAs and WhatsApp
  green: {
    whatsapp: '#25D366',
  },
}
```

Surface colors for the clean medical feel:
- Page background: `#FFFFFF`
- Section alternates: `#f9fafb` (gray-50)
- Cards: white with subtle gray-200 borders
- Header/footer: white or very light blue (`#e8f6fb`)

### Typography

- **Headings:** `"Plus Jakarta Sans"` from Google Fonts — modern, clean, professional geometric sans-serif. Weights 600-800.
- **Body:** `"Plus Jakarta Sans"` weight 400-500 for body text. Single font family keeps it clean and medical.

Tailwind config:
```
fontFamily: {
  sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
```

### Logo

The logo is an SVG file provided at `public/logo.svg`. It contains the word "DENTAL" in blue (#2191b9) with a dental/tooth graphic above it. Use it directly:
- Navbar: height 44-50px
- Footer: height 56px
- No need to recreate it — just render the SVG as an image

---

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with fonts, metadata, navbar, footer
    page.tsx            # Home / Landing page
    catalogo/page.tsx   # Product catalog with categories
    nosotros/page.tsx   # About us
    contacto/page.tsx   # Contact page
    servicios/page.tsx  # Services page
  components/
    Navbar.tsx
    Footer.tsx
    WhatsAppButton.tsx    # Floating WhatsApp button
    ProductCard.tsx
    CategoryCard.tsx
    ContactForm.tsx
    LanguageSwitcher.tsx
    SectionHeading.tsx
    GoogleMap.tsx          # Embedded Google Map
  lib/
    translations.ts       # ES/EN strings
    products.ts           # Product catalog data
    categories.ts         # Product categories
    constants.ts          # Contact info, addresses
  hooks/
    useLanguage.ts
  types/
    index.ts
public/
  logo.svg                # Venezuela Dental logo
  products/               # Product images folder (placeholders for now)
```

---

## Contact Information (`lib/constants.ts`)

```typescript
export const CONTACT = {
  phones: [
    { number: "+58 424-187-4488", whatsapp: true, label: "WhatsApp 1" },
    { number: "+58 412-541-1580", whatsapp: true, label: "WhatsApp 2" },
  ],
  email: "lepageslc@gmail.com",
  address: {
    full: "Esquina Peligro Alcabala, Torre Profesional Alcabala, Mezzanina, Oficina 2, La Candelaria, Caracas, Venezuela",
    short: "Torre Profesional Alcabala, La Candelaria, Caracas",
    googleMapsUrl: "https://www.google.com/maps?q=10.503787994384766,-66.90425872802734&z=17&hl=en",
    lat: 10.503787994384766,
    lng: -66.90425872802734,
  },
  whatsappLink1: "https://wa.me/584241874488",
  whatsappLink2: "https://wa.me/584125411580",
  businessName: "Venezuela Dental",
};
```

---

## Product Categories (`lib/categories.ts`)

```typescript
export interface Category {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  icon: string;        // Lucide icon name
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "instrumentos",
    nameEs: "Instrumentos Dentales",
    nameEn: "Dental Instruments",
    descriptionEs: "Exploradores, espejos, pinzas, curetas, elevadores y todo el instrumental clinico necesario para su consultorio.",
    descriptionEn: "Explorers, mirrors, forceps, curettes, elevators and all clinical instruments for your practice.",
    icon: "Wrench",
    productCount: 24,
  },
  {
    id: "materiales",
    nameEs: "Materiales Dentales",
    nameEn: "Dental Materials",
    descriptionEs: "Resinas compuestas, cementos, adhesivos, materiales de impresion, amalgamas y mas.",
    descriptionEn: "Composite resins, cements, adhesives, impression materials, amalgams and more.",
    icon: "Layers",
    productCount: 36,
  },
  {
    id: "equipos",
    nameEs: "Equipos Odontologicos",
    nameEn: "Dental Equipment",
    descriptionEs: "Unidades dentales, sillones, lamparas de fotocurado, autoclaves, compresores y equipos de rayos X.",
    descriptionEn: "Dental units, chairs, curing lights, autoclaves, compressors and X-ray equipment.",
    icon: "Monitor",
    productCount: 18,
  },
  {
    id: "higiene",
    nameEs: "Productos de Higiene",
    nameEn: "Hygiene Products",
    descriptionEs: "Guantes, tapabocas, desinfectantes, esterilizantes, baberos y productos de bioseguridad.",
    descriptionEn: "Gloves, masks, disinfectants, sterilizers, bibs and biosecurity products.",
    icon: "ShieldPlus",
    productCount: 20,
  },
];
```

---

## Sample Products (`lib/products.ts`)

Create 6-8 placeholder products per category. Each product has:

```typescript
export interface Product {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  category: string;       // matches category id
  image: string;          // path to image in /public/products/
  featured: boolean;
  tags: string[];
}
```

For placeholder images, use simple colored rectangles or a generic dental placeholder generated via CSS (blue-lighter background with a Lucide icon centered). Do NOT use external image URLs.

Generate at least 24 total placeholder products (6 per category) with realistic Spanish dental product names and descriptions. Examples:
- "Espejo Dental #5 con Mango" / "Kit de Resina Compuesta A2" / "Unidad Dental Hidraulica Premium" / "Caja de Guantes de Nitrilo x100"

---

## Page Specifications

### Page 1: Home (Landing) — `/`

**Sections in order:**

1. **Hero Section**
   - Clean white/light blue gradient background
   - H1: "Su proveedor de confianza en suministros odontologicos" (Times-style serif? No — use Plus Jakarta Sans bold)
   - Subtitle: "Instrumentos, materiales, equipos y productos de higiene dental de las mejores marcas, disponibles en Caracas."
   - Two CTAs:
     - "Ver Catalogo" (blue filled button) -> /catalogo
     - "Contactar por WhatsApp" (green WhatsApp button with `MessageCircle` icon) -> WhatsApp link
   - A large hero image area (use a blue-lighter placeholder with a dental icon for now)
   - Trust badges below: "Envios a toda Venezuela" / "Atencion personalizada" / "Marcas reconocidas" / "Precios competitivos" — each with a small Lucide icon

2. **Featured Products Section**
   - H2: "Productos Destacados"
   - Grid of 4-6 ProductCard components (featured: true products)
   - Each card: image area, product name, category badge, "Consultar precio" button (links to WhatsApp with pre-filled message)
   - "Ver todo el catalogo" link at bottom

3. **Categories Section**
   - H2: "Nuestras Categorias"
   - 4 CategoryCard components in a grid
   - Each: icon, name, description, product count, click navigates to /catalogo?categoria=X

4. **Why Choose Us Section**
   - H2: "Por que elegirnos"
   - 4 value propositions with Lucide icons:
     - `Truck` — "Envios a todo el pais" / description
     - `ShieldCheck` — "Productos garantizados" / description
     - `Clock` — "Atencion rapida" / description
     - `Award` — "Marcas reconocidas" / description

5. **CTA Banner**
   - Blue background section
   - "Necesita suministros para su consultorio?"
   - "Contactenos hoy y reciba atencion personalizada"
   - WhatsApp button + Phone button

6. **Location Section**
   - H2: "Visitenos en Caracas"
   - Embedded Google Map (use iframe with the coordinates)
   - Address, hours, phone numbers
   - "Como llegar" button linking to Google Maps

---

### Page 2: Catalogo — `/catalogo`

**Header:**
- H1: "Catalogo de Productos"
- Subtitle about browsing their full inventory

**Filters:**
- Category filter buttons at the top (pill-style): "Todos" | "Instrumentos" | "Materiales" | "Equipos" | "Higiene"
- Search bar (filters products by name client-side)
- URL query param support: `/catalogo?categoria=instrumentos`

**Product Grid:**
- Responsive grid of ProductCard components
- 3 columns desktop, 2 tablet, 1 mobile
- Each card:
  - Image placeholder area (blue-lighter bg with category icon)
  - Product name (Plus Jakarta Sans, weight 600)
  - Category badge (small pill)
  - Short description (2 lines max, truncated)
  - "Consultar disponibilidad" button -> opens WhatsApp with pre-filled message: "Hola, estoy interesado en [product name]. Podrian darme informacion sobre disponibilidad y precio?"

**Bottom CTA:**
- "No encuentra lo que busca? Contactenos directamente"
- WhatsApp + phone buttons

---

### Page 3: Nosotros — `/nosotros`

**Header:**
- H1: "Sobre Venezuela Dental"

**Mission section:**
- "Nuestra Mision": Ser el proveedor lider de suministros odontologicos en Venezuela, ofreciendo productos de calidad a precios accesibles con atencion personalizada.

**About section:**
- Description of the company — established dental supply company based in La Candelaria, Caracas. Dedicated to serving dental professionals across Venezuela.
- Years of experience serving the dental community
- Committed to quality, competitive pricing, and fast delivery

**Values grid (4 cards):**
- `Target` — "Compromiso con la calidad"
- `Users` — "Atencion personalizada"
- `TrendingUp` — "Precios competitivos"
- `MapPin` — "Presencia nacional"

**Stats bar (animated counters):**
- "500+" products
- "1,000+" satisfied clients
- "24h" response time
- "10+" years of experience

---

### Page 4: Contacto — `/contacto`

**Header:**
- H1: "Contactenos"
- Subtitle: "Estamos a su disposicion para atender sus consultas y pedidos"

**Three contact cards:**
1. `MessageCircle` icon — WhatsApp: both numbers, clickable links opening WhatsApp
2. `Phone` icon — Llamenos: both phone numbers
3. `Mail` icon — Email: lepageslc@gmail.com

**Address card with map:**
- Full address
- Embedded Google Map iframe
- "Como llegar" button -> Google Maps link
- Hours: "Lunes a Viernes 8:00 AM - 5:00 PM / Sabado 8:00 AM - 12:00 PM"

**Contact Form:**
- Fields: nombre, email, telefono, tipo de consulta (select: Cotizacion, Disponibilidad, Informacion general, Otro), mensaje
- Submit sends to WhatsApp (generates a wa.me link with the form content pre-filled) OR sends via email (if Resend is configured)
- For now, submit opens WhatsApp with the message content

**FAQ section (optional, 4-5 questions):**
- "Hacen envios fuera de Caracas?" — Si, realizamos envios a todo el territorio nacional.
- "Cuales son los metodos de pago?" — Aceptamos transferencias bancarias, pago movil, efectivo y divisas.
- "Tienen garantia en los productos?" — Si, todos nuestros productos cuentan con garantia del fabricante.
- "Puedo visitar su tienda fisica?" — Si, estamos ubicados en La Candelaria, Caracas. Le recomendamos agendar su visita.
- "Manejan marcas especificas?" — Trabajamos con las principales marcas del mercado odontologico. Consultenos por disponibilidad.

---

### Page 5: Servicios — `/servicios`

**Header:**
- H1: "Nuestros Servicios"

**Services grid:**
1. `Package` — "Distribucion de suministros" — Proveemos todo tipo de materiales, instrumentos y equipos odontologicos para consultorios y clinicas.
2. `Truck` — "Envios a nivel nacional" — Realizamos envios a cualquier parte de Venezuela con embalaje seguro y seguimiento.
3. `HeadphonesIcon` — "Asesoria tecnica" — Nuestro equipo le asesora en la seleccion de productos y equipos adecuados para su practica.
4. `RefreshCw` — "Servicio post-venta" — Garantia, soporte y atencion personalizada despues de su compra.
5. `Building` — "Equipamiento de consultorios" — Asesoramos en el equipamiento completo de consultorios nuevos o renovaciones.
6. `GraduationCap` — "Capacitacion" — Orientacion sobre el uso correcto de materiales y equipos odontologicos.

**Bottom CTA:**
- "Listo para equipar su consultorio?"
- WhatsApp + phone buttons

---

## Component Specifications

### WhatsAppButton (Floating)
- Fixed position, bottom-right corner (bottom: 24px, right: 24px)
- Green circle (#25D366) with white `MessageCircle` icon
- 56px diameter, subtle shadow
- On hover: scale 1.1, shadow increases
- Links to `https://wa.me/584241874488?text=Hola,%20estoy%20interesado%20en%20sus%20productos%20odontologicos`
- Visible on all pages
- z-index 50

### ProductCard
- White bg, rounded-xl, subtle border (gray-200)
- Image area: 200px height, blue-lighter bg with centered category Lucide icon as placeholder
- Product name: Plus Jakarta Sans weight 600, gray-900
- Category badge: small pill, blue-lighter bg, blue text
- Description: gray-500, 2 lines max with line-clamp
- "Consultar disponibilidad" button: blue filled, white text
- Button click: opens WhatsApp with pre-filled message about that specific product
- Hover: translateY(-2px), shadow increase

### CategoryCard
- White bg, rounded-xl, border gray-200
- Lucide icon in a 48px blue-lighter circle
- Category name: weight 700, gray-900
- Description: gray-500
- Product count: "24 productos" in blue text
- Click: navigates to /catalogo?categoria=[id]
- Hover: border shifts to blue/30%, shadow

### ContactForm
- White bg card with border
- Inputs: gray-50 bg, gray-200 border, blue border on focus, rounded-lg
- Submit: blue filled button, "Enviar por WhatsApp"
- On submit: constructs WhatsApp URL with form data and opens it

### LanguageSwitcher
- Small toggle or dropdown in navbar: "ES | EN"
- Blue text for active, gray for inactive
- Switches all text site-wide via context

### GoogleMap
- Iframe embed pointing to the coordinates
- Rounded corners, subtle border
- Height: 300px on desktop, 200px on mobile

---

## Icon Mapping (Lucide React)

| Context | Lucide Icon |
|---|---|
| Instruments category | `Wrench` |
| Materials category | `Layers` |
| Equipment category | `Monitor` |
| Hygiene category | `ShieldPlus` |
| Shipping | `Truck` |
| Quality guarantee | `ShieldCheck` |
| Fast response | `Clock` |
| Brands | `Award` |
| WhatsApp | `MessageCircle` |
| Phone | `Phone` |
| Email | `Mail` |
| Location | `MapPin` |
| Commitment | `Target` |
| Personalized | `Users` |
| Competitive | `TrendingUp` |
| National presence | `MapPin` |
| Distribution | `Package` |
| Technical advice | `Headphones` |
| Post-sale | `RefreshCw` |
| Clinic equip | `Building` |
| Training | `GraduationCap` |
| Search | `Search` |
| Menu | `Menu` |
| Close | `X` |
| Chevron | `ChevronDown` |
| External link | `ExternalLink` |
| Clock/hours | `Clock` |

All icons: blue (#2191b9) by default, size 24-32, stroke-width 1.5-2.

---

## Animation Specs

- **Card hover:** translateY(-2px), box-shadow transition, border-color transition, 0.3s ease
- **Fade-in on scroll:** Framer Motion whileInView, opacity 0->1, y: 16->0, duration 0.5s, stagger 0.1s
- **WhatsApp button:** subtle pulse animation on idle (CSS keyframe, scale 1->1.05->1, 3s infinite)
- **Navbar:** subtle shadow on scroll (box-shadow transition)
- **Counter animations:** on Nosotros page, scroll-triggered count-up for stats

---

## SEO / Metadata

```typescript
export const metadata: Metadata = {
  title: "Venezuela Dental — Suministros Odontologicos en Caracas",
  description: "Proveedor de instrumentos, materiales, equipos y productos de higiene dental en Venezuela. Atencion personalizada y envios a todo el pais.",
  keywords: "suministros odontologicos, dental venezuela, instrumentos dentales caracas, materiales odontologicos, equipos dentales",
  openGraph: {
    locale: "es_VE",
    siteName: "Venezuela Dental",
  },
};
```

Each page should have unique title and description.

---

## Translations

Create full ES/EN translation objects for all text on all pages. Spanish is the primary language. English translations for the full site including product names, categories, navigation, CTAs, form labels, FAQ, etc.

---

## WhatsApp Integration

All "buy" or "inquire" buttons should generate a WhatsApp link:

```typescript
function getWhatsAppUrl(productName?: string): string {
  const baseUrl = "https://wa.me/584241874488";
  const defaultMessage = "Hola, estoy interesado en sus productos odontologicos.";
  const productMessage = productName
    ? `Hola, estoy interesado en "${productName}". ¿Podrian darme informacion sobre disponibilidad y precio?`
    : defaultMessage;
  return `${baseUrl}?text=${encodeURIComponent(productMessage)}`;
}
```

---

## Build & Run

```bash
npx create-next-app@latest venezuela-dental --typescript --tailwind --app --src-dir
cd venezuela-dental
npm install lucide-react framer-motion
# Copy logo.svg to public/
npm run dev
```

---

## Quality Checklist

- [ ] All 5 pages render correctly
- [ ] Language toggle works (ES/EN)
- [ ] Zero emojis in rendered output
- [ ] All icons are Lucide React
- [ ] Colors match brand: blue #2191b9, white, grays
- [ ] Typography: Plus Jakarta Sans throughout
- [ ] Logo renders from SVG on navbar and footer
- [ ] Product cards link to WhatsApp with pre-filled messages
- [ ] Floating WhatsApp button visible on all pages
- [ ] Google Map embedded on contact page
- [ ] Category filters work on catalog page
- [ ] Search filters products client-side
- [ ] Mobile responsive: hamburger menu, stacked grids
- [ ] Contact form opens WhatsApp with message content
- [ ] FAQ accordion works on contact page
- [ ] Stats counters animate on nosotros page
- [ ] All product placeholders render cleanly
- [ ] Footer consistent across all pages
- [ ] WhatsApp links use correct Venezuelan phone format
