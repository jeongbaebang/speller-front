import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/speller', request.url))
  }

  if (pathname.startsWith('/server')) {
    const newPathname = pathname.replace(/^\/server/, '')
    return NextResponse.rewrite(new URL(newPathname, SERVER_API_URL))
  }

  return NextResponse.next()
}
