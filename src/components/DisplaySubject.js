import React, { useState, useEffect } from "react";
import "./DisplaySubject.css";
import { Card, CardBody, CardTitle } from "reactstrap";

const COLORS = ["#752BFE"];

const DisplaySubject = (props) => {
  const { subject } = props;
  const [randomColor, setRandomColor] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(0);

  //TODO: selected subject

  props.subjectClickedHandler(selectedSubject);

  const generateRandomColor = (colors) => {
    let randColorIndex, randColor;
    randColorIndex = Math.floor(Math.random() * colors.length);
    randColor = colors[randColorIndex];
    setRandomColor(randColor);
    return randColor;
  };

  // use this code to generate new color on every re render
  // const [randomColor, setRandomColor] = useState(generateRandomColor(COLORS));
  useEffect(() => {
    generateRandomColor(COLORS);
  }, []);

  return (
    <div>
      <ul className="subject_list">
        {subject.map((item, index) => {
          return (
            <li>
              <Card
                onClick={(item) => setSelectedSubject(index)}
                className="subject_item"
                style={{ backgroundColor: randomColor }}
                key={index}
              >
                <img
                  className="decorator-img"
                  alt="decorator"
                  src="/assets/decorator.png"
                ></img>
                <CardBody className="subject-text">
                  <CardTitle>{item.toUpperCase()}</CardTitle>
                </CardBody>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplaySubject;
