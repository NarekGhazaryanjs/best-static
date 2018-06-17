import React, { Component } from 'react';
import {Tabs, Tab} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
        <div className="Footer">
         
         <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="    Our Users">
   We have  483 Users in the world Nowday
  </Tab>
  <Tab eventKey={2} title="    Our Co-workers">
  We have  14 Co-workers
  </Tab>
  <Tab eventKey={3} title="    Our Companies " >
    We have 6 working filial  Companies in the world
  </Tab>
</Tabs>;
   
        </div>
     
        );
    }
}

export default Footer;