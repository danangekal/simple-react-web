import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Item, Responsive, Header, Divider, Segment, Icon } from 'semantic-ui-react';

const linkmobile = [
  {
    to: '/about-us',
    text: 'About Us'
  },
  {
    to: '/careers',
    text: 'Careers'
  },
  {
    to: '/contact-us',
    text: 'Contact Us'
  },
  {
    to: '/partnerships',
    text: 'Partnerships'
  }
];

const simplewebs = [
  {
    to: '/about-us',
    text: 'About Us'
  },
  {
    to: '/careers',
    text: 'Careers'
  },
  {
    to: '/partnerships',
    text: 'Partnerships'
  }
];

const helps = [
  {
    to: '/terms-conditions',
    text: 'Terms and Conditions'
  },
  {
    to: '/privacy-policies',
    text: 'Privacy Policies'
  },
  {
    to: '/contact-us',
    text: 'Contact Us'
  }
];

const sosmeds = [
  {
    to: '/facebook',
    text: 'Facebook'
  },
  {
    to: '/twitter',
    text: 'Twitter'
  },
  {
    to: '/instagram',
    text: 'Instagram'
  },
  {
    to: '/linkedIn',
    text: 'LinkedIn'
  },
  {
    to: '/pinterest',
    text: 'Pinterest'
  }
];

const payments = ['cc mastercard', 'cc visa', 'cc jcb', 'cc paypal'];

export default class Footer extends Component {
  
  render() {

    return (
      <div id="footer">
        <Responsive {...Responsive.onlyMobile}>
          <Segment className='footer-mobile' inverted>
            <Divider inverted/>
            <Grid columns={2} padded='horizontally'>
              <Grid.Column>
                <Item.Group link>
                  {linkmobile.map((lm, index) => (
                    <Item key={index}>
                      <Item.Content>
                        <Header as={Link} to={lm.to} className='link-footer'>
                          {lm.text}
                        </Header>
                      </Item.Content>
                    </Item>
                  ))}
                </Item.Group>
                <Grid columns={4}>
                  {payments.map((payment, index) => (
                    <Grid.Column key={index}>
                      <Icon size='big' name={payment} />
                    </Grid.Column>
                  ))}
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Item.Group link>
                  {sosmeds.map((sosmed, index) => (
                    <Item key={index}>
                      <Item.Content>
                        <Header as={Link} to={sosmed.to} className='link-footer'>
                          <Icon name={sosmed.text.toLowerCase()} />
                          {sosmed.text}
                        </Header>
                      </Item.Content>
                    </Item>
                  ))}
                </Item.Group>
              </Grid.Column>
            </Grid>
            <Divider horizontal inverted>
              <Header size='small' className='link-footer'>Copyright &copy; 2018</Header>
            </Divider>
          </Segment>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Segment className='footer-desktop' inverted>
            <Grid>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Segment inverted>
                    <Header as='h2' inverted>Simple Website</Header>
                    <Divider inverted/>
                    <Item.Group link>
                      {simplewebs.map((sw, index) => (
                        <Item key={index}>
                          <Item.Content>
                            <Header as={Link} to={sw.to} className='link-footer'>
                              {sw.text}
                            </Header>
                          </Item.Content>
                        </Item>
                      ))}
                    </Item.Group>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment inverted>
                    <Header as='h2' inverted>Help</Header>
                    <Divider inverted/>
                    <Item.Group link>
                      {helps.map((help, index) => (
                        <Item key={index}>
                          <Item.Content>
                            <Header as={Link} to={help.to} className='link-footer'>
                              {help.text}
                            </Header>
                          </Item.Content>
                        </Item>
                      ))}
                    </Item.Group>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment inverted>
                    <Header as='h2' inverted>Follow Me</Header>
                    <Divider inverted/>
                    <Item.Group link>
                      {sosmeds.map((sosmed, index) => (
                        <Item key={index}>
                          <Item.Content>
                            <Header as={Link} to={sosmed.to} className='link-footer'>
                              <Icon name={sosmed.text.toLowerCase()} />
                              {sosmed.text}
                            </Header>
                          </Item.Content>
                        </Item>
                      ))}
                    </Item.Group>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment inverted>
                    <Header as='h2' inverted>Payments</Header>
                    <Divider inverted/>
                    <Grid columns={4}>
                      {payments.map((payment, index) => (
                        <Grid.Column key={index}>
                          <Icon size='huge' name={payment} />
                        </Grid.Column>
                      ))}
                    </Grid>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider horizontal inverted>
              <Header size='small' className='link-footer'>Copyright &copy; 2018</Header>
            </Divider>
          </Segment>
        </Responsive>
      </div>
    )
  }
}
