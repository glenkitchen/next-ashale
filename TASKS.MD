# TASKS.MD

As you complete tasks update this file to show which tasks have been completed.

## Website Conversion Tasks

### 1. Header/Navigation Component

- [ ] Create navigation bar with company logo
- [ ] Add menu items: Home, Services, Gallery, About, Contact
- [ ] Make navigation responsive for mobile devices
- [ ] Add contact phone number in header

### 2. Hero Section

- [ ] Replace Next.js logo with garage door hero image
- [ ] Add compelling headline about garage door services
- [ ] Add call-to-action button for free quotes
- [ ] Include background image of installed garage doors (from provided assets)

### 3. Services Section

- [ ] Create services grid component
- [ ] Add service cards for:
  - Garage Door Installation
  - Roller Shutter Installation
  - Garage Door Repair
  - Motor/Automation Installation
  - Maintenance Services
- [ ] Use provided images to illustrate services

### 4. Gallery/Portfolio Component

- [ ] Create image gallery component
- [ ] Display before/after photos of installations
- [ ] Include images of:
  - Completed garage door installations
  - Roller shutter installations
  - Motor installations
  - Solar panel integration work
- [ ] Add lightbox functionality for image viewing

### 5. About Section

- [ ] Add company information
- [ ] Include experience/credentials
- [ ] Add team photo or company values
- [ ] Highlight specializations (residential/commercial)

### 6. Contact/Quote Form Component

- [ ] Create contact form with fields:
  - Name, Email, Phone
  - Service Type (dropdown)
  - Property Type (residential/commercial)
  - Message/Requirements
  - Preferred contact method
- [ ] Add form validation
- [ ] Style form to match website design

### 7. Email Functionality

- [ ] Set up Next.js API route (`/api/send-quote`)
- [ ] Install and configure nodemailer (simple, no external templates)
- [ ] Create email template function that formats:
  - Customer details
  - Quote request information
  - Service requirements
- [ ] Send email to business owner when form is submitted
- [ ] Send confirmation email to customer
- [ ] Add error handling for email failures

### 8. Footer Component

- [ ] Add company contact information
- [ ] Include business hours
- [ ] Add service areas covered
- [ ] Include social media links (if applicable)
- [ ] Add copyright information

### 9. Responsive Design & Styling

- [ ] Ensure all components work on mobile devices
- [ ] Optimize images for web performance
- [ ] Add consistent color scheme (professional blue/grey theme)
- [ ] Implement smooth scrolling between sections

### 10. SEO & Meta Tags

- [ ] Update page title and meta description
- [ ] Add relevant keywords for garage door services
- [ ] Include local SEO elements (location-based keywords)
- [ ] Add Open Graph tags for social sharing

### 11. Additional Features

- [ ] Add "Call Now" floating button for mobile
- [ ] Include testimonials section (placeholder for now)
- [ ] Add service area coverage map or list
- [ ] Include emergency contact information

## Email Implementation Approach

**Recommended Simple Solution:**

1. Use Next.js API routes with nodemailer
2. Create a basic HTML email template using template literals
3. Configure SMTP settings (Gmail, Outlook, or hosting provider SMTP)
4. Format quote requests into readable email format
5. No external templating libraries needed - just string interpolation

**Email Flow:**

1. User submits quote form
2. API validates form data
3. Sends formatted email to business owner
4. Sends confirmation email to customer
5. Returns success/error response to frontend

## Priority Order

1. Hero Section & Navigation (immediate visual impact)
2. Services Section (core business offering)
3. Contact/Quote Form (lead generation)
4. Email functionality (business critical)
5. Gallery & About sections (trust building)
6. Responsive design & polish
