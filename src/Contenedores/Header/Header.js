import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";
import Logo from "../../Componentes/Logo/Logo";
import clases_css from './Header.module.css';

const Header = ({links, dropdown}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className={clases_css.header__container}>
                <Logo/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            Object.entries(links).map(e => {
                                const [texto, url] = e;
                                return <Nav.Link href={url}>{texto}</Nav.Link>
                            })
                        }
                        <NavDropdown title={dropdown.title} id="basic-nav-dropdown">
                            {
                                Object.entries(dropdown.links).map(e => {
                                    const [texto, url] = e;
                                    return <NavDropdown.Item href={url}>{texto}</NavDropdown.Item>

                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;