import React, { createContext } from 'react'
const { Provider, Consumer } = createContext()

const createConsumer = Component => (props) => (
  <Consumer>
    {context => {
      const { state, actions } = context

      const propsMergedWithContext = {
        ...state,
        ...props,
        actions,
      }

      return (
        <Component { ...propsMergedWithContext } />
      )
    }}
  </Consumer>
)

export { Provider, createConsumer }