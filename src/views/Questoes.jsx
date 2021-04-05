
import React, { Component } from "react";
import { withRouter } from "react-router";
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

class Questoes extends Component {
    constructor(){
        super()
        this.state = {
            options: {}
        }
    }

    render(){
        return (
            <div>
                <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Questão</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td><GiHamburgerMenu /></td>
                            <td>Teste ?</td>
                            <td><Button variant="danger"><FaTimes /></Button></td>
                        </tbody>
                    </Table>
                </Card.Body>
                </Card>

            </div>
        )
    }
}

export default withRouter(Questoes)
