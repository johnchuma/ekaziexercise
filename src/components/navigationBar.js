import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { primaryColor, secondaryColor, topBottomBackground } from "../utils/colors";

const NavigationBar = () => {
    return (
        <Navbar style={{ color: secondaryColor, backgroundColor: topBottomBackground }} expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image style={{ height: 80 }} src="/logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{ color: secondaryColor }} href="#home">Home</Nav.Link>
                        <Nav.Link style={{ color: secondaryColor }} href="#features">Find Jobs</Nav.Link>
                        <Nav.Link style={{ color: secondaryColor }} href="#pricing">Find Freelancers</Nav.Link>
                        <Nav.Link style={{ color: secondaryColor }} href="#pricing">Employers</Nav.Link>
                        <Nav.Link style={{ color: secondaryColor }} href="#pricing">Recruiter</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link style={{ color: secondaryColor }} href="#pricing">Login</Nav.Link>
                        <Nav.Link style={{ color: secondaryColor }} href="#pricing">Register</Nav.Link>
                        <Button className="border-0 rounded-0 me-lg-2" style={{ backgroundColor: primaryColor }}>Post Job</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
