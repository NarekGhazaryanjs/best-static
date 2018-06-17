import React, {Component} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LastFooter from "./Footer/LastFooter";
import About from "./About/About";



class All_About extends Component {
    render() {
      return (
          <div>
         <Header />
         <About />
         <Footer />
         <LastFooter />
        </div>
      )
    }
  }

  export default All_About;