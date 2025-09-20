"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  DoorOpen,
  FileText,
  Settings,
  Star,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: DoorOpen,
      title: "GARAGE DOOR INSTALLATIONS",
      description:
        "Professional installation of high-quality garage doors with expert precision and care.",
      features: [
        "Springs & Torsion Cables",
        "Roller Wheels & Hinges",
        "Panels & Sales",
      ],
      isSpecial: false,
    },
    {
      icon: Wrench,
      title: "GARAGE DOOR REPAIRS",
      description:
        "Quick and reliable repair services to get your garage door working perfectly again.",
      features: [
        "Maintenance & Refurbishment",
        "Emergency Repairs",
        "Parts Replacement",
      ],
      isSpecial: false,
    },
    {
      icon: Settings,
      title: "GATE MOTOR INSTALLATIONS",
      description:
        "Expert installation of automated gate motors for enhanced security and convenience.",
      features: [
        "Slide & Swing Gate Motors",
        "Remote Control Systems",
        "Safety Features",
      ],
      isSpecial: false,
    },
    {
      icon: Wrench,
      title: "GATE MOTOR REPAIRS",
      description:
        "Comprehensive repair services for all types of gate motor systems.",
      features: [
        "Motor Diagnostics",
        "Control Board Repairs",
        "Sensor Calibration",
      ],
      isSpecial: false,
    },
    {
      icon: FileText,
      title: "QUOTATIONS & DAMAGE REPORTS",
      description:
        "Detailed assessments and transparent pricing for all our services.",
      features: ["Free Quotations", "Damage Assessments", "Insurance Reports"],
      isSpecial: false,
    },
    {
      icon: Star,
      title: "SPECIALIZATION",
      description:
        "We specialize in all types of slide and swing gate motors with expert technical knowledge.",
      features: ["All Motor Types", "Expert Solutions", "Quality Guarantee"],
      isSpecial: true,
    },
  ];

  return (
    <section id="services" className="spacing-responsive bg-white">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            <span className="gradient-text-ashale">OUR SERVICES</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional installation and repair services for all your
            automation needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-responsive-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Card
                key={index}
                className={`group hover-lift border ${
                  service.isSpecial
                    ? "gradient-ashale text-black border-transparent"
                    : "bg-white border-gray-100 hover:border-[#FFD700]/30"
                }`}
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 ${
                      service.isSpecial ? "bg-black" : "gradient-ashale"
                    }`}
                  >
                    <IconComponent
                      className={`h-6 w-6 sm:h-8 sm:w-8 ${
                        service.isSpecial ? "text-[#FFD700]" : "text-black"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight ${
                      service.isSpecial ? "text-black" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mb-4 text-sm sm:text-base leading-relaxed ${
                      service.isSpecial ? "text-black/80" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle
                          className={`h-4 w-4 flex-shrink-0 ${
                            service.isSpecial ? "text-black" : "text-[#FFD700]"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            service.isSpecial ? "text-black" : "text-gray-500"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Special badge for featured service */}
                  {service.isSpecial && (
                    <Badge className="mt-4 bg-black text-[#FFD700] hover:bg-black/90">
                      Featured Service
                    </Badge>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Need Expert Technical Solutions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Contact us today for professional garage door and gate motor
              services. We provide free quotations and expert assessments for
              all your automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="gradient-ashale text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover-glow text-sm sm:text-base inline-block"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:0797696789"
                className="border-2 border-[#FFD700] text-[#FFD700] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-black transition-all duration-300 text-sm sm:text-base inline-block"
              >
                Call 079 769 6789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
