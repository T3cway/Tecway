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
    description: 'Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions.',
    sameAs: [
      // Add social media profiles here when available
      // 'https://twitter.com/tecway',
      // 'https://linkedin.com/company/tecway',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@tecway.dev',
      availableLanguage: ['English', 'Arabic'],
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
 * Get full URL for a path
 */
export function getFullUrl(path) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

