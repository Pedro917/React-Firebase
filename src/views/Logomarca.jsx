import React, { useState } from "react";
import { withRouter } from "react-router";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import {RiImageEditFill} from 'react-icons/ri'

import Dropzone from '../components/Dropzone'


const Logomarca = () => {
    
    let logo = 'https://i.ibb.co/5GD9Lvh/GD-img-Sem-Imagem.png'
    const [selectedFile, setSelectedFile] = useState();
    const [imagePreview, setImagePreview] = useState(logo);

    
    
    return (
        <div>
            <h6 className="text-secondary mb-4">CONFIGURAÇÕES</h6>
            <Card>
                <Card.Header>ALTERAR LOGOMARCA</Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="text-center">
                            <Dropzone onFileUploaded={setSelectedFile}
                                      image={setImagePreview}   />
                        </Col>
                        <Col className="text-center">
                            <img src={imagePreview} alt="Logo pre carregada" width="240px" />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button variant="success" className="d-flex align-items-center"><RiImageEditFill className="mr-2"/> Alterar</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default withRouter(Logomarca)
