import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createPost, filterPosts } from '../actions/home';

import Page from '../components/Page';
import Post from '../components/home/Post';
import paragraph from '../assets/img/paragraph.png';

class Home extends Component {

  componentWillMount() {
    const params = `?_expand=user&_embed=comments&_order=desc`;

    this.props.filterPosts(params);
  }

  handleSubmit = (value) => {
    this.props.createPost(value)
    .then((result) => {
      const params = `?_expand=user&_embed=comments&_order=desc`;
      const id = result.value.data.id;
      const title = result.value.data.title;

      alert(`Create Post id: ${id} title: ${title}`);
      
      this.props.filterPosts(params);
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
    
    return (
      <Page id="home" title="Home" description="This is home page">
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
      </Page>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    homeReducer: state.homeReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   const params = `?_expand=user&_embed=comments&_order=desc`;

//   return {
//     actions: dispatch(filterPosts(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createPost, filterPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);