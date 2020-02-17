import React from 'react';
import DashBoard from "../components/Dashboard"
import Novedades from "../components/Novedades"
import {Switch, Route, Redirect} from 'react-router-dom'
export default class PageContent extends React.Component{
 render(){
  return (
    <div>
        <Switch>
          <Route path="/" exact component={DashBoard} ></Route>
          <Route path="/Novedades" exact component={Novedades} ></Route>
          <Redirect to="/"></Redirect>
        </Switch>
    </div>
  );
};
}