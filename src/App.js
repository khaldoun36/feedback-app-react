import FeedbackData from "./Data/FeedbackData";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./AboutLink";

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
    <Router>
      <Link to={"/"}>
        <Header />
      </Link>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedBackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutLink />
              </>
            }
          ></Route>
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
