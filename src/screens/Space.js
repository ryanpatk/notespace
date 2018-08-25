import React, { Component } from 'react'
import styled from '@emotion/native'

import { NoteBlock, NoteScroll, Screen, Header } from '../components'
import { ContextConsumer } from '../context'
import theme from '../utils/theme'

const Text = styled.Text``

class Space extends Component {
  render() {
    const { noteSpaceId } = this.props.navigation.state.params

    return (
      <ContextConsumer>
        {({ store: { noteSpaces }, actions: { increment } }) => {
          const activeNoteSpace = noteSpaces.find(({ id }) => id === noteSpaceId)

          return (
            <Screen>
              <Header />
              <NoteScroll noteSpace={activeNoteSpace} />
            </Screen>
          )
        }}
      </ContextConsumer>
    )
  }
}

export default Space