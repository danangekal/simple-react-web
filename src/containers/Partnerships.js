import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/partnerships/Content';

export default class Register extends Component {
  
  render() {
    return (
      <div>
        <Page title="Partnerships" description='This partnerships page'>
          <Content/>
        </Page>
      </div>
    )
  }
}