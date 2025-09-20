"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:0797696789"
      className="fixed bottom-4 right-4 z-40 md:hidden no-print"
      aria-label="Call Ashale Automation"
    >
      <Button
        size="lg"
        className="gradient-ashale text-black rounded-full w-14 h-14 shadow-2xl hover-glow animate-pulse hover:animate-none"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </a>
  );
}
