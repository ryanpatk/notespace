import React, { Component } from 'react'
import styled from '@emotion/native'
import { NoteBlock } from '../components'

import theme from '../utils/theme'

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #F5FCFF;
`

class Space extends Component {
  render() {
    return (
      <Container />
    )
  }
}

export default Space