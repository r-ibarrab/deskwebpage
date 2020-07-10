import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Layout from './components/layout';
import Productos from './components/productspage';
import Contact from './components/contactpage';
import Home from './components/home';
import ProductComponent from './components/productcomponent';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/products" component={Productos}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/products/:id" component={ProductComponent}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
