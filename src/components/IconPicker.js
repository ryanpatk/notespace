import React from 'react'
import styled from '@emotion/native'

import {
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'

import Icon from './Icon'
import theme from '../utils/theme'

const AVAILABLE_ICONS = [
  'ios-body',
  'ios-airplane',
  'ios-home',
  'ios-wallet',
  'ios-heart',
  'ios-construct',
  'ios-nutrition',
  'ios-leaf',
]

const { height, width } = Dimensions.get('window')
const ICON_BLOCK_SIZE = width / 4
const ICON_SIZE = width / 6

const IconPickerWrapper = styled.View`
  margin-vertical: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const IconWrapper = styled.View`
  width: ${() => `${ICON_BLOCK_SIZE}px`};
  height: ${() => `${ICON_BLOCK_SIZE}px`};
  justify-content: space-around;
  align-items: center;
`

const IconPicker = (props) => {
  const { activeIcon } = props

  return (
    <IconPickerWrapper>
      {AVAILABLE_ICONS.map((iconName) => (
        <IconWrapper key={iconName}>
          <Icon
            iconSize={ICON_SIZE}
            iconName={iconName}
            handlePress={() => props.selectIcon(iconName)}
            iconColor={(iconName === activeIcon) ? theme.colorDeepPink : theme.colorLightGray}
          />
        </IconWrapper>
      ))}
    </IconPickerWrapper>
  )
}

export default IconPicker