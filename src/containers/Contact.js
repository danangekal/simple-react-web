import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/contact/Content';

export default class Contact extends Component {
  
  render() {
    return (
      <Page id="contact" title="Contact Us" description='This contact us page'>
        <Content/>
      </Page>
    )
  }
}