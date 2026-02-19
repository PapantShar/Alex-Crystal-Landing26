import data from '@/utils/data';

import LectureItem from './Components/LectureItem';

export default function ShedulePage({ scheduleRef }) {
  return (
    <div ref={scheduleRef}>
      <span className="ancor" id="schedule"></span>
      <div className="md:flex-column mx-auto max-w-7xl items-center justify-between px-5 py-14 md:py-28">
        <h1 className=" text-orange-550 ">События в ближайшее время</h1>
        <div className="grid grid-cols-1 gap-4 space-y-8 sm:grid-cols-2 sm:space-y-0 md:grid-cols-3 ">
          {data.lectures.map((lecture) => (
            <LectureItem lecture={lecture} key={lecture.slug}></LectureItem>
          ))}
        </div>
      </div>
    </div>
  );
}
