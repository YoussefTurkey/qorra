import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/homePage/Header';
import Footer from '../components/Footer'
import DarkMood from '../components/DarkMood';
import GoUp from '../components/GoUp';
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
import vol from '../assets/images/participant.svg'
import follow from '../assets/images/followers.svg'
import learn from '../assets/images/learning.svg'
import proj from '../assets/images/projects.svg'
import goal from '../assets/images/target.png'
import eye from '../assets/images/roadmap.png'
import msg from '../assets/images/chat.png'
import dmd from '../assets/images/diamond.png'

const We = () => {
  return (
    <>
      <Header />
      <section className="we">
          <Container>
              <h2>لمحة عن <span>الجريدة</span></h2>
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
                      </Swiper>
                  </Col>

                  <Col className='col-12 col-sm-12 col-md-6 we_desc'>
                      <p>جناح الجريدة هو أحد البرامج التدريبية لمبادرة قُراء تم افتتاحه في
                          الموسم الثاني للمبادرة وقد اصدر عددين، وينقسم إلى جزئين اللاول
                          وهو الجزء التدريبي وهو المسئول عن اعداد الصحافين وتعليمهم
                          طريقة الكتابة السليمة والجزء الثاني هو المسئول عن اخراج
                          المنتج النهائي وهي اعداد الجريدة والتى صدر عددها الاول في ديسيمبر ٢٠٢١
                      </p>
                  </Col>
              </Row>

              <Row className='we_count'>
                <Col className='col-12 col-sm-12 col-md-3'>
                  <img src={vol} alt="متطوعين" />
                  <p className='num'>أكثر من مائة وخمسين</p>
                  <p>متطوع</p>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                  <img src={follow} alt="متابعين" />
                  <p className='num'>أكثر من ثمانية الاف</p>
                  <p>متابع</p>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                  <img src={learn} alt="متعلمين" />
                  <p className='num'>أكثر من سبعين</p>
                  <p>متعلم</p>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                  <img src={proj} alt="مشاريع" />
                  <p className='num'>أكثر من ثلاثة</p>
                  <p>مشاريع</p>
                </Col>
              </Row>

              <Row className='we_proud'>
                <h2>نعتز <span>بلغتنا</span></h2>
                <Col className='col-12 col-sm-12 col-md-6'>
                  <img src={goal} alt="أهدافنا" />
                  <h4>أهدافنا</h4>
                  <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
                  <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                  <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
                </Col>

                <Col className='col-12 col-sm-12 col-md-6'>
                  <img src={eye} alt="رؤيتنا" />
                  <h4>رؤيتنا</h4>
                  <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
                  <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                  <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
                </Col>

                <Col className='col-12 col-sm-12 col-md-6'>
                  <img src={msg} alt="رسالتنا" />
                  <h4>رسالتنا</h4>
                  <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
                  <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                  <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
                </Col>

                <Col className='col-12 col-sm-12 col-md-6'>
                  <img src={dmd} alt="قيمنا" />
                  <h4>قيمنا</h4>
                  <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
                  <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                  <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
                </Col>
              </Row>
          </Container>
      </section>

      <GoUp />
      <DarkMood />
      <Footer />
    </>
  )
}

export default We