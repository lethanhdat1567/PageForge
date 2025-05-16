import MidlewareLayout from '@/app/theme/(store)/MidlewareLayout';
import MainLayout from '@/app/theme/(store)/test1/Layout/MainLayout';
import { test1Routes } from '@/routes/routes';

function Test1Page({ param }: { param: { slug: string[] } }) {
    const pathName = param.slug[1] || '';

    // Tìm route phù hợp
    const matchedRoute = test1Routes.find((route) => route.path === pathName);

    // Nếu tìm thấy
    if (matchedRoute) {
        return <MidlewareLayout route={matchedRoute} MainLayout={MainLayout} />;
    }

    // Không tìm thấy
    return <div>Page not found</div>;
}

export default Test1Page;
