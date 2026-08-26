export type Language = 'en' | 'es';

export interface TranslationContent {
  nav: {
    portfolio: string;
    linkedin: string;
    email: string;
  };
  hero: {
    name: string;
    role: string;
    description: string;
  };
  sections: {
    experience: string;
    expertise: string;
    education: string;
    featured: string;
    viewProject: string;
    readMore: string;
    collapse: string;
  };
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    summary?: string;
    link: string;
    index: string;
    alwaysExpanded?: boolean;
  }[];
  skills: string[];
  footer: {
    location: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      portfolio: "Portfolio 2026",
      linkedin: "LinkedIn",
      email: "Email"
    },
    hero: {
      name: "Arturo Perez",
      role: "E-Commerce & Product Data Operations",
      description: "I run e-commerce and product data operations for two industrial B2B brands: a ~9,000-SKU catalog moving through an ERP, a PIM and a Magento 2 storefront, plus the email marketing and technical SEO around it. What makes me unusual is that I build the tooling instead of doing the work by hand."
    },
    sections: {
      experience: "Experience",
      expertise: "Expertise",
      education: "Education",
      featured: "Featured",
      viewProject: "View Live Project",
      readMore: "Read More",
      collapse: "Collapse"
    },
    experience: [
      {
        role: "Marketing Manager, E-Commerce & Product Data",
        company: "Roy Turk Industrial Sales / Crown Chemical",
        period: "2026 — Present",
        description: "Sole owner of e-commerce and product data operations for two industrial B2B brands, reporting to the President. Built a catalog-health platform in Python (~2,300 lines) reconciling ERP, PIM and supplier feeds, plus an LLM content pipeline generating marketing copy across thousands of SKUs. Found and fixed 3,223 products that were live but invisible to customers."
      },
      {
        role: "Marketing Specialist",
        company: "One Iota Performance Inc.",
        period: "May 2023 — Oct 2023",
        description: "Led vibrant social media campaigns across Twitter and Instagram, achieving a 20% boost in user engagement. Managed website optimization, enhancing UI/UX through consistent messaging and visuals."
      },
      {
        role: "Marketing Team",
        company: "Continental Lifestyle Medicine",
        period: "Mar 2021 — Apr 2022",
        description: "Tasked with content creation and strategic initiatives to boost brand presence. Developed detailed performance reports and presentations to support data-driven strategy refinement."
      },
      {
        role: "Marketing Coordinator — BMW & MINI",
        company: "Inchcape Américas",
        period: "Nov 2019 — Mar 2021",
        description: "Pivotal role in content creation and enhancement for global automotive brands. Resulted in significant increases in brand visibility and flawless execution of content proposals."
      },
      {
        role: "Logistics Coordinator",
        company: "Hytorc América Latina",
        period: "May 2018 — Nov 2019",
        description: "Coordinated global import shipments across air, sea, and land. Managed customs clearance and improved operational efficiency while ensuring high customer satisfaction."
      },
      {
        role: "Logistics (Internship)",
        company: "Hytorc América Latina",
        period: "Dec 2017 — May 2018",
        description: "Hands-on experience in coordinating inbound/outbound shipments, handling documentation, and supporting inventory management processes."
      },
      {
        role: "Marketing Communications Coordinator",
        company: "CEFRA",
        period: "Mar 2015 — Apr 2018",
        description: "Developed marketing strategies and managed digital platforms, resulting in increased brand credibility. Facilitated high-value networking and referral opportunities."
      },
      {
        role: "Logistics Assistant",
        company: "Pharma Solutions Peru",
        period: "Dec 2013 — Feb 2015",
        description: "Managed importation processes for cosmetic products, coordinating with international suppliers and freight forwarders to ensure accurate customs clearance."
      }
    ],
    education: [
      {
        degree: "Postgraduate Degree in Global Business Management - Specialization in Marketing",
        school: "Humber College - Toronto",
        period: "2022 — 2023",
        description: "Advanced study of strategic international operations and marketing analytics. Gained core competencies in Project Management, CRM systems, and data-driven Marketing Strategy."
      },
      {
        degree: "Bachelor of Arts in Marketing",
        school: "San Ignacio University - Miami",
        period: "2013 — 2018",
        description: "Focus on consumer behavior, brand management, and strategic market positioning within global contexts."
      },
      {
        degree: "Bachelor's Degree in International Business",
        school: "Universidad San Ignacio de Loyola - Peru",
        period: "2013 — 2019",
        description: "Comprehensive study of global trade, logistics infrastructure, and cross-border commercial dynamics."
      }
    ],
    projects: [
      {
        title: "KamayLab",
        description: "3D-product e-commerce storefront built and operated end to end, from catalog architecture and product data through checkout and deployment on Vercel.",
        link: "https://kamaylab.pe",
        index: "01",
        alwaysExpanded: true
      },
      {
        title: "Komorebi Hub",
        description: "My independent studio: e-commerce tooling, catalog automation and AI-visibility audits for small businesses. Site shipped in four languages.",
        link: "https://komorebihub.com",
        index: "02"
      },
      {
        title: "Tamago Pixel Timer",
        description: "A minimalist productivity tool built on the principles of Danshari. Stripping away the noise to focus on single-task efficiency through refined pixel art aesthetics.",
        link: "https://tamago-timer.vercel.app/",
        index: "03"
      },
      {
        title: "Strategic Email Build",
        description: "Responsive HTML email built for Acadia Pharmaceuticals' DAYBUE™ patient support program, optimized for accessibility and cross-client rendering. This build combines visual clarity with strategic content flow to guide healthcare professionals through key resources. Engineered with a hybrid design approach, ensuring flawless rendering across environments ranging from Outlook Classic to modern platforms like Gmail and Apple Mail.",
        summary: "Responsive HTML email built for Acadia Pharmaceuticals' DAYBUE™ patient support program, optimized for accessibility and cross-client rendering.",
        link: "https://parcel.io/e/4900f33d-396f-4526-b462-525a19d1d6d0?wrap=true",
        index: "04"
      },
      {
        title: "One Iota Brand Identity",
        description: "Developing a comprehensive brand design and visual language for One Iota, focusing on modern minimalism and digital-first architecture.",
        link: "https://arturjesus.webflow.io/portfolio/brand-design-identity-for-one-iota",
        index: "05"
      },
      {
        title: "Continental Lifestyle MD",
        description: "A strategic marketing and lifestyle platform design centered around premium experiences and high-end automotive aesthetics.",
        link: "https://arturjesus.webflow.io/portfolio/continental-lifestyle-md",
        index: "06"
      },
      {
        title: "Proof Restaurant Mail",
        description: "Direct response marketing and email architecture for high-end hospitality, blending culinary artistry with strategic communication.",
        link: "https://arturjesus.webflow.io/portfolio/proof-restaurant-mail",
        index: "07"
      },
      {
        title: "CEFRA Website Redesign",
        description: "Reimagining the digital presence for CEFRA through high-precision UI systems and improved user flow orchestration.",
        link: "https://arturjesus.webflow.io/portfolio/website-redesign-for-cefra",
        index: "08"
      }
    ],
    skills: [
      'Akeneo PIM',
      'Magento 2',
      'Python / pandas',
      'ERP Integration',
      'Email Marketing',
      'Technical SEO',
      'Google Analytics / GA4',
      'LLM Pipelines',
      'APIs Integration',
      'React / Vite'
    ],
    footer: {
      location: "Toronto — Canada",
      rights: "© 2026 Arturo Perez / E-Commerce & Product Data"
    }
  },
  es: {
    nav: {
      portfolio: "Portafolio 2026",
      linkedin: "LinkedIn",
      email: "Email"
    },
    hero: {
      name: "Arturo Perez",
      role: "Operaciones de E-Commerce y Datos de Producto",
      description: "Manejo las operaciones de e-commerce y datos de producto de dos marcas industriales B2B: un catálogo de ~9,000 SKUs que fluye por un ERP, un PIM y una tienda Magento 2, además del email marketing y el SEO técnico alrededor. Lo que me distingue es que construyo las herramientas en vez de hacer el trabajo a mano."
    },
    sections: {
      experience: "Experiencia",
      expertise: "Especialidades",
      education: "Educación",
      featured: "Destacados",
      viewProject: "Ver Proyecto",
      readMore: "Leer Más",
      collapse: "Colapsar"
    },
    experience: [
      {
        role: "Marketing Manager, E-Commerce y Datos de Producto",
        company: "Roy Turk Industrial Sales / Crown Chemical",
        period: "2026 — Presente",
        description: "Responsable único de las operaciones de e-commerce y datos de producto de dos marcas industriales B2B, reportando al Presidente. Construí una plataforma de salud del catálogo en Python (~2,300 líneas) que reconcilia ERP, PIM y catálogo de proveedor, más un pipeline de contenido con LLM para miles de SKUs. Detecté y corregí 3,223 productos publicados pero invisibles para el cliente."
      },
      {
        role: "Especialista en Marketing",
        company: "One Iota Performance Inc.",
        period: "May 2023 — Oct 2023",
        description: "Lideré campañas vibrantes en redes sociales como Twitter e Instagram, logrando un aumento del 20% en el compromiso de los usuarios. Gestioné la optimización del sitio web, mejorando la UI/UX mediante mensajes y visuales consistentes."
      },
      {
        role: "Equipo de Marketing",
        company: "Continental Lifestyle Medicine",
        period: "Mar 2021 — Abr 2022",
        description: "Encargado de la creación de contenido e iniciativas estratégicas para impulsar la presencia de la marca. Desarrollé informes de rendimiento detallados y presentaciones para apoyar el refinamiento de estrategias basadas en datos."
      },
      {
        role: "Coordinador de Marketing — BMW & MINI",
        company: "Inchcape Américas",
        period: "Nov 2019 — Mar 2021",
        description: "Rol fundamental en la creación y mejora de contenido para marcas automotrices globales. Resultó en aumentos significativos en la visibilidad de la marca y la ejecución impecable de propuestas de contenido."
      },
      {
        role: "Coordinador de Logística",
        company: "Hytorc América Latina",
        period: "May 2018 — Nov 2019",
        description: "Coordiné envíos de importación global por aire, mar y tierra. Gestioné el despacho de aduanas y mejoré la eficiencia operativa garantizando una alta satisfacción del cliente."
      },
      {
        role: "Logística (Prácticas)",
        company: "Hytorc América Latina",
        period: "Dic 2017 — May 2018",
        description: "Experiencia práctica en la coordinación de envíos entrantes/salientes, manejo de documentación y apoyo en procesos de gestión de inventarios."
      },
      {
        role: "Coordinador de Comunicaciones de Marketing",
        company: "CEFRA",
        period: "Mar 2015 — Abr 2018",
        description: "Desarrollé estrategias de marketing y gestioné plataformas digitales, resultando en un aumento de la credibilidad de la marca. Facilité oportunidades de networking y referidos de alto valor."
      },
      {
        role: "Asistente de Logística",
        company: "Pharma Solutions Peru",
        period: "Dic 2013 — Feb 2015",
        description: "Gestioné procesos de importación para productos cosméticos, coordinando con proveedores internacionales y agentes de carga para asegurar un despacho de aduanas preciso."
      }
    ],
    education: [
      {
        degree: "Posgrado en Gestión de Negocios Globales - Especialización en Marketing",
        school: "Humber College - Toronto",
        period: "2022 — 2023",
        description: "Estudio avanzado de operaciones internacionales estratégicas y analítica de marketing. Competencias clave en Gestión de Proyectos, sistemas CRM y Estrategia de Marketing basada en datos."
      },
      {
        degree: "Licenciatura en Marketing",
        school: "San Ignacio University - Miami",
        period: "2013 — 2018",
        description: "Enfoque en comportamiento del consumidor, gestión de marca y posicionamiento estratégico de mercado en contextos globales."
      },
      {
        degree: "Licenciatura en Negocios Internacionales",
        school: "Universidad San Ignacio de Loyola - Perú",
        period: "2013 — 2019",
        description: "Estudio integral de comercio global, infraestructura logística y dinámica comercial transfronteriza."
      }
    ],
    projects: [
      {
        title: "KamayLab",
        description: "Tienda de e-commerce de productos 3D construida y operada de punta a punta, desde la arquitectura del catálogo y los datos de producto hasta el checkout y el despliegue en Vercel.",
        link: "https://kamaylab.pe",
        index: "01",
        alwaysExpanded: true
      },
      {
        title: "Komorebi Hub",
        description: "Mi estudio independiente: herramientas de e-commerce, automatización de catálogo y auditorías de visibilidad en IA para negocios pequeños. Sitio publicado en cuatro idiomas.",
        link: "https://komorebihub.com",
        index: "02"
      },
      {
        title: "Tamago Pixel Timer",
        description: "Una herramienta de productividad minimalista basada en los principios de Danshari. Eliminando el ruido para enfocarse en la eficiencia de una sola tarea a través de una estética de pixel art refinada.",
        link: "https://tamago-timer.vercel.app/",
        index: "03"
      },
      {
        title: "Estrategia Email DAYBUE",
        description: "Correo HTML responsivo construido para el programa de apoyo al paciente DAYBUE™ de Acadia Pharmaceuticals, optimizado para accesibilidad y renderizado multi-cliente. Esta construcción combina claridad visual con flujo de contenido estratégico para guiar a los profesionales de la salud. Diseñado con un enfoque híbrido, asegurando un renderizado impecable en entornos desde Outlook Classic hasta plataformas modernas como Gmail y Apple Mail.",
        summary: "Correo HTML responsivo para el programa DAYBUE™ de Acadia Pharmaceuticals, optimizado para accesibilidad y renderizado multi-cliente.",
        link: "https://parcel.io/e/4900f33d-396f-4526-b462-525a19d1d6d0?wrap=true",
        index: "04"
      },
      {
        title: "Identidad One Iota",
        description: "Desarrollo de un diseño de marca integral y lenguaje visual para One Iota, enfocado en el minimalismo moderno y arquitectura digital nativa.",
        link: "https://arturjesus.webflow.io/portfolio/brand-design-identity-for-one-iota",
        index: "05"
      },
      {
        title: "Continental Lifestyle MD",
        description: "Diseño de plataforma estratégica de marketing y estilo de vida centrada en experiencias premium y estética automotriz de alta gama.",
        link: "https://arturjesus.webflow.io/portfolio/continental-lifestyle-md",
        index: "06"
      },
      {
        title: "Proof Restaurant Mail",
        description: "Marketing de respuesta directa y arquitectura de correo para hospitalidad de alta gama, mezclando arte culinario con comunicación estratégica.",
        link: "https://arturjesus.webflow.io/portfolio/proof-restaurant-mail",
        index: "07"
      },
      {
        title: "Rediseño CEFRA",
        description: "Reimaginando la presencia digital de CEFRA a través de sistemas de UI de alta precisión y orquestación de flujo de usuario mejorada.",
        link: "https://arturjesus.webflow.io/portfolio/website-redesign-for-cefra",
        index: "08"
      }
    ],
    skills: [
      'Akeneo PIM',
      'Magento 2',
      'Python / pandas',
      'Integración con ERP',
      'Email Marketing',
      'SEO Técnico',
      'Google Analytics / GA4',
      'Pipelines con LLM',
      'Integración de APIs',
      'React / Vite'
    ],
    footer: {
      location: "Toronto — Canadá",
      rights: "© 2026 Arturo Perez / E-Commerce y Datos de Producto"
    }
  }
};
