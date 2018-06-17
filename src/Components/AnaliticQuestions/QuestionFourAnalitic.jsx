import React from "react";
import { Button, Collapse, Well, } from "react-bootstrap";
import Title from "../Helpers_components/Title";
import "./Analitic.css";

class QuestionFourAnalitic extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className="Story_div">
                <Title number={4} />
                <p>
                    What is typeof null ?
                </p>
                <ul className="ulOfAnalitic">
                <li>  1. Null </li>  
                 <li>   2.  Undefined </li>
                 <li>  3.  Object </li> 
                <li>  4. Number </li>
                </ul>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Show Answer
          </Button>
                <Collapse in={this.state.open}>
                    <div className="Story_div">
                        <Well className="Story_text">
                        3. Object is type of null
                            
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

//render(<Example />



export default QuestionFourAnalitic;