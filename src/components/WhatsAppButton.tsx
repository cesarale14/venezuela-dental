"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-whatsapp text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl animate-pulse-whatsapp"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}
