// reactstrap components
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
  import { useState } from "react";
  // core components
  import Header from "components/Headers/Header.js";
  import questions from "../../datas/questions.js";
  
  // import {Link} from "react-router-dom";
  
  const Post = () => {
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
                      />                        
                    </FormGroup>
                  <FormGroup className="col-12">
                       <Label>Question</Label>
                      <Input
                        className="form-control-alternative"
                        placeholder="Question"
                        rows="4"
                        type="textarea"
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
                            type="button"
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
  