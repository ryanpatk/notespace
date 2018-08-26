import React, { Component } from 'react'
import styled from '@emotion/native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import { Dimensions, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import theme from '../utils/theme';

const ICON_SIZE = 40

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding-horizontal: 20px;
`

const HeaderItem = styled.View`
  padding-vertical: 10px;
  padding-horizontal: 5px;
`

class Header extends Component {
  renderBack = () => {
    const { navigation } = this.props

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IoniconIcon name="md-arrow-back" size={ICON_SIZE} color={theme.colorLightGray} />
      </TouchableOpacity>
    ) 
  }

  render() {
    const { left, right } = this.props

    return (
      <HeaderContainer>
        <HeaderItem>{left || this.renderBack()}</HeaderItem>
        <HeaderItem>{right || null}</HeaderItem>
      </HeaderContainer>
    )
  }
}

export default withNavigation(Header)