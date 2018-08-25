import React, { Component } from 'react'
import generateId from './utils/generateId'

import theme from './utils/theme'

const {
  Provider,
  Consumer: ContextConsumer,
} = React.createContext()

class ContextProvider extends Component {
  state = {
    noteSpaces: [
      {
        name: 'Default',
        id: generateId(),
        icon: 'ios-home',
        color: theme.colorBlue,
        notes: [
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
          {
            text: "Here's some text!",
            id: generateId(),
          },
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
          {
            text: "Here's some text!",
            id: generateId(),
          },
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
          {
            text: "Here's some text!",
            id: generateId(),
          },
          {
            text: "Here's not some text!",
            id: generateId(),
          },
          {
            text: "Here's some text!",
            id: generateId(),
          },
        ],
      },
      {},
      {},
      {},
    ]
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