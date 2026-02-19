import Image from 'next/image';
import alexMainPortrait from '../../public/images/Alex-main 2.png';

export default function AlexMain() {
  return (
    <figure className="relative ">
      <Image
        className="relative z-10 "
        src={alexMainPortrait}
        alt="Alex Main Portret"
      />
      <div className=":h-[174px] absolute left-24 top-6 w-[275px]  rounded-full bg-[#6a2d02] opacity-50 blur-3xl filter"></div>
    </figure>
  );
}
