import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Outlet /> {/* Aqui serão renderizadas as páginas */}
      </main>
    </div>
  );
};

export default Layout;
