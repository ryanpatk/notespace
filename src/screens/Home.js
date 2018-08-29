import React, { Component } from 'react'
import { View } from 'react-native'
import styled from '@emotion/native'
import { v4 as uuid } from 'uuid'

import { HomeScreen, NoteBlock } from '../components'
import { createConsumer } from '../context/createConsumer'
import theme from '../utils/theme'

const EMPTY_NOTESPACE_MESSAGE = 'Add a new note space.'
const EMPTY_NOTESPACE_ICON = 'ios-qr-scanner'

class Home extends Component {
  openNoteSpace = (noteSpaceId) => {
    this.props.navigation.navigate('NoteSpace', { noteSpaceId })
  }

  createNoteSpace = () => {
    // this.props.navigation.navigate('EditSpace', {})
  }

  renderNoteBlock = (data) => {
    const {
      name, icon, color, noteIds = [], id,
    } = data

    return (
      <NoteBlock
        handlePress={() => this.openNoteSpace(id)}
        icon={icon}
        iconColor={color || theme.colorBlue}
        noteCount={`${noteIds.length}`}
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
        key={uuid()}
      />
    )
  }

  render() {
    const { noteSpaces } = this.props

    return (
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
    )
  }
}

export default createConsumer(Home)