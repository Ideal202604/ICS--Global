import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactAndFooter } from "../../components/ContactAndFooter";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/conference" },
] as const;

const categoryTabs = ["All", "Events", "Conferences", "Concave MOU Event"];

const galleryImages = [
  { id: 1, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-32.png", alt: "Gallery image 1", colSpan: 2 },
  { id: 2, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-3.png", alt: "Gallery image 2", colSpan: 2 },
  { id: 3, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-31.png", alt: "Gallery image 3", colSpan: 2 },
  { id: 4, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-6.png", alt: "Gallery image 4", colSpan: 1 },
  { id: 5, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-7.png", alt: "Gallery image 5", colSpan: 1 },
  { id: 6, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-8.png", alt: "Gallery image 6", colSpan: 2 },
  { id: 7, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-9.png", alt: "Gallery image 7", colSpan: 2 },
  { id: 8, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-4.png", alt: "Gallery image 8", colSpan: 2 },
  { id: 9, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-11.png", alt: "Gallery image 9", colSpan: 4 },
  { id: 10, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-12.png", alt: "Gallery image 10", colSpan: 2 },
  { id: 11, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-30.png", alt: "Gallery image 11", colSpan: 2 },
  { id: 12, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-5.png", alt: "Gallery image 12", colSpan: 2 },
];

export const Gallery = (): JSX.Element => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ minHeight: "clamp(300px, 29.2vw, 561px)", height: "clamp(300px, 29.2vw, 561px)" }}>
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo8awahp9YbdPR/img/rectangle-9522.png"
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
            className="hidden lg:inline-flex items-center gap-6 xl:gap-10 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm px-4 py-3.5"
          >
            {navItems.map((item) => {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="all-[unset] box-border cursor-pointer"
                >
                  <span
                    className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] whitespace-nowrap ${
                      item.label === "Gallery"
                          ? "font-semibold text-primary-1"
                          : "font-medium text-primary-3"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Contact CTA — hidden on mobile */}
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
              <button
                type="button"
                onClick={() => { navigate("/"); setMenuOpen(false); }}
                className="cursor-pointer"
                aria-label="Go to home"
              >
                <img
                  className="h-12 w-auto object-contain"
                  alt="ICS Global logo"
                  src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776850331288-0.png"
                />
              </button>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="4" x2="24" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                  <line x1="24" y1="4" x2="4" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="mx-4 mt-4 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl">
              {navItems.map((item) => {
                const isActive = item.label === "Gallery";
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

        {/* Title */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 pt-[84px]">
          <h1 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[36px] md:text-[44px] tracking-[0.88px] leading-[72px] text-center">
            Gallery
          </h1>
          <img
            className="w-24 h-1.5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/mo8awahp9YbdPR/img/line.svg"
          />
        </div>
      </section>

      {/* ── ARCHIVE HEADING ── */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-10 text-center">
        <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-primary-4 text-[36px] md:text-[44px] tracking-[0.88px] leading-[54px]">
          Archive
        </h2>
      </section>

      {/* ── CATEGORY TABS ── */}
      <section className="w-full bg-white pb-8 md:pb-12">
        <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24">
          <div
            className="flex flex-wrap items-center rounded-[6px] overflow-hidden border border-solid border-[#cdcdcd] w-fit"
            role="tablist"
            aria-label="Gallery categories"
          >
            {categoryTabs.map((tab, index) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center justify-center px-6 md:px-8 py-2.5 cursor-pointer transition-colors ${
                    isActive ? "bg-[#0e467a]" : "bg-white hover:bg-gray-50"
                  } ${index > 0 ? "border-l border-solid border-[#cdcdcd]" : ""}`}
                >
                  <span
                    className={`[font-family:'Poppins',Helvetica] font-medium text-base md:text-lg text-center tracking-[0.36px] leading-6 whitespace-nowrap ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section aria-label="Gallery images" className="w-full bg-white pb-16 md:pb-24">
        <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24">
          <div
            className="grid gap-4 md:gap-6"
            style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
          >
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  gridColumn: `span ${item.colSpan}`,
                  height: "clamp(160px, 20vw, 393px)",
                }}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT + FOOTER ── */}
      <ContactAndFooter />
    </div>
  );
};
