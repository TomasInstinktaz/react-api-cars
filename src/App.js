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


  componentDidMount() {
    // axios.get(`https://backend.daviva.lt/API/InformacijaTestui`)
    //     .then(res => {
    //       const cars = res.data;
    //       this.setState({ cars });
    //     })

    // carsAPI()
    // console.log(store.getState())
  }

  render() {

    // const {cars} = this.state


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

// let AppContainer = compose(
//     withRouter,
//     connect({}, {initializeApp}))(App);

const SuperApp = (props) => {
  console.log('dfg')
  console.log(store.getState())
  return <Router >
    <Provider store={store}>
      <App />
    </Provider>
  </Router >
}

export default SuperApp;
