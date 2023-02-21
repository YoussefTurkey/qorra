import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tegara from '../../assets/images/photos/tegara.jpg'
import qaseda from '../../assets/images/photos/qaseda.jpg'
import ramadan from '../../assets/images/photos/ramadan.jpg'
import scroll from '../../assets/images/mouseScroll.png'
import book from '../../assets/books/كتاب التعريف بأجنحة قراء ٢٠٢١.pdf'

const Welcome = () => {
  return (
    <>
        {/* <Container className='welcome' id='welcome'>
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
        </Container> */}

        <Container className='welcome' id='welcome'>
            <Row>
                <Col className='welcome_tit'>
                    <h2>أخر الأخبار عن <span>المبادرة</span></h2>
                </Col>
            </Row>

            <Row>
                <Col className='col-12 col-sm-12 col-md-4'>
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
                            <Button variant="primary" className='more'>للمزيد من المعلومات</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-12 col-md-4'>
                    <Card>
                        <Card.Img variant="top" src={qaseda} />
                        <Card.Body>
                            <Card.Title>بيت القصيدة</Card.Title>
                            <Card.Text>
                            الخَيْـلُ وَاللّيْـلُ وَالبَيْـداءُ تَعرِفُنـي ................ وَالسّيفُ وَالرّمحُ والقرْطاسُ وَالقَلَـمُ
                            إن الشِّعرَ لسانُ أمتنا العربية وتراثها الأصيل، وإن للغة الضاد مذاقًا خاصًا في الشعر، والشعر ليس لسان الشعراء والفقهاء فقط، بل العرب جميعًا.
                            ونَحنُ في قُرَّاء نؤمنُ أن لغتنا أشمل من أن تنطوي في فئةٍ بعينها، لذا قررنا عقد مسابقة "بيت القصيدة" للشعر الفصيح.
                            </Card.Text>
                            <Button variant="primary" className='more'>للمزيد من المعلومات</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-12 col-md-4'>
                    <Card>
                        <Card.Img variant="top" src={ramadan} />
                        <Card.Body>
                            <Card.Title>رمضان بطعم قراء</Card.Title>
                            <Card.Text>
                            تأتي الشهور وتنقضي ولربما.. القلب لم يعبأ بها إطلاقًا
                            لكن إذا قالوا أهل هلالكم.. شمس السعادة تعلن الإشراقَ
                            فتحب أن تهنئكم قرَّاءُ بحلول شهر رمضان المبارك أعاده اللَّه علينا وعليكم بالخير واليمن والبركات.
                            تُهنأكم مبادرة قراء بحلول شهر رمضان الكريم
                            عسى اللَّه أن يتقبل منا صالح الأعمال.
                            <q>
                                <b>#اقرأ_لتعرف </b>
                                <b>#واعرف_لتكتب </b>
                                <b>#واكتب_لِتُعَلِّم </b>
                                <b>#قُرَّاءْ</b>
                                </q>
                            </Card.Text>
                            <Button variant="primary" className='more'>للمزيد من المعلومات</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Welcome