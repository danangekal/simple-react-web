import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, Menu, Image, Dropdown, Button, Sticky, 
  Responsive, Sidebar, Icon, Popup, Checkbox, Form 
} from 'semantic-ui-react';

import logo from '../assets/img/logo.png';

const menuPrimary = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/explore',
    text: 'Explore'
  },
  {
    to: '/friend',
    text: 'Friend'
  }
];

const isCurrent = (to, current) => {
  if (to === '/' && current === to) {
    return true;
  } else if (to !== '/' && current.includes(to)) {
    return true;
  }

  return false;
};

const NavbarLink = ({ to, text, current }) => (
  <Menu.Item className={isCurrent(to, current) ? 'active' : ''}
    name={text} as={Link} to={to}
  >
    {text}
  </Menu.Item>
);

export default ({ isAuthenticated, current, visible, handlePusher, handleToggle, context, contents, footers }) => (
  <div>
    <Responsive {...Responsive.onlyMobile}>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
        >
          {menuPrimary.map((link, index) => {
            const TheLink = <NavbarLink key={index} current={current} {...link} />;

            if (link.hasOwnProperty('auth')) {
              if (link.auth && isAuthenticated) {
                return TheLink;
              } else if (!link.auth && !isAuthenticated) {
                return TheLink;
              }

              return null;
            }

            return TheLink;
          })}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={handlePusher}
          style={{ minHeight: "100vh" }}
        >
          <Sticky context={context}>
            <Menu className='menu-mobile' color='grey' inverted>
              <Menu.Item>
                <Image size="mini" src={logo} />
              </Menu.Item>
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Popup wide trigger={<Button primary>Login</Button>} on='click'>
                    <Form>
                      <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' />
                      </Form.Field>
                      <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                      </Form.Field>
                      <Button type='submit'>Login</Button>
                    </Form>
                  </Popup>
                </Menu.Item>

                <Menu.Item>
                  <Button as={Link} to='register' positive>Register</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Sticky>
          <Container className='content-mobile'>{contents}</Container>
          <div>{footers}</div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Responsive>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Menu className='menu-top' size='mini' color='black' inverted pointing>
        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text='Curency'>
            <Dropdown.Menu>
              <Dropdown.Item>IDR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Popup wide trigger={<Button primary>Login</Button>} on='click'>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'>Login</Button>
            </Form>
            </Popup>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to='register' positive>Register</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu> 
      <Sticky context={context}>
        <Menu className='menu-primary' color='grey' inverted stackable>
          <Menu.Menu position='left'>
            <Menu.Item>
              <Image src={logo} size='mini' />
            </Menu.Item>
            {menuPrimary.map((link, index) => {
              const TheLink = <NavbarLink key={index} current={current} {...link} />;

              if (link.hasOwnProperty('auth')) {
                if (link.auth && isAuthenticated) {
                  return TheLink;
                } else if (!link.auth && !isAuthenticated) {
                  return TheLink;
                }

                return null;
              }

              return TheLink;
            })}
          </Menu.Menu>
          <Menu.Item name='profile' as={Link} to='profile/1'
          >
            <Icon size='big' name='user' /> Bret
          </Menu.Item> 
        </Menu>
      </Sticky>
      <Container className='content-desktop'>{contents}</Container>
      <Container fluid>{footers}</Container>
    </Responsive>
  </div>
);
