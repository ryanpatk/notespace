import React, { Component } from 'react'

import { createStore } from './context/createStore'
import { Provider } from './context/createConsumer'
import { MOCK_NOTES, MOCK_NOTESPACES } from './context/mockData'

import Navigation from './navigation'

class App extends Component {
  state = {
    noteSpaces: MOCK_NOTESPACES,
    notes: MOCK_NOTES,
  }

  render() {
    return (
      <Provider value={createStore(this)}>
        <Navigation />
      </Provider>
    )
  }
}

export default App