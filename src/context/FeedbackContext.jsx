import { useState, createContext } from "react";

// create a context object
const FeedbackContext = createContext();

// export a context provider (functions) to wrap all the jsx that will recive data from the context provider
export const FeedbackProvider = ({ children }) => {
  // create context data
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Hello Context",
      rating: 8,
    },
    {
      id: 2,
      text: "Hello Context",
      rating: 1,
    },
    {
      id: 3,
      text: "Hello Context",
      rating: 10,
    },
  ]);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  //   delete feedback function
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure about deleting this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //   add feedback function
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  // used to edit an item
  const editItem = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  //   update feedback item
  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedFeedback } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        editFeedback,
        addFeedback,
        editItem,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
