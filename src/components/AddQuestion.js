import React from "react";
import { Button } from "reactstrap";
import "./AddQuestion.css";

const AddQuestion = (props) => {
  return (
    <div className="add-button-container">
      <div className="add-btn-text">
        <Button
          color="success"
          alt="Add question"
          className="add-question-button"
        >
          +
        </Button>
        <div className="add-question-text-container">
          <h6 className="add-question-text">Add Questions</h6>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
