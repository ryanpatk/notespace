import React, { Component } from 'react'
import styled from '@emotion/native'

import { createConsumer } from '../context/createConsumer'
import theme from '../utils/theme'

const IconPicker = () => {

}

const ColorPicker = () => {
  
}

class EditNoteSpace extends Component {
  render() {
    return (
      <Screen>
        <Header right={null} />
      </Screen>
    )
  }
}

export default createConsumer(EditNoteSpace)