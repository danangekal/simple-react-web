import React, { Component } from 'react';
import { Card, Image, List } from 'semantic-ui-react';

import matthew from '../../assets/img/matthew.png';

export default class Profile extends Component {

  render() {
    const { profile } = this.props;

    return(      
      <div>
        <Card>
          <Image src={matthew} />
          <Card.Content>
            <Card.Header>{profile.username}</Card.Header>
            <Card.Meta>
              {profile.name}
            </Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
          <List>
            <List.Item>
              <List.Icon name='marker' />
              {/* <List.Content>{profile.address.street+' '+profile.address.suite+', '+profile.address.city+' '+profile.address.zipcode}</List.Content> */}
            </List.Item>
            <List.Item>
              <List.Icon name='phone' />
              <List.Content>{profile.phone}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>
                <a href={'mailto:'+profile.email}>{profile.email}</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href={profile.website}>{profile.website}</a>
              </List.Content>
            </List.Item>
          </List>
          </Card.Content>
        </Card>
      </div>
    )
  }
}