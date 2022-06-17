import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Label,
} from "reactstrap";
import { useState, useEffect } from "react";
import { create } from "../api-post/api-post"
// core components
import Header from "components/Headers/Header.js";
import questions from "../../datas/questions.js";
import auth from "../../api-client/auth-helper"
import axios from "axios"

// import {Link} from "react-router-dom";

const Post = () => {
  // states
  const [values, setValues] = useState({
      title: '', 
      content: ''
    })

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }

  const jwt = auth.isAuthenticated()
    
  const [tags, setTags] = useState([]);
  const [questionsTags,setquesTags] = useState([]);
  questions.forEach((question) => {
    question.tags.forEach((tag) => {
      if (!questionsTags.includes(tag)) {
        setquesTags([...questionsTags, tag]);
      }
    });
  })
  const handleAddTag = (tag) => {
    if (tag !== 'Select-tag' && tag !== '')
          setTags([...tags, tag]);
  }
  const handleRemoveTag = (tag) => {
      setTags(tags.filter((t) => t !== tag));
  }

  const user_id = auth.isAuthenticated().user
  async function btnSubmit() {
    let post = {
        title: values.title || undefined,
        content: values.content || undefined,
        tags: tags || undefined
      } 
    let response = await axios.post(`http://localhost:3001/api/question/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwt.token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        'Access-Control-Allow-Headers': '*'
      },
      data: post
    }).then((data) => {
      alert("You have successfully posted a question!")
      return data
    })
    
  }
  console.log(jwt.token)

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
                <h3 className="mb-0">Ask a question</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                <FormGroup className="col-12">
                     <Label>Title</Label>
                    <Input
                      className="form-control-alternative"
                      placeholder="Title"
                      rows="1"
                      type="textarea"
                      onChange={handleChange('title')}
                    />                        
                  </FormGroup>
                <FormGroup className="col-12">
                     <Label>Question</Label>
                    <Input
                      className="form-control-alternative"
                      placeholder="Question"
                      rows="4"
                      type="textarea"
                      onChange={handleChange('content')}
                    />                        
                  </FormGroup>
                  <FormGroup className="col-12">
                      <select className="custom-select"
                          
                          onClick={(e) => handleAddTag(e.target.value)}
                          defaultValue="Select-tag"
                          >
                          
                          <option className="was-validated" value="Select-tag" hidden>Select a tag</option>
                          {questionsTags.map((tag) => tags.includes(tag) ? "" : (
                            <option className="custom-select" key={tag} value={tag}>
                            {tag}
                            </option>
                           ))}
                          
                      </select>
                  </FormGroup>
                  <FormGroup className="col-12 border border-secondary">
                      {tags.map((tag) => (
                              <Badge style={{cursor:'pointer'}} className="mr-1" color="primary" pill onClick={(e) => handleRemoveTag(tag)}>
                                  #{tag}
                              </Badge>
                      ))}
                  </FormGroup> 
                  <FormGroup className="col-12 d-flex justify-content-end">
                      <Button
                          className="btn-icon btn-2"
                          color="default"
                          onClick={btnSubmit}
                      >
                      Post question
                      </Button>
                  </FormGroup>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Post;