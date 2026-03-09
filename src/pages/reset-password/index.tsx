import { Plane } from "lucide-react"
import { ResetPasswordForm } from "@/components/reset-password-form"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "react-i18next"

function ResetPasswordPage() {
  useTranslation();

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between items-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-8 items-center justify-center rounded-md bg-[#007AB8] text-white">
              <Plane className="size-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#007AB8]">
              CAA<span className="text-[#58A618]">.si</span>
            </span>
          </a>
          <div className="md:ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://www.caa.si/upload/slider/slide9dce155bfe25846.jpg"
          alt="Aviation background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#007AB8]/10" />
      </div>
    </div>
  )
}

export default ResetPasswordPage
