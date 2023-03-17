import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../components/homePage/Header';
import Footer from '../components/Footer'
import DarkMood from '../components/DarkMood';
import GoUp from '../components/GoUp';

const Contact = () => {
  return (
    <>
        <Header />
        <section className='contact'>
            <Container>
                <h2>تواصل <span>معنا</span></h2>
                <Row>
                    <h4>لا تترد بالتواصل معنا في أي وقت</h4>

                    <section className="wizard-section contact_form container">
                        <div className="no-gutters">
                            <div className="form-wizard">
                                <form action="" method="post" role="form">
                                    
                                    <fieldset className="wizard-fieldset show">
                                        <div className="form-group">
                                            <input type="text" className="form-control wizard-required" id="name"/>
                                            <label htmlFor="name" className="wizard-form-text-label">اسمك ثنائي</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control wizard-required" id="email"/>
                                            <label htmlFor="email" className="wizard-form-text-label">بريدك الإلكتروني</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control wizard-required" id="sub-tit"/>
                                            <label htmlFor="sub-tit" className="wizard-form-text-label">موضوع رسالتك</label>
                                        </div>
                                        <div className="form-group">
                                            <textarea className='form-control wizard-required' id="msg" cols="30" rows="10"></textarea>
                                            <label htmlFor="msg " className="wizard-form-text-label">موضوع رسالتك</label>
                                        </div>
                                        <div className="form-group clearfix">
                                            <button className="more" type='submit'>تسجيل</button>
                                        </div>
                                    </fieldset>

                                </form>
                            </div>
                        </div>
                    </section>
                </Row>
            </Container>
        </section>

        <Footer />
        <DarkMood />
        <GoUp />
    </>
  )
}

export default Contact