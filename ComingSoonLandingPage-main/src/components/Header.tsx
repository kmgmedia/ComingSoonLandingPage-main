import { company } from "../config/company";

export default function Header() {
  return (
    <header className="site-shell flex items-center justify-between border-b border-white/15 py-5 sm:py-6">
      <div className="flex items-center gap-3.5 sm:gap-4">
        <div
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center border border-white/50 bg-white/5 text-xs font-extrabold tracking-widest backdrop-blur-sm"
        >
          LM
        </div>
        <div className="max-w-72">
          <p className="text-xs font-bold leading-normal tracking-widest text-white">
            {company.name}
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-3 text-xs font-semibold tracking-[0.14em] text-white/90 sm:flex">
        <span className="size-1.5 rounded-full bg-ocean shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
        DIGITAL HOME IN PROGRESS
      </div>
    </header>
  );
}
