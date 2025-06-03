"use client";

import Link from "next/link";
import {
  Phone,
  Globe,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Garage Door Installation", href: "#services" },
    { name: "Garage Door Repairs", href: "#services" },
    { name: "Gate Motor Installation", href: "#services" },
    { name: "Gate Motor Repairs", href: "#services" },
    { name: "Quotations & Reports", href: "#services" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "063 512 1494",
      href: "tel:0635121494",
    },
    {
      icon: Globe,
      text: "www.ashale.vercel.app",
      href: "https://www.ashale.vercel.app",
    },
    {
      icon: Clock,
      text: "Mon-Fri: 8AM-6PM",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
  ];

  const serviceAreas = [
    "Ballito",
    "Durban",
    "Umhlanga",
    "KwaDukuza",
    "KwaZulu-Natal",
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                ASHALE
              </span>
              <span className="text-white ml-2">AUTOMATION</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Expert Technical Solutions for Your Home and Business!
            </p>

            {/* Business Hours */}
            <div className="space-y-2">
              <h5 className="text-white font-semibold">Business Hours</h5>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors p-2 rounded-full hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <IconComponent className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                    <span>{contact.text}</span>
                  </div>
                );

                return (
                  <li key={index}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="hover:text-[#FFD700] transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}

              {/* Email */}
              <li>
                <a
                  href="mailto:durbanautomation@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-[#FFD700] transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span>durbanautomation@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Service Areas
            </h4>
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="h-4 w-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  We serve the greater Durban area:
                </p>
                <ul className="grid grid-cols-1 gap-1 text-gray-400 text-sm">
                  {serviceAreas.map((area, index) => (
                    <li
                      key={index}
                      className="hover:text-[#FFD700] transition-colors cursor-default"
                    >
                      • {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-3 bg-gray-900 rounded-lg border border-gray-800">
              <h5 className="text-[#FFD700] font-semibold text-sm mb-2">
                Emergency Service
              </h5>
              <p className="text-gray-400 text-xs mb-2">
                24/7 Emergency Repairs Available
              </p>
              <a
                href="tel:0635121494"
                className="text-white hover:text-[#FFD700] transition-colors text-sm font-medium"
              >
                Call: 063 512 1494
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Ashale Automation. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional garage door and gate motor solutions
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                href="#services"
                className="text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
