"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Building,
  Home,
  Settings,
  Sun,
} from "lucide-react";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const galleryItems = [
    {
      id: 1,
      src: "/image1.png",
      title: "Professional Garage Door Installation",
      category: "Garage Door Installation",
      description:
        "High-quality sectional garage door with professional finish",
      type: "installation",
      property: "residential",
      icon: Home,
    },
    {
      id: 2,
      src: "/image2.png",
      title: "Sliding Gate Motor System",
      category: "Gate Motor Installation",
      description: "Automated sliding gate with advanced motor control system",
      type: "motor",
      property: "commercial",
      icon: Settings,
    },
    {
      id: 3,
      src: "/image3.png",
      title: "Garage Door Motor Installation",
      category: "Motor Installation",
      description: "Professional garage door opener with remote control access",
      type: "motor",
      property: "residential",
      icon: Settings,
    },
    {
      id: 4,
      src: "/image4.png",
      title: "Modern Residential Installation",
      category: "Garage Door Installation",
      description: "Contemporary garage door design with premium materials",
      type: "installation",
      property: "residential",
      icon: Home,
    },
    {
      id: 5,
      src: "/image5.png",
      title: "Solar Integration Project",
      category: "Solar Panel Integration",
      description: "Garage installation with integrated solar panel systems",
      type: "solar",
      property: "residential",
      icon: Sun,
    },
  ];

  const categories = [
    "All Projects",
    "Garage Door Installation",
    "Gate Motor Installation",
    "Motor Installation",
    "Solar Panel Integration",
  ];

  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredItems =
    activeCategory === "All Projects"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? filteredItems.length - 1
          : selectedImageIndex - 1
      );
    }
  };

  return (
    <section id="gallery" className="spacing-responsive bg-gray-50">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            <span className="gradient-text-ashale">OUR PORTFOLIO</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our professional installations and expert workmanship
            across residential and commercial projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className={`text-xs sm:text-sm ${
                activeCategory === category
                  ? "gradient-ashale text-black hover:bg-[#FFD700]"
                  : "border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
              }`}
            >
              {category.replace(" Installation", "")}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid-responsive-3">
          {filteredItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={item.id}
                className="group overflow-hidden border border-gray-200 hover:border-[#FFD700]/50 hover-lift"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="responsive-image h-48 sm:h-56 lg:h-64 transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-ashale text-black hover:bg-[#FFA500]"
                            onClick={() => setSelectedImageIndex(index)}
                          >
                            <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] sm:max-w-4xl w-full p-0 bg-black border-none">
                          <div className="relative">
                            <Image
                              src={filteredItems[selectedImageIndex || 0].src}
                              alt={filteredItems[selectedImageIndex || 0].title}
                              width={800}
                              height={600}
                              className="responsive-image max-h-[80vh]"
                            />

                            {/* Navigation Arrows */}
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                              onClick={prevImage}
                            >
                              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                              onClick={nextImage}
                            >
                              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Button>

                            {/* Image Info */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                              <h3 className="text-xl font-bold mb-2">
                                {filteredItems[selectedImageIndex || 0].title}
                              </h3>
                              <p className="text-gray-300">
                                {
                                  filteredItems[selectedImageIndex || 0]
                                    .description
                                }
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black">
                      <IconComponent className="h-3 w-3 mr-1" />
                      {item.category}
                    </Badge>

                    {/* Property Type Badge */}
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 bg-black/70 text-white capitalize"
                    >
                      {item.property === "residential" ? (
                        <Home className="h-3 w-3 mr-1" />
                      ) : (
                        <Building className="h-3 w-3 mr-1" />
                      )}
                      {item.property}
                    </Badge>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {item.category}
                      </span>
                      <IconComponent className="h-5 w-5 text-[#FFD700]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our satisfied customers who trust ASHALE AUTOMATION for
              professional garage door and gate motor solutions. View more of
              our work and get started on your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:from-[#FFD700] hover:to-[#FFA500]">
                Request Free Quote
              </Button>
              <Button
                variant="outline"
                className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
              >
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
