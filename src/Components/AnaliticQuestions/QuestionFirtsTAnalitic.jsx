import React from "react";
import { Button, Collapse, Well, } from "react-bootstrap";
import Title from "../Helpers_components/Title";
import "./Analitic.css";

class QuestionFirtsAnalitic extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className="Story_div">
                <Title number={1} />
                <p>
                    What is Node.js ?
                </p>
                <ul className="ulOfAnalitic">
                <li>1. Backend Language. </li>  
                <li>2. Javascript Framework </li>
                <li>3. Javascript Library </li> 
                <li>4. Open Source Environment </li>
                </ul>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Show Answer
          </Button>
                <Collapse in={this.state.open}>
                    <div className="Story_div">
                        <Well className="Story_text">
                            4. Node.js is an open source server environment
                            
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

//render(<Example />



export default QuestionFirtsAnalitic;