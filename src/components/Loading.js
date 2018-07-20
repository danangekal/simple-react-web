import React from 'react'
import { Dimmer, Loader, Container } from 'semantic-ui-react';

export default () => (
  <Container>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  </Container>
);