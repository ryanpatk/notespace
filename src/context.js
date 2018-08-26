import React, { Component } from 'react'
import generateId from './utils/generateId'

import theme from './utils/theme'

const {
  Provider,
  Consumer: ContextConsumer,
} = React.createContext()

const DUMMY_NOTES = [
  {
    text: "Here's not some text!",
    id: generateId(),
  },
  {
    text: "Here's some text!",
    id: generateId(),
  },
  {
    text: "Here's not some text!",
    id: generateId(),
  },
]

const DUMMY_NOTESPACES = [
  {
    name: 'Default',
    id: generateId(),
    icon: 'ios-home',
    color: theme.colorBlue,
    noteIds: DUMMY_NOTES.map(({ id }) => id),
  },
  {},
  {},
  {},
]

class ContextProvider extends Component {
  state = {
    noteSpaces: DUMMY_NOTESPACES,
    notes: DUMMY_NOTES,
  }

  increment = () => {
    console.log('incrementing!')
    this.setState({ ...this.state })
  }

  render() {
    const { children } = this.props

    return (
      <Provider
        value={{
          store: this.state,
          actions: {
            increment: () => this.increment(),
          }
        }}
      >
        {children}
      </Provider>
    )
  }
}

export {
  ContextProvider,
  ContextConsumer,
}