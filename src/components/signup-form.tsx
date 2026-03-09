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

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();

  return (
    <form className={cn("flex flex-col gap-4", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t('common.createAccount')}</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {t('common.enterDetails')}
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">{t('common.fullName')}</FieldLabel>
          <Input id="name" type="text" placeholder={t('common.fullNamePlaceholder')} required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">{t('common.email')}</FieldLabel>
          <Input id="email" type="email" placeholder={t('common.emailPlaceholder')} required />
          <FieldDescription>
            {t('common.emailDescription')}
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">{t('common.password')}</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>
            {t('common.passwordDescription')}
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">{t('common.confirmPassword')}</FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription>{t('common.confirmPasswordDescription')}</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">{t('common.register')}</Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center">
            {t('common.alreadyHaveAccount')} <Link to="/login" className="underline underline-offset-4">{t('common.signInLink')}</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
