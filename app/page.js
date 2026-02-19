'use client';

import AboutPage from './AboutPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ContactsPage from './ContactsPage';
import FeedbackPage from './FeedbackPage';
import GalleryPage from './GalleryPage';
import ShedulePage from './ShedulePage';
import MainPage from './MainPage';
import { useEffect, useRef, useState } from 'react';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

export default function Home() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const startRef = useRef(null);
  const aboutRef = useRef(null);
  const scheduleRef = useRef(null);
  const galleryRef = useRef(null);
  const feedbackRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    const sectionRefs = [
      { section: 'start', ref: startRef },
      { section: 'about', ref: aboutRef },
      { section: 'schedule', ref: scheduleRef },
      { section: 'gallery', ref: galleryRef },
      { section: 'feedback', ref: feedbackRef },
      { section: 'contacts', ref: contactsRef },
    ];
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  return (
    <div className=" flex  min-h-screen flex-col  justify-between bg-black-950 text-white">
      <Header visibleSection={visibleSection} headerRef={headerRef} />

      <main>
        <MainPage startRef={startRef} />
        <br />
        <AboutPage aboutRef={aboutRef} />
        <br />
        <ShedulePage scheduleRef={scheduleRef} />
        <br />
        <GalleryPage galleryRef={galleryRef} />
        <br />
        <FeedbackPage feedbackRef={feedbackRef} />
        <br />
        <ContactsPage contactsRef={contactsRef} />
      </main>
      <Footer />
    </div>
  );
}
