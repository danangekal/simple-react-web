import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Divider } from 'semantic-ui-react';

import { readPhoto } from '../actions/photo';

import Page from '../components/Page';

class Photo extends Component {
  
  componentWillMount() {
    const id = this.props.match.params.id;

    this.props.readPhoto(id);
  }

  render() {
    const { photo, isError, isLoading } = this.props.photoReducer;

    return (
      <Page id="photo" title="Photo" description="This is photo page">
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
                <Header as='h2' icon textAlign='center'>
                  <Header.Content>{photo.title}</Header.Content>
                </Header>
                <Divider inverted />
                <Image src={photo.url} size='big' centered />
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
    photoReducer: state.photoReducer
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ readPhoto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Photo);