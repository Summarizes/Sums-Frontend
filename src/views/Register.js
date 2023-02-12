import React from "react";
import { Button, Col, Input, Label, Row } from "reactstrap";

const Register = () => {
  return (
    <div className="d-flex justify-center items-center h-screen bg-color">
      <div className="my-auto w-50 box-com rounded-3xl pt-28 px-4 pb-10">
        <Row>
          <Col>
            <div className="lable">
              <h4 className="text-white flex items-center">Register</h4>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Label className="flex mt-2.5">Firstname*</Label>
            <Input />
          </Col>
          <Col>
            <Label className="flex mt-2.5">Lastname*</Label>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="flex mt-2.5">Username*</Label>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="flex mt-2.5">Password*</Label>
            <Input type="password" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="flex mt-2.5">Confirm Password*</Label>
            <Input type="password" />
          </Col>
        </Row>
        <Row className="pt-10">
          <Col></Col>
          <Col>
            <Row>
              <Col></Col>
              <Col>
                <Button className="w-full lable-col but-2">Register</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
