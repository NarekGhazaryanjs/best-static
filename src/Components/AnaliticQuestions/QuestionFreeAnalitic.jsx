import React from "react";
import { Button, Collapse, Well, } from "react-bootstrap";
import Title from "../Helpers_components/Title";
import "./Analitic.css";

class QuestionFreeAnalitic extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className="Story_div">
                <Title number={3} />
                <p>
                    What is React Native ?
                </p>
                <ul className="ulOfAnalitic">
                <li>  1. Backend Language. </li>  
                 <li>   2.  Framework </li>
                 <li>  3.  Library </li> 
                <li>  4. Open Source Environment </li>
                </ul>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Show Answer
          </Button>
                <Collapse in={this.state.open}>
                    <div className="Story_div">
                        <Well className="Story_text">
                        2. Framework 
                            
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

//render(<Example />



export default QuestionFreeAnalitic;