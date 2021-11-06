import React, { Fragment } from "react";
import { Button, Col, Row } from "reactstrap";
import AddQuestion from "./AddQuestion";
import AddTopic from "./AddTopic";
import "./Content.css";

const Content = (props) => {
  const { subjectName } = props;
  return (
    <Fragment>
      <Col className="content  mt-5" xs="8">
        <div className="content-header">
          <h4 className="content-text">{subjectName.toUpperCase()}</h4>
          <div className="add-question-topic-container">
            <AddQuestion />
            <AddTopic subjectName={subjectName} />
          </div>
        </div>
        <Row className="topic-lists-and-control">
          <div className="topic-dropdown-container">
            <select name="topic" id="topic" className="topic-dropdown">
              <option value="">
                K-balltzaman algorithm for k classification
              </option>
              <option value="">Hashing and salting</option>
              <option value="">Linked lists</option>
            </select>
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
