import "./App.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navs from "./Componenets/Layouts/Navs";
import classes from "./App.module.css";
import About from "./Componenets/Home_Components/About";
import Menu from "./Pages/Menu/Menu";
import OrderOnline from "./Pages/OrderOnline";
import Service from "./Componenets/Home_Components/Service";
import Footer from "./Componenets/Footer";
import Cart from "./Pages/Cart/Cart";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className={classes.app}>
      <Navs />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          render={() => <Navigate to="/home" />}
          element={<Home />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order_online" element={<OrderOnline />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
