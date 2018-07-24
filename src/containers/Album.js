import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { readAlbum } from '../actions/album';

import Page from '../components/Page';
// import Photos from '../components/album/Photos';
import mediaParagraph from '../assets/img/media-paragraph.png';

class Album extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    const params = `/${id}?_embed=photos`;

    this.props.readAlbum(params);
  }
  
  render() {
    const { album, isError, isLoading } = this.props.albumReducer;

    return (
      <Page id="album" title="Album" description='This album page'>
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
                <Header as='h2' icon textAlign='center'>
                  <Icon name='images' circular />
                  <Header.Content>{album.title}</Header.Content>
                </Header>
                <Divider inverted />
                {/* <Photos photos={album.photos} /> */}
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
    albumReducer: state.albumReducer
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   const id = props.match.params.id;
//   const params = `/${id}?_embed=photos`;

//   return {
//     actions: dispatch(readAlbum(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ readAlbum }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Album);