
import React, { Component } from "react";
import { withRouter } from "react-router";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaPlus } from "react-icons/fa";

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
                <h6 className="text-secondary mb-4">GERENCIAMENTO</h6>
                <Card>
                    <Card.Header>QUESTÕES PARA FEEDBACK</Card.Header>
                    <Card.Body>
                        <div className="d-flex mb-3">
                            <Button variant="light" disabled><GiHamburgerMenu /></Button>
                            <Form.Control type="text" placeholder="Readonly input here..." className="mx-3" readOnly />
                            <Button variant="danger"><FaTimes /></Button>
                        </div>
                        <div className="d-flex mb-3">
                            <Button variant="light" disabled><GiHamburgerMenu /></Button>
                            <Form.Control type="text" placeholder="Readonly input here..." className="mx-3" readOnly />
                            <Button variant="danger"><FaTimes /></Button>
                        </div>
                        <hr className="my-3"/>

                        <Form>
                            <Form.Row > 
                                <Col lg={10}>
                                    <Form.Control placeholder="Digite a nova pergunta a ser adicionada" />
                                </Col>
                                <Col lg={2}>
                                    <Button variant="success" className="d-flex align-items-center"><FaPlus className="mr-2" /> Adicionar</Button>
                                </Col>
                            </Form.Row>
                        </Form>

                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default withRouter(Questoes)
