import './App.css';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import Navs from './Componenets/Layouts/Navs';
import classes from './App.module.css'
import About from './Pages/About';
import Menu from './Pages/Menu';
import OrderOnline from './Pages/OrderOnline';
import Service from './Pages/Service'
import Footer from './Componenets/Footer';


function App() {
  return (
    <div className={classes.app}>
      <Navs />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/" render={() => <Navigate to="/home" />} element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/menu' element={<Menu />} />
        <Route path='/order_online' element={<OrderOnline />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
