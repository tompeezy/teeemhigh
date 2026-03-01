export default function Home() {
  const featuredBalls = [
    {
      name: 'Titleist Pro V1',
      tagline: 'The GOAT. Period.',
      why: 'The ball Tour pros play. Soft feel, insane spin control, holds greens like glue. The standard.',
      price: '$55/dozen retail',
      deal: 'Find them free in creeks 😎',
      link: 'https://www.amazon.com/Titleist-Prior-Generation-Golf-Balls/dp/B09RQWZYQS?tag=teeemhigh-20',
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
      category: 'Gloves',
      title: 'Grip It Right',
      desc: 'Cheap gloves slip. Good gloves last 20+ rounds. Worth the $15.',
      link: 'https://www.amazon.com/s?k=golf+gloves+men&tag=teeemhigh-20',
      emoji: '🧤',
    },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1408',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, #0d2012 0%, #0a1408 100%)',
        padding: '80px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)',
        }} />
        
        <div style={{
          width: 100,
          height: 100,
          margin: '0 auto 24px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d4aa 0%, #00a885 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 50,
          border: '4px solid rgba(0,212,170,0.2)',
          boxShadow: '0 10px 40px rgba(0,212,170,0.3)',
        }}>
          ⛳
        </div>
        
        <h1 style={{
          fontSize: 'clamp(36px, 8vw, 56px)',
          fontWeight: 900,
          margin: '0 0 20px 0',
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, #fff 0%, #00d4aa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-1px',
        }}>
          I Haven&apos;t Bought<br />Golf Balls in Years
        </h1>
        
        <p style={{
          fontSize: 24,
          color: '#00d4aa',
          fontWeight: 700,
          margin: '0 0 16px 0',
          letterSpacing: '-0.5px',
        }}>
          And you don&apos;t have to either.
        </p>
        
        <p style={{
          fontSize: 17,
          color: '#a8b5a0',
          maxWidth: 560,
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Every Sunday, I walk the creek beds at my local course. I find Pro V1s, TP5s, Chrome Softs — barely used. 
          Golfers lose balls. <strong style={{ color: '#00d4aa' }}>I play them for free.</strong> You can too.
        </p>

        <a
          href="https://tiktok.com/@teeemhigh"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '18px 56px',
            borderRadius: 50,
            background: 'linear-gradient(135deg, #00d4aa 0%, #00a885 100%)',
            color: '#000',
            fontWeight: 900,
            fontSize: 17,
            textDecoration: 'none',
            letterSpacing: '0.5px',
            boxShadow: '0 8px 24px rgba(0,212,170,0.4)',
            transition: 'all 0.3s',
          }}
        >
          Follow @teeemhigh →
        </a>
      </section>

      {/* Philosophy */}
      <section style={{
        padding: '80px 20px',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 900,
          marginBottom: 16,
          textAlign: 'center',
          letterSpacing: '-0.5px',
        }}>
          The Creek Ball Philosophy
        </h2>
        
        <p style={{
          fontSize: 16,
          color: '#a8b5a0',
          textAlign: 'center',
          marginBottom: 48,
          maxWidth: 600,
          margin: '0 auto 48px',
        }}>
          Why pay $4-5 per ball when you can play the same ones for free?
        </p>

        <div style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}>
          {[
            { emoji: '💰', title: 'Stop Overpaying', desc: '$55/dozen for Pro V1s? Nah. Find them free or buy used for $1/ball. Same performance, zero guilt.' },
            { emoji: '🌱', title: 'Reduce Waste', desc: 'Millions of golf balls end up in water hazards every year. Pull them out. Clean them. Play them.' },
            { emoji: '🎯', title: 'Play Without Fear', desc: 'When your ball costs $0, you swing free. No hesitation over water. No fear on tight holes.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(0,212,170,0.05)',
              border: '2px solid rgba(0,212,170,0.15)',
              borderRadius: 16,
              padding: 32,
              textAlign: 'center',
              transition: 'all 0.3s',
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{item.emoji}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: '#00d4aa' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 15, color: '#a8b5a0', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Balls */}
      <section style={{
        padding: '80px 20px',
        background: 'rgba(0,212,170,0.03)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
        borderBottom: '1px solid rgba(0,212,170,0.1)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 900,
            marginBottom: 12,
            textAlign: 'center',
            letterSpacing: '-0.5px',
          }}>
            The Balls Worth Playing
          </h2>
          <p style={{
            fontSize: 16,
            color: '#a8b5a0',
            textAlign: 'center',
            marginBottom: 48,
          }}>
            No BS. These are the balls I actually play (or recommend).
          </p>

          <div style={{
            display: 'grid',
            gap: 28,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}>
            {featuredBalls.map((ball, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: `2px solid ${ball.color}30`,
                borderRadius: 20,
                padding: 32,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s',
              }}>
                <div style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  background: `${ball.color}08`,
                }} />
                
                <div style={{ fontSize: 48, marginBottom: 12 }}>{ball.emoji}</div>
                
                <h3 style={{
                  fontSize: 24,
                  fontWeight: 900,
                  marginBottom: 8,
                  color: ball.color,
                  letterSpacing: '-0.5px',
                }}>
                  {ball.name}
                </h3>
                
                <p style={{
                  fontSize: 15,
                  color: '#00d4aa',
                  fontWeight: 700,
                  marginBottom: 16,
                }}>
                  {ball.tagline}
                </p>
                
                <p style={{
                  fontSize: 15,
                  color: '#ccc',
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}>
                  {ball.why}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 24,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div>
                    <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>Retail</div>
                    <div style={{ fontSize: 17, fontWeight: 800 }}>{ball.price}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>Smart Move</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#00d4aa' }}>{ball.deal}</div>
                  </div>
                </div>
                
                <a
                  href={ball.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '14px',
                    borderRadius: 10,
                    background: ball.color,
                    color: '#000',
                    fontWeight: 800,
                    fontSize: 15,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  View on Amazon →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Picks */}
      <section style={{
        padding: '80px 20px',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: 32,
          fontWeight: 900,
          marginBottom: 48,
          textAlign: 'center',
          letterSpacing: '-0.5px',
        }}>
          Other Gear Worth Having
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {gearPicks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '24px',
                borderRadius: 14,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <span style={{
                fontSize: 40,
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                background: 'rgba(0,212,170,0.12)',
                flexShrink: 0,
              }}>
                {item.emoji}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#00d4aa', fontSize: 13, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {item.category}
                </div>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 800, marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ color: '#a8b5a0', fontSize: 14 }}>
                  {item.desc}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '100px 20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0a1408 0%, #0d2012 100%)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
      }}>
        <h2 style={{
          fontSize: 42,
          fontWeight: 900,
          marginBottom: 20,
          lineHeight: 1.2,
          letterSpacing: '-1px',
        }}>
          Tee &apos;em high,<br />let &apos;em fly 🏌️
        </h2>
        
        <p style={{
          fontSize: 17,
          color: '#a8b5a0',
          marginBottom: 40,
          maxWidth: 480,
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          Follow for honest reviews, budget ball picks, and creek ball strategies. No fluff, just golf.
        </p>

        <a
          href="https://tiktok.com/@teeemhigh"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '18px 56px',
            borderRadius: 50,
            background: 'linear-gradient(135deg, #00d4aa 0%, #00a885 100%)',
            color: '#000',
            fontWeight: 900,
            fontSize: 17,
            textDecoration: 'none',
            letterSpacing: '0.5px',
            boxShadow: '0 8px 24px rgba(0,212,170,0.4)',
          }}
        >
          @teeemhigh on TikTok
        </a>

        <div style={{
          marginTop: 64,
          fontSize: 13,
          color: '#555',
          lineHeight: 1.8,
        }}>
          <p style={{ margin: '0 0 8px 0' }}>
            As an Amazon Associate, I earn from qualifying purchases.
          </p>
          <p style={{ margin: 0 }}>
            © 2026 TeeEmHigh · Powered by <a href="https://tompoai.shop" style={{ color: '#00d4aa', textDecoration: 'none' }}>Tompo AI</a>
          </p>
        </div>
      </section>
    </div>
  )
}
