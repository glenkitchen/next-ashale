"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Shield, Phone, Award, CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals",
      detail:
        "Our certified technicians bring years of specialized experience in garage door and gate motor systems.",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick response time",
      detail:
        "Same-day service available with rapid response to all service calls and emergency repairs.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Guaranteed workmanship",
      detail:
        "All installations and repairs come with comprehensive warranties and quality guarantees.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Always available",
      detail:
        "Round-the-clock customer support for emergencies and technical assistance.",
    },
  ];

  const achievements = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Ashale Automation
              </span>
              ?
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in the automation industry, we provide
              expert technical solutions for both residential and commercial
              properties. Our commitment to quality and customer satisfaction
              sets us apart.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Residential Garage Doors",
                  "Commercial Gate Motors",
                  "Emergency Repairs",
                  "Solar Integration",
                  "Automation Systems",
                  "Insurance Claims",
                ].map((spec, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/image1.png"
                alt="Professional Garage Door Installation by Ashale Automation"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />

              {/* Overlay Badge */}
              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black">
                Professional Installation
              </Badge>
            </div>

            {/* Additional Achievement Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {achievements.slice(0, 2).map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-4">
                      <IconComponent className="h-6 w-6 text-[#FFD700] mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900">
                        {achievement.number}
                      </div>
                      <div className="text-xs text-gray-600">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Company Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Excellence
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every project we undertake reflects our dedication to quality,
              reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Standards",
                description:
                  "All work completed to industry standards with certified technicians and quality materials.",
                icon: Shield,
              },
              {
                title: "Customer-Focused",
                description:
                  "Your satisfaction is our priority. We work closely with you from consultation to completion.",
                icon: Users,
              },
              {
                title: "Innovative Solutions",
                description:
                  "Latest technology and automation systems for enhanced security and convenience.",
                icon: Award,
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
