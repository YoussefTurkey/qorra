import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ContactPost from '../contactEvent/ContactPost'
import img01 from '../../../assets/images/photos/post01.png'; 
import img02 from '../../../assets/images/photos/post02.png'; 


const post = () => {
  return (
    <>
        <Container className="events">
            <Row>
                <Col>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='post'>
                            <img src={img01} alt="El-Gareeda" />

                            <Row className='content'>
                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>

                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>

                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>

                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>
                            </Row>

                            <section className="eventIcon">
                                <button className="more">
                                    <a href="https://web.facebook.com/profile.php?id=100067438936034" target='_blank'><i className='bx bxl-facebook-circle' ></i> الفيسبوك</a>
                                </button>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide className='post'>
                            <img src={img02} alt="El-Gareeda-Qorra" />

                            <Row className='content'>
                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>

                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>

                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>

                                <Col className='col-12 col-sm-12 col-md-3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus?</p>
                                </Col>
                            </Row>

                            <section className="eventIcon">
                                <button className="more">
                                    <a href="https://web.facebook.com/profile.php?id=100067438936034" target='_blank'><i className='bx bxl-facebook-circle' ></i> الفيسبوك</a>
                                </button>
                            </section>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>

            {/* <ContactPost /> */}
        </Container>
    </>
  )
}

export default post