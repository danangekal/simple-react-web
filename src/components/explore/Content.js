import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, Segment, Card, Message, Dimmer, Responsive,
  Loader, Image, Header, Icon, Divider, Label 
} from 'semantic-ui-react';

import paragraph from '../../assets/img/paragraph.png';
import image from '../../assets/img/image.png';
import matthew from '../../assets/img/matthew.png';

export default class Content extends Component {

  render() {
    const { explores, isError, isLoading } = this.props.exploreReducer;

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
                <Icon name='images' circular />
                <Header.Content>Explore</Header.Content>
              </Header>
              <Divider inverted />
              <Responsive {...Responsive.onlyMobile}>
                <Card.Group itemsPerRow={1}>
                  {explores.map((item)=> (
                    <Card color='green' key={item.id} image={image} 
                      header={item.title} 
                      description={(
                        <Label as={Link} to={`/profile/${item.userId}`} color='teal' image>
                          <Image src={matthew} />
                          {item.user.name}
                        </Label>
                      )} 
                      extra={(
                        <div>
                          <Link to={`/albums/${item.id}`}>
                            <Icon name='picture' circular /> {explores.length} Photos
                          </Link>
                        </div>
                      )} 
                    />
                  ))}
                </Card.Group>
              </Responsive>
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Card.Group itemsPerRow={3}>
                  {explores.map((item)=> (
                    <Card color='green' key={item.id} image={image} 
                      header={item.title} 
                      description={(
                        <Label as={Link} to={`/profile/${item.userId}`} color='teal' image>
                          <Image src={matthew} />
                          {item.user.name}
                        </Label>
                      )} 
                      extra={(
                        <div>
                          <Link to={`/albums/${item.id}`}>
                            <Icon name='picture' circular /> {explores.length} Photos
                          </Link>
                        </div>
                      )} 
                    />
                  ))}
                </Card.Group>
              </Responsive>
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}