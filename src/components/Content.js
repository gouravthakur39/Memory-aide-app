import React, { Fragment } from "react";
import { Col } from "reactstrap";
import AddQuestion from "./AddQuestion";
import "./Content.css";

const Content = (props) => {
  const { subjectName } = props;
  return (
    <Fragment>
      <Col className="content  mt-5" xs="8">
        <div className="content-header">
          <h4 className="content-text">{subjectName.toUpperCase()}</h4>
          <AddQuestion />
        </div>
      </Col>
    </Fragment>
  );
};

export default Content;
