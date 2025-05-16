import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated, getRedirectByRole, hasPermission } from './lib/auth';

const privatePath = ['/admin', '/panel'];
const publicPath = ['/', '/login', '/register'];

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const sessionToken = request.cookies.get('sessionToken')?.value;
    const role = request.cookies.get('role')?.value;

    // get subdomain
    const domain = request.headers.get('host') || '';
    const splitDomain = domain.split('.');
    const hasSubdomain = splitDomain.length >= 2;

    if (hasSubdomain) {
        const storename = splitDomain[0];

        // Rewrite lại URL mà không thay đổi URL trong thanh địa chỉ của người dùng
        const newUrl = `/theme/${storename}${pathname}`;
        return NextResponse.rewrite(new URL(newUrl, request.url));
    }

    // Nếu không có subdomain → dùng logic phân quyền
    if (privatePath.some((path) => pathname.startsWith(path)) && !isAuthenticated(sessionToken)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (publicPath.includes(pathname) && isAuthenticated(sessionToken)) {
        return NextResponse.redirect(new URL(getRedirectByRole(role), request.url));
    }

    if (!hasPermission(pathname, role)) {
        return NextResponse.redirect(new URL(getRedirectByRole(role), request.url));
    }

    return NextResponse.next();
}
