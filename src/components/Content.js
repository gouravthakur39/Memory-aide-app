import React, { Fragment, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import AddQuestion from "./AddQuestion";
import AddTopic from "./AddTopic";
import "./Content.css";

const Content = (props) => {
  const { subjectName } = props;
  const [displayTopic, setDisplayTopic] = useState([]);
  console.log("display topic :", displayTopic);

  // Test question for checking markdown
  const markdown = 'Two ships are sailing in the sea on the two sides of a lighthouse. The **angles of elevation** of the top of the lighthouse observed from the ships are *30°* and *45°* respectively. If the lighthouse is *100m* high, find the distance between the two ships.';

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
          <ReactMarkdown children={markdown} escapeHtml={false} />
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
