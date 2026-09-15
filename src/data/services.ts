export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'gravning',
    title: 'Dränering & Grävarbete',
    shortDescription: 'Professionella dräneringar, schaktarbeten, tomtplanering och ledningsarbeten i Jönköping med omnejd.',
    heroText: 'Effektiv dränering och noggrant markarbete för torra, trygga grunder och stabila markytor.',
    detailedDescription: `Planerar du en husdränering, tomtplanering eller schaktning inför ett byggprojekt? WI Mark & Anläggning AB utför dräneringar och grävarbeten med moderna maskiner och högsta precision.

Vi hjälper privatpersoner, fastighetsägare och företag i Jönköping med allt från fuktskyddande husdränering och kabelgrävning till vatten, avlopp och markförberedelser.`,
    heroImage: '/service-gravning.webp',
    image: '/service-gravning.webp',
    href: '/tjanster#gravning',
    tag: 'Dränering',
    badge: 'Precision & Trygghet',
    highlights: [
      'Husdränering och fuktskydd',
      'Schaktning och tomtplanering',
      'Grundgrävning inför nybygge och garage',
      'Kabel och ledningsdragning',
    ],
    faq: [
      {
        question: 'Hur vet man att det är dags att dränera om huset?',
        answer: 'Tecken på att dräneringen behöver åtgärdas är fuktfläckar i källaren, unken lukt, färg som släpper från väggarna eller att det gått över 20–25 år sedan senaste dräneringen.',
      },
      {
        question: 'Hur snabbt kan ni påbörja ett dräneringsarbete?',
        answer: 'Mindre till medelstora mark och dräneringsarbeten kan vi oftast påbörja inom 1 till 2 veckor efter överenskommelse och platsbesök.',
      },
    ],
  },
  {
    slug: 'byggnation',
    title: 'Husgrunder & Byggnation',
    shortDescription: 'Stabila husgrunder, betongplattor, formsättning och kundanpassad byggverksamhet med gedigen kvalitet.',
    heroText: 'Kvalitativa husgrunder och byggnationer utförda med millimeterprecision och hållbarhet i fokus.',
    detailedDescription: `En solid och välisolerad husgrund är grundförutsättningen för varje lyckad byggnation. WI Mark & Anläggning AB anlägger husgrunder, gjuter platta på mark och utför byggverksamhet anpassad efter dina ritningar och behov.

Vi tar hand om hela kedjan från schaktning och bärlager till isolering, armering och formsättning för villor, garage och tillbyggnader i Jönköping med omnejd.`,
    heroImage: '/service-byggnation.webp',
    image: '/service-byggnation.webp',
    href: '/tjanster#byggnation',
    tag: 'Husgrunder',
    badge: 'Stabila Grunder',
    highlights: [
      'Platta på mark för villa och garage',
      'Grundläggning och kantelement',
      'Formsättning, armering och isolering',
      'Kundanpassade bygg och tillbyggnadsprojekt',
    ],
    faq: [
      {
        question: 'Gör ni hela grundarbetet inklusive schakt och gjutning?',
        answer: 'Ja, vi erbjuder en smidig helhetslösning där vi hanterar både schaktning, dränerande bärlager, isolering, armering och gjutning.',
      },
      {
        question: 'Kan man nyttja ROT avdrag vid grund och byggarbeten?',
        answer: 'Ja, vid ombyggnader, tillbyggnader och renoveringar på befintliga bostäder kan du nyttja 30 % ROT avdrag på arbetskostnaden direkt via fakturan.',
      },
    ],
  },
  {
    slug: 'betong',
    title: 'Stenytor & Murar',
    shortDescription: 'Stensättning, stödmurar, marksten, kantsten och stenytor som förvandlar din tomt och utemiljö.',
    heroText: 'Hållbara murar och stilrena stenytor anlagda med hantverksskicklighet och precision.',
    detailedDescription: `Vill du anlägga en vacker uppfart med marksten, bygga en stadig stödmur eller skapa trivsamma stenytor i trädgården? WI Mark & Anläggning AB är specialister på murar och stenytor som tål det nordiska klimatet.

Vi hjälper dig från grundlig markberedning och bärlager till perfekt lagda stenytor och stabila stödmurar som ger din fastighet ett rejält lyft.`,
    heroImage: '/service-betong.webp',
    image: '/service-betong.webp',
    href: '/tjanster#betong',
    tag: 'Murar & Stenytor',
    badge: 'Hållbar Finish',
    highlights: [
      'Stödmurar och trädgårdsmurar',
      'Stensättning av uppfarter och gångar',
      'Marksten, plattor och kantsten',
      'Trädgårdstjänster och markutjämning',
    ],
    faq: [
      {
        question: 'Varför är underarbetet så viktigt vid stensättning?',
        answer: 'Ett ordentligt bärlager och noggrann packning förhindrar sättningar, tjälskador och ojämnheter, vilket säkerställer att stenytan håller sig plan och snygg i många år.',
      },
      {
        question: 'Bygger ni både fristående murar och stödmurar i slänt?',
        answer: 'Ja, vi anlägger både dekorativa murar och kraftiga stödmurar som säkrar nivåskillnader och slänter på din tomt.',
      },
    ],
  },
  {
    slug: 'maskinforare',
    title: 'Mark & Anläggning',
    shortDescription: 'Kompletta entreprenadtjänster, maskinförare, transportverksamhet och uthyrning av transportredskap.',
    heroText: 'Mångsidig entreprenad och maskintjänster för smidig genomförande av alla markprojekt.',
    detailedDescription: `Behöver du anlita yrkesskickliga maskinförare eller boka transportverksamhet och marktjänster? WI Mark & Anläggning AB erbjuder heltäckande entreprenadverksamhet med modern utrustning och hög flexibilitet.

Vi hanterar materialtransporter, schaktning, markplanering och uthyrning av transportredskap i Jönköping, Huskvarna, Habo och omnejd. Vi arbetar alltid med säkerhet, punktlighet och kvalitet i första rummet.`,
    heroImage: '/service-maskinforare.webp',
    image: '/service-maskinforare.webp',
    href: '/tjanster#maskinforare',
    tag: 'Mark & Anläggning',
    badge: 'Totalentreprenad',
    highlights: [
      'Entreprenadverksamhet inom mark och anläggning',
      'Erfarna maskinförare med modern maskinpark',
      'Transportverksamhet och materialflytt',
      'Uthyrning av transportredskap och trädgårdstjänster',
    ],
    faq: [
      {
        question: 'Erbjuder ni både fast pris och löpande timpris?',
        answer: 'Ja, vi erbjuder fasta offerter för definierade projekt samt flexibel löpande debitering för maskintjänster och transporter.',
      },
      {
        question: 'Vilka områden arbetar ni i?',
        answer: 'Vi utgår från Jönköping och utför entreprenaduppdrag i Jönköping, Huskvarna, Habo, Bankeryd, Vaggeryd och omnejd.',
      },
    ],
  },
];

export default services;
