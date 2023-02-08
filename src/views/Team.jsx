import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import slid01 from '../assets/images/photos/slid-01.jpg'
import slid02 from '../assets/images/photos/slid-02.jpg'
import slid03 from '../assets/images/photos/slid-03.jpg'
import slid04 from '../assets/images/photos/slid-04.jpg'
import slid05 from '../assets/images/photos/slid-05.jpg'
import slid06 from '../assets/images/photos/slid-06.jpg'
import slid07 from '../assets/images/photos/slid-07.jpg'
import slid08 from '../assets/images/photos/slid-08.jpg'
import slid09 from '../assets/images/photos/slid-09.jpg'
import slid10 from '../assets/images/photos/slid-10.jpg'
import slid11 from '../assets/images/photos/slid-11.jpg'

const Team = () => {
  return (
    <>
        <section className='team' id='team'>
            <Container>
                <Row>
                    <Col className='team_tit'>
                        <h2>نَحن <span>هنا</span></h2>
                    </Col>

                    <Row>
                      <Carousel fade>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid01}
                            alt="First slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid02}
                            alt="Second slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid03}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid04}
                            alt="Fourth slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid05}
                            alt="Fifth slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid06}
                            alt="Sixth slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid07}
                            alt="Seventh slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid08}
                            alt="Eigth slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid09}
                            alt="Ninth slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid10}
                            alt="Tenth slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slid11}
                            alt="Eleventh slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </Row>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Team