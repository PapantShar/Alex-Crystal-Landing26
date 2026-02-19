//import Image from 'next/image';
//import AlexMainPortretSmall from '../../public/images/Alex-main 2-small.png';

export default function AlexMainSmall() {
  return (
    <figure className="relative ">
      <img
        className="relative z-10 "
        src="/images/Alex-main 2-small.png"
        alt="Alex Main Portret small"
      />
      <div className="absolute left-10 top-0 h-[124px] w-[175px] rounded-full bg-[#6a2d02] opacity-50 blur-3xl  filter"></div>
    </figure>
  );
}
