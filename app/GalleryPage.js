//import Image from 'next/image';
//import Gallery1 from '../public/images/gallery1.png';
//import Gallery2 from '../public/images/gallery2.png';
//import Gallery3 from '../public/images/gallery3.png';
//import Gallery4 from '../public/images/gallery4.png';
//import Gallery5 from '../public/images/gallery5.png';
//import Gallery6 from '../public/images/gallery6.png';

export default function GalleryPage({ galleryRef }) {
  return (
    <div ref={galleryRef}>
      <span className="ancor" id="gallery"></span>
      <div className="mx-auto max-w-7xl items-center justify-between px-5 py-14 md:py-28">
        <h1 className=" text-orange-550 ">Атмосфера на мероприятиях</h1>

        <div className="mx-auto mt-5 grid max-w-screen-lg gap-5 md:grid-cols-2 ">
          <img
            src="/images/gallery1.png"
            alt="gallery1"
            className="w-full md:row-span-2"
          />
          <img src="/images/gallery2.png" alt="gallery2" className=" w-full" />
          <img src="/images/gallery3.png" alt="gallery3" className=" w-full" />
          <img src="/images/gallery4.png" alt="gallery4" className=" w-full" />
          <img src="/images/gallery5.png" alt="gallery5" className=" w-full" />
          <img
            src="/images/gallery6.png"
            alt="gallery6"
            className="w-full md:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}
