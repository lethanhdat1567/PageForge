import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated, getRedirectByRole, hasPermission } from './lib/auth';

const privatePath = ['/admin', '/panel'];
const publicPath = ['/', '/login', '/register'];

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const sessionToken = request.cookies.get('sessionToken')?.value;
    const role = request.cookies.get('role')?.value;

    const domain = request.headers.get('host') || '';
    const splitDomain = domain.split('.');
    const hasSubdomain = splitDomain.length >= 2;

    if (hasSubdomain) {
        const storename = splitDomain[0]; // Lấy subdomain, ví dụ 'test1'

        let templateFolder;

        // Chọn thư mục template dựa trên tên subdomain
        switch (storename) {
            case 'test1':
                templateFolder = 'test1';
                break; // Thêm break để dừng lại sau khi xử lý 'test1'
            case 'test2':
                templateFolder = 'test2';
                break; // Thêm break để dừng lại sau khi xử lý 'test2'
            default:
                templateFolder = 'default'; // Nếu không phải test1 hay test2, dùng template mặc định
                break;
        }

        // Rewrite lại URL mà không thay đổi URL trong thanh địa chỉ của người dùng
        const newUrl = pathname.replace('/test1', ''); // Chỉ cần thay '/test1' nếu có, nếu cần thay đổi khác thì sửa phần này
        return NextResponse.rewrite(new URL(`/${templateFolder}${newUrl}`, request.url));
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
