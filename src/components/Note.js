import React, { Component } from 'react'
import styled from '@emotion/native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import {
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import theme from '../utils/theme'

const NoteContainer = styled.View`
  flex: 1;
  margin-vertical: 10px;
  margin-horizontal: 20px;
  margin-bottom: 30px;
`

const NoteBackground = styled.View`
  flex: 1;
  background-color: ${() => theme.colorYellow};
  padding: 20px;
  border-radius: 4px;
`

const NoteInput = styled(TextInput)`
  font-size: 18px;
`

class Note extends Component {
  state = {
    noteText: this.props.note.text,
  }

  saveNote = ({ nativeEvent }) => {
    const { text } = nativeEvent
    const { id } = this.props.note

    this.props.editNote(id, text)
  }

  render() {
    const { noteText } = this.state

    return (
      <NoteContainer>
        <NoteBackground>
          <NoteInput
            multiline
            value={noteText}
            onChangeText={(text) => this.setState({ noteText: text })}
            onEndEditing={this.saveNote}
            underlineColorAndroid="transparent"
          />
        </NoteBackground>
      </NoteContainer>
    )
  }
}

export default Note