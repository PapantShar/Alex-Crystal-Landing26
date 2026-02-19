import Image from 'next/image';
import alexMainPortraitSmall from '../../public/images/Alex-main 2-small.png';

export default function AlexMainSmall() {
  return (
    <figure className="relative ">
      <Image
        className="relative z-10 "
        src={alexMainPortraitSmall}
        alt="Alex Main Portret small"
      />
      <div className="absolute left-10 top-0 h-[124px] w-[175px] rounded-full bg-[#6a2d02] opacity-50 blur-3xl  filter"></div>
    </figure>
  );
}
