import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Type definitions for form data
interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  propertyType: string;
  preferredContact: string;
  message: string;
  urgency?: string;
}

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail", // You can change this to other services like Outlook, Yahoo, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your app password (not regular password)
    },
  });
};

// Email template for business owner
const createBusinessEmailTemplate = (formData: QuoteFormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request - Ashale Automation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: black; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a1a1a; }
        .value { margin-left: 10px; }
        .section { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #FFD700; }
        .urgent { background: #ffe6e6; border-left-color: #ff4444; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔧 New Quote Request</h1>
          <p>ASHALE AUTOMATION</p>
        </div>
        <div class="content">
          <div class="section ${formData.urgency === "urgent" ? "urgent" : ""}">
            <h2>Customer Information</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${formData.name}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${formData.email}</span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${formData.phone}</span>
            </div>
            <div class="field">
              <span class="label">Preferred Contact:</span>
              <span class="value">${formData.preferredContact}</span>
            </div>
          </div>

          <div class="section">
            <h2>Service Details</h2>
            <div class="field">
              <span class="label">Service Type:</span>
              <span class="value">${formData.serviceType}</span>
            </div>
            <div class="field">
              <span class="label">Property Type:</span>
              <span class="value">${formData.propertyType}</span>
            </div>
            ${
              formData.urgency
                ? `
            <div class="field">
              <span class="label">Urgency:</span>
              <span class="value">${formData.urgency}</span>
            </div>
            `
                : ""
            }
          </div>

          <div class="section">
            <h2>Requirements & Message</h2>
            <div class="field">
              <span class="label">Details:</span>
              <div style="margin-top: 10px; padding: 10px; background: white; border-radius: 4px;">
                ${formData.message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>

          <div class="section">
            <h2>📞 Next Steps</h2>
            <p><strong>Contact customer via ${
              formData.preferredContact
            }:</strong></p>
            <ul>
              <li>Phone: <a href="tel:${formData.phone}">${
    formData.phone
  }</a></li>
              <li>Email: <a href="mailto:${formData.email}">${
    formData.email
  }</a></li>
              ${
                formData.preferredContact === "WhatsApp"
                  ? `<li>WhatsApp: <a href="https://wa.me/${formData.phone.replace(
                      /\D/g,
                      ""
                    )}">${formData.phone}</a></li>`
                  : ""
              }
            </ul>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email template for customer confirmation
const createCustomerEmailTemplate = (formData: QuoteFormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Quote Request Received - Ashale Automation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: black; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #FFD700; }
        .contact-info { background: #1a1a1a; color: white; padding: 15px; border-radius: 8px; text-align: center; }
        .emergency { background: #ffe6e6; border-left-color: #ff4444; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Quote Request Received</h1>
          <p><strong>ASHALE AUTOMATION</strong></p>
          <p>Expert Technical Solutions for Your Home and Business!</p>
        </div>
        <div class="content">
          <div class="section">
            <h2>Thank you, ${formData.name}!</h2>
            <p>We have received your quote request for <strong>${
              formData.serviceType
            }</strong> and will contact you soon via <strong>${
    formData.preferredContact
  }</strong>.</p>
          </div>

          <div class="section">
            <h2>📋 Your Request Summary</h2>
            <p><strong>Service:</strong> ${formData.serviceType}</p>
            <p><strong>Property Type:</strong> ${formData.propertyType}</p>
            <p><strong>Contact Method:</strong> ${formData.preferredContact}</p>
          </div>

          <div class="section">
            <h2>⏱️ What Happens Next?</h2>
            <ul>
              <li><strong>Response Time:</strong> We'll contact you within 2-4 hours during business hours</li>
              <li><strong>Free Assessment:</strong> Our expert will discuss your requirements</li>
              <li><strong>Detailed Quote:</strong> You'll receive a comprehensive, no-obligation quote</li>
              <li><strong>Professional Service:</strong> Quality installation by certified technicians</li>
            </ul>
          </div>

          ${
            formData.urgency === "urgent"
              ? `
          <div class="section emergency">
            <h2>🚨 Emergency Service</h2>
            <p>We understand this is urgent. Our emergency team will prioritize your request and contact you as soon as possible.</p>
          </div>
          `
              : ""
          }

          <div class="contact-info">
            <h2>📞 Contact Information</h2>
            <p><strong>Phone:</strong> <a href="tel:0635121494" style="color: #FFD700;">063 512 1494</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@ashaleautomation.com" style="color: #FFD700;">info@ashaleautomation.com</a></p>
            <p><strong>Website:</strong> <a href="https://www.ashaleautomation.com" style="color: #FFD700;">www.ashaleautomation.com</a></p>
            <p><strong>Business Hours:</strong> Mon-Fri 8:00-18:00, Sat 8:00-14:00</p>
            <p><strong>Emergency Service:</strong> 24/7 Available</p>
          </div>

          <div class="section">
            <h2>🏆 Why Choose Ashale Automation?</h2>
            <ul>
              <li>✅ 10+ Years of Experience</li>
              <li>✅ Professional Installation Team</li>
              <li>✅ Quality Guaranteed</li>
              <li>✅ Fast Response Service</li>
              <li>✅ Competitive Pricing</li>
              <li>✅ 24/7 Emergency Support</li>
            </ul>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "serviceType",
      "propertyType",
      "preferredContact",
      "message",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Email configuration error:", error);
      return NextResponse.json(
        {
          error:
            "Email service configuration error. Please try again later or call us directly.",
        },
        { status: 500 }
      );
    }

    // Email to business owner
    const businessEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      subject: `New Quote Request - ${formData.serviceType} (${formData.name})`,
      html: createBusinessEmailTemplate(formData),
    };

    // Email to customer
    const customerEmailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: "Quote Request Received - Ashale Automation",
      html: createCustomerEmailTemplate(formData),
    };

    // Send emails
    try {
      // Send to business owner first
      await transporter.sendMail(businessEmailOptions);

      // Then send confirmation to customer
      await transporter.sendMail(customerEmailOptions);

      return NextResponse.json(
        {
          success: true,
          message: "Quote request sent successfully! We will contact you soon.",
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending error:", emailError);

      // Return a user-friendly error message
      return NextResponse.json(
        {
          error:
            "Failed to send email. Please try again or contact us directly at 063 512 1494.",
          fallback: {
            phone: "063 512 1494",
            email: "info@ashaleautomation.com",
          },
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      {
        error: "Server error. Please try again later or contact us directly.",
        fallback: {
          phone: "063 512 1494",
          email: "info@ashaleautomation.com",
        },
      },
      { status: 500 }
    );
  }
}
