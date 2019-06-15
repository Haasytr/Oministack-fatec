import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import './style.css'

// Pages
import Home from './pages/Home'
import Products from './pages/Product'

// Components
import Navbar from './components/Header'

const App = () => 
  
  <>
   
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
    </Router>
  </>

export default App;