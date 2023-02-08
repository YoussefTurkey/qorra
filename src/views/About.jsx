import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assets/images/about.png'

const About = () => {
  return (
    <>
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col className='col-12 col-md-8 about_txt'>
                        <h2>مَن <span>نحن</span>؟</h2>
                        <h3>نحن هنا منذ 2020م</h3>
                        <p className='info'>
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
                    <Col className='col-12 col-md-4 about_img'>
                        <img src={about} alt="من قراء؟" />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default About