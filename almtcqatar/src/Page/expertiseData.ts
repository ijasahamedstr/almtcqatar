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
      "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp",
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp",
      "https://i.ibb.co/7NXbNgJv/IMG-20210912-WA0079.webp",
      "https://i.ibb.co/RpPK76S1/IMG-20210912-WA0080.webp",
      "https://i.ibb.co/d4hXJ41R/IMG-20210912-WA0083.webp",
      "https://i.ibb.co/tMRZtsR7/IMG-20210912-WA0087.webp",
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
      "https://i.ibb.co/Z1GW87X2/IMG-20210912-WA0093.webp",
      "https://i.ibb.co/tMRZtsR7/IMG-20210912-WA0087.webp",
      "https://i.ibb.co/20HBJVQW/e984d148-e9cb-43a7-9d64-4005e6cfb924.webp",
      "https://i.ibb.co/Jjz749Nh/a1af156a-44c5-43f9-b3f3-c5bc9824599a.webp",
      "https://i.ibb.co/bgLKyBK0/0502010005-06-Furniture-in-Arabic-Interior-Style-Traditional-low-height-seating-736x400-1.jpg",
      "https://i.ibb.co/fdFw9dsL/Arabic-interior-design2.webp",
      "https://i.ibb.co/21VGGDsm/Arabic-Interior-Fit-out.jpg",
      "https://i.ibb.co/7dc8b5Rt/Save-Clip-App-487816728-18374755837142957-3802481544614797061-n.webp",
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
      "https://i.ibb.co/DDKCnm4s/103c2832effa87e98cc2cc35efa402ce.jpg",
      "https://i.ibb.co/FqBQ8zJD/4e39d786ada1dad87c4adacc35c2f47b.jpg",
      "https://i.ibb.co/rKVCv4ZS/black-curtains01.webp",
      "https://i.ibb.co/zVXP4PTL/curtains-and-upholstery.jpg",
      "https://i.ibb.co/0jHBWFt8/curtains-dubai.jpg",
      "https://i.ibb.co/tMkS0Ckc/e8d1cfb54533cf7e40ff0ec99009ca5e.jpg",
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
    ],
  },
  {
    title: "Special finishes",
    slug: createExpertiseSlug("Special finishes"),
    heroImage:
      "https://i.ibb.co/0V9srdRd/IMG-20210912-WA0012.webp",
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
      "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_clay-design_3.jpg.avif",
      "https://i.ibb.co/q3WSDv8Z/IMG-20191120-WA0003.webp",
      "https://i.ibb.co/0LH5dnv/IMG-20191120-WA0005.webp",
      "https://i.ibb.co/VY3TgmxR/IMG-20191120-WA0007.webp",
      "https://i.ibb.co/0V9srdRd/IMG-20210912-WA0012.webp",
      "https://i.ibb.co/KpxTKN35/IMG-20210912-WA0014.webp",
      "https://i.ibb.co/gbnMVTN5/IMG-20210912-WA0018.webp",
      "https://i.ibb.co/Fqgsdv8c/IMG-20210912-WA0021.webp",
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
    ],
  },
];