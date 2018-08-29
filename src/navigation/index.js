import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Home, NoteSpace, Note } from '../screens'

export default createStackNavigator({
  Home: {
    screen: Home
  },
  NoteSpace: {
    screen: NoteSpace
  },
  Note: {
    screen: Note
  }
}, {
  headerMode: 'none',
  mode: 'modal',
});