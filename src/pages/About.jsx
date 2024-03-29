import ContactUs from "@/components/ContactUs";
import Donate from "@/components/Donate";
import React from "react";

const About = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-start">
          <div className="grid grid-cols-1 gap-6">
            <h2>О нас</h2>
            <div className="flex flex-col space-y-2">
              <h3>Кто мы</h3>
              <p className="text-base md:text-xl">
                NutriPro - команда энтузиастов сотрудничающая с экспертами в
                сфере диетологии для решения индивидуальных проблем связанных с
                питанием и повышения всеобщего уровня здоровья населения. Мы
                верим, что помогая людям перейти на здоровое питание мы вносим
                свою лепту в улучшение благосостояния народа.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3>Наша цель</h3>
              <p className="text-base md:text-xl">
                Мы стремимся помочь людям избавиться от вредного питания из их
                рациона и заменить его на полезную, но также не менее вкусную
                пищу!
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3>Наши ценности</h3>
              <p className="text-base md:text-xl">
                Превыше всего мы ценим здоровье людей, поэтому мы предоставляем
                максимально качественные услуги и говорим людям только правду.
                Только придерживаясь принципов честности, трудолюбия и
                чистосердечного желания улучшить мир мы сможем добиться нашей
                цели.
              </p>
            </div>
          </div>
          <div>
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_5e7wgehs.json"
              background="transparent"
              speed="1"
              style={{ width: "100%" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </section>
      <Donate />
      <ContactUs />
    </>
  );
};

export default About;
