import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { LocationMapSection } from "./sections/LocationMapSection";
import { OutreachFormSection } from "./sections/OutreachFormSection";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/conference" },
] as const;

export const Contact = (): JSX.Element => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(260px, 26vw, 500px)" }}>
        {/* Background */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo9oe40uKob8r6/img/rectangle-9535.svg"
        />

        {/* Navbar */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 pt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="all-[unset] box-border cursor-pointer flex-shrink-0"
            aria-label="Go to home"
          >
            <img
              className="h-12 w-auto object-contain"
              alt="ICS Global logo"
              src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776850331288-0.png"
            />
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden lg:inline-flex items-center gap-8 xl:gap-10 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm px-4 py-3.5"
          >
            {navItems.map((item) => {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="all-[unset] box-border cursor-pointer"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-base leading-6 tracking-[0] whitespace-nowrap text-primary-3">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="all-[unset] box-border hidden md:inline-flex items-center justify-center gap-2 h-12 px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
              Join the Community
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer gap-[5px] flex-shrink-0"
          >
            <span className="block w-6 h-[2.5px] bg-white rounded-full" />
            <span className="block w-6 h-[2.5px] bg-white rounded-full" />
            <span className="block w-6 h-[2.5px] bg-white rounded-full" />
          </button>
        </header>

        {/* Mobile full-screen overlay menu */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{ background: "linear-gradient(160deg, #29a8e0 0%, #1a6fa8 60%, #0e2a47 100%)" }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <button type="button" onClick={() => { navigate("/"); setMenuOpen(false); }} className="cursor-pointer" aria-label="Go to home">
                <img
                  className="h-12 w-auto object-contain"
                  alt="ICS Global logo"
                  src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776850331288-0.png"
                />
              </button>
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center cursor-pointer">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="4" x2="24" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                  <line x1="24" y1="4" x2="4" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="mx-4 mt-4 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl">
              {navItems.map((item) => {
                const isActive = item.label === "Contact";
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => { navigate(item.path); setMenuOpen(false); }}
                    className="w-full text-left cursor-pointer"
                  >
                    <div className={`mx-2 my-1 px-6 py-4 rounded-xl ${isActive ? "bg-[#1a4f72]" : ""}`}>
                      <span className={`[font-family:'Poppins',Helvetica] text-xl font-bold leading-tight ${isActive ? "text-white" : "text-[#555f6d]"}`}>
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
              <div className="px-4 py-4 mt-1">
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center py-5 bg-[#1a4f72] rounded-xl cursor-pointer hover:bg-[#163f5c] transition-colors"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl leading-tight">Connect</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hero content */}
        <ContactHeroSection />
      </section>

      {/* ── MAP ── */}
      <section aria-label="Map preview" className="w-full bg-[#0a2a50]">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 pt-10 md:pt-14">
          <div
            className="relative w-full rounded-2xl border border-solid border-gray-200 overflow-hidden"
            style={{ height: "clamp(220px, 33.5vw, 644px)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000.0!2d73.738601!3d18.5863645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb00907081fd%3A0x5f1ba7f78fe527fe!2sIdealizeer%20Content%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1704710000000!5m2!1sen!2sin&q=18.5863645,73.738601"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICS Global office location"
              className="filter contrast-[1.1] brightness-[0.9] grayscale-[0.3]"
            />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.4)] z-10" />
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="w-full bg-[#0a2a50]">
        <LocationMapSection />
      </section>

      {/* ── CONTACT FORM + FOOTER ── */}
      <OutreachFormSection />
    </div>
  );
};
