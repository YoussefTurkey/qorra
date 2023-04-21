import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import one from '../assets/images/photos/one.jpg'
import two from '../assets/images/photos/two.jpg'
import three from '../assets/images/photos/three.jpg'

const News = () => {
  return (
    <>
        <Container className='news' id='last_news'>
            <Row>
                <Col className='news_tit'>
                    <h2>أحدث <span>المقالات</span></h2>
                </Col>
            </Row>

            <Row>
                <Col className='col-12 col-sm-6 col-lg-4'>
                    <Card>
                        <Card.Img variant="top" src={one} />
                        <Card.Body>
                            <Card.Title>أين أشرق النهار الذي لا يُظلم أبداً؟</Card.Title>
                            <Card.Text>
                                لكل عاشق وطن ولكل طير مستقر ولكل شمس شروق يحمل نهاراً يضئ أيامنا،
                                أما النهار الذي تتحدث عنه يوماً هو نهارٌ نحمله في روحنا لا يُظلم أبداً؛
                                ما هذا النهار؟ وما شمسه؟ ومن أين صدعت تلك الشمس؟ هذا ما سنجيب عنه في مقالنا.
                            </Card.Text>
                            <a role='button' href='/events/post' className='link'>للمزيد من المعلومات</a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-6 col-lg-4'>
                    <Card>
                        <Card.Img variant="top" src={two} />
                        <Card.Body>
                            <Card.Title>الذي لا يعرف تاريخه لا يمل من تكراره</Card.Title>
                            <Card.Text>
                                "الذي لا يعرف تاريخه لا يملّ من تكراره جملة إن أدركتها تعلمت الكثير"
                                قرّاء حركة شبابية تطوعية تهدف لزيادة الوعي والثقافة في المجتمع عن طريق
                                تسليط الضوء على الثقافة العربية، والنماذج الناجحة العربية سواء في التراث
                                أو في الوقت الحالي...........
                            </Card.Text>
                            <a role='button' href='/events/post' className='link'>للمزيد من المعلومات</a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-6 col-lg-4'>
                    <Card>
                        <Card.Img variant="top" src={three} />
                        <Card.Body>
                            <Card.Title>أنتوني بلينكن و روسيا</Card.Title>
                            <Card.Text>
                            نأمل ألا تلجأ روسيا إلى استخدام الطاقة كسلاح خلال الأيام المقبلة
                            <p className='dark_card_text'>#اقرأ_لتعرف</p>
                            <p className='dark_card_text'>#واعرف_لتكتب</p>
                            <p className='dark_card_text'>#واكتب_لِتُعَلِّم</p>
                            <p className='dark_card_text'>#قُرَّاءْ</p>
                            </Card.Text>
                            <a role='button' href='/events/post' className='link'>للمزيد من المعلومات</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <button className='more' id='postsMore'>مزيد من المقالات</button>
                </Col>
            </Row>
            
        </Container>
    </>
  )
}

export default News