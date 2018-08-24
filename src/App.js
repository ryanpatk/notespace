import React, { Component } from 'react'

import Navigation from './navigation'
import { ContextProvider } from './context'

class App extends Component {
  state = {}

  render() {
    return (
      <ContextProvider>
        <Navigation />
      </ContextProvider>
    )
  }
}

export default App