import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Bottom Bar Section */}
      <div className="bg-[#8B0000] text-white py-4 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <p>{t('common.footerCopyright')}</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">{t('common.footerLegal')}</a>
          </div>
        </div>
        
        {/* Back to top button */}
        <button 
            onClick={scrollToTop}
            className="absolute -top-6 right-4 md:right-8 bg-gray-800 p-3 rounded-sm hover:bg-gray-700 transition-colors shadow-lg group z-10"
            aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>
      </div>
    </footer>
  );
}
