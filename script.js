/**
 * ==========================================================================
 * SRI VIDYA | DIGITAL MARKETING MANAGER PORTFOLIO
 * 100% Focused on Sri Vidya's Actual Work, Deliverables & Hands-on Execution
 * ==========================================================================
 */

// ==========================================================================
// 1. COMPREHENSIVE PROJECT DATABASE (ALL 26 DOCUMENTED CLIENT ACCOUNTS)
// Each entry maps strictly to Sri Vidya's verified work and deliverables.
// ==========================================================================
const clientProjects = [
  {
    "id": "dr-waseem-cardiologist",
    "name": "Dr Waseem Cardiologist",
    "initials": "DW",
    "industry": "Cardiology",
    "location": "Bengaluru, India",
    "country": "India",
    "services": [
      "SEO",
      "SMM",
      "Content"
    ],
    "url": "https://drwaseemcardiologist.com/",
    "myRole": "Healthcare Content Strategist & SEO Lead",
    "myWorkList": [
      "Healthcare Content Strategy & Medical Ethics Compliance",
      "Keyword Research for Cardiovascular Symptoms & Care",
      "Blog Content Planning & Copywriting on Heart Health",
      "Social Media Content Creation for Patient Awareness",
      "Website Content Writing & Physician Credentials",
      "Local Search Optimisation for Doctor Profile"
    ],
    "toolsUsed": [
      "WordPress",
      "Yoast SEO",
      "Google Search Console",
      "Canva",
      "Google Trends"
    ],
    "workSummary": "Researched cardiology search intent, authored medically compliant patient education blogs, designed heart health awareness social posts, and optimized doctor consultation pages for local search.",
    "gscReport": {
      "image": "images/gsc-dr-waseem.png",
      "clicks": "223",
      "impressions": "6.53K",
      "ctr": "3.4%",
      "position": "4.0",
      "badgeSummary": "Avg. Pos 4.0 · Started 6 Months Ago",
      "timelineNote": "Started 6 Months Ago · Page 1 Google Average Position (4.0)"
    }
  },
  {
    "id": "orafix-dental-care",
    "name": "OraFix Dental Care",
    "initials": "OD",
    "industry": "Dental Healthcare",
    "location": "India",
    "country": "India",
    "services": [
      "SEO",
      "SMM",
      "Meta Ads",
      "Content"
    ],
    "url": "https://orafixdentalcare.in/",
    "myRole": "Digital Marketing Specialist — Dental Content & Paid Ads",
    "myWorkList": [
      "Dental Content Strategy Formulation",
      "Social Media Content Creation & Educational Reels",
      "Engaging Caption Writing for Smile Treatments",
      "Content Calendar Scheduling",
      "Meta Ads Patient Consultation Lead Campaigns",
      "Local Clinic SEO & Treatment Page Optimisation"
    ],
    "toolsUsed": [
      "Meta Ads Manager",
      "Canva",
      "WordPress",
      "Google Search Console",
      "Meta Business Suite"
    ],
    "workSummary": "Planned educational dental content calendars, authored engaging captions for treatment carousels, executed Meta consultation inquiry ads, and optimized clinic service pages for local search."
  },
  {
    "id": "toothlyfe-dental",
    "name": "Toothlyfe Dental Clinic",
    "initials": "TL",
    "industry": "Dental Healthcare",
    "location": "India",
    "country": "India",
    "services": [
      "SEO",
      "SMM",
      "Meta Ads",
      "Content"
    ],
    "url": "",
    "myRole": "Digital Marketing Manager — Dental Search & Social Campaigns",
    "myWorkList": [
      "Dental Patient Keyword Research & Local Search Optimisation",
      "Educational Social Media Content Strategy (Implants, Aligners, Smile Care)",
      "Meta Ads Patient Acquisition & Appointment Lead Gen Setup",
      "Google Business Profile Optimisation & Local Map Pack Ranking",
      "Monthly Dental Content Calendars & Patient Inquiry Tracking"
    ],
    "toolsUsed": [
      "Google Search Console",
      "Meta Ads Manager",
      "Canva",
      "Google Business Profile",
      "WordPress"
    ],
    "workSummary": "Formulated patient acquisition and brand visibility campaigns for clinical and cosmetic dentistry: conducted specialized dental keyword research, built Meta Ads consultation lead funnels, and planned monthly educational patient carousels."
  },
  {
    "id": "avia-clinic",
    "name": "Avia Clinic",
    "initials": "AC",
    "industry": "Healthcare",
    "location": "United Kingdom",
    "country": "United Kingdom",
    "services": [
      "SEO",
      "SMM",
      "Meta Ads",
      "Content",
      "Website"
    ],
    "url": "https://aviaclinic.co.uk/",
    "myRole": "Digital Marketing Manager — SEO, SMM & Campaign Delivery",
    "myWorkList": [
      "SEO & Keyword Research",
      "SMM & Social Media Strategy",
      "Meta Ads Campaign Setup",
      "Content Calendar Planning",
      "Website Content Writing",
      "Campaign Planning & Coordination"
    ],
    "toolsUsed": [
      "Google Search Console",
      "Meta Ads Manager",
      "WordPress",
      "Canva",
      "Google Trends"
    ],
    "workSummary": "Delivered comprehensive search and social marketing support, including monthly content calendar planning, treatment keyword research, website content writing, and Meta Ads campaign setup.",
    "gscReport": {
      "image": "images/gsc-avia-clinic.png",
      "clicks": "442",
      "impressions": "34.4K",
      "ctr": "1.3%",
      "position": "26.0",
      "badgeSummary": "34.4K Impressions · 442 Clicks",
      "timelineNote": "3 Months Google Search Console Performance"
    }
  },
  {
    "id": "apex-maintenance",
    "name": "Apex Maintenance Services",
    "initials": "AM",
    "industry": "Maintenance Services",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "Content",
      "Website",
      "Technical SEO"
    ],
    "url": "",
    "myRole": "SEO & Content Specialist",
    "myWorkList": [
      "Keyword Research for Commercial & Residential Services",
      "Service Page SEO & On-Page Optimisation",
      "Blog Content Strategy & Writing",
      "Local SEO & Auckland Map Presence",
      "Website Optimisation & Speed Review",
      "Monthly SEO Reporting Decks"
    ],
    "toolsUsed": [
      "SEMrush",
      "Google Search Console",
      "Rank Math",
      "WordPress",
      "Screaming Frog"
    ],
    "workSummary": "Conducted in-depth keyword research for commercial property maintenance, authored optimized service-page copy, wrote informational blog posts, managed local Auckland SEO, and prepared monthly SEO reports.",
    "gscReport": {
      "image": "images/gsc-apex-maintenance.png",
      "clicks": "26",
      "impressions": "4.4K",
      "ctr": "0.6%",
      "position": "32.3",
      "badgeSummary": "4.4K Impressions · 26 Clicks",
      "timelineNote": "3 Months Google Search Console Performance"
    }
  },
  {
    "id": "doctors-coventry",
    "name": "Doctors Coventry",
    "initials": "DC",
    "industry": "Healthcare",
    "location": "Coventry, United Kingdom",
    "country": "United Kingdom",
    "services": [
      "SEO",
      "SMM",
      "Google Ads",
      "Meta Ads",
      "Content"
    ],
    "url": "",
    "myRole": "Digital Marketing Manager — Search, Paid Ads & Compliance",
    "myWorkList": [
      "Keyword Research for Clinical & Private Treatments",
      "Google Ads Policy Troubleshooting & Disapproval Resolution",
      "Google Ads Campaign Setup & Bid Management",
      "Meta Ads Patient Acquisition Campaigns",
      "SEO Pages Creation & Content Optimisation",
      "Social Media Content Planning",
      "Campaign Optimisation & Negative Keyword Sculpting"
    ],
    "toolsUsed": [
      "Google Ads",
      "Google Search Console",
      "Meta Ads Manager",
      "GA4",
      "WordPress"
    ],
    "workSummary": "Resolved strict Google Ads healthcare policy disapproval issues, researched compliant medical keywords, established search and Meta ad campaigns, created SEO-focused clinic pages, and managed social content.",
    "gscReport": {
      "image": "images/gsc-doctors-coventry.png",
      "clicks": "3.48K",
      "impressions": "143K",
      "ctr": "2.4%",
      "position": "13.4",
      "badgeSummary": "143K Impressions · 3.48K Clicks",
      "timelineNote": "3 Months Google Search Console Performance"
    }
  },
  {
    "id": "estilo-hair-beauty",
    "name": "Estilo Hair & Beauty",
    "initials": "EH",
    "industry": "Beauty & Salon",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Content"
    ],
    "url": "https://estilosalon.co.nz/",
    "myRole": "Digital Marketing Specialist — SEO & Social Strategy",
    "myWorkList": [
      "SEO Support & Salon Service Keywords",
      "Content Strategy Formulation",
      "Blog Content Writing & Haircare Advice",
      "Social Media Calendar Planning",
      "Instagram & Facebook Caption Writing"
    ],
    "toolsUsed": [
      "Meta Business Suite",
      "Canva",
      "Rank Math",
      "Google Search Console",
      "Google Trends"
    ],
    "workSummary": "Delivered SEO keyword optimization for salon styling services, authored client education blog articles, and planned weekly social media calendars with tailored captions and hashtags."
  },
  {
    "id": "motion-lab-physio",
    "name": "Motion Lab Physio",
    "initials": "ML",
    "industry": "Physiotherapy",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Google Ads",
      "Content",
      "Website"
    ],
    "url": "https://motionlab.co.nz/",
    "myRole": "Performance Marketing & SEO Manager",
    "myWorkList": [
      "Keyword Research for Injury Rehab & Sports Physio",
      "Google Ads Campaign Setup & Management",
      "Landing Page Optimisation & Conversion Flow",
      "Blog Content Creation on Patient Rehabilitation",
      "Website Optimisation & Core Web Vitals",
      "Page Speed Analysis & Bottleneck Diagnostics",
      "Performance Analysis & Monthly Reporting"
    ],
    "toolsUsed": [
      "Google Ads",
      "Google Search Console",
      "PageSpeed Insights",
      "Elementor",
      "GA4"
    ],
    "workSummary": "Executed end-to-end performance marketing: setup intent-focused Google Ads, performed website speed and Core Web Vitals analysis, optimized landing page booking UX, wrote rehabilitation blog articles, and tracked ongoing performance."
  },
  {
    "id": "pinehill-physio",
    "name": "Pinehill Physio",
    "initials": "PP",
    "industry": "Physiotherapy",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Content",
      "Website"
    ],
    "url": "https://pinehillphysio.co.nz/",
    "myRole": "SEO & Content Manager",
    "myWorkList": [
      "Local SEO Optimisation for North Shore Clinic",
      "Content Calendar Scheduling & Planning",
      "Social Media Content & Ergonomic Advice Posts",
      "Website Content Writing & Service Pages",
      "On-Page SEO & Metadata Refinement"
    ],
    "toolsUsed": [
      "WordPress",
      "Rank Math",
      "Meta Business Suite",
      "Google Search Console",
      "Canva"
    ],
    "workSummary": "Structured patient education social content calendars, wrote targeted clinic website copy, implemented on-page SEO meta tags, and enhanced local Auckland search presence."
  },
  {
    "id": "quantum-sports",
    "name": "Quantum Sports",
    "initials": "QS",
    "industry": "Sports Retail",
    "location": "New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Content",
      "Website"
    ],
    "url": "https://quantumsports.co.nz/",
    "myRole": "Digital Marketing & Policy Content Strategist",
    "myWorkList": [
      "Website Content Writing & Product Descriptions",
      "Website Policy Research: Privacy Policy",
      "Website Policy Research: Returns & Exchange Policy",
      "Website Policy Research: Terms & Conditions (NZ Law)",
      "SEO Keyword Research for Sports Equipment",
      "SMM Content Strategy & Product Showcases"
    ],
    "toolsUsed": [
      "WooCommerce",
      "WordPress",
      "Google Search Console",
      "Meta Business Suite",
      "Canva"
    ],
    "workSummary": "Researched and drafted comprehensive e-commerce website policies compliant with NZ consumer law (Privacy, Returns, Terms), optimized category SEO, and created social media product highlight campaigns."
  },
  {
    "id": "the-body-workshop",
    "name": "The Body Workshop",
    "initials": "TBW",
    "industry": "Wellness",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Content",
      "Website"
    ],
    "url": "",
    "myRole": "SEO & Content Strategist",
    "myWorkList": [
      "Keyword Research across Holistic Therapy Modalities",
      "Homepage Content Copywriting",
      "Service Pages Content Architecture & Writing",
      "Local SEO & Google Business Presence",
      "Content Calendar Creation",
      "Blog Content Writing & Health Guides",
      "SMM Content Planning"
    ],
    "toolsUsed": [
      "WordPress",
      "Google Search Console",
      "Rank Math",
      "Canva",
      "Google Analytics"
    ],
    "workSummary": "Rewrote the homepage and multi-service therapy pages for search intent, completed keyword research for local Auckland wellness queries, wrote educational blog articles, and managed monthly social calendars."
  },
  {
    "id": "the-vet-clinic",
    "name": "The Vet Clinic",
    "initials": "TVC",
    "industry": "Veterinary Healthcare",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Google Ads",
      "Content"
    ],
    "url": "https://thevetclinic.co.nz/",
    "myRole": "Digital Marketing Manager — Search & Campaign Work",
    "myWorkList": [
      "Keyword Research for Emergency & Routine Veterinary Care",
      "Google Ads Keyword Planning & Bid Structuring",
      "Google Ads Campaign Setup & Call Extensions",
      "Service Content Writing for Clinical Animal Care",
      "Social Media Content Creation & Pet Health Tips",
      "Campaign Work & Negative Keyword Sculpting",
      "Blog Content Writing on Preventative Pet Care"
    ],
    "toolsUsed": [
      "Google Ads",
      "Google Search Console",
      "Meta Ads Manager",
      "WordPress",
      "GA4"
    ],
    "workSummary": "Executed search advertising and organic content: structured emergency veterinary Google Ads campaigns, authored pet care advice articles, wrote clinic service pages, and published social media pet health tips."
  },
  {
    "id": "thebackbenchers-tech",
    "name": "TheBackBenchers Tech",
    "initials": "TBB",
    "industry": "Digital Services & Tech",
    "location": "New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Website",
      "Content",
      "Technical SEO"
    ],
    "url": "https://thebackbencherstech.com/",
    "myRole": "Digital Marketing Manager & Client Project Lead",
    "myWorkList": [
      "Multi-Client SEO & SMM Delivery",
      "Website Content Architecture",
      "Technical SEO Audits & Crawlability Checks",
      "Website Optimisation & Elementor Layouts",
      "Client Marketing Reports & KPI Decks",
      "Client Project Management & Timeline Governance"
    ],
    "toolsUsed": [
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "WordPress",
      "Elementor",
      "GA4"
    ],
    "workSummary": "Managed digital marketing operations across client accounts: conducted technical SEO audits, improved site performance, prepared monthly performance reports, authored website content, and managed client delivery workflows."
  },
  {
    "id": "crepeon-textiles",
    "name": "Crepeon Textile Website",
    "initials": "CT",
    "industry": "Textiles / Manufacturing",
    "location": "India",
    "country": "India",
    "services": [
      "SEO",
      "Content",
      "Website"
    ],
    "url": "",
    "myRole": "Digital Marketing & SEO Specialist",
    "myWorkList": [
      "SEO Keyword Research for Fabric & Textile Collections",
      "Website Marketing Copy & Product Catalog Structuring",
      "On-Page SEO Optimization & Meta Tags Setup",
      "Content Strategy for B2B Wholesale Buyer Queries",
      "Website Optimisation & User Navigation Architecture"
    ],
    "toolsUsed": [
      "WordPress",
      "Rank Math",
      "Google Search Console",
      "Google Analytics"
    ],
    "workSummary": "Structured product category SEO for textile buyers, developed website marketing content, optimized on-page product specifications, and improved catalog navigation without social media management."
  },
  {
    "id": "mac-avenue",
    "name": "Mac Avenue",
    "initials": "MA",
    "industry": "Technology / Apple Retail",
    "location": "Bengaluru, India",
    "country": "India",
    "services": [
      "Performance Marketing",
      "SMM",
      "Meta Ads",
      "Content"
    ],
    "url": "",
    "myRole": "Performance Marketing & SMM Manager",
    "myWorkList": [
      "Meta Ads Performance Campaigns for MacBook Upgrades & Trade-Ins",
      "Social Media Marketing & Instagram Feed Strategy",
      "High-Intent Audience Research & Retargeting Setup",
      "Performance Ad Copywriting & Direct Offer Messaging",
      "Content Strategy & Weekly Creative Briefs for Social"
    ],
    "toolsUsed": [
      "Meta Ads Manager",
      "Instagram Creator Studio",
      "Canva",
      "Meta Business Suite"
    ],
    "workSummary": "Delivered dedicated performance marketing and social media management: created and optimized Meta Ads campaigns for device upgrades, formulated weekly Instagram content strategies, and managed paid customer acquisition funnels."
  },
  {
    "id": "labifix-innovations",
    "name": "LabiFix Innovations",
    "initials": "LI",
    "industry": "Technology & Lab Equipment",
    "location": "India",
    "country": "India",
    "services": [
      "SEO",
      "Content",
      "Website",
      "Technical SEO"
    ],
    "url": "",
    "myRole": "Technical SEO & Website Specialist",
    "myWorkList": [
      "Keyword Research for Specialized Industrial Lab Equipment",
      "Technical SEO Auditing & Crawl Error Fixes",
      "Website Optimisation & Spec Sheet Structuring",
      "SEO Content Writing for Engineering Pages",
      "Google Search Console Indexation Management"
    ],
    "toolsUsed": [
      "SEMrush",
      "Google Search Console",
      "Screaming Frog",
      "Rank Math"
    ],
    "workSummary": "Conducted high-precision technical keyword research for laboratory equipment, optimized product specifications for search engines, resolved indexing errors, and improved on-page metadata."
  },
  {
    "id": "iugale-services",
    "name": "IUGALE Services",
    "initials": "IU",
    "industry": "Digital Marketing & IT",
    "location": "Bengaluru, India",
    "country": "India",
    "services": [
      "SEO",
      "SMM",
      "Website",
      "Content",
      "Technical SEO"
    ],
    "url": "https://iugale.com/",
    "myRole": "Digital Marketing Manager — Operations & Delivery",
    "myWorkList": [
      "SEO Strategy & Keyword Architecture",
      "SMM Multi-Channel Social Content",
      "Website Management on WordPress",
      "Digital Marketing Campaign Governance",
      "Content Creation for Technology & Marketing Services",
      "Website Optimisation & Elementor Layout Updates"
    ],
    "toolsUsed": [
      "WordPress",
      "Elementor",
      "GA4",
      "Google Search Console",
      "SEMrush"
    ],
    "workSummary": "Delivered hands-on digital marketing: managed the enterprise WordPress website, executed ongoing SEO keyword optimization, produced social content, authored service pages, and performed technical site speed updates."
  },
  {
    "id": "amde-architects",
    "name": "AMDE Architects",
    "initials": "AM",
    "industry": "Architecture & Design",
    "location": "India",
    "country": "India",
    "services": [
      "SMM",
      "Content"
    ],
    "url": "",
    "myRole": "Social Media Strategist",
    "myWorkList": [
      "Social Media Content Planning for Architectural Projects",
      "Curated Monthly Social Media Calendar",
      "Design Philosophy Caption Writing & Material Spotlights",
      "Hashtag Strategy Targeting High-End Homeowners",
      "Visual Grid Aesthetic Structuring"
    ],
    "toolsUsed": [
      "Meta Business Suite",
      "Canva",
      "Instagram Insights",
      "Google Docs"
    ],
    "workSummary": "Structured a polished architectural social media calendar, drafted design captions highlighting materials and craftsmanship, and managed social engagement workflows."
  },
  {
    "id": "onyx-pinnacle",
    "name": "Onyx Pinnacle Enterprises",
    "initials": "OP",
    "industry": "Interior Design",
    "location": "Bengaluru, India",
    "country": "India",
    "services": [
      "SEO",
      "Content",
      "Website"
    ],
    "url": "https://onyxpinnacleenterprises.in/",
    "myRole": "SEO & Website Content Specialist",
    "myWorkList": [
      "Keyword Research for Luxury Interior Design & Fitouts",
      "Website Content Writing & Portfolio Copy",
      "On-Page SEO for Bengaluru Residential Queries",
      "Content Strategy for Turnkey & Modular Interiors",
      "Website Layout & Mobile Readability Review"
    ],
    "toolsUsed": [
      "WordPress",
      "Elementor",
      "Rank Math",
      "Google Search Console",
      "Google Keyword Planner"
    ],
    "workSummary": "Executed localized keyword research for luxury interiors, wrote bespoke website portfolio content, implemented on-page SEO meta tags, and structured service pages for high lead capture."
  },
  {
    "id": "brickstime-constructions",
    "name": "Brickstime Constructions",
    "initials": "BC",
    "industry": "Construction",
    "location": "India",
    "country": "India",
    "services": [
      "SMM",
      "Meta Ads",
      "Content"
    ],
    "url": "https://brickstimeconstructions.com/",
    "myRole": "Paid Social & Content Specialist",
    "myWorkList": [
      "Meta Ads Lead Generation Campaign Setup",
      "Campaign Creative Content & Ad Angles",
      "Ad Copywriting Emphasizing Handover Guarantees",
      "Social Media Content from Active Construction Sites",
      "Captions & Hashtag Strategy for Prospective Homebuilders"
    ],
    "toolsUsed": [
      "Meta Ads Manager",
      "Canva",
      "Meta Business Suite",
      "Google Drive"
    ],
    "workSummary": "Managed Meta Ads lead acquisition for residential construction, wrote compelling ad copy and hooks, developed construction progress social updates, and curated targeted real estate hashtags."
  },
  {
    "id": "dahlia-imprints",
    "name": "Dahlia Imprints",
    "initials": "DI",
    "industry": "Commercial Printing",
    "location": "India",
    "country": "India",
    "services": [
      "SEO",
      "SMM",
      "Content"
    ],
    "url": "",
    "myRole": "Digital Marketing Specialist",
    "myWorkList": [
      "Digital Marketing Content Strategy",
      "SEO Keyword Research for Packaging & Commercial Printing",
      "SMM Content Planning Showcasing Specialty Finishes",
      "Website Product Descriptions & Category Content",
      "Brand Positioning for Corporate Gifting"
    ],
    "toolsUsed": [
      "Google Search Console",
      "Canva",
      "WordPress",
      "Meta Business Suite"
    ],
    "workSummary": "Researched commercial packaging search keywords, drafted product catalog descriptions, and structured social content showcasing specialty print textures and corporate merchandise."
  },
  {
    "id": "wordpar",
    "name": "WordPar",
    "initials": "WP",
    "industry": "Professional Translation",
    "location": "India",
    "country": "India",
    "services": [
      "SEO",
      "Content",
      "Website"
    ],
    "url": "",
    "myRole": "SEO & Website Content Specialist",
    "myWorkList": [
      "SEO Keyword Research for Enterprise Language Services",
      "Website Optimisation & Technical Health Checks",
      "Service Page Content Restructuring for Legal & Medical Translation",
      "Digital Marketing Content Planning",
      "Search Console Query Monitoring & Meta Tag Optimization"
    ],
    "toolsUsed": [
      "Google Search Console",
      "Ahrefs",
      "WordPress",
      "Screaming Frog"
    ],
    "workSummary": "Conducted international search keyword research, optimized specialized translation service pages, audited technical site health, and crafted enterprise-focused website copy."
  },
  {
    "id": "weddingsclub",
    "name": "WeddingsClub",
    "initials": "WC",
    "industry": "Weddings & Events",
    "location": "India",
    "country": "India",
    "services": [
      "SEO",
      "SMM",
      "Content"
    ],
    "url": "",
    "myRole": "Digital Marketing & Content Lead",
    "myWorkList": [
      "SEO Keyword Research for Wedding Vendors & Venues",
      "SMM Content Planning & Bridal Inspiration Campaigns",
      "Content Strategy for Wedding Checklists & Planning Guides",
      "Vendor Category On-Page SEO Optimisation",
      "Digital Marketing Coordination for Festive Seasons"
    ],
    "toolsUsed": [
      "Meta Business Suite",
      "Canva",
      "Rank Math",
      "Google Trends",
      "Pinterest Business"
    ],
    "workSummary": "Built wedding inspiration social media campaigns, mapped search keywords for vendor categories, wrote planning guide articles, and implemented on-page SEO across venue directories."
  },
  {
    "id": "the-leela-coorg",
    "name": "The Leela Coorg Forest Sanctuary",
    "initials": "LC",
    "industry": "Luxury Hospitality",
    "location": "Coorg, India",
    "country": "India",
    "services": [
      "SMM",
      "Content"
    ],
    "url": "",
    "myRole": "Social Media Content Writer & Strategist",
    "myWorkList": [
      "Social Media Content Development for Luxury Eco-Retreat",
      "Evocative Caption Writing on Nature, Seclusion & Rainforests",
      "Hashtag Strategy Formulation for Luxury Travellers",
      "Creative Content Briefs for Bespoke Guest Experiences",
      "Curated Visual Grid Aesthetic Planning"
    ],
    "toolsUsed": [
      "Instagram Creator Studio",
      "Meta Business Suite",
      "Canva",
      "Google Docs"
    ],
    "workSummary": "Authored sensory, evocative social captions reflecting rainforest sanctuary tranquility, formulated luxury travel hashtag sets, and coordinated creative themes for seasonal retreats."
  },
  {
    "id": "tvc-clinical",
    "name": "TVC / The Vet Clinic (Clinical Services)",
    "initials": "TVC",
    "industry": "Specialist Veterinary Care",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "services": [
      "SEO",
      "SMM",
      "Google Ads",
      "Content"
    ],
    "url": "https://thevetclinic.co.nz/",
    "myRole": "Digital Marketing Specialist — Clinical Search & Content",
    "myWorkList": [
      "Keyword Research for Animal Surgical & Diagnostic Procedures",
      "Service Content Writing for Clinical Landing Pages",
      "Google Ads Keyword Planning & Setup for Urgent Procedures",
      "Social Media Content on Pre/Post-Operative Pet Care",
      "Campaign Work & Negative Keyword Maintenance",
      "Blog Content Writing on Complex Animal Health"
    ],
    "toolsUsed": [
      "Google Ads",
      "Google Search Console",
      "WordPress",
      "Rank Math",
      "GA4"
    ],
    "workSummary": "Maintained dedicated clinical marketing: researched surgical veterinary search queries, structured urgent care Google Search campaigns, authored clinical landing page copy, and wrote patient recovery guides."
  },
  {
    "id": "ala-sports-arena",
    "name": "ALA Sports Arena",
    "initials": "ALA",
    "industry": "Sports & Recreation",
    "location": "Bengaluru, India",
    "country": "India",
    "services": [
      "SMM",
      "Content"
    ],
    "url": "",
    "myRole": "Social Media Strategist & Campaign Creator",
    "myWorkList": [
      "SMM Promotional Strategy for Turf Bookings & Tournaments",
      "Social Media Content Planning for Weekend Sports Leagues",
      "Campaign Creative Content & Promotional Banners",
      "Content Planning Across Instagram & Local Sports Groups",
      "Community Engagement & Player Spotlight Content"
    ],
    "toolsUsed": [
      "Meta Business Suite",
      "Canva",
      "Instagram Insights",
      "Google Drive"
    ],
    "workSummary": "Designed promotional social media campaigns for sports turf bookings, published weekend tournament highlights, and planned local community engagement challenges."
  },
  {
    "id": "orbitas",
    "name": "Orbitas",
    "initials": "OR",
    "industry": "Corporate & Consulting",
    "location": "India",
    "country": "India",
    "services": [
      "SMM",
      "Content"
    ],
    "url": "",
    "myRole": "Social Media Strategist & Content Planner",
    "myWorkList": [
      "SMM Content Strategy & Corporate Brand Voice",
      "Social Media Content Planning & Scheduling",
      "Content Planning Across LinkedIn & Facebook",
      "Social Media Calendar Formulation",
      "Professional Caption Writing & Visual Briefs"
    ],
    "toolsUsed": [
      "Meta Business Suite",
      "Canva",
      "LinkedIn Page Manager",
      "Google Docs"
    ],
    "workSummary": "Developed B2B social media content strategies, established monthly content schedules, wrote professional captions, and designed visual post briefs for consulting brand engagement."
  }
];

// ==========================================================================
// 2. DOM ELEMENTS & STATE
// ==========================================================================
const DOM = {
  headerNav: document.getElementById('headerNav'),
  mobileToggle: document.getElementById('mobileToggle'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  navLinks: document.querySelectorAll('.nav-link, .drawer-link'),
  
  heroSection: document.getElementById('home'),
  heroTextCol: document.getElementById('heroTextCol'),
  growthHubStage: document.getElementById('growthHubStage'),
  heroVisualCol: document.getElementById('heroVisualCol'),
  centralHub: document.getElementById('centralHub'),
  nodeCards: document.querySelectorAll('.channel-station-card, .hub-node-card'),
  laserLines: document.querySelectorAll('.conn-laser'),
  hudWidgets: document.querySelectorAll('.hud-widget, .hud-chip'),
  particlesCanvas: document.getElementById('heroParticles'),
  cursorGlow: document.getElementById('cursorGlow'),

  skillTabs: document.querySelectorAll('.skill-tab'),
  skillCards: document.querySelectorAll('.skill-card'),

  toolChips: document.querySelectorAll('.tool-chip'),
  toolTooltip: document.getElementById('toolTooltip'),

  projectCardsGrid: document.getElementById('projectCardsGrid'),
  projectSearchInput: document.getElementById('projectSearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  dynamicCountPill: document.getElementById('dynamicCountPill'),
  countAllPill: document.getElementById('countAll'),
  locationFilterGroup: document.getElementById('locationFilterGroup'),
  serviceFilterGroup: document.getElementById('serviceFilterGroup'),

  caseStudyModal: document.getElementById('caseStudyModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalAvatar: document.getElementById('modalAvatar'),
  modalTitle: document.getElementById('modalTitle'),
  modalSubmeta: document.getElementById('modalSubmeta'),
  modalServices: document.getElementById('modalServices'),
  modalRole: document.getElementById('modalRole'),
  modalWorkList: document.getElementById('modalWorkList'),
  modalTools: document.getElementById('modalTools'),
  modalSummary: document.getElementById('modalSummary'),
  modalGscSection: document.getElementById('modalGscSection'),
  modalWebsiteRow: document.getElementById('modalWebsiteRow'),

  currentYear: document.getElementById('currentYear'),
  contactForm: document.getElementById('contactForm'),
  formSuccessMessage: document.getElementById('formSuccessMessage')
};

const state = {
  searchTerm: '',
  selectedService: 'all',
  selectedLocation: 'all',
  isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
};

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (DOM.currentYear) {
    DOM.currentYear.textContent = new Date().getFullYear();
  }

  initProjectsSection();
  initHeroGrowthHub();

  if (!state.isReducedMotion) {
    initHeroParticles();
    initCursorGlow();
  }

  initScrollInteractions();
  initSkillMatrix();
  initToolkitMarquee();
  initMobileNavigation();
  initModalInteractions();
});

// ==========================================================================
// 4. HERO SECTION 3D & PARALLAX
// ==========================================================================
function initHeroGrowthHub() {
  if (state.isReducedMotion) return;

  const heroSec = DOM.heroSection;
  const stage = DOM.growthHubStage;
  const coreReadout = document.getElementById('coreReadout');
  const defaultReadoutText = 'Hover any node to inspect channel';

  const capabilityMap = {
    'seo': 'SEO: Keyword Mapping, Schema & SERP Top 3',
    'google-ads': 'Paid Ads: Search Intent PPC & Policy Compliance',
    'meta-ads': 'Paid Social: Lead Generation & Retargeting',
    'smm': 'SMM: 30-Day Content Calendars & Native Captions',
    'analytics': 'Web & Data: GA4 Triggers, Speed 90+ & Reports',
    'conversion': 'WordPress Page Speed & Mobile UX Optimisation',
    'content': 'Search Intent Blog Strategy & Creative Briefs',
    'strategy': 'Cross-Channel Operations & Account Alignment'
  };

  if (!stage) return;

  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;
  let rafId = null;

  function updateStage() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    stage.style.transform = `rotateY(${currentX * 12}deg) rotateX(${-currentY * 12}deg)`;

    if (DOM.centralHub) {
      DOM.centralHub.style.transform = `translateZ(35px) translate(${currentX * 6}px, ${currentY * 6}px)`;
    }

    if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
      rafId = requestAnimationFrame(updateStage);
    } else {
      rafId = null;
    }
  }

  const trackTarget = heroSec || stage;
  trackTarget.addEventListener('mousemove', (e) => {
    const rect = trackTarget.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width - 0.5;
    targetY = (e.clientY - rect.top) / rect.height - 0.5;
    if (!rafId) rafId = requestAnimationFrame(updateStage);
  });

  trackTarget.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    if (!rafId) rafId = requestAnimationFrame(updateStage);
  });

  DOM.nodeCards.forEach(card => {
    const nodeId = card.dataset.nodeId;
    const matchingLaser = Array.from(DOM.laserLines).find(line => line.dataset.node === nodeId);

    card.addEventListener('mouseenter', () => {
      if (matchingLaser) matchingLaser.classList.add('active');
      if (coreReadout && capabilityMap[nodeId]) {
        coreReadout.textContent = `▶ ${capabilityMap[nodeId]}`;
        coreReadout.style.color = '#11d3b0';
      }
      if (DOM.centralHub) {
        DOM.centralHub.style.borderColor = '#11d3b0';
        DOM.centralHub.style.boxShadow = '0 25px 70px rgba(0, 0, 0, 0.85), 0 0 55px rgba(17, 211, 176, 0.5)';
      }
    });

    card.addEventListener('mouseleave', () => {
      if (matchingLaser) matchingLaser.classList.remove('active');
      if (coreReadout) {
        coreReadout.textContent = defaultReadoutText;
        coreReadout.style.color = '';
      }
      if (DOM.centralHub) {
        DOM.centralHub.style.borderColor = '';
        DOM.centralHub.style.boxShadow = '';
      }
    });

    card.addEventListener('click', () => {
      const serviceNameMap = {
        'seo': 'SEO',
        'google-ads': 'Google Ads',
        'meta-ads': 'Meta Ads',
        'analytics': 'Analytics',
        'conversion': 'Website',
        'content': 'Content',
        'smm': 'SMM',
        'strategy': 'all'
      };
      const mappedService = serviceNameMap[nodeId] || 'all';
      filterByService(mappedService);
      
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initHeroParticles() {
  const canvas = DOM.particlesCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particleCount = 28;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.4 + 0.15
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(17, 211, 176, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 85) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(17, 211, 176, ${0.1 * (1 - dist / 85)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  }

  render();
}

function initCursorGlow() {
  const glow = DOM.cursorGlow;
  if (!glow || window.innerWidth < 768) return;

  window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
}

// ==========================================================================
// 5. SCROLL INTERACTIONS
// ==========================================================================
function initScrollInteractions() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      DOM.headerNav.classList.add('scrolled');
    } else {
      DOM.headerNav.classList.remove('scrolled');
    }

    if (!state.isReducedMotion && window.scrollY < window.innerHeight) {
      const scrollRatio = window.scrollY / window.innerHeight;
      if (DOM.heroTextCol) {
        DOM.heroTextCol.style.transform = `translateY(${scrollRatio * 35}px)`;
        DOM.heroTextCol.style.opacity = `${1 - scrollRatio * 0.85}`;
      }
      if (DOM.growthHubStage) {
        DOM.growthHubStage.style.transform = `scale(${1 - scrollRatio * 0.12}) translateY(${scrollRatio * 20}px)`;
        DOM.growthHubStage.style.opacity = `${1 - scrollRatio * 0.7}`;
      }
    }
  });

  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        DOM.navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
}

// ==========================================================================
// 6. PROJECTS SECTION & FILTERING (FOCUSED 100% ON SRI VIDYA'S WORK)
// ==========================================================================
function initProjectsSection() {
  if (DOM.countAllPill) {
    DOM.countAllPill.textContent = clientProjects.length;
  }
  
  renderProjects();

  if (DOM.projectSearchInput) {
    DOM.projectSearchInput.addEventListener('input', (e) => {
      state.searchTerm = e.target.value.trim().toLowerCase();
      if (DOM.clearSearchBtn) {
        DOM.clearSearchBtn.style.display = state.searchTerm ? 'block' : 'none';
      }
      renderProjects();
    });
  }

  if (DOM.clearSearchBtn) {
    DOM.clearSearchBtn.addEventListener('click', () => {
      DOM.projectSearchInput.value = '';
      state.searchTerm = '';
      DOM.clearSearchBtn.style.display = 'none';
      renderProjects();
      DOM.projectSearchInput.focus();
    });
  }

  if (DOM.locationFilterGroup) {
    DOM.locationFilterGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.loc-btn');
      if (!btn) return;
      DOM.locationFilterGroup.querySelectorAll('.loc-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedLocation = btn.dataset.loc;
      renderProjects();
    });
  }

  if (DOM.serviceFilterGroup) {
    DOM.serviceFilterGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.svc-filter-btn');
      if (!btn) return;
      DOM.serviceFilterGroup.querySelectorAll('.svc-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedService = btn.dataset.filter;
      renderProjects();
    });
  }
}

function filterByService(serviceName) {
  state.selectedService = serviceName;
  if (DOM.serviceFilterGroup) {
    DOM.serviceFilterGroup.querySelectorAll('.svc-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === serviceName);
    });
  }
  renderProjects();
}

function renderProjects() {
  const filtered = clientProjects.filter(project => {
    const matchesService = state.selectedService === 'all' || 
      project.services.some(s => s.toLowerCase() === state.selectedService.toLowerCase());

    const matchesLocation = state.selectedLocation === 'all' || 
      project.country.toLowerCase() === state.selectedLocation.toLowerCase() ||
      project.location.toLowerCase().includes(state.selectedLocation.toLowerCase());

    const haystack = [
      project.name,
      project.industry,
      project.location,
      project.country,
      ...project.services,
      ...project.myWorkList,
      project.myRole,
      project.workSummary
    ].join(' ').toLowerCase();

    const matchesSearch = !state.searchTerm || haystack.includes(state.searchTerm);

    return matchesService && matchesLocation && matchesSearch;
  });

  if (DOM.dynamicCountPill) {
    DOM.dynamicCountPill.textContent = `${filtered.length} of ${clientProjects.length} Projects`;
  }

  if (!filtered.length) {
    DOM.projectCardsGrid.innerHTML = `
      <div class="empty-projects-state">
        <span style="font-size: 28px; display: block; margin-bottom: 12px;">🔍</span>
        <h3>No projects match your current filters</h3>
        <p>Try clearing your search terms or selecting "All Locations" and "All Disciplines".</p>
      </div>
    `;
    return;
  }

  DOM.projectCardsGrid.innerHTML = filtered.map((project, idx) => {
    const serviceBadges = project.services.map(svc => {
      const classMap = {
        'SEO': 'badge-seo',
        'SMM': 'badge-smm',
        'Google Ads': 'badge-google-ads',
        'Meta Ads': 'badge-meta-ads',
        'Content': 'badge-content',
        'Analytics': 'badge-analytics',
        'Website': 'badge-website',
        'Technical SEO': 'badge-tech-seo'
      };
      const badgeClass = classMap[svc] || 'badge-seo';
      return `<span class="card-badge ${badgeClass}">${escapeHtml(svc)}</span>`;
    }).join('');

    // Focused 100% on what she worked on
    const workItems = project.myWorkList.slice(0, 4).map(act => {
      return `<li>${escapeHtml(act)}</li>`;
    }).join('');

    const websiteLink = project.url 
      ? `<a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer" class="live-site-link">Visit Website ↗</a>`
      : `<span class="live-site-link">Client Account</span>`;

    const gscCardBadge = project.gscReport 
      ? `<div class="card-gsc-badge">✓ Verified GSC: ${escapeHtml(project.gscReport.badgeSummary)}</div>`
      : '';

    return `
      <article class="rich-project-card" style="animation-delay: ${Math.min(idx * 35, 300)}ms">
        <div class="card-top-row">
          <div class="client-avatar-badge">${escapeHtml(project.initials)}</div>
          <div class="client-meta-info">
            <h3>${escapeHtml(project.name)}</h3>
            <div class="client-subtext">${escapeHtml(project.industry)} · ${escapeHtml(project.location)}</div>
          </div>
        </div>

        ${gscCardBadge}

        <div class="card-service-badges">
          ${serviceBadges}
        </div>

        <div class="card-work-summary">
          <span class="work-summary-label">What I Worked On</span>
          <ul class="work-activities-list">
            ${workItems}
          </ul>
        </div>

        <div class="card-bottom-actions">
          <button class="btn-open-case" onclick="openCaseStudyModal('${project.id}')">
            <span>View My Work Details</span>
            <span>→</span>
          </button>
          ${websiteLink}
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// 7. MODAL: FOCUSED 100% ON HER WORK & DELIVERABLES
// ==========================================================================
function initModalInteractions() {
  if (!DOM.caseStudyModal) return;

  if (DOM.modalCloseBtn) {
    DOM.modalCloseBtn.addEventListener('click', closeCaseStudyModal);
  }

  DOM.caseStudyModal.addEventListener('click', (e) => {
    if (e.target === DOM.caseStudyModal) {
      closeCaseStudyModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.caseStudyModal.style.display === 'flex') {
      closeCaseStudyModal();
    }
  });
}

window.openCaseStudyModal = function(projectId) {
  const project = clientProjects.find(p => p.id === projectId);
  if (!project || !DOM.caseStudyModal) return;

  DOM.modalAvatar.textContent = project.initials;
  DOM.modalTitle.textContent = project.name;
  DOM.modalSubmeta.textContent = `${project.industry} · ${project.location}`;

  DOM.modalServices.innerHTML = project.services.map(svc => `
    <span class="card-badge badge-seo">${escapeHtml(svc)}</span>
  `).join('');

  DOM.modalRole.textContent = project.myRole;
  
  // Inject Google Search Console report screenshot and metrics if available
  if (DOM.modalGscSection) {
    if (project.gscReport) {
      DOM.modalGscSection.innerHTML = `
        <div class="modal-gsc-container">
          <h4><span class="pulse-dot"></span> Official Google Search Console Performance Report (3 Months)</h4>
          ${project.gscReport.timelineNote ? `<div class="gsc-timeline-note"><span>⏱️ ${escapeHtml(project.gscReport.timelineNote)}</span></div>` : ''}
          <div class="modal-gsc-img-wrap">
            <img src="${escapeHtml(project.gscReport.image)}" alt="Google Search Console report for ${escapeHtml(project.name)}">
          </div>
          <div class="gsc-metrics-banner">
            <div class="gsc-metric-chip">
              <small>Total Clicks</small>
              <strong class="highlight-blue">${escapeHtml(project.gscReport.clicks)}</strong>
            </div>
            <div class="gsc-metric-chip">
              <small>Impressions</small>
              <strong class="highlight-teal">${escapeHtml(project.gscReport.impressions)}</strong>
            </div>
            <div class="gsc-metric-chip">
              <small>Avg. CTR</small>
              <strong>${escapeHtml(project.gscReport.ctr)}</strong>
            </div>
            <div class="gsc-metric-chip">
              <small>Avg. Position</small>
              <strong class="highlight-teal">${escapeHtml(project.gscReport.position)}</strong>
            </div>
          </div>
        </div>
      `;
    } else {
      DOM.modalGscSection.innerHTML = '';
    }
  }

  // All exact deliverables completed by Sri Vidya
  DOM.modalWorkList.innerHTML = project.myWorkList.map(step => `
    <li>${escapeHtml(step)}</li>
  `).join('');

  DOM.modalTools.innerHTML = project.toolsUsed.map(tool => `
    <span>${escapeHtml(tool)}</span>
  `).join('');

  DOM.modalSummary.textContent = project.workSummary;

  if (project.url) {
    DOM.modalWebsiteRow.innerHTML = `
      <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer" class="btn-primary-glow" style="padding: 10px 18px; font-size: 12.5px;">
        <span>Visit Live Website ↗</span>
      </a>
    `;
  } else {
    DOM.modalWebsiteRow.innerHTML = '';
  }

  DOM.caseStudyModal.style.display = 'flex';
  DOM.caseStudyModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

function closeCaseStudyModal() {
  if (!DOM.caseStudyModal) return;
  DOM.caseStudyModal.style.display = 'none';
  DOM.caseStudyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ==========================================================================
// 8. CAPABILITY TABS & TOOLKIT
// ==========================================================================
function initSkillMatrix() {
  DOM.skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.skillCat;

      DOM.skillCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initToolkitMarquee() {
  DOM.toolChips.forEach(chip => {
    chip.addEventListener('mouseenter', () => {
      const tip = chip.dataset.tip;
      if (tip && DOM.toolTooltip) {
        DOM.toolTooltip.textContent = tip;
      }
    });

    chip.addEventListener('mouseleave', () => {
      if (DOM.toolTooltip) {
        DOM.toolTooltip.textContent = 'Hover over any tool to view how I use it in my daily work';
      }
    });
  });
}

// ==========================================================================
// 9. MOBILE NAVIGATION & FORM
// ==========================================================================
function initMobileNavigation() {
  if (!DOM.mobileToggle || !DOM.mobileDrawer) return;

  DOM.mobileToggle.addEventListener('click', () => {
    const isOpen = DOM.mobileDrawer.classList.toggle('open');
    DOM.mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  DOM.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      DOM.mobileDrawer.classList.remove('open');
      DOM.mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

window.handleFormSubmit = function() {
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending Message...</span>';
  }

  setTimeout(() => {
    if (DOM.contactForm) {
      DOM.contactForm.reset();
    }
    if (DOM.formSuccessMessage) {
      DOM.formSuccessMessage.style.display = 'flex';
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Message Sent Successfully ✓</span>';
    }
  }, 750);
};

// ==========================================================================
// 10. UTILITIES
// ==========================================================================
function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}
