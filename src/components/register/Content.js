import React from 'react'
import { Button, Form, Card } from 'semantic-ui-react'

const Register = () => (
  <Card fluid>
    <Card.Content>
      <Card.Header>Register</Card.Header>
    </Card.Content>
    <Card.Content>
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input label='First name' placeholder='First name' />
          <Form.Input label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input label='Address' placeholder='Address' />
          <Form.Input label='Phone' placeholder='Phone' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>Submit</Button>
      </Form>
    </Card.Content>
  </Card>
);

export default Register;