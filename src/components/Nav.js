import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Nav = (props) => {
    return(
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">
                    Game Of Thrones Houses - Memory Game
                </Navbar.Brand>
                <div>
                    <div>Current Score: {props.score}</div>
                    <div>High Score: {props.bestScore}</div>
                </div>
            </Container>
        </Navbar>
    )
}

export default Nav;