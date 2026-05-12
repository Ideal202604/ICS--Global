import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/", disabled: false },
  { label: "About", path: "/about", disabled: false },
  { label: "Services", path: "/services", disabled: false },
  { label: "Blog", path: "/blog", disabled: false },
  { label: "Gallery", path: "/gallery", disabled: false },
  { label: "Conference", path: "/conference" },
] as const;

interface NavbarProps {
  /** Logo src — pass the page-specific hosted logo */
  logoSrc?: string;
  /** Logo text/sub-image src */
  logoTextSrc?: string;
  /** Which nav item is active — defaults to location pathname matching */
  activePath?: string;
  /** CTA label (default "Join the Community") */
  ctaLabel?: string;
  /** CTA click handler */
  onCtaClick?: () => void;
}

export const Navbar = ({
  logoSrc,
  logoTextSrc,
  activePath,
  ctaLabel = "Join the Community",
  onCtaClick,
}: NavbarProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = activePath ?? location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" ) return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center px-6 md:px-16 lg:px-24 pt-5">
      {/* Logo */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="all-[unset] box-border cursor-pointer flex-shrink-0"
        aria-label="Go to home"
      >
        <img
          className="h-12 w-auto object-contain"
          alt="ICS Global"
          src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776850331288-0.png"
        />
      </button>

      {/* Desktop Nav pill — centered absolutely so it always sits in the middle */}
      <nav
        aria-label="Primary navigation"
        className="hidden lg:inline-flex h-[52px] items-center justify-center gap-2 px-4 py-3.5 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm absolute left-1/2 -translate-x-1/2"
      >
        <div className="inline-flex items-center gap-8">
          {navItems.map((item) => {
            const isDisabled = (item as any).disabled === true;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => !item.disabled && navigate(item.path)}
                aria-current={isActive(item.path) ? "page" : undefined}
                aria-disabled={item.disabled || undefined}
                className={`all-[unset] box-border ${item.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
              >
                <span
                  className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] whitespace-nowrap ${
                    item.disabled
                      ? "font-medium text-gray-400"
                      : isActive(item.path)
                        ? "font-semibold text-primary-1"
                        : "font-medium text-primary-3"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop CTA — pushed to the far right with ml-auto */}
      <button
        type="button"
        onClick={onCtaClick}
        className="all-[unset] box-border hidden md:inline-flex items-center justify-center gap-2 h-[52px] px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity ml-auto"
      >
        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
          {ctaLabel}
        </span>
      </button>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
        className="all-[unset] box-border lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer gap-1.5"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col"
          style={{ background: "linear-gradient(160deg, #29a8e0 0%, #1a6fa8 60%, #0e2a47 100%)" }}
        >
          {/* Top bar inside overlay */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            {/* Logo */}
            <button
              type="button"
              onClick={() => { navigate("/"); setMenuOpen(false); }}
              className="all-[unset] box-border cursor-pointer"
              aria-label="Go to home"
            >
              <img
                className="h-12 w-auto object-contain"
                alt="ICS Global"
                src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776850331288-0.png"
              />
            </button>
            {/* X close button */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="all-[unset] box-border cursor-pointer w-10 h-10 flex items-center justify-center"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="4" y1="4" x2="24" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                <line x1="24" y1="4" x2="4" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* White card with nav links */}
          <div className="mx-4 mt-4 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl">
            {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => { if (!item.disabled) { navigate(item.path); setMenuOpen(false); } }}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  aria-disabled={item.disabled || undefined}
                  className={`all-[unset] box-border w-full ${item.disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div
                    className={`px-7 py-5 text-left ${
                      item.disabled
                        ? "mx-2 my-1 opacity-40"
                        : isActive(item.path)
                          ? "bg-[#1a4f72] rounded-xl mx-2 my-2"
                          : "mx-2 my-1"
                    }`}
                  >
                    <span
                      className={`[font-family:'Poppins',Helvetica] text-xl font-bold leading-tight tracking-[0] ${
                        item.disabled ? "text-gray-400" : isActive(item.path) ? "text-white" : "text-[#555f6d]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </button>
            ))}

            {/* Connect / CTA button inside card */}
            <div className="px-4 py-4 mt-1">
              <button
                type="button"
                onClick={() => { onCtaClick?.(); setMenuOpen(false); }}
                className="all-[unset] box-border w-full cursor-pointer flex items-center justify-center py-5 bg-[#1a4f72] rounded-xl"
              >
                <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl leading-tight tracking-[0]">
                  Connect
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
