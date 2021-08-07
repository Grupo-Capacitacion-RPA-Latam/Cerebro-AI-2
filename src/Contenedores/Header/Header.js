import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";
import Logo from "../../Componentes/Logo/Logo";
import clases_css from './Header.module.css';
import {useEffect} from 'react';

const Header = ({links, dropdown, sesion, css}) => {
    const cambiaHeaderColor = () => {
        if (window.scrollY >= 40) {
            document.getElementById("page-header").style.backgroundColor = "#626262"
        } else {
            document.getElementById("page-header").style.backgroundColor = "transparent"
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", cambiaHeaderColor)
    }, []);

    return (
        <Navbar expand="lg" fixed={"top"} className={`${clases_css.header} ${css.css}`} id={"page-header"}>
            <Container className={`${clases_css.header__container}`}>
                <Logo clases={"mr5"}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-around-ns w-70">
                        {
                            Object.entries(links).map((e, index) => {
                                const [texto, url] = e;
                                return <Nav.Link href={url} key={index}>{texto}</Nav.Link>
                            })
                        }
                        <NavDropdown title={dropdown.title} id="basic-nav-dropdown">
                            {
                                Object.entries(dropdown.links).map((e, index) => {
                                    const [texto, url] = e;
                                    return <NavDropdown.Item href={url} key={index}>{texto}</NavDropdown.Item>

                                })
                            }
                        </NavDropdown>
                    </Nav>
                    <Nav >
                        <Nav.Link href={sesion}>Iniciar Sesion</Nav.Link>
                        <Nav.Link href={sesion}>Crear Cuenta</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;