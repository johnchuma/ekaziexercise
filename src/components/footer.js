import { Row, Col, Image, Container, Stack, Form, Button } from "react-bootstrap";
import { backgroundColor, secondaryColor, primaryColor, topBottomBackground, mutedText } from "../utils/colors";

const Footer = () => {
    return (
        <div style={{ backgroundColor: topBottomBackground }}>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={{ span: 8, offset: 2 }}>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} className="mb-3 mb-md-0">
                                <div style={{ color: secondaryColor }}>
                                    <h5>Subscribe to newsletter</h5>
                                    <p className="my-0">Join our weekly newsletter</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <Stack direction="horizontal">
                                    <Form.Control className="border-0 rounded-0" placeholder="Enter your email address" />
                                    <Button className="border-0 rounded-0 w-50 w-md-auto  mt-md-0" style={{ backgroundColor: primaryColor }}>Subscribe</Button>
                                </Stack>
                            </Col>
                        </Row>
                        <hr />
                        <p className="text-center my-0" style={{ color: mutedText }}>Exact manpower consulting Ltd, 3rd Floor, The Arcode Mwai Kibaki Road, Mikocheni P.O Box 212912, Dar es salaam, Tanzania</p>
                        <p className="text-center my-0" style={{ color: mutedText }}>My Account | Create Account | Help | About Us | Terms</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6} style={{ transform: "translateY(-30px)" }}>
                        <Image className="mb-3" style={{ height: 80, objectFit: "cover", transform: "translateX(-15px)" }} src="/logo.png" />
                        <div>
                            <small  style={{ color:mutedText }}>Amet sit amet dolore proident. Enim et consequat adipisicing nisi Lorem aliqua aute enim nisi et. Sit ullamco eiusmod ex officia voluptate proident cillum veniam fugiat irure id in. Consectetur magna quis pariatur labore nisi anim nisi dolor tempor.</small>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <h6>ABOUT</h6>
                        {["About us", "Login", "My Account", "Contact"].map((item, index) => {
                            return <div style={{ color:mutedText }} key={index}>{item}</div>;
                        })}
                    </Col>
                    <Col xs={6} md={2}>
                        <h6>FOR FREELANCERS</h6>
                        {["Browse Freelancers", "Hire Me", "Post Projects"].map((item, index) => {
                            return <div style={{ color:mutedText }} key={index}>{item}</div>;
                        })}
                    </Col>
                    <Col xs={6} md={2}>
                        <h6>FOR EMPLOYER</h6>
                        {["Browse Jobs", "Post Job"].map((item, index) => {
                            return <div style={{ color:mutedText }} key={index}>{item}</div>;
                        })}
                    </Col>
                </Row>
            </Container>
            <div className="text-center py-3 text-white" style={{ backgroundColor: secondaryColor }}>
                <small>Copyrights ©️ eKazi 2024. All rights Reserved</small>
            </div>
        </div>
    );
}

export default Footer;
