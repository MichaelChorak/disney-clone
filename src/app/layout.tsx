import type { Metadata } from 'next'
import './globals.css'

//REMEMBER: Top level file

export const metadata: Metadata = {
  title: 'Disney+ clone',
  description: 'For educational purposes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
