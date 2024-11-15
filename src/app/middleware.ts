import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret_here'; // Same secret as in the login route

export function middleware(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return NextResponse.redirect(new URL('/', request.url));

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { isAdmin: boolean };
    if (request.nextUrl.pathname.startsWith('/admin') && !decoded.isAdmin) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Protect all admin routes
};
