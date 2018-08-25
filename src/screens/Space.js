import React, { Component } from 'react'
import styled from '@emotion/native'

import { NoteBlock, NoteScroll, Screen } from '../components'
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
              <Text>{noteSpaceId}</Text>
              <Text>{activeNoteSpace.name}</Text>
              <NoteScroll noteSpace={activeNoteSpace} />
            </Screen>
          )
        }}
      </ContextConsumer>
    )
  }
}

export default Space