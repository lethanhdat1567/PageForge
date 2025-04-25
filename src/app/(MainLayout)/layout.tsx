import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="container px-16">
        <Header />
      </div>
      <div className="container px-16">{children}</div>
      <Footer />
    </div>
  );
}
