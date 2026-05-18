import type { Metadata } from 'next'
import { Suspense } from 'react'
import FacebookPixel from '@/components/FacebookPixel'
import GoogleTag from '@/components/GoogleTag'
import './globals.css'

export const metadata: Metadata = {
  title: 'HIFU — Non-Surgical Face Lifting | Iconique',
  description: 'Revolutionary non-surgical face lifting treatment.',
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
          <GoogleTag />
        </Suspense>
        {children}
      </body>
    </html>
  )
}