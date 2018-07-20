import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/contact/Content';

export default class Contact extends Component {
  
  render() {
    return (
      <div>
        <Page title="Contact Us" description='This contact us page'>
          <Content/>
        </Page>
      </div>
    )
  }
}