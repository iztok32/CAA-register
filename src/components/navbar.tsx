import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Menu, X, Plane } from "lucide-react";

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('common.features'), href: "#features" },
    { name: t('common.about'), href: "#about" },
    { name: t('common.contact'), href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-primary">
          <Plane className="h-6 w-6 text-[#007AB8]" />
          <span className="hidden text-xl sm:inline-block">
            <span className="text-[#007AB8]">CAA</span>
            <span className="text-[#58A618]">.si</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <LanguageSwitcher />
          <Link to="/login">
            <Button variant="ghost" size="sm">
              {t('common.login')}
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-[#007AB8] hover:bg-[#005c8a]">
              {t('common.register')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-b bg-background p-4 md:hidden animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr />
            <div className="flex flex-col gap-2">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  {t('common.login')}
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-start bg-[#007AB8]">
                  {t('common.register')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
