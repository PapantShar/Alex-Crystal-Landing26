'use client';

//import Image from 'next/image';
import React, { useState } from 'react';
import ButtonUniversal from './Components/ButtonUniversal';
import ModalForm from './Components/ModalForm';
import MainModal from './Components/MainModal';
//import AlexwBook from '.././public/images/Alex w book.png';

export default function AboutPage({ aboutRef }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div ref={aboutRef}>
      <span className="ancor" id="about"></span>
      <div className=" bg-brown-510  py-14 md:py-28 ">
        <div className="mx-auto  max-w-7xl items-center px-5">
          <h1 className="text-orange-550  ">Обо мне</h1>
          <h3 className="text-gray-700 lg:mb-8">
            Меня зовут Алексей Хрусталёв, я — кандидат филологических наук.
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 ">
            <div className=" border-orange-550 md:order-1  lg:row-span-2 lg:border-2 lg:pb-4">
              <figure className="relative ">
                <img
                  className="relative top-4 z-10 lg:left-10 "
                  src="/images/Alex w book.png"
                  alt="Alex Portret light background"
                />
              </figure>
            </div>
            <div className=" flex flex-col justify-between md:order-2 md:pt-6">
              <div>
                <h3 className="text-gray-700 ">
                  <img
                    className="mr-5 inline"
                    src="/images/book-open.svg"
                    alt="Open Book Icon"
                    width={24}
                    height={24}
                  />
                  Исследователь, историк, автор статей
                </h3>
                <p className="text-brown-950">
                  Мои научные интересы связаны c исследованием культуры и
                  литературы народов Европы и Ближнего Востока.
                </p>
              </div>
              <div>
                <h3 className="text-gray-700 ">
                  <img
                    className="mr-5 inline"
                    src="/images/book-open.svg"
                    alt="Open Book Icon"
                    width={24}
                    height={24}
                  ></img>
                  Автор книги «Галльское евангелие»
                </h3>
                <p className="text-brown-950">
                  Книга была выпущена в 2014 году. Эта книга является
                  результатом многолетних исследований, основанных на
                  археологических находках и изучении древних манускриптов. В
                  ней я попытался дать новую интерпретацию христианства,
                  основанную на исторических фактах и научных данных.
                </p>
              </div>
              <div>
                <h3 className="text-gray-700 ">
                  <img
                    className="mr-5 inline"
                    src="/images/book-open.svg"
                    alt="Open Book Icon"
                    width={24}
                    height={24}
                  ></img>
                  Лектор
                </h3>
                <p className="text-brown-950 ">
                  Читаю лекции и провожу индивидуальные интеллектуальные обеды
                  «Интеллектуальный рацион».
                </p>
              </div>
            </div>

            <div className=" mt-5 md:order-3 md:col-span-2 lg:col-span-1">
              <p className=" mb-10 text-gray-700 ">
                Если у вас есть вопросы или вы хотите узнать больше обо мне и
                моей работе, не стесняйтесь связаться со мной. Я всегда рад
                пообщаться на темы, которые меня интересуют!
              </p>
              <span className="text-gray-700 hover:text-white active:hover:text-white">
                <ButtonUniversal
                  onClick={() => setShowModal(true)}
                  title={'Связаться со мной'}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <MainModal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ModalForm onClose={() => setShowModal(false)} type={'contact'} />
      </MainModal>
    </div>
  );
}
