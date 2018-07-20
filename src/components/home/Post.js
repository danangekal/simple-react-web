import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, List, Button, Form, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';

import inputField from '../../components/inputField';
import matthew from '../../assets/img/matthew.png';

lang._set('en', en);

const validate = values => {
  const rules = {
      title: 'required',
      body: 'required'
  };

  const validator = new Validator(values, rules);
  if(validator.fails()){
      return validator.errors.all();
  }
}


class Post extends Component {
  
  render() {
    const { handleSubmit, posts } = this.props;

    return(      
      <div>
        <Card.Group>
          <Card fluid color='green'>
            <Card.Content>
              <Segment>
              <Form className='form-post' onSubmit={ handleSubmit } reply>
                <Field
                  name='title'
                  label='Title'
                  type='text'
                  placeholder='Title'
                  component={inputField}
                />
                <Field
                  name='body'
                  label='Body'
                  type='text'
                  placeholder='Body'
                  component={inputField}
                />
                <Button content='Send Post' type='submit' labelPosition='left' icon='edit' primary />
              </Form>
              </Segment>
            </Card.Content>
          </Card>
        </Card.Group>
        {posts.map((item)=> (
          <Card.Group key={item.id}>
            <Card fluid color='teal'>
              <Card.Content>
                <List relaxed='very'>
                  <List.Item>
                    <List.Content floated='right'>
                      <Button as={Link} to={`/posts/${item.id}`} color='green'>View</Button>
                    </List.Content>
                    <Image circular size='mini' as={Link} to={`/profile/${item.user.id}`} src={matthew} />
                    <List.Content>
                      <List.Header as={Link} to={`/profile/${item.user.id}`}>{item.user.name}</List.Header>
                      <List.Description>{item.user.email}</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Content>
              <Card.Content extra>
                <Card.Header as={Link} to={`/posts/${item.id}`}>{item.title}</Card.Header>
                <Card.Meta>{item.comments.length} comments</Card.Meta>
                <Card.Description>{item.body}</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        ))}
      </div>
    )
  }
}

const ReduxForm = reduxForm({
  form: 'post',
  validate,
  initialValues: {
    title: 'Coba',
    body: 'ini hanya percobaan tambah post',
    userId: 1
  }
})(Post)

export default ReduxForm;