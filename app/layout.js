export const metadata = {
  title: 'TeeEmHigh — Never Buy Golf Balls Again',
  description: 'Play Titleist Pro V1s for free. Honest golf ball reviews, creek ball strategies, and the best deals for smart golfers.',
  keywords: 'golf balls, titleist, pro v1, creek balls, golf ball reviews, cheap golf balls',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛳</text></svg>" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
