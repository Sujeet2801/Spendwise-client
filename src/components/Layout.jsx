import { Outlet, useLocation } from "react-router-dom";
import AuthModal from "../pages/Auth";
import { useAuth } from "../hooks/useAuth";

const Layout = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/register";
  const { loading } = useAuth();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (isAuthRoute) return <AuthModal />;

  return (
    <>
      <div className="flex">
        <main
          className={`transition-all duration-300 min-h-screen p-6 bg-gray-50 flex-1 overflow-y-auto`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
