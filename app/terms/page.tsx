'use client'

import { useTranslation } from '@/hooks/use-translation'
import { SiteHeader } from '@/components/site-header'
import { AppverseFooter } from '@/components/appverse-footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
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
                {language === 'fr' ? 'Conditions générales d\'utilisation' : 'Terms of Service'}
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
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">1. Qui nous sommes</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        <strong>TRACKSY</strong> (« le Service », « nous » ou « notre ») est une application en ligne destinée aux <strong>travailleurs autonomes et freelances</strong>. L'éditeur est <strong>Tracksy Inc.</strong>, établi au <strong>Canada</strong>. Contact : <strong>support@tracksy.me</strong>.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">2. Acceptation des CGU</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        En accédant à TRACKSY ou en l'utilisant, vous acceptez ces CGU. Si vous n'êtes pas d'accord, n'utilisez pas le Service.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">3. Description du Service</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        TRACKSY permet d'organiser des informations professionnelles (ex. projets, clients, heures, notes) et d'améliorer la productivité. Le Service est <strong>actuellement gratuit</strong> et peut évoluer.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">4. Éligibilité</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        L'utilisation est réservée aux <strong>18 ans et plus</strong>. Le Service ne vise pas les mineurs.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">5. Compte et exactitude des informations</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Pour utiliser certaines fonctionnalités, vous pouvez devoir créer un compte et fournir des informations exactes (p. ex. nom, courriel, téléphone, adresse professionnelle, numéro d'entreprise). Vous êtes responsable de la <strong>confidentialité</strong> de vos identifiants et des activités effectuées sous votre compte.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">6. Utilisation acceptable</h2>
                      <p className="text-[#F2F3F5] mb-4">Vous vous engagez à ne pas :</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li>enfreindre la loi, les droits d'autrui, la vie privée ou la propriété intellectuelle ;</li>
                        <li>tenter d'accéder au Service autrement que via l'interface fournie ;</li>
                        <li>perturber, surcharger ou dégrader le Service ;</li>
                        <li>utiliser le Service pour publier, transmettre ou stocker du contenu illégal, diffamatoire, haineux, malveillant ou frauduleux.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">7. Contenus et propriété intellectuelle</h2>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>Nos contenus</strong> (logos, UI, textes, code) sont protégés. Toute reproduction sans autorisation est interdite.</li>
                        <li><strong>Vos contenus</strong> : vous conservez vos droits sur les informations que vous saisissez. Vous nous accordez une <strong>licence limitée</strong> pour héberger, traiter et afficher ces contenus uniquement afin d'exploiter le Service.</li>
                        <li>Vous déclarez disposer des droits nécessaires sur les contenus que vous soumettez.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">8. Services tiers</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        TRACKSY peut s'appuyer sur des fournisseurs tiers, notamment <strong>Supabase</strong> (hébergement/BD) et <strong>Google Analytics</strong> (mesure d'audience). Leur usage est décrit dans la <strong>Politique de confidentialité</strong> et la <strong>Politique de cookies</strong>. Nous ne sommes pas responsables des pratiques ou contenus de ces tiers.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">9. Disponibilité du Service</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Le Service est fourni <strong>« tel quel » et « selon disponibilité »</strong>. Nous pouvons modifier, suspendre ou interrompre le Service à tout moment, sans responsabilité.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">10. Garanties et limitation de responsabilité</h2>
                      <p className="text-[#F2F3F5] mb-4">Dans la mesure permise par la loi :</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li>nous <strong>déclinons toute garantie</strong> expresse ou implicite (qualité marchande, adéquation à un usage particulier, absence d'erreurs) ;</li>
                        <li>nous ne serons <strong>pas responsables</strong> des pertes de profits, pertes de données, dommages indirects, spéciaux ou consécutifs liés à l'utilisation ou à l'impossibilité d'utiliser le Service.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">11. Résiliation</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Vous pouvez cesser d'utiliser le Service à tout moment. Nous pouvons suspendre ou résilier l'accès si vous violez ces CGU ou si la loi l'exige.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">12. Modifications des CGU</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Nous pouvons mettre à jour ces CGU. La date en haut de page indique la dernière version. L'utilisation du Service après mise à jour vaut acceptation.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">13. Droit applicable et tribunal compétent</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Ces CGU sont régies par les lois du <strong>Canada</strong>. Tout litige sera soumis aux <strong>tribunaux compétents du Canada</strong>.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">14. Contact</h2>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>Support général</strong> : support@tracksy.me</li>
                        <li><strong>Signalement d'abus</strong> : support@tracksy.me</li>
                      </ul>
                    </section>
                  </>
                ) : (
                  // English content
                  <>
                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">1. Who We Are</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        <strong>TRACKSY</strong> ("the Service", "we" or "our") is an online application designed for <strong>freelancers and independent workers</strong>. The publisher is <strong>Tracksy Inc.</strong>, established in <strong>Canada</strong>. Contact: <strong>support@tracksy.me</strong>.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">2. Acceptance of Terms</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        By accessing or using TRACKSY, you accept these Terms of Service. If you do not agree, do not use the Service.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">3. Service Description</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        TRACKSY allows you to organize professional information (e.g., projects, clients, hours, notes) and improve productivity. The Service is <strong>currently free</strong> and may evolve.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">4. Eligibility</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        Use is restricted to <strong>18 years and older</strong>. The Service does not target minors.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">5. Account and Information Accuracy</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        To use certain features, you may need to create an account and provide accurate information (e.g., name, email, phone, business address, business number). You are responsible for the <strong>confidentiality</strong> of your credentials and activities performed under your account.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">6. Acceptable Use</h2>
                      <p className="text-[#F2F3F5] mb-4">You agree not to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li>violate the law, others' rights, privacy, or intellectual property;</li>
                        <li>attempt to access the Service other than through the provided interface;</li>
                        <li>disrupt, overload, or degrade the Service;</li>
                        <li>use the Service to publish, transmit, or store illegal, defamatory, hateful, malicious, or fraudulent content.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">7. Content and Intellectual Property</h2>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>Our content</strong> (logos, UI, texts, code) is protected. Any unauthorized reproduction is prohibited.</li>
                        <li><strong>Your content</strong>: you retain your rights to the information you enter. You grant us a <strong>limited license</strong> to host, process, and display this content solely to operate the Service.</li>
                        <li>You declare that you have the necessary rights to the content you submit.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">8. Third-Party Services</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        TRACKSY may rely on third-party providers, including <strong>Supabase</strong> (hosting/DB) and <strong>Google Analytics</strong> (audience measurement). Their use is described in the <strong>Privacy Policy</strong> and <strong>Cookie Policy</strong>. We are not responsible for the practices or content of these third parties.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">9. Service Availability</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        The Service is provided <strong>"as is" and "as available"</strong>. We may modify, suspend, or discontinue the Service at any time, without liability.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">10. Warranties and Limitation of Liability</h2>
                      <p className="text-[#F2F3F5] mb-4">To the extent permitted by law:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li>we <strong>disclaim all warranties</strong> express or implied (merchantability, fitness for a particular purpose, absence of errors);</li>
                        <li>we will <strong>not be liable</strong> for loss of profits, data loss, indirect, special, or consequential damages related to the use or inability to use the Service.</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">11. Termination</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        You may stop using the Service at any time. We may suspend or terminate access if you violate these Terms or if required by law.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">12. Terms Modifications</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        We may update these Terms. The date at the top of the page indicates the latest version. Using the Service after an update constitutes acceptance.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">13. Applicable Law and Jurisdiction</h2>
                      <p className="text-[#F2F3F5] leading-relaxed">
                        These Terms are governed by the laws of <strong>Canada</strong>. Any dispute will be submitted to the <strong>competent courts of Canada</strong>.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">14. Contact</h2>
                      <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
                        <li><strong>General Support</strong>: support@tracksy.me</li>
                        <li><strong>Abuse Reporting</strong>: support@tracksy.me</li>
                      </ul>
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