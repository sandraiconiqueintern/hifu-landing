import type { Metadata } from 'next'
import { Suspense } from 'react'
import FacebookPixel from '@/components/FacebookPixel'
import './globals.css'

export const metadata: Metadata = {
  title: 'HIFU — Iconique',
 description: 'Revolutionary non-surgical face lifting treatment. Tighten, lift, and rejuvenate your skin with no surgery and no downtime.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
