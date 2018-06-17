import React, { Component } from 'react';
import Header from './Header/Header';
import Slider from './Carusel/Carusel';
import Jumpodron from './Helpers_components/Jumpodron';
import TableForHead from './Helpers_components/TableForHead';
import OurBeleiveTooltip from './Helpers_components/OurBeleiveTooltip';
import OurStatic from './Helpers_components/OurStatic';
import Footer from './Footer/Footer';
import LastFooter from "./Footer/LastFooter";

class All_Home extends Component {
    render() {
      return (
          <div>
        <Header />
        <Slider />
        <Jumpodron />
        <TableForHead />
        <OurBeleiveTooltip />
        <OurStatic />
        <Footer />
        <LastFooter />
        </div>
      )
    }
  }
  
  export default All_Home;
