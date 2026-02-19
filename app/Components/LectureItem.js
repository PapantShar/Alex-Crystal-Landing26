'use client';
//import { parseISO, format } from 'date-fns';
import React, { useState } from 'react';
import Image from 'next/image';
import ButtonUniversal from './ButtonUniversal';
import MainModal from './MainModal';
import ModalForm from './ModalForm';
import DetailsModal from './DetailsModal';

export default function LectureItem({ lecture }) {
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="card relative">
      <Image src={lecture.image} alt={lecture.name} className="h-auto w-full" />
      <div className="p-5">
        <div className="flex items-center justify-between text-xl font-bold ">
          <div>{lecture.date}</div>
          <div>{lecture.price} ₽</div>
        </div>
        <div className="text-gray-950">{lecture.place}</div>
        <div className=" ">
          <h2 className="text-xl font-bold">{lecture.name}</h2>
          <p className="absolute top-0 m-1 bg-[#1e1611] p-1">{lecture.type}</p>
          <div
            className="mb-2 py-2 text-gray-950 hover:bg-[#513b2d] "
            onClick={() => setShowDetails(true)}
          >
            {' '}
            <p>{lecture.description}</p>
            <p className="pt-2 text-sm text-white">{'Подробнее --->'}</p>
          </div>

          <span
            className={` ${
              lecture.isSheduled ? 'block' : 'hidden'
            } text-white hover:text-white active:hover:text-white`}
          >
            <ButtonUniversal
              onClick={() => setShowModal(true)}
              title="Заказать билет"
            />
          </span>
        </div>
      </div>
      <MainModal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ModalForm onClose={() => setShowModal(false)} type="order" />
      </MainModal>
      <DetailsModal
        isVisible={showDetails}
        onClose={() => setShowDetails(false)}
      >
        <div className=" p-4  text-justify text-gray-700 ">
          {lecture.details}
        </div>
      </DetailsModal>
    </div>
  );
}
