export function isAuthenticated(token?: string) {
    return Boolean(token);
}

export function getRedirectByRole(role?: string) {
    if (role === '1') return '/admin';
    if (role === '2') return '/panel';
    return '/';
}

export function hasPermission(pathname: string, role?: string) {
    if (role === '1' && pathname.startsWith('/panel')) return false;
    if (role === '2' && pathname.startsWith('/admin')) return false;
    return true;
}
