import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Rotas protegidas
  const protectedRoutes = ['/admin', '/perfil', '/favoritos'];

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const authToken = request.cookies.get('auth_token')?.value;

    if (!authToken) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/perfil/:path*', '/favoritos/:path*'],
};
