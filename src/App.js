import React from "react";

import Navbar from "./Components/navbar/Navbar";
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from "./pages/Home";
import Mdetails from "./pages/Mdetail";
import TopRate from "./pages/Toprate";
import Trending from "./pages/Trends";
import Browse from "./pages/Browsemovie";
import Footer from "./Components/footer/footer";
import Search from "./pages/Search";

function App() {
  return (

    <div className="App">
      <Navbar/>
      <Router>
      
     
      <Switch>
      
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
      
      <Route path="/toprate" exact component={TopRate} />
    </Switch>
    <Switch>
      
      <Route path="/trendings" exact component={Trending} />
    </Switch>
    <Switch>
      
      <Route path="/browse" exact component={Browse} />
    </Switch>
      <Switch>
      
        <Route path="/moviedetails/:id" exact component={Mdetails} />
      </Switch>
      <Switch>
      
      <Route path="/search/:query" exact component={Search} />
    </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
