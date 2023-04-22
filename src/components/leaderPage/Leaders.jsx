import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DarkMood from '../DarkMood'
import Header from '../homePage/Header';
import GoUp from '../GoUp';
import Footer from '../Footer';

// Leaders-Pics
import Alaa from '../../assets/images/leaders/alaa.jpg'
import Girl from '../../assets/images/leaders/hijab.jpg'
import Man from '../../assets/images/leaders/man.jpg'
import Head from '../../assets/images/leaders/4.jpg'
import Tahreer from '../../assets/images/leaders/5.jpg'
import Media from '../../assets/images/leaders/6.jpg'
import PR from '../../assets/images/leaders/7.jpg'

const Leaders = () => {
  return (
    <>
      <Header />
      <section className='leaders'>
        <Container>
          <Row>
            <Col className='col-12 lead_title'>
              <h2>مجلس <span>الإدارة</span></h2>
            </Col>

            <Row className='team_lead'>
              <a href='/alaa' className='col col-6 col-sm-6 col-md-3'>
                <img src={Alaa} alt="leader" />
                <h5>م. محمد علاء الدين</h5>
                <p>رئيس المبادرة لسنة 2023</p>
              </a >

              <a href='/aya' className='col col-6 col-sm-6 col-md-3'>
                <img src={Girl} alt="leader" />
                <h5>أ. آية عباسي</h5>
                <p>رئيس الأجنحة لسنة 2023</p>
              </a>
            </Row>
          </Row>

          <Row>
            <Col className='col-12 lead_title'>
              <h2>رؤوساء <span>الجناح</span></h2>
            </Col>

            <Row className='team_lead'>
              <a href='/head' className='col col-6 col-sm-6 col-md-3'>
                <img src={Head} alt="leader" />
                <h5>أ. سين</h5>
                <p>رئيس الجناح لسنة 2023</p>
              </a>

              <a href='/tahreer' className='col col-6 col-sm-6 col-md-3'>
                <img src={Tahreer} alt="leader" />
                <h5>أ. سين</h5>
                <p>رئيس التحرير لسنة 2023</p>
              </a>

              <a href='/media' className='col col-6 col-sm-6 col-md-3'>
                <img src={Media} alt="leader" />
                <h5>أ. سين</h5>
                <p>رئيس لجنة الإعلام لسنة 2023</p>
              </a>

              <a href='/pr' className='col col-6 col-sm-6 col-md-3'>
                <img src={PR} alt="leader" />
                <h5>أ. سين</h5>
                <p>رئيس لجنة العلاقات العامة لسنة 2023</p>
              </a>
            </Row>
          </Row>

          <Row>
            <Col className='col-12 lead_title'>
              <h2>نواب ومُنسقي <span>الجناح</span></h2>
            </Col>

            <Row className='team_lead'>
              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={Man} alt="leader" />
                <h5>أ. سين</h5>
                <p>نائب لجنة الإعلام لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={Man} alt="leader" />
                <h5>أ. سين</h5>
                <p>نائب التحرير لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={Man} alt="leader" />
                <h5>أ. سين</h5>
                <p>مُنسق لجنة الإعلام لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={Man} alt="leader" />
                <h5>أ. سين</h5>
                <p>مُنسق لجنة العلاقات العامة لسنة 2023</p>
              </a>
            </Row>
          </Row>
        </Container>

        <Footer />
        <DarkMood />
        <GoUp />
      </section>
    </>
  )
}

export default Leaders