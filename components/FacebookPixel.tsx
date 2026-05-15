'use client'

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
      <script
        id="fb-pixel"
        src="/fb-pixel.js"
        async
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            fbq('init', '${fpixel.FB_PIXEL_ID}');
          `,
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