import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Message, Dimmer, Loader, Image, Card, List } from 'semantic-ui-react';

import { createComment, readPost } from '../../actions/post';

// import Comments from './Comments';
import mediaParagraph from '../../assets/img/media-paragraph.png';
import matthew from '../../assets/img/matthew.png';

export default class Content extends Component {

  handleSubmit = (value) => {
    const id  = this.props.id;
    const params = `/${id}?_expand=user&_embed=comments&_order=desc`;

    this.props.dispatch(createComment(value))
    .then((result) => {
      alert(result.value.statusText);
      this.props.dispatch(readPost(params));
    }).catch((error) => {
      if (error.response) {
        alert(error.response.request._response); 
      } else {
        alert(error.message);
      }

      return false;
    })
  }

  render() {
    const { post, isError, isLoading } = this.props.postReducer;
  
    return(
      <Container>
        <Segment>
        {isError? (
            <Message negative>
              <Message.Header>Oops.. Something Wrong!</Message.Header>
              <p>Please Try Again Reload Page</p>
            </Message>
          ): isLoading? (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted content='Loading' />
              </Dimmer>

              <Image src={mediaParagraph} />
            </Segment>
          ):(
            <div>
              <Card.Group>
                <Card fluid color='teal'>
                  <Card.Content>
                    <List relaxed='very'>
                      <List.Item>
                        <Image circular size='mini' as={Link} to={`/profile/${post.userId}`} src={matthew} />
                        <List.Content>
                          <List.Header as={Link} to={`/profile/${post.userId}`}>{post.userId}</List.Header>
                          <List.Description>{post.userId}</List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Card.Content>
                  <Card.Content extra>
                    <Card.Header>{post.title}</Card.Header>
                    {/* <Card.Meta>{post.comments.length} comments</Card.Meta> */}
                    <Card.Description>{post.body}</Card.Description>
                  </Card.Content>
                  {/* <Comments onSubmit={this.handleSubmit} comments={post.comments} user={post.user}/> */}
                </Card>
              </Card.Group>
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}


// export default Content;