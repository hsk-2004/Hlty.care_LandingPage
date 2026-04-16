import React from 'react';
import { Link2 } from 'lucide-react';

const imgTwitterX = "/images/icons/twitter-x.svg"; // Fallback to path if exists, otherwise use lucide
const imgWhatsApp = "/images/icons/whatsapp.svg";

function ShareButton({ text, children, color, textColor }: { text: string, children: React.ReactNode, color: string, textColor: string }) {
  return (
    <button className={`${color} ${textColor} flex gap-[12px] w-[149px] h-[40px] items-center justify-center rounded-full group hover:scale-[1.02] transition-transform`}>
      <span className="font-haptik font-medium text-[12px] uppercase tracking-wider">{text}</span>
      <div className="w-[18px] h-[18px] flex items-center justify-center">
        {children}
      </div>
    </button>
  );
}

export default function ShareSection() {
  return (
    <div className="mt-[150px] mb-[150px] flex flex-col items-center gap-[48px] relative w-full" data-node-id="2790:7533">
      <div className="flex flex-col gap-[20px] items-center text-center">
        <h2 className="text-[#e4dbcd] text-[42px] font-['Jubilat'] font-normal uppercase leading-tight italic">SPREAD THE WORD.</h2>
        <div className="text-[#e4dbcd] text-[24px] font-['Jubilat'] font-normal max-w-[813px] leading-relaxed">
          <p>The more voices, the louder the message.</p>
          <p>Share this page with every parent you know.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[24px] items-center scale-110 xl:scale-125">
        <ShareButton text="SHARE ON" color="bg-[#e4dbcd]" textColor="text-[#183a39]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </ShareButton>
        <ShareButton text="SHARE ON" color="bg-[#51d2a2]" textColor="text-[#183a39]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.5.7l5.2-1.3z" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 13a3.5 3.5 0 0 0 5 0"/></svg>
        </ShareButton>
        <button className="border-2 border-[#e4dbcd] flex gap-[12px] w-[149px] h-[40px] items-center justify-center rounded-full group hover:bg-[#e4dbcd]/10 transition-all">
          <span className="font-haptik font-medium text-[#e4dbcd] text-[12px] uppercase tracking-wider">COPY LINK</span>
          <Link2 className="text-[#e4dbcd]" size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
