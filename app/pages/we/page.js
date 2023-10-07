import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className='we'>
      <h2>لمحة عن <span>المبادرة</span></h2>

      <div className='grid lg:grid-cols-2 lg:gap-6 md:grid-cols-1 md:gap-4'>
        <div className='video'>
          <iframe width="800" height="400" src="https://www.youtube.com/embed/XJtf1w8BcEc?si=jvw6FKJIiAmEzt7z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <div className='we_desc'>
          <p className='text-2xl'>
            تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة
            بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة
            تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى:
            - التصميم - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه
            يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على تأدية
            المهام الخاصة بهذا القسم، وهكذا في باقي اللجان.
          </p>
        </div>
      </div>
      
      <div className='grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-4 we_count'>
        <div>
          <Image src={'/assets/images/participant.svg'} width={150} height={150} loading={'lazy'} alt='متطوعين' />
          <p className='num'>أكثر من مائة وخمسين</p>
          <p>متطوع</p>
        </div>

        <div>
          <Image src={'/assets/images/followers.svg'} width={150} height={150} loading={'lazy'} alt='متابعين' />
          <p className='num'>أكثر من ثمانية الاف</p>
          <p>متابع</p>
        </div>

        <div>
          <Image src={'/assets/images/learning.svg'} width={150} height={150} loading={'lazy'} alt='متعلمين' />
          <p className='num'>أكثر من سبعين</p>
          <p>متعلم</p>
        </div>

        <div>
          <Image src={'/assets/images/projects.svg'} width={150} height={150} loading={'lazy'} alt='مشاريع' />
          <p className='num'>أكثر من ثلاثة</p>
          <p>مشاريع</p>
        </div>
      </div>

      <div className='we_proud'>
        <h2>نعتز <span>بلغتنا</span></h2>

        <div className='grid lg:grid-cols-2 lg:gap-6 md:grid-cols-1 md:gap-4'>
          <div>
            <Image src={'/assets/images/target.png'} width={150} height={150} alt='أهدافنا' loading='lazy' />
            <h4>أهدافنا</h4>
            <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
            <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
            <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
          </div>

          <div>
            <Image src={'/assets/images/roadmap.png'} width={150} height={150} alt='رؤيتنا' loading='lazy' />
            <h4>أهدافنا</h4>
            <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
            <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
            <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
          </div>

          <div>
            <Image src={'/assets/images/chat.png'} width={150} height={150} alt='رسالتنا' loading='lazy' />
            <h4>رسالتنا</h4>
            <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
            <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
            <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
          </div>

          <div>
            <Image src={'/assets/images/diamond.png'} width={150} height={150} alt='قيمنا' loading='lazy' />
            <h4>قيمنا</h4>
            <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.</p>
            <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
            <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page