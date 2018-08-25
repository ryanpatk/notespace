import React from 'react'
import styled from '@emotion/native'
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
const COUNT_SIZE = (ICON_SIZE / 3)

const LOGO_NAME = Platform.select({
  ios: 'logo-apple',
  android: 'logo-android',
})

const NoteBlockView = styled.View`
  align-items: center;
  border: ${() => `1px solid ${theme.colorLightGray}`};
  height: ${() => `${BLOCK_HEIGHT}px`};
  justify-content: center;
  width: 50%;
`

const NoteSpaceMessage = styled.Text`
  color: ${props => props.color || theme.colorLightGray};
  font-weight: 700;
  text-align: center;
  width: ${() => `${ICON_SIZE}px`};
`

const NoteCount = styled.Text`
  color: ${props => props.color || theme.colorLightGray};
  font-size: ${() => `${COUNT_SIZE}px`};
  font-weight: 700;
  text-align: center;
  width: ${() => `${ICON_SIZE}px`};
`

const NoteBlock = (props) => {
  const {
    handlePress,
    icon,
    iconColor = theme.colorLightGray,
    message,
    noteCount,
  } = props

  return (
    <NoteBlockView>
      <TouchableOpacity onPress={handlePress}>
        <IoniconIcon name={icon || LOGO_NAME} size={ICON_SIZE} color={iconColor} />
      </TouchableOpacity>
      {message && <NoteSpaceMessage color={iconColor}>{message}</NoteSpaceMessage>}
      {noteCount && <NoteCount color={iconColor}>{noteCount}</NoteCount>}
    </NoteBlockView>
  )
}

export default NoteBlock