import { useEffect, useState } from "react";

export const ScrollToTopButton = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          background: #1e3a5f;
          color: #ffffff;
          border: none;
          border-radius: 50%;
          width: 46px;
          height: 46px;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px);
          transition: opacity 0.25s ease, transform 0.25s ease, background 0.2s ease;
        }
        .scroll-top-btn.show {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .scroll-top-btn:hover {
          background: #2a4f80;
          transform: scale(1.1) translateY(0);
        }
        @media (max-width: 640px) {
          .scroll-top-btn {
            bottom: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }
      `}</style>
      <button
        className={`scroll-top-btn${visible ? " show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        ↑
      </button>
    </>
  );
};
