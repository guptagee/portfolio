export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveLink: string;
  githubLink: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "urbannest-real-estate-management-system",
    title: "UrbanNest Real Estate Management System",
    description:
      "A full-stack real estate platform for property listing, advanced search, and role-based management for buyers, sellers, and admins.",
    problem:
      "Property discovery often feels fragmented across slow portals with poor filtering, weak UX, and limited management workflows.",
    solution:
      "Built a scalable real estate management workflow with clean UI, listing filters, and modular backend services for maintainability and growth.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/images/project-sarkari.svg",
    imageAlt:
      "Real estate dashboard preview with property cards and management tools",
    liveLink: "https://urbannest.mukeshgupta.co.in/",
    githubLink:
      "https://github.com/guptagee/UrbanNest-Real-Estate-Management-System.git",
    featured: true,
  },
  {
    slug: "auction-platform",
    title: "Auction Platform",
    description:
      "An online auction system with bid workflows, listing management, and real-time interaction patterns for buyers and sellers.",
    problem:
      "Traditional listing systems do not support dynamic competitive pricing and transparent bidding in a user-friendly flow.",
    solution:
      "Developed a modular auction platform with secure bid handling, clean dashboards, and robust API integration for listing lifecycle management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/project-hireflow.svg",
    imageAlt: "Auction platform interface with bid and listing controls",
    liveLink: "https://auction-platform-hazel-one.vercel.app/",
    githubLink: "https://github.com/guptagee/auction_platform.git",
    featured: true,
  },
  {
    slug: "localbiz-seo-suite",
    title: "LocalBiz SEO Suite",
    description:
      "An SEO automation toolkit for local businesses with schema generation and content performance tracking.",
    problem:
      "Small businesses lacked a practical workflow for technical SEO and publishing optimized location pages.",
    solution:
      "Created guided workflows for metadata, structured data, and content briefs; added crawl-friendly information architecture.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
    image: "/images/project-localbiz.svg",
    imageAlt: "SEO analytics interface with keyword and page health metrics",
    liveLink: "https://example.com/localbiz",
    githubLink: "https://github.com/example/localbiz-seo-suite",
    featured: true,
  },
  {
    slug: "devthreads-community",
    title: "DevThreads Community",
    description:
      "A niche developer forum with markdown posts, moderation tools, and topic-based discovery.",
    problem:
      "Early-stage dev communities often suffer from weak content organization and poor discoverability.",
    solution:
      "Implemented topic taxonomies, clean URLs, and server-rendered landing pages for faster indexing and topic authority.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    image: "/images/project-devthreads.svg",
    imageAlt: "Developer community feed with discussion threads",
    liveLink: "https://example.com/devthreads",
    githubLink: "https://github.com/example/devthreads-community",
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
