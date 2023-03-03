import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eventImg from '../assets/images/photos/ارابيسك.jpg'
import ContactEvent from '../components/EventsPage/ContactEvent'
import DarkMood from '../components/DarkMood'
import BackToHome from '../components/EventsPage/BackToHome'

const Events = () => {
  return (
    <>
        <Container className='events'>
            <Row>
                <Col>
                    <img src={eventImg} id='arabisk_event' alt="arabisk" />
                </Col>
            </Row>
            <Row>
                <Col className='eventTxt'>
                    <p>🔵 واخيرا
                        وبعد طول انتظار نقدر نقول صاروخ أرابيسك يستقر على الأرض 🤞 تقدروا تشرفونا في أرابيسك 
                        Art Space يوميا من 10 صباحا  الي 10 مساءا عدا الجمعة من 1.30 الي 1.30 .. بخصومات خاصة بمناسبة الافتتاح  🎉🔥♥️
                    </p>
                    <p>🔵 لو انت من الناس
                        اللي بتحب الهدوء سواء بتشتغل او حابب تقرأ أو طالب وعايز تذاكر يبقي مكانك في أرابيسك 
                        Art Space في أهدي Shared Space 🌌 🚀 
                    </p>
                    <p>🔵ولو عندك Workshops أو Course يبقى مكانك في قاعة أرابيسك اللي بتتسع ل 25 فرد مجهزة  مُجهزة بـ Screen و whiteboard🚀♥️ </p>
                    <p>🔵 ولو عايز تقعد مع اصحابك او عايز تعمل عيد ميلاد يبقى مكانك في القعدة العربي 😂🎉♥️ </p>
                    <p>🔵 وكمان في بوفية مُجهز بكل بكل المشروبات اللي انت عايزها ( باردة - ساخنة ) 😂🎉♥️ </p>
                    <p>🔵 يعني من الاخر عايز تعمل اي حاجة يبقي تعالي علي أرابيسك Art Space 🔥🎉  </p>
                    <p>🔵 للحجز والاستعلام :
                        ابعتلنا على الـ Page 📩 
                        WhatsApp : 01550508077 
                    </p>
                    <p>🔵 عنوانا ميتوهش : 2 شارع محمد فتحى الخولى متفرع من شارع فؤاد أمام بنك Saib ( المسلة - العطارين ) </p>
                    <p>#ارابيسك_ArtSpace </p>
                    <p>#Stay_Tune</p>
                </Col>
            </Row>

            <BackToHome />
            <ContactEvent />
        </Container>

        <DarkMood />
    </>
  )
}

export default Events