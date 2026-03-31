# Personal Portfolio - Next.js + Tailwind

A modern, responsive, SEO-focused personal portfolio for a MERN stack developer.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- next/image for optimized images
- Markdown blog content with gray-matter + remark

## Pages

- /
- /about
- /projects
- /projects/[slug]
- /blog
- /blog/[slug]
- /contact

## Features

- Dynamic routing for project and blog detail pages
- Dynamic metadata generation for SEO
- Semantic HTML and heading hierarchy
- Sitemap and robots support
- Reusable UI components (Navbar, Footer, Button, ProjectCard, BlogCard)
- Resume download button
- Smooth scrolling and subtle entrance animations
- Mobile-first responsive layout

## Folder Structure

```text
src/
	app/
	components/
	data/
	lib/
content/
	blog/
public/
	images/
```

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Customize

- Replace placeholder links and personal info in the contact page and project data.
- Update the base URL in metadata files:
  - src/app/layout.tsx
  - src/app/sitemap.ts
  - src/app/robots.ts
- Add more markdown posts to content/blog.
