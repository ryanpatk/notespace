import React, { Component } from 'react'
import styled from '@emotion/native'
import { TouchableOpacity } from 'react-native'

import { createConsumer } from '../context/createConsumer'
import { Screen, Header, IconPicker, ColorPicker } from '../components'
import theme from '../utils/theme'

const FittedScreen = styled(Screen)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`

const Spacer = styled.View`
  height: 20px;
  width: 100%;
`

const SectionText = styled.Text`
  width: 100%;
  height: 60px;
  color: ${() => theme.colorLightGray};
  font-weight: 700;
  font-size: 25px;
  text-align: center;
`

const SaveButton = styled(SectionText)`
  color: ${(props) => props.disabled ? theme.colorLightGray : theme.colorDeepPink};
  font-size: 60px;
`

class EditNoteSpace extends Component {
  state = {
    activeIcon: null,
    activeColor: null,
  }

  render() {
    const { activeIcon, activeColor } = this.state
    const { actions, navigation } = this.props
    const { noteSpaceId } = navigation.state.params
    const disabled = (!activeIcon || !activeColor)

    return (
      <Screen>
        <Spacer />
        {/* <SectionText>Choose an Icon</SectionText> */}
        <IconPicker activeIcon={activeIcon} selectIcon={(icon) => this.setState({ activeIcon: icon })} />
        <Spacer />
        {/* <SectionText>Choose a Color</SectionText> */}
        <ColorPicker activeColor={activeColor} selectColor={(color) => this.setState({ activeColor: color })} />
        <Spacer />
        <TouchableOpacity onPress={disabled ? null : () => {
          actions.editSpace(noteSpaceId, activeIcon, activeColor, () => navigation.navigate('Home'))
        }}>
          <SaveButton disabled={disabled}>SAVE</SaveButton>
        </TouchableOpacity>
      </Screen>
    )
  }
}

export default createConsumer(EditNoteSpace)