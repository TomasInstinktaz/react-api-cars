import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

import 'bootstrap/dist/css/bootstrap.min.css';

import StaticContainer from "./components/Static/StaticContainer";
import DynamicContainer from "./components/Dynamic/DynamicContainer";
import CardContainer from "./components/Card/CardContainer";
import CarouselContainer from "./components/Carousel/CarouselContainer";


class App extends Component {


  render() {

    return (
        <div className='app-wrapper'>
          <Navbar/>

          <Switch>
            <Route path="/static"
                   render={() => <StaticContainer/>}>
            </Route>
            <Route path="/dynamic"
                   render={() => <DynamicContainer/>}>
            </Route>
            <Route path="/card"
                   render={() => <CardContainer/>}>
            </Route>
            <Route path="/carousel"
                   render={() => <CarouselContainer/>}>
            </Route>
          </Switch>
        </div>
    )
  }
}

const SuperApp = (props) => {

  return <Router >
    <Provider store={store}>
      <App />
    </Provider>
  </Router >
}

export default SuperApp;
