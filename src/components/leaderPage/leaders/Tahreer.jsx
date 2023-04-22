import { Container } from 'react-bootstrap'
import leaderImg from '../../../assets/images/leaders/5.jpg'
import DarkMood from '../../DarkMood'
import Header from '../../homePage/Header'
import Footer from '../../Footer'
import GoUp from '../../GoUp'

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <section className='profile'>
            <h1 className='profile_name'>أ. سين <span>الفلاني</span></h1>
            <h2><span>رئيس</span> التحرير بالجناح في مبادرة قُرَّاءْ لسنة 2023</h2>

            <div className="profile_img mt-5">
                <img src={leaderImg} alt="leader" />
                
                <div className="profile_info">
                  <p>المهندس يوسف التركي. رئيس لجنة التقييم لعام 2023م، يعمل في مجال تطوير المواقع الإلكترونية منذ عام 2019م</p>
                  <p><a role='button' href='https://youssefturkey.github.io/YoussefTurkey_CV/' target='_blank' className='resume'>السيرة الذاتية</a></p>
                </div>
            </div>

            <div className="profile_txt mt-5">
                <p>البشمهندس <b>يوسف التركي</b> خريج كلية العلوم بجامعة الإسكندرية عام 2022م.</p>
                <p>كان مصمم جرافيكي في شركة <b>Herbal Globe</b> لعام 2022، ومن ثَم إنتقل إلى عالم البرمجيات فعمل كمصمم ومطور واجهات المواقع الإلكترونية في شركة <b>US Legalization</b> لعام 2023.</p>
                <p><i className='bx bx-chevrons-left' ></i> شارك في الأعمال التطوعية في مجالي تدريب المدربين والتصميم الجرافيكي، ومن الأماكن التى تطوع بها:
                </p>
                <ul className='civil'>
                  <li><i className='bx bx-check-double'></i> Upgrade 19</li>
                  <li><i className='bx bx-check-double'></i> HackerRank 19</li>
                  <li><i className='bx bx-check-double'></i> PSP 20</li>
                  <li><i className='bx bx-check-double'></i> قُرَّاءْ 20</li>
                  <li><i className='bx bx-check-double'></i> Target 20</li>
                  <li><i className='bx bx-check-double'></i> تنفيذي 21</li>
                  <li><i className='bx bx-check-double'></i> GDSC 22</li>
                </ul>
                <p><i className='bx bx-chevrons-left' ></i> من الشهادات التي حصل عليها مؤخراً:
                </p>
                <ul className='certificates'>
                  <li><i className='bx bx-check-double'></i> دبلوم الحوسبة الكمّية والبرمجة (2022)</li>
                  <li><i className='bx bx-check-double'></i> تدريب في قسم علوم الحاسب بشركة المياة بالإسكندرية (2021)</li>
                  <li><i className='bx bx-check-double'></i> شهادة إتمام دورة بناء الكوادر القيادية (2021)</li>
                </ul>
                <p>قد بنى العديد من اتصميمات والمواقع الإلكترونية ع المنصات الخاصة بمجالي التصميم الجرافيكي والبرمجة:
                </p>
                <ul className='projects'>
                  <li><i className='bx bx-chevron-left' ></i><a href="https://www.behance.net/YouTurkey11" target='_blank'>منصة بيهانس - Behance</a></li>
                  <li><i className='bx bx-chevron-left' ></i><a href="https://github.com/YoussefTurkey/" target='_blank'>منصة جيتهاب - Github</a></li>
                </ul>
            </div>

        </section>
      </Container>

      <Footer />
      <DarkMood />
      <GoUp />
    </>
  )
}

export default Profile