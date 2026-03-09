import { useState } from "react"
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
import supabase from "@/config/supabase-config"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: t('common.resetLinkSent', { email }) });
    }
    setLoading(false);
  };

  return (
    <form className={cn("flex flex-col gap-4", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t('common.forgotPasswordTitle')}</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {t('common.forgotPasswordDescription')}
          </p>
        </div>
        
        {message && (
          <div className={cn(
            "p-3 rounded-md text-sm",
            message.type === 'success' ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
          )}>
            {message.text}
          </div>
        )}

        <Field>
          <FieldLabel htmlFor="email">{t('common.email')}</FieldLabel>
          <Input 
            id="email" 
            type="email" 
            placeholder={t('common.emailPlaceholder')} 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        
        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? t('common.loading') : t('common.sendResetLink')}
          </Button>
        </Field>
        
        <Field>
          <FieldDescription className="text-center">
            <Link to="/login" className="underline underline-offset-4">
              {t('common.backToLogin')}
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
