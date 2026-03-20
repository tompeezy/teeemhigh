import Link from 'next/link'

export const metadata = {
  title: 'Golf Blog — TeeEmHigh',
  description: 'Honest golf ball reviews, creek ball strategy, tips for beginners, and gear picks. No sponsored BS.',
}

const posts = [
  {
    slug: 'creek-ball-strategy',
    title: "Why I Haven't Bought Golf Balls in 3 Years (Creek Ball Strategy)",
    excerpt: "Every Sunday I walk the creek beds at my local course. I find Pro V1s, TP5s, and Chrome Softs — barely used. Here's exactly how the system works.",
    date: 'March 15, 2026',
    readTime: '6 min read',
    emoji: '💧',
    category: 'Strategy',
    featured: true,
  },
  {
    slug: 'pro-v1-vs-kirkland',
    title: 'Titleist Pro V1 vs Kirkland Signature: Honest Comparison',
    excerpt: "I played both balls for a full month — 8 rounds each. Here's the data, the feel, and the honest verdict. No brand loyalty, just results.",
    date: 'February 28, 2026',
    readTime: '7 min read',
    emoji: '⚖️',
    category: 'Ball Reviews',
    featured: false,
  },
  {
    slug: 'best-golf-balls-beginners-2026',
    title: 'Best Golf Balls for Beginners in 2026',
    excerpt: "Don't waste $55 on Pro V1s when you're just starting out. These are the balls that will actually help your game — and your wallet.",
    date: 'January 20, 2026',
    readTime: '5 min read',
    emoji: '🏌️',
    category: 'Buying Guide',
    featured: false,
  },
  {
    slug: 'how-to-find-golf-balls-water-hazards',
    title: 'How to Find Golf Balls in Water Hazards (Complete Guide)',
    excerpt: "The gear you need, the best spots to look, the laws around it, and how to grade what you find. Everything from someone who does this every week.",
    date: 'January 5, 2026',
    readTime: '8 min read',
    emoji: '🔍',
    category: 'Strategy',
    featured: false,
  },
  {
    slug: '5-golf-accessories-worth-every-penny',
    title: '5 Golf Accessories Worth Every Penny Under $50',
    excerpt: "Most golf gear is overpriced garbage. These 5 items genuinely improve your game and they'll cost you less than one box of Pro V1s.",
    date: 'December 10, 2025',
    readTime: '5 min read',
    emoji: '🛍️',
    category: 'Gear',
    featured: false,
  },
]

const categories = ['All', 'Strategy', 'Ball Reviews', 'Buying Guide', 'Gear']

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <div style={{
      minHeight: '100vh', background: '#0a1408', color: '#fff',
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
          <Link href="/blog" style={{ color: '#00d4aa', textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>Blog</Link>
          <Link href="/products" style={{ color: '#a8b5a0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Products</Link>
          <a href="https://tiktok.com/@teeemhigh" target="_blank" rel="noopener noreferrer" style={{
            padding: '8px 18px', borderRadius: 20, background: 'linear-gradient(135deg, #00d4aa, #00a885)',
            color: '#000', fontWeight: 800, fontSize: 13, textDecoration: 'none',
          }}>TikTok</a>
        </div>
      </nav>

      {/* Header */}
      <section style={{
        padding: '60px 20px 40px', textAlign: 'center',
        background: 'linear-gradient(180deg, #0d2012 0%, #0a1408 100%)',
      }}>
        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-2px',
          background: 'linear-gradient(135deg, #fff 0%, #00d4aa 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          The Blog
        </h1>
        <p style={{ fontSize: 17, color: '#a8b5a0', maxWidth: 480, margin: '0 auto' }}>
          Honest golf takes. No sponsored content. No brand loyalty. Just what actually works.
        </p>
      </section>

      {/* Featured Post */}
      {featured && (
        <section style={{ padding: '48px 20px 0', maxWidth: 900, margin: '0 auto' }}>
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,212,170,0.03) 100%)',
              border: '2px solid rgba(0,212,170,0.3)', borderRadius: 24, padding: '40px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 20, right: 20,
                background: 'linear-gradient(135deg, #00d4aa, #00a885)',
                color: '#000', padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800,
              }}>
                FEATURED
              </div>
              <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: 56, width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 16, background: 'rgba(0,212,170,0.15)', flexShrink: 0,
                }}>{featured.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: '#00d4aa', fontWeight: 700, marginBottom: 10, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                    {featured.category}
                  </div>
                  <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, margin: '0 0 12px 0', color: '#fff', lineHeight: 1.3 }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: 15, color: '#a8b5a0', lineHeight: 1.7, margin: '0 0 16px 0' }}>{featured.excerpt}</p>
                  <div style={{ fontSize: 13, color: '#555' }}>{featured.date} · {featured.readTime}</div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* All Posts */}
      <section style={{ padding: '40px 20px 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 20, padding: '24px',
                borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <span style={{
                  fontSize: 32, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 12, background: 'rgba(0,212,170,0.08)', flexShrink: 0,
                }}>{post.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: '#00d4aa', fontWeight: 700, marginBottom: 6, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.3 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: '#a8b5a0', margin: '0 0 8px 0', lineHeight: 1.5 }}>{post.excerpt}</p>
                  <div style={{ fontSize: 12, color: '#555' }}>{post.date} · {post.readTime}</div>
                </div>
                <div style={{ color: '#00d4aa', fontSize: 20, flexShrink: 0 }}>›</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #0d2012 0%, #091506 100%)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 12px 0' }}>Get New Posts by Email</h2>
          <p style={{ fontSize: 14, color: '#a8b5a0', marginBottom: 24 }}>Free. No spam. Golf tips every week.</p>
          <form action="/api/subscribe" method="POST" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input type="email" name="email" placeholder="your@email.com" required style={{
              flex: 1, minWidth: 200, padding: '12px 16px', borderRadius: 10,
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontSize: 14, outline: 'none',
            }} />
            <button type="submit" style={{
              padding: '12px 24px', borderRadius: 10,
              background: 'linear-gradient(135deg, #00d4aa, #00a885)',
              color: '#000', fontWeight: 800, fontSize: 14, border: 'none', cursor: 'pointer',
            }}>Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '28px 20px', background: '#060e05',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center', fontSize: 13, color: '#444', lineHeight: 1.8,
      }}>
        <p style={{ margin: 0 }}>
          <Link href="/" style={{ color: '#00d4aa', textDecoration: 'none' }}>TeeEmHigh</Link>
          {' · '}As an Amazon Associate, I earn from qualifying purchases.{' · '}© 2026
        </p>
      </footer>
    </div>
  )
}
