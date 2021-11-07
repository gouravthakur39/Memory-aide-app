import React, { Fragment, useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

import "./AddTopic.css";

//TODO: Add topic corresponding to the subject

const AddTopic = (props) => {
  const { subjectName } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topics, setTopics] = useState([]);
  const [enteredTopic, setEnteredTopic] = useState("");

  const enteredTopicHandler = (e) => {
    setEnteredTopic(e.target.value);
  };

  const addTopicModalHandler = () => {
    setIsModalOpen((prevCheck) => !prevCheck);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const createTopicHandler = () => {
    const obj = { subject: subjectName, topic: enteredTopic.toLocaleLowerCase() };
    enteredTopic !== "" && setTopics([...topics, obj]);
    setEnteredTopic('')
  }

  props.displayTopic(topics)

  useEffect(() => {
    console.log("topics : ", topics);
  }, [topics]);
  

  return (
    <Fragment>
      <div className="add-button-container">
        <div className="add-btn-text">
          <Button
            onClick={addTopicModalHandler}
            color="success"
            alt="Add topic"
            className="add-topic-button"
          >
            +
          </Button>
          <div className="add-topic-text-container">
            <h6 className="add-topic-text">Add Topic</h6>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-header">
            Add a topic in {subjectName}
            <div className="close-modal-btn" onClick={closeModalHandler}>
              X
            </div>
          </div>
          <div className="modal-body">
            <Input
              placeholder="Enter topic name..."
              value={enteredTopic}
              onChange={enteredTopicHandler}
              autoFocus={true}
            />
          </div>
          <Button color="success" className="create-topic-modal-btn" onClick={createTopicHandler}>
            Create topic
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default AddTopic;
