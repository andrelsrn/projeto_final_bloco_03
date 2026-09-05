import { LinkedinLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="w-full bg-[#2e3192] text-white flex justify-center py-4 mt-auto">
      <div className="container flex flex-col items-center gap-1 text-xs">
        <p className="font-bold text-sm">Farmácia Generation | Copyright: 2026</p>
        <p>Acesse nossas Redes Sociais</p>
        <div className="flex gap-2 mt-1">
          <LinkedinLogo size={22} weight="bold" className="cursor-pointer hover:opacity-80" />
          <InstagramLogo size={22} weight="bold" className="cursor-pointer hover:opacity-80" />
          <FacebookLogo size={22} weight="bold" className="cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </footer>
  );
}