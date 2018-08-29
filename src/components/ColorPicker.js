import React from 'react'
import styled from '@emotion/native'

import {
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'

import Icon from './Icon'
import theme from '../utils/theme'

const AVAILABLE_COLORS = [
  'colorRed',
  'colorYellow',
  'colorGreen',
  'colorBlue',
  'colorPurple',
  'colorBlack',
]

const { height, width } = Dimensions.get('window')
const SWATCH_BLOCK_SIZE = width / 4
const SWATCH_SIZE = width / 6
const SWATCH_BORDER_RADIUS = SWATCH_SIZE / 2

const ColorPickerWrapper = styled.View`
  margin-vertical: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const ColorSwatchWrapper = styled.View`
  width: ${() => `${SWATCH_BLOCK_SIZE}px`};
  height: ${() => `${SWATCH_BLOCK_SIZE}px`};
  justify-content: space-around;
  align-items: center;
`

const ColorSwatch = styled.View`
  width: ${() => `${SWATCH_SIZE}px`};
  height: ${() => `${SWATCH_SIZE}px`};
  border-radius: ${() => `${SWATCH_BORDER_RADIUS}px`};
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.active ? theme.colorDeepPink : 'transparent'};
  border-width: 3px;
`

const IconPicker = (props) => {
  const { activeColor } = props

  return (
    <ColorPickerWrapper>
      {AVAILABLE_COLORS.map((colorName) => (
        <ColorSwatchWrapper key={colorName}>
          <TouchableOpacity
            onPress={() => props.selectColor(colorName)}
          >
            <ColorSwatch color={theme[colorName]} active={colorName === activeColor} />
          </TouchableOpacity>
        </ColorSwatchWrapper>
      ))}
    </ColorPickerWrapper>
  )
}

export default IconPicker