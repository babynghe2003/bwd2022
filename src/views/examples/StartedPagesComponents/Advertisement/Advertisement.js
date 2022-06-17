import React from 'react'
import './advertisement.css'
import posts from 'datas/posts.js'
import { useLocation, Link } from "react-router-dom";

import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
  CardBody,
  Form,
  ButtonGroup,
  Button

} from "reactstrap";

export default function Advertisement() {
  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
  };
  return (
    <div className='advertisement'>
        
      <h1 className='headingTextAds row'>Our Blogs </h1>
        <Row className='flex-wrap'>
        {
          posts.map((post, index) => {
            return (
              <Col xs="12" md="3" key={index}>
                  <Card className='my-3' style={{height: '500px', maxHeight: '400px'}}> 
                    <CardHeader maxHeight="150px">
                      <h5 className='cardTitle text-truncate text-lg'>{post.title}</h5>
                    </CardHeader>
                    <CardBody>
                      <img src={post.imgSrc} className='card-img'/>
                    </CardBody> 
                    <CardFooter>
                      <p className='cardFooterText'> {post.createdAt.yyyymmdd()}</p>
                      <button className='btn btn-primary float-lg-right'><Link to={`/admin/postPage?postPageID=${post.id}`} style={{color:'white'}}>Read More</Link></button>
                    </CardFooter>
                  </Card>
              </Col>
            )
          })
            
        }
        </Row>
        
          

    </div>
  )
}
