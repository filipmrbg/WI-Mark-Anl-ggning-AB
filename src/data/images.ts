/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * Customized for WI Mark & Anläggning AB
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'WI Mark & Anläggning AB Logotyp',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'WI Mark & Anläggning AB Logotyp',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'WI Mark & Anläggning AB markarbete, dränering och anläggning i Jönköping',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-gravning.webp',
      alt: 'Dränering, schaktning och markarbete i Jönköping',
    },
    smahusbyggnation: {
      url: '/service-byggnation.webp',
      alt: 'Husgrunder, formsättning och byggnation i Jönköping',
    },
    renovering: {
      url: '/service-betong.webp',
      alt: 'Betong, murar och stenytor i Jönköping',
    },
    ombyggnation: {
      url: '/service-markarbete.png',
      alt: 'Mark och anläggning i Jönköping',
    },
    totalentreprenad: {
      url: '/service-maskinforare.webp',
      alt: 'Maskintjänster och entreprenad i Jönköping',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'WI Mark & Anläggning AB markarbete och tomtplanering',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'WI Mark & Anläggning AB betonggjutning och husgrund',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'WI Mark & Anläggning AB dränering och schaktning',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'WI Mark & Anläggning AB murar och stensättning',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'WI Mark & Anläggning AB maskintjänster och entreprenad',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'WI Mark & Anläggning AB färdigställd anläggning',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'WI Mark & Anläggning AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'WI Mark & Anläggning AB arbetsplats Jönköping',
    },
  },

  about: {
    hero: {
      url: '/about.jpg',
      alt: 'WI Mark & Anläggning AB',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem WI Mark & Anläggning AB',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant markarbete och entreprenad i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från planering och markarbete till färdigt resultat',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Markarbete och tomtplanering i Jönköping',
      },
      title: 'Tomtplanering & Schaktning',
      category: 'Markarbete',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Gjutning av husgrund i Jönköping',
      },
      title: 'Husgrunder & Betongplatta',
      category: 'Husgrunder',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Dränering och fuktskydd i Jönköping',
      },
      title: 'Husdränering & Ledningsarbete',
      category: 'Dränering',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Murar och stenytor i Jönköping',
      },
      title: 'Stensättning & Stödmurar',
      category: 'Stenytor & Murar',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Maskintjänster och grävmaskinist i Jönköping',
      },
      title: 'Maskintjänster & Transporter',
      category: 'Entreprenad',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Färdigställt entreprenadprojekt Jönköping',
      },
      title: 'Färdigställd Trädgårdsanläggning',
      category: 'Totalentreprenad',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Grävning, schaktning och markarbete',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats Jönköping',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering och ledningsarbete',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Fuktskydd och dräneringsarbete',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Dräneringsarbete',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta och murar',
      },
      section1: {
        url: '/service-betong.webp',
        alt: 'Armering och betonggjutning',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund',
      },
    },
  },
};

export default images;
