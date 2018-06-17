import React, { Component } from 'react';
import {ProgressBar } from "react-bootstrap";

class OurStatic extends Component {
    render() {
        return (
        <div>
            <ProgressBar bsStyle="success" now={5} />
            <ProgressBar bsStyle="info" now={8} />
            <ProgressBar bsStyle="warning" now={18} />
            <ProgressBar bsStyle="danger" now={47} />
            <ProgressBar bsStyle="bg-danger" now={90} />

        </div>
        );
    }
}

export default OurStatic;