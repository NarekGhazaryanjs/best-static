import React, { Component } from 'react';
import Header from './Header/Header';
import Example from './Story/Story';
import OurStatic from './Helpers_components/OurStatic';
import Footer from './Footer/Footer';
import LastFooter from './Footer/LastFooter';



class All_story extends Component {
    render() {
      return (
          <div>
         <Header />
         <Example />
         <OurStatic />
         <Footer />
         <LastFooter />
        </div>
      )
    }
  }
  
  export default All_story;