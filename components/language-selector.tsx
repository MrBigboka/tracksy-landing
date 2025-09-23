'use client'

import { useTranslation, type Language } from '@/hooks/use-translation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'fr' as Language, name: 'Français', flag: 'FR' },
  { code: 'en' as Language, name: 'English', flag: 'EN' },
]

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation()

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost" 
            size="sm"
            className="h-9 px-2 text-[#F2F3F5] hover:text-[#D5FF3F] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#D5FF3F]/50"
          >
            <Globe className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">{currentLanguage.name}</span>
            <span className="sm:hidden text-xs font-bold">{currentLanguage.flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-40 z-[100] bg-[#1A1F2E] border-[#2A2F3C] shadow-2xl"
          sideOffset={5}
        >
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`cursor-pointer hover:bg-[#2A2F3C] text-[#F2F3F5] ${
                language === lang.code ? 'bg-[#D5FF3F]/10 text-[#D5FF3F]' : ''
              }`}
            >
              <span className="mr-2 text-xs font-bold bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded">{lang.flag}</span>
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}