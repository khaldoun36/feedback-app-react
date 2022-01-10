import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>We dont have feedback to display</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedbackItem) => (
        <FeedbackItem
          feedbackItem={feedbackItem}
          key={feedbackItem.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
