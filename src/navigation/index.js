import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Home, NoteSpace, Note, EditNoteSpace } from '../screens'

export default createStackNavigator({
  Home: {
    screen: Home,
  },
  NoteSpace: {
    screen: NoteSpace,
  },
  Note: {
    screen: Note,
  },
  EditNoteSpace: {
    screen: EditNoteSpace,
  }
}, {
  headerMode: 'none',
  mode: 'modal',
})