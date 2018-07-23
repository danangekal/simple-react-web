import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Card, Image, Button } from 'semantic-ui-react';

import matthew from '../../assets/img/matthew.png';

export default class User extends Component {
  
  render() {
    const { friends } = this.props;

    return(      
      <div>
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
    )
  }
}