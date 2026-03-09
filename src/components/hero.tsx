import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, ShieldCheck, Database } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-[-10%]">
        <svg
          viewBox="0 0 1108 632"
          aria-hidden="true"
          className="fill-primary/5 stroke-primary/10"
        >
          <path d="M.5 200V.5H200" fill="none" />
          <path d="M0 400V632H232" fill="none" />
          <path d="M1108 400V632H876" fill="none" />
          <path d="M1108 200V.5H908" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
            {t('common.landingHeroTitle')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t('common.landingHeroDesc')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/register">
              <Button size="lg" className="bg-[#007AB8] hover:bg-[#005c8a] gap-2">
                {t('common.getStarted')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="gap-2">
              <Search className="h-4 w-4" />
              {t('common.exploreRegister')}
            </Button>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-24 lg:mt-32">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-[#007AB8]" />
              </div>
              <dt className="text-base font-semibold leading-7 text-foreground">
                Hitro iskanje
              </dt>
              <dd className="mt-1 text-center text-base leading-7 text-muted-foreground">
                Takojšen dostop do podatkov o katerem koli registriranem zrakoplovu.
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-[#58A618]" />
              </div>
              <dt className="text-base font-semibold leading-7 text-foreground">
                Preverjena varnost
              </dt>
              <dd className="mt-1 text-center text-base leading-7 text-muted-foreground">
                Spremljanje statusa plovnosti in tehnične brezhibnosti zrakoplovov.
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-[#007AB8]" />
              </div>
              <dt className="text-base font-semibold leading-7 text-foreground">
                Uradni podatki
              </dt>
              <dd className="mt-1 text-center text-base leading-7 text-muted-foreground">
                Neposredna povezava z uradno bazo Agencije za civilno letalstvo.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
