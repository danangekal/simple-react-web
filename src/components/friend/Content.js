import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, Segment, Card, Message, Dimmer, Loader, 
  Button, Image, Header, Icon, Divider, Responsive 
} from 'semantic-ui-react';

import paragraph from '../../assets/img/paragraph.png';
import matthew from '../../assets/img/matthew.png';

export default class Content extends Component {

  render() {
    const { friends, isError, isLoading } = this.props.friendReducer;

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
                <Icon name='users' circular />
                <Header.Content>Friends</Header.Content>
              </Header>
              <Divider inverted />
              <Responsive {...Responsive.onlyMobile}>
                <Card.Group itemsPerRow={1} >
                  {friends.map((item)=> (
                    <Card color='green' key={item.id} link>
                      <Card.Content>
                        <Image as={Link} to={`/profile/${item.id}`} floated='right' size='mini' src={matthew} />
                        <Card.Header><Link to={`/profile/${item.id}`}>{item.username}</Link></Card.Header>
                        <Card.Meta>{item.name}</Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green' as={Link} to={`/profile/${item.id}`}>
                            Detail Profile
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  ))}
                </Card.Group>
              </Responsive>
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Card.Group itemsPerRow={4} >
                  {friends.map((item)=> (
                    <Card color='green' key={item.id} link>
                      <Card.Content>
                        <Image as={Link} to={`/profile/${item.id}`} floated='right' size='mini' src={matthew} />
                        <Card.Header><Link to={`/profile/${item.id}`}>{item.username}</Link></Card.Header>
                        <Card.Meta>{item.name}</Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green' as={Link} to={`/profile/${item.id}`}>
                            Detail Profile
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
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