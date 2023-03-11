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
                        <Form.Select className='col-6 selection'>
                            <option value='selected' disabled>إختر الوسيلة المناسبة</option>
                            <option value="whatsapp">واتساب</option>
                            <option value="facebook">فيسبوك</option>
                            <option value="website">موقع رسمي</option>
                        </Form.Select>
                        <Form.Control type="text" placeholder="اكتب ما تم اختياره" className='mt-3' />
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