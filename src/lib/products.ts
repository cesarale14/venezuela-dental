import { Product } from "@/types";

export const products: Product[] = [
  // Instrumentos (6)
  {
    id: "inst-001",
    nameEs: "Espejo Dental #5 con Mango",
    nameEn: "Dental Mirror #5 with Handle",
    descriptionEs:
      "Espejo dental de acero inoxidable con mango ergon\u00f3mico. Ideal para examen cl\u00ednico y diagn\u00f3stico.",
    descriptionEn:
      "Stainless steel dental mirror with ergonomic handle. Ideal for clinical examination and diagnosis.",
    category: "instrumentos",
    image: "/products/inst-001.jpg",
    featured: true,
    tags: ["espejo", "diagn\u00f3stico", "acero"],
  },
  {
    id: "inst-002",
    nameEs: "Explorador Dental Doble Punta",
    nameEn: "Double-Ended Dental Explorer",
    descriptionEs:
      "Explorador de doble punta para detecci\u00f3n de caries y examen de superficies dentales.",
    descriptionEn:
      "Double-ended explorer for caries detection and dental surface examination.",
    category: "instrumentos",
    image: "/products/inst-002.jpg",
    featured: false,
    tags: ["explorador", "diagn\u00f3stico"],
  },
  {
    id: "inst-003",
    nameEs: "Pinza Algodonera Premium",
    nameEn: "Premium Cotton Plier",
    descriptionEs:
      "Pinza algodonera de acero inoxidable con puntas estriadas para mejor agarre.",
    descriptionEn:
      "Stainless steel cotton plier with serrated tips for better grip.",
    category: "instrumentos",
    image: "/products/inst-003.jpg",
    featured: false,
    tags: ["pinza", "algod\u00f3n"],
  },
  {
    id: "inst-004",
    nameEs: "Kit de Curetas Gracey (7 piezas)",
    nameEn: "Gracey Curette Kit (7 pieces)",
    descriptionEs:
      "Set completo de curetas Gracey para raspado y alisado radicular. Acero quir\u00fargico.",
    descriptionEn:
      "Complete Gracey curette set for scaling and root planing. Surgical steel.",
    category: "instrumentos",
    image: "/products/inst-004.jpg",
    featured: true,
    tags: ["cureta", "periodoncia"],
  },
  {
    id: "inst-005",
    nameEs: "Elevador Recto #301",
    nameEn: "Straight Elevator #301",
    descriptionEs:
      "Elevador recto de acero inoxidable para exodoncia. Mango ergon\u00f3mico antideslizante.",
    descriptionEn:
      "Stainless steel straight elevator for extractions. Non-slip ergonomic handle.",
    category: "instrumentos",
    image: "/products/inst-005.jpg",
    featured: false,
    tags: ["elevador", "cirug\u00eda"],
  },
  {
    id: "inst-006",
    nameEs: "F\u00f3rceps Universal Superior #150",
    nameEn: "Universal Upper Forceps #150",
    descriptionEs:
      "F\u00f3rceps universal para premolares y ra\u00edces superiores. Acero quir\u00fargico de alta calidad.",
    descriptionEn:
      "Universal forceps for upper premolars and roots. High-quality surgical steel.",
    category: "instrumentos",
    image: "/products/inst-006.jpg",
    featured: false,
    tags: ["f\u00f3rceps", "cirug\u00eda", "exodoncia"],
  },

  // Materiales (6)
  {
    id: "mat-001",
    nameEs: "Kit de Resina Compuesta A2",
    nameEn: "Composite Resin Kit A2",
    descriptionEs:
      "Resina compuesta nanoh\u00edbrida color A2. Excelente pulido y resistencia. Jeringa de 4g.",
    descriptionEn:
      "Nanohybrid composite resin shade A2. Excellent polish and resistance. 4g syringe.",
    category: "materiales",
    image: "/products/mat-001.jpg",
    featured: true,
    tags: ["resina", "restauraci\u00f3n", "est\u00e9tica"],
  },
  {
    id: "mat-002",
    nameEs: "Cemento de Ion\u00f3mero de Vidrio",
    nameEn: "Glass Ionomer Cement",
    descriptionEs:
      "Cemento de ion\u00f3mero de vidrio para cementaci\u00f3n y restauraciones. Liberaci\u00f3n de fl\u00faor.",
    descriptionEn:
      "Glass ionomer cement for cementation and restorations. Fluoride release.",
    category: "materiales",
    image: "/products/mat-002.jpg",
    featured: false,
    tags: ["cemento", "ion\u00f3mero", "restauraci\u00f3n"],
  },
  {
    id: "mat-003",
    nameEs: "Adhesivo Dental Universal",
    nameEn: "Universal Dental Adhesive",
    descriptionEs:
      "Sistema adhesivo universal de quinta generaci\u00f3n. Compatible con todas las resinas.",
    descriptionEn:
      "Fifth generation universal adhesive system. Compatible with all resins.",
    category: "materiales",
    image: "/products/mat-003.jpg",
    featured: false,
    tags: ["adhesivo", "bonding"],
  },
  {
    id: "mat-004",
    nameEs: "Material de Impresi\u00f3n Silicona",
    nameEn: "Silicone Impression Material",
    descriptionEs:
      "Silicona de adici\u00f3n para impresiones de alta precisi\u00f3n. Kit base + catalizador.",
    descriptionEn:
      "Addition silicone for high-precision impressions. Base + catalyst kit.",
    category: "materiales",
    image: "/products/mat-004.jpg",
    featured: true,
    tags: ["impresi\u00f3n", "silicona", "pr\u00f3tesis"],
  },
  {
    id: "mat-005",
    nameEs: "Amalgama en C\u00e1psulas (50 unidades)",
    nameEn: "Amalgam Capsules (50 units)",
    descriptionEs:
      "Amalgama de plata en c\u00e1psulas predosificadas. Alta resistencia y f\u00e1cil manipulaci\u00f3n.",
    descriptionEn:
      "Silver amalgam in pre-dosed capsules. High resistance and easy handling.",
    category: "materiales",
    image: "/products/mat-005.jpg",
    featured: false,
    tags: ["amalgama", "restauraci\u00f3n"],
  },
  {
    id: "mat-006",
    nameEs: "\u00c1cido Grabador al 37%",
    nameEn: "37% Etching Acid",
    descriptionEs:
      "Gel de \u00e1cido fosf\u00f3rico al 37% para grabado de esmalte y dentina. Jeringa de 5ml.",
    descriptionEn:
      "37% phosphoric acid gel for enamel and dentin etching. 5ml syringe.",
    category: "materiales",
    image: "/products/mat-006.jpg",
    featured: false,
    tags: ["\u00e1cido", "grabado", "adhesi\u00f3n"],
  },

  // Equipos (6)
  {
    id: "equip-001",
    nameEs: "Unidad Dental Hidr\u00e1ulica Premium",
    nameEn: "Premium Hydraulic Dental Unit",
    descriptionEs:
      "Unidad dental hidr\u00e1ulica completa con sill\u00f3n, l\u00e1mpara, bandeja y escupidera. Garant\u00eda incluida.",
    descriptionEn:
      "Complete hydraulic dental unit with chair, lamp, tray and cuspidor. Warranty included.",
    category: "equipos",
    image: "/products/equip-001.jpg",
    featured: true,
    tags: ["unidad", "sill\u00f3n", "consultorio"],
  },
  {
    id: "equip-002",
    nameEs: "L\u00e1mpara de Fotocurado LED",
    nameEn: "LED Curing Light",
    descriptionEs:
      "L\u00e1mpara de fotocurado LED inal\u00e1mbrica. 1200mW/cm2, bater\u00eda de larga duraci\u00f3n.",
    descriptionEn:
      "Wireless LED curing light. 1200mW/cm2, long-lasting battery.",
    category: "equipos",
    image: "/products/equip-002.jpg",
    featured: true,
    tags: ["l\u00e1mpara", "fotocurado", "LED"],
  },
  {
    id: "equip-003",
    nameEs: "Autoclave Digital 18 Litros",
    nameEn: "18-Liter Digital Autoclave",
    descriptionEs:
      "Autoclave digital clase B de 18 litros. Ciclos autom\u00e1ticos, pantalla LCD.",
    descriptionEn:
      "18-liter class B digital autoclave. Automatic cycles, LCD display.",
    category: "equipos",
    image: "/products/equip-003.jpg",
    featured: false,
    tags: ["autoclave", "esterilizaci\u00f3n"],
  },
  {
    id: "equip-004",
    nameEs: "Compresor Dental Libre de Aceite",
    nameEn: "Oil-Free Dental Compressor",
    descriptionEs:
      "Compresor dental silencioso libre de aceite. 1HP, tanque de 30 litros.",
    descriptionEn:
      "Silent oil-free dental compressor. 1HP, 30-liter tank.",
    category: "equipos",
    image: "/products/equip-004.jpg",
    featured: false,
    tags: ["compresor", "aire"],
  },
  {
    id: "equip-005",
    nameEs: "Equipo de Rayos X Port\u00e1til",
    nameEn: "Portable X-Ray Unit",
    descriptionEs:
      "Equipo de rayos X dental port\u00e1til. Ligero, ergon\u00f3mico y de alta resoluci\u00f3n.",
    descriptionEn:
      "Portable dental X-ray unit. Lightweight, ergonomic and high resolution.",
    category: "equipos",
    image: "/products/equip-005.jpg",
    featured: false,
    tags: ["rayos x", "radiograf\u00eda", "diagn\u00f3stico"],
  },
  {
    id: "equip-006",
    nameEs: "Scaler Ultras\u00f3nico con Puntas",
    nameEn: "Ultrasonic Scaler with Tips",
    descriptionEs:
      "Scaler ultras\u00f3nico de mesa con 5 puntas intercambiables. Ideal para profilaxis.",
    descriptionEn:
      "Tabletop ultrasonic scaler with 5 interchangeable tips. Ideal for prophylaxis.",
    category: "equipos",
    image: "/products/equip-006.jpg",
    featured: false,
    tags: ["scaler", "ultrasonido", "profilaxis"],
  },

  // Higiene (6)
  {
    id: "hig-001",
    nameEs: "Caja de Guantes de Nitrilo x100",
    nameEn: "Nitrile Gloves Box x100",
    descriptionEs:
      "Guantes de nitrilo sin polvo, talla M. Caja de 100 unidades. Hipoalerg\u00e9nicos.",
    descriptionEn:
      "Powder-free nitrile gloves, size M. Box of 100 units. Hypoallergenic.",
    category: "higiene",
    image: "/products/hig-001.jpg",
    featured: true,
    tags: ["guantes", "nitrilo", "bioseguridad"],
  },
  {
    id: "hig-002",
    nameEs: "Tapabocas Quir\u00fargico x50",
    nameEn: "Surgical Face Masks x50",
    descriptionEs:
      "Tapabocas quir\u00fargicos de 3 capas con el\u00e1stico. Caja de 50 unidades.",
    descriptionEn:
      "3-ply surgical face masks with elastic. Box of 50 units.",
    category: "higiene",
    image: "/products/hig-002.jpg",
    featured: false,
    tags: ["tapabocas", "bioseguridad"],
  },
  {
    id: "hig-003",
    nameEs: "Desinfectante de Superficies 1L",
    nameEn: "Surface Disinfectant 1L",
    descriptionEs:
      "Desinfectante de superficies de nivel intermedio. Acci\u00f3n bactericida y viricida.",
    descriptionEn:
      "Intermediate-level surface disinfectant. Bactericidal and viricidal action.",
    category: "higiene",
    image: "/products/hig-003.jpg",
    featured: false,
    tags: ["desinfectante", "limpieza"],
  },
  {
    id: "hig-004",
    nameEs: "Baberos Desechables x100",
    nameEn: "Disposable Bibs x100",
    descriptionEs:
      "Baberos desechables impermeables con cadena. Paquete de 100 unidades.",
    descriptionEn:
      "Waterproof disposable bibs with chain. Pack of 100 units.",
    category: "higiene",
    image: "/products/hig-004.jpg",
    featured: false,
    tags: ["babero", "desechable"],
  },
  {
    id: "hig-005",
    nameEs: "Soluci\u00f3n Esterilizante Glutaraldeh\u00eddo",
    nameEn: "Glutaraldehyde Sterilizing Solution",
    descriptionEs:
      "Soluci\u00f3n de glutaraldeh\u00eddo al 2% para esterilizaci\u00f3n en fr\u00edo de instrumental.",
    descriptionEn:
      "2% glutaraldehyde solution for cold sterilization of instruments.",
    category: "higiene",
    image: "/products/hig-005.jpg",
    featured: false,
    tags: ["esterilizante", "glutaraldeh\u00eddo"],
  },
  {
    id: "hig-006",
    nameEs: "Campos Operatorios Est\u00e9riles x25",
    nameEn: "Sterile Surgical Drapes x25",
    descriptionEs:
      "Campos operatorios est\u00e9riles desechables. Paquete de 25 unidades, 45x45cm.",
    descriptionEn:
      "Sterile disposable surgical drapes. Pack of 25 units, 45x45cm.",
    category: "higiene",
    image: "/products/hig-006.jpg",
    featured: false,
    tags: ["campo", "est\u00e9ril", "cirug\u00eda"],
  },
];
