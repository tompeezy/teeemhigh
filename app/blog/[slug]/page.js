import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts = {
  'creek-ball-strategy': {
    title: "Why I Haven't Bought Golf Balls in 3 Years (Creek Ball Strategy)",
    date: 'March 15, 2026',
    readTime: '6 min read',
    category: 'Strategy',
    emoji: '💧',
    description: "Every Sunday I walk the creek beds at my local course. I find Pro V1s, TP5s, and Chrome Softs — barely used. Here's the complete creek ball strategy.",
    content: `
It started as a fluke.

Three years ago, I was playing the par-3 14th at my local muni — the one where half the field dumps it in the creek short of the green. After my round, I walked over to grab the ball I had shanked into the hazard. While I was in there, knee-deep in murky water, I found *eight* Pro V1s sitting on the bottom.

Eight. Just sitting there.

I took them home, cleaned them up, and played them the next week. They were perfect. Barely a mark on them. I started thinking: if this one spot has eight balls after one round... what's the whole course hiding?

**The Numbers Don't Lie**

The average golfer loses about 2 balls per round. With 300 rounds played annually at a typical public course, that's 600 balls going into hazards, trees, and rough every year — at just one facility. The Pro V1 goes for about $4.50 a ball new. Do the math.

At my local course, I now know every productive water hazard by heart. I have a rotation. I pull 20-40 balls every Sunday morning before my tee time. My cost per round for golf balls: $0.00.

**What You Need**

You don't need much gear for this:

- **A telescoping ball retriever** — The kind that extends to 6-7 feet. You can get a decent one for about $15 on Amazon. Don't use your foot or a stick. Precision matters when balls are rolling around on a creek bed.
- **A shag bag** — One of those mesh bags that lets you scoop balls without bending over. Game changer for gathering balls quickly once you've found a productive spot.
- **An old towel** — Keep it in your bag. You'll want to wipe balls down before pocketing them.
- **Rubber boots or waterproof shoes** — Optional, but helpful if you want to get into shallower sections without soaking your feet.

**The Best Spots**

Not all hazards are created equal. Here's where the good balls hide:

*Short par-3s over water:* These are the motherlode. Golfers who come up short drop their ball within a 10-foot radius every single day. The same spot. Over and over. The ball graveyard is always in the same place. Learn where golfers who miss short drop it, and you'll find balls stacked up like a layer cake.

*Layup zones on par-4s and 5s:* When a hole has a pond or creek at the layup distance for a typical amateur (180-220 yards), balls accumulate fast. Everyone who pulls the wrong club or catches it thin — that's your haul.

*Creek crossings on doglegs:* If a creek runs across a dogleg and the smart play requires a carry, the players who try to cut the corner and miss are feeding you Pro V1s on the regular.

**When to Go**

Early morning on weekends before courses open is peak time. The balls from Friday evening and Saturday accumulate overnight. No other scavengers have been through yet. I get there 30-40 minutes before my tee time and do a quick circuit of 3-4 spots I know are productive.

After a tournament is another golden window. Competition rounds push handicaps, which means more mishits, which means more balls in hazards.

**Grading Your Finds**

Not every ball you pull out is a keeper. Here's how I grade them:

- **Grade 1 (Play it):** No visible cuts, no discoloration, logo still sharp. These go in my bag immediately.
- **Grade 2 (Range):** Minor scuffs, slight discoloration, maybe a cart path scrape. These are my range balls.
- **Grade 3 (Recycle):** Deep cuts, cracked cover, waterlogged feel. Toss them or use them for chipping practice in the yard.

You'll find more Grade 1 and 2 balls than you'd expect. Most balls that go into water are lost on the first shot — meaning they haven't been played yet. Fresh from the sleeve. The golfer just hit it fat on their ceremonial first swing, watched it splash, and pulled out a fresh ball.

**The Brands I Find Most**

In order of frequency at my local course:

1. Titleist Pro V1 / Pro V1x — These are everywhere. The most popular premium ball means the most lost.
2. Callaway Chrome Soft — Common at any course where the 50+ crowd plays.
3. TaylorMade TP5 / TP5x — Tour balls, almost always in Grade 1 condition.
4. Srixon Z-Star — Underrated find. Very playable.
5. Bridgestone Tour B — Less common but solid when you find them.

**Can't Find Creeks? Here's the Backup Plan**

Some courses have fully fenced or inaccessible hazards. Or maybe you play somewhere dry where water hazards are rare. No problem.

Used premium balls on Amazon are the next best thing. You can get a dozen near-mint Pro V1s for $15-20 — about a third of what they cost new. Same ball. Same performance. The difference to your swing? Zero. The difference to your bank account? Real.

I've tested used balls side by side with new ones. Unless you're playing at a Tour level where micro-spin differences actually matter (you're not), you cannot tell the difference in performance.

**The Mental Game Bonus**

Here's the part nobody talks about: when your ball cost you nothing, you swing differently.

That par-3 over water that used to make you grip the club like you were strangling a snake? Now you step up, pick your target, and swing. Because if the ball goes in the drink, you go back to the creek on Sunday and get a dozen more.

Fear of losing a $5 ball is a real performance inhibitor. The creek ball strategy doesn't just save you money — it loosens your swing.

Try it for one month. I promise you won't go back.

**The Gear I Use**
    `,
    affiliateLinks: [
      { text: 'Shop used Titleist balls on Amazon', url: 'https://www.amazon.com/s?k=used+titleist+golf+balls&tag=teeemhigh-20', note: 'Near-mint condition, fraction of new price' },
      { text: 'Golf ball shag bags on Amazon', url: 'https://www.amazon.com/s?k=golf+ball+shag+bag&tag=teeemhigh-20', note: 'Essential for efficient collection' },
      { text: 'Titleist Pro V1 on Amazon', url: 'https://www.amazon.com/dp/B09RQWZYQS?tag=teeemhigh-20', note: 'The GOAT ball, worth knowing the retail price' },
    ],
  },

  'pro-v1-vs-kirkland': {
    title: 'Titleist Pro V1 vs Kirkland Signature: Honest Comparison',
    date: 'February 28, 2026',
    readTime: '7 min read',
    category: 'Ball Reviews',
    emoji: '⚖️',
    description: "I played both balls for a full month — 8 rounds each. Here's the data, the feel, and the honest verdict. No brand loyalty, just results.",
    content: `
Before I start: I have zero loyalty to either brand. I play creek balls 90% of the time and only buy balls when I want to run a test like this. What follows is 8 rounds of data, not marketing copy.

**The Balls**

The **Titleist Pro V1** is the most played ball on the PGA Tour and has been for years. 3-piece construction, urethane cover, 388 dimples. Designed for a penetrating trajectory and mid-range spin. Retails for about $55 a dozen — around $4.58 per ball.

The **Kirkland Signature** is Costco's golf ball, and it's become genuinely famous. 3-piece, urethane cover, engineered to compete directly with the premium market. At $14 for a pack of 12, it comes in at $1.17 per ball — a 75% discount versus the Pro V1.

I played 8 rounds with each ball, same courses, same weather conditions (mostly), same clubs. I tracked driving distance, GIR, putts, and scored each round.

**The Feel Comparison**

Off the driver: both balls are surprisingly similar. I had expected the Kirkland to feel noticeably firmer, but it doesn't. Maybe marginally so. On a mis-hit, the Kirkland transmits slightly more vibration — that hollow "not great" feedback is more obvious than the Pro V1's muted response. This matters at impact but fades in memory within seconds.

Off the irons: this is where the Pro V1 starts to separate itself. Mid-iron shots with the Pro V1 have a buttery quality that's hard to describe. The Kirkland feels solid but not quite the same. For high-handicappers, this won't register. For mid-handicappers who have played premium balls, you'll notice.

On the greens: chipping and putting with both balls felt similar. The Kirkland checked up well around the greens — better than I expected. Putting off the face was nearly identical; I couldn't distinguish them in a blind test on the green.

**The Spin Numbers**

I don't have launch monitor data for this comparison — this is course testing, real-world conditions.

My observation: the Pro V1 spins more on wedge shots. On full approach shots with a 50-degree wedge, the Pro V1 stopped faster and more reliably. The Kirkland landed and kicked, then checked — it held, but took a step or two more. On tight pins with firm greens, this matters.

For tee shots, I didn't notice a meaningful spin difference. Both balls performed well off the driver.

**Distance**

Honestly? I couldn't tell a consistent difference. If anything, I hit the Kirkland slightly longer off the tee — probably because it's marginally firmer — but we're talking 2-3 yards at most, which is well within my normal variance from shot to shot.

**Durability**

The Pro V1 held up better over 18 holes. After a round in normal playing conditions, the Kirkland showed more scuffing — particularly from cart path contacts and bunker play. The cover is slightly softer and less durable. It still played fine, just looked worse.

**The Scorecard**

Over 8 rounds with each ball, my average score was nearly identical: one shot lower with the Pro V1. That's within normal statistical noise. I wouldn't claim the ball made the difference.

What I will say: in the 2-3 rounds per 8 where I faced pins on firm greens and needed spin to stop the ball, the Pro V1 performed better. In routine rounds on receptive surfaces, the Kirkland kept up completely.

**The Honest Verdict**

**If you're a 20+ handicap:** Buy the Kirkland. No question. You will not find $40 worth of value in the Pro V1. The difference in spin control only matters when your ball striking is consistent enough to generate and control it — and at 20+, that's not where you are yet. Use that $40 savings for a lesson.

**If you're a 10-20 handicap:** The Kirkland is excellent and will save you a ton of money. But if you're in a position where you're shooting in the low 80s and chasing the mid-70s, a handful of rounds a year the Pro V1's superior spin performance might save you a stroke or two. Whether that's worth $40 extra per dozen is a personal call.

**If you're a single-digit:** You already know what ball you play and why. But for those testing the Kirkland as a practice ball or for casual rounds — it absolutely holds up.

**The Bottom Line**

The Kirkland Signature is the best value in golf, period. For 75% of golfers, it's the right choice. The Pro V1 is a genuinely better ball — a little better feel, a little more spin on approach shots, slightly better durability — but whether those differences are worth $40 extra per dozen depends entirely on your game.

If you're hunting a middle ground: look at used Pro V1s. Near-mint condition for $15-20 a dozen. Best of both worlds.
    `,
    affiliateLinks: [
      { text: 'Titleist Pro V1 on Amazon', url: 'https://www.amazon.com/dp/B09RQWZYQS?tag=teeemhigh-20', note: 'The Tour standard — worth knowing' },
      { text: 'Shop used Titleist balls on Amazon', url: 'https://www.amazon.com/s?k=used+titleist+golf+balls&tag=teeemhigh-20', note: 'Best of both worlds — premium ball, budget price' },
    ],
  },

  'best-golf-balls-beginners-2026': {
    title: 'Best Golf Balls for Beginners in 2026',
    date: 'January 20, 2026',
    readTime: '5 min read',
    category: 'Buying Guide',
    emoji: '🏌️',
    description: "Don't waste money on Pro V1s when you're starting out. These are the balls that will actually help your game and your wallet.",
    content: `
Let's get one thing straight: if you're new to golf, buying Pro V1s is a waste of money.

Not because the Pro V1 isn't a great ball — it is. But because the characteristics that make it great (high spin, soft feel, precise control) only benefit golfers whose ball striking is consistent enough to actually leverage those properties. When you're a beginner, you're going to lose a lot of balls, you're not generating enough swing speed to compress a premium ball properly, and the spin differences between a $5 ball and a $5 ball are invisible to you at this stage.

Here's what you should actually play.

**The #1 Pick: Callaway Supersoft**

The Supersoft has been the go-to beginner ball for years, and it earns the title. Here's why:

Low compression (35 compression rating) means the ball compresses easily even at lower swing speeds, which gives you more distance. Most beginners swing between 70-85 mph with the driver — the Supersoft is engineered for exactly that speed range. Premium balls like the Pro V1 are optimized for 95+ mph swings.

The soft cover also means more forgiveness on off-center hits. When you catch the ball thin or off the heel, the Supersoft doesn't punish you as hard as a firmer ball would.

Price: about $22/dozen. Under $2 per ball, and you can lose them freely without it hurting.

**Best Budget Option: Srixon Soft Feel**

Srixon doesn't get the marketing budget of Titleist or Callaway, which is why this ball is chronically underrated and underpriced.

The Soft Feel has a low compression core and a soft ionomer cover that gives surprisingly good feedback for the price range. At around $20/dozen, it's fractionally cheaper than the Supersoft and performs almost identically. I've played dozens of rounds with this ball and been consistently impressed.

This is my honest recommendation for anyone who wants to spend a little less. You're not giving up much.

**For Seniors and Slower Swing Speeds: Titleist Tour Soft**

If you're a senior golfer or have a slower swing speed (under 80 mph), the Titleist Tour Soft is worth considering. It's not a cheap ball at around $35/dozen, but it's engineered specifically for moderate swing speeds — unlike the Pro V1, which is for fast swing speeds.

The Tour Soft gives you Titleist quality and a genuinely satisfying feel without the premium price tag of the Pro V1.

**What to AVOID as a Beginner**

*Pro V1 and Pro V1x:* Great balls. Wrong ball for your swing speed. Save your money.

*Any 4+ piece ball:* Multi-layer balls with complex cores are designed to separate spin rates between driver shots and approach shots. This is a Tour-level technology that requires a Tour-level swing to activate. Beginners get zero benefit.

*Anything with "Tour" in the name at a premium price:* Marketing targeting the golfer you want to be, not the golfer you are right now.

*Really cheap no-name balls:* The $10/dozen balls from unknown brands at the dollar store are genuinely bad. They're hard as rocks, fly weird, and feel terrible on the greens. The Supersoft and Soft Feel are cheap — you don't need to go cheaper than that.

**The Beginner Upgrade Path**

Here's how I'd think about progression:

- **Beginner (20+ handicap, just starting):** Callaway Supersoft or Srixon Soft Feel. Focus on keeping the ball in play and learning the game. Use whatever creek balls you can find.

- **Intermediate (12-20 handicap):** Move to the Kirkland Signature or TaylorMade Distance+. You'll notice the improved feel on chips and putts.

- **Low handicap (under 12):** Now you can start thinking about premium balls. The Pro V1, TP5, and Chrome Soft will start to show their advantages as your ball striking gets more consistent.

**One More Thing**

The best golf ball for a beginner is the one in your bag when you hit the shot. Losing balls slows down play, costs money, and frustrates you. The Supersoft flies straight and goes a long way even on mishits. That's what you need right now.

Save the Pro V1 discussion for when you're consistently breaking 90. There's no shame in that timeline — it's just the honest truth.
    `,
    affiliateLinks: [
      { text: 'Callaway Supersoft on Amazon', url: 'https://www.amazon.com/Callaway-Golf-Supersoft-Balls-White/dp/B0BX4DQGDZ?tag=teeemhigh-20', note: 'Best beginner ball, period' },
      { text: 'Srixon Soft Feel on Amazon', url: 'https://www.amazon.com/Srixon-Soft-Feel-Dozen-White/dp/B0BVNHM4XR?tag=teeemhigh-20', note: 'Best budget option — seriously underrated' },
      { text: 'Titleist Pro V1 on Amazon', url: 'https://www.amazon.com/dp/B09RQWZYQS?tag=teeemhigh-20', note: 'For when you break 90 consistently' },
    ],
  },

  'how-to-find-golf-balls-water-hazards': {
    title: 'How to Find Golf Balls in Water Hazards (Complete Guide)',
    date: 'January 5, 2026',
    readTime: '8 min read',
    category: 'Strategy',
    emoji: '🔍',
    description: "The gear you need, the best spots to look, the laws around it, and how to grade what you find. Everything from someone who does this every week.",
    content: `
I get asked about this constantly, so here's the complete guide.

Finding golf balls in water hazards is legal (with some important caveats), surprisingly productive, and genuinely addictive once you start finding Pro V1s by the dozen. Here's everything you need to know.

**Is It Legal?**

The first question everyone asks, and the answer is: *it depends.*

In most cases, once a ball goes into a water hazard and the golfer takes relief (drops a new ball), the original ball is effectively abandoned. It belongs to whoever finds it. This is the situation at the vast majority of public courses.

However:

- **Private clubs:** The course may claim ownership of any balls on the property, including those in hazards. Retrieving balls from a private club without permission could be considered theft or trespassing. Always get permission first.
- **During active play:** Don't go ball hunting while golfers are playing the hole. Obviously. That's both rude and dangerous.
- **Posted signs:** Some courses explicitly post signs saying balls in hazards belong to the course. Respect these.

My approach: I play at public courses, I go early in the morning before rounds start, and I've never had anyone give me grief. Common sense applies.

**The Gear**

You don't need much, but having the right tools makes a massive difference:

*Ball retriever:* A telescoping retriever (6-7 feet is ideal) with a scoop or spring-loaded cup at the end. This lets you grab balls from shallow water or muddy creek beds without getting wet. I've used the same $15 one for two years.

*Shag bag:* A mesh shag bag is designed exactly for this purpose — you can scoop a ball into it without bending over, and it holds 50+ balls easily. Use it to carry your haul without juggling.

*Waterproof shoes or rubber boots:* For getting into shallow sections of creeks. Not always necessary, but your feet will thank you when a good spot requires wading in.

*Bucket and cleaning supplies:* Bring a bucket with some dish soap and an old toothbrush. Clean the balls on-site, grade them before carrying them home.

**Where to Look**

The productive spots at any course follow predictable patterns:

*Par-3s over water:* The most productive spots, always. When a par-3 requires a carry over a pond, creek, or stream, every golfer who comes up short in 20 years has dropped their ball in the same zone. These spots can have hundreds of balls stacked up.

Specifically, focus on the shallow leading edge of the water — the bank closest to the tee box. Balls that barely missed the carry don't roll far; they're sitting right at the edge.

*Layup zones on long holes:* On a par-5 with a creek crossing at 200 yards, every player who tries to carry it and fails feeds you a fresh ball. Identify the layup zones on your course and check the water that catches the over-aggressive plays.

*Doglegs that tempt a shortcut:* That pond on the inside corner of a dogleg? Golfers who try to cut the corner and pull it? They've been feeding that pond for years.

*Slow-moving creeks:* Unlike ponds, creeks actually move balls over time. You'll find concentrations wherever the current slows — behind rocks, at bends, in deeper pools. Follow the flow to find where balls accumulate.

**How to Work a Spot**

When you arrive at a productive location:

1. Work the shallow edges first. Most balls are within 5 feet of the bank in 6-18 inches of water.

2. Use the retriever to feel along the bottom systematically. Sweep in arcs from the bank outward. Balls on creek beds can be covered in silt.

3. In clear water, look for the subtle circular dimple pattern. A smooth rock and a golf ball look similar at depth, but the dimples catch light differently.

4. In murky water, feel for the characteristic firmness. A ball feels distinctly different from a rock or a stick.

5. Don't rush. A productive spot rewards patience. I've spent 15 minutes at one creek crossing and pulled 22 balls.

**Grading Your Finds**

Before you load up your bag with every ball you find, learn to grade them on-site:

*Grade 1 — Play it:* Pristine or near-pristine. No cuts, no scuffs that break the cover, logo still clearly visible, no discoloration from prolonged water exposure. Feels solid when compressed between thumb and forefinger. These go straight in your bag.

*Grade 2 — Range balls:* Minor surface scuffing, maybe a cart path scrape, slight discoloration. Still performs well but you wouldn't want to putt with it on a tight match. Perfect for range sessions and practice rounds.

*Grade 3 — Discard:* Deep cuts in the cover, significant cracking, dark internal discoloration when you peel back the cover even slightly, soft feeling when compressed (waterlogged). These perform inconsistently and aren't worth carrying home.

One important test: squeeze the ball firmly. A grade 3 ball that's waterlogged will feel slightly squishy or springy in a wrong way. If it doesn't feel like new, downgrade it.

**The Brands Worth Keeping**

Not all brands are equally worth recovering:

**Keep everything:** Titleist Pro V1/Pro V1x/AVX, TaylorMade TP5/TP5x, Callaway Chrome Soft, Bridgestone Tour B, Srixon Z-Star. These are premium balls that retail for $4-5 each.

**Keep if Grade 1:** Callaway Supersoft, TaylorMade Soft Response, Srixon Soft Feel, Wilson Duo Soft. Solid mid-range balls worth keeping if they're in clean condition.

**Leave it:** Ancient Titleist DT Wound or other legacy balls (you'll recognize them by unusual construction or pre-2010 logos). Beaten up Top-Flites. No-name balls with no logo. These aren't worth the carry.

**The Economics**

Over a year of weekly creek walks, I typically recover 800-1200 balls. Of those, maybe 40% are Grade 1. That's 320-480 play-quality balls — at retail value of $4-5 each, that's $1,300 to $2,400 worth of balls I didn't buy.

Even if you only do this occasionally, the returns are excellent. One productive morning can yield 50 balls. At $2 average retail value for a mixed bag of Grade 1s, that's $100 in golf balls from 30 minutes of walking.

**Final Tip**

Tell your regular playing partners about your finds. Nothing builds golf friendships like showing up with a sleeve of Pro V1s for each person in your group. They'll think you're a wizard. You'll know you just woke up early on Sunday.
    `,
    affiliateLinks: [
      { text: 'Golf ball shag bags on Amazon', url: 'https://www.amazon.com/s?k=golf+ball+shag+bag&tag=teeemhigh-20', note: 'Essential gear for ball hunting' },
      { text: 'Shop used Titleist balls on Amazon', url: 'https://www.amazon.com/s?k=used+titleist+golf+balls&tag=teeemhigh-20', note: "For when you can't find them yourself" },
      { text: 'Titleist Pro V1 on Amazon', url: 'https://www.amazon.com/dp/B09RQWZYQS?tag=teeemhigh-20', note: 'What you\'re hunting for in those creeks' },
    ],
  },

  '5-golf-accessories-worth-every-penny': {
    title: '5 Golf Accessories Worth Every Penny Under $50',
    date: 'December 10, 2025',
    readTime: '5 min read',
    category: 'Gear',
    emoji: '🛍️',
    description: "Most golf gear is overpriced garbage. These 5 items genuinely improve your game and they'll cost you less than one box of Pro V1s.",
    content: `
Golf is full of expensive gear that promises to fix your game and delivers exactly nothing.

I've bought a lot of it. I know.

But there are a handful of items in the $15-50 range that are genuinely game-changing — tools that solve real problems and improve real parts of your game. Here they are.

**1. A Rangefinder ($40-50)**

This one isn't optional anymore. If you're playing without a rangefinder, you're guessing distances — and guessing is the single biggest source of bad club selection in recreational golf.

I used to estimate distances the old-fashioned way: flag placement, sprinkler heads, my own gut. I was wrong by 10-20 yards regularly. When you're debating between a 7-iron and a 6-iron and the gap is 15 yards, being off by 15 yards on your distance read means you're always playing the wrong club.

A basic laser rangefinder fixes this completely. You pin the flag, get a reading to the yard, and make a decision based on real information.

You don't need a $300 Bushnell. A basic model in the $40-50 range is accurate enough for recreational golf. The technology is the same; you're paying for features like slope adjustment (useful, but not necessary) and build quality.

The improvement in decision-making you get from accurate distance is worth 2-3 strokes a round to a typical amateur. It's the best golf investment outside of lessons.

**2. A Push Cart ($40-50)**

Walk the course. Seriously. Riding a cart is fine, but walking is better for your golf game, better for your health, and better for the game's culture.

The problem with walking is that carrying a 30-35 lb bag for 18 holes is genuinely tiring, especially in warm weather. By holes 14-18, your legs are tired, your back is complaining, and your decision-making is compromised.

A push cart eliminates all of that. You walk, you stay loose, your brain stays fresh — but your bag rolls effortlessly beside you. You get the benefits of walking without the physical cost of carrying.

A basic 3-wheel push cart in the $40-50 range works perfectly. It's not glamorous but it does the job. Your back will thank you by the 17th hole.

**3. Quality Golf Gloves (Two-Pack, ~$20)**

Most golfers wait too long to replace their gloves. A worn-out glove with dried leather and a loosened grip is actively hurting your game — you're unconsciously gripping tighter to compensate, which tightens your arms, which kills your swing speed.

A fresh glove grips the club correctly with much less pressure. Your grip naturally loosens. Your swing gets freer.

Buying a two-pack is the move: one in play, one in reserve. When the current one gets wet or worn, swap it immediately. The slight tackiness of a new glove is a real performance benefit on sweaty summer rounds.

Don't overthink the brand. Cadet sizes exist if your fingers are shorter relative to your palm width — try both sizes.

**4. A Divot Repair Tool with Ball Marker ($10)**

This is a tiny thing that makes you a better golfer and a better playing partner.

The practical benefit: fixing your own ball marks on greens plus the one previous from you is golf etiquette 101. A good divot tool does this cleanly without tearing the grass fibers.

The actual game benefit: slowing down, taking 20 seconds to fix your mark, and refocusing on your putt before you hit it. The ritual of fixing your mark has a slight meditative effect on high-stakes moments. Sounds fake. Works real.

Get a magnetic one that holds your ball marker on the tool itself — you'll always know where your marker is.

**5. Alignment Sticks ($15)**

This is the cheapest entry on the list and arguably the highest return on investment.

Two thin fiberglass rods that you lay on the ground during practice to train your alignment, swing path, and ball position. Every top instructor uses them. They're available in every tour player's bag on practice days. They solve the most common problem in amateur golf: aiming at the wrong target.

Alignment is genuinely hard to self-diagnose. You feel like you're aimed at the target, but your eyes lie to you from the setup position. Alignment sticks give you an objective reference point.

Use them on the range: one rod pointing at your target, one rod along your toe line. After a few sessions, your alignment becomes habit.

They also work as drill aids: lay one rod across the ground to check ball position, prop one under your armpits to train your turn, hold one across your hips to feel the proper rotation sequence.

$15. Worth 5x that in lessons you won't need.

**The Accessories I DON'T Recommend**

*Weighted training clubs:* Way overpriced for what they do. Do extra reps with your regular club if you want swing speed training.

*GPS watches over $200:* The $35 Garmin Approach S10 does everything you actually need. You don't need the premium stuff.

*Ball markers with luck charms:* Fine, get one, but don't expect it to help your putting stroke.

*Fancy tees:* A tee is a tee. Zero data shows zero-friction or performance tees make any meaningful difference for amateur swing speeds.

The five items above solve real, measurable problems. Everything else is either personal preference or marketing. Start with the rangefinder if you have to pick one.
    `,
    affiliateLinks: [
      { text: 'Golf rangefinders on Amazon', url: 'https://www.amazon.com/s?k=golf+rangefinder&tag=teeemhigh-20', note: 'The single best game-improvement investment' },
      { text: 'Golf push carts on Amazon', url: 'https://www.amazon.com/s?k=golf+push+cart&tag=teeemhigh-20', note: 'Walk the course, save your back' },
      { text: 'Golf ball shag bags on Amazon', url: 'https://www.amazon.com/s?k=golf+ball+shag+bag&tag=teeemhigh-20', note: 'Great for range practice and ball retrieval' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = posts[params.slug]
  if (!post) return {}
  return {
    title: `${post.title} — TeeEmHigh`,
    description: post.description,
  }
}

export default function BlogPost({ params }) {
  const post = posts[params.slug]
  if (!post) notFound()

  // Convert markdown-style content to paragraphs
  const paragraphs = post.content
    .trim()
    .split('\n')
    .reduce((acc, line) => {
      const trimmed = line.trim()
      if (!trimmed) {
        acc.push({ type: 'spacer' })
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length > 4) {
        acc.push({ type: 'heading', text: trimmed.slice(2, -2) })
      } else if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
        acc.push({ type: 'italic', text: trimmed.slice(1, -1) })
      } else {
        // Replace inline bold with spans
        acc.push({ type: 'paragraph', text: trimmed })
      }
      return acc
    }, [])

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
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#00d4aa', textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>← Blog</Link>
          <Link href="/products" style={{ color: '#a8b5a0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Products</Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: 760, margin: '0 auto', padding: '60px 20px 100px' }}>
        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: '#00d4aa',
              letterSpacing: '1px', textTransform: 'uppercase',
            }}>{post.category}</span>
            <span style={{ color: '#333', fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: '#555' }}>{post.date}</span>
            <span style={{ color: '#333', fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: '#555' }}>{post.readTime}</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 900, margin: '0 0 24px 0',
            lineHeight: 1.2, letterSpacing: '-1px',
          }}>
            {post.title}
          </h1>
          <div style={{
            height: 3, width: 60, background: 'linear-gradient(135deg, #00d4aa, #00a885)',
            borderRadius: 2,
          }} />
        </header>

        {/* Content */}
        <div style={{ fontSize: 17, lineHeight: 1.85, color: '#d0d8cc' }}>
          {paragraphs.map((block, i) => {
            if (block.type === 'spacer') return null
            if (block.type === 'heading') {
              return (
                <h2 key={i} style={{
                  fontSize: 22, fontWeight: 900, color: '#fff', margin: '48px 0 16px 0',
                  letterSpacing: '-0.3px', lineHeight: 1.3,
                }}>
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'italic') {
              return (
                <p key={i} style={{
                  fontStyle: 'italic', color: '#a8b5a0', margin: '0 0 4px 0',
                  paddingLeft: 20, borderLeft: '3px solid rgba(0,212,170,0.3)',
                }}>
                  {block.text}
                </p>
              )
            }
            // Render paragraph with inline bold support
            const parts = block.text.split(/(\*\*[^*]+\*\*)/g)
            return (
              <p key={i} style={{ margin: '0 0 20px 0' }}>
                {parts.map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} style={{ color: '#fff', fontWeight: 700 }}>{part.slice(2, -2)}</strong>
                  }
                  return part
                })}
              </p>
            )
          })}
        </div>

        {/* Affiliate Links */}
        {post.affiliateLinks && post.affiliateLinks.length > 0 && (
          <div style={{
            marginTop: 56, background: 'rgba(0,212,170,0.05)',
            border: '1px solid rgba(0,212,170,0.2)', borderRadius: 16, padding: '28px 32px',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#00d4aa', marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Gear from this article
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {post.affiliateLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 18px', borderRadius: 10,
                  background: 'rgba(0,212,170,0.07)', border: '1px solid rgba(0,212,170,0.15)',
                  textDecoration: 'none', gap: 12,
                }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{link.text}</div>
                    <div style={{ fontSize: 13, color: '#888' }}>{link.note}</div>
                  </div>
                  <span style={{ color: '#00d4aa', fontSize: 20, flexShrink: 0 }}>›</span>
                </a>
              ))}
            </div>
            <div style={{ fontSize: 12, color: '#555', marginTop: 16 }}>
              As an Amazon Associate, I earn from qualifying purchases.
            </div>
          </div>
        )}

        {/* More Posts */}
        <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ marginBottom: 24, fontSize: 13, fontWeight: 700, color: '#00d4aa', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            More from TeeEmHigh
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/blog" style={{
              padding: '12px 24px', borderRadius: 30, border: '1px solid rgba(0,212,170,0.3)',
              color: '#00d4aa', fontWeight: 700, fontSize: 14, textDecoration: 'none',
            }}>
              All Posts →
            </Link>
            <Link href="/products" style={{
              padding: '12px 24px', borderRadius: 30, border: '1px solid rgba(255,255,255,0.1)',
              color: '#a8b5a0', fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Digital Products →
            </Link>
          </div>
        </div>
      </article>

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
