'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import * as fpixel from '@/lib/fpixel'

export default function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    fpixel.pageview()
  }, [pathname, searchParams])

  return (
    <>
      <Script
        id="fb-pixel-base"
        src="/fb-pixel.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.fbq('init', fpixel.FB_PIXEL_ID as string)
          window.fbq('track', 'PageView')
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fpixel.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}