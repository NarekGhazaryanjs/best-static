import React, {Component} from "react";
import {Well} from "react-bootstrap";
import "./Contacts.css";


class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
            <h1>You can Contact us</h1>
            <Well bsSize="large">Email: narekghazaryanjs@gmail.com</Well>;
            <Well bsSize="large">Tel: +374-43-55-01-91</Well>;
            <Well bsSize="large">Adress: Komitas street 63 Avenue</Well>;
            </div>
        )
    }
}

export default Contacts;