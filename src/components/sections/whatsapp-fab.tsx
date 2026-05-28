"use client";

import { siteConfig } from "@/lib/utils";

export function WhatsAppFab() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola SIBRA DGO, me interesa cotizar un proyecto.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 4.1 18.31L3 22l3.79-1.08A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.25.64.6-2.2-.2-.32a8.34 8.34 0 1 1 6.4 3.22Zm4.57-6.24c-.25-.13-1.47-.73-1.7-.81s-.39-.13-.56.13-.64.81-.79.97-.29.2-.54.07a6.8 6.8 0 0 1-2-1.24 7.51 7.51 0 0 1-1.38-1.72c-.14-.25 0-.38.11-.5s.25-.29.37-.43a1.6 1.6 0 0 0 .25-.42.46.46 0 0 0 0-.43c-.07-.13-.56-1.35-.77-1.85s-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.83 2.83 0 0 0-.88 2.1 4.9 4.9 0 0 0 1 2.6 11.27 11.27 0 0 0 4.31 3.8c.6.26 1.07.41 1.44.53a3.46 3.46 0 0 0 1.59.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.11-.23-.18-.48-.31Z"/>
      </svg>
    </a>
  );
}
