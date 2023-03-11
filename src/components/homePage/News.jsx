import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tegara from '../../assets/images/photos/tegara.jpg'
import qaseda from '../../assets/images/photos/qaseda.jpg'
import arabesk from '../../assets/images/photos/arabesk.jpg'

const News = () => {
  return (
    <>
        <Container className='news' id='last_news'>
            <Row>
                <Col className='news_tit'>
                    <h2>أخر الأخبار عن <span>المبادرة</span></h2>
                </Col>
            </Row>

            <Row>
                <Col className='col-12 col-sm-6 col-lg-4'>
                    <Card>
                        <Card.Img variant="top" src={tegara} />
                        <Card.Body>
                            <Card.Title>تحت رعاية كلية التجارة</Card.Title>
                            <Card.Text>
                            تتشرف مبادرة قُرَّاءْ بالإعلان عن الراعي الرسمي لها في موسمها الثاني 2021، كلية التجارة - جامعة الإسكندرية.
                            تحت قيادة الأستاذ الدكتور: عبدالعزيز قنصوة، رئيس جامعة الإسكندرية.
                            والأستاذ الدكتور: وائل عبدالسلام، نائب رئيس الجامعة لشئون الطلاب.
                            والأستاذ الدكتور: السيد الصيفي، عميد كلية التجارة - جامعة الإسكندرية.
                            </Card.Text>
                            <a role='button' href='/events/tegara' className='more'>للمزيد من المعلومات</a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-6 col-lg-4'>
                    <Card>
                        <Card.Img variant="top" src={qaseda} />
                        <Card.Body>
                            <Card.Title>بيت القصيدة</Card.Title>
                            <Card.Text>
                            الخَيْـلُ وَاللّيْـلُ وَالبَيْـداءُ تَعرِفُنـي ................ وَالسّيفُ وَالرّمحُ والقرْطاسُ وَالقَلَـمُ
                            إن الشِّعرَ لسانُ أمتنا العربية وتراثها الأصيل، وإن للغة الضاد مذاقًا خاصًا في الشعر، والشعر ليس لسان الشعراء والفقهاء فقط، بل العرب جميعًا.
                            ونَحنُ في قُرَّاء نؤمنُ أن لغتنا أشمل من أن تنطوي في فئةٍ بعينها، لذا قررنا عقد مسابقة "بيت القصيدة" للشعر الفصيح.
                            </Card.Text>
                            <a role='button' href='/events/qaseda' className='more'>للمزيد من المعلومات</a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-6 col-lg-4'>
                    <Card>
                        <Card.Img variant="top" src={arabesk} />
                        <Card.Body>
                            <Card.Title>أرابيســــك</Card.Title>
                            <Card.Text>
                            نعلن بكل حب عن الشراكة مع أرابيسك Art Space، آملين التوفيق والنجاح والتقدم لكلا الكيانيين.
                            <p className='dark_card_text'>#اقرأ_لتعرف</p>
                            <p className='dark_card_text'>#واعرف_لتكتب</p>
                            <p className='dark_card_text'>#واكتب_لِتُعَلِّم</p>
                            <p className='dark_card_text'>#قُرَّاءْ</p>
                            </Card.Text>
                            <a role='button' href='/events/arabisk' className='more'>للمزيد من المعلومات</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default News