# AMSOFIT Elevate

Create a premium, modern, fully responsive, multi-page fitness equipment e-commerce and product showcase website for “AMSOFIT Fitness Equipment” using Next.js + React.js.

The website should feel like a high-end international fitness equipment brand such as Life Fitness, Technogym, Cult Fitness, Hammer Strength, Matrix Fitness, or Rogue Fitness, but it must have its own distinct AMSOFIT identity.

Do NOT create a generic e-commerce template.

The design should feel:

Premium

Powerful

Athletic

Modern

Industrial

High-end

Clean

Conversion-focused

1. TECHNOLOGY STACK

Build the project using:

Next.js latest stable version

React

TypeScript

Tailwind CSS

Framer Motion for animations

Lucide React or another premium icon library

Next/Image for optimized images

Responsive mobile-first architecture

Reusable React components

Clean folder structure

SEO-friendly routing

Server Components wherever practical

Client Components only where interaction/animation requires them

The code must be clean, maintainable, production-ready and component-based.

Do not put the entire website into a single component.

2. BRAND

Brand Name:

AMSOFIT Fitness Equipment

Use the provided AMSOFIT logo from the supplied assets.

The logo contains a stylized AF mark with purple/blue tones and the text:

AMSOFIT
FITNESS EQUIPMENT

Do not redesign the logo.

Make sure the logo has enough breathing space and looks premium in the header and footer.

3. BRAND COLOR PALETTE

The main website theme should be based primarily on:

Deep Black: #050505

Rich Black: #0B0B0D

Dark Charcoal: #121216

Dark Blue: #08162C

Electric Blue: #176BFF

Royal Blue: #275BFF

Purple/Blue accent inspired by the AMSOFIT logo

White: #FFFFFF

Soft Gray: #B8BCC5

Use subtle gradients such as:

linear-gradient(135deg, #176BFF, #6536FF)

but DO NOT overuse gradients.

The overall visual identity should remain predominantly:

BLACK + DARK BLUE + ELECTRIC BLUE + WHITE

Use blue/purple accents for:

CTA buttons

Hover effects

Icons

Highlights

Active navigation

Product specification icons

Section dividers

Animated lines

Glows

Avoid making the website excessively purple.

4. TYPOGRAPHY

Use a bold modern font combination suitable for fitness/industrial branding.

Suggested fonts:

Inter

Manrope

Montserrat

Space Grotesk

Headings should be strong and bold.

Use large typography strategically.

Examples:

ENGINEERED FOR PERFORMANCE

BUILD STRONGER. TRAIN SMARTER.

COMMERCIAL FITNESS. REDEFINED.

Do not overload the interface with excessive text.

5. WEBSITE OBJECTIVE

The website must allow AMSOFIT to:

Showcase its fitness equipment.

Sell products online.

Generate enquiries for commercial gym equipment.

Display technical product specifications.

Allow visitors to download product brochures/catalogues.

Allow customers to browse equipment by category.

Promote AMSOFIT's commercial gym solutions.

Generate leads for complete gym setups.

Showcase the AMSOFIT brand, infrastructure and capabilities.

Later integrate payment gateway, CRM, inventory and backend APIs.

Design the architecture so these future integrations are easy.

6. REQUIRED PAGES

Create the following multi-page structure:

Home

/

Products

/products

Product Category

/products/[category]

Examples:

/products/treadmills

/products/cycling

/products/ellipticals

/products/strength

/products/multi-station

/products/free-weights

/products/home-gym

/products/commercial-cardio

Product Detail

/products/[category]/[slug]

Product Series

/series

Individual Series

Examples:

/series/timberline

/series/california

/series/commercial-cardio

About Us

/about

Commercial Gym Solutions

/gym-solutions

Catalogues / Brochures

/catalogues

Contact Us

/contact

Cart

/cart

Wishlist

/wishlist

Search Results

/search

Optionally create:

Request a Quote

/request-quote

7. HEADER

Create a sophisticated sticky header.

Desktop header:

LEFT:
AMSOFIT logo

CENTER:
Navigation

Home

Products

Cardio

Strength

Series

Gym Solutions

About

Catalogues

Contact

RIGHT:

Search icon

Wishlist

Account

Cart

"Get a Quote" CTA

Use a transparent header over the hero section.

When the user scrolls, transition smoothly into a dark solid/glass header.

Use backdrop blur.

Example:

backdrop-blur-xl

Include a large mega menu under Products.

Mega menu categories:

Cardio

Treadmills

Walking Pads

Ellipticals

Upright Bikes

Recumbent Bikes

Spin Bikes

Air Bikes

Strength

Chest

Back

Shoulder

Arms

Legs

Multi-Press

Functional Trainers

Commercial

Commercial Cardio

Commercial Strength

Gym Packages

Include category images inside the mega menu.

8. HOME PAGE

The homepage needs to look extremely premium.

HERO SECTION

Create a large full viewport hero.

Use one of the supplied AMSOFIT fitness images.

Use a cinematic dark overlay.

Suggested copy:

ENGINEERED FOR PERFORMANCE.

Premium Fitness Equipment
Built For Serious Training.

Supporting copy:

"From professional gyms to premium home fitness spaces, AMSOFIT delivers equipment engineered for performance, durability and design."

Buttons:

Explore Equipment

Build Your Gym

Add a small link:

Download Product Catalogue ↓

Use cinematic animations:

text reveal

slow background zoom

staggered headline animation

subtle gradient glow

animated scroll indicator

Hero should occupy approximately:

90vh – 100vh

9. CATEGORY SHOWCASE

Immediately after hero, show:

SHOP BY CATEGORY

Create large premium cards for:

Treadmills

Strength Equipment

Exercise Bikes

Ellipticals

Functional Trainers

Multi Stations

Free Weights

Home Gym

Cards should contain:

High-quality equipment image

Category name

Short description

Explore arrow

Hover animation:

Image zoom

Dark overlay transition

Arrow movement

Border/glow animation

Use an asymmetric editorial-style grid instead of identical boring cards.

10. FEATURED PRODUCTS

Create:

FEATURED EQUIPMENT

Use the actual AMSOFIT catalogue as the source for sample product content.

Sample products can include equipment such as:

JF5000i Commercial Treadmill

Example specifications:

Commercial treadmill

AC drive system

Approx. 5 HP AC continuous / 10 HP peak motor

Speed up to approximately 20 km/h

Motorized incline

Large running surface

Heavy-duty commercial construction

Maximum user weight around 180 kg

JF5000 Commercial Treadmill

JF3000 Commercial Treadmill

JF2300 Commercial Treadmill

JF2200 Commercial Treadmill

CT1000 Curve Treadmill

F500 Commercial Elliptical Trainer

E300 Commercial Elliptical Trainer

R300 Commercial Recumbent Bike

U300 Commercial Upright Bike

Also use products from the AMSOFIT Timberline strength series such as:

TL-9001 Vertical Press

TL-9002 Lat Pull Down

TL-9003 Bicep Curl

TL-9005 Leg Extension

TL-9006 Seated Leg Curl

TL-9008 Abductor / Adductor

TL-9012 Shoulder Press

TL-9015 Pec Fly / Rear Delt

TL-9020 Dip / Chin Assist

TL-9021 Prone Leg Curl

TL-9022 Lat Pull / Seated Row

TL-9028 Leg Extension / Leg Curl

TL-9029 Multi Press

TL-9033 Bicep / Tricep

TL-9036 Long Pull

Use these products as sample listings.

Do not invent technical specifications when they are not available in the supplied brochures.

11. PRODUCT CARDS

Product cards should have a premium layout similar to high-quality fitness e-commerce websites.

Each card should display:

Product image

AMSOFIT badge

Product name

Model number

Category

Short specs

Price/MRP where available

"Request Price" where price is unavailable

Actions:

♡ Wishlist

👁 Quick View

View Details

Add to Cart

or

Request Quote

depending on the type of equipment.

Commercial gym equipment should prominently support:

REQUEST QUOTE

because large commercial machines are often enquiry-based purchases.

Hover effects:

image scale

shadow

blue glow

animated button

quick-action buttons slide in

12. PRODUCT LISTING PAGE

Create a product listing page inspired by premium fitness stores.

Left sidebar filters:

Category

Product Type

Series

Usage

Home

Semi Commercial

Commercial

Price

Availability

Muscle Group

Chest

Back

Shoulder

Biceps

Triceps

Legs

Core

Equipment Type

Sorting options:

Featured

Newest

Price Low to High

Price High to Low

Popular

Commercial Equipment

Top of page:

Breadcrumb

Home / Products / Treadmills

Heading:

Commercial Treadmills

Short category introduction.

Include:

Grid View / List View controls.

Desktop:
3–4 products per row.

Tablet:
2–3.

Mobile:
1–2.

13. PRODUCT DETAIL PAGE

This is one of the most important pages.

Create a premium product detail layout.

LEFT:

Large product gallery

Main product image

Thumbnail gallery

Fullscreen preview

Zoom

Smooth image transitions

RIGHT:

Product name

Model

Series

Rating placeholder

Price / Request Price

Short description

Key specifications represented as premium badges.

Example:

⚡ Motor
8 HP Peak

🏃 Speed
0–20 KM/H

📐 Running Area
XXXX

📈 Incline
0–20%

🏋 Maximum User Weight
200 KG

Buttons:

ADD TO CART

REQUEST A QUOTE

WHATSAPP ENQUIRY

♡ Add to Wishlist

14. PRODUCT DETAIL TABS

Below the product information create tabs:

Overview

Specifications

Features

Dimensions

Shipping & Installation

Brochure

Warranty

Use animated tab transitions.

15. DOWNLOAD BROCHURE FEATURE

This feature is REQUIRED.

Every applicable product/series should show:

📄 Download Brochure

When clicked:

Download the relevant PDF brochure supplied with the project.

Create a dedicated:

CATALOGUES & BROCHURES

page.

Show catalogue cards.

Example:

AMSOFIT Product Catalogue

Description:
Complete commercial cardio, strength and fitness equipment range.

Button:
DOWNLOAD PDF

Timberline Series

Description:
Premium selectorized strength equipment collection.

Button:
DOWNLOAD PDF

California Series

Button:
DOWNLOAD PDF

Each catalogue card should have:

brochure cover image

brochure name

series/category

number of products if available

View Catalogue

Download PDF

Provide both:

👁 VIEW

and

↓ DOWNLOAD

actions.

PDF should optionally open inside a new browser tab.

16. TIMBERLINE SERIES PAGE

Create a premium landing page for:

TIMBERLINE

Use the actual Timberline equipment from the supplied PDF.

Hero text:

TIMBERLINE

Strength Meets Precision.

Show premium selectorized machines.

Build an alternating product layout:

Image left / text right

then

Text left / image right

Include:

model

machine name

machine dimensions

weight stack

target muscle group

View Details

Download Brochure

Use subtle brown/bronze elements from the Timberline catalogue but maintain AMSOFIT's black/blue website identity.

17. COMMERCIAL GYM SOLUTIONS

Create a major page:

BUILD YOUR GYM WITH AMSOFIT

Target:

Commercial gyms

Hotels

Resorts

Educational institutions

Corporate gyms

Apartments

Government institutions

Fitness studios

Home gyms

Sections:

Gym Planning & Consultancy

Custom Gym Layout Design

Complete Equipment Supply

Installation

Maintenance & Support

Commercial Equipment Packages

Include a CTA:

PLAN MY GYM

Form:

Name

Phone

Email

City

Gym type

Area in sq. ft.

Approximate budget

Equipment requirements

Message

CTA:

Request Free Consultation

18. WHY AMSOFIT

Create a visually strong section:

WHY AMSOFIT?

Feature cards:

Premium Manufacturing

High-quality fitness equipment built for demanding environments.

Commercial Grade

Equipment engineered for heavy-duty gym usage.

Pan-India Solutions

Fitness equipment solutions for customers throughout India.

Complete Gym Setup

Planning, equipment selection, installation and support.

Quality Focused

Strong sourcing and manufacturing standards.

After-Sales Support

Professional maintenance and customer assistance.

Animate the statistics as they scroll into view.

19. ABOUT AMSOFIT

Create a premium About page.

Use this company positioning:

AMSOFIT is a Himachal Pradesh-based fitness equipment company established in 2022 with a pan-India presence.

The company manufactures high-quality products through its own facilities while also offering carefully selected imported products.

Its focus is quality, innovation, value and building long-term customer relationships.

Create sections:

Our Story

Our Mission

Our Infrastructure

Our Manufacturing

Quality & Innovation

Pan-India Presence

Our Clients

Why Choose AMSOFIT

Use the images from the supplied company catalogue wherever suitable.

20. INFRASTRUCTURE SECTION

Create a modern grid showing AMSOFIT's infrastructure.

Possible categories include:

Power Press

MIG Welding

Warehouse

Upholstery

Milling & Drilling

Fitting

Injection Moulding

Powder Coating

Repair Facility

Pipe Cutting & Bending

Loading Facility

Showroom

Use icons/images and premium animated cards.

21. FRANCHISE / BUSINESS SECTION

Where appropriate create:

PARTNER WITH AMSOFIT

Promote commercial partnerships and gym solutions.

Use strong imagery.

Possible CTA:

Explore Business Opportunities

Do not make unsupported promises.

22. ANIMATIONS

Animations should be sophisticated and subtle.

Use Framer Motion.

Required animation patterns:

Page transitions

Fade-up on scroll

Staggered card entrances

Text reveal

Product image scale on hover

Button micro-interactions

Animated arrows

Sticky sections

Parallax backgrounds

Number counters

Smooth accordion

Mega-menu transition

Product image transitions

Magnetic/interactive CTA hover where appropriate

IMPORTANT:

Do not over-animate.

Animations should make the website look more expensive, not distracting.

Target smooth 60 FPS performance.

Respect:

prefers-reduced-motion

for accessibility.

23. HOMEPAGE SECTIONS ORDER

Build the homepage approximately like this:

Announcement Bar

Header

Fullscreen Hero

Shop by Category

Featured Equipment

Commercial Fitness Section

Timberline Series Feature

Interactive "Build Your Gym" section

Why AMSOFIT

Best Sellers

Equipment By Muscle Group

Infrastructure / Manufacturing

Commercial Clients / Trust Section

Catalogue Download CTA

Testimonials

FAQ

Newsletter

Footer

24. EQUIPMENT BY MUSCLE GROUP

Create an interactive section:

TRAIN BY MUSCLE GROUP

Options:

Chest

Back

Shoulders

Arms

Legs

Glutes

Core

Full Body

On hover/click show equipment designed for that muscle group.

This can have an athletic body silhouette or premium graphic presentation.

25. SEARCH

Create a fast global equipment search.

Clicking the search icon should open a fullscreen search overlay.

Placeholder:

Search equipment, models or categories...

Examples:

JF5000

Treadmill

Leg Extension

Timberline

Shoulder Press

Show instant suggestions.

26. QUICK VIEW

Clicking the eye icon on a product should open an animated modal containing:

Product image

Product name

Model

Price

Key specifications

View Details

Add to Cart / Request Quote

27. SHOPPING CART

Create a modern side-drawer cart.

Show:

product thumbnail

title

model

price

quantity

remove option

subtotal

Buttons:

VIEW CART

CHECKOUT

For products without online pricing:

REQUEST QUOTE

instead of standard checkout.

28. WHATSAPP

Add a floating WhatsApp enquiry button.

When opened provide choices:

Product Enquiry

Commercial Gym Setup

Service & Support

Product pages should automatically include the product name/model in the WhatsApp message.

29. CONTACT PAGE

Create a premium contact page.

Sections:

Talk To Our Fitness Experts

Sales Enquiry

Commercial Gym Setup

Service & Support

Add:

Contact form

Phone

WhatsApp

Email

Business hours

Showroom location

Embedded map placeholder

Use AMSOFIT's showroom/factory details supplied in the catalogue where applicable.

Do not invent addresses or telephone numbers.

30. FOOTER

Large premium dark footer.

Columns:

Products

Treadmills

Bikes

Ellipticals

Strength

Functional Trainers

Commercial Equipment

Company

About

Infrastructure

Clients

Careers

Contact

Support

Service

Warranty

Installation

FAQ

Shipping

Resources

Catalogues

Brochures

Gym Planning

Product Guides

Include:

AMSOFIT logo

Short brand description

Social icons:

Instagram

Facebook

YouTube

LinkedIn

Newsletter:

GET THE LATEST FROM AMSOFIT

Footer bottom:

Copyright

Privacy Policy

Terms & Conditions

Shipping Policy

Return Policy

31. MOBILE EXPERIENCE

The mobile design must be carefully designed, not simply a compressed desktop version.

Mobile requirements:

Hamburger navigation

Bottom or compact shopping actions

Swipeable product carousels

Large touch areas

Sticky Add to Cart / Request Quote on product pages

Optimized images

Fast loading

Collapsible product specifications

Mobile-friendly filters

32. RESPONSIVE BREAKPOINTS

Design specifically for:

360px

390px

430px

768px

1024px

1280px

1440px

1920px

Avoid horizontal scrolling.

33. SEO

Implement:

SEO metadata

Dynamic product metadata

OpenGraph

Twitter metadata

Product schema

Organization schema

Breadcrumb schema

FAQ schema

Semantic HTML

Canonical URLs

Sitemap architecture

Example title:

Commercial Gym Equipment in India | AMSOFIT Fitness Equipment

34. PERFORMANCE

Target:

Lighthouse Performance > 90

Accessibility > 90

Best Practices > 90

SEO > 90

Implement:

Lazy loading

Optimized Next/Image

Font optimization

Code splitting

Dynamic loading where useful

Skeleton loaders

Minimal layout shift

35. ACCESSIBILITY

Implement:

Semantic HTML

Keyboard navigation

Proper ARIA labels

Visible focus states

Descriptive image alt text

Accessible modals

Accessible dropdowns

Good color contrast

36. PRODUCT DATA ARCHITECTURE

For the demo, create structured reusable product data.

Example:

interface Product {
  id: string;
  name: string;
  slug: string;
  model: string;
  category: string;
  series?: string;
  shortDescription: string;
  description: string;
  images: string[];
  price?: number;
  mrp?: number;
  featured?: boolean;
  commercial?: boolean;
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  brochure?: string;
}


Keep product data separate from UI components.

Later this can be replaced by:

REST API

Laravel API

Headless CMS

Database

Shopify API

WooCommerce API

without redesigning the frontend.

37. IMPORTANT PRODUCT DATA RULE

Use the supplied AMSOFIT PDFs/catalogues as the primary source for:

Product names

Model numbers

Product images

Technical specifications

Product categories

Prices

Dimensions

Weight stacks

Maximum user weight

Motor specifications

Product series

Brochures

DO NOT invent technical specifications.

If information is missing, either omit that field or display:

Contact for Details

38. IMAGE TREATMENT

Use product images from the supplied catalogues wherever possible.

For product listing cards:

Remove unnecessary catalogue-page backgrounds if practical.

Show product on a clean premium neutral/dark environment.

Preserve product proportions.

Do not distort equipment images.

Use image containers with:

subtle lighting

subtle gradients

soft shadow

premium studio feel

39. VISUAL DIRECTION

Use inspiration from premium fitness brands but DO NOT directly clone any website.

The interface should combine:

Cult Store's strong product discovery

Technogym's premium presentation

Rogue's equipment-focused design

Apple's clean product storytelling

Modern automotive-style dark presentation

But maintain AMSOFIT's own brand identity.

40. DESIGN DETAILS

Use:

Large section spacing

Strong visual hierarchy

Thin borders

Rounded corners between 8–18px

Dark glassmorphism selectively

Subtle blue shadows

Large product photography

Clean specification badges

Premium hover states

Smooth scrolling

Avoid:

excessive gradients

cartoon styling

neon overload

excessive rounded cards

generic Bootstrap appearance

cheap-looking sliders

excessive drop shadows

giant paragraphs

unnecessary animations

41. SAMPLE HERO COPY

Use something similar to:

BUILT FOR THOSE
WHO DON'T SETTLE.

Commercial-grade fitness equipment engineered for performance, durability and serious training.

[ EXPLORE EQUIPMENT ]

[ BUILD YOUR GYM ]

42. SECONDARY HERO COPY OPTION

PERFORMANCE
WITHOUT COMPROMISE.

From professional fitness centres to premium home gyms, discover AMSOFIT equipment engineered to perform.

43. CATALOGUE CTA

Create a cinematic section near the bottom:

EXPLORE THE COMPLETE AMSOFIT RANGE

"Discover cardio, strength and professional fitness equipment engineered for every training environment."

Buttons:

VIEW CATALOGUES

DOWNLOAD BROCHURE ↓

Use a product montage in the background.

44. ADMIN/API READINESS

Although this task is mainly frontend, organize the project so it can later connect with a backend.

Create service abstractions such as:

/services/products.ts
/services/categories.ts
/services/catalogues.ts
/services/enquiries.ts
/services/cart.ts


Do not hardwire business logic directly inside presentation components.

45. COMPONENT STRUCTURE

Create reusable components such as:

Header
MegaMenu
MobileMenu
Hero
SectionHeading
CategoryCard
ProductCard
ProductGrid
ProductFilters
ProductGallery
SpecificationBadge
SpecificationTable
QuickViewModal
SeriesCard
BrochureCard
CatalogueDownload
QuoteForm
GymPlanningCTA
Testimonials
FAQ
Newsletter
WhatsAppButton
Footer
PageTransition
AnimatedSection


46. DEMO CONTENT

Populate enough real sample equipment from the supplied AMSOFIT catalogues so that the website feels like an actual functioning business.

Do not create only 3 placeholder products.

Create at least:

8–12 cardio products

10–15 strength products

Multiple Timberline products

Multiple categories

3 catalogue/brochure entries

This is sample frontend data and should be easy to replace with API data later.

47. FINAL EXPECTATION

The final website should NOT look like a template generated in five minutes.

It should feel as if AMSOFIT invested in a professional digital agency to reposition itself as a serious national fitness equipment brand.

The experience should communicate:

Performance

Strength

Engineering

Reliability

Premium Fitness

Commercial Capability

The final design should be visually impressive enough to present directly to the AMSOFIT client as a professional website concept.

Start by:

Setting up the design system.

Creating the responsive header/navigation.

Creating the homepage.

Creating reusable product architecture.

Building product listing/category pages.

Building product detail pages.

Creating catalogue/brochure functionality.

Building Timberline/series pages.

Building About and Gym Solutions pages.

Adding animations and responsive polish.

Verifying mobile responsiveness.

Verifying all routes and interactions.

Do not stop after only creating the homepage.

Generate the complete multi-page website experience.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/43166a4b-90ee-48c9-8d90-72de3a641eaf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
