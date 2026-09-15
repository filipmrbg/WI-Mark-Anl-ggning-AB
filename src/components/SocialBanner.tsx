import { Instagram, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SocialBanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        padding: 'clamp(48px, 6vw, 72px) 0',
        position: 'relative',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)',
        }}
      >
        <ScrollReveal animation="fade-up" duration={0.6}>
          <div className="social-hub-bar">
            <div className="social-hub-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
                  color: '#ffffff',
                }}>
                  <Instagram size={18} />
                </span>
                <span className="social-hub-title">Följ WI Mark & Anläggning AB</span>
              </div>
              <span className="social-hub-sub">
                Se våra senaste entreprenadprojekt, dräneringar, husgrunder och stenytor i Jönköping med omnejd på Instagram.
              </span>
            </div>

            <div className="social-hub-actions">
              <a
                href="https://www.instagram.com/wi_markanlaggningab"
                target="_blank"
                rel="noopener noreferrer"
                className="social-hub-btn instagram"
              >
                <Instagram size={17} />
                <span>Följ @wi_markanlaggningab</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .social-hub-bar {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 24px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 32px;
          box-shadow: 0 8px 28px rgba(15, 23, 42, 0.05);
          flex-wrap: wrap;
        }

        .social-hub-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-width: 680px;
        }

        .social-hub-title {
          font-weight: 800;
          color: var(--color-text-dark);
          font-size: 1.15rem;
          letter-spacing: -0.01em;
        }

        .social-hub-sub {
          color: var(--color-gray-600);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .social-hub-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-hub-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
        }

        .social-hub-btn:hover {
          transform: translateY(-2px);
        }

        .social-hub-btn.instagram {
          background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
        }

        .social-hub-btn.instagram:hover {
          box-shadow: 0 8px 24px rgba(225, 48, 108, 0.35);
        }

        @media (max-width: 768px) {
          .social-hub-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            padding: 20px;
          }
          .social-hub-actions {
            width: 100%;
          }
          .social-hub-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
