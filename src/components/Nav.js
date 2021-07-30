import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const Nav = (props) => {
    return(
        <div  style={{backgroundColor: "black", border: "1px solid white", height: '68px'}}>
        <Navbar variant="dark" >
            <Container>
                <Navbar.Brand href="#">
                    <div>
                        <Row>
                        <Col className="title">Game Of Thrones &nbsp; - &nbsp; Memory Game</Col>
                        <Col className="score">Current Score : &nbsp; {props.score} &nbsp; High Score : &nbsp; {props.bestScore}</Col>
                        </Row>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
        </div>
    )
}

export default Nav;