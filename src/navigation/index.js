import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Home, Space } from '../screens'

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Space: {
    screen: Space
  }
}, {
  // headerMode: 'none'
});