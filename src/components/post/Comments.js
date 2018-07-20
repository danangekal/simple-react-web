import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Header, Form, Button, Comment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';

import inputField from '../../components/inputField';
import matthew from '../../assets/img/matthew.png';

lang._set('en', en);

const validate = values => {
  const rules = {
      body: 'required',
  };

  const validator = new Validator(values, rules);
  if(validator.fails()){
      return validator.errors.all();
  }
}

class Comments extends Component {

  render() {
    const { comments, user, handleSubmit } = this.props;

    return(
      <Card.Content extra>
        <Comment.Group minimal>
          <Header as='h3' dividing>
            Comments
          </Header>
          {comments.map((item)=> (
              <Comment key={item.id}>
                <Comment.Avatar as={Link} to={`/profile/${user.id}`} src={matthew} />
                <Comment.Content>
                  <Comment.Author>{item.name}</Comment.Author>
                  <Comment.Metadata>
                    <span>{user.name} ({item.email})</span>
                  </Comment.Metadata>
                  <Comment.Text>{item.body}</Comment.Text>
                </Comment.Content>
              </Comment>
          ))}
          <Form onSubmit={ handleSubmit } reply>
              <Field
                name='body'
                label='Body'
                type='text'
                placeholder='Body'
                component={inputField}
              />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
        </Card.Content>
    )
  }
}

const ReduxForm = reduxForm({
  form: 'post',
  validate,
  initialValues: {
    name: 'tes',
    body: '',
    postId: 1,
    email: 'Sincere@april.biz'
  }
})(Comments)

export default ReduxForm;