import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DarkMood from '../DarkMood';
import BackToHome from './BackToHome'

const FormEvent = () => {
  return (
    <>
        <Container>
            <Row>
                <Form className='create_post' action='' method='POST'>
                    <Form.Group className="mb-3">
                        <Form.Label>العنوان الرئيسي للمنشور</Form.Label>
                        <Form.Control type="text" placeholder="العنوان الذي سيظهر على صفحة قراء الرئيسية" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>وصف المنشور</Form.Label>
                        <Form.Control type="text" placeholder="الوصف الذي سيظهر على صفحة قراء الرئيسية" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>روابط وسائل التواصل</Form.Label>
                        <div className="select_inpts">
                            <Form.Select className='selection'>
                                <option selected='selected' disabled>إختر الوسيلة المناسبة</option>
                                <option value="whatsapp" id='whts'>واتساب</option>
                                <option value="facebook" id='face'>فيسبوك</option>
                                <option value="website" id='web'>موقع رسمي</option>
                            </Form.Select>
                            <Form.Control type="tel" placeholder="رقم الواتساب الخاص بك" id='whatsapp'/>
                            <Form.Control type="url" placeholder="رابط حسابك على الفيسبوك" id='facebook'/>
                            <Form.Control type="url" placeholder="رابط موقعك الخاص" id='website'/>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>صورة المنشور</Form.Label>
                        <Form.Control type="file" accept="image/png, image/gif, image/jpeg" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>محتوى المنشور</Form.Label>
                        <textarea placeholder="المحتوى الذي سيظهر على صفحة المنشور نفسهِ" cols="30" rows="10" className='form-control'></textarea>
                    </Form.Group>
                    
                    
                    <Button className='more' id='share' type="submit">
                        إنشر المنشور
                    </Button>
                </Form>
            </Row>
        </Container>

        <BackToHome />
        <DarkMood />
    </>
  )
}

export default FormEvent