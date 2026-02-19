'use client';

import React, { useState } from 'react';
//import { sendContactForm } from './Lib/api';
import ButtonUniversal from './Components/ButtonUniversal';
//import Image from 'next/image';
//import UndrConstruction from '../public/images/contacts.png';
export default function ContactsPage({ contactsRef }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [lecture, setLecture] = useState('');
  const [tickets, setTickets] = useState('');
  const [message, setMessage] = useState(
    'Подпишите, пожалуйста, на Вашу рассылку'
  );
  const [persData, setPersData] = useState('true');

  const handleSubmit = async () => {
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

    setName('');
    setPhone('');
    setEmail('');
    setLecture('');
    setTickets('');
    setMessage('Подпишите, пожалуйста, на Вашу рассылку');
    setPersData('false');
  };
  return (
    <section
      ref={contactsRef}
      className="min-h-screen"
    >
      <span className="ancor" id="contacts"></span>
      <div className="mx-auto max-w-7xl items-center justify-between px-5 py-14 md:py-28">
        <h1 className=" text-orange-550 ">Интересное начинается здесь!</h1>
        <div className="columns-1  gap-8  md:flex md:columns-2 ">
          <div className="mb-5 mt-5 self-center">
            <img src="/images/contacts.png" alt="Contact Us" />
          </div>
          <div className=" space-y-5">
            <p className="text-gray-950">
              Хотите получать анонсы событий и узнавать новости первыми? Только
              полезная информация, никакого спама.
            </p>
            <p>Подписывайтесь на рассылку!</p>
            <form className=" ">
              <input
                type="email"
                className="form-control mb-4 block
                w-full
                
                border-2
                border-l-0
                border-r-0
                border-t-0
                border-[#90735F]
                bg-brown-510 bg-clip-padding
                px-3 py-3 text-base font-normal  text-gray-700
              
                placeholder-[#90735F]
                transition
                ease-in-out
              focus:border-gray-700 focus:bg-brown-510 focus:text-gray-700 focus:outline-none"
                id="emailAddress"
                placeholder="Введите адрес эл. почты"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="text-white-700 hover:text-white active:hover:text-white">
                <ButtonUniversal
                  onClick={() => {
                    handleSubmit();
                  }}
                  title={'Подписаться'}
                />
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
