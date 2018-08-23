import React, { Component } from 'react'
import styled from 'styled-components'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import IoniconIcon from 'react-native-vector-icons/Ionicons'

import {
  Dimensions,
  Platform,
  Text,
  View,
} from 'react-native'

const { height, width } = Dimensions.get('window')

const ICON_SIZE = (width / 4)
const BLOCK_HEIGHT = (height / 2)

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #F5FCFF;
`

const NoteBlock = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: ${() => BLOCK_HEIGHT};
  border: 1px solid #D3D3D3;
`

const LOGO_NAME = Platform.select({
  ios: 'logo-apple',
  android: 'logo-android',
})

class Home extends Component {
  render() {
    return (
      <Container>
        <NoteBlock>
          <IoniconIcon name={LOGO_NAME} size={ICON_SIZE} color={'#D3D3D3'} />
        </NoteBlock>
        <NoteBlock>
          <IoniconIcon name={LOGO_NAME} size={ICON_SIZE} color={'#D3D3D3'} />
        </NoteBlock>
        <NoteBlock>
          <IoniconIcon name={LOGO_NAME} size={ICON_SIZE} color={'#D3D3D3'} />
        </NoteBlock>
        <NoteBlock>
          <IoniconIcon name={LOGO_NAME} size={ICON_SIZE} color={'#D3D3D3'} />
        </NoteBlock>
      </Container>
    )
  }
}

export default Home