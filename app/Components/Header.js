'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import Contacts from './Contacts';
import MenuButton from './MenuButton';
import MenuItems from './MenuItems';

export default function Header({ visibleSection, headerRef }) {
  const [isBtnOpen, setIsBtnOpen] = useState(false);

  const handleBtnClick = () => {
    setIsBtnOpen(!isBtnOpen);
  };
  const handleItemClick = () => {
    setIsBtnOpen(!isBtnOpen);
  };

  /* const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <header className=" sticky top-0 z-20 bg-black-950 " ref={headerRef}>
      <div className=" mx-auto items-center justify-between px-5 lg:flex lg:max-w-7xl">
        <div className=" flex items-center  justify-between py-5">
          <Logo />
          <div className=" lg:hidden">
            <Contacts />
          </div>
          <MenuButton visibility={isBtnOpen} onChildClick={handleBtnClick} />
        </div>
        <MenuItems
          visibleSection={visibleSection}
          visibility={isBtnOpen}
          onChildClick={handleItemClick}
        />
        <div className=" hidden lg:block">
          <Contacts />
        </div>
      </div>
    </header>
  );
}
