import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eventImg from '../../../assets/images/photos/qaseda.png'
import ContactQaseda from '../contactEvent/ContactQaseda'

const ByetQaseda = () => {
  return (
    <>
        <Container className='events'>
            <Row>
                <Col>
                    <img src={eventImg} className='eventImg' alt="tegara" />
                </Col>
            </Row>
            <Row>
                <Col className='eventTxt'>
                    <p>الخَيْـلُ وَاللّيْـلُ وَالبَيْـداءُ تَعرِفُنـي ................ وَالسّيفُ</p>
                    <p>وَالرّمحُ والقرْطاسُ وَالقَلَـمُ إن الشِّعرَ لسانُ أمتنا العربية</p>
                    <p>وتراثها الأصيل، وإن للغة الضاد مذاقًا خاصًا في الشعر،</p>
                    <p>والشعر ليس لسان الشعراء والفقهاء فقط، بل العرب</p>
                    <p>جميعًا. ونَحنُ في قُرَّاء نؤمنُ أن لغتنا أشمل من أن</p>
                    <p>تنطوي في فئةٍ بعينها، لذا قررنا عقد مسابقة "بيت</p>
                    <p>القصيدة" للشعر الفصيح.</p>
                </Col>
            </Row>

            <ContactQaseda />
        </Container>
    </>
  )
}

export default ByetQaseda