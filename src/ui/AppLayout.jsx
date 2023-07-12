import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* The Outlet component alone allows nested routes to render their element content out and anything else the layout route is rendering, i.e. navbars, sidebars, specific layout components, etc. */}
          <Outlet /> {/* Returns <CreateOrder/> */}
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
