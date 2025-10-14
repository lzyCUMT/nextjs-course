import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout() {
  return (
    <div>
      <MainNavigation />
      <main>{PaymentResponse.children}</main>
    </div>
  );
}

export default Layout;
