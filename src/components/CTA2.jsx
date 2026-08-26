import { Link } from "react-router-dom";
// import { CONSULTATION_LINK } from "./CTA2";
import { ArrowRight, Calendar, ExternalLink, User } from "lucide-react";

export const CONSULTATION_LINK = "https://www.chandanchaudhary.in/consultation";

function CTA2() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="w-full px-4 sm:px-6 pt-4 pb-16">
      <div className="mx-auto max-w-7xl rounded-xl p-[1px] bg-gradient-to-b from-amber-200/80 via-gray-200/40 to-transparent dark:from-yellow-400/25 dark:via-white/10 dark:to-transparent shadow-xl shadow-gray-200/50 dark:shadow-black/40">
        <div className="relative overflow-hidden rounded-xl bg-white/85 dark:bg-[#0b0b0b]/85 backdrop-blur-2xl px-6 py-10 sm:px-12 sm:py-14">
          {/* Decorative glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-amber-200/25 to-orange-200/25 dark:from-amber-500/5 dark:to-orange-500/5"></div>
            <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full blur-3xl bg-gradient-to-tr from-yellow-200/25 to-amber-200/25 dark:from-yellow-500/5 dark:to-amber-500/5"></div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] bg-amber-50 dark:bg-yellow-400/10 text-amber-700 dark:text-yellow-400 border border-amber-200/70 dark:border-yellow-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-yellow-400"></span>
                Open for projects
              </span>

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Have a project in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 dark:from-yellow-400 dark:via-amber-400 dark:to-yellow-400">
                  mind?
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                Whether it&apos;s a website, a full-stack product, or an idea
                you&apos;re still shaping — let&apos;s talk it through and build
                something worth showing off.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-4">
              <div className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a
                  href={"https://www.chandanchaudhary.in/consultation"}
                  className="btn-shine relative w-full sm:w-auto overflow-hidden inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 dark:from-yellow-400 dark:via-amber-400 dark:to-yellow-400 text-white dark:text-gray-900 font-semibold shadow-sm shadow-amber-500/25 dark:shadow-yellow-400/20 hover:shadow-md hover:shadow-amber-500/35 transition-all duration-300 group"
                >
                  <User className="w-4" />
                  My Portfolio
                </a>

                <a
                  href={CONSULTATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full text-sm sm:text-base font-semibold text-amber-600 dark:text-yellow-400 border-2 border-amber-500/70 dark:border-yellow-400/50 hover:bg-amber-50 dark:hover:bg-yellow-400/10 transition-all duration-300"
                >
                  Client Portal
                  <ExternalLink className="w-4" />
                </a>
              </div>

              <p className="text-[11px] text-gray-400 dark:text-gray-600 text-center">
                Usually replies within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA2;
