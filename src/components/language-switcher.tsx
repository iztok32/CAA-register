import { useTranslation } from "react-i18next";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Globe } from "lucide-react";

const languages = [
  { code: "sl", countryCode: "si", name: "Slovenščina" },
  { code: "en", countryCode: "gb", name: "English" },
  { code: "de", countryCode: "de", name: "Deutsch" },
  { code: "it", countryCode: "it", name: "Italiano" },
  { code: "hr", countryCode: "hr", name: "Hrvatski" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <Menubar className="border-none bg-transparent h-auto p-0 shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:bg-slate-100 data-[state=open]:bg-slate-100 rounded-md px-3 py-2 flex items-center gap-2 transition-all">
          <Globe className="size-4 text-slate-500" />
          <div className="flex items-center gap-2">
            <img 
              src={`https://flagcdn.com/w20/${currentLanguage.countryCode}.png`} 
              alt={currentLanguage.name}
              className="w-5 h-auto rounded-[2px]"
            />
            <span className="text-sm font-bold uppercase text-slate-700 tracking-wider">
              {currentLanguage.code}
            </span>
          </div>
        </MenubarTrigger>
        <MenubarContent align="end" className="min-w-[160px]">
          {languages.map((lang) => (
            <MenubarItem
              key={lang.code}
              className={`flex items-center gap-3 cursor-pointer py-2 px-3 ${
                i18n.language === lang.code ? "bg-primary/5 text-primary font-bold" : "text-slate-600"
              }`}
              onClick={() => i18n.changeLanguage(lang.code)}
            >
              <img 
                src={`https://flagcdn.com/w20/${lang.countryCode}.png`} 
                alt={lang.name}
                className="w-5 h-auto rounded-[1px]"
              />
              <span className="text-sm">{lang.name}</span>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
