import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Message, Dimmer, Loader, Image, Card, List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { readPost, createComment } from '../actions/post';

// import Comments from '../components/post/Comments';
import mediaParagraph from '../assets/img/media-paragraph.png';
import matthew from '../assets/img/matthew.png';

class Post extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    const params = `/${id}?_expand=user&_embed=comments&_order=desc`;

    this.props.readPost(params);
  }

  handleSubmit = (value) => {
    const id = this.props.match.params.id;
    const params = `/${id}?_expand=user&_embed=comments&_order=desc`;

    this.props.createComment(value)
    .then((result) => {
      alert(result.value.statusText);
      this.props.readPost(params);
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

    return (
      <div>
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
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    postReducer: state.postReducer
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   const id = props.match.params.id;
//   const params = `/${id}?_expand=user&_embed=comments&_order=desc`;

//   return {
//     actions: dispatch(readPost(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ readPost, createComment }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);