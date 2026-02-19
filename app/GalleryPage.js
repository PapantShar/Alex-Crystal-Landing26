import Image from 'next/image';
import gallery1 from '../public/images/gallery1.png';
import gallery2 from '../public/images/gallery2.png';
import gallery3 from '../public/images/gallery3.png';
import gallery4 from '../public/images/gallery4.png';
import gallery5 from '../public/images/gallery5.png';
import gallery6 from '../public/images/gallery6.png';

export default function GalleryPage({ galleryRef }) {
  return (
    <div ref={galleryRef}>
      <span className="ancor" id="gallery"></span>
      <div className="mx-auto max-w-7xl items-center justify-between px-5 py-14 md:py-28">
        <h1 className=" text-orange-550 ">Атмосфера на мероприятиях</h1>

        <div className="mx-auto mt-5 grid max-w-screen-lg gap-5 md:grid-cols-2 ">
          <Image
            src={gallery1}
            alt="gallery1"
            className="h-auto w-full md:row-span-2"
          />
          <Image src={gallery2} alt="gallery2" className="h-auto w-full" />
          <Image src={gallery3} alt="gallery3" className="h-auto w-full" />
          <Image src={gallery4} alt="gallery4" className="h-auto w-full" />
          <Image src={gallery5} alt="gallery5" className="h-auto w-full" />
          <Image
            src={gallery6}
            alt="gallery6"
            className="h-auto w-full md:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}
