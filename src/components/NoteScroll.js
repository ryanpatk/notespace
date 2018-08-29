import React, { Component } from 'react'
import styled from '@emotion/native'
import { withNavigation } from 'react-navigation'
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import theme from '../utils/theme'

const { height, width } = Dimensions.get('window')

const NOTE_CARD_SIZE = (0.9 * (width / 2))

const ScrollContainer = styled(FlatList)`
  flex: 1;
  width: 100%;
  padding: 10px;
`

const BottomSpacer = styled.View`
  width: 100%;
  padding-vertical: 10px;
`

const NoteCardLayout = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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
    const { navigation } = this.props
    const { text, id: noteId } = item
    const { color = theme.colorLightGray } = extraNoteSpaceData

    return (
      <NoteCardLayout>
        <TouchableOpacity onPress={() => navigation.navigate('Note', { noteId })}>
          <NoteCard color={theme.colorYellow}>
            <NoteCardText>
              {text}
            </NoteCardText>
          </NoteCard>
        </TouchableOpacity>
      </NoteCardLayout>
    )
  }

  render() {
    const { noteSpace, notes } = this.props
    const { noteIds, ...extraNoteSpaceData } = noteSpace

    return (
      <ScrollContainer
        data={notes}
        keyExtractor={this.keyExtractor}
        renderItem={item => this.renderNote(item, extraNoteSpaceData)}
        numColumns={2}
        ListFooterComponent={BottomSpacer}
      />
    )
  }
}

export default withNavigation(NoteScroll)
