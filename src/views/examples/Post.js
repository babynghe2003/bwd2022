// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Label,
  } from "reactstrap";
  import { useState } from "react";
  // core components
  import Header from "components/Headers/Header.js";
  import questions from "../../datas/questions.js";
  
  import {Link} from "react-router-dom";
  
  const Post = () => {
    const [tags, setTags] = useState([]);
    const questionsTags = [];
    questions.forEach((question) => {
      question.tags.forEach((tag) => {
        if (!questionsTags.includes(tag)) {
          questionsTags.push(tag);
        }
      });
    })
    const handleAddTag = (tag) => {
        if (!tags.includes(tag)) {
            setTags([...tags, tag]);
        }
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
                        <Input
                            className="form-control-alternative"
                            placeholder="Tags"
                            type="select"
                            onChange={(e) => handleAddTag(e.target.value)}
                        >
                        <option value="">Select a tag</option>
                        {questionsTags.map((tag) => tags.includes(tag) ? "" : (
                            <option key={tag} value={tag}>
                            {tag}
                            </option>
                        ))}
                        </Input>
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
  