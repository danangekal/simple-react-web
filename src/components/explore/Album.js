import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Card, Image, Label, Icon } from 'semantic-ui-react';

import image from '../../assets/img/image.png';
import matthew from '../../assets/img/matthew.png';

export default class Album extends Component {
  
  render() {
    const { explores } = this.props;

    return(      
      <div>
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
    )
  }
}