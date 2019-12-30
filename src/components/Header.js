import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'react-bootstrap';
import '../App.css';
class Header extends React.Component{
    render(){
        return(
            <Container style={{marginBottom:"10px"}}>
                <Row className="text-center">
                <Col xs={1} md={2}></Col>
                <Col xs={4} md={6}>
                     <p className="title">Chercher Un Utilisateur</p><br/>
                     <input placeholder="Search" size="40" onChange={this.props.handleChange}></input>
                </Col>
                <Col xs={1} md={2}></Col>
                </Row>
            </Container>
        );
    }
}
export default Header;