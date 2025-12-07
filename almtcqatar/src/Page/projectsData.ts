// src/data/projectsData.ts

// --- Helper: make a URL-safe slug from a title ---
export const createProjectSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

// --- Types ---
export type Project = {
  title: string;
  img: string; // main image
  slug: string;
  description: string;
  amount?: string;
  gallery: string[];
};

// --- Raw Data (without slug) ---
const rawProjects: Omit<Project, "slug">[] = [
  {
    title: "Art work - Clay design",
    img: "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_clay-design_3.jpg.avif",
    description:
      "Bespoke clay artwork and wall treatments, created to complement the client’s interior mood and architectural details.",
    amount: "SAR 120,000",
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_clay-design_3.jpg.avif",
      "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_clay-design_3.jpg.avif",
    ],
  },
  {
    title: "Dior - Maintenance work",
    img: "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_dior_maintenance_4.jpg.avif",
    description:
      "Ongoing maintenance and finishing works for a luxury retail space, ensuring premium brand standards are always met.",
    amount: "SAR 250,000",
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_dior_maintenance_4.jpg.avif",
    ],
  },
  {
    title: "Najd Artwork",
    img: "https://maisonrandf.com/wp-content/uploads/2023/06/Najd-Artwork.jpg.avif",
    description:
      "Custom artwork inspired by Najd heritage, blending contemporary aesthetics with traditional motifs.",
    amount: "SAR 90,000",
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/06/Najd-Artwork.jpg.avif",
    ],
  },
  {
    title: "Hotel restaurant refurbishment",
    img: "https://maisonrandf.com/wp-content/uploads/2023/04/photo-principale-du-projet-min-1536x2048.jpg.webp",
    description:
      "Full refurbishment of a hotel restaurant including finishes, lighting, and bespoke furniture elements.",
    amount: "SAR 480,000",
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/photo-principale-du-projet-min-1536x2048.jpg.webp",
    ],
  },
  {
    title: "Private Palace",
    img: "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif",
    description:
      "High-end decorative paint and finishes for a private palace, with focus on luxury and fine detailing.",
    amount: "SAR 1,200,000",
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif",
    ],
  },
  {
    title: "Hotel lounge refurbishment",
    img: "https://maisonrandf.com/wp-content/uploads/2023/04/Durat-Lounge-1536x2048.jpg.webp",
    description:
      "Refurbishment of a hotel lounge area, creating a warm and inviting atmosphere for guests.",
    amount: "SAR 350,000",
    gallery: [
      "https://maisonrandf.com/wp-content/uploads/2023/04/Durat-Lounge-1536x2048.jpg.webp",
    ],
  },
];

// --- Final Data with slug ---
export const projectsData: Project[] = rawProjects.map((p) => ({
  ...p,
  slug: createProjectSlug(p.title),
}));
