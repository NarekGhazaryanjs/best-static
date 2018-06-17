import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "./TableForHead.css"

class TableForHead extends Component {
    render() {
        return (
        <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>Year</th>
      <th>Filial Companies</th>
      <th>Progress From last year</th>
      <th>Users of BestStatic</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>2013</td>
      <td>1</td>
      <td>0%</td>
      <td>12</td>
    </tr>
    <tr>
      <td>2014</td>
      <td>1</td>
      <td>5%</td>
      <td>21</td>
    </tr>
    <tr>
      <td>2015</td>
      <td>2</td>
      <td>8%</td>
      <td>37</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>3</td>
      <td>18%</td>
      <td>68</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>4</td>
      <td>47%</td>
      <td>187</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>6</td>
      <td>90%</td>
      <td>483</td>
    </tr>
  </tbody>
</Table>
        )
    }
}

export default TableForHead