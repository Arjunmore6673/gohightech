// goHighTech.in — Agency Content Configuration
// Edit this file to update site content across all sections.

export const AGENCY = {
  // ─── Brand ───────────────────────────────────────────────────────────────
  brand: {
    name: 'goHighTech',
    domain: 'goHighTech.in',
    tagline: 'Build. Launch. Dominate.',
    subTagline:
      'We craft premium Android, iOS & Web applications that scale with your business.',
    description:
      'goHighTech is a full-service IT agency specializing in building cutting-edge mobile and web applications. From idea to App Store, we turn your vision into a digital product that users love.',
    email: 'hello@gohightech.in',
    phone: '+91-7066064461',
    location: 'Pune, Maharashtra, India',
    founded: '2024',
    social: {
      linkedin: 'https://linkedin.com/company/gohightech',
      twitter: 'https://twitter.com/gohightech',
      github: 'https://github.com/gohightech',
      instagram: 'https://instagram.com/gohightech.in',
    },
  },

  // ─── Navigation ──────────────────────────────────────────────────────────
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Our Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ],

  // ─── Stats / Hero Numbers ─────────────────────────────────────────────────
  stats: [
    { value: '7+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '1M+', label: 'Users Reached' },
    { value: '98%', label: 'Client Satisfaction' },
  ],

  // ─── Services ────────────────────────────────────────────────────────────
  services: [
    {
      id: 'android',
      icon: 'android',
      title: 'Android Development',
      shortDesc: 'Native & hybrid Android apps built to perform.',
      description:
        'We build blazing-fast, robust Android applications using both native Java/Kotlin and React Native. From Google Play Store submissions to deep device integrations, we handle it all.',
      features: [
        'Native Android (Java / Kotlin)',
        'React Native cross-platform',
        'Google Play Store deployment',
        'Push notifications & real-time features',
        'Offline-first architecture',
        'In-app purchases & payment gateways',
      ],
      color: 'from-green-500 to-emerald-600',
      badge: 'Most Popular',
    },
    {
      id: 'ios',
      icon: 'apple',
      title: 'iOS Development',
      shortDesc: 'Polished iOS apps for iPhone & iPad.',
      description:
        'From Swift-native to React Native, we craft premium iOS experiences that Apple users expect. We handle App Store submission, guidelines compliance, and TestFlight distribution.',
      features: [
        'Swift / SwiftUI native development',
        'React Native cross-platform',
        'Apple App Store submission',
        'Push notifications (APNs)',
        'Apple Pay & IAP integration',
        'Accessibility & Dark Mode support',
      ],
      color: 'from-gray-700 to-slate-900',
      badge: null,
    },
    {
      id: 'web',
      icon: 'globe',
      title: 'Web App Development',
      shortDesc: 'Full-stack web apps that scale to millions.',
      description:
        'We architect and build high-performance web applications using React.js, Next.js, and Node.js. From landing pages to complex SaaS dashboards, our front-end and back-end teams deliver together.',
      features: [
        'React.js / Next.js frontend',
        'Node.js / Spring Boot backend',
        'REST & GraphQL APIs',
        'AWS / GCP cloud deployment',
        'CI/CD pipelines',
        'Performance & SEO optimization',
      ],
      color: 'from-violet-600 to-purple-700',
      badge: 'Full-Stack',
    },
    {
      id: 'ui-ux',
      icon: 'palette',
      title: 'UI/UX Design',
      shortDesc: 'Designs users love and converts visitors into customers.',
      description:
        'Our designers collaborate with developers to create beautiful, intuitive interfaces backed by user research. We deliver Figma prototypes and pixel-perfect implementations.',
      features: [
        'User research & wireframing',
        'Figma design systems',
        'Responsive & accessible UI',
        'Design handoff to developers',
        'Brand identity & style guides',
        'A/B testing support',
      ],
      color: 'from-pink-500 to-rose-600',
      badge: null,
    },
    {
      id: 'cloud',
      icon: 'cloud',
      title: 'Cloud & DevOps',
      shortDesc: 'Deploy faster with bulletproof infrastructure.',
      description:
        'We set up cloud infrastructure on AWS and GCP, configure CI/CD pipelines, containerize applications with Docker & Kubernetes, and ensure 99.9% uptime for your products.',
      features: [
        'AWS / GCP cloud setup',
        'Docker & Kubernetes',
        'CI/CD with GitHub Actions / Jenkins',
        'Auto-scaling & load balancing',
        'Monitoring & Sentry alerts',
        'Database management & backups',
      ],
      color: 'from-sky-500 to-blue-600',
      badge: null,
    },
    {
      id: 'consulting',
      icon: 'lightbulb',
      title: 'Tech Consulting',
      shortDesc: 'Expert guidance to make the right tech decisions.',
      description:
        'Not sure which stack to choose? We audit your existing codebase, assess your requirements, and deliver a clear technology roadmap aligned with your business goals.',
      features: [
        'Technology stack assessment',
        'Architecture review & planning',
        'Code quality audits',
        'Performance optimization',
        'Team mentorship & training',
        'Roadmap & sprint planning',
      ],
      color: 'from-amber-500 to-orange-600',
      badge: null,
    },
  ],

  // ─── Why Choose Us ─────────────────────────────────────────────────────
  whyUs: [
    {
      icon: 'trophy',
      title: '7+ Years in the Field',
      desc: 'Real-world battle-tested experience shipping apps to 1M+ users across fintech, healthcare, e-commerce, and sports domains.',
    },
    {
      icon: 'rocket',
      title: 'Fast Delivery',
      desc: 'We move at startup speed. Agile sprints, daily standups, weekly demos — so you always know where your project stands.',
    },
    {
      icon: 'shield',
      title: 'Quality You Can Trust',
      desc: '75%+ automated test coverage, rigorous code reviews, and Sentry monitoring ensure your app never lets users down.',
    },
    {
      icon: 'globe',
      title: 'Global Reach, Local Heart',
      desc: 'Delivered 5 international country launches. We understand compliance, localisation, and building for global scale.',
    },
    {
      icon: 'users',
      title: 'Dedicated Collaboration',
      desc: 'You get a direct line to the engineers building your product — no middlemen, no outsourcing, no surprises.',
    },
    {
      icon: 'chart',
      title: 'Results-Driven',
      desc: 'We optimise for outcomes: 35% bug reduction, 25% perf improvement, and 98% client satisfaction across our portfolio.',
    },
  ],

  // ─── Portfolio / Work ──────────────────────────────────────────────────
  work: [
    {
      title: '!t junct!on',
      category: 'Website',
      tags: ['Web Design', 'Responsive', 'Netlify'],
      description:
        'Designed and launched a responsive website for !t junct!on, highlighting their services and local Pune presence.',
      metrics: ['Netlify Deployment', 'Local SEO', 'Pune Business'],
      color: 'from-sky-500 to-indigo-600',
      icon: '💻',
      address: 'Sai Chowk, Shastri Nagar, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411017',
      url: 'https://itjunction.netlify.app/',
    },
    {
      title: 'Mahaveer Furniture',
      category: 'Website',
      tags: ['E-commerce', 'Responsive', 'Netlify'],
      description:
        'Built a polished website for Mahaveer Furniture, presenting product lines and store location for customers in Pune.',
      metrics: ['Netlify Deployment', 'Furniture Brand', 'Storefront Website'],
      color: 'from-amber-500 to-orange-500',
      icon: '🛋️',
      address: 'Gut number 1614, Dehu Alandi road Chikhali, Pune Maharashtra 411062',
      url: 'https://mahaveerfurniture.netlify.app/',
    },
    {
      title: 'Western Union',
      category: 'Web & Mobile',
      tags: ['React.js', 'React Native', 'TypeScript', 'GraphQL'],
      description:
        'Global money transfer platform serving 1M+ users. Delivered 5 country launches across LATAM & APAC with WCAG 2.1 AA compliance.',
      metrics: ['1M+ Users', '5 Country Launches', '35% Bug Reduction'],
      color: 'from-yellow-500 to-orange-500',
      icon: '💸',
    },
    {
      title: 'CampFire Enterprise',
      category: 'Web App',
      tags: ['React.js', 'Redux', 'TypeScript', 'Jest'],
      description:
        'Enterprise collaboration platform replacing a legacy monolith. 200+ tickets delivered with 98% on-time rate.',
      metrics: ['200+ Tickets', '98% On-Time', '75% Test Coverage'],
      color: 'from-red-500 to-rose-600',
      icon: '🔥',
    },
    {
      title: 'Roar Sports',
      category: 'Mobile App',
      tags: ['React Native', 'Redux', 'Firebase'],
      description:
        'Cross-platform sports app ranked top 100 in App Store. Published on both Google Play and Apple App Store.',
      metrics: ['5,000+ Downloads', '4.2★ Rating', 'Top 100 App Store'],
      color: 'from-green-500 to-teal-600',
      icon: '🏆',
    },
    {
      title: 'Sehet Healthcare',
      category: 'Mobile App',
      tags: ['React Native', 'Firebase', 'Agora', 'Paytm'],
      description:
        'Telemedicine app with video consultation, payment gateway, and push notifications. Built with a team of 6 engineers.',
      metrics: ['Video Calling', 'Paytm Payments', 'Push Notifications'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🏥',
    },
    {
      title: 'Mobiurja Fuel Delivery',
      category: 'Mobile App',
      tags: ['Flutter', 'Dart', 'Provider'],
      description:
        'On-demand fuel delivery app with multi-language support. Published on both stores with end-to-end delivery flow.',
      metrics: ['Multi-Language', 'Both Stores', 'Full Delivery Flow'],
      color: 'from-amber-500 to-yellow-500',
      icon: '⛽',
    },
    {
      title: 'Kommunity Platform',
      category: 'Full-Stack',
      tags: ['Spring Boot', 'React Native', 'Angular', 'Hibernate'],
      description:
        'Full-stack community platform with Spring Boot microservices, React Native mobile, and Angular web frontend.',
      metrics: ['Microservices', 'Cross-Platform', 'REST APIs'],
      color: 'from-violet-500 to-purple-700',
      icon: '🌐',
    },
  ],

  // ─── Development Process ───────────────────────────────────────────────
  process: [
    {
      step: '01',
      title: 'Discovery & Planning',
      desc: 'We deep-dive into your idea, define requirements, map user journeys, and document a technical roadmap. No surprises, ever.',
      icon: 'search',
    },
    {
      step: '02',
      title: 'UI/UX Design',
      desc: 'Our designers produce wireframes, Figma prototypes, and a complete design system. You approve before a single line of code is written.',
      icon: 'palette',
    },
    {
      step: '03',
      title: 'Agile Development',
      desc: 'Two-week sprints with daily standups and bi-weekly demos. We integrate continuously and ship working software every iteration.',
      icon: 'code',
    },
    {
      step: '04',
      title: 'QA & Testing',
      desc: 'Automated tests, manual QA, performance audits, and accessibility checks ensure your product is solid before launch.',
      icon: 'shield',
    },
    {
      step: '05',
      title: 'Launch & Deploy',
      desc: 'We handle App Store submissions, cloud deployments, DNS, and post-launch monitoring so your launch day goes smoothly.',
      icon: 'rocket',
    },
    {
      step: '06',
      title: 'Ongoing Support',
      desc: 'Post-launch is where we shine — bug fixes, feature updates, performance tuning, and analytics-driven improvements.',
      icon: 'support',
    },
  ],

  // ─── Team ─────────────────────────────────────────────────────────────
  team: [
    {
      name: 'Arjun More',
      role: 'Founder & Lead Engineer',
      bio: 'Full-Stack Engineer with 7+ years. AWS Certified. Built apps for Western Union, Metacube & more. Expert in React, React Native & Spring Boot.',
      skills: ['React.js', 'React Native', 'Next.js', 'Spring Boot', 'AWS'],
      linkedin: 'https://linkedin.com/in/arjun-more',
      avatar: 'AM',
      gradient: 'from-violet-600 to-purple-700',
    },
  ],

  // ─── Tech Stack Used ────────────────────────────────────────────────────
  techStack: [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  ],

  // ─── Testimonials ─────────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "goHighTech delivered our React Native app on time and exceeded expectations. The code quality and attention to detail were outstanding.",
      author: 'Rajesh Kumar',
      role: 'CTO, SportsConnect India',
      avatar: 'RK',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      quote:
        "Professional team, clean architecture, and fantastic communication throughout. Our web app performance improved by 25% after launch.",
      author: 'Priya Sharma',
      role: 'Product Manager, HealthFirst',
      avatar: 'PS',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      quote:
        "From design to deployment, they handled everything. Our e-commerce app hit 5,000 downloads in the first month!",
      author: 'Mohammed Al-Rashid',
      role: 'Founder, QuickShop ME',
      avatar: 'MA',
      gradient: 'from-amber-500 to-orange-500',
    },
  ],

  // ─── FAQ ───────────────────────────────────────────────────────────────
  faq: [
    {
      q: 'How long does it take to build a mobile app?',
      a: 'A typical MVP takes 8–12 weeks. A full-featured product is 3–6 months depending on complexity. We provide accurate timelines during Discovery.',
    },
    {
      q: 'Do you build for both Android and iOS?',
      a: 'Yes! We build native Android (Java/Kotlin), native iOS (Swift), and cross-platform apps with React Native — your choice based on budget and needs.',
    },
    {
      q: 'How much does app development cost?',
      a: 'MVPs start at ₹3–5L. Full-featured apps range ₹8–20L+ depending on features, platforms, and integrations. Contact us for a custom quote.',
    },
    {
      q: 'Will I own the source code?',
      a: 'Absolutely. Full source code ownership is transferred to you upon project completion. No lock-in, ever.',
    },
    {
      q: 'Do you provide post-launch support?',
      a: 'Yes, we offer flexible retainer plans for ongoing support, bug fixes, feature updates, and performance monitoring.',
    },
    {
      q: 'What is your development process?',
      a: 'We follow an Agile methodology with 2-week sprints, daily standups, and bi-weekly demos. You always know what is being built and when.',
    },
  ],
};
