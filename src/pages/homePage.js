

import Footer from "../components/footer";
import NavigationBar from "../components/navigationBar";
import { backgroundColor, mutedText, primaryColor, secondaryColor } from "../utils/colors";
import { Row, Col, Container, Card, Button, Stack, Image } from "react-bootstrap";

const HomePage = () => {
    return (
        <div className="" style={{ backgroundColor: backgroundColor }}>
            <NavigationBar />
            <div className="text-center text-white py-2" style={{ backgroundColor: secondaryColor }}>
                <h5>Freelancer Profile</h5>
            </div>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6} className="offset-md-3">
                        <Card className="mb-4" style={{ backgroundColor: "white", borderRadius: 0 }}>
                            <Card.Header style={{ backgroundColor: secondaryColor, height: "130px", borderRadius: 0 }}>
                                <Row className="mt-3">
                                    <Col xs={4}>
                                        <Image className="w-100" fluid style={{ objectFit: "cover" }} src="/person.jpg" />
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body style={{ color: secondaryColor }}>
                                <Row>
                                    <Col md={8} className="offset-md-4">
                                        <h6 className="my-0">JOHN METHEW</h6>
                                        <p>Graphics Designer | Logo Designer</p>
                                    </Col>
                                </Row>
                                <Row className="align-items-center mt-3">
                                    <Col md={4}>
                                        <Button className="border-0 rounded-0" style={{ backgroundColor: primaryColor }}>Hire Me</Button>
                                    </Col>
                                    <Col md={8}>
                                        <Stack direction="horizontal">
                                            <small>Contact Info</small>
                                            <small className="ps-3">Tanzania</small>
                                            <small className="ms-auto">University of Tanzania</small>
                                        </Stack>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="mt-4" style={{ backgroundColor:"white", color:secondaryColor, borderRadius:0 }}>
                <Card.Header style={{ backgroundColor:"white",borderRadius:0 }}>
                <h5 className="my-0">Experience</h5>
                   
                    </Card.Header>
                    <Card.Body style={{  color:secondaryColor }}>
                       {
                        ["","","","",""].map((item)=>{
                            return   <Row className=" ">
                            <Col md="3">
                                <Image fluid src="/nmb.webp"/>
                            </Col>
                            <Col className="offset-1">
                            <h6 className="my-0">Computer information System (Cis)</h6>
                            <p className="my-0">NMB Limited</p>
                            <p className="my-0 py-0" style={{ color:mutedText }}>2015 - To Date</p>
                             <p className="my-0 py-0" style={{ color:mutedText }}>Dar es salaam,Tanzania</p>
                             <p className="mt-2" style={{ color:mutedText }}>Est enderit ut reprehenderit cillum aute proident. 
                             Duis ut irure eiusmod sit nostrud nostrud culpa laborum aute et.</p>
                            </Col>
                          </Row>
                        })
                       }
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ backgroundColor:"white", color:secondaryColor, borderRadius:0 }}>
                <Card.Header style={{ backgroundColor:"white",borderRadius:0 }}>
                <h5 className="my-0">Education</h5>
                   
                    </Card.Header>
                    <Card.Body style={{  color:secondaryColor }}>
                       {
                        [""].map((item)=>{
                            return   <Row className=" ">
                            <Col md="3">
                                <Image fluid src="/nmb.webp"/>
                            </Col>
                            <Col className="offset-1">
                            <h6 className="my-0">University of Dar es salaam</h6>
                            <small className="my-0">DEGREE NAME - BACHELOR OF SCIENCE (BS)</small>
                            <p className="my-0 py-0" style={{ color:mutedText }}>2015 - 2018</p>
                        
                            </Col>
                          </Row>
                        })
                       }
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ backgroundColor:"white", color:secondaryColor, borderRadius:0 }}>
                <Card.Header style={{ backgroundColor:"white",borderRadius:0 }}>
                <h5 className="my-0">Certifications</h5>
                   
                    </Card.Header>
                    <Card.Body style={{  color:secondaryColor }}>
                       {
                        [""].map((item)=>{
                            return   <Row className=" ">
                            <Col md="3">
                                <Image fluid src="/cisco.png"/>
                            </Col>
                            <Col className="offset-1">
                            <h6 className="my-0">Certification of completion - Logo Design - Shape and symbol</h6>
                            <small className="my-0">CISCO</small>
                        
                            </Col>
                          </Row>
                        })
                       }
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ backgroundColor:"white", color:secondaryColor, borderRadius:0 }}>
                <Card.Header style={{ backgroundColor:"white",borderRadius:0 }}>
                <h5 className="my-0">Skills & Endorsments</h5>
                   
                    </Card.Header>
                    <Card.Body style={{  color:secondaryColor }}>
                        <Row>
                        {
                        ["HTML","JAVASCRIPT","CSS"].map((item)=>{
                            return  <Col md="auto" ><Button className=" bg-transparent text-black" style={{ borderColor: mutedText }}>{item}</Button></Col>
                        })
                       }
                        </Row>
                     
                    </Card.Body>
                </Card>
                        {/* Other Card Components */}
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default HomePage;