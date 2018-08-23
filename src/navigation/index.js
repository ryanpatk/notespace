import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Home } from '../screens'

export default createStackNavigator({
  Home: {
    screen: Home
  },
}, {
  headerMode: 'none'
});