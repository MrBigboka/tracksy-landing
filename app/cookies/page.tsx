'use client'

import { useTranslation } from '@/hooks/use-translation'
import { SiteHeader } from '@/components/site-header'
import { AppverseFooter } from '@/components/appverse-footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CookiePolicy() {
  const { language } = useTranslation()

  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B0E12]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D5FF3F] rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#B9E832] rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      <main className="relative min-h-screen bg-transparent text-[#F2F3F5] z-10">
        <SiteHeader />
        
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                asChild
                variant="ghost" 
                className="mb-4 rounded-2xl hover:bg-white/5 text-[#F2F3F5] hover:text-[#D5FF3F]"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'fr' ? 'Retour' : 'Back'}
                </Link>
              </Button>
              <h1 className="text-3xl font-bold text-[#F2F3F5] mb-2">
                {language === 'fr' ? 'Politique de cookies' : 'Cookie Policy'}
              </h1>
              <p className="text-[#A1A5B0]">
                {language === 'fr' ? 'Dernière mise à jour : 11 août 2025' : 'Last updated: August 11, 2025'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A1F2E]/80 via-[#141820]/90 to-[#0B0E12] border border-[#2A2F3C] rounded-3xl p-8">
              <div className="prose prose-sm max-w-none">
                {language === 'fr' ? (
                  // Contenu français
                  <>
                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">1. Qu'est-ce qu'un cookie ?</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Un <strong>cookie</strong> est un petit fichier stocké sur votre appareil par votre navigateur. Des technologies similaires (LocalStorage, pixels, balises) peuvent aussi être utilisées.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">2. Comment nous les utilisons</h2>
                      <p className="text-[#F2F3F5] mb-4">Nous utilisons :</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>Cookies strictement nécessaires</strong> (session, sécurité, préférences essentielles) — indispensables au fonctionnement du site ;</li>
                        <li><strong>Cookies analytiques (Google Analytics 4)</strong> — pour mieux comprendre l'usage du Service <strong>uniquement si vous y consentez</strong>.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">3. Votre consentement</h2>
                      <p className="text-[#F2F3F5] mb-4">À votre première visite, une <strong>bannière</strong> vous permet de <strong>choisir</strong> :</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>Tout accepter</strong>,</li>
                        <li><strong>Tout refuser (sauf nécessaires)</strong>,</li>
                        <li><strong>Personnaliser</strong> par catégories.</li>
                      </ul>
                      <p className="text-[#A1A5B0] mt-4">
                        Vous pouvez <strong>modifier vos choix à tout moment</strong> en nous contactant à support@tracksy.me. Sans votre consentement, les cookies analytiques <strong>ne sont pas activés</strong>.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">4. Détails des cookies (exemples)</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-[#F2F3F5]">Nécessaires</h3>
                          <ul className="list-disc pl-6 space-y-1 text-[#F2F3F5]">
                            <li><code className="bg-[#2A2F3C] px-2 py-1 rounded">__Host-session</code>, <code className="bg-[#2A2F3C] px-2 py-1 rounded">csrf_token</code>, etc. (durée : session à 12 mois) — finalité : authentification, sécurité.</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-[#F2F3F5]">Analytiques (GA4)</h3>
                          <ul className="list-disc pl-6 space-y-1 text-[#F2F3F5]">
                            <li><code className="bg-[#2A2F3C] px-2 py-1 rounded">_ga</code> (2 ans), <code className="bg-[#2A2F3C] px-2 py-1 rounded">_ga_&lt;container-id&gt;</code> (24 mois), <code className="bg-[#2A2F3C] px-2 py-1 rounded">_gid</code> (24 h) — finalité : statistiques agrégées d'usage. <strong>Fournisseur</strong> : Google.</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-[#2A2F3C]/50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-[#A1A5B0]">
                          Les durées réelles peuvent varier selon la configuration. La liste peut être mise à jour lors d'ajouts/suppressions d'outils.
                        </p>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">5. Gérer les cookies dans votre navigateur</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        La plupart des navigateurs permettent de <strong>supprimer</strong> ou <strong>bloquer</strong> les cookies. Le blocage des cookies nécessaires peut dégrader certaines fonctionnalités.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">6. Contact</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Pour toute question : <strong>support@tracksy.me</strong>.
                      </p>
                    </section>
                  </>
                ) : (
                  // English content
                  <>
                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">1. What is a cookie?</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        A <strong>cookie</strong> is a small file stored on your device by your browser. Similar technologies (LocalStorage, pixels, beacons) may also be used.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">2. How we use them</h2>
                      <p className="text-[#F2F3F5] mb-4">We use:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>Strictly necessary cookies</strong> (session, security, essential preferences) — essential for site functionality;</li>
                        <li><strong>Analytics cookies (Google Analytics 4)</strong> — to better understand Service usage <strong>only if you consent</strong>.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">3. Your consent</h2>
                      <p className="text-[#F2F3F5] mb-4">On your first visit, a <strong>banner</strong> allows you to <strong>choose</strong>:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>Accept all</strong>,</li>
                        <li><strong>Decline all (except necessary)</strong>,</li>
                        <li><strong>Customize</strong> by categories.</li>
                      </ul>
                      <p className="text-[#A1A5B0] mt-4">
                        You can <strong>modify your choices at any time</strong> by contacting us at support@tracksy.me. Without your consent, analytics cookies <strong>are not activated</strong>.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">4. Cookie details (examples)</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-[#F2F3F5]">Necessary</h3>
                          <ul className="list-disc pl-6 space-y-1 text-[#F2F3F5]">
                            <li><code className="bg-[#2A2F3C] px-2 py-1 rounded">__Host-session</code>, <code className="bg-[#2A2F3C] px-2 py-1 rounded">csrf_token</code>, etc. (duration: session to 12 months) — purpose: authentication, security.</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-[#F2F3F5]">Analytics (GA4)</h3>
                          <ul className="list-disc pl-6 space-y-1 text-[#F2F3F5]">
                            <li><code className="bg-[#2A2F3C] px-2 py-1 rounded">_ga</code> (2 years), <code className="bg-[#2A2F3C] px-2 py-1 rounded">_ga_&lt;container-id&gt;</code> (24 months), <code className="bg-[#2A2F3C] px-2 py-1 rounded">_gid</code> (24 h) — purpose: aggregated usage statistics. <strong>Provider</strong>: Google.</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-[#2A2F3C]/50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-[#A1A5B0]">
                          Actual durations may vary depending on configuration. The list may be updated when tools are added/removed.
                        </p>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">5. Managing cookies in your browser</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Most browsers allow you to <strong>delete</strong> or <strong>block</strong> cookies. Blocking necessary cookies may degrade certain functionalities.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">6. Contact</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        For any questions: <strong>support@tracksy.me</strong>.
                      </p>
                    </section>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <AppverseFooter />
      </main>
    </>
  )
}