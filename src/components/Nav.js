import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Nav = (props) => {
    return(
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">
                    <div nav-container>
                        <div>Game Of Thrones Houses - Memory Game</div>
                        <div className="score">
                            Current Score: {props.score}
                            High Score: {props.bestScore}
                        </div>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav;