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
import posts from "../../datas/posts.js";
import users from "../../datas/users.js";

const Post = () => {
  const location = useLocation();
  const postCr = posts.find(
    (question) =>
      question.id == new URLSearchParams(location.search).get("postID")
  );
  const getUserName = (userID) => {
    const user = users.find((user) => user.id == userID);
    return user.username;
  };
  function order(a, b) {
    return a.vote > b.vote ? -1 : 1;
  }
  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
  };
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              
              <CardHeader className="border-0 form-inline">
                <Row>
                  <Col xl="1"></Col>
                  <Col xl="8">
                  <h1 style={{ fontSize: "40px" }} className="text-wrap ml-5 mt-5">{postCr.title}</h1>

                  </Col>
                </Row>
                
              </CardHeader>
              <CardBody className="mt--4">
                  
                  <Row className="mx-5">
                    <Col xl="1"></Col>
                    <Col xl="8" className="text-dark">
                      <div className="text-muted my-3" style={{ fontSize: '20px' }}>
                      {postCr.createdAt.yyyymmdd()}
                      </div> 
                      <div>
                        <postCr.content />
                      </div>
                      <div className="text-right my-3">
                        <a className="mr-5 mt-5 text text-user-info">
                          @{getUserName(postCr.userID)}
                        </a>
                      </div>
                      
                    </Col>
                    <Col xl="3"></Col>
                  
                </Row>
                <Row className="flex-row justify-content-between">
                  
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h3 className="mt-4">{postCr.answers.length} Answers</h3>

        <Row className="mt-4"></Row>
        <Card className="shadow">
          {
            postCr.answers.sort(order).map((answer, index) => {
            return (
               
                <div className="mt-3 mb-5 mb-xl-0" key={index} style={answer.vote<0?{opacity:0.5}:null}> 
                {index > 0 ? <hr className="my-1 mx-4" /> : null}
                  <CardHeader className="border-0 form-inline" >
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

export default Post;
