import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teamImg from '../../assets/images/photos/gareeda_screen.png'

const Team = () => {
  return (
    <>
        <section className='team' id='team'>
            <Container>
                <Row>
                    <Col className='team_tit'>
                        <h2>مَن <span>نحن</span></h2>
                    </Col>
                </Row>

                <Row>
                    <Col className='col-12 col-sm-12 col-md-8 about_txt'>
                      <h3>نحن هنا منذ 2021م</h3>
                      <p className='info'>جناح الجريدة هو أحد البرامج التدريبية لمبادرة قُراء تم افتتاحه في
                          الموسم الثاني للمبادرة وقد اصدر عددين، وينقسم إلى جزئين اللاول
                          وهو الجزء التدريبي وهو المسئول عن اعداد الصحافين وتعليمهم
                          طريقة الكتابة السليمة والجزء الثاني هو المسئول عن اخراج
                          المنتج النهائي وهي اعداد الجريدة والتى صدر عددها الاول في ديسيمبر ٢٠٢١
                      </p>
                      <p>هو البرنامج التدريبي الخاص بتأهيل الشباب للدخول لعالم الكتابة الصحافية وتعلم طريقة 
                          الكتابة السليمة ومبادئ الصحافة وأنواعها بالإضافة إلى إنتاج اعداد من المقالات الصحافية للنشر
                      </p>
                      <a href='/we' className='more'>تعرف علينا أكثر</a>
                    </Col>
                    
                    <Col className='col-12 col-sm-12 col-md-4 team_img'>
                      <img src={teamImg} alt="qorra" />
                    </Col>
                    
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Team