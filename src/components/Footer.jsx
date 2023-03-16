import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/images/qorra.png'

const Footer = () => {
  return (
    <>
        <Container fluid className='footer'>
            <Row>
                <Col className='col-12 col-sm-12 col-md-3 logo'>
                    <img src={logo} alt="مبادرة قراء" />
                    <h4>قُرَّاءْ</h4>
                    <small>نهارٌ نحمله في روحِنا لا يُظلمُ ابداً</small>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                    <h4>مَن نحن</h4>
                    <ul>
                        <li><a href="">الرؤية والرسالة والأهداف</a></li>
                        <li><a href="">أعضاء الإدارة التنفيذية</a></li>
                        <li><a href="">شكل المبادرة وما تقدمه للمجتمع</a></li>
                    </ul>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                    <h4>المركز الإعلامي</h4>
                    <ul>
                        <li><a href="">الأخبار</a></li>
                        <li><a href="">الصور</a></li>
                        <li><a href="">اللقاءات التليفزيونية</a></li>
                    </ul>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                    <h4>الوائح والسياسات</h4>
                    <ul>
                        <li><a href="">اللائحة الأساسية</a></li>
                        <li><a href="">اللائحة التنظيمية</a></li>
                        <li><a href="">سياسة خصوصية البيانات</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer