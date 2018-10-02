import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import History from './History';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/" 
            className="nav-bouton"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
            > Accueil 
          </NavLink>
          
          <NavLink to="/page-de-contact" 
            activeClassName="selected" 
            className="nav-bouton" 
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
            > Contact 
          </NavLink>

          <NavLink to="/notre-history" 
            activeClassName="selected" 
            className="nav-bouton"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
            > My History 
          </NavLink>




          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page-de-contact" component={Contact} />
            <Route path="/notre-history" component={History} />
          </Switch>
        </div>
      </BrowserRouter>

    
    
    );
  }
}

export default App;
