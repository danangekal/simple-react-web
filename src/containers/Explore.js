import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { filterExplores } from '../actions/explore';

import Album from '../components/explore/Album';
import paragraph from '../assets/img/paragraph.png';

class Explore extends Component {

  componentWillMount() {
    const id = 1;
    const params = `?id_ne${id}&_expand=user`;

    this.props.filterExplores(params);
  }
  
  render() {
    const { explores, isError, isLoading } = this.props.exploreReducer;

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
                  <Icon name='images' circular />
                  <Header.Content>Explore</Header.Content>
                </Header>
                <Divider inverted />
                <Album explores={explores} />
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
    exploreReducer: state.exploreReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   const id = 1;
//   const params = `?id_ne${id}&_expand=user`;

//   return {
//     actions: dispatch(filterExplores(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterExplores }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Explore);