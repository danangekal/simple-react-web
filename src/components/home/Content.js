import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';

import { createPost, filterPosts } from '../../actions/home';

import paragraph from '../../assets/img/paragraph.png';
import Post from './Post';

export default class Content extends Component {

  handleSubmit = (value) => {
    this.props.dispatch(createPost(value))
    .then((result) => {
      const params = `?_expand=user&_embed=comments&_order=desc`;
      const id = result.value.data.id;
      const title = result.value.data.title;

      alert(`Create Post id: ${id} title: ${title}`);
      
      this.props.dispatch(filterPosts(params));
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
    const { posts, isError, isLoading } = this.props.homeReducer;

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

              <Image src={paragraph} />
            </Segment>
          ):(
            <div>
              <Header as='h2' icon textAlign='center'>
                <Icon name='newspaper outline' circular />
                <Header.Content>News</Header.Content>
              </Header>
              <Divider inverted />
              <Post onSubmit={this.handleSubmit} posts={posts} />
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}