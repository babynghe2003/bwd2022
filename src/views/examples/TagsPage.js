/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Create by WTF (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Create by WTF

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import questions from "../../datas/questions.js";

const TagsPage = () => {
  const [copiedText, setCopiedText] = useState();
  const questionsTags = [];
  questions.forEach((question) => {
    question.tags.forEach((tag) => {
      if (!questionsTags.includes(tag)) {
        questionsTags.push(tag);
      }
    });
  })
  const getTags = (tags) => {
    return tags.map((tag, index) => {
      return (
        <Col lg="3" md="6" key={index}>
                      <button
                        className="btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div>
                          <span>#{tag}</span>
                        </div>
                      </button>
            </Col>
      );
    });
  }
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">TagsPage</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  {getTags(questionsTags)}
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default TagsPage;
