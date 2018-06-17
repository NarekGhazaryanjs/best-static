import React, {Component} from "react";
import Header from "./Header/Header";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import LastFooter from "./Footer/LastFooter";


class All_contacts extends Component {
    render() {
      return (
        <div>
        <Header />
        <Contacts />
        <Footer />
        <LastFooter />
        </div>
      );
    }
  }
  
  export default All_contacts;