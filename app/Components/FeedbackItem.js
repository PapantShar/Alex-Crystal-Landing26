//import Image from 'next/image';

export default function FeedbackItem({ feedback }) {
  return (
    <div className="relative ">
      <div className="card w-11/12  border border-orange-550  p-5">
        <img
          src={feedback.image}
          width="60"
          height="60"
          alt={feedback.name}
          className="absolute top-10 z-10"
        />
        <div className="absolute right-0 top-5 w-11/12 bg-orange-550 p-5 pl-16">
          <p>{feedback.date}</p>
          <p className="text-gray-700">{feedback.name}</p>
          <p>О лекции «{feedback.lecture}»</p>
        </div>
        <div className="mt-32 inline-flex md:mt-36 lg:mt-40">
          <span className="text-3xl text-orange-550  ">&#171;</span>
          <div className="space-y-4 p-2">
            <p>{feedback.short}</p>
            <p className="text-gray-950">{feedback.detailed}</p>
          </div>
          <span className=" self-end text-3xl text-orange-550">&#187;</span>
        </div>
      </div>
    </div>
  );
}
