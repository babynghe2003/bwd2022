
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import users from "../../datas/users";
import {useState} from "react"
import { Redirect, useHistory } from "react-router-dom";
import { signin } from "../../api-client/api-auth"
import auth from "../../api-client/auth-helper"

const Login = () => {
  // States
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  
  const handleChange = name => event => {
    console.log(name + " " + event)
    setValues({...values, [name]: event.target.value})
  }

  const [error, setError] = useState("");
  let history = useHistory();

  const checkLogin = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }
    console.log(user)
    signin(user).then((data) => {
      auth.authenticate(data, () => {
        setValues({...values})
        try {
          if( data.user.result) {
          window.location.href = "/admin/index"
          } else { 
            alert("Login failed")
            console.log("err")
          }
        } catch (error) {
          alert("Login failed")
          
        }
        
        // history.push("/admin/icons");
      })
    })
  }

  return (
    <>
      <Col lg="4" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    onChange={handleChange('email')}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    onChange={handleChange('password')}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <span className="btn-inner--text">{error}</span>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={checkLogin}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        
      </Col>
    </>
  );
};

export default Login;
