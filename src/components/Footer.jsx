import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/images/qorra.png'
import layha from '../assets/books/اللائحة.pdf'

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
                        <li><a href="/we">الرؤية والرسالة والأهداف</a></li>
                        <li><a href="/leaders">أعضاء الإدارة التنفيذية</a></li>
                        <li><a href="https://web.facebook.com/profile.php?id=100064109831938" target='_blank'>شكل المبادرة وما تقدمه للمجتمع</a></li>
                    </ul>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                    <h4>المركز الإعلامي</h4>
                    <ul>
                        <li><a href="#last_news">الأخبار</a></li>
                        <li><a href="/we">الصور</a></li>
                        <li><a href="https://www.youtube.com/watch?v=nluAXkgPPMY&t=13s" target='_blank'>اللقاءات التليفزيونية</a></li>
                    </ul>
                </Col>

                <Col className='col-12 col-sm-12 col-md-3'>
                    <h4>الوائح والسياسات</h4>
                    <ul>
                        <li><a href={layha} target='_blank'>اللائحة الأساسية</a></li>
                        <li><a href={layha} target='_blank'>اللائحة التنظيمية</a></li>
                        <li><a href={layha} target='_blank'>سياسة خصوصية البيانات</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer