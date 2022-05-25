import React from "react";
import { useLocation, Link } from "react-router-dom";

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  FormGroup,
  Form,
  Input,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import questions from "../../datas/questions.js";
import users from "../../datas/users.js";

const QuestionPage = () => {
  const location = useLocation();
  const questionCr = questions.find(
    (question) =>
      question.id == new URLSearchParams(location.search).get("questionID")
  );
  const getTagsName = (question) => {
    return question.tags.map((tag, index) => {
      return (
        <Link to={'/admin/index?tags='+tag} key={index} className="ml-1"><Badge color="primary" pill key={index}>
          #{tag}
        </Badge></Link>
        
      );
    });
  };
  const getUserName = (userID) => {
    const user = users.find((user) => user.id == userID);
    return user.username;
  };
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0 form-inline">
                <div className="btn-group-vertical align-items-center">
                  <i class="fas fa-caret-up" style={{ fontSize: "40px" }}></i>
                  {questionCr.vote}
                  <i class="fas fa-caret-down" style={{ fontSize: "40px" }}></i>
                </div>
                <h2 className="mx-4">{questionCr.title}</h2>
              </CardHeader>
              <CardBody className="mt--4">
                <Row>
                  <span className="mx-4">{questionCr.description}</span>
                  <br />
                </Row>
                <Row className="flex-row justify-content-between">
                  <div className="ml-3">{getTagsName(questionCr)}</div>
                  <a className="mr-5 text-user-info">
                    @{getUserName(questionCr.userID)}
                  </a>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h3 className="mt-4">{questionCr.answers.length} Answers</h3>

        <Row className="mt-4"></Row>
        <Card className="shadow">
          {questionCr.answers.map((answer, index) => {
            return (
              <>
                {index > 0 ? <hr className="my-1 mx-4" /> : null}
                <div className="mt-3 mb-5 mb-xl-0">
                  <CardHeader className="border-0 form-inline">
                    <div className="btn-group-vertical align-items-center">
                      <i
                        class="fas fa-caret-up"
                        style={{ fontSize: "40px" }}
                      ></i>
                      <span>{answer.vote}</span>
                      <i
                        class="fas fa-caret-down"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <span className="mx-4">{answer.content}</span>
                  </CardHeader>
                  <CardBody className="mt--5">
                    <Row className="justify-content-end">
                      <a className="mr-5 text-user-info">
                        @{getUserName(answer.userID)}
                      </a>
                    </Row>
                  </CardBody>
                </div>
              </>
            );
          })}
        </Card>

        <h3 className="mt-4">Your Answer</h3>

        <Row className="mt-3">
          <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="shadow">
            <CardBody>
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  placeholder="A few words about your opinion ..."
                  rows="4"
                  type="textarea"
                />
              </FormGroup>
              <a className="btn btn-primary">Post your answer</a>
            </CardBody>
          </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default QuestionPage;
