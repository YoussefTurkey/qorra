import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leaderImg from '../../assets/images/leaders/turkey.jpg'
import DarkMood from '../DarkMood'
import BackToHome from '../EventsPage/BackToHome'

const Leaders = () => {
  return (
    <>
      <section className='leaders'>
        <Container>
          <Row>
            <Col className='col-12 lead_title'>
              <h2>مجلس <span>الإدارة</span></h2>
            </Col>

            <Row className='team_lead'>
              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a >

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>
            </Row>
          </Row>

          <Row>
            <Col className='col-12 lead_title'>
              <h2>مُنسقي <span>المبادرة</span></h2>
            </Col>

            <Row className='team_lead'>
              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>

              <a href='/profile' className='col col-6 col-sm-6 col-md-3'>
                <img src={leaderImg} alt="leader" />
                <h5>م. يوسف التركي</h5>
                <p>رئيس لجنة التقييم لسنة 2023</p>
              </a>
            </Row>
          </Row>
        </Container>

        <BackToHome />
        <DarkMood />
      </section>
    </>
  )
}

export default Leaders