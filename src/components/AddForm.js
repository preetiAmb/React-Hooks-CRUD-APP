import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";

import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({name:"", email:"", address:"", phone:""});

  const onInputChange = (e) => {
    setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
  }

  const {name, email, phone, address} = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name *" value={name} name="name" onChange= { (e) => onInputChange(e)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email *" value={email} name="email" onChange= { (e) => onInputChange(e)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" value={address} name="address" onChange= { (e) => onInputChange(e)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="phone" value={phone} name="phone" onChange= { (e) => onInputChange(e)} />
      </Form.Group>
      <br />
      <Button variant="success" type="submit">
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
