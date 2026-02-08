import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-display-lg font-display text-gradient-gold">404</h1>
          <p className="mb-8 text-xl text-muted-foreground font-body">
            This page doesn't exist.
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center px-8 py-4 rounded-xl font-display text-sm"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
