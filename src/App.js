import './App.css';
import { Outlet } from "react-router-dom";
import React, { } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './NavMenu';
import Footer from './Footer';
import Advertisement from './Advertisement';
function App() {
 

  return (
    <div className="App">
      <div>
        <h1>Supermarket</h1>
        <NavMenu></NavMenu>
        <Outlet />
        <Advertisement/>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
