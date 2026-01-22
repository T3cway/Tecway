/**
 * SEO utility functions for structured data and metadata
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tecway.dev';

/**
 * Generate Organization JSON-LD schema
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tecway',
    url: SITE_URL,
    logo: `${SITE_URL}/Tecway.png`,
    description: 'Full-service tech agency based in Khartoum, Sudan, specializing in web applications, mobile apps, AI chatbots, custom ERP systems, and custom software solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Khartoum',
      addressCountry: 'SD',
      addressRegion: 'Khartoum',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.5007,
      longitude: 32.5599,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Sudan',
      },
      {
        '@type': 'City',
        name: 'Khartoum',
      },
      {
        '@type': 'GeoRegion',
        name: 'Middle East',
      },
      {
        '@type': 'GeoRegion',
        name: 'Africa',
      },
    ],
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'ERP Systems',
      'AI Chatbots',
      'Custom Software',
      'UI/UX Design',
      'Flutter',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Enterprise Solutions',
    ],
    sameAs: [
      // Add social media profiles here when available
      // 'https://twitter.com/tecway',
      // 'https://linkedin.com/company/tecway',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'm.abubaker@tecway.dev',
      availableLanguage: ['English', 'Arabic'],
      areaServed: ['SD', 'Khartoum'],
    },
  };
}

/**
 * Generate WebSite JSON-LD schema
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tecway',
    url: SITE_URL,
    description: 'Cutting-edge digital solutions for web applications, mobile apps, AI chatbots, and custom software.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/projects?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate FAQPage JSON-LD schema
 */
export function getFAQPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Project/PortfolioItem JSON-LD schema
 */
export function getProjectSchema(project) {
  const imageUrl = project.images && project.images.length > 0
    ? `${SITE_URL}/${project.images[0].startsWith('/') ? project.images[0].slice(1) : project.images[0]}`
    : `${SITE_URL}/Tecway.png`;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.longDescription || project.description,
    image: imageUrl,
    datePublished: project.date,
    creator: {
      '@type': 'Organization',
      name: 'Tecway',
      url: SITE_URL,
    },
    ...(project.client && {
      client: {
        '@type': 'Organization',
        name: project.client,
      },
    }),
    ...(project.techStack && project.techStack.length > 0 && {
      keywords: project.techStack.join(', '),
    }),
    url: `${SITE_URL}/projects/${project.slug}`,
  };
}

/**
 * Generate LocalBusiness JSON-LD schema
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#business`,
    name: 'Tecway',
    image: `${SITE_URL}/Tecway.png`,
    url: SITE_URL,
    telephone: '+249', // Update with actual phone number if available
    email: 'm.abubaker@tecway.dev',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Khartoum',
      addressLocality: 'Khartoum',
      addressRegion: 'Khartoum',
      postalCode: '',
      addressCountry: 'SD',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.5007,
      longitude: 32.5599,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 15.5007,
        longitude: 32.5599,
      },
      geoRadius: {
        '@type': 'Distance',
        name: 'Worldwide',
      },
    },
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'USD, SDG',
    description: 'Full-service tech agency in Khartoum, Sudan, providing mobile applications, websites, custom ERP systems, AI chatbots, and digital solutions.',
  };
}

/**
 * Generate Service JSON-LD schema
 */
export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Tecway',
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Khartoum',
        addressCountry: 'SD',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sudan',
    },
    ...(service.offers && {
      offers: {
        '@type': 'Offer',
        ...service.offers,
      },
    }),
    ...(service.category && {
      category: service.category,
    }),
  };
}

/**
 * Generate ItemList schema for services
 */
export function getServicesListSchema(services) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tecway Services',
    description: 'Complete list of services offered by Tecway in Khartoum, Sudan',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Tecway',
        },
      },
    })),
  };
}

/**
 * Generate HowTo schema for development process
 */
export function getHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Tecway Development Process',
    description: 'Step-by-step development process used by Tecway for building mobile applications, websites, and custom software systems',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Requirement Analysis',
        text: 'We analyze your business requirements, understand your goals, and define the project scope and specifications.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'UI/UX Design',
        text: 'Our design team creates wireframes, prototypes, and full design systems to ensure an intuitive and visually appealing user experience.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Development',
        text: 'We develop your mobile app, website, or system using the best technologies (Flutter, React, Next.js, Node.js, Python) tailored to your needs.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Testing',
        text: 'Comprehensive testing is performed to ensure functionality, performance, security, and user experience meet the highest standards.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Deployment',
        text: 'We handle cloud hosting, backend setup, CI/CD pipelines, and deployment to production environments (AWS, Supabase, Firebase, Vercel).',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Maintenance and Support',
        text: 'We provide ongoing maintenance, updates, bug fixes, and feature extensions to keep your system running smoothly.',
      },
    ],
  };
}

/**
 * Get full URL for a path
 */
export function getFullUrl(path) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

