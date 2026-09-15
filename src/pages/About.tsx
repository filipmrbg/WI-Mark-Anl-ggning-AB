import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const teamMembers = [
  {
    role: 'Ägare & Projektledare / Maskinförare',
    name: 'William Wymark',
    initials: 'WW',
    description: 'Leder WI Mark & Anläggning AB med gedigen erfarenhet inom dräneringar, husgrunder, murar, stenytor och maskintjänster i Jönköping med omnejd.',
  },
  {
    role: 'Anläggare & Maskinförare',
    name: 'Alexander Lindqvist',
    initials: 'AL',
    description: 'Yrkesskicklig maskinist med stor precision inom schaktning, tomtplanering och fuktskyddande dräneringsarbeten.',
  },
  {
    role: 'Betong & Markarbetare',
    name: 'Marcus Svensson',
    initials: 'MS',
    description: 'Specialist på grundläggning, gjutning av husgrunder samt noggrann konstruktion av stödmurar och stenytor.',
  },
];

export default function About() {
  usePageTitle(
    'Om WI Mark & Anläggning AB | Dränering & Entreprenad i Jönköping',
    'Läs mer om WI Mark & Anläggning AB. Vi utför allt inom dräneringar, husgrunder, murar, stenytor och entreprenadverksamhet i Jönköping med omnejd.'
  );
  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/about-hero-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                Om WI Mark & Anläggning AB
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '640px', lineHeight: 1.6 }}>
                Professionell entreprenadverksamhet och maskintjänster från noggrann planering till färdigställd markanläggning i Jönköping med omnejd.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '100px 0' }}>
        <div style={{ ...container, maxWidth: '1100px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(320px, 40%, 460px) 1fr',
            gap: '60px',
            alignItems: 'start',
          }}>

            {/* Left: Company Photo Card */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <div style={{
                position: 'sticky',
                top: '120px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 48px rgba(15, 23, 42, 0.12)',
                aspectRatio: '4 / 5',
                maxHeight: '520px',
              }}>
                <img
                  src={images.about.hero.url || '/about.jpg'}
                  alt="WI Mark & Anläggning AB"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.03em',
                  margin: '0 0 20px 0',
                }}>
                  Professionell entreprenad med passion, precision och trygghet
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    WI Mark & Anläggning AB erbjuder ett heltäckande tjänsteutbud inom dräneringar, husgrunder, murar, stenytor, schaktning, transportverksamhet och trädgårdstjänster. Med bas i Jönköping verkar vi i hela regionen för privatpersoner, fastighetsägare och företag.
                  </p>
                  
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-dark)', margin: '28px 0 12px 0' }}>
                    Kvalitet och noggrannhet i varje moment
                  </h3>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    Vårt mål är enkelt: att leverera mark och anläggningsprojekt med högsta tekniska kvalitet, god dialog och trygga garantier. Vi hanterar både mindre stensättningar och omfattande dräneringar och husgrunder med samma stora engagemang.
                  </p>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    När du anlitar WI Mark & Anläggning AB får du en pålitlig och erfaren partner genom hela resan. Vi sätter stor ära i att hålla utlovade tidsramar, lämna snyggt och städat efter oss samt leverera marklösningar som håller i generationer.
                  </p>

                  {/* Founder Quote Card */}
                  <div style={{
                    background: 'rgba(234, 88, 12, 0.06)',
                    borderLeft: '4px solid var(--color-primary)',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '32px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      lineHeight: 1.7,
                      margin: '0 0 10px 0',
                    }}>
                      "Vi utför varje mark, dränerings och anläggningsprojekt med största yrkesstolthet och precision. Med personlig service, moderna maskiner och fasta priser ser vi till att ditt projekt genomförs tryggt och effektivt."
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      William Wymark, WI Mark & Anläggning AB
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION D: TEAM & LEADERSHIP ──────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '90px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <ScrollReveal animation="blur-in">
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 3.4vw, 2.6rem)',
                letterSpacing: '-0.03em',
                margin: '0 0 12px 0',
              }}>
                Vårt Team
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '560px',
                margin: '0 auto',
              }}>
                Med engagemang, yrkesskicklighet och modern maskinpark säkerställer vi trygghet och kvalitet i varje uppdrag.
              </p>
            </ScrollReveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="team-grid">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} animation="slide-up-fade" delay={i * 120}>
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.09)';
                  e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                >
                  <div style={{ padding: '36px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: i === 0 ? 'rgba(234, 88, 12, 0.12)' : 'rgba(15, 23, 42, 0.08)',
                      color: i === 0 ? 'var(--color-primary)' : 'var(--color-text-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      margin: '0 auto 18px auto',
                      border: i === 0 ? '2px solid rgba(234, 88, 12, 0.3)' : '2px solid rgba(15, 23, 42, 0.1)',
                    }}>
                      {member.initials}
                    </div>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      margin: '0 0 6px 0',
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: 'var(--color-primary)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      margin: '0 0 14px 0',
                      lineHeight: 1.4,
                    }}>
                      {member.role}
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA BANNER ─────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid > *:first-child {
            display: flex;
            justifyContent: center;
          }
        }
      `}</style>
    </main>
  );
}
