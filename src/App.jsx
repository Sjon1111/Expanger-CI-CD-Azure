import { useState } from 'react'
import {
  createBrowserRouter,

  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product.jsx';
import Users from './pages/Billings/Billings.jsx';

import Navbar from './Componant/Navbar/Navbar.jsx';
import Footer from './Componant/Footer/Footer.jsx';
import Menu from './Componant/Menu/Menu.jsx';
import Login from './pages/UserLogin/Login.jsx';
import "./Styles/global.scss";
import Billings from './pages/Billings/Billings.jsx';

function App() {
  const [checked, setchecked] = useState(true)
  const handlebgChange = (value) => {
    setchecked(value);
  }
  const Layout = () => {
    return (
      <div className={`main ${checked ? 'dark' : 'light'}`}>
        <Navbar onStateChange={handlebgChange} />

        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>


        <Footer />
      </div>
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
          path: "billings",
          element: <Billings />,
        },
        {
          path: "product",
          element: <Product />,
        },

      ]

    },
    {
      path: "login",
      element: <Login />,

    }



  ]);

  return (

    <RouterProvider router={router} />


  )
}

export default App
