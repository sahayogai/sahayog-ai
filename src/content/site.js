export const siteConfig = {
  url: "https://www.sahyogai.in",
  name: "SahyogAI",
  tagline: "AI-First Business Transformation & Technology Enablement",
  description:
    "SahyogAI helps SMEs and local businesses embrace AI, automation, and modern technology to streamline operations, improve customer experiences, and accelerate growth.",
  ogImage: "https://www.sahyogai.in/assets/og-image.png",
}

export const nav = {
  brand: "SahyogAI",
  badge: "AI-First",
  links: [
    { label: "Services",     href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Industries",   href: "#industries" },
  ],
  cta: { label: "Book a Call", href: "#booking" },
}

export const hero = {
  badge: "AI · Automation · Growth",
  heading: ["Helping SMEs & Local Businesses Grow with", "AI-First Technology"],
  subheading:
    "SahyogAI partners with businesses to adopt AI, automate operations, modernise technology, and unlock sustainable growth through practical digital transformation.",
  cta:       { label: "Book Free Consultation", href: "#booking" },
  ctaSecond: { label: "See How It Works", href: "#how-it-works" },
  trust: [
    "No commitment required",
    "Free 45-min strategy session",
    "Results in 30 days",
  ],
  stats: [
    { value: "10+",  label: "SMEs Transformed" },
    { value: "3×",   label: "Average Efficiency Gain" },
    { value: "30d",  label: "To First Results" },
  ],
}

export const trustBar = {
  label: "Trusted by growing businesses across",
  logos: [
    { name: "Mehta",        style: "font-bold tracking-tight uppercase" },
    { name: "Sharma Co.",   style: "font-light tracking-widest" },
    { name: "QuickServe",   style: "font-extrabold tracking-tight" },
    { name: "AxisRetail",   style: "font-bold tracking-tight" },
    { name: "Fielddrop",    style: "font-medium italic" },
    { name: "CareLab",      style: "font-semibold tracking-wide" },
  ],
}

export const services = {
  heading: "Everything Your Business Needs to Thrive in the Age of AI",
  subheading: "Four interconnected practices that work together to transform how your business operates.",
  items: [
    {
      number: "01",
      title: "AI Enablement",
      description: "AI strategy, agents, voice AI, WhatsApp AI, and knowledge assistants built around your actual workflows.",
      pills: ["AI Agents", "Voice AI", "WhatsApp AI", "Knowledge Base", "AI Workflows"],
      cta: "Explore →",
    },
    {
      number: "02",
      title: "Technology Enablement",
      description: "SaaS platforms, business applications, cloud infrastructure, and system integrations that scale with you.",
      pills: ["SaaS", "Custom Apps", "Cloud", "Integrations", "Internal Tools"],
      cta: "Explore →",
    },
    {
      number: "03",
      title: "Automation",
      description: "End-to-end workflow, CRM, sales, operations, and marketing automation that eliminates manual work.",
      pills: ["Workflow", "CRM", "Sales", "Marketing", "Operations"],
      cta: "Explore →",
    },
    {
      number: "04",
      title: "Digital Transformation",
      description: "Process modernisation, customer experience systems, dashboards, and data analytics for decision-ready businesses.",
      pills: ["Process Design", "CX Systems", "Dashboards", "Analytics"],
      cta: "Explore →",
    },
  ],
}

export const uvp = {
  eyebrow: "WHY SAHYOGAI",
  heading: ["Most agencies start with", "technology.", "We start with", "your business."],
  body: "We first study your operations, identify where AI and technology can create the most value, design a solution that fits how you actually work, and then build it — so every tool we deploy has a clear business outcome behind it.",
  cta: { label: "Book a Strategy Session →", href: "#booking" },
  comparison: {
    left: {
      label: "Technology First",
      items: [
        "Pick a tool, then find use cases",
        "Implement without understanding operations",
        "Generic solution, misaligned outcomes",
        "Post-deployment hand-off",
        "You figure out adoption",
      ],
    },
    right: {
      label: "Business First",
      items: [
        "Understand your business first",
        "Identify real opportunities",
        "Design fit-for-purpose solutions",
        "Partner through the journey",
        "Measure real business outcomes",
      ],
    },
  },
}

export const howItWorks = {
  eyebrow: "OUR PROCESS",
  heading: "A Framework Built for Real Business Transformation",
  subheading: "Four phases. One continuous improvement loop. Zero tech-for-tech's-sake.",
  steps: [
    {
      number: "01",
      title: "Understand",
      body: "We study your business processes, goals, bottlenecks, and opportunities from the ground up.",
    },
    {
      number: "02",
      title: "Identify",
      body: "Pinpoint the highest-impact areas where AI and automation will create measurable value.",
    },
    {
      number: "03",
      title: "Transform",
      body: "Implement AI, workflows, and technology solutions built specifically for your context.",
    },
    {
      number: "04",
      title: "Scale",
      body: "Measure outcomes, expand capabilities, and continuously improve as your business grows.",
    },
  ],
  badge: "Typical time to first results: 30 days",
}

export const aiServices = {
  heading: "AI That Actually Works for Your Business",
  subheading: "Not generic AI. Purpose-built agents, voice systems, and knowledge tools designed around how your business operates.",
  items: [
    {
      title: "AI Strategy & Roadmapping",
      body: "Get a clear, prioritised AI adoption plan built around your business goals — not hype.",
      tag: "Foundation",
    },
    {
      title: "Autonomous AI Agents",
      body: "Agents that handle tasks, respond to triggers, and complete workflows without human intervention.",
      tag: "Core",
      badge: "Most Popular",
    },
    {
      title: "Voice AI Systems",
      body: "Intelligent voice agents for customer support, sales calls, and business communication — available 24/7.",
      tag: "Customer-Facing",
    },
    {
      title: "WhatsApp AI",
      body: "Automate customer conversations, lead qualification, and order handling directly in WhatsApp.",
      tag: "Messaging",
    },
    {
      title: "Knowledge Assistants",
      body: "Internal AI tools that answer questions, find documents, and surface business insights instantly.",
      tag: "Internal",
    },
    {
      title: "AI Workflows",
      body: "Multi-step automated workflows orchestrated by AI — from data processing to client onboarding.",
      tag: "Automation",
    },
  ],
}

export const metrics = [
  { value: "3×",    label: "Efficiency Improvement" },
  { value: "60%",   label: "Reduction in Manual Work" },
  { value: "30 days", label: "Time to First Results" },
  { value: "10+",   label: "Businesses Transformed" },
]

export const testimonials = [
  {
    stars: 5,
    quote: "SahyogAI didn't just give us software — they understood our business first and then built something that actually solved our problem.",
    name: "Rajesh Mehta",
    company: "Mehta Electronics",
    initials: "RM",
  },
  {
    stars: 5,
    quote: "Our WhatsApp AI handles 70% of customer queries now. Our team can focus on what actually needs a human.",
    name: "Priya Sharma",
    company: "Sharma Catering Co.",
    initials: "PS",
  },
  {
    stars: 5,
    quote: "In 30 days we had a fully automated sales pipeline. The ROI was visible within the first week.",
    name: "Amit Joshi",
    company: "QuickServe Logistics",
    initials: "AJ",
  },
]

export const industriesData = {
  heading: "Built for Businesses Like Yours",
  subheadingDefault: "Select your industry to see exactly how SahyogAI works for you.",
  cta: { label: "Talk to us", href: "#booking" },
  industries: [
    {
      id: "retail",
      label: "Retail",
      gradientFrom: "#ede9fe",
      gradientTo: "#8b5cf6",
      allTitle: "Smart Inventory & Sales AI",
      allOutcome: "↑ 40% lead conversion",
      allImage: "/assets/industries/retail_inventory_ai.png",
      cards: [
        {
          title: "Smart Inventory & Sales AI",
          aiLabel: "AI Agent + WhatsApp AI",
          stat: "40%", statLabel: "reduction in stockouts",
          image: "/assets/industries/retail_inventory_ai.png",
          bullets: [
            "AI monitors stock levels and auto-raises purchase orders",
            "WhatsApp bot handles customer enquiries and order status 24/7",
            "Sales trend reports generated automatically every morning",
          ],
        },
        {
          title: "WhatsApp Sales Bot",
          aiLabel: "WhatsApp AI + AI Workflows",
          stat: "3×", statLabel: "more leads converted via WhatsApp",
          image: "/assets/industries/retail_whatsapp_bot.png",
          bullets: [
            "Responds to product enquiries instantly, any time of day",
            "Sends personalised offers and follow-ups automatically",
            "Captures lead details and pushes to CRM without manual entry",
          ],
        },
        {
          title: "Customer Loyalty AI",
          aiLabel: "AI Agent + Workflow Automation",
          stat: "60%", statLabel: "increase in repeat purchases",
          image: "/assets/industries/retail_loyalty_ai.png",
          bullets: [
            "AI identifies at-risk customers and triggers win-back campaigns",
            "Automated birthday and milestone messages with personalised offers",
            "Loyalty point tracking and redemption handled automatically",
          ],
        },
      ],
    },
    {
      id: "hospitality",
      label: "Hospitality",
      gradientFrom: "#f5f3ff",
      gradientTo: "#7c3bed",
      allTitle: "Voice AI Reservations",
      allOutcome: "↓ 50% no-show rate",
      allImage: "/assets/industries/hospitality_voice_res.png",
      cards: [
        {
          title: "Voice AI Reservations",
          aiLabel: "Voice AI + WhatsApp AI",
          stat: "50%", statLabel: "fewer no-shows",
          image: "/assets/industries/hospitality_voice_res.png",
          bullets: [
            "AI handles table bookings by phone and WhatsApp 24/7",
            "Sends confirmation and reminder messages automatically",
            "Manages cancellations and waitlist without staff involvement",
          ],
        },
        {
          title: "Guest Experience Bot",
          aiLabel: "WhatsApp AI + Knowledge Assistant",
          stat: "90%", statLabel: "of guest queries resolved instantly",
          image: "/assets/industries/hospitality_guest_bot.png",
          bullets: [
            "Answers menu, pricing, and opening hour queries instantly",
            "Handles special request intake and passes to kitchen/staff",
            "Post-visit review requests sent automatically",
          ],
        },
        {
          title: "Operations Automation",
          aiLabel: "Workflow Automation + AI Agent",
          stat: "4hrs", statLabel: "saved per day on admin tasks",
          image: "/assets/industries/hospitality_ops_ai.png",
          bullets: [
            "Daily staff schedule generation and notification automated",
            "Inventory low-stock alerts and supplier orders triggered by AI",
            "End-of-day sales and cover reports generated automatically",
          ],
        },
      ],
    },
    {
      id: "logistics",
      label: "Logistics",
      gradientFrom: "#4c1d95",
      gradientTo: "#7c3bed",
      allTitle: "Automated Operations",
      allOutcome: "↓ 35% delivery delays",
      allImage: "/assets/industries/logistics_auto_ops.png",
      cards: [
        {
          title: "Automated Operations",
          aiLabel: "AI Workflows + Automation",
          stat: "35%", statLabel: "reduction in delivery delays",
          image: "/assets/industries/logistics_auto_ops.png",
          bullets: [
            "AI allocates routes and drivers based on real-time conditions",
            "Automated dispatch notifications and ETAs sent to customers",
            "Exception alerts trigger escalation workflows instantly",
          ],
        },
        {
          title: "Driver & Delivery AI",
          aiLabel: "AI Agent + WhatsApp AI",
          stat: "2×", statLabel: "more deliveries per driver per day",
          image: "/assets/industries/logistics_driver_ai.png",
          bullets: [
            "AI assigns optimal delivery sequences automatically",
            "Driver check-in and proof-of-delivery captured via WhatsApp",
            "Real-time re-routing when delays or issues are detected",
          ],
        },
        {
          title: "Customer Tracking Bot",
          aiLabel: "WhatsApp AI + Workflow Automation",
          stat: "80%", statLabel: "reduction in 'where is my order?' calls",
          image: "/assets/industries/logistics_tracking.png",
          bullets: [
            "Automated dispatch, in-transit, and delivery notifications",
            "Customers can query order status on WhatsApp any time",
            "Escalation to human agent triggered automatically if needed",
          ],
        },
      ],
    },
    {
      id: "healthcare",
      label: "Healthcare",
      gradientFrom: "#ede9fe",
      gradientTo: "#a78bfa",
      allTitle: "Patient Scheduling AI",
      allOutcome: "↓ 40% no-shows",
      allImage: "/assets/industries/healthcare_scheduling.png",
      cards: [
        {
          title: "Patient Scheduling AI",
          aiLabel: "Voice AI + WhatsApp AI",
          stat: "40%", statLabel: "fewer no-shows",
          image: "/assets/industries/healthcare_scheduling.png",
          bullets: [
            "Handles appointment bookings via WhatsApp and voice, 24/7",
            "Sends automated reminders 24hrs and 2hrs before appointment",
            "Reschedule and cancellation handled without staff involvement",
          ],
        },
        {
          title: "Front Desk Automation",
          aiLabel: "Knowledge Assistant + AI Agent",
          stat: "3×", statLabel: "more patient queries handled",
          image: "/assets/industries/healthcare_frontdesk.png",
          bullets: [
            "AI answers FAQs about services, fees, timings, and directions",
            "Handles insurance and panel queries automatically",
            "Escalates complex queries to staff with full context",
          ],
        },
        {
          title: "Patient Follow-Up AI",
          aiLabel: "WhatsApp AI + Workflow Automation",
          stat: "60%", statLabel: "increase in review submissions",
          image: "/assets/industries/healthcare_followup.png",
          bullets: [
            "Post-visit check-in messages sent automatically",
            "Medication and follow-up appointment reminders",
            "Automated Google review request after positive interaction",
          ],
        },
      ],
    },
    {
      id: "finance",
      label: "Finance",
      gradientFrom: "#4c1d95",
      gradientTo: "#6d28d9",
      allTitle: "Lead Qualification AI",
      allOutcome: "↑ 5× qualified leads",
      allImage: "/assets/industries/finance_lead_qual.png",
      cards: [
        {
          title: "Lead Qualification AI",
          aiLabel: "AI Agent + WhatsApp AI",
          stat: "5×", statLabel: "more qualified leads converted",
          image: "/assets/industries/finance_lead_qual.png",
          bullets: [
            "AI engages portal/website leads instantly via WhatsApp",
            "Asks qualifying questions (income, goal, timeline) automatically",
            "Hands off warm, qualified leads to your advisor with a full brief",
          ],
        },
        {
          title: "KYC & Document Collection Automation",
          aiLabel: "WhatsApp AI + Workflow Automation",
          stat: "70%", statLabel: "reduction in document follow-up time",
          image: "/assets/industries/finance_kyc.png",
          bullets: [
            "AI sends document checklists via WhatsApp with upload links",
            "Automatically follows up until all documents are received",
            "Tracks completion status in real time — no manual chasing",
          ],
        },
        {
          title: "Client Onboarding AI",
          aiLabel: "AI Workflows + Knowledge Assistant",
          stat: "2 days", statLabel: "average onboarding time (down from 2 weeks)",
          image: "/assets/industries/finance_onboarding.png",
          bullets: [
            "Guided onboarding flow — AI walks clients through each step",
            "Automated form filling, e-sign reminders, and welcome sequence",
            "CRM updated automatically at every milestone",
          ],
        },
      ],
    },
    {
      id: "professional-services",
      label: "Professional Services",
      gradientFrom: "#6d28d9",
      gradientTo: "#8b5cf6",
      allTitle: "Proposal & Quote Automation",
      allOutcome: "↑ 80% faster turnaround",
      allImage: "/assets/industries/prof_proposal.png",
      cards: [
        {
          title: "Proposal & Quote Automation",
          aiLabel: "AI Agent + Workflow Automation",
          stat: "80%", statLabel: "faster proposal turnaround",
          image: "/assets/industries/prof_proposal.png",
          bullets: [
            "AI drafts initial proposals from a brief in minutes",
            "Automatically sends follow-up emails if no response in 48hrs",
            "Tracks proposal status and flags hot leads to your team",
          ],
        },
        {
          title: "Client Communication AI",
          aiLabel: "Knowledge Assistant + WhatsApp AI",
          stat: "90%", statLabel: "of routine queries resolved without staff",
          image: "/assets/industries/prof_client_comm.png",
          bullets: [
            "AI handles project status queries, timeline questions, and invoicing FAQs",
            "Sends automated milestone updates to clients proactively",
            "Escalates urgent or complex issues to the right team member",
          ],
        },
        {
          title: "Internal Knowledge Assistant",
          aiLabel: "Knowledge Assistant + AI Workflows",
          stat: "4hrs", statLabel: "saved per employee per week",
          image: "/assets/industries/prof_knowledge.png",
          bullets: [
            "AI surfaces past project files, case history, and precedents instantly",
            "Answers internal policy, process, and compliance questions",
            "New staff onboarding time cut by 60% with AI-guided learning",
          ],
        },
      ],
    },
    {
      id: "education",
      label: "Education",
      gradientFrom: "#8b5cf6",
      gradientTo: "#c4b5fd",
      allTitle: "Admissions & Enquiry AI",
      allOutcome: "↑ 3× enquiries converted",
      allImage: "/assets/industries/edu_admissions.png",
      cards: [
        {
          title: "Admissions & Enquiry AI",
          aiLabel: "WhatsApp AI + AI Agent",
          stat: "3×", statLabel: "more admissions enquiries converted",
          image: "/assets/industries/edu_admissions.png",
          bullets: [
            "AI handles every enquiry on WhatsApp — fees, syllabus, batch timings",
            "Collects student details and qualifies intent automatically",
            "Books counselling calls and sends reminders without staff effort",
          ],
        },
        {
          title: "Student Support Bot",
          aiLabel: "Knowledge Assistant + WhatsApp AI",
          stat: "24/7", statLabel: "support without extra staff",
          image: "/assets/industries/edu_student_bot.png",
          bullets: [
            "Answers FAQs about schedules, assignments, and exam dates instantly",
            "Sends automated fee reminders and payment confirmations",
            "Escalates genuine issues to faculty or admin with full context",
          ],
        },
        {
          title: "Parent Communication AI",
          aiLabel: "WhatsApp AI + Workflow Automation",
          stat: "50%", statLabel: "reduction in admin communication workload",
          image: "/assets/industries/edu_parent_comm.png",
          bullets: [
            "Sends automated progress updates, event reminders, and fee notices",
            "Handles parent queries on attendance, performance, and schedules",
            "Translates communications into preferred language automatically",
          ],
        },
      ],
    },
    {
      id: "real-estate",
      label: "Real Estate",
      gradientFrom: "#7c3bed",
      gradientTo: "#1e1b4b",
      allTitle: "Property Enquiry Bot",
      allOutcome: "24/7 — never miss a lead",
      allImage: "/assets/industries/realestate_property.png",
      cards: [
        {
          title: "Lead Qualification & Site Visit AI",
          aiLabel: "AI Agent + WhatsApp AI",
          stat: "65%", statLabel: "more site visits booked from portal leads",
          image: "/assets/industries/realestate_lead.png",
          bullets: [
            "AI engages every portal lead within 60 seconds via WhatsApp",
            "Qualifies budget, timeline, and property preference automatically",
            "Books site visits and sends confirmation + directions — no manual work",
          ],
        },
        {
          title: "Property Enquiry Bot",
          aiLabel: "WhatsApp AI + Knowledge Assistant",
          stat: "24/7", statLabel: "availability — never miss a lead",
          image: "/assets/industries/realestate_property.png",
          bullets: [
            "Answers availability, pricing, and floor queries instantly",
            "Sends property brochures, floor plans, and virtual tour links automatically",
            "Captures buyer details and adds to CRM even at 2am",
          ],
        },
        {
          title: "Rental Management Automation",
          aiLabel: "Workflow Automation + WhatsApp AI",
          stat: "₹0", statLabel: "staff time spent on rent reminders",
          bullets: [
            "Automated rent due reminders sent via WhatsApp on schedule",
            "Maintenance requests logged, assigned, and tracked automatically",
            "Tenant onboarding flow with agreement signing and welcome sequence",
          ],
        },
      ],
    },
  ],
}

export const cta = {
  eyebrow: "GET STARTED",
  heading: ["Ready to Build a Business", "That Runs Smarter?"],
  subheading: "Book a free 45-minute AI audit and walk away with a clear, prioritised roadmap for adopting AI and automation in your business — no commitment required.",
  primary: { label: "Get My Free AI Audit →", href: "#booking" },
  secondary: { label: "Or WhatsApp us now →", href: "https://wa.me/919322365844" },
  trust: ["Free", "45 minutes", "No technical knowledge needed", "No commitment"],
}

export const footer = {
  brand: "SahyogAI",
  tagline: "AI-First Technology for Growing Businesses",
  description: "We help SMEs and local businesses adopt AI, automate operations, and unlock sustainable growth through practical digital transformation.",
  services: [
    { label: "AI Enablement",         href: "#services" },
    { label: "Technology Enablement", href: "#services" },
    { label: "Automation",            href: "#services" },
    { label: "Digital Transformation",href: "#services" },
    { label: "Voice AI Systems",      href: "#services" },
  ],
  company: [
    { label: "About",        href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Industries",   href: "#industries" },
    { label: "Blog",         href: "#blog" },
    { label: "Careers",      href: "#careers" },
  ],
  copy: "© 2026 SahyogAI. All rights reserved.",
}

export const contact = {
  email: "contact.aniketwagh@gmail.com",
  phone: "9322365844",
  phoneDisplay: "+91 93223 65844",
  phoneHref: "tel:+919322365844",
  whatsapp: "https://wa.me/919322365844",
}

export const booking = {
  heading: "Book a Free Strategy Call",
  note: "Pick a time that works for you — 45 minutes, no commitment.",
}

// Misc UI labels that are not part of a larger content block.
export const ui = {
  testimonialsHeading: "What Our Clients Say",
  metricsNote: "Based on outcomes across clients in retail, services, and operations sectors.",
  industriesEyebrow: "INDUSTRIES",
  industriesAll: "All",
  industriesCardCta: "See How It Works →",
  industriesBottomNote: "Don't see your industry? We've likely done it.",
  // Per-filter subheadings (keyed by industry id; "all" is the default view).
  industriesSubheadings: {
    all:                     "Select your industry to see exactly how SahyogAI works for you.",
    retail:                  "Real AI systems, built for real workflows. See what we can automate for your retail business.",
    hospitality:             "AI built around how hospitality businesses actually run — bookings, guests, and operations.",
    logistics:               "Real systems, real outcomes. See exactly how SahyogAI transforms operations in your industry.",
    healthcare:              "Real AI systems, built for real workflows. Pick your industry to see what we can automate.",
    finance:                 "Purpose-built AI systems mapped to the real workflows of your industry — see exactly how it works for you.",
    "professional-services": "Specialised AI systems tailored to your industry. See exactly how SahyogAI transforms your day-to-day operations.",
    education:               "Purpose-built AI systems tailored to how your industry actually operates.",
    "real-estate":           "Real systems, real outcomes. See exactly how SahyogAI transforms operations in your industry.",
  },
  footer: {
    servicesTitle: "Services",
    companyTitle:  "Company",
    contactTitle:  "Get in Touch",
    cta:           "Book a Free Call →",
    privacy:       "Privacy Policy",
    terms:         "Terms of Service",
  },
}
