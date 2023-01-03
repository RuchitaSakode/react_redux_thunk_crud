import React, { useState } from "react";
import CustomModal from "./commonComponents/CustomModal";
import { Dispatch } from "react-redux";

export default function AddUserForm() {
  const handleChange = () => {};
  return (
    <CustomModal>
      <div className="row">
        <div className="col-md-8">
          <Form className="form-style">
            <Form.Group>
              <Form.Label className="form-label-style">First Name</Form.Label>
              <Form.Control
                className="form-control-style"
                type="text"
                onChange={(e) => setField("firstName", e.target.value)}
                isInvalid={!!errors.firstName} // To prevent
                placeholder="First Name"
              ></Form.Control>

              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label-style">Last Name</Form.Label>
              <Form.Control
                className="form-control-style"
                type="text"
                onChange={(e) => setField("lastName", e.target.value)}
                isInvalid={!!errors.lastName}
                placeholder="Last Name"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label-style">Email</Form.Label>
              <Form.Control
                className="form-control-style"
                type="text"
                onChange={(e) => setField("email", e.target.value)}
                placeholder="Email"
                isInvalid={!!errors.email}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="btn-styling"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Add
            </Button>
          </Form>
        </div>
      </div>
    </CustomModal>
  );
}
