import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from '@emotion/native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'

import { Note, Screen, Header } from '../components'
import { ContextConsumer } from '../context'
import theme from '../utils/theme'

const ICON_SIZE = 40

const Text = styled.Text``

class EditNote extends Component {
  render() {
    const { noteId } = this.props.navigation.state.params

    return (
      <ContextConsumer>
        {({ store: { noteSpaces, notes }, actions: { increment } }) => {
          const activeNote = notes.find(note => note.id === noteId)

          return (
            <Screen>
              <Header />
              <Note note={activeNote} />
            </Screen>
          )
        }}
      </ContextConsumer>
    )
  }
}

export default EditNote