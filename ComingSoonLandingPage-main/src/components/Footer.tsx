import { company } from "../config/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-shell border-t border-white/15 py-5 sm:py-6">
      <div className="flex flex-col gap-3 text-xs font-semibold tracking-[0.07em] text-white/80 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {company.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end">
          <p className="text-white/85">
            Built on reliability. Focused on delivery.
          </p>
          <a
            className="transition-colors hover:text-white/75 focus-visible:text-white"
            href="https://unsplash.com/@son_of_media"
            rel="noreferrer"
            target="_blank"
          >
            Photo: Dylan McLeod
          </a>
        </div>
      </div>
    </footer>
  );
}
