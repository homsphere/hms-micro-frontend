import { withMiddlewareAuthRequired, getSession, getAccessToken } from '@auth0/nextjs-auth0/edge';
import { NextResponse, NextRequest } from 'next/server';

export default withMiddlewareAuthRequired(async function middleware(req: NextRequest) {
  try {
    console.log('withMiddlewareAuthRequired req.nextUrl', req.nextUrl.href);
    const res = NextResponse.next();
    const currentRoute = req.nextUrl.pathname;
    const user = await getSession(req, res);
    const externalId = user?.user?.sub;
    console.log('withMiddlewareAuthRequired', externalId);
    if (!externalId) {
      throw new Error('MiddleWare auth - User is not available');
    }
    const { accessToken } = await getAccessToken();
    if (!accessToken) {
      throw new Error('MiddleWare auth - accessToken is not available');
    }

    if (currentRoute === '/') {
      return NextResponse.redirect(`${origin}/dashboard`);
    }

    return NextResponse.next();
  } catch (error) {
    console.log('MiddleWare auth - Error', error);
    return NextResponse.redirect(`${req.nextUrl.origin}/api/auth/login`);
  }
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logout).*)',
    '/',
    '/dashboard',
    '/supervisor',
    '/supervisor/:path*',
    '/admin',
    '/admin/:path*',
  ],
};
