import React, { Component } from 'react'
import styled from 'styled-components'
import { NoteBlock } from '../components'

import { ContextConsumer } from '../context'
import theme from '../utils/theme'

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #F5FCFF;
`

class Home extends Component {
  openNoteSpace = () => {
    this.props.navigation.navigate('Space', {})
  }

  renderNoteBlock = data => {
    const {
      name, icon, color, notes,
    } = data

    return (
      <NoteBlock
        handlePress={this.openNoteSpace}
        iconColor={color || theme.colorBlue}
        noteCount={notes.length}
        icon={icon}
      />
    )
  }

  render() {
    return (
      <ContextConsumer>
        {({ store: { noteSpaces }, actions: { increment } }) => (
          <Container>
            {noteSpaces.map(noteSpace => this.renderNoteBlock(noteSpace))}
          </Container>
        )}
      </ContextConsumer>
    )
  }
}

export default Home