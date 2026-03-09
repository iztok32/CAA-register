import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import supabase from "@/config/supabase-config"

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(t('common.passwordsDoNotMatch'));
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Success - normally we'd show a message or redirect
      navigate('/login', { state: { message: t('common.passwordUpdated') } });
    }
    setLoading(false);
  };

  return (
    <form className={cn("flex flex-col gap-4", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t('common.resetPasswordTitle')}</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {t('common.resetPasswordDescription')}
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-md text-sm bg-red-50 text-red-700 border border-red-200">
            {error}
          </div>
        )}

        <Field>
          <FieldLabel htmlFor="password">{t('common.password')}</FieldLabel>
          <Input 
            id="password" 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="confirm-password">{t('common.confirmNewPassword')}</FieldLabel>
          <Input 
            id="confirm-password" 
            type="password" 
            required 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Field>
        
        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? t('common.loading') : t('common.resetPasswordButton')}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
