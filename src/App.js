import React, { Component } from 'react';
import './App.css';
import All_Home from './Components/All_Home';
import All_news from './Components/All_news';
import All_story from './Components/All_story';
import All_Quizzis from './Components/All_quizzis';
import All_About from './Components/All_about';
import All_contacts from './Components/All_contacts';
import { Route } from "react-router-dom";





class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Route exact path="/" component={All_Home} />
        <Route  path="/news" component={All_news} />
        <Route  path="/about" component={All_About} />
        <Route  path="/web-quizess" component={All_Quizzis} />
        <Route  path="/story" component={All_story} />
        <Route  path="/contacts" component={All_contacts} />

      </div>
    );
  }
}

export default App;
