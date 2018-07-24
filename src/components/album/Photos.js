import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

export default class Content extends Component {

  render() {
    const { photos } = this.props;

    return(
      <Card.Group itemsPerRow={6}>
        {photos.map((item)=> (
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
    )
  }
}