import { Outlet } from "react-router-dom";
import Navbar from "./components-page/Navbar";

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
