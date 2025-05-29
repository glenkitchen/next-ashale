"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Globe, Clock, Mail, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    preferredContact: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "063 512 1494",
      subtitle: "Call us anytime",
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.ashaleautomation.com",
      subtitle: "Visit our website",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      subtitle: "Sat: 8:00 AM - 2:00 PM",
    },
  ];

  const serviceTypes = [
    "Garage Door Installation",
    "Garage Door Repair",
    "Gate Motor Installation",
    "Gate Motor Repair",
    "Quotation & Assessment",
    "Emergency Service",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Please select property type";
    }

    if (!formData.preferredContact) {
      newErrors.preferredContact = "Please select preferred contact method";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        propertyType: "",
        preferredContact: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your quote request has been submitted successfully. We&apos;ll
                get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:from-[#FFD700] hover:to-[#FFA500]"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              CONTACT US
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Get in touch for expert automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 text-lg">{info.details}</p>
                    {info.subtitle && (
                      <p className="text-gray-400 text-sm">{info.subtitle}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Additional Contact Methods */}
            <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <h4 className="text-white font-semibold text-lg mb-4">
                Quick Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:0635121494"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now: 063 512 1494</span>
                </a>
                <a
                  href="mailto:info@ashaleautomation.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email: info@ashaleautomation.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`mt-1 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-[#FFD700] focus:border-[#FFD700]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`mt-1 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-[#FFD700] focus:border-[#FFD700]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`mt-1 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-[#FFD700] focus:border-[#FFD700]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Service Type *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      handleInputChange("serviceType", value)
                    }
                  >
                    <SelectTrigger
                      className={`mt-1 ${
                        errors.serviceType ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                {/* Property Type */}
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Property Type *
                  </Label>
                  <RadioGroup
                    value={formData.propertyType}
                    onValueChange={(value) =>
                      handleInputChange("propertyType", value)
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="residential" id="residential" />
                      <Label htmlFor="residential">Residential</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="commercial" id="commercial" />
                      <Label htmlFor="commercial">Commercial</Label>
                    </div>
                  </RadioGroup>
                  {errors.propertyType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.propertyType}
                    </p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Preferred Contact Method *
                  </Label>
                  <RadioGroup
                    value={formData.preferredContact}
                    onValueChange={(value) =>
                      handleInputChange("preferredContact", value)
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact">Phone Call</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                      <Label htmlFor="whatsapp-contact">WhatsApp</Label>
                    </div>
                  </RadioGroup>
                  {errors.preferredContact && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.preferredContact}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message/Requirements *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={`mt-1 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-[#FFD700] focus:border-[#FFD700]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
