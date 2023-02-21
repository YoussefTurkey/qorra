import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";
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

                    <Col className='col-12 col-sm-12 col-md-12'>
                        <Swiper
                          scrollbar={{
                            hide: true,
                          }}
                          modules={[Scrollbar]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <img src={slid01} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid02} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid03} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid04} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid05} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid06} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid07} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid08} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid09} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid10} alt="فريق قراء" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={slid11} alt="فريق قراء" />
                          </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Team