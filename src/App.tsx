import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { useLayoutEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact";
import Create from "./pages/Create";
// import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import Market from "./pages/Market";
import NftDetails from "./pages/NftDetails";
// import SellerProfile from "./pages/SellerProfile";
import Wallet from "./pages/Wallet";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/market/:id",
        element: <NftDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
