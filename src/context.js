import React, { Component } from 'react'

const {
  Provider,
  Consumer: ContextConsumer,
} = React.createContext()

class ContextProvider extends Component {
  state = {
    noteSpaces: [
      {
        name: 'Default',
        icon: 'ios-home',
        color: null,
        notes: [],
      }
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

// const ContextConsumer = (props) => (
//   <Consumer>
//     {({ store, actions }) => (
//       {}
//     )}
//   </Consumer>
// )

export {
  ContextProvider,
  ContextConsumer,
}