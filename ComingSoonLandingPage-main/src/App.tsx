import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-navy text-white">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[62%_center]"
        fetchPriority="high"
        src="https://images.unsplash.com/photo-1530890448995-4d82724f702c?auto=format&fit=crop&w=2400&q=82"
      />
      <div className="hero-overlay absolute inset-0 -z-20" />
      <div className="ocean-glow absolute inset-0 -z-10" />

      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
