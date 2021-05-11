import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideo from './RecommendedVideo'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      
      {/* <Router>
        <Switch>
<Route path="/search">
  <h1>Search page 🔎</h1>
</Route>
<Route path="/"><h1>Home page</h1></Route>
        </Switch>
//2:28:32
      </Router> */}

<Header />

<div className="app__page">
<Sidebar />
<RecommendedVideo />
</div>

    </div>
  );
}

export default App;
