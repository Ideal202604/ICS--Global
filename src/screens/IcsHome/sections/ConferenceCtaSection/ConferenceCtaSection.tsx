import { useNavigate } from "react-router-dom";

export const ConferenceCtaSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#f0f2f5] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 flex justify-center">
      {/* Rounded hero card */}
      <div className="w-full max-w-[1200px] rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row min-h-[320px] lg:min-h-[380px]">

        {/* LEFT — Conference audience image */}
        <div className="w-full lg:w-[38%] min-h-[220px] lg:min-h-full relative flex-shrink-0">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Conference audience in auditorium"
            src="https://c.animaapp.com/nj999vRB/img/generated-image-1776856187025.png"
          />
        </div>

        {/* RIGHT — Blue gradient panel */}
        <div className="relative w-full lg:w-[62%] flex flex-col items-center justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-10 md:py-12 lg:py-14 overflow-hidden">
          {/* Blue gradient background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(135deg, #1976D2 0%, #1565C0 25%, #0D47A1 55%, #0A3A8A 80%, #082E6E 100%)",
            }}
          />

          {/* Diagonal line pattern overlay */}
          <div
            className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255,255,255,0.45) 20px, rgba(255,255,255,0.45) 21px)",
            }}
          />

          {/* Subtle grid dot pattern */}
          <div
            className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Content — centered */}
          <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-[520px]">
            {/* Title */}
            <h2 className="[font-family:'Roboto',Helvetica] font-bold text-white text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.3px]">
              ICMLBDA 2026
            </h2>

            {/* Subtitle */}
            <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[1.55]">
              International Conference on Machine Learning, Big Data &amp; Analytics
            </p>

            {/* Tagline */}
            <p className="[font-family:'Inter',Helvetica] font-normal text-white/60 text-[12px] md:text-[13px] lg:text-[14px] leading-[1.6] italic">
              Innovating Intelligence. Empowering Data-Driven Futures.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap mt-3">
              {/* Register Now — outlined */}
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-md border border-white/70 bg-transparent cursor-pointer hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[13px] md:text-[14px] leading-5 whitespace-nowrap">
                  Register Now
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Submit Paper — solid white */}
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-md bg-white cursor-pointer hover:bg-gray-100 transition-all duration-200 shadow-sm"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#0D47A1] text-[13px] md:text-[14px] leading-5 whitespace-nowrap">
                  Submit Paper
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="#0D47A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
