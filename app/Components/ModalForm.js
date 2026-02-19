//import { sendContactForm } from '@/app/Lib/api';
import React, { useState } from 'react';
import ButtonUniversal from './ButtonUniversal';

export default function ModalForm({ onClose, type }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [lecture, setLecture] = useState('');
  const [tickets, setTickets] = useState('');
  const [message, setMessage] = useState('');
  const [persData, setPersData] = useState('true');

  const handleSubmit = async (event) => {
    event?.preventDefault();
    //e.preventDefault();
    const data = {
      name,
      phone,
      email,
      lecture,
      tickets,
      message,
      persData,
    };

    //    following mail sent with local mail client
    const Subject = data.tickets
      ? data.lecture + ', всего билетов  : ' + data.tickets + ' шт.'
      : 'Сообщение c сайта';
    const Body =
      'Сообщение от : ' +
      data.name +
      '\n' +
      data.message +
      '\n' +
      'С уважением, ' +
      '\n' +
      data.phone +
      '\n' +
      data.email;

    const Email = process.env.NEXT_PUBLIC_EMAIL_SEND_TO;
    let params = Subject || Body ? '?' : '';
    if (Subject) params += `subject=${encodeURIComponent(Subject)}`;
    if (Body) params += `${Subject ? '&' : ''}body=${encodeURIComponent(Body)}`;
    parent.location = `mailto:${Email}${params}`;

    // this is for nodemailer functionality
    //await sendContactForm(data);

    onClose();
    setName('');
    setPhone('');
    setEmail('');
    setLecture('');
    setTickets('');
    setMessage('');
    setPersData('false');
  };
  return (
    <>
      <h2 className="mb-6 text-center text-3xl text-gray-700">
        Заполните информацию о себе и напишите текст сообщения
      </h2>
      <form className=" " onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control m-0 block
            w-full
            border-2
            border-l-0
            border-r-0
            border-t-0
            border-[#90735F]
            bg-[#D0B8A6] bg-clip-padding
            px-3 py-1.5 text-base font-normal  text-gray-700
            
            placeholder-[#90735F]
            transition
            ease-in-out
            focus:border-gray-700 focus:bg-[#D0B8A6] focus:text-gray-700 focus:outline-none"
          id="Name"
          placeholder="Ваше имя:"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          className="form-control m-0 block
            w-full
            border-2
            border-l-0
            border-r-0
            border-t-0
            border-[#90735F]
            bg-[#D0B8A6] bg-clip-padding
            px-3 py-1.5 text-base font-normal  text-gray-700
           
            placeholder-[#90735F]
            transition
            ease-in-out
            focus:border-gray-700 focus:bg-[#D0B8A6] focus:text-gray-700 focus:outline-none"
          id="Phone"
          placeholder="+7 (XXX) XXX-XX-XX"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="form-control m-0 block
            w-full
            border-2
            border-l-0
            border-r-0
            border-t-0
            border-[#90735F]
            bg-[#D0B8A6] bg-clip-padding
            px-3 py-1.5 text-base font-normal  text-gray-700
           
            placeholder-[#90735F]
            transition
            ease-in-out
            focus:border-gray-700 focus:bg-[#D0B8A6] focus:text-gray-700 focus:outline-none"
          id="emailAddress"
          placeholder="Адрес эл. почты"
          onChange={(e) => setEmail(e.target.value)}
        />
        {type == 'order' ? (
          <>
            <input
              type="text"
              className="form-control m-0 block
            w-full
            border-2
            border-l-0
            border-r-0
            border-t-0
            border-[#90735F]
            bg-[#D0B8A6] bg-clip-padding
            px-3 py-1.5 text-base font-normal  text-gray-700
           
            placeholder-[#90735F]
            transition
            ease-in-out
            focus:border-gray-700 focus:bg-[#D0B8A6] focus:text-gray-700 focus:outline-none"
              id="lecture"
              placeholder="Название лекции"
              onChange={(e) => setLecture(e.target.value)}
            />
            <input
              type="number"
              className="form-control m-0 block
            w-full
            border-2
            border-l-0
            border-r-0
            border-t-0
            border-[#90735F]
            bg-[#D0B8A6] bg-clip-padding
            px-3 py-1.5 text-base font-normal  text-gray-700
            
            placeholder-[#90735F]
            transition
            ease-in-out
            focus:border-gray-700 focus:bg-[#D0B8A6] focus:text-gray-700 focus:outline-none"
              id="ticketsNum"
              placeholder="Колличество билетов"
              onChange={(e) => setTickets(e.target.value)}
            />{' '}
          </>
        ) : null}
        <textarea
          type="text"
          className="form-control m-0 block
            w-full
            border-2
            border-l-0
            border-r-0
            border-t-0
            border-[#90735F]
            bg-[#D0B8A6] bg-clip-padding
            px-3 py-1.5 text-base font-normal  text-gray-700
            
            placeholder-[#90735F]
            transition
            ease-in-out
            focus:border-gray-700 focus:bg-[#D0B8A6] focus:text-gray-700 focus:outline-none"
          id="Comments"
          rows="6"
          placeholder="Ваши пожелания или комментарии"
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="form-check-input 
              {/*appearance-none*/} 
              mr-2
              mt-1 h-4 
              w-4 
              cursor-pointer border 
              border-[#90735F] bg-[#D0B8A6] bg-contain 
              bg-center bg-no-repeat 
              align-top accent-orange-600 transition 
              duration-200 checked:border-[#FF6500] 
              checked:bg-[#FF6500] focus:outline-none"
            id="PersData"
            defaultChecked
            onChange={() => setPersData(!persData)}
          />
          <label className="form-check-label inline-block text-gray-700">
            Даю согласие на обработку персональныз данных
          </label>
        </div>

        <span className="text-gray-700 hover:text-white active:hover:text-white">
          <ButtonUniversal type="submit" title="Отправить" />
        </span>
      </form>
    </>
  );
}
