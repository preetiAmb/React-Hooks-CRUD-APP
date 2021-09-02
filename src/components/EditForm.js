import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";

import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({theEmployee}) => {

  const id = theEmployee.id;

  const [name, setName] = useState(theEmployee.name)
  const [email, setEmail] = useState(theEmployee.email)
  const [address, setAddress] = useState(theEmployee.address)
  const [phone, setPhone] = useState(theEmployee.phone)

  const { updateEmployee } = useContext(EmployeeContext);

  const updatedEmployee = {id, name, email, address, phone};

  const handleSubmit = (e) => {
      e.preventDefault();
      updateEmployee(id, updatedEmployee);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name *" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email *" value={email}name="email" onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" value={address} name="address" onChange={(e) => setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="phone" value={phone} name="phone" onChange={(e) => setPhone(e.target.value)}/>
      </Form.Group>
      <br />
      <Button variant="success" type="submit">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
