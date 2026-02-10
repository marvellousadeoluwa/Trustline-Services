# Trustline Professional Services Ltd - Development TODO List

## Project Overview
Building a premium, compliance-focused landing page for Trustline Professional Services Ltd - a tax and accounting services firm in Nigeria.

---

## 1. Project Setup & Infrastructure

### 1.1 Initialize Next.js Project
- [ ] Create Next.js 16 project with TypeScript
- [ ] Configure project structure (components, pages, styles, utils)
- [ ] Set up ESLint and Prettier configurations
- [ ] Initialize Git repository and create .gitignore

### 1.2 Install Core Dependencies
- [ ] Install Next.js 16 and React dependencies
- [ ] Install Tailwind CSS and configure tailwind.config.js
- [ ] Install Framer Motion for animations
- [ ] Install React Hook Form for form handling
- [ ] Install additional utility libraries (date-fns, clsx, etc.)

### 1.3 Development Environment Setup
- [ ] Configure environment variables (.env.local)
- [ ] Set up development scripts in package.json
- [ ] Configure TypeScript paths for clean imports
- [ ] Set up absolute imports (@/components, @/utils, etc.)

---

## 2. Design System Implementation

### 2.1 Color Palette Setup
- [ ] Define color variables in Tailwind config:
  - [ ] Primary White (#FFFFFF)
  - [ ] Trust Blue (#003366)
  - [ ] Accent Sky (#E6F0FA)
  - [ ] Action Cyan (#00A3FF)
  - [ ] Border Grey (#D1D9E6)
- [ ] Create color utility classes
- [ ] Test color contrast ratios for accessibility

### 2.2 Typography System
- [ ] Import and configure Lexend font for headlines
- [ ] Import and configure Inter font for body text
- [ ] Create typography utility classes (headings, body, captions)
- [ ] Set up responsive font scaling

### 2.3 Component Library Foundation
- [ ] Create base Button component with variants (Navy, Cyan, Outline)
- [ ] Create Card component with Bento Grid styling
- [ ] Create Icon component system for line-art icons
- [ ] Create Container/Wrapper components with proper spacing
- [ ] Create Section component with consistent padding

### 2.4 Layout Components
- [ ] Build Bento Grid layout system
- [ ] Create responsive grid utilities
- [ ] Implement whitespace system (20% more than standard)
- [ ] Create border system (thin, light grey-blue borders)

---

## 3. Landing Page Sections

### 3.1 Navigation Bar
- [ ] Create Header component with logo (Trustline Professional Services Ltd)
- [ ] Add "Client Portal (Coming Soon)" link (disabled state)
- [ ] Implement "Get Compliant Now" button (Navy Blue, white text)
- [ ] Make header sticky on mobile
- [ ] Add mobile hamburger menu (if needed)
- [ ] Implement smooth scroll behavior

### 3.2 Hero Section
- [ ] Create Hero component with split layout (left: text, right: image)
- [ ] Implement headline: "Integrity in Accounting. Confidence in Compliance."
- [ ] Add sub-headline text
- [ ] Create "Trustline Promise" section
- [ ] Build primary CTA: "Start a Conversation on WhatsApp" button (Action Cyan)
- [ ] Add secondary CTA: "Email us for a formal assessment" link
- [ ] Add subtle light blue gradient background
- [ ] Integrate tablet mockup image (Tax Status: Cleared dashboard)
- [ ] Add Framer Motion fade-up animations

### 3.3 "Who We Serve" Section
- [ ] Create section header: "Built for Those Who Value Longevity"
- [ ] Build Bento Grid layout with 4 cards:
  - [ ] Card 1: Private Professionals (Light Sky Blue background)
  - [ ] Card 2: The Modern Workforce (White background, Navy border)
  - [ ] Card 3: Growth-Stage SMEs (Navy background, White text)
  - [ ] Card 4: Impact Organizations (Light Sky Blue background)
- [ ] Add client profile content for each card
- [ ] Add Navy icons for each card
- [ ] Implement hover effects and animations

### 3.4 Value Proposition Section
- [ ] Create section header: "Compliance Without Compromise"
- [ ] Add introductory paragraph
- [ ] Build 3 value prop cards:
  - [ ] Institutional Grade Governance (🛡️ icon)
  - [ ] The Compliance-First Standard (⚖️ icon)
  - [ ] Continuity & Reliability (🔄 icon)
- [ ] Add descriptive text for each value prop
- [ ] Style cards with proper spacing and borders

### 3.5 Service Pillars Section
- [ ] Create section header: "Our Core Practice Areas"
- [ ] Build 4 service cards:
  - [ ] Personal Income Tax & TCC
  - [ ] SME & Corporate Tax Support
  - [ ] Historical Remediation (Back-Taxes)
  - [ ] Strategic Advisory
- [ ] Add numbered labels (01, 02, 03, 04)
- [ ] Add descriptive content for each service
- [ ] Implement card hover effects

### 3.6 "How It Works" Section
- [ ] Create section header: "Your Path to Clearance"
- [ ] Build 4-step process visualization:
  - [ ] Step 1: Briefing (Contact via WhatsApp/Email)
  - [ ] Step 2: Assessment (Review income sources and tax history)
  - [ ] Step 3: Agreement (Clear fee structure)
  - [ ] Step 4: Execution (File, process, deliver)
- [ ] Add icons or visual indicators for each step
- [ ] Create timeline or flow visualization

### 3.7 Footer / Contact Block
- [ ] Create footer component
- [ ] Add tagline: "Get your finances on the right side of the law."
- [ ] Add contact information:
  - [ ] WhatsApp: +234 706 686 8867 (with clickable link)
  - [ ] Email: trustlineservicesng@gmail.com
  - [ ] Location: Lagos, Nigeria
- [ ] Add copyright notice: "© 2026 Trustline Professional Services Ltd. All Rights Reserved."
- [ ] Add "Certified Compliance" seal design (Navy Blue wax seal style)
- [ ] Add trust signals (SSL padlock, FIRS/CITN logos if applicable)

---

## 4. Content Management System

### 4.1 Sanity.io Setup
- [ ] Create Sanity.io account and project
- [ ] Install Sanity CLI and initialize schema
- [ ] Define content schemas:
  - [ ] Landing page content schema
  - [ ] Service descriptions schema
  - [ ] Client profiles schema
  - [ ] Value propositions schema
- [ ] Set up Sanity Studio for content editing

### 4.2 Next.js CMS Integration
- [ ] Install @sanity/client and @sanity/image-url
- [ ] Create Sanity client configuration
- [ ] Set up API routes for fetching content
- [ ] Create React hooks for content fetching
- [ ] Implement Server Components for content rendering

### 4.3 Content Migration
- [ ] Populate Sanity with all PRD content
- [ ] Upload images and assets to Sanity
- [ ] Set up content preview functionality
- [ ] Test content updates without code changes

---

## 5. Communication & Conversion Features

### 5.1 WhatsApp Integration
- [ ] Research and select WhatsApp Business API provider (WATI or Twilio)
- [ ] Set up WhatsApp Business API account
- [ ] Create automated chatbot workflow:
  - [ ] Welcome message
  - [ ] Name collection
  - [ ] Employment type selection
  - [ ] Handoff to human agent
- [ ] Implement WhatsApp button component (Action Cyan)
- [ ] Add click-to-chat functionality with pre-filled message
- [ ] Create mobile sticky WhatsApp icon

### 5.2 Email Integration
- [ ] Set up email service (SendGrid, Resend, or similar)
- [ ] Create contact form component using React Hook Form
- [ ] Implement form validation
- [ ] Create email template for "formal assessment" requests
- [ ] Set up form submission API route
- [ ] Add success/error messaging

### 5.3 Form Handling
- [ ] Install and configure React Hook Form
- [ ] Create reusable form components
- [ ] Implement form validation rules
- [ ] Add loading states and error handling
- [ ] Create form submission handlers

---

## 6. UI/UX Enhancements

### 6.1 Animations
- [ ] Install and configure Framer Motion
- [ ] Add fade-up animations to hero section
- [ ] Add scroll-triggered animations for sections
- [ ] Implement smooth page transitions
- [ ] Add hover animations to cards and buttons
- [ ] Create loading animations

### 6.2 Responsive Design
- [ ] Test and optimize for mobile devices
- [ ] Test and optimize for tablets
- [ ] Test and optimize for desktop
- [ ] Implement mobile-first breakpoints
- [ ] Optimize touch targets for mobile
- [ ] Test on various screen sizes (320px to 4K)

### 6.3 Accessibility
- [ ] Add proper ARIA labels
- [ ] Ensure keyboard navigation works
- [ ] Test with screen readers
- [ ] Verify color contrast ratios (WCAG AA)
- [ ] Add focus indicators
- [ ] Implement skip navigation links

### 6.4 Performance Optimization
- [ ] Optimize images (WebP format, lazy loading)
- [ ] Implement code splitting
- [ ] Add loading states for async content
- [ ] Optimize font loading
- [ ] Minimize bundle size
- [ ] Implement caching strategies

---

## 7. Security & Trust Signals

### 7.1 SSL & Security
- [ ] Ensure SSL certificate is active (padlock icon)
- [ ] Implement HTTPS redirect
- [ ] Add security headers
- [ ] Set up Content Security Policy (CSP)
- [ ] Implement data privacy protocols

### 7.2 Trust Badges
- [ ] Design and add "Certified Compliance" seal
- [ ] Add FIRS (Federal Inland Revenue Service) logo (if applicable)
- [ ] Add CITN (Chartered Institute of Taxation of Nigeria) logo (if applicable)
- [ ] Add SSL certificate indicator
- [ ] Create trust signals section

### 7.3 Data Privacy
- [ ] Create privacy policy page
- [ ] Add GDPR-compliant cookie consent (if needed)
- [ ] Implement secure form data handling
- [ ] Add data encryption for sensitive information

---

## 8. Analytics & Monitoring

### 8.1 Analytics Setup
- [ ] Set up Plausible Analytics account
- [ ] Install Plausible Analytics script
- [ ] Configure event tracking:
  - [ ] WhatsApp button clicks
  - [ ] Email form submissions
  - [ ] Section scroll depth
  - [ ] CTA button clicks
- [ ] Set up conversion goals

### 8.2 Performance Monitoring
- [ ] Set up Vercel Analytics
- [ ] Monitor Core Web Vitals
- [ ] Track page load times
- [ ] Monitor error rates
- [ ] Set up error tracking (Sentry or similar)

---

## 9. Deployment & Infrastructure

### 9.1 Vercel Setup
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Set up environment variables in Vercel
- [ ] Configure custom domain (if applicable)
- [ ] Set up production and preview deployments

### 9.2 Cloudflare Integration
- [ ] Set up Cloudflare account
- [ ] Configure DNS settings
- [ ] Enable DDoS protection
- [ ] Configure CDN settings
- [ ] Set up caching rules
- [ ] Enable security features

### 9.3 Pre-Launch Checklist
- [ ] Test all links and buttons
- [ ] Verify all content is accurate
- [ ] Test WhatsApp integration end-to-end
- [ ] Test email form submissions
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Performance audit (Lighthouse)
- [ ] SEO optimization (meta tags, Open Graph, etc.)
- [ ] Create 404 error page
- [ ] Set up error logging

---

## 10. Post-Launch Tasks

### 10.1 SEO Optimization
- [ ] Add meta descriptions for all pages
- [ ] Implement Open Graph tags
- [ ] Add Twitter Card meta tags
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Submit to Google Search Console
- [ ] Optimize for local SEO (Lagos, Nigeria)

### 10.2 Content Updates
- [ ] Set up content update workflow
- [ ] Train team on Sanity CMS usage
- [ ] Create content guidelines document
- [ ] Schedule regular content reviews

### 10.3 Maintenance
- [ ] Set up automated backups
- [ ] Schedule regular security updates
- [ ] Monitor analytics weekly
- [ ] Review and optimize conversion rates
- [ ] Collect user feedback
- [ ] Plan feature enhancements

---

## 11. Documentation

### 11.1 Technical Documentation
- [ ] Document project structure
- [ ] Create component documentation
- [ ] Document API integrations
- [ ] Create deployment guide
- [ ] Document environment variables

### 11.2 User Documentation
- [ ] Create CMS user guide
- [ ] Document content update process
- [ ] Create troubleshooting guide

---

## Notes
- All design elements should follow the "Bento Grid" layout style
- Maintain 20% more whitespace than standard websites
- Use thin, light grey-blue borders (#D1D9E6) for grid elements
- Ensure all animations are smooth and professional
- Mobile-first approach is critical for Nigerian market
- Focus on trust-building and conversion optimization

