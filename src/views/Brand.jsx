import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import business from '../assets/images/business.png'
import mdarj from '../assets/images/mdarj.png'
import mezza from '../assets/images/mezza.png'
import arabisk from '../assets/images/arabisk.png'

const Brand = () => {
  return (
    <>
        <section className="brand">

            <Container>
                <Row className='brand_tit'>
                    <h2><span>شركائنا</span></h2>
                </Row>

                <Row>
                    <Col className='col-3 brand_slide' id='business'>
                        <img src={business} alt="1" />    
                    </Col>

                    <Col className='col-3 brand_slide'>
                        <img src={mdarj} alt="2" />   
                    </Col>

                    <Col className='col-3 brand_slide'>
                        <img src={mezza} alt="3" />   
                    </Col>

                    <Col className='col-3 brand_slide'>
                        <img src={arabisk} alt="4" /> 
                    </Col>
                </Row>
            </Container>

        </section>
    </>
  )
}

export default Brand