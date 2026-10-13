import { company } from "../config/company";

function ContactAction() {
  return (
    <a
      aria-label={`Contact us by email at ${company.contactEmail}`}
      className="contact-button group"
      href={`mailto:${company.contactEmail}`}
    >
      <span>Contact Us</span>
      <span
        aria-hidden="true"
        className="contact-arrow transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

export default function Hero() {
  return (
    <main className="site-shell flex flex-1 items-center py-12 sm:py-16 lg:py-20">
      <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(19rem,0.65fr)] lg:gap-16 xl:gap-24">
        <section className="hero-enter max-w-4xl">
          <div className="mb-7 flex items-center gap-4 sm:mb-9">
            <span className="h-px w-9 bg-ocean sm:w-12" />
            <p className="text-xs font-bold tracking-[0.18em] text-ocean-light">
              OFFSHORE MARINE &amp; LOGISTICS
            </p>
          </div>

          <h1 className="max-w-4xl text-[clamp(2.65rem,6.2vw,6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-balance">
            Connecting Marine Operations.
            <span className="mt-2 block text-white/90">
              Delivering Reliable Logistics.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-white/85 sm:mt-9 sm:text-lg sm:leading-8">
            We are preparing our digital home to better connect our services,
            capabilities, and commitment to the offshore marine and logistics
            industry.
          </p>
        </section>

        <aside className="hero-enter hero-enter-delay border-l border-white/25 pl-6 sm:pl-8 lg:mb-1 lg:pl-10">
          <p className="mb-5 text-xs font-bold tracking-[0.17em] text-ocean-light">
            OUR WEBSITE IS COMING SOON
          </p>
          <p className="max-w-md text-sm font-medium leading-6 text-white/82 sm:text-base sm:leading-7">
            Our official website is currently under development. Please check
            back soon for more information about our company and services.
          </p>
          <div className="mt-8 sm:mt-10">
            <ContactAction />
          </div>
        </aside>
      </div>
    </main>
  );
}
