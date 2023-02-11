import React from "react";
import { Button, Col, Input, Row } from "reactstrap";

const Login = () => {
  return (
    <div className="d-flex justify-center items-center h-screen bg-color">
      <div className="my-auto w-50 box-com rounded-3xl pt-28 px-4 pb-10">
        <Row>
          <Col>
            <div className="lable">
              <h4 className="text-white flex items-center">Login</h4>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <h5>Username</h5>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <h5>Password</h5>
          </Col>
          <Col>
            <Input type="password" />
          </Col>
        </Row>
        <Row className="pt-10">
          <Col></Col>
          <Col>
            <Row>
              <Col className="justify-end flex items-end">
                <a href="/register">Register Now</a>
              </Col>
              <Col>
                <Button className="w-full lable-col ">Login</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
