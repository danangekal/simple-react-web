import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Segment, Message, Dimmer, Loader, Image, Divider, Grid } from 'semantic-ui-react';

import { readProfile, allFriends, allAlbums, allPosts, deletePost } from '../actions/profile';

import Page from '../components/Page';
import User from '../components/profile/User';
import Friends from '../components/profile/Friends';
import Albums from '../components/profile/Albums';
import Posts from '../components/profile/Posts';

class Profile extends Component {
  
  componentWillMount() {
    const id = this.props.match.params.id;
    const params1 = `?userId=${id}&_embed=photos`;
    const params2 = `?userId=${id}&=user&_embed=comments&_order=desc`;
    const params3 = `?id_ne=${id}`;

    this.props.readProfile(id);
    this.props.allAlbums(params1);
    this.props.allPosts(params2);
    this.props.allFriends(params3);
  }

  deletePostClick = (idPost) => {
    alert(idPost);
    // const id  = this.props.id;
    // const params = `?userId=${id}&=user&_embed=comments&_order=desc`;

    // this.props.dispatch(deletePost(idPost))
    // .then((result) => {
    //   alert(result.value.statusText);
    //   this.props.dispatch(allPosts(params));
    // }).catch((error) => {
    //   if (error.response) {
    //     alert(error.response.request._response); 
    //   } else {
    //     alert(error.message);
    //   }

    //   return false;
    // })
  }

  render() {
    const { profile, albums, posts, friends, isError, isLoading } = this.props.profileReducer;

    return (
      <Page id="profile" title="Profile" description="This is profile page">
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

                <Image src={process.env.PUBLIC_URL + '/media-paragraph.png'} />
              </Segment>
            ):(
              <div>
                <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <User profile={profile} />
                      <Friends friends={friends} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Albums albums={albums} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider inverted />
                <Posts deletePostClick={this.deletePostClick} posts={posts} profile={profile} />
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
    profileReducer: state.profileReducer
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ 
    readProfile, allAlbums, 
    allPosts, allFriends,
    deletePost
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);