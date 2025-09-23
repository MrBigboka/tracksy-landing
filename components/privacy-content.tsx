'use client'

import { useTranslation } from '@/hooks/use-translation'

interface PrivacyContentProps {
  className?: string
}

export function PrivacyContent({ className = "" }: PrivacyContentProps) {
  const { language } = useTranslation()

  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      {language === 'fr' ? (
        // Contenu français
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">1. À propos</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              Cette Politique explique comment TRACKSY (« nous ») collecte, utilise, communique et protège vos <strong>renseignements personnels</strong>.
            </p>
            <p className="text-[#F2F3F5] leading-relaxed mt-4">
              <strong>Responsable de la protection des renseignements personnels (RPRP)</strong> :
              <br />
              <strong>Tracksy Inc.</strong> — <strong>support@tracksy.me</strong> — <strong>Canada</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">2. Renseignements que nous collectons</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Identité et contact</strong> : nom, prénom, courriel, téléphone.</li>
              <li><strong>Professionnels</strong> : adresse professionnelle, numéro d'entreprise.</li>
              <li><strong>Données d'usage</strong> : journaux techniques, paramètres, interactions avec l'interface.</li>
              <li><strong>Contenus saisis</strong> dans l'app (projets, notes, etc.).</li>
              <li><strong>Télémétrie et analytique</strong> (via Google Analytics) si vous y consentez (voir Cookies).</li>
            </ul>
            <p className="text-[#A1A5B0] mt-4">
              Nous <strong>ne visons pas</strong> les mineurs (&lt;18 ans) et ne collectons pas sciemment leurs données.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">3. Finalités</h2>
            <p className="text-[#F2F3F5] mb-4">Nous utilisons vos renseignements pour :</p>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li>fournir, opérer et maintenir TRACKSY ;</li>
              <li>assurer le support et communiquer avec vous (ex. info-service, incidents, changements) ;</li>
              <li>améliorer le produit (diagnostics, sécurité, performance) ;</li>
              <li>mesurer l'audience et comprendre l'usage (Google Analytics, si consentement).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">4. Bases de traitement et consentement</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              Nous recueillons des renseignements <strong>avec votre consentement</strong> et pour des <strong>finalités déterminées et légitimes</strong> (ex. fournir le Service). Vous pouvez <strong>retirer votre consentement</strong> pour les traitements qui s'y appuient (ex. Analytics) en tout temps en nous écrivant à support@tracksy.me.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">5. Communication à des tiers (fournisseurs)</h2>
            <p className="text-[#F2F3F5] mb-4">
              Nous <strong>ne vendons pas</strong> vos renseignements. Nous pouvons communiquer certains renseignements à des <strong>fournisseurs</strong> qui nous aident à opérer le Service, sous obligations contractuelles de confidentialité :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Supabase</strong> (hébergement, base de données) ;</li>
              <li><strong>Google Analytics</strong> (mesure d'audience, si consentement).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">6. Conservation</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              Nous conservons les renseignements <strong>aussi longtemps que nécessaire</strong> aux finalités décrites, puis nous les <strong>supprimons ou anonymisons</strong> de façon sécuritaire. Critères : exigences légales, besoins opérationnels, sécurité et prévention de fraude.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">7. Sécurité</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              Nous appliquons des <strong>mesures de sécurité raisonnables</strong> (contrôles d'accès, chiffrement en transit, journalisation). Aucun système n'est toutefois parfaitement sécurisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">8. Vos droits (Québec/Canada)</h2>
            <p className="text-[#F2F3F5] mb-4">Vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Accès</strong> à vos renseignements et <strong>rectification</strong> de ceux inexacts ;</li>
              <li><strong>Retrait de consentement</strong> (p. ex. analytics) ;</li>
              <li><strong>Portabilité</strong> : obtenir les renseignements <strong>informatisés</strong> recueillis auprès de vous dans un format <strong>structuré et couramment utilisé</strong> (lorsque applicable) ;</li>
              <li><strong>Plainte</strong> auprès de la CAI ou du CPVP (OPC).</li>
            </ul>
            <p className="text-[#A1A5B0] mt-4">
              Pour exercer vos droits, écrivez à <strong>support@tracksy.me</strong>. Nous répondons généralement dans un <strong>délai de 30 jours</strong> et pouvons demander une <strong>vérification d'identité</strong> raisonnable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">9. Incidents de confidentialité</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              En cas d'<strong>incident</strong> susceptible d'entraîner un <strong>risque de préjudice sérieux</strong>, nous notifierons la <strong>CAI</strong> et les <strong>personnes concernées</strong> conformément à la loi. Vous pouvez signaler tout incident présumé à <strong>support@tracksy.me</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">10. Cookies et technologies similaires</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              Voir notre <strong>Politique de cookies</strong> pour le détail et vos choix de consentement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">11. Modifications</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              Nous pouvons modifier cette Politique. La date en haut de page indique la dernière version. Si les changements sont importants, nous pourrons vous en aviser par courriel ou dans l'app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">12. Contact</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Responsable (RPRP)</strong> : Tracksy Inc., support@tracksy.me, Canada</li>
              <li><strong>Support</strong> : support@tracksy.me</li>
            </ul>
          </section>
        </>
      ) : (
        // English content
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">1. About</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              This Policy explains how TRACKSY ("we") collects, uses, communicates and protects your <strong>personal information</strong>.
            </p>
            <p className="text-[#F2F3F5] leading-relaxed mt-4">
              <strong>Personal Information Protection Officer (PIPO)</strong>:
              <br />
              <strong>Tracksy Inc.</strong> — <strong>support@tracksy.me</strong> — <strong>Canada</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">2. Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Identity and contact</strong>: name, first name, email, phone.</li>
              <li><strong>Professional</strong>: business address, business number.</li>
              <li><strong>Usage data</strong>: technical logs, settings, interface interactions.</li>
              <li><strong>Content entered</strong> in the app (projects, notes, etc.).</li>
              <li><strong>Telemetry and analytics</strong> (via Google Analytics) if you consent (see Cookies).</li>
            </ul>
            <p className="text-[#A1A5B0] mt-4">
              We do <strong>not target</strong> minors (&lt;18 years) and do not knowingly collect their data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">3. Purposes</h2>
            <p className="text-[#F2F3F5] mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li>provide, operate and maintain TRACKSY;</li>
              <li>provide support and communicate with you (e.g. customer service, incidents, changes);</li>
              <li>improve the product (diagnostics, security, performance);</li>
              <li>measure audience and understand usage (Google Analytics, if consent).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">4. Processing bases and consent</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              We collect information <strong>with your consent</strong> and for <strong>determined and legitimate purposes</strong> (e.g. providing the Service). You can <strong>withdraw your consent</strong> for processing that relies on it (e.g. Analytics) at any time by writing to us at support@tracksy.me.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">5. Communication and sharing</h2>
            <p className="text-[#F2F3F5] mb-4">
              We <strong>do not sell</strong> your personal information. We may share it in limited cases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Service providers</strong> (hosting, analytics) under strict confidentiality;</li>
              <li><strong>Legal obligations</strong> (court orders, investigations);</li>
              <li><strong>Business transfer</strong> (merger, acquisition) with equivalent protection.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">6. Retention</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              We retain information <strong>as long as necessary</strong> for the described purposes, then <strong>securely delete or anonymize</strong> it. Criteria: legal requirements, operational needs, security and fraud prevention.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">7. Security</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              We implement <strong>reasonable security measures</strong> (access controls, encryption in transit, logging). However, no system is perfectly secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">8. Your rights (Quebec/Canada)</h2>
            <p className="text-[#F2F3F5] mb-4">You have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Access</strong> to your information and <strong>correction</strong> of inaccurate information;</li>
              <li><strong>Withdrawal of consent</strong> (e.g. analytics);</li>
              <li><strong>Portability</strong>: obtain <strong>computerized information</strong> collected from you in a <strong>structured and commonly used format</strong> (when applicable);</li>
              <li><strong>Complaint</strong> to the CAI or CPVP (OPC).</li>
            </ul>
            <p className="text-[#A1A5B0] mt-4">
              To exercise your rights, write to <strong>support@tracksy.me</strong>. We generally respond within <strong>30 days</strong> and may request reasonable <strong>identity verification</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">9. Privacy incidents</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              In case of an <strong>incident</strong> likely to cause a <strong>risk of serious harm</strong>, we will notify the <strong>CAI</strong> and <strong>affected individuals</strong> in accordance with the law. You can report any suspected incident to <strong>support@tracksy.me</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">10. Cookies and similar technologies</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              See our <strong>Cookie Policy</strong> for details and your consent choices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">11. Modifications</h2>
            <p className="text-[#F2F3F5] leading-relaxed">
              We may modify this Policy. The date at the top of the page indicates the latest version. If changes are significant, we may notify you by email or in the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#D5FF3F]">12. Contact</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#F2F3F5]">
              <li><strong>Privacy Officer (PIPO)</strong>: Tracksy Inc., support@tracksy.me, Canada</li>
              <li><strong>Support</strong>: support@tracksy.me</li>
            </ul>
          </section>
        </>
      )}
    </div>
  )
}