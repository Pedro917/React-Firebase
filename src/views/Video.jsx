import React, { useState } from "react";
import { withRouter } from "react-router";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import {FaEdit} from 'react-icons/fa'

import Dropzone from '../components/Dropzone'


const Video = () => {
    
    let video = 'https://i.ibb.co/5GD9Lvh/GD-img-Sem-Imagem.png'
    const [selectedFile, setSelectedFile] = useState();
    const [imagePreview, setImagePreview] = useState(video);
    
    return (
        <div>
            <h6 className="text-secondary mb-4">CONFIGURAÇÕES</h6>
            <Card>
                <Card.Header>ALTERAR VIDEO DE FUNDO</Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="text-center">
                            <Dropzone onFileUploaded={setSelectedFile}
                                      image={setImagePreview}
                                      accept=".mp4,.mkv,.3gp,.webm"   />
                        </Col>
                        <Col className="text-center">
                            {imagePreview === video ? <img src={imagePreview} alt="Logo pre carregada" width="350px" />: <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={imagePreview} title="Video"/>
                            </div>}
                            
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button variant="success" className="d-flex align-items-center"><FaEdit className="mr-2"/> Alterar</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default withRouter(Video)
