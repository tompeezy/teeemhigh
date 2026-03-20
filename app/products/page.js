import Link from 'next/link'

export const metadata = {
  title: 'Digital Products — TeeEmHigh',
  description: 'Golf guides, practice plans, and trackers to lower your scores. Instant downloads from TeeEmHigh.',
}

const products = [
  {
    name: 'Golf Round Tracker & Scorecard Journal',
    desc: 'Track every round in detail — fairways hit, GIR, putts per hole, scramble percentage, and more. Identify your weaknesses, fix them, watch your handicap drop. Printable PDF, works for any format.',
    features: ['18-hole scorecard with full stats', 'Fairways, GIR, and putting tracker', 'Notes section for each round', 'Season summary sheet', 'Printable PDF — unlimited copies'],
    price: '$9',
    originalPrice: null,
    link: 'https://tompoai.gumroad.com/l/golf-round-tracker',
    emoji: '📊',
    highlight: true,
    badge: 'Most Popular',
    color: '#00d4aa',
  },
  {
    name: '30-Day Golf Practice Plan',
    desc: 'A structured, day-by-day practice routine built for golfers who want results fast. Covers ball striking, short game, putting, and mental game. No fluff — just the drills that work.',
    features: ['30 daily practice sessions', 'Driver, irons, wedge, and putting', 'Mental game techniques', 'Progress tracking included', 'Works for any skill level'],
    price: '$7',
    originalPrice: null,
    link: 'https://tompoai.gumroad.com/l/30-day-golf-practice',
    emoji: '📅',
    highlight: false,
    badge: null,
    color: '#ffd700',
  },
  {
    name: 'Ultimate Golf Ball Buying Guide',
    desc: "Stop wasting money on the wrong ball. This guide breaks down every major golf ball by swing speed, handicap, and budget. Know exactly what to buy — and what to skip.",
    features: ['Ball breakdown by swing speed', 'Handicap-based recommendations', 'Budget picks under $20/dozen', 'Premium vs mid-tier analysis', 'Creek & used ball tips'],
    price: '$5',
    originalPrice: null,
    link: 'https://tompoai.gumroad.com/l/golf-ball-guide',
    emoji: '📖',
    highlight: false,
    badge: null,
    color: '#ff9f43',
  },
]

export default function ProductsPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1408',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(10,20,8,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,212,170,0.15)',
        padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60,
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 26 }}>⛳</span>
          <span style={{ fontWeight: 900, fontSize: 18, color: '#00d4aa', letterSpacing: '-0.5px' }}>TeeEmHigh</span>
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#a8b5a0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Blog</Link>
          <Link href="/products" style={{ color: '#00d4aa', textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>Products</Link>
          <a href="https://tiktok.com/@teeemhigh" target="_blank" rel="noopener noreferrer" style={{
            padding: '8px 18px', borderRadius: 20, background: 'linear-gradient(135deg, #00d4aa, #00a885)',
            color: '#000', fontWeight: 800, fontSize: 13, textDecoration: 'none',
          }}>TikTok</a>
        </div>
      </nav>

      {/* Header */}
      <section style={{
        padding: '80px 20px 60px', textAlign: 'center',
        background: 'linear-gradient(180deg, #0d2012 0%, #0a1408 100%)',
      }}>
        <div style={{
          display: 'inline-block', padding: '6px 16px', borderRadius: 20,
          background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)',
          color: '#00d4aa', fontSize: 12, fontWeight: 700, marginBottom: 20, letterSpacing: '1px',
        }}>
          DIGITAL DOWNLOADS
        </div>
        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 54px)', fontWeight: 900, margin: '0 0 20px 0', letterSpacing: '-2px',
          background: 'linear-gradient(135deg, #fff 0%, #00d4aa 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          Level Up Your Game
        </h1>
        <p style={{ fontSize: 18, color: '#a8b5a0', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Practical guides and tools built by a real golfer. Instant download. No fluff.
        </p>
      </section>

      {/* Products */}
      <section style={{ padding: '80px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {products.map((product, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: product.highlight ? `2px solid rgba(0,212,170,0.4)` : '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, padding: '40px', position: 'relative', overflow: 'hidden',
              display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start',
            }}>
              {product.badge && (
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'linear-gradient(135deg, #00d4aa, #00a885)',
                  color: '#000', padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800,
                }}>
                  {product.badge}
                </div>
              )}

              {/* Left */}
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>{product.emoji}</div>
                <h2 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 16px 0', lineHeight: 1.25 }}>{product.name}</h2>
                <p style={{ fontSize: 15, color: '#a8b5a0', lineHeight: 1.75, margin: 0 }}>{product.desc}</p>
              </div>

              {/* Right */}
              <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <div style={{ fontSize: 13, color: '#666', marginBottom: 12, fontWeight: 600 }}>WHAT&apos;S INCLUDED</div>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {product.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#ccc' }}>
                        <span style={{ color: '#00d4aa', fontSize: 16, flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: 42, fontWeight: 900, color: product.color }}>{product.price}</span>
                    <span style={{ fontSize: 14, color: '#555' }}>one-time</span>
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" style={{
                    display: 'block', textAlign: 'center', padding: '16px', borderRadius: 12,
                    background: product.highlight ? 'linear-gradient(135deg, #00d4aa, #00a885)' : `${product.color}20`,
                    border: product.highlight ? 'none' : `1px solid ${product.color}50`,
                    color: product.highlight ? '#000' : product.color,
                    fontWeight: 800, fontSize: 15, textDecoration: 'none',
                  }}>
                    Buy Now — Instant Download →
                  </a>
                  <div style={{ textAlign: 'center', marginTop: 10, fontSize: 12, color: '#555' }}>
                    Via Gumroad · Secure checkout
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #0d2012 0%, #091506 100%)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🎯</div>
          <h2 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>
            Get All 3 for Just $17
          </h2>
          <p style={{ fontSize: 15, color: '#a8b5a0', lineHeight: 1.7, marginBottom: 32 }}>
            Save $4 when you bundle the Round Tracker, Practice Plan, and Ball Buying Guide together.
            Everything you need to cut strokes this season.
          </p>
          <a href="https://tompoai.gumroad.com" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', padding: '18px 48px', borderRadius: 50,
            background: 'linear-gradient(135deg, #00d4aa, #00a885)', color: '#000',
            fontWeight: 900, fontSize: 16, textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(0,212,170,0.35)',
          }}>
            Get the Bundle →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 20px', background: '#060e05',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center', fontSize: 13, color: '#444', lineHeight: 1.8,
      }}>
        <p style={{ margin: '0 0 6px 0' }}>
          <Link href="/" style={{ color: '#00d4aa', textDecoration: 'none' }}>TeeEmHigh</Link>
          {' · '}
          <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>Blog</Link>
          {' · '}
          <a href="mailto:teeemhigh@gmail.com" style={{ color: '#666', textDecoration: 'none' }}>teeemhigh@gmail.com</a>
        </p>
        <p style={{ margin: 0 }}>© 2026 TeeEmHigh · teeemhigh.shop</p>
      </footer>
    </div>
  )
}
