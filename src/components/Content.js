import React, { Fragment, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import AddQuestion from "./AddQuestion";
import AddTopic from "./AddTopic";
import "./Content.css";

const Content = (props) => {
  const { subjectName } = props;
  const [displayTopic, setDisplayTopic] = useState([]);
  console.log('display topic :',displayTopic)

  let displayTopicAccordingtoSubject = displayTopic.filter(
    (item) => item.subject === subjectName
  );

  return (
    <Fragment>
      <Col className="content  mt-5" xs="8">
        <div className="content-header">
          <h4 className="content-text">{subjectName.toUpperCase()}</h4>
          <div className="add-question-topic-container">
            <AddQuestion />
            <AddTopic
              subjectName={subjectName}
              displayTopic={(displayTopic) => setDisplayTopic(displayTopic)}
            />
          </div>
        </div>
        <Row className="topic-lists-and-control">
          <div className="topic-dropdown-container">
            {displayTopic.length !== 0 && <select name="topic" id="topic" className="topic-dropdown">
              <option value="" selected>
                -- Choose a topic to practice --
              </option>
              {displayTopicAccordingtoSubject.map((item, index) => {
              return (
                  <option key={index} value={item.topic}>
                    {item.topic}
                  </option>
                );
              })}
            </select>}
          </div>
          <div className="prev-next-btn">
            <Button>Prev ⏮️</Button>
            <Button>Next ⏭️</Button>
          </div>
        </Row>
      </Col>
    </Fragment>
  );
};

export default Content;
