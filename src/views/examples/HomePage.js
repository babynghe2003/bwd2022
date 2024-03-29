
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
// core components
import Header from "components/Headers/Header.js";
import questions from "../../datas/questions.js";
import users from "../../datas/users.js";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import posts from "../../datas/posts.js";

const HomePage = (props) => {
  const [usersState, setUsers] = useState(users);
  const [questionsState, setQuestions] = useState(questions);

  const [searchTexts, setSearchTexts] = useState("")
  const [hide,setHide] = useState([])
  
  function handleSearch(event) {
    setSearchTexts(event.target.value.toLowerCase().trim());
    console.log(searchTexts);
  }

  const sortBy = (question) => {
    switch (question) {
      case "vote":
        setQuestions([...questionsState].sort((a,b)=>b.vote-a.vote))
        console.log(questionsState)
        break;
      case "answer":
        setQuestions([...questionsState].sort((a,b)=>b.answers.length-a.answers.length))
        console.log(questionsState)
        break;
      default:
        break;
    }
  }

  const handlerHide = (e,id) => {
    e.preventDefault();
    console.log(id);
    
    console.log(hide);
    if (window.confirm('Are you sure you wantn to hide this question?')) {
      setHide([...hide, id])
    } 
  }

  const handlerReport = (e,id) => {
    e.preventDefault();
    console.log(id);
    
    console.log(hide);
    if (window.confirm('Are you sure you wantn to report this question?')) {
      setHide([...hide, id])
    } 
  }

  const location = useLocation();
  const getUserName = (userID) => {
    const user = usersState.find((user) => user.id === userID);
    return user.username;
  }
  const userCurrent = usersState.find(user => user.id == new URLSearchParams(location.search).get('id'));
  const tagCurrent = new URLSearchParams(location.search).get('tags');
  console.log(userCurrent);
  console.log(tagCurrent);

  const getTagsName = (question) => {
    return question.tags.map((tag, index) => {
      return (
        <Link to={'/admin/index?tags=' + tag} key={index} className="ml-1"><Badge color="primary" pill key={index}>
          #{tag}
        </Badge></Link>
      )
    })
  }
  const getQuestion = (questions) => {

    var questionTemp = questions.filter((question) => ((userCurrent && userCurrent.id === question.userID || tagCurrent && question.tags.find(tag => tag === tagCurrent) || (!userCurrent && !tagCurrent)) && !hide.includes(question.id)));
    if(searchTexts.length>0)
    questionTemp = questions.filter((question) => ((question.title.toLowerCase().includes(searchTexts))  && !hide.includes(question.id)))
    return questionTemp.map((question, index) => {
      return (
          <tr key={index}> 
            <td width='6%' className="">

              {question.vote > 0 ?  
                <i className="fas fa-arrow-up text-success mr-3 ml-4" /> :
                <i className="fas fa-arrow-down text-danger mr-3 ml-4" />}

              {question.vote > 0 ? <span>+</span> : <span></span>}
              {question.vote}
              
            </td>
            <th scope="row">
              <Media className="align-items-center">
                <Media>
                  <span className="mb-0 text-sm" style={{ textOverflow: 'hidden' }}>
                    <Link to={`/admin/question?questionID=${question.id}`} style={{ fontSize: '1.1rem' }} className="text-capitalize">
                      {question.title}
                    </Link>
                  </span>
                </Media>
              </Media>
              <div>
                <div className="float-left mt-3">
                {getTagsName(question)}
                </div>
                <div className="float-right mt-3" width="">
                <Link class="text-info">@{getUserName(question.userID)}</Link> <span className="text-muted" to="/">at 10/2/2022</span>
                </div>
              </div>

            </th>
           

            <td className="text-right">
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-icon-only text-light"
                  href="#pablo"
                  role="button"
                  size="sm"
                  color=""
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => handlerReport(e,question.id)}
                  >
                    Report
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => handlerHide(e,question.id)}
                  >
                    Hide
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
          
          
      );

    });
  }
  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
  };

  const getPosts = (posts) => {
    return posts.map((post, index) => {
      return (
        <div key={index} className="flex-row py-1" style={{borderBottom: '1px solid rgba(0,0,0,0.1'}}>
          <div className="float-left mr-3">
            <img
              alt="..."
              src={
                post.imgSrc
              }
              width="150px"
              height="150px"
            />

          </div>
          <div className="">
            <span className="mb-0 text-lg" style={{ fontWeight: 600 }}>
              <Link to={`/admin/postPage?postPageID=${post.id}`} >
                {post.title}
              </Link>
            </span>

            <p>
              <span className="text-muted" style={{ fontSize: '13px' }}>
                {post.createdAt.yyyymmdd()}
              </span>
            </p>
          </div>

        </div>

      )

    })
  };
  return (
    <>
      <Header />
      {/* Page content */}

      <Container className="mt--7" fluid>
        <Link to="/admin/post" className="btn btn-secondary my-3">Ask a question</Link>
        <Row>
          <Col className="mb-5 mb-xl-0" xl='8'>
            <Card className="shadow pb-3">
              <CardHeader className="border-0">
                <h1 className="mb-0 float-left">Top Questions</h1>
                <ButtonGroup className="float-right">
                  <Button className="text-primary" onClick={(e) => sortBy("time")}>Lastest</Button>
                  <Button className="text-primary" onClick={(e) => sortBy("vote")}>Most voted</Button>
                  <Button className="text-primary" onClick={(e) => sortBy("answer")}>Most answered</Button>
                </ButtonGroup>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {getQuestion(questionsState)}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Search</h3>
              </CardHeader>
              <CardBody>
                <Form role="search">
                  <div className="input-group">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-search" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Search" type="text" name="search" onChange={handleSearch} />
                    </InputGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Card className="shadow mt-4">
              <CardHeader className="border-0">
                <h3 className="mb-0">Lastest Post</h3>
              </CardHeader>
              <CardBody className="row">
                {getPosts(posts)}
              </CardBody>
            </Card>

          </Col>
        </Row>
        {/* Dark table */}

      </Container>
    </>
  );
};

export default HomePage;
