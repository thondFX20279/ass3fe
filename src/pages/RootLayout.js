import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SupportChat from "../Component/SuportChat";
const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <SupportChat />
    </div>
  );
};
export default RootLayout;
