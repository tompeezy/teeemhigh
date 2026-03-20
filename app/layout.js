export const metadata = {
  title: 'TeeEmHigh — Tee \'em High, Let \'em Fly',
  description: 'Play Titleist Pro V1s for free. Honest golf ball reviews, creek ball strategies, gear picks, and digital guides for smart golfers.',
  keywords: 'golf balls, titleist pro v1, creek balls, golf ball reviews, cheap golf balls, kirkland golf, best golf balls, golf gear',
  openGraph: {
    title: "TeeEmHigh — Tee 'em High, Let 'em Fly",
    description: "Play Titleist Pro V1s for free. Honest golf reviews from a real golfer.",
    url: 'https://teeemhigh.shop',
    siteName: 'TeeEmHigh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "TeeEmHigh",
    description: "Play Pro V1s for free. Creek ball strategy & honest golf reviews.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛳</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
