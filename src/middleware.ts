import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('better-auth.session_token');

  // Will clean this a little bit later using some sort of array and doing a contain
  const protectedRoutes = ['/profile', '/another'];
  if (!authCookie && protectedRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // We'll see whether we have to make an array for this as well or not ?
  const publicRoutes = ['/login', '/join'];
  if (authCookie && publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/profile', request.url)); // Now from here on it's the duty of the profile page to check if the user is authenticated
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  matcher: ['/login', '/join', '/profile', '/another'],
};
