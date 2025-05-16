function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Main Layout</h1>
            <div>{children}</div>
        </div>
    );
}

export default MainLayout;
