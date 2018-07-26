import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, List, Button } from 'semantic-ui-react';

import matthew from '../../assets/img/matthew.png';

export default class Post extends Component {

  render() {
    const { posts, profile, deletePostClick } = this.props;

    return(      
      <div>
        {posts.map((item)=> (
          <Card.Group key={item.id}>
            <Card fluid color='green'>
              <Card.Content>
                <List relaxed='very'>
                  <List.Item>
                    <List.Content floated='right'>
                      <Button as={Link} to={`/posts/${item.id}`} color='green'>View</Button>
                      <Button onClick={ deletePostClick } color='red'>Delete</Button>
                    </List.Content>
                    <Image circular size='mini' as={Link} to={`/profile/${profile.id}`} src={matthew} />
                    <List.Content>
                      <List.Header as={Link} to={`/profile/${profile.id}`}>{profile.name}</List.Header>
                      <List.Description>{profile.email}</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Content>
              <Card.Content extra>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>{item.comments.length} comments</Card.Meta>
                <Card.Description>{item.body}</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        ))}
      </div>
    )
  }
}