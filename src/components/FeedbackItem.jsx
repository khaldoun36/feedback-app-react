import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
const FeedbackItem = ({ feedbackItem, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <button className="close" onClick={() => handleDelete(feedbackItem.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="message">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
