import data from '@/utils/data';

import FeedbackItem from './Components/FeedbackItem';

export default function FeedbackPage({ feedbackRef }) {
  return (
    <div ref={feedbackRef}>
      <span className="ancor" id="feedback"></span>{' '}
      <div className="mx-auto max-w-7xl items-center justify-between px-5 py-14 md:py-28">
        <h1 className="  text-orange-550">
          Впечатления гостей о прошедших событиях
        </h1>

        <div className="mt-5 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          {data.feedbacks.map((feedback) => (
            <FeedbackItem
              feedback={feedback}
              key={feedback.name}
            ></FeedbackItem>
          ))}
        </div>
      </div>
    </div>
  );
}
