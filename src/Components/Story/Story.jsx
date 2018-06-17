import React, {Component} from "react";
import {Button, Collapse, Well, } from "react-bootstrap";
import "./Story.css"

class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: false
      };
    }
  
    render() {
      return (
        <div className="Story_div">
            <h2>
               Click the button bellow to see all story about BestStatic Company, Owner of company, 
               co-workers and users.
            </h2>
          <Button onClick={() => this.setState({ open: !this.state.open })}>
            Click here
          </Button>
          <Collapse in={this.state.open}>
            <div className="Story_div">
              <Well className="Story_text">
                 Company BestStatic was created in 2013 by Armenian Matehematical Genius Narek Ghazaryan. 
                 At first he was doing everything himself, after one year working more than 10 co-workers 
                 came to this Company and started working with the owner of company Narek Ghazaryan.
                 At first the company was doing only mathematical analyrics, after few yeaars Narek Ghazaryan
                 decided that the company can do more than only simple mathematical analytics and they were stard web development too. The company is 
                 progressing every year step by step. Nowdays the Compmany have  handred users for all over the world.
                 14 co-workers and every year their presentage is going up and up. You can see that Nowdays 
                 in all over the world BestStatic is one of the bes mathematical analityc companies. By simple 
                 co-workers they did impossible things. 
                 You can see bellow the presentage progress of BestStatic company from 2013 to 2017.
              </Well>
            </div>
          </Collapse>
        </div>
      );
    }
  }
  
 //render(<Example />



  export default Example;