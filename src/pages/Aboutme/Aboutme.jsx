import React from 'react'

export default function Aboutme () {
  return (
    <>
      <div className="container mx-auto w-2/3 p-4 mt-10 items-center">
        <div className="about__content text-center">
          <h1 className="about__title text-4xl text-center font-bold">
            обо мне :
          </h1>
          <h2 className=" mt-10 text-2xl font-black">
            Образование :
          </h2>
          <p className="text-xl mt-3">
            Cамарский медицинский университет РЕАВИЗ. Высшее сестринское
            дело.преподаватель.
          </p>
          <p className="text-xl mt-3">
            Частное образовательное учреждение "фельдшер", "лечебное дело"
          </p>
          <h2 className="mt-10 text-2xl font-black">
            Повышение квалификации :
          </h2>
          <p className="text-xl mt-3">Нейропсихология детского возраста.</p>
          <p className="text-xl mt-3">Детский массаж.</p>
          <p className="text-xl mt-3">
            Тренер по адаптивной физической культуре.
          </p>
          <p className="text-xl mt-3">Войта и Бобат терапия.</p>
          <p className="text-xl mt-3">
            Высшая академия медицинского образования г. Санкт-Петербург
          </p>
          <h2 className="mt-10 text-2xl font-black">Опыт работы :</h2>
          <p className="mt-10 text-2xl font-black">В медицине:</p>
          <p className="text-xl mt-3">Более 10 лет</p>
          <p className="mt-10 text-2xl font-black">В реабилитации:</p>
          <p className="text-xl mt-3">Более 7 лет</p>
          <h2 className="mt-10 text-2xl font-black">
            Работаю с такими заболеваниями как :
          </h2>
          <p className="text-xl mt-3">
            РАС, синдром Дауна, умственная отсталость, синдром дефицита внимания
            и гиперактивность, ДЦП и т.д.
          </p>
          <p className="mt-10 text-2xl font-black">
            Индивидуальный подход к каждому ребенку.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
