import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Card, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';

import mediaParagraph from '../../assets/img/media-paragraph.png';

export default class Content extends Component {

  render() {
    const { album, isError, isLoading } = this.props.albumReducer;

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
              <Header as='h2' icon textAlign='center'>
                <Icon name='images' circular />
                <Header.Content>{album.title}</Header.Content>
              </Header>
              <Divider inverted />
              <Card.Group itemsPerRow={6}>
                {album.photos.map((item)=> (
                  <Card raised key={item.id} 
                    image={(
                      <Image
                        src={item.thumbnailUrl}
                        as={Link}
                        to={`/photos/${item.id}`}
                      />
                    )}
                  />
                ))}
              </Card.Group>
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}