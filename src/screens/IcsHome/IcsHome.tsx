import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConferenceCtaSection } from "./sections/ConferenceCtaSection";
import { ConferenceHighlightSection } from "./sections/ConferenceHighlightSection";
import { ContactAndFooter } from "../../components/ContactAndFooter";
import { LeadershipGallerySection } from "./sections/LeadershipGallerySection";
import { SolutionsGridSection } from "./sections/SolutionsGridSection";
import { BlogsAndGuidesSection } from "../About/sections/BlogsAndGuidesSection";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/conference" },
];

export const IcsHome = (): JSX.Element => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ══════════════════════════════════════
          HERO SECTION — full-bleed background
          ══════════════════════════════════════ */}
      <section
        id="home"
        className="relative w-full overflow-hidden"
      >
        {/* Full-bleed background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt="Hero background"
          src="https://c.animaapp.com/mo9jwd9rECorqJ/img/group-40124.png"
          style={{ minHeight: "100%" }}
        />

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />

        {/* ── Navbar ── */}
        <header className="relative z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 pt-5 lg:pt-[26px] pb-0">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="all-[unset] box-border cursor-pointer flex-shrink-0"
            aria-label="Go to home"
          >
            <img
              className="h-10 md:h-12 w-auto"
              alt="ICS Global logo"
              src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776945808032-0.png"
            />
          </button>

          {/* Nav pill — desktop */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:inline-flex items-center gap-8 xl:gap-10 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm px-4 py-3.5"
          >
            {navItems.map((item, i) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.path)}
                className="all-[unset] box-border cursor-pointer"
              >
                <span
                  className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] whitespace-nowrap ${
                    i === 0
                      ? "font-semibold text-primary-1"
                      : "font-medium text-primary-3"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* CTA button */}
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

        {/* ── Mobile overlay menu ── */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{ background: "linear-gradient(160deg, #29a8e0 0%, #1a6fa8 60%, #0e2a47 100%)" }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <button
                type="button"
                onClick={() => { navigate("/"); setMenuOpen(false); }}
                className="cursor-pointer"
                aria-label="Go to home"
              >
                <img
                  className="h-12 w-auto object-contain"
                  alt="ICS Global logo"
                  src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776945808032-0.png"
                />
              </button>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <line x1="4" y1="4" x2="24" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                  <line x1="24" y1="4" x2="4" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="mx-4 mt-4 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl">
              {navItems.map((item) => {
                const isActive = item.path === "/";
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
                  onClick={() => { navigate("/contact"); setMenuOpen(false); }}
                  className="w-full flex items-center justify-center py-5 bg-[#1a4f72] rounded-xl cursor-pointer hover:bg-[#163f5c] transition-colors"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl leading-tight">
                    Connect
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Hero text content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-[clamp(60px,10vw,180px)] pb-0">
          <div className="flex flex-col items-center gap-5 md:gap-6 max-w-[768px] mx-auto">
            {/* Heading */}
            <div className="relative w-full">
              <h1 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[clamp(32px,4.2vw,80px)] text-center tracking-[1.20px] leading-[1.15]">
                Education Reimagined for a Changing World
              </h1>
              <img
                className="absolute hidden md:block"
                style={{ top: "70px", left: "20px", width: "282px", height: "6px" }}
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/mo9jwd9rECorqJ/img/line.png"
              />
            </div>
            {/* Subheading */}
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-[0] leading-7">
              Powered by Intelligence, Guided by Purpose
            </p>
            {/* CTA */}
            <button
              type="button"
              onClick={() => navigate("/about")}
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0e467a] rounded-lg overflow-hidden border border-solid border-white cursor-pointer hover:bg-[#0a3560] transition-colors mt-2"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base md:text-lg text-center leading-6 whitespace-nowrap">
                Explore Our Impact
              </span>
              <img
                className="w-5 h-5"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/mo9jwd9rECorqJ/img/arrow-up-left.svg"
              />
            </button>
          </div>
        </div>

        {/* ── About Us — pushed below first viewport, same hero background ── */}
        {/* Desktop (lg+): right-aligned layout */}
        <div
          id="about"
          className="hidden lg:flex justify-end relative z-10 px-6 md:px-16 lg:px-24"
          style={{ marginTop: "clamp(80px, 12vw, 160px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
        >
          <div className="flex flex-col items-start gap-5 max-w-[600px] xl:max-w-[660px]">
            <div className="flex flex-col items-start gap-2">
              <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6">
                About Us
              </p>
              <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[clamp(32px,2.9vw,56px)] tracking-[0.88px] leading-[1.2]">
                Welcome To<br />ICS GLOBAL
              </h2>
            </div>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-base lg:text-lg leading-7">
              <span className="text-[#eeeeee]">Idealizeer Content Solutions Private Limited (ICS Global) is an AI-enabled ecosystem driving{" "}</span>
              <span className="font-medium text-white">quality education, community development, and sustainable institutional growth</span>
              <span className="text-[#eeeeee]">{" "}for a rapidly evolving world. At ICS Global, we believe that the future of institutions lies at the intersection of human insight and artificial intelligence. Founded a decade ago, we operate at the intersection of education, industry, and technology — co-creating learning experiences that prepare learners for tomorrow&#39;s opportunities while advancing each partner university&#39;s strategic vision.</span>
            </p>
            <button
              type="button"
              onClick={() => navigate("/about")}
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-3.5 py-3 bg-primary-1 rounded-lg overflow-hidden border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
                Partner for Transformation
              </span>
              <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/mo9jwd9rECorqJ/img/arrow-up-left.svg" />
            </button>
          </div>
        </div>

        {/* Mobile / tablet: full-width stacked layout, still inside hero */}
        <div
          className="lg:hidden flex flex-col items-start gap-5 relative z-10 px-6 md:px-16 max-w-2xl"
          style={{ marginTop: "clamp(60px, 10vw, 120px)", paddingBottom: "clamp(60px, 10vw, 120px)" }}
        >
          <div className="flex flex-col items-start gap-2">
            <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm leading-6">
              About Us
            </p>
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-3xl md:text-[38px] tracking-[0.88px] leading-tight">
              Welcome To<br />ICS GLOBAL
            </h2>
          </div>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-sm md:text-base leading-7">
            <span className="text-[#eeeeee]">Idealizeer Content Solutions Private Limited (ICS Global) is an AI-enabled ecosystem driving{" "}</span>
            <span className="font-medium text-white">quality education, community development, and sustainable institutional growth</span>
            <span className="text-[#eeeeee]">{" "}for a rapidly evolving world. Founded a decade ago, we operate at the intersection of education, industry, and technology — co-creating learning experiences that prepare learners for tomorrow&#39;s opportunities.</span>
          </p>
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-1 rounded-lg overflow-hidden border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm leading-6 whitespace-nowrap">
              Partner for Transformation
            </span>
            <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/mo9jwd9rECorqJ/img/arrow-up-left.svg" />
          </button>
        </div>

      </section>

      {/* ══════════════════════════════════════
          SOLUTIONS WE DELIVER
          ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/nj999vRB/img/rectangle-39435.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20 lg:py-24">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-14">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-black text-[clamp(28px,2.3vw,44px)] text-center tracking-[0.88px] leading-[1.25]">
              Solutions We Deliver
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-primary-3 text-base md:text-lg text-center leading-7 max-w-[600px]">
              Empowering growth through intelligent, scalable solutions.
            </p>
          </div>
          <SolutionsGridSection />
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              type="button"
              onClick={() => navigate("/services")}
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0e467a] rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
                See More
              </span>
              <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/nj999vRB/img/arrow-up-left-4.svg" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MEET OUR TEAM
          ══════════════════════════════════════ */}
      <section id="team" className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/nj999vRB/img/rectangle-39436.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20 lg:py-24">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-14">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[clamp(28px,2.3vw,44px)] text-center tracking-[0.88px] leading-[1.25]">
              Meet our Team
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg text-center leading-7">
              Driven by expertise and united by purpose.
            </p>
          </div>
          <LeadershipGallerySection />
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              type="button"
              onClick={() => navigate("/about")}
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0e467a] rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
                See More
              </span>
              <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/nj999vRB/img/arrow-up-left-4.svg" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUSTED BY / PARTNER LOGOS
          ══════════════════════════════════════ */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col items-center gap-4 mb-10 md:mb-14">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-gray-900 text-[clamp(28px,2.3vw,44px)] text-center tracking-[0.88px] leading-[1.25]">
              Educational Leaders Choose ICS Global
            </h2>
            <p className="max-w-[602px] [font-family:'Poppins',Helvetica] font-normal text-primary-3 text-base md:text-lg text-center leading-7">
              Our work speaks through the trust of reputed academic and professional institutions worldwide
            </p>
          </div>
          {/* Infinite marquee */}
          <style>{`
            @keyframes marquee-scroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              width: max-content;
              animation: marquee-scroll 28s linear infinite;
              will-change: transform;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            .marquee-strip {
              display: flex;
              flex-shrink: 0;
              align-items: center;
              padding: 0 14px;
              box-sizing: content-box;
            }
          `}</style>
          <div
            className="w-full overflow-hidden"
            aria-label="Partner logos"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)" }}
          >
            <div className="marquee-track">
              <div className="marquee-strip">
                <img
                  className="h-auto flex-shrink-0"
                  style={{ width: "100vw", minWidth: "900px", maxWidth: "1728px", display: "block" }}
                  alt="Partner logos"
                  src="https://c.animaapp.com/nj999vRB/img/frame-1321318068.svg"
                  draggable="false"
                />
              </div>
              <div className="marquee-strip">
                <img
                  className="h-auto flex-shrink-0"
                  style={{ width: "100vw", minWidth: "900px", maxWidth: "1728px", display: "block" }}
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/nj999vRB/img/frame-1321318068.svg"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CORE PHILOSOPHY
          ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/nj999vRB/img/rectangle-9508.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20 lg:py-24">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-14">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[clamp(28px,2.3vw,44px)] text-center tracking-[0.88px] leading-[1.25]">
              Core Philosophy
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg text-center leading-7">
              Driven by Purpose. Powered by Intelligence.
            </p>
          </div>
          <ConferenceHighlightSection />
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONFERENCE CTA (ICMLBDA 2026 Banner)
          ══════════════════════════════════════ */}
      <section className="w-full">
        <ConferenceCtaSection />
      </section>

      {/* ══════════════════════════════════════
          BLOGS & GUIDES
          ══════════════════════════════════════ */}
      <BlogsAndGuidesSection />

      {/* ══════════════════════════════════════
          CONTACT / FOOTER
          ══════════════════════════════════════ */}
      <ContactAndFooter />
    </div>
  );
};
