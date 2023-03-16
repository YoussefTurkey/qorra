import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Autoplay, Scrollbar, Pagination } from "swiper";
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

const We = () => {
  return (
    <>
        <section className="we">
            <Container>
                <h2>لمحة عن <span>المبادرة</span></h2>
                <Row>
                    <Col className='col-12 col-sm-12 col-md-6 swipe_slides'>
                        <Swiper
                          scrollbar={{
                            hide: true,
                          }}
                          pagination={{
                            type: "progressbar",
                          }}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[Autoplay, Scrollbar, Pagination]}
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

                    <Col className='col-12 col-sm-12 col-md-6 we_desc'>
                        <p>
                          تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة
                          بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة
                          تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى:
                          - التصميم - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه
                          يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على تأدية
                          المهام الخاصة بهذا القسم، وهكذا في باقي اللجان.
                      </p>
                      <p>
                          في الأجنحة التدريب والتعليم والتثقيف مثال: جناح صَوْنِ اللسانِ
                          العربيّ ينقسم هذا الجناح إلى برنامجين البرنامج الرئيس: طلقاء اللغة
                          الذي يهتم بدراسة وممارسة اللغة العربية عن طريق الورش التفاعلية،
                          والتدريبات الأكاديمية.
                      </p>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default We