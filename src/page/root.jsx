import Header from "../component/Header-file/header";
import Footer from "../component/Footer-file/Footer";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <>
      <div id="body">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Root;
