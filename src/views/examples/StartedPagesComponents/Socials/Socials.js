import React from 'react'
import './socials.css'
import questions from 'datas/questions'
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
  } from "reactstrap";

export default function Socials() {

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
                     
                          <a to={'/admin/index?tags='+tag}> <button
                            className="btn-icon-clipboard"
                            id="tooltip982655500"
                            type="button"
                          >
                            <div>
                              <span>#{tag}</span> </div>
                          </button>
                          </a>
                       
            </Col>
      );
    });
  }
  return (
    <div className='socials'>
        <div className='wrapperSocials'>
            <div className='contentSocials'>
                <h1 className='headingTitleSocials'>Lots of topics for everyone to discuss</h1>
                <div className='socialsBrandsContainer'>
                    <Row className="icon-examples">
                    {getTags(questionsTags)}
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}
