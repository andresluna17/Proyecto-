import React from 'react';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Navigation from "./app/Navigation.jsx"
import PageContent from "./app/PageContent.jsx"
import Footer from "./app/Footer.jsx"
import Sidemenu from "./app/Sidemenu.jsx"
import {BrowserRouter }from "react-router-dom"
 
export default class App extends React.Component{
  render(){
    return(
      <div className="nav-md">
        <BrowserRouter>
        <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <Sidemenu/>
          </div>
          <Navigation></Navigation>
          <PageContent></PageContent>
          <Footer></Footer>
        </div>
        </div>
        </BrowserRouter>
     </div>
    )
  }
}
