import BackToHome from '../EventsPage/BackToHome'

const Sign = () => {
  return (
    <>
        <section className="wizard-section sign container">
            <div className="row no-gutters">
                <div className="col-lg-6 col-md-6">
                    <div className="form-wizard">
                        <form action="" method="post" role="form">
                            <div className="form-wizard-header">
                                <p>من فضلك املئ هذة الإستمارة للتسجيل</p>
                                <ul className="list-unstyled form-wizard-steps clearfix">
                                    <li className="active"><span>1</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                </ul>
                            </div>
                            <fieldset className="wizard-fieldset show">
                                <h5>بيانات عامة</h5>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-6">
                                        <input type="text" className="form-control wizard-required" id="fname" required/>
                                        <label htmlFor="fname" className="wizard-form-text-label">الإسم الأول</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-6">
                                        <input type="text" className="form-control wizard-required" id="lname" required/>
                                        <label htmlFor="lname" className="wizard-form-text-label">اللقب</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="emial" className="form-control wizard-required" id="mail" required/>
                                    <label htmlFor="mail" className="wizard-form-text-label">البريد الإكتروني</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control wizard-required" id="phone" required/>
                                    <label htmlFor="phone" className="wizard-form-text-label">رقم الهاتف</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="form-group">
                                    <label id="gender_label">النوع</label>
                                    <div className="wizard-form-radio">
                                        <input name="radio-name" id="radio1" type="radio" />
                                        <label htmlFor="radio1">ذكر</label>
                                    </div>
                                    <div className="wizard-form-radio">
                                        <input name="radio-name" id="radio2" type="radio" />
                                        <label htmlFor="radio2">أنثى</label>
                                    </div>
                                </div>
                                <div className="form-group clearfix">
                                    <a href="javascript:;" className="form-wizard-next-btn float-right">متابعة التسجيل</a>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                                <h5>إنشاء كلمة مرور</h5>
                                <div className="form-group">
                                    <input type="password" className="form-control wizard-required" id="pwd" required/>
                                    <label htmlFor="pwd" className="wizard-form-text-label">كلمة المرور</label>
                                    <div className="wizard-form-error"></div>
                                    <span className="wizard-password-eye"><i className="far fa-eye"></i></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control wizard-required" id="cpwd" required/>
                                    <label htmlFor="cpwd" className="wizard-form-text-label">تأكيد كلمة المرور</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="form-group clearfix">
                                    <a href="javascript:;" className="form-wizard-next-btn float-right">متابعة التسجيل</a>
                                    <a href="javascript:;" className="form-wizard-previous-btn float-left">العودة</a>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                                <h5>بيانات خاصة</h5>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-4">
                                        <input type="text" className="form-control wizard-required" id="country" required/>
                                        <label htmlFor="country" className="wizard-form-text-label">دولة الإقامة</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-4">
                                        <input type="text" className="form-control wizard-required" id="city" required/>
                                        <label htmlFor="city" className="wizard-form-text-label">المدينة</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-4">
                                    <input type="text" className="form-control wizard-required" id="nationality" required/>
                                    <label htmlFor="nationality" className="wizard-form-text-label">الجنسية</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-6">
                                        <input type="number" className="form-control wizard-required" id="nation_card" required/>
                                        <label htmlFor="nation_card" className="wizard-form-text-label">الرقم القومي</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-6">
                                        <input type="tel" className="form-control wizard-required" id="sec_phone" />
                                        <label htmlFor="sec_phone" className="wizard-form-text-label">رقم الهاتف البديل</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control wizard-required" id="address" required/>
                                    <label htmlFor="address" className="wizard-form-text-label">العنوان</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-6">
                                        <input type="text" className="form-control wizard-required" id="qualiftication" />
                                        <label htmlFor="qualiftication" className="wizard-form-text-label">المؤهل الدراسي</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-6">
                                        <input type="text" className="form-control wizard-required" id="graduation_year" />
                                        <label htmlFor="graduation_year" className="wizard-form-text-label">السنة الدراسية</label>
                                        <div className="wizard-form-error"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control wizard-required" id="work" />
                                    <label htmlFor="work" className="wizard-form-text-label">التخصص الوظيفي</label>
                                    <div className="wizard-form-error"></div>
                                </div>
                                <div className="form-group clearfix">
                                    <a href="javascript:;" className="form-wizard-submit float-right">تسجيل</a>
                                    <a href="javascript:;" className="form-wizard-previous-btn float-left">العودة</a>
                                </div>
                            </fieldset>

                            <div className="btn__container">
                                <a href="#" className="btn">
                                    <span>instagram</span>
                                    <i className='bx bxl-instagram'></i>
                                </a>
                                <a href="#" className="btn-f">
                                    <span>facebook</span>
                                    <i className='bx bxl-facebook-square'></i>
                                </a>
                                <a href="#" className="btn-g">
                                    <span>Google</span>
                                    <i class='bx bxl-google'></i>
                                </a>
                            </div>

                            <a href="/join/login" id="login_link">لدي بالفعل حساب في المبادرة...</a>
                        </form>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="wizard-content-left d-flex justify-content-center align-items-center">
                        <h1 id="img_title">مشارك / عضو جديد</h1>
                    </div>
                </div>
            </div>
        </section>

        <BackToHome />
    </>
  )
}

export default Sign