// src/Page/expertiseData.ts

// Helper to create a URL-safe slug (same logic as projects)
export const createExpertiseSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export type ExpertiseItem = {
  title: string;
  slug: string;
  heroImage: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  gallery: string[];
};

export const expertiseData: ExpertiseItem[] = [
  {
    title: "Design & Project Management",
    slug: createExpertiseSlug("Design & Project Management"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Durat-Lobby-19.jpg.avif",
    subtitle: "From Design to Execution",
    description:
      "A French expertise for crafting exclusive interiors, from concept design to final handover, ensuring every detail aligns with the client’s vision.",
    bullets: [
      "Interior design development",
      "Project Management",
      "Procurement Management",
      "Quality control",
      "Maintenance services",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Durat-Lobby-19.jpg.avif",
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_special-finishes-min-1147x2048.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_curtaining.jpg.avif",
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp",
    ],
  },
  {
    title: "Furniture",
    slug: createExpertiseSlug("Furniture"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_customized-furniture-_1__1-1536x2048.jpg.webp",
    subtitle: "Customized Furniture & Joinery",
    description:
      "Tailor-made furniture pieces that blend craftsmanship, comfort and durability, designed to harmonize perfectly with each project’s identity.",
    bullets: [
      "Bespoke loose furniture",
      "Integrated joinery elements",
      "High-quality finishes and upholstery",
      "Coordination with interior concept",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_customized-furniture-_1__1-1536x2048.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/04/photo-principale-du-projet-min-1536x2048.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif",
    ],
  },
  {
    title: "Curtaining & upholstery",
    slug: createExpertiseSlug("Curtaining & upholstery"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_curtaining.jpg.avif",
    subtitle: "Soft Finishes & Textiles",
    description:
      "Refined curtaining and upholstery solutions that bring softness, warmth and acoustic comfort to interiors.",
    bullets: [
      "Custom-made curtains and sheers",
      "Upholstery for seating & wall panels",
      "Selection of premium textiles",
      "On-site fitting and adjustments",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_curtaining.jpg.avif",
      "https://maisonrandf.com/wp-content/uploads/2023/06/Najd-Artwork.jpg.avif",
    ],
  },
  {
    title: "Joinery work",
    slug: createExpertiseSlug("Joinery work"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp",
    subtitle: "Complex Architectural Joinery",
    description:
      "Technical and decorative joinery elements that integrate seamlessly within the architecture of the space.",
    bullets: [
      "Wall claddings and paneling",
      "Doors, frames and built-ins",
      "CNC and hand-crafted details",
      "Coordination with MEP and site constraints",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif",
    ],
  },
  {
    title: "Special finishes",
    slug: createExpertiseSlug("Special finishes"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_special-finishes-min-1147x2048.jpg.webp",
    subtitle: "Signature Materials & Surfaces",
    description:
      "Exclusive decorative finishes that give each project a unique and recognizable character.",
    bullets: [
      "Decorative paints and coatings",
      "Textured plasters and claddings",
      "Metal, stone and glass finishes",
      "Custom-made feature walls",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_special-finishes-min-1147x2048.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_clay-design_3.jpg.avif",
    ],
  },
  {
    title: "Straw marquetry",
    slug: createExpertiseSlug("Straw marquetry"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp",
    subtitle: "Artisanal Decorative Art",
    description:
      "A rare French savoir-faire using straw inlays to create luxurious, shimmering decorative surfaces.",
    bullets: [
      "Custom straw marquetry panels",
      "Furniture inlays and accents",
      "Tailor-made patterns and colours",
      "Integration with wall and joinery elements",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif",
    ],
  },
   {
    title: "Curtaining & upholstery",
    slug: createExpertiseSlug("Curtaining & upholstery"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_curtaining.jpg.avif",
    subtitle: "Soft Finishes & Textiles",
    description:
      "Refined curtaining and upholstery solutions that bring softness, warmth and acoustic comfort to interiors.",
    bullets: [
      "Custom-made curtains and sheers",
      "Upholstery for seating & wall panels",
      "Selection of premium textiles",
      "On-site fitting and adjustments",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_curtaining.jpg.avif",
      "https://maisonrandf.com/wp-content/uploads/2023/06/Najd-Artwork.jpg.avif",
    ],
  },
  {
    title: "Joinery work",
    slug: createExpertiseSlug("Joinery work"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp",
    subtitle: "Complex Architectural Joinery",
    description:
      "Technical and decorative joinery elements that integrate seamlessly within the architecture of the space.",
    bullets: [
      "Wall claddings and paneling",
      "Doors, frames and built-ins",
      "CNC and hand-crafted details",
      "Coordination with MEP and site constraints",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif",
    ],
  },
  {
    title: "Special finishes",
    slug: createExpertiseSlug("Special finishes"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_special-finishes-min-1147x2048.jpg.webp",
    subtitle: "Signature Materials & Surfaces",
    description:
      "Exclusive decorative finishes that give each project a unique and recognizable character.",
    bullets: [
      "Decorative paints and coatings",
      "Textured plasters and claddings",
      "Metal, stone and glass finishes",
      "Custom-made feature walls",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_special-finishes-min-1147x2048.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_clay-design_3.jpg.avif",
    ],
  },
  {
    title: "Straw marquetry",
    slug: createExpertiseSlug("Straw marquetry"),
    heroImage:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp",
    subtitle: "Artisanal Decorative Art",
    description:
      "A rare French savoir-faire using straw inlays to create luxurious, shimmering decorative surfaces.",
    bullets: [
      "Custom straw marquetry panels",
      "Furniture inlays and accents",
      "Tailor-made patterns and colours",
      "Integration with wall and joinery elements",
    ],
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif",
    ],
  },
];
