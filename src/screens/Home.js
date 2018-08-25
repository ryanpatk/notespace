import React, { Component } from 'react'
import styled from '@emotion/native'

import { HomeScreen, NoteBlock } from '../components'
import { ContextConsumer } from '../context'
import theme from '../utils/theme'
import generateId from '../utils/generateId';

const EMPTY_NOTESPACE_MESSAGE = 'Add a new note space.'
const EMPTY_NOTESPACE_ICON = 'ios-qr-scanner'

class Home extends Component {
  openNoteSpace = (noteSpaceId) => {
    this.props.navigation.navigate('Space', { noteSpaceId })
  }

  createNoteSpace = () => {
    this.props.navigation.navigate('EditSpace', {})
  }

  renderNoteBlock = data => {
    const {
      name, icon, color, notes = [], id,
    } = data

    return (
      <NoteBlock
        handlePress={() => this.openNoteSpace(id)}
        icon={icon}
        iconColor={color || theme.colorBlue}
        noteCount={`${notes.length}`}
        key={id}
      />
    )
  }

  renderEmptyNoteBlock = () => {
    return (
      <NoteBlock
        handlePress={this.openNoteSpace}
        icon={EMPTY_NOTESPACE_ICON}
        message={EMPTY_NOTESPACE_MESSAGE}
        key={generateId()}
      />
    )
  }

  render() {
    return (
      <ContextConsumer>
        {({ store: { noteSpaces }, actions: { increment } }) => (
          <HomeScreen>
            {noteSpaces.map(noteSpace => {
              if (!!Object.keys(noteSpace).length) {
                return this.renderNoteBlock(noteSpace)
              } else {
                return this.renderEmptyNoteBlock()
              }
            }
          )}
          </HomeScreen>
        )}
      </ContextConsumer>
    )
  }
}

export default Home