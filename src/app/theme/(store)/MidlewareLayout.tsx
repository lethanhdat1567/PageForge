/* eslint-disable @typescript-eslint/no-explicit-any */
function MidlewareLayout({ route, MainLayout }: { route: any; MainLayout: any }) {
    const Page = route.children;
    const Layout = route.layout === null ? ({ children }: { children: React.ReactNode }) => <>{children}</> : route.layout || MainLayout;

    return (
        <Layout>
            <Page />
        </Layout>
    );
}

export default MidlewareLayout;
