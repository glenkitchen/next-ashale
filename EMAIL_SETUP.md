# Email Setup Guide for Ashale Automation

## Overview

The website now includes a fully functional email system that sends quote requests to the business owner and confirmation emails to customers.

## Required Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
BUSINESS_EMAIL=info@ashaleautomation.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication**

   - Go to your Google Account settings
   - Enable 2-factor authentication

2. **Generate App Password**

   - Go to Google Account → Security → App passwords
   - Select "Mail" and generate a password
   - Use this password for `EMAIL_PASS` (not your regular Gmail password)

3. **Configure Environment Variables**
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-digit-app-password
   BUSINESS_EMAIL=info@ashaleautomation.com
   ```

## Alternative Email Providers

### Outlook/Hotmail

```javascript
// In route.ts, change the service to:
service: "outlook";
```

### Yahoo

```javascript
// In route.ts, change the service to:
service: "yahoo";
```

### Custom SMTP

```javascript
// Replace the service configuration with:
{
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
}
```

## Email Features

### Business Owner Email

- **Subject**: "New Quote Request - [Service Type] ([Customer Name])"
- **Contains**: Customer details, service requirements, contact preferences
- **Styling**: Professional HTML template with Ashale Automation branding
- **Actions**: Direct links to call, email, or WhatsApp the customer

### Customer Confirmation Email

- **Subject**: "Quote Request Received - Ashale Automation"
- **Contains**: Request summary, next steps, contact information
- **Styling**: Branded HTML template with company information
- **Features**: Emergency service notification, response time expectations

## Error Handling

The system includes comprehensive error handling:

- Email configuration validation
- Form data validation
- Graceful fallback to direct contact methods
- User-friendly error messages
- Fallback contact information display

## Testing

1. **Local Testing**

   - Set up environment variables
   - Fill out the contact form
   - Check email delivery

2. **Production Testing**
   - Deploy with production email credentials
   - Test form submission
   - Verify both business and customer emails are received

## Security Notes

- Never commit `.env.local` to version control
- Use app passwords, not regular account passwords
- Consider using dedicated business email accounts
- Monitor email sending limits (Gmail: 500/day for free accounts)

## Troubleshooting

### Common Issues

1. **"Email configuration error"**

   - Check EMAIL_USER and EMAIL_PASS values
   - Verify app password is correct
   - Ensure 2FA is enabled for Gmail

2. **"Failed to send email"**

   - Check internet connection
   - Verify email service is not down
   - Check daily sending limits

3. **Emails not received**
   - Check spam folders
   - Verify recipient email addresses
   - Test with different email providers

### Support

If you encounter issues, the form provides fallback contact information and users can always call or email directly.
