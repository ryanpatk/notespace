import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from '@emotion/native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'

import { Note, Screen, Header, Icon } from '../components'
// import { ContextConsumer } from '../context'
import { createConsumer } from '../context/createConsumer'
import theme from '../utils/theme'

const ICON_SIZE = 40

const Text = styled.Text``

class EditNote extends Component {
  shouldComponentUpdate = (nextProps) => {
    const { notes, navigation } = nextProps
    const { noteId } = navigation.state.params

    const activeNote = notes.find(note => note.id === noteId)

    return !!activeNote
  }

  renderTrashIcon = () => {
    const { navigation, actions } = this.props
    const { noteId } = navigation.state.params

    return (
      <Icon
        iconName="md-trash"
        handlePress={() => {
          actions.deleteNote(noteId, () => navigation.goBack())
        }}
      />
    )
  }

  render() {
    const { noteSpaces, notes, navigation } = this.props
    const { noteId } = navigation.state.params

    const activeNote = notes.find(note => note.id === noteId)
    const TrashIcon = this.renderTrashIcon()

    return (
      <Screen>
        <Header right={TrashIcon} />
        <Note note={activeNote} />
      </Screen>
    )
  }
}

export default createConsumer(EditNote)