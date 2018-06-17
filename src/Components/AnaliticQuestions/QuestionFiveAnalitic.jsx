import React from "react";
import { Button, Collapse, Well, } from "react-bootstrap";
import Title from "../Helpers_components/Title";
import "./Analitic.css";

class QuestionFiveAnalitic extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className="Story_div">
                <Title number={5} />
                <p>
                    What will be printed in console if compare null>=0 ?
                </p>
                <ul className="ulOfAnalitic">
                <li>  1. Null </li>  
                 <li>   2.  Undefined </li>
                 <li>  3.  false </li> 
                <li>  4. true </li>
                </ul>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Show Answer
          </Button>
                <Collapse in={this.state.open}>
                    <div className="Story_div">
                        <Well className="Story_text">
                        4. The right answer is true
                            
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

//render(<Example />



export default QuestionFiveAnalitic;