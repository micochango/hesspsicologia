import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/services' exact component={Services} ></Route>
          <Route path='/about' exact component={About} ></Route>
          <Route patch='/blog' exact component={Blog} ></Route>
          <Route patch='/contact' exact component={Contact} ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
