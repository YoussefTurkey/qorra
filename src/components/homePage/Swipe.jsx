import React from "react";
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
import img01 from '../../assets/images/photos/img1.png'; 
import img02 from '../../assets/images/photos/img2.png'; 
import img03 from '../../assets/images/photos/img3.png'; 
import img04 from '../../assets/images/photos/img4.png'; 

const Swipe = () => {
  return (
    <>

        <Container fluid className="swipping">
            <Row>
                <Col>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        dynamicBullets: true
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={img01} alt="khassan kanafy" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img02} alt="mamdouh darwish" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img03} alt="almanfaloty" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img04} alt="alrafay" />
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Swipe