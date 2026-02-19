'use client';

import AlexMain from './Components/AlexMain';
import AlexMainSmall from './Components/AlexMainSmall';
import ButtonUniversal from './Components/ButtonUniversal';
import { useRouter } from 'next/navigation';

export default function MainPage({ startRef }) {
  const router = useRouter();
  return (
    <div ref={startRef}>
      <span className="ancor" id="start"></span>
      <div className=" mx-auto max-w-7xl items-center px-5 pb-14  md:flex md:flex-row md:pb-0">
        <div className=" space-y-4 md:basis-3/5 md:space-y-10 lg:space-y-16 ">
          <div>
            <h1 className=" mb-0 mt-3">Алексей Хрусталев</h1>
            <p className="text-gray-950">Кандидат филологических наук</p>
          </div>
          <div className="flex justify-center md:hidden">
            <AlexMainSmall />
          </div>
          <p>
            Изучая портреты стран и народов, задавленный учебными пособиями мозг
            иногда не улавливает, казалось бы, очевидное. И от мысли, что
            Стэплтон на самом деле Баскервиль, впадает в ступор.
          </p>
          <p className="  text-gray-950">
            Хотите разобраться и подискутировать? Приглашаю на мои живые лекции
            и интеллектуальные обеды.
          </p>
          <br />
          <span className=" text-white hover:text-white active:hover:text-white">
            <ButtonUniversal
              onClick={() => router.push('#schedule')}
              title={'Посмотреть расписание'}
            />
          </span>
        </div>
        <div className="ml-2 hidden md:block md:basis-2/5">
          <AlexMain />
        </div>
      </div>
    </div>
  );
}
