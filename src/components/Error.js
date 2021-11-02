import React from "react";
import { Alert } from "reactstrap";
import './Error.css'

const Error = (props) => {
  const { error } = props;
  return (
    <div>
      <Alert color="danger">{error}</Alert>
    </div>
  );
};

export default Error;
