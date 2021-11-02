import React, { Fragment, useState } from "react";
import "./CreateNewSubject.css";
import DisplaySubject from "./DisplaySubject";
import NoSubject from "./NoSubject";
import {
  Button,
  Col,
  Collapse,
  Form,
  FormGroup,
  Input,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import Content from "./Content";

const CreateNewSubject = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [subject, setSubject] = useState([]);
  const [subjectClickedName, setSubjectClickedName] = useState("");

  const handleChange = (e) => {
    setEnteredName(e.target.value);
  };

  const addNewSubject = () => {
    enteredName !== "" &&
      subject.length < 10 &&
      setSubject((subject) => [enteredName.slice(0, 30), ...subject]);
    setEnteredName("");
  };

  const subjectClickedHandler = (subjectParam) => {
    const subjectClickedName = subject[subjectParam];
    setSubjectClickedName(subjectClickedName);
  };

  return (
    <Fragment>
      <div>
        <Navbar className="" color="dark" expand="md" dark fixed="top">
          <NavbarBrand href="/">Memory Aide</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/">More</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Row className="sidebar">
        <Col className="sidebar-inner sidebar-decorator-img" xs="4">
          {/* <img
            className=""
            alt="decorator"
            src="/assets/decorator.png"
          ></img> */}
          <Form>
            <FormGroup className="mt-5 p-4">
              <div className="sidebar-form">
                <Input
                  type="text"
                  placeholder="Add new subject"
                  onChange={handleChange}
                  value={enteredName}
                  className="mb-4 mt-5"
                />
                <Button
                  color="primary"
                  onClick={addNewSubject}
                  className="button_create border "
                >
                  + Create new subject
                </Button>
              </div>
            </FormGroup>
          </Form>

          <div>
            {subject.length === 0 && <NoSubject />}
            {subject.length !== 0 && (
              <DisplaySubject
                subject={subject}
                subjectClickedHandler={subjectClickedHandler}
              />
            )}
          </div>
        </Col>
        <Content subjectName={subjectClickedName} />
      </Row>
    </Fragment>
  );
};

export default CreateNewSubject;
