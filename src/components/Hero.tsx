"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main hero content */}
      <div className="relative container-responsive spacing-responsive">
        <div className="grid-responsive-2 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in opacity-0 animate-delay-300 text-center lg:text-left">
            <h1 className="text-responsive-xl font-bold text-white mb-4 sm:mb-6">
              <span className="gradient-text-ashale">GARAGE DOORS &</span>
              <br />
              <span className="text-white">GATE MOTORS,</span>
              <br />
              <span className="gradient-text-ashale">BALLITO</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expert Technical Solutions for Your Home and Business!
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-ashale text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover-glow text-sm sm:text-base order-1"
                asChild
              >
                <Link href="#contact">Get Free Quote</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#FFD700] text-[#FFD700] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-black transition-all duration-300 bg-transparent text-sm sm:text-base order-2"
                asChild
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image grid */}
          <div className="mt-8 lg:mt-0 animate-fade-in opacity-0 animate-delay-500">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-lg mx-auto lg:max-w-none">
              <div className="space-y-2 sm:space-y-4">
                <Image
                  src="/image1.png"
                  alt="Garage Door Installation - Professional sectional door"
                  width={300}
                  height={240}
                  className="responsive-image rounded-lg shadow-lg hover-lift h-32 sm:h-40 lg:h-48"
                  priority
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 300px"
                />
                <Image
                  src="/image3.png"
                  alt="Garage Door Motor Installation - Automated opener system"
                  width={300}
                  height={240}
                  className="responsive-image rounded-lg shadow-lg hover-lift h-32 sm:h-40 lg:h-48"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 300px"
                />
              </div>

              <div className="space-y-2 sm:space-y-4 mt-4 sm:mt-8">
                <Image
                  src="/image2.png"
                  alt="Gate Motor Installation - Sliding gate automation"
                  width={300}
                  height={240}
                  className="responsive-image rounded-lg shadow-lg hover-lift h-32 sm:h-40 lg:h-48"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 300px"
                />
                <Image
                  src="/image4.png"
                  alt="Modern Garage Door - Contemporary residential installation"
                  width={300}
                  height={240}
                  className="responsive-image rounded-lg shadow-lg hover-lift h-32 sm:h-40 lg:h-48"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce no-print">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#FFD700] rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-[#FFD700] rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
