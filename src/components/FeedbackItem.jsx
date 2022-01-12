import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackItem = ({ feedbackItem, handleDelete }) => {
  const { deleteFeedback, editItem } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feedbackItem.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editItem(feedbackItem)}>
        <FaEdit color="purple" />
      </button>
      <div className="message">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
