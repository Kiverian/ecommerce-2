import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Products from './Components/Product/Product';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Router> 
      <Nav />
        <Switch>
          <Route exact path= "/home" component={Home} />
          <Route exact path= "/product" component={Products} />
          <Route exact path= "/contact" component={Contact} />
          <Products />
        </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
