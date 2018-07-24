import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/terms/Content';

export default class Terms extends Component {
  
  render() {
    return (
      <Page id="terms" title="Terms and Conditions" description='This terms and conditions page'>
        <Content/>
      </Page>
    )
  }
}