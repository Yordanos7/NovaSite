"use client";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { contactDetails } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      <a
        href={contactDetails.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5D] hover:shadow-2xl"
      >
        <MessageCircle className="h-4 w-4 fill-white" />
        <span className="hidden sm:inline font-sans">Chat with us on WhatsApp</span>
        <span className="sm:hidden font-sans">WhatsApp</span>
        <ArrowUpRight className="h-3 w-3 opacity-80" />
      </a>
    </div>
  );
}
