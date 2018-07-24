import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/careers/Content';

export default class Careers extends Component {
  
  render() {
    return (
      <Page id="careers" title="Careers" description='This careers page'>
        <Content/>
      </Page>
    )
  }
}