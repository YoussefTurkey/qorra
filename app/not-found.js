import React from 'react'

const notFound = () => {
  return (
    <div className="not_found">
        <h1>هل ضللتَ الطريق؟</h1>

        <p className="zoom-area"><b>لاتقلق يا صاح،</b> نحن جميعاً تائهون</p>

        <section className="error-container">
            <span className="four"><span className="screen-reader-text">4</span></span>
            <span className="zero"><span className="screen-reader-text">0</span></span>
            <span className="four"><span className="screen-reader-text">4</span></span>
        </section>

        <div className="link-container">
            <a href={"/"} className="more-link" id='back_home'>العودة إلى القائمة الرئيسية</a>
        </div>
    </div>
  )
}

export default notFound