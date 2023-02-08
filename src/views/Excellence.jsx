import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import qorra from '../assets/images/qorra.png'

const Excellence = () => {
  return (
    <>
       <section className='excellence' id='excellence'>
            <Container>
                <Row>
                    <Col className='col-12 excellence_tit'>
                        <h2>ماذا تقدم <span>قُرَّاءْ</span>؟</h2>
                    </Col>

                    <Col className='col-12 logo'>
                      <img src={qorra} alt="qorra-logo" />
                    </Col>

                    <Row className='excellence_main_info'>
                      <Col className='col-2 excellence_info'>
                          <h4>الأول:
                            <span>لجان المبادرة</span>
                          </h4>

                          <ul>
                            <li>- لجنة التدريب</li>
                            <li>- لجنة الإعلام</li>
                            <li>- لجنة قياس الأداء</li>
                            <li>- لجنة العلاقات العامة والتنظيم</li>
                            <li>- إدارة المشروعات</li>
                          </ul>
                      </Col>

                      <Col className='col-2 excellence_info' id='sec_info'>
                          <h4>الثاني:
                            <span>أجنحة المبادرة</span>
                          </h4>

                          <ul>
                            <li>- جناح صون اللسان العربي</li>
                            <li>- جناح صناعة قارئ</li>
                            <li>- جناح الجريدة</li>
                            <li>- جناح البحث العلمي</li>
                            <li>- جناح الخدمة المدنية</li>
                          </ul>
                      </Col>
                    </Row>

                    <Row className='hidden'>
                      <Col className='col-12 excellence_info_hide'>
                            <h4>الأول:
                              <span>لجان المبادرة</span>
                            </h4>

                            <ul>
                              <li>- لجنة التدريب</li>
                              <li>- لجنة الإعلام</li>
                              <li>- لجنة قياس الأداء</li>
                              <li>- لجنة العلاقات العامة والتنظيم</li>
                              <li>- إدارة المشروعات</li>
                            </ul>
                        </Col>

                        <Col className='col-12 excellence_info_hide' id='sec_info_hide'>
                            <h4>الثاني:
                              <span>أجنحة المبادرة</span>
                            </h4>

                            <ul>
                              <li>- جناح صون اللسان العربي</li>
                              <li>- جناح صناعة قارئ</li>
                              <li>- جناح الجريدة</li>
                              <li>- جناح البحث العلمي</li>
                              <li>- جناح الخدمة المدنية</li>
                            </ul>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Col className='col-12 excellence_sec_tit'>
                        <h2> <span>أهدافنا</span> </h2>
                    </Col>

                    <Col className='col-12 excellence_info'>
                        <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
                        <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                        <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
                        <p>تدريب المشاركين على مهارات القيادة والفعالية</p>
                        <p>تثقيف المشاركين بالقراءة والتدريبات</p>
                        <p>دراسة التاريخ العربي</p>
                        <p>إعطاء المشاركين أساسيات البحث العلمي والتعلم الذاتي</p>
                        <p>إعادة استخدام التراث والقيم العربية</p>
                        <p>العمل على محو األمية</p>
                    </Col>
                </Row>
            </Container>
        </section> 
    </>
  )
}

export default Excellence