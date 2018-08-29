import React from 'react'
import styled from '@emotion/native'

import {
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'

import Icon from './Icon'
import theme from '../utils/theme'

const { height, width } = Dimensions.get('window')

const IconPickerWrapper = styled.View``

const NoteBlock = (props) => {
  return (
    <IconPickerWrapper>
    </IconPickerWrapper>
  )
}

export default NoteBlock