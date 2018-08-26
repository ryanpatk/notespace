import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from '@emotion/native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'

import { NoteBlock, NoteScroll, Screen, Header } from '../components'
import { ContextConsumer } from '../context'
import theme from '../utils/theme'

const ICON_SIZE = 40

class Space extends Component {
  renderAddNoteIcon = () => {
    const { navigation } = this.props

    return (
      <TouchableOpacity onPress={() => {}}>
        <IoniconIcon name="md-add" size={ICON_SIZE} color={theme.colorLightGray} />
      </TouchableOpacity>
    )
  }

  render() {
    const { noteSpaceId } = this.props.navigation.state.params

    return (
      <ContextConsumer>
        {({ store: { noteSpaces, notes }, actions: { increment } }) => {
          const activeNoteSpace = noteSpaces.find(({ id }) => id === noteSpaceId)
          const { noteIds } = activeNoteSpace
          const activeNotes = notes.filter(note => noteIds.includes(note.id))

          return (
            <Screen>
              <Header right={this.renderAddNoteIcon()} />
              <NoteScroll noteSpace={activeNoteSpace} notes={activeNotes} />
            </Screen>
          )
        }}
      </ContextConsumer>
    )
  }
}

export default Space