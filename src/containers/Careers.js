import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/careers/Content';

export default class Careers extends Component {
  
  render() {
    return (
      <div>
        <Page title="Careers" description='This careers page'>
          <Content/>
        </Page>
      </div>
    )
  }
}