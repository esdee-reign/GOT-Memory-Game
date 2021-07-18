import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const Nav = (props) => {
    return(
        <Navbar variant="dark" style={{backgroundColor: "black", border: "1px solid white"}}>
            <Container>
                <Navbar.Brand href="#">
                    <div nav-container>
                        <Row>
                        <Col className="title">Game Of Thrones &nbsp; - &nbsp; Memory Game</Col>
                        <Col className="score">Current Score : &nbsp; {props.score} &nbsp; High Score : &nbsp; {props.bestScore}</Col>
                        </Row>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav;