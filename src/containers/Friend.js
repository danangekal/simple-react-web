import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { filterFriends } from '../actions/friend';

import User from '../components/friend/User';
import paragraph from '../assets/img/paragraph.png';

class Friend extends Component {
  
  componentWillMount() {
    const id = 1;
    const params = `?id_ne${id}`;

    this.props.filterFriends(params);
  }

  render() {
    const { friends, isError, isLoading } = this.props.friendReducer;

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

                <Image src={paragraph} />
              </Segment>
            ):(
              <div>
                <Header as='h2' icon textAlign='center'>
                  <Icon name='users' circular />
                  <Header.Content>Friends</Header.Content>
                </Header>
                <Divider inverted />
                <User friends={friends} />
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
    friendReducer: state.friendReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   const id = 1;
//   const params = `?id_ne${id}`;

//   return {
//     actions: dispatch(filterFriends(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterFriends }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Friend);