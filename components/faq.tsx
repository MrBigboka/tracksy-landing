"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Comment fonctionne l'essai gratuit de 14 jours ?",
    answer: "Vous pouvez utiliser toutes les fonctionnalités de Tracksy pendant 14 jours sans aucune restriction. Aucune carte de crédit n'est requise pour commencer. À la fin de la période d'essai, vous pouvez choisir un plan payant ou continuer avec le plan gratuit limité."
  },
  {
    question: "Tracksy est-il adapté aux freelances québécois ?",
    answer: "Absolument ! Tracksy est conçu spécifiquement pour le marché québécois avec support des taxes locales (TPS/TVQ), facturation en dollars canadiens, et conformité aux réglementations fiscales du Québec."
  },
  {
    question: "Puis-je importer mes données depuis Toggl ou QuickBooks ?",
    answer: "Oui, nous offrons des outils d'importation pour migrer vos données depuis Toggl, QuickBooks, et d'autres outils populaires. Notre équipe peut vous aider avec la migration pour assurer une transition en douceur."
  },
  {
    question: "Comment fonctionne la facturation automatique ?",
    answer: "Tracksy génère automatiquement vos factures basées sur le temps enregistré et vos taux horaires. Vous pouvez personnaliser les modèles, ajouter des frais supplémentaires, et envoyer les factures directement depuis l'application."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "La sécurité est notre priorité. Toutes vos données sont chiffrées en transit et au repos, hébergées sur des serveurs canadiens, et nous respectons toutes les lois sur la protection des données du Canada."
  },
  {
    question: "Y a-t-il une application mobile ?",
    answer: "L'application mobile Tracksy est en développement et sera disponible bientôt sur iOS et Android. En attendant, notre interface web est entièrement responsive et fonctionne parfaitement sur mobile."
  },
  {
    question: "Puis-je collaborer avec mon équipe ?",
    answer: "Oui ! Le plan Business permet d'inviter des membres d'équipe, de gérer les permissions, et de suivre les projets collaboratifs. Parfait pour les agences et les petites entreprises."
  },
  {
    question: "Comment puis-je obtenir de l'aide ?",
    answer: "Nous offrons un support par chat en direct, email, et une base de connaissances complète. Notre équipe québécoise est disponible en français et répond rapidement à toutes vos questions."
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F3F5] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-[#A1A5B0] max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Tracksy pour commencer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-[#1E232C] rounded-xl bg-gradient-to-br from-[#141820] to-[#0B0E12] overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#1A1F27] transition-colors"
                >
                  <span className="text-lg font-semibold text-[#F2F3F5] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D5FF3F] transition-transform flex-shrink-0 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-[#1E232C]">
                      <p className="text-[#A1A5B0] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Simple end of FAQ */}
          <div className="text-center mt-12">
            <p className="text-[#A1A5B0]">
              Vous avez d'autres questions ? <a href="#contact" className="text-[#D5FF3F] hover:underline">Contactez-nous</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
