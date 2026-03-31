export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Mukesh Gupta. All rights reserved.</p>
        <p>MERN Stack Developer · Ai/Ml · SEO · Performance-first web apps</p>
      </div>
    </footer>
  );
}
