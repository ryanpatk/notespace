import React from 'react'
import styled from 'styled-components'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import {
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'

import theme from '../utils/theme'

const { height, width } = Dimensions.get('window')

const BLOCK_HEIGHT = (height / 2)
const ICON_SIZE = (width / 3)

const LOGO_NAME = Platform.select({
  ios: 'logo-apple',
  android: 'logo-android',
})

const NoteBlockView = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: ${() => BLOCK_HEIGHT};
  border: ${() => `1px solid ${theme.colorLightGray}`};
`

const NoteSpaceMessage = styled.Text`
  color: ${props => props.color || theme.colorLightGray};
  font-weight: 700;
  text-align: center;
  width: ${ICON_SIZE}px;
`

const NoteBlock = (props) => {
  const {
    handlePress,
    iconColor = theme.colorLightGray,
    noteCount,
    icon,
    message,
  } = props

  return (
    <NoteBlockView>
      <TouchableOpacity onPress={handlePress}>
        <IoniconIcon name={icon || LOGO_NAME} size={ICON_SIZE} color={iconColor} />
      </TouchableOpacity>
      <NoteSpaceMessage color={iconColor}>{message}</NoteSpaceMessage>
    </NoteBlockView>
  )
}

export default NoteBlock