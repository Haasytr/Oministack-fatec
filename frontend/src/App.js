import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import './style.css'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Products from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact/index'

// Components
import Navbar from './components/Header'

const App = () => 
  
  <>
   
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
  </>

export default App;
