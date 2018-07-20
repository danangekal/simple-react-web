import React, { Component } from 'react';

import Page from './Page';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
         <Page
          id="not-found"
          title="Not Found"
          description="This is embarrassing."
          noCrawl
        >
          <p>Sorry, page not found</p>
        </Page>
      </div>
    )
  }
}

