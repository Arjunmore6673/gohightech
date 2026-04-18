// Portfolio Configuration — Arjun More
// All data sourced from Arjun_more.txt resume. Edit here to update the portfolio.

export const MY_DATA = {
  // ─── Personal Details ──────────────────────────────────────────────────────
  personalDetails: {
    name: 'Arjun More',
    title: 'Frontend Engineer',
    mail: 'rockajm@gmail.com',
    number: '+91-7066064461',
    findMe: 'Pune, Maharashtra, India',
    linkedIn: 'https://linkedin.com/in/arjun-more',
    github: '', // add if available
    summary:
      'Full-Stack Software Engineer with 7+ years of experience building scalable web and mobile applications serving 1M+ users across multiple countries. Strong expertise in React.js, React Native, Android Native (Java), Next.js, and Spring Boot, with proven success delivering high-impact products in fintech and enterprise domains. Skilled in microservices, REST APIs, GraphQL, AWS cloud deployment (Certified Cloud Practitioner), and clean architecture. Track record of reducing production bugs by 35%, improving performance by 25%, and accelerating feature delivery across cross-functional Agile teams.',
    canDo: [
      'Full-Stack Engineer',
      'Frontend Specialist',
      'Mobile App Developer',
      'React & React Native Expert',
    ],
    mySelf: [
      "I'm a Full-Stack Software Engineer with 7+ years of experience crafting scalable web and mobile applications that serve 1M+ users globally.",
      'Specialized in React.js, React Native, Next.js, and Spring Boot — I thrive at the intersection of clean code, great UX, and robust architecture.',
      'Passionate about mentoring engineers, solving hard frontend challenges, and shipping products that make a real impact.',
    ],
    social: [
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        link: 'https://linkedin.com/in/arjun-more',
      },
    ],
  },

  // ─── Tech Skills ───────────────────────────────────────────────────────────
  techStack: {
    frontend: {
      title: 'Frontend',
      tech: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
    },
    mobile: {
      title: 'Mobile',
      tech: [
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Android (Java)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'Expo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
      ],
    },
    stateManagement: {
      title: 'State Management',
      tech: [
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Redux Saga', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Context API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      ],
    },
    backend: {
      title: 'Backend',
      tech: [
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      ],
    },
    cloudDevops: {
      title: 'Cloud & DevOps',
      tech: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      ],
    },
    databases: {
      title: 'Databases',
      tech: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      ],
    },
    testing: {
      title: 'Testing',
      tech: [
        { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
        { name: 'React Testing Library', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      ],
    },
    tools: {
      title: 'Tools',
      tech: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      ],
    },
  },

  // ─── Skills (flat list for display) ───────────────────────────────────────
  skillCategories: [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'WCAG 2.1 AA'],
    },
    {
      category: 'Mobile',
      skills: ['React Native', 'Android Native (Java)', 'Expo', 'iOS/Android Development', 'Cross-Platform Apps'],
    },
    {
      category: 'State Management',
      skills: ['Redux', 'Redux Saga', 'Redux Thunk', 'Context API'],
    },
    {
      category: 'Backend',
      skills: ['Spring Boot', 'Java', 'REST APIs', 'GraphQL', 'Microservices Architecture'],
    },
    {
      category: 'Testing',
      skills: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing', 'TDD'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Firebase Firestore', 'Firebase Realtime DB', 'Firebase Auth', 'NoSQL'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (Certified)', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Jenkins', 'GitHub Actions'],
    },
    {
      category: 'Build Tools',
      skills: ['Webpack', 'Babel', 'Metro', 'Lerna', 'Monorepo Architecture'],
    },
    {
      category: 'Tools & Methodologies',
      skills: ['Git', 'Postman', 'Jira', 'Confluence', 'Sentry', 'Agile/Scrum', 'Clean Architecture'],
    },
  ],

  // ─── Professional Experience ───────────────────────────────────────────────
  experience: {
    title: 'Work Experience',
    list: [
      {
        company: 'Western Union',
        designation: 'Associate Developer',
        startDate: 'April 2023',
        endDate: 'Present',
        location: 'Pune, India',
        img: '',
        highlights: [
          'Built scalable web and mobile apps using React.js, React Native, and TypeScript in a Lerna monorepo serving 1M+ users globally.',
          'Developed Redux Saga workflows for complex async state management, reducing data-fetching errors by 20%.',
          'Delivered 5 successful country launches across LATAM and APAC regions with regulatory compliance and localization.',
          'Created 20+ reusable React Native components with unit tests, improving feature rollout speed by 15%.',
          'Reduced production bugs by 35% via rigorous Jest and React Testing Library testing and structured code reviews.',
          'Integrated REST and GraphQL APIs using Axios and Apollo Client across 50+ endpoints.',
          'Achieved WCAG 2.1 AA accessibility compliance across 15+ screens.',
          'Mentored junior developers through code reviews and onboarding, reducing ramp-up time by 30%.',
        ],
        techStack: ['React.js', 'React Native', 'TypeScript', 'Redux Saga', 'GraphQL', 'Apollo Client', 'Jest', 'Lerna', 'Monorepo'],
      },
      {
        company: 'Metacube Software Pvt. Ltd.',
        designation: 'Software Engineer',
        startDate: 'July 2021',
        endDate: 'April 2023',
        location: 'Pune, India',
        img: '',
        highlights: [
          'Built responsive, desktop-first UI with React.js and TypeScript, improving page load performance by 25%.',
          'Integrated RESTful APIs using Redux Thunk, React Hooks, and structured JSON data handling across 10+ modules.',
          'Delivered 200+ Jira tickets covering features, enhancements, and bug fixes — 98% on-time delivery rate.',
          'Achieved 75%+ code coverage with comprehensive unit tests using Jest and React Testing Library.',
          'Collaborated with international clients across 3 time zones, maintaining 95%+ client satisfaction scores.',
          'Participated in Agile ceremonies: sprint planning, retrospectives, and stand-ups in a 10-member team.',
        ],
        techStack: ['React.js', 'TypeScript', 'Redux', 'Redux Thunk', 'Jest', 'React Testing Library', 'Agile'],
      },
      {
        company: 'Chirpn IT Solution',
        designation: 'Associate Developer L1 — Mobile Hybrid',
        startDate: 'May 2020',
        endDate: 'July 2021',
        location: 'Pune, India',
        img: '',
        highlights: [
          'Developed 5 React Native cross-platform apps (iOS & Android) across e-commerce, sports, and utility domains.',
          'Integrated Android Native (Java) modules within React Native for performance-critical platform-level features.',
          'Designed and deployed Spring Boot REST APIs for a sports platform supporting 5,000+ active users on AWS.',
          'Released apps on Google Play Store and Apple App Store — achieved 5,000+ downloads and 4.2+ star ratings.',
          'Implemented in-app payments with Razorpay and Paytm, and real-time chat via Firebase Realtime Database.',
          'Built secure authentication flows with Firebase Auth and token-based API integration.',
          'Deployed on AWS EC2 and S3 ensuring 99.5% uptime and horizontal scalability.',
        ],
        techStack: ['React Native', 'Android (Java)', 'Spring Boot', 'Firebase', 'AWS', 'Razorpay', 'Paytm'],
      },
      {
        company: 'WeTech Digital',
        designation: 'Software Engineer',
        startDate: 'April 2019',
        endDate: 'March 2020',
        location: 'Pune, India',
        img: '',
        highlights: [
          'Built scalable Spring Boot REST APIs consumed by React Native mobile applications.',
          'Contributed to microservices architecture with clear separation of concerns.',
          'Maintained React Native apps with Redux, reducing crash rate by 30%.',
          'Implemented CI/CD workflows with Git and Jenkins, reducing deployment time by 40%.',
          'Improved test coverage from 40% to 70%, significantly reducing production incidents.',
        ],
        techStack: ['Spring Boot', 'React Native', 'Redux', 'Jenkins', 'Git', 'Microservices'],
      },
    ],
  },

  // ─── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      title: 'Western Union Money Transfer',
      company: 'Western Union',
      period: 'April 2023 – Present',
      desc: 'Developed new features for the CHARON TEAM (Canada) targeting React.js and React Native (Android & iOS). Delivered 5 country launches across LATAM and APAC with full accessibility and localization compliance.',
      highlights: [
        'Monorepo architecture with Lerna serving 1M+ users globally',
        'Redux Saga for complex async state — 20% reduction in data-fetching errors',
        'GraphQL + Apollo Client integration across 50+ API endpoints',
        'WCAG 2.1 AA accessibility on 15+ screens',
      ],
      images: [],
      link: '',
      techStack: ['React.js', 'React Native', 'TypeScript', 'Redux Saga', 'GraphQL', 'Lerna'],
    },
    {
      title: 'CampFire (Enterprise Web App)',
      company: 'Metacube Software',
      period: 'July 2021 – April 2023',
      desc: 'Replaced a legacy monolithic web application with a custom responsive React.js + Redux application. Delivered 200+ Jira tickets with a 98% on-time delivery rate.',
      highlights: [
        'Redux Thunk middleware for REST API integration',
        'Media Queries for multi-device responsiveness',
        '75%+ Jest test coverage',
        'Collaborated with international clients across 3 time zones',
      ],
      images: [],
      link: '',
      techStack: ['React.js', 'Redux', 'Redux Thunk', 'TypeScript', 'Jest'],
    },
    {
      title: 'Roar Sports',
      company: 'Chirpn IT Solution',
      period: 'May 2020 – July 2021',
      desc: 'A sports React Native application released on both Play Store and App Store. Reached top 100 in the App Store.',
      highlights: [
        'Cross-platform iOS & Android development',
        'Redux state management',
        '5,000+ downloads, 4.2+ star rating',
        'REST API integration with third-party libraries',
      ],
      images: [],
      link: 'https://play.google.com/store/apps/details?id=com.chirpn.roar',
      techStack: ['React Native', 'Redux', 'Firebase'],
    },
    {
      title: 'Sehet — Healthcare App',
      company: 'Chirpn IT Solution',
      period: 'May 2020 – July 2021',
      desc: 'Healthcare application with video consultation and integrated payment. Collaborated with a team of 6 engineers and daily client communication.',
      highlights: [
        'Video calling via Agora library',
        'Paytm payment integration',
        'Firebase push notifications',
        'UI/UX collaboration with designers',
      ],
      images: [],
      link: 'https://play.google.com/store/apps/details?id=com.sehet',
      techStack: ['React Native', 'Firebase', 'Agora', 'Paytm'],
    },
    {
      title: 'Mobiurja — Fuel Delivery App',
      company: 'Chirpn IT Solution',
      period: 'May 2020 – July 2021',
      desc: 'On-demand fuel delivery application with multi-language support and Provider state management.',
      highlights: [
        'Provider state management',
        'Localization for multiple languages',
        'End-to-end delivery flow',
        'Play Store & App Store release',
      ],
      images: [],
      link: 'https://play.google.com/store/apps/details?id=com.chirpn.mobiurja',
      techStack: ['Flutter', 'Dart', 'Provider'],
    },
    {
      title: 'Sportly — Basketball App',
      company: 'Chirpn IT Solution',
      period: 'May 2020 – July 2021',
      desc: 'Basketball platform mobile app. Worked on Profile and Activity modules, debugging, and architecture discussions.',
      highlights: [
        'React Native cross-platform',
        'REST API integration',
        'Spring Boot backend APIs',
        'Play Store release',
      ],
      images: [],
      link: 'https://play.google.com/store/apps/details?id=com.Sportly.Me',
      techStack: ['React Native', 'Spring Boot'],
    },
    {
      title: 'Kommunity App',
      company: 'WeTech Digital',
      period: 'April 2019 – March 2020',
      desc: 'Full-stack application with Spring Boot microservices REST APIs consumed by a React Native app and Angular 7 frontend.',
      highlights: [
        'Hibernate ORM with Spring Boot',
        'Spring Validation for form validation',
        'Git & BitBucket version control',
        'Modular microservices architecture',
      ],
      images: [],
      link: '',
      techStack: ['Spring Boot', 'React Native', 'Angular 7', 'Hibernate'],
    },
    {
      title: 'Vehicle Management System',
      company: 'WeTech Digital',
      period: 'April 2019 – March 2020',
      desc: '3 internal Android Native applications for Kothari Hyundai — test drive booking, outdoor vehicle tracking, and sold vehicle management with photo capture and automated messaging.',
      highlights: [
        'Android Native (Java)',
        'Photo capture via camera API',
        'Automated email and SMS dispatch',
        'Internal enterprise deployment',
      ],
      images: [],
      link: '',
      techStack: ['Android Native', 'Java', 'Firebase'],
    },
  ],

  // ─── Certifications & Achievements ────────────────────────────────────────
  certifications: [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      credentialId: '85fbb7603d664e4d8bcc79f029007c5e',
      icon: 'aws',
    },
    {
      title: 'Software Architecture and Design of Modern Large Scale Systems',
      issuer: 'Udemy',
      credentialId: '',
      icon: 'udemy',
    },
  ],

  // ─── Education ─────────────────────────────────────────────────────────────
  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Pune University',
      year: '2016',
      icon: 'graduation',
    },
  ],

  // ─── Languages ─────────────────────────────────────────────────────────────
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Marathi', level: 'Native' },
  ],

  // ─── Stats / Key Metrics ──────────────────────────────────────────────────
  stats: [
    { value: '7+', label: 'Years Experience' },
    { value: '1M+', label: 'Users Served' },
    { value: '35%', label: 'Bug Reduction' },
    { value: '5', label: 'Country Launches' },
  ],
};
