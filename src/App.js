import FeedbackData from "./Data/FeedbackData";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure about deleting this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedBackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
