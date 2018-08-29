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
  saveNote = (data) => {
    debugger
  }

  render() {
    const { note } = this.props

    return (
      <NoteContainer>
        <NoteBackground>
          <NoteInput
            multiline
            value={note.text}
            onBlur={(data) => this.saveNote(data)}
            underlineColorAndroid="transparent"
          />
        </NoteBackground>
      </NoteContainer>
    )
  }
}

export default Note