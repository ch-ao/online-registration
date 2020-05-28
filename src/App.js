import React, { Component } from 'react';
import Form from './components/Form';
import { Container } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <div>
      <Container maxWidth='sm'  >
        <Form />
      </Container>
        
      </div>
    );
  }
}

export default App;