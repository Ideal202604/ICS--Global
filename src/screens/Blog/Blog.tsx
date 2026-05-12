import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogCard } from "./sections/BlogCard";
import { BlogHeroSection } from "./sections/BlogHeroSection";
import { ContactAndFooter } from "../../components/ContactAndFooter";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/conference" },
] as const;

const categoryTabs = ["All", "Quidem", "Dignissimos", "Lorem ipsum dolor"];

const blogPosts = [
  {
    id: 1,
    category: "Destination",
    date: "30 Jan 2026",
    readTime: "10 mins read",
    title: "Deserunt sollicitudin suspendisse",
    description: "Quisquam & interdum inceptos laborum & eleifend delectus maximus & Tempor incididunt",
    author: "Sedo eiusmod",
    image: "https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9758-2.svg",
    authorImage: "https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9760.png",
  },
  {
    id: 2,
    category: "Destination",
    date: "30 Jan 2026",
    readTime: "10 mins read",
    title: "Deserunt sollicitudin suspendisse",
    description: "Quisquam & interdum inceptos laborum & eleifend delectus maximus & Tempor incididunt",
    author: "Volupt Atibus",
    image: "https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9758-1.svg",
    authorImage: "https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9760-1.png",
  },
  {
    id: 3,
    category: "Destination",
    date: "30 Jan 2026",
    readTime: "10 mins read",
    title: "Deserunt sollicitudin suspendisse",
    description: "Quisquam & interdum inceptos laborum & eleifend delectus maximus & Tempor incididunt",
    author: "Pellen Tesque",
    image: "https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9758.png",
    authorImage: "https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9760-2.png",
  },
];

export const Blog = (): JSX.Element => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ minHeight: "clamp(300px, 29.2vw, 561px)", height: "clamp(300px, 29.2vw, 561px)" }}>
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9509.png"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9522.png"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo8cljnvKkvzbU/img/rectangle-9523.png"
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
            {navLinks.map((item) => {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="all-[unset] box-border cursor-pointer"
                >
                  <span
                    className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] whitespace-nowrap ${
                      item.label === "Blog"
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
              {navLinks.map((item) => {
                const isActive = item.label === "Blog";
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

        {/* "Blog" centered in hero */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 pt-[84px]">
          <h1 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[36px] md:text-[44px] tracking-[0.88px] leading-[72px] text-center whitespace-nowrap">
            Blog
          </h1>
          <img
            className="w-24 h-1.5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/mo8cljnvKkvzbU/img/line.svg"
          />
        </div>
      </section>

      {/* ── BLOG HERO CONTENT ── */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="max-w-[768px] mx-auto px-4 md:px-8">
          <BlogHeroSection />
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
      <section
        aria-label="Blog categories"
        className="w-full bg-white pb-8 md:pb-12"
      >
        <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24">
          <div className="flex flex-wrap items-center rounded-[6px] overflow-hidden border border-solid border-[#cdcdcd] w-fit">
            {categoryTabs.map((tab, index) => {
              const isActive = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  aria-pressed={isActive}
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

      {/* ── BLOG CARDS ── */}
      <section
        aria-label="Blog posts"
        className="w-full bg-white pb-16 md:pb-24"
      >
        <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT + FOOTER ── */}
      <ContactAndFooter />
    </div>
  );
};
