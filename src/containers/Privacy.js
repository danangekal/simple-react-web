import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/privacy/Content';

export default class Privacy extends Component {
  
  render() {
    return (
      <div>
        <Page title="Privacy Policies" description='This privacy policies page'>
          <Content/>
        </Page>
      </div>
    )
  }
}