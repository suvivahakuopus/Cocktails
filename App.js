
import { Route, Switch} from "react-router-dom";
import Home from "./home";
import Cocktails from "./cocktails";
import Navbar from "./navbar";
import Header from "./header";
import NotFound from "./notfound";
import Footer from "./footer";
import { render } from '@testing-library/react';
import React, { Component } from "react";
import SingleCocktail from './SingleCocktail';





function App() {



  render(); {
  return (
    <>
    <Navbar/>

    <Header/>
    <div className="header">
  
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cocktails" component={Cocktails} />
    <Route path="/cocktail/:id" component={SingleCocktail} />
    <Route component={NotFound} />

    </Switch>

    </div>
    <div className="App">
      <h2></h2>
      <Home/>
    </div>


    <Footer/>
    </>



 
  
  );
}
}



export default App;

