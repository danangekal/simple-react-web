import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/register/Content';

export default class Register extends Component {
  
  render() {
    return (
      <div>
        <Page title="Register" description='This register page'>
          <Content/>
        </Page>
      </div>
    )
  }
}