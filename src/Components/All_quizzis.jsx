import React, {Component} from "react";
import QuestionFirtsAnalitic from "./AnaliticQuestions/QuestionFirtsTAnalitic";
import QuestionSecondAnalitic from "./AnaliticQuestions/QuestionSecondAnalitic";
import QuestionFreeAnalitic from "./AnaliticQuestions/QuestionFreeAnalitic";
import QuestionFourAnalitic from "./AnaliticQuestions/QuestionFourAnalitic";
import QuestionFiveAnalitic from "./AnaliticQuestions/QuestionFiveAnalitic";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LastFooter from "./Footer/LastFooter";

class All_Quizzis extends Component {
    render() {
      return (
          <div>
         <Header />
         <QuestionFirtsAnalitic />
         <QuestionSecondAnalitic />
         <QuestionFreeAnalitic />
         <QuestionFourAnalitic />
         <QuestionFiveAnalitic />
         <Footer />
         <LastFooter />
        </div>
      )
    }
  }

  export default All_Quizzis