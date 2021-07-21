import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import SinglePost from './components/SinglePost'

function App() {
  return (
      <Router>
        <Navbar />
        <Switch />
          <Route patch='/' exact component={Home} />
          <Route patch='/services' exact component={Services} />
          <Route patch='/about' exact component={About} />
          <Route patch='blog' exact component={Blog} />
          <Route patch='blog/:slug' exact component={SinglePost} />
          <Route patch='/contact' exact component={Contact} />
          {/* <Hero /> */}
          <Footer />
      </Router>
  );
}

export default App;
