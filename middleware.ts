import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const startTime = Date.now();
  const { pathname, search, hostname } = request.nextUrl;
  const method = request.method;
  const userAgent = request.headers.get('user-agent') || 'Unknown';
  const ip = request.headers.get('x-forwarded-for') || 'Unknown';
  const referer = request.headers.get('referer') || 'Direct';
  const acceptLanguage = request.headers.get('accept-language') || 'Unknown';

  // Enhanced logging with more details
  console.log(`[${new Date().toISOString()}] ${method} ${pathname}${search}`);
  console.log(`  Host: ${hostname}`);
  console.log(`  IP: ${ip}`);
  console.log(`  Referer: ${referer}`);
  console.log(`  User-Agent: ${userAgent.substring(0, 150)}`);
  console.log(`  Accept-Language: ${acceptLanguage}`);

  const response = NextResponse.next();

  const endTime = Date.now();
  const duration = endTime - startTime;
  console.log(`  Response Time: ${duration}ms`);
  console.log(`  Status: ${response.status}`);
  console.log('---');

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
