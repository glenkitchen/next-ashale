"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] shadow-lg no-print">
      <div className="container-responsive">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold">
              <span className="gradient-text-ashale">ASHALE</span>
              <span className="text-white ml-2">AUTOMATION</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#FFD700] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Phone */}
            <div className="ml-8 flex items-center">
              <Phone className="h-4 w-4 text-[#FFD700] mr-2" />
              <a
                href="tel:0635121494"
                className="text-white hover:text-[#FFD700] text-sm font-medium transition-colors duration-300"
              >
                063 512 1494
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#FFD700] hover:bg-transparent"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] border-l border-gray-600 w-[280px] sm:w-[320px]"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white hover:text-[#FFD700] px-4 py-3 text-lg font-medium transition-colors duration-300 rounded-lg hover:bg-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Mobile Contact */}
                  <div className="mt-8 pt-6 border-t border-gray-600">
                    <a
                      href="tel:0635121494"
                      className="flex items-center px-4 py-3 text-white hover:text-[#FFD700] transition-colors duration-300 rounded-lg hover:bg-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="h-5 w-5 text-[#FFD700] mr-3" />
                      <span className="text-lg font-medium">063 512 1494</span>
                    </a>
                    <p className="text-gray-400 text-sm px-4 mt-2">
                      Call for immediate service
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
