// app/admin/middleware.js
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  console.log('middleware request', url.pathname);
  // Example: If the path starts with /subapp2/foo, proxy it to sub-app-2
  // if (url.pathname.startsWith('/sub-app-2/foo')) {
  //   console.log('middleware request in');
  //   return NextResponse.rewrite(`http://localhost:3002${url.pathname}`);
  // }

  // Let the request pass through for other routes
  return NextResponse.next();
}

export const config = {
  // matcher: ['/sub-app-2/:path*'], // Apply middleware only to this path
  // matcher: [
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  //   '/((?!api|_next/static|_next/image|favicon.ico).*)',
  // ],
};
