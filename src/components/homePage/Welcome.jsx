import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import welcome from '../../assets/images/welcome.png'
import scroll from '../../assets/images/mouseScroll.png'
import book from '../../assets/books/كتاب التعريف بأجنحة قراء ٢٠٢١.pdf'

const Welcome = () => {
  return (
    <>
        <Container className='welcome' id='welcome'>
            <Row>
                <Col className='col-12 col-md-4 welcome_img'>
                    <img src={welcome} alt="ما هى قراء؟" />
                </Col>
                <Col className='col-12 col-md-8 welcome_txt'>
                    <h1>ما هى <span>قُرَّاءْ</span>؟</h1>
                    <h3 id='first_desc'></h3>
                    <h3 id='second_desc'>نَهارٌ نحملهُ في روُحِنا لا يُظلمُ أبداً</h3>
                    <p>
                        قُرَّاءْ هى مبادرة مختلفة من حيث الشكل عن أي مبادرة آخرى: لأن لها فرعان رئيسيان.
                         الفرع الأول: لجان المبادرة - لجنة التدريب - لجنة الإعلام
                          - لجنة قياس الأداء - لجنة العلاقات العامة والتنظيم - إدارة المشروعات.
                    </p>
                    <a href={book} className='more' download='كتاب تعريفي بأجنحة قراء 2021'>تفاصيل أكثر</a>
                </Col>
            </Row>

            <Row>
                <a href="#about" className='scroll_down'>
                    <img src={scroll} alt="scroll down" />
                </a>
            </Row>
        </Container>
    </>
  )
}

export default Welcome