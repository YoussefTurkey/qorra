import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="we">
      <h2>
        لمحة عن <span>المبادرة</span>
      </h2>

      <div className="grid lg:grid-cols-2 lg:gap-6 md:grid-cols-1 md:gap-4">
        <div className="video">
          <iframe
            width="800"
            height="400"
            src="https://www.youtube.com/embed/XJtf1w8BcEc?si=jvw6FKJIiAmEzt7z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="we_desc">
          <p className="text-2xl">
            تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة
            بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة تدريبات
            في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم - التسويق
            - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات
            أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة بهذا
            القسم، وهكذا في باقي اللجان.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
