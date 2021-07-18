import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Nav = (props) => {
    return(
        <Navbar variant="dark" >
            <Container>
                <Navbar.Brand href="#">
                    <div nav-container>
                        <div className="title">Game Of Thrones Houses - Memory Game</div>
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