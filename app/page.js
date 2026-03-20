import Link from 'next/link'

const featuredBalls = [
  {
    name: 'Titleist Pro V1',
    tagline: 'The GOAT. Period.',
    why: 'The ball Tour pros play. Soft feel, insane spin control, holds greens like glue. The standard.',
    price: '$55/dozen retail',
    deal: 'Find them free in creeks 😎',
    link: 'https://www.amazon.com/dp/B09RQWZYQS?tag=teeemhigh-20',
    color: '#ffd700',
    emoji: '👑',
  },
  {
    name: 'Kirkland Signature',
    tagline: 'Pro V1 for $14',
    why: 'Costco reverse-engineered the Pro V1. Urethane cover, 3-piece construction. Legit performance for pennies.',
    price: '$14/dozen',
    deal: 'Best value in golf',
    link: 'https://www.costco.com/kirkland-signature-3-piece-urethane-cover-golf-ball%2C-2-dozen.product.100532570.html',
    color: '#ff6b6b',
    emoji: '💰',
  },
  {
    name: 'Callaway Supersoft',
    tagline: 'Perfect beginner ball',
    why: 'Low compression = longer, straighter shots for slower swing speeds. Soft feel, forgiving, cheap.',
    price: '$22/dozen',
    deal: 'Under $2 per ball',
    link: 'https://www.amazon.com/Callaway-Golf-Supersoft-Balls-White/dp/B0BX4DQGDZ?tag=teeemhigh-20',
    color: '#4ecdc4',
    emoji: '🎯',
  },
  {
    name: 'Srixon Soft Feel',
    tagline: 'Most slept-on ball',
    why: 'Energetic gradient core, soft ionomer cover. Distance + feel at a budget price. Seriously underrated.',
    price: '$20/dozen',
    deal: 'Hidden gem',
    link: 'https://www.amazon.com/Srixon-Soft-Feel-Dozen-White/dp/B0BVNHM4XR?tag=teeemhigh-20',
    color: '#ff9f43',
    emoji: '🔥',
  },
]

const gearPicks = [
  {
    category: 'Rangefinders',
    title: 'Stop Guessing Distances',
    desc: 'Know exactly how far that flag is. Game changer for breaking 90.',
    link: 'https://www.amazon.com/s?k=golf+rangefinder&tag=teeemhigh-20',
    emoji: '📏',
  },
  {
    category: 'Push Carts',
    title: 'Walk the Course, Save Your Back',
    desc: 'Carrying 40 lbs for 18 holes? Nah. Get a cart, walk more, score better.',
    link: 'https://www.amazon.com/s?k=golf+push+cart&tag=teeemhigh-20',
    emoji: '🎒',
  },
  {
    category: 'Shag Bags',
    title: 'Practice Ball Pickup Made Easy',
    desc: 'Pick up 50 range balls in seconds. Your back will thank you.',
    link: 'https://www.amazon.com/s?k=golf+ball+shag+bag&tag=teeemhigh-20',
    emoji: '🛍️',
  },
  {
    category: 'Used Titleist Balls',
    title: 'Play Premium Without the Price',
    desc: 'Bulk used Pro V1s for $1-2 a ball. Same flight, same spin, different wallet impact.',
    link: 'https://www.amazon.com/s?k=used+titleist+golf+balls&tag=teeemhigh-20',
    emoji: '⛳',
  },
]

const digitalProducts = [
  {
    name: 'Golf Round Tracker & Scorecard Journal',
    desc: 'Track every round, identify your patterns, and watch your handicap drop. Printable PDF scorecard journal with stats tracking.',
    price: '$9',
    link: 'https://tompoai.gumroad.com/l/golf-round-tracker',
    emoji: '📊',
    highlight: 'Most Popular',
  },
  {
    name: '30-Day Golf Practice Plan',
    desc: 'A structured, daily practice routine to dramatically improve your ball striking, short game, and mental game in one month.',
    price: '$7',
    link: 'https://tompoai.gumroad.com/l/30-day-golf-practice',
    emoji: '📅',
    highlight: null,
  },
  {
    name: 'Ultimate Golf Ball Buying Guide',
    desc: 'Stop wasting money. This guide breaks down every major ball by swing speed, handicap, and budget so you buy the right one.',
    price: '$5',
    link: 'https://tompoai.gumroad.com/l/golf-ball-guide',
    emoji: '📖',
    highlight: null,
  },
]

const blogPosts = [
  {
    slug: 'creek-ball-strategy',
    title: "Why I Haven't Bought Golf Balls in 3 Years",
    excerpt: "The simple creek ball strategy that lets me play Pro V1s for free every single round.",
    date: 'March 2026',
    readTime: '5 min read',
    emoji: '💧',
  },
  {
    slug: 'pro-v1-vs-kirkland',
    title: 'Titleist Pro V1 vs Kirkland: Honest Comparison',
    excerpt: "I played both for a full month. Here's the truth — no brand loyalty, just data.",
    date: 'February 2026',
    readTime: '6 min read',
    emoji: '⚖️',
  },
  {
    slug: 'best-golf-balls-beginners-2026',
    title: 'Best Golf Balls for Beginners in 2026',
    excerpt: "Don't waste money on Pro V1s when you're starting out. These are the balls you actually need.",
    date: 'January 2026',
    readTime: '5 min read',
    emoji: '🏌️',
  },
]

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1408',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10,20,8,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,212,170,0.15)',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 28 }}>⛳</span>
          <span style={{ fontWeight: 900, fontSize: 18, color: '#00d4aa', letterSpacing: '-0.5px' }}>TeeEmHigh</span>
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#a8b5a0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Blog</Link>
          <Link href="/products" style={{ color: '#a8b5a0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Products</Link>
          <a href="https://tiktok.com/@teeemhigh" target="_blank" rel="noopener noreferrer" style={{
            padding: '8px 18px', borderRadius: 20, background: 'linear-gradient(135deg, #00d4aa, #00a885)',
            color: '#000', fontWeight: 800, fontSize: 13, textDecoration: 'none',
          }}>TikTok</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, #0d2012 0%, #0a1408 100%)',
        padding: '100px 20px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -100, right: -100, width: 400, height: 400,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: -100, width: 400, height: 400,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)',
        }} />

        <div style={{
          width: 110, height: 110, margin: '0 auto 28px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d4aa 0%, #00a885 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56,
          border: '4px solid rgba(0,212,170,0.25)', boxShadow: '0 10px 50px rgba(0,212,170,0.35)',
        }}>
          ⛳
        </div>

        <div style={{
          display: 'inline-block', padding: '6px 16px', borderRadius: 20,
          background: 'rgba(0,212,170,0.12)', border: '1px solid rgba(0,212,170,0.3)',
          color: '#00d4aa', fontSize: 13, fontWeight: 700, marginBottom: 24, letterSpacing: '0.5px',
        }}>
          REAL GOLFER · NO BS REVIEWS
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 9vw, 72px)', fontWeight: 900, margin: '0 0 20px 0', lineHeight: 1.05,
          background: 'linear-gradient(135deg, #fff 0%, #00d4aa 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          letterSpacing: '-2px',
        }}>
          Tee &apos;em High,<br />Let &apos;em Fly
        </h1>

        <p style={{
          fontSize: 20, color: '#00d4aa', fontWeight: 700, margin: '0 0 16px 0', letterSpacing: '-0.3px',
        }}>
          I haven&apos;t bought a golf ball in 3 years.
        </p>

        <p style={{
          fontSize: 17, color: '#a8b5a0', maxWidth: 580, margin: '0 auto 48px', lineHeight: 1.75,
        }}>
          Every Sunday, I walk the creek beds at my local course and find Pro V1s, TP5s, Chrome Softs — barely used.
          Golfers lose balls. <strong style={{ color: '#fff' }}>I play them for free.</strong> Here&apos;s exactly how you can too.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#balls" style={{
            display: 'inline-block', padding: '18px 48px', borderRadius: 50,
            background: 'linear-gradient(135deg, #00d4aa 0%, #00a885 100%)',
            color: '#000', fontWeight: 900, fontSize: 16, textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(0,212,170,0.4)', letterSpacing: '0.3px',
          }}>
            Shop Gear Picks →
          </a>
          <a href="https://tiktok.com/@teeemhigh" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', padding: '18px 48px', borderRadius: 50,
            background: 'transparent', border: '2px solid rgba(0,212,170,0.4)',
            color: '#00d4aa', fontWeight: 900, fontSize: 16, textDecoration: 'none',
          }}>
            @teeemhigh
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
          {[['$0', 'Cost per ball I play'], ['3+', 'Years without buying balls'], ['100s', 'Pro V1s found in creeks']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#00d4aa', letterSpacing: '-1px' }}>{num}</div>
              <div style={{ fontSize: 13, color: '#667', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Creek Ball Strategy Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(180deg, #0a1408 0%, #0d1c0a 100%)',
        borderTop: '1px solid rgba(0,212,170,0.08)',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: 20,
              background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)',
              color: '#00d4aa', fontSize: 12, fontWeight: 700, marginBottom: 20, letterSpacing: '1px',
            }}>
              THE CREEK BALL STRATEGY
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, lineHeight: 1.2,
              letterSpacing: '-1px', margin: '0 0 20px 0',
            }}>
              How I Score Free Pro V1s<br />Every Week
            </h2>
            <p style={{ fontSize: 16, color: '#a8b5a0', lineHeight: 1.75, maxWidth: 680, margin: '0 auto' }}>
              It started when I found a sleeve of Pro V1x in a creek bed during a round. I thought it was a fluke. 
              Then the next week I found 8 more. Now it&apos;s a system.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: 56 }}>
            {[
              { step: '01', title: 'Arrive 30 Min Early', desc: 'Get to the course before your tee time. Walk the creek beds on holes where the tee shot crosses water.' },
              { step: '02', title: 'Bring a Shag Bag', desc: 'A telescoping shag bag or ball retriever lets you grab balls from shallow water without getting your feet wet.' },
              { step: '03', title: 'Focus on Par 3s', desc: 'Short par 3s over water are gold mines. Golfers who miss short drop bags of balls into the same spot every day.' },
              { step: '04', title: 'Clean & Grade', desc: "Rinse balls, check for cuts or cracks. Grade 1 condition = play it. Grade 2-3 = range balls. You'll find more Grade 1s than you expect." },
            ].map((item) => (
              <div key={item.step} style={{
                background: 'rgba(0,212,170,0.04)', border: '1px solid rgba(0,212,170,0.15)',
                borderRadius: 16, padding: 28,
              }}>
                <div style={{ fontSize: 13, color: '#00d4aa', fontWeight: 800, marginBottom: 12, letterSpacing: '1px' }}>
                  STEP {item.step}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10, margin: '0 0 10px 0' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#a8b5a0', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(0,212,170,0.06)', border: '2px solid rgba(0,212,170,0.2)',
            borderRadius: 20, padding: '32px 36px', display: 'flex', gap: 20, alignItems: 'flex-start',
          }}>
            <div style={{ fontSize: 40, flexShrink: 0 }}>💧</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#00d4aa', marginBottom: 8 }}>
                Can&apos;t find creeks? No problem.
              </div>
              <p style={{ fontSize: 15, color: '#a8b5a0', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                Some courses don&apos;t have accessible water hazards. In that case, used Titleist balls on Amazon
                go for $1-2 per ball in near-mint condition. Same performance, fraction of the price.
              </p>
              <a href="https://www.amazon.com/s?k=used+titleist+golf+balls&tag=teeemhigh-20" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block', padding: '12px 24px', borderRadius: 30,
                background: 'rgba(0,212,170,0.15)', border: '1px solid rgba(0,212,170,0.4)',
                color: '#00d4aa', fontWeight: 800, fontSize: 14, textDecoration: 'none',
              }}>
                Shop Used Titleist Balls on Amazon →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Balls */}
      <section id="balls" style={{
        padding: '100px 20px',
        background: 'rgba(0,212,170,0.02)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
        borderBottom: '1px solid rgba(0,212,170,0.1)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: 20,
              background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)',
              color: '#00d4aa', fontSize: 12, fontWeight: 700, marginBottom: 20, letterSpacing: '1px',
            }}>
              AFFILIATE PICKS
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
              The Balls Worth Playing
            </h2>
            <p style={{ fontSize: 16, color: '#a8b5a0', maxWidth: 560, margin: '0 auto' }}>
              No BS. These are the balls I actually play and recommend — at every price point.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 28, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {featuredBalls.map((ball, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', border: `2px solid ${ball.color}30`,
                borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -40, right: -40, width: 140, height: 140,
                  borderRadius: '50%', background: `${ball.color}08`,
                }} />
                <div style={{ fontSize: 44, marginBottom: 12 }}>{ball.emoji}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8, color: ball.color, letterSpacing: '-0.5px', margin: '0 0 8px 0' }}>
                  {ball.name}
                </h3>
                <p style={{ fontSize: 14, color: '#00d4aa', fontWeight: 700, marginBottom: 16, margin: '0 0 16px 0' }}>{ball.tagline}</p>
                <p style={{ fontSize: 14, color: '#ccc', lineHeight: 1.65, marginBottom: 20, margin: '0 0 20px 0' }}>{ball.why}</p>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginBottom: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#666', marginBottom: 3 }}>Retail</div>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>{ball.price}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: '#666', marginBottom: 3 }}>Smart Move</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#00d4aa' }}>{ball.deal}</div>
                  </div>
                </div>
                <a href={ball.link} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block', textAlign: 'center', padding: '14px', borderRadius: 10,
                  background: ball.color, color: '#000', fontWeight: 800, fontSize: 14,
                  textDecoration: 'none',
                }}>
                  View on Amazon →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Picks */}
      <section style={{ padding: '100px 20px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
            Gear Worth Having
          </h2>
          <p style={{ fontSize: 16, color: '#a8b5a0' }}>Equipment that actually improves your game.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {gearPicks.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 20, padding: '22px 24px',
              borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              textDecoration: 'none', transition: 'all 0.2s',
            }}>
              <span style={{
                fontSize: 36, width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 12, background: 'rgba(0,212,170,0.1)', flexShrink: 0,
              }}>{item.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#00d4aa', fontSize: 11, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  {item.category}
                </div>
                <div style={{ color: '#fff', fontSize: 17, fontWeight: 800, marginBottom: 4 }}>{item.title}</div>
                <div style={{ color: '#a8b5a0', fontSize: 14 }}>{item.desc}</div>
              </div>
              <div style={{ color: '#00d4aa', fontSize: 20, flexShrink: 0 }}>›</div>
            </a>
          ))}
        </div>
      </section>

      {/* Digital Products */}
      <section style={{
        padding: '100px 20px',
        background: 'rgba(0,212,170,0.03)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
        borderBottom: '1px solid rgba(0,212,170,0.1)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: 20,
              background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)',
              color: '#00d4aa', fontSize: 12, fontWeight: 700, marginBottom: 20, letterSpacing: '1px',
            }}>
              DIGITAL PRODUCTS
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
              Level Up Your Game
            </h2>
            <p style={{ fontSize: 16, color: '#a8b5a0', maxWidth: 520, margin: '0 auto' }}>
              Guides, trackers, and practice plans to lower your scores fast.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {digitalProducts.map((product, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', border: product.highlight ? '2px solid rgba(0,212,170,0.5)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: 32, position: 'relative',
              }}>
                {product.highlight && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00d4aa, #00a885)', color: '#000',
                    padding: '4px 16px', borderRadius: 20, fontSize: 12, fontWeight: 800, whiteSpace: 'nowrap',
                  }}>
                    {product.highlight}
                  </div>
                )}
                <div style={{ fontSize: 44, marginBottom: 16 }}>{product.emoji}</div>
                <h3 style={{ fontSize: 19, fontWeight: 900, marginBottom: 12, lineHeight: 1.3, margin: '0 0 12px 0' }}>{product.name}</h3>
                <p style={{ fontSize: 14, color: '#a8b5a0', lineHeight: 1.65, marginBottom: 24, margin: '0 0 24px 0' }}>{product.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontSize: 32, fontWeight: 900, color: '#00d4aa' }}>{product.price}</span>
                  <span style={{ fontSize: 13, color: '#666' }}>One-time · Instant download</span>
                </div>
                <a href={product.link} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block', textAlign: 'center', padding: '14px', borderRadius: 10,
                  background: product.highlight ? 'linear-gradient(135deg, #00d4aa, #00a885)' : 'rgba(0,212,170,0.15)',
                  border: product.highlight ? 'none' : '1px solid rgba(0,212,170,0.4)',
                  color: product.highlight ? '#000' : '#00d4aa', fontWeight: 800, fontSize: 15,
                  textDecoration: 'none',
                }}>
                  Buy Now on Gumroad →
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/products" style={{ color: '#00d4aa', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
              View all digital products →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section style={{ padding: '100px 20px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
            Latest from the Blog
          </h2>
          <p style={{ fontSize: 16, color: '#a8b5a0' }}>Honest golf takes. No sponsored garbage.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{
              display: 'flex', alignItems: 'center', gap: 20, padding: '24px',
              borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              textDecoration: 'none',
            }}>
              <span style={{
                fontSize: 32, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 12, background: 'rgba(0,212,170,0.1)', flexShrink: 0,
              }}>{post.emoji}</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: 13, color: '#a8b5a0', margin: '0 0 8px 0' }}>{post.excerpt}</p>
                <div style={{ fontSize: 12, color: '#555' }}>{post.date} · {post.readTime}</div>
              </div>
              <div style={{ color: '#00d4aa', fontSize: 20, flexShrink: 0 }}>›</div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/blog" style={{
            display: 'inline-block', padding: '14px 36px', borderRadius: 30,
            border: '1px solid rgba(0,212,170,0.4)', color: '#00d4aa',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
          }}>
            Read All Posts →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #0d2012 0%, #091506 100%)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>📬</div>
          <h2 style={{ fontSize: 30, fontWeight: 900, margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>
            Get the Creek Ball Newsletter
          </h2>
          <p style={{ fontSize: 15, color: '#a8b5a0', marginBottom: 32, lineHeight: 1.65 }}>
            Weekly tips, ball deals, and creek finds. Free. No spam. Unsubscribe anytime.
          </p>
          <form action="/api/subscribe" method="POST" style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              style={{
                flex: 1, minWidth: 200, padding: '14px 18px', borderRadius: 10,
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontSize: 15, outline: 'none',
              }}
            />
            <button type="submit" style={{
              padding: '14px 28px', borderRadius: 10, background: 'linear-gradient(135deg, #00d4aa, #00a885)',
              color: '#000', fontWeight: 800, fontSize: 15, border: 'none', cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '48px 20px',
        background: '#060e05',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#00d4aa', marginBottom: 8 }}>⛳ TeeEmHigh</div>
              <div style={{ fontSize: 14, color: '#555', maxWidth: 220, lineHeight: 1.6 }}>
                Real golf. Honest reviews. Creek balls.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#00d4aa', marginBottom: 12, letterSpacing: '0.8px', textTransform: 'uppercase' }}>Site</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[['/', 'Home'], ['/blog', 'Blog'], ['/products', 'Products']].map(([href, label]) => (
                    <Link key={href} href={href} style={{ color: '#888', textDecoration: 'none', fontSize: 14 }}>{label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#00d4aa', marginBottom: 12, letterSpacing: '0.8px', textTransform: 'uppercase' }}>Connect</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a href="https://tiktok.com/@teeemhigh" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none', fontSize: 14 }}>TikTok</a>
                  <a href="mailto:teeemhigh@gmail.com" style={{ color: '#888', textDecoration: 'none', fontSize: 14 }}>Email</a>
                  <a href="https://tompoai.gumroad.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none', fontSize: 14 }}>Gumroad</a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, fontSize: 13, color: '#444', lineHeight: 1.8 }}>
            <p style={{ margin: '0 0 6px 0' }}>As an Amazon Associate, I earn from qualifying purchases.</p>
            <p style={{ margin: 0 }}>© 2026 TeeEmHigh · teeemhigh.shop · <a href="mailto:teeemhigh@gmail.com" style={{ color: '#555', textDecoration: 'none' }}>teeemhigh@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
