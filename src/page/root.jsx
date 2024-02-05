import Header from "../header/header";
import Footer from "../footer/footer";
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
