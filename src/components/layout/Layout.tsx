import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { TypeformProvider } from "@/context/TypeformContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TypeformProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </TypeformProvider>
  );
};

export default Layout;
