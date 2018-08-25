import React, { Component } from 'react'
import styled from '@emotion/native'
import { NoteBlock } from '../components'

import { ContextConsumer } from '../context'
import theme from '../utils/theme'

const EMPTY_NOTESPACE_MESSAGE = 'Add a new note space.'
const EMPTY_NOTESPACE_ICON = 'ios-qr-scanner'

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #F5FCFF;
`

class Home extends Component {
  openNoteSpace = () => {
    this.props.navigation.navigate('Space', {})
  }

  createNoteSpace = () => {
    this.props.navigation.navigate('EditSpace', {})
  }

  renderNoteBlock = data => {
    const {
      name, icon, color, notes = [],
    } = data

    return (
      <NoteBlock
        handlePress={this.openNoteSpace}
        icon={icon}
        iconColor={color || theme.colorBlue}
        noteCount={`${notes.length}`}
      />
    )
  }

  renderEmptyNoteBlock = () => {
    return (
      <NoteBlock
        handlePress={this.openNoteSpace}
        icon={EMPTY_NOTESPACE_ICON}
        message={EMPTY_NOTESPACE_MESSAGE}
      />
    )
  }

  render() {
    return (
      <ContextConsumer>
        {({ store: { noteSpaces }, actions: { increment } }) => (
          <Container>
            {noteSpaces.map(noteSpace => {
              if (!!Object.keys(noteSpace).length) {
                return this.renderNoteBlock(noteSpace)
              } else {
                return this.renderEmptyNoteBlock()
              }
            }
          )}
          </Container>
        )}
      </ContextConsumer>
    )
  }
}

export default Home