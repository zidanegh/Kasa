import Header from "../component/Header";
import Footer from "../component/Footer";
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
