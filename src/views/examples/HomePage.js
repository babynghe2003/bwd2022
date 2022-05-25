
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
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import questions from "../../datas/questions.js";
import users from "../../datas/users.js";
import {useLocation, Link } from "react-router-dom";

const HomePage = (props) => {
  const location = useLocation();
  const getUserName = (userID) => {
    const user = users.find((user) => user.id === userID);
    return user.username;
  }
  const userCurrent = users.find(user => user.id == new URLSearchParams(location.search).get('id'));
  const tagCurrent = new URLSearchParams(location.search).get('tags');
  var pageCurrent = Number.parseInt(new URLSearchParams(location.search).get('page'));
  if(pageCurrent == null) pageCurrent = 1;
  const config = {
    max : 5,    
  };
  console.log(userCurrent);
  console.log(tagCurrent);

  const getTagsName = (question) => {
    return question.tags.map((tag, index) => {
      return (
        <Link to={'/admin/index?tags='+tag} key={index} className="ml-1"><Badge color="primary" pill key={index}>
          #{tag}
        </Badge></Link>
      )
    })
  }
  const getQuestion = (questions) => {

    return questions.map((question, index) => {
      if ( userCurrent && userCurrent.id === question.userID || tagCurrent && question.tags.find(tag => tag ==tagCurrent) || (!userCurrent && !tagCurrent))
      return (
        <tr key={index}>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          <Link to={`/admin/question?questionID=${question.id}`}>
                            {question.title}
                          </Link>
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
    
                        {question.vote > 1?
                          <i className="fas fa-arrow-up text-success mr-3" />:
                        <i className="fas fa-arrow-down text-danger mr-3" />}

                      {question.vote>0?<span>+</span>:<span></span>}
                      {question.vote}
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        {question.answers.length > 0 ? 
                          <i className="bg-success" /> :
                          <i className="bg-warning" />}
                        {question.answers.length}
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">@
                        {getUserName(question.userID)}
                      </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        {getTagsName(question)}
                      </div>
                    </td>
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
                            onClick={(e) => e.preventDefault()}
                          >
                            Report
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Hide
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
      );
      else return null;
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
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Questions</th>
                    <th scope="col">Vote</th>
                    <th scope="col">Number of reply</th>
                    <th scope="col">Author</th>
                    <th scope="col">Tags</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {getQuestion(questions)}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem>
                      <Link to={`/admin/index?page=${pageCurrent > 1 ? pageCurrent-1 : pageCurrent}`}>
                        <PaginationLink>
                          <i className="fas fa-angle-left" />                          
                          <span className="sr-only">Previous</span>                          
                        </PaginationLink>
                      </Link>
                    </PaginationItem>
                    <PaginationItem>
                      <Link to={`/admin/index?page=${pageCurrent < Math.ceil(questions.length / config.max) ? pageCurrent+1 : pageCurrent}`}>
                        <PaginationLink>
                          <i className="fas fa-angle-right" />                          
                          <span className="sr-only">Next</span>                        
                        </PaginationLink>
                      </Link>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
        
      </Container>
    </>
  );
};

export default HomePage;
