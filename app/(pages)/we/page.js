import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="we">
      <div className="title">
        <h2>
          مَن <span>قُرَّاءْ</span>
        </h2>
      </div>

      <div className="video">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/XJtf1w8BcEc?si=jvw6FKJIiAmEzt7z"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <section className="about">
        <div className="title">
          <h2>
            لمحة عن <span>المبادرة</span>
          </h2>
        </div>

        <div className="info_txt text-center">
          <h3 className="text-[30px]">نحن هنا منذ 2020م</h3>
          <p className="py-3 text-[20px]">
            قراء هي مبادرة مجتمعية تهدف إلى تنمية المجتمع من خلال تقديم
            التدريبات الأكاديمية والتخصصية والمهارية لكل لجنة من لجان المبادرة،
            حيثُ يَأْخُذُ كلُّ شَخْصٍ يَنْضَمُّ حَدِيثًا للجنةٍ تدريباتٍ
            أكاديمية وعملية في مجالِ اللجنةِ الخاصةِ به؛ ليكون قادرًا على تأدية
            مهام اللجنة بثقة وكفاءة وفاعلية.
          </p>
          <p className="py-3 text-[20px]">
            ولتعزيز المزيد من المهارات والمعرفة، تتولى أجنحة خاصة مهمة التدريب
            والتعليم وزيادة الثقافة، مثل جناح صون اللسان العربي الذي يقدم مداخلا
            للغة العربية تتضمن ورشًا تفاعلية وتدريبات أكاديمية لتحسين مهارات
            اللغة العربية بكفاءة عالية وبطريقة ممتعة.
          </p>
          <p className="pb-10 text-[20px]">
            تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة
            بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة تدريبات
            في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم - التسويق
            - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات
            أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة بهذا
            القسم، وهكذا في باقي اللجان.
          </p>
          <Link
            href={"/assets/books/اللائحة.pdf"}
            target="_blank"
            className="more"
          >
            تعرف على لوائح قراء
          </Link>
        </div>
      </section>

      <section className="service">
        <div className="title">
          <h2>
            هيكل <span>قُرَّاءْ</span>
          </h2>
        </div>

        <div className="logo">
          <Image
            src={"/assets/images/qorra.png"}
            width={200}
            height={200}
            loading="lazy"
            alt="qorra-logo"
          />
        </div>

        <div className="service_details">
          <div className="committes">
            <h4 className="committe_head">
              الأول:
              <span>لجان المبادرة</span>
            </h4>

            <ul className="committe_data">
              <li>- لجنة التقييم والتطوير</li>
              <li>- لجنة الإعلام</li>
              <li>- لجنة العلاقات العامة والتنظيم</li>
              <li>- إدارة المشروعات</li>
            </ul>
          </div>

          <div className="wings" id="sec_info">
            <h4 className="wing_head">
              الثاني:
              <span>أجنحة المبادرة</span>
            </h4>

            <ul className="wing_data">
              <li>- جناح صون اللسان العربي</li>
              <li>- جناح صناعة قارئ</li>
              <li>- جناح الجريدة</li>
              <li>- جناح البحث العلمي</li>
              <li>- جناح الخدمة المدنية</li>
            </ul>
          </div>
        </div>

        <div className="service_query">
          <div className="committes_hide">
            <h4 className="committe_head font-bold text-2xl py-[10px]">
              الأول:
              <span>لجان المبادرة</span>
            </h4>

            <ul className="committe_data">
              <li>- لجنة التقييم والتطوير</li>
              <li>- لجنة الإعلام</li>
              <li>- لجنة العلاقات العامة والتنظيم</li>
              <li>- إدارة المشروعات</li>
            </ul>
          </div>

          <div className="wings_hide">
            <h4 className="wing_head font-bold text-2xl py-[10px]">
              الثاني:
              <span>أجنحة المبادرة</span>
            </h4>

            <ul className="wing_data">
              <li>- جناح صون اللسان العربي</li>
              <li>- جناح صناعة قارئ</li>
              <li>- جناح الجريدة</li>
              <li>- جناح البحث العلمي</li>
              <li>- جناح الخدمة المدنية</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="goals">
        <div className="title">
          <h2>
            {" "}
            <span>أهدافنا</span>{" "}
          </h2>
        </div>

        <div className="info grid lg:grid-cols-2 md:grid-cols-1 lg:gap-10">
          <div>
            <p>تحقيق التنمية الثقافية والإجتماعية كجزء من التنمية المستدامة.</p>
            <p>ممارسة اللغة العربية الفصيحة من خلال ورش اللغة.</p>
            <p>تدريب المشاركين على مهارات القيادة الفعالة.</p>
            <p>تثقيف المشاركين بالقراءة والتدريبات.</p>
          </div>
          <div>
            <p>دراسة التاريخ العربي.</p>
            <p>إعطاء المشاركين أساسيات البحث العلمي والتعلم الذاتي.</p>
            <p>إعادة استخدام التراث والقيم العربية.</p>
            <p>العمل على محو الأمية.</p>
            <p>
              زيادة الوعي بأهم قضايا المجتمع والسعي لإيجاد حلول لها.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
