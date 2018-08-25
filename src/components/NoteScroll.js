import React, { Component } from 'react'
import styled from '@emotion/native'
import {
  Dimensions,
  FlatList,
} from 'react-native'

import theme from '../utils/theme'

const { height, width } = Dimensions.get('window')

const NOTE_CARD_SIZE = (0.9 * (width / 2))

const ScrollContainer = styled(FlatList)`
  flex: 1;
  width: 100%;
  padding: 10px;
`

const NoteCardLayout = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center
`

const NoteCard = styled.View`
  padding: 10px;
  width: ${() => `${NOTE_CARD_SIZE}px`};
  height: ${() => `${NOTE_CARD_SIZE}px`};
  background-color: ${props => props.color};
  border-radius: 4px;
`

const NoteCardText = styled.Text``

class NoteScroll extends Component {
  keyExtractor = (item, index) => {
    return item.id
  }

  renderNote = ({ item }, extraNoteSpaceData) => {
    const { color = theme.colorLightGray } = extraNoteSpaceData

    console.log(color)

    return (
      <NoteCardLayout>
        <NoteCard color={color}>
          <NoteCardText>
            {item.text}
          </NoteCardText>
        </NoteCard>
      </NoteCardLayout>
    )
  }

  render() {
    const { noteSpace } = this.props
    const { notes, ...extraNoteSpaceData } = noteSpace

    return (
      <ScrollContainer
        data={notes}
        keyExtractor={this.keyExtractor}
        renderItem={item => this.renderNote(item, extraNoteSpaceData)}
        numColumns={2}
      />
    )
  }
}

export default NoteScroll
