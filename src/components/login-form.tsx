import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();

  return (
    <form className={cn("flex flex-col gap-4", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t('common.loginTitle')}</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {t('common.loginDescription')}
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">{t('common.email')}</FieldLabel>
          <Input id="email" type="email" placeholder={t('common.emailPlaceholder')} required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">{t('common.password')}</FieldLabel>
            <Link
              to="/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              {t('common.forgotPassword')}
            </Link>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">{t('common.login')}</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            {t('common.dontHaveAccount')}{" "}
            <Link to="/register" className="underline underline-offset-4">
              {t('common.signupLink')}
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
