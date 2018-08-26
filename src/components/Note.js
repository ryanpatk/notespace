import React, { Component } from 'react'
import styled from '@emotion/native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import {
  TextInput,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'

import theme from '../utils/theme'

const NoteContainer = styled.View`
  flex: 1;
  margin: 20px;
  margin-bottom: 30px;
`

const NoteInput = styled(TextInput)`
  flex: 1;
  font-size: 18px;
  background-color: ${() => theme.colorYellow};
  padding: 20px;
  border-radius: 4px;
`

class Note extends Component {
  render() {
    const { note } = this.props

    return (
      <NoteContainer>
        <NoteInput
          multiline
          value={note.text}
        />
      </NoteContainer>
    )
  }
}

export default Note