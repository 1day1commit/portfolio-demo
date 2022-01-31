import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import dev from '../images/dev.png';

const About = () => {
    return(
        <Container fluid style={{height: "70vh"}} id="about">
            {/* <h2 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>About me</h2> */}
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <img 
                        src={dev} 
                        alt="Software Developer" 
                        style={{
                            width: "100%",
                            marginTop: "5vh",
                            height: "60vh",
                        
                            // boxShadow: "2px 2px 5px #001",
                            borderRadius: "0px"
                        }}
                    />
                </Col>
                <Col sm={9} md={10} lg={{ span: 5, offset: 1}}>
                    <h1>Hi! I am ChangWoo</h1>
                    <h4 style={{fontWeight: "300"}}>
        
                    </h4>
                </Col>
            </Row>
        </Container>
    );
};

export default About;