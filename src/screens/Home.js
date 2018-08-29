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
    const { navigation } = this.props

    navigation.navigate('NoteSpace', { noteSpaceId })
  }

  initializeNoteSpace = (noteSpaceId) => {
    const { navigation, actions } = this.props

    navigation.navigate('EditNoteSpace', { noteSpaceId })
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

  renderEmptyNoteBlock = (noteSpaceId) => {
    return (
      <NoteBlock
        handlePress={() => this.initializeNoteSpace(noteSpaceId)}
        icon={EMPTY_NOTESPACE_ICON}
        message={EMPTY_NOTESPACE_MESSAGE}
        key={noteSpaceId}
      />
    )
  }

  render() {
    const { noteSpaces } = this.props

    return (
      <HomeScreen>
        {noteSpaces.map(noteSpace => {
          if (noteSpace.isEmpty) {
            return this.renderEmptyNoteBlock(noteSpace.id)
          } else {
            return this.renderNoteBlock(noteSpace)
          }
        }
      )}
      </HomeScreen>
    )
  }
}

export default createConsumer(Home)