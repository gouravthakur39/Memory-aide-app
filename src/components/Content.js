import React, { Fragment, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import AddQuestion from "./AddQuestion";
import AddTopic from "./AddTopic";
import "./Content.css";

const Content = (props) => {
  const { subjectName } = props;
  const [displayTopic, setDisplayTopic] = useState([]);
  console.log("display topic :", displayTopic);

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
            {displayTopic.length !== 0 && (
              <select name="topic" id="topic" className="topic-dropdown">
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
              </select>
            )}
          </div>
          <div className="prev-next-btn">
            <Button>Prev ⏮️</Button>
            <Button>Next ⏭️</Button>
          </div>
        </Row>
        <Row className="question-container">
          <strong>What is Lorem Ipsum?</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). 
            </p>
        </Row>
        <Row className="settings-footer">
          <div className="options">
            <p>⚙️ Settings</p>
            <p>📈 Insights</p>
            <p>💡 Solution</p>
            <p>🤝 Discuss</p>
            <p>🐞 Report a bug</p>
            <p>✍️ Request a feature</p>
          </div>
        </Row>
      </Col>
    </Fragment>
  );
};

export default Content;
