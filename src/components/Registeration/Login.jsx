import BackToHome from '../EventsPage/BackToHome'

const Login = () => {
  return (
    <>
      <section className="wizard-section login container">
            <div className="row no-gutters">
                <div className="col-lg-6 col-md-6">
                    <div className="form-wizard">
                        <form action="" method="post" role="form">
                            <div className="form-wizard-header">
                                <h3>أهلاً بك مجدداً ياصديقي...</h3>
                            </div>

                            <div className="social">
                              <p>قم بالتسجيل من خلال المواقع التواصل الإجتماعي</p>
                              <div className="btn__container">
                                  <a href="#" className="btn-f">
                                      <span>linkedin</span>
                                      <i className='bx bxl-linkedin-square'></i>
                                  </a>
                                  <a href="#" className="btn-g">
                                      <span>Google</span>
                                      <i className='bx bxl-google'></i>
                                  </a>
                              </div>
                            </div>
                            
                            <p>أو ادخل بياناتك</p>
                            <fieldset className="wizard-fieldset show">
                                <div className="form-group">
                                    <input type="text" className="form-control wizard-required" id="mail" required/>
                                    <label htmlFor="mail" className="wizard-form-text-label">البريد الإلكتروني / الهاتف</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control wizard-required" id="pass" required/>
                                    <label htmlFor="pass" className="wizard-form-text-label">كلمة المرور</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="form-group">
                                    <label className="checkbox path">
                                        <input type="checkbox" />
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                    </label>
                                    <label htmlFor="remember" className="wizard-form-text-label remember">تذكرني دائماً</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="form-group clearfix">
                                    <a href="javascript:;" className="form-wizard-submit float-right">تسجيل</a>
                                </div>
                            </fieldset>

                            

                            <a href="/join/sign" id="sign_link">ليس لدي حساب في المبادرة...</a>
                        </form>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="wizard-content-left d-flex justify-content-center align-items-center">
                        <h1 id="img_title">التسجيل</h1>
                    </div>
                </div>
            </div>
        </section>

        <BackToHome />
    </>
  )
}

export default Login