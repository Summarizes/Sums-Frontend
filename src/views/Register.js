import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";
import { register } from "../services/account.service";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append("firstname",e.target.firstname.value)
    formData.append("lastname",e.target.lastname.value)
    formData.append("username",e.target.username.value)
    formData.append("password",e.target.password.value)
    formData.append("profile_picture",null)

    register(formData)
    .then(response => {
      Swal.fire(
        'Success',
        'Your account has been created.',
        'success'
      )
    })
    .catch(err => {
      console.log(err)
      Swal.fire(
        'Error',
        'Something went wrong!',
        'error'
      )
    })
  }

  return (
    <div className="pt-24 d-flex justify-center items-center xs:h-0 2xl:h-screen bg-color">
      <Form onSubmit={e => handleSubmit(e)}>
        <div className="box-com rounded-3xl pt-28 px-4 pb-10">
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
              <FormGroup>
                <Label className="flex mt-2.5">Firstname*</Label>
                <Input id="firstname" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="flex mt-2.5">Lastname*</Label>
                <Input id="lastname" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="flex mt-2.5">Username*</Label>
                <Input id="username" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="flex mt-2.5">Password*</Label>
                <Input id="password" type="password" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="flex mt-2.5">Confirm Password*</Label>
                <Input id="password" type="password" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-10">
            <Col></Col>
            <Col>
              <Row>
                <Col></Col>
                <Col>
                  <Button type="submit" className="w-full lable-col but-2">Register</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default Register;
