import React, { Component } from 'react'
import styled from '@emotion/native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import {
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import theme from '../utils/theme'

const DEFAULT_ICON_SIZE = 40

const Icon = props => {
  const {
    handlePress,
    iconColor = theme.colorLightGray,
    iconName,
    iconSize = DEFAULT_ICON_SIZE,
  } = props

  return (
    <TouchableOpacity onPress={handlePress}>
      <IoniconIcon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  )
}

export default Icon