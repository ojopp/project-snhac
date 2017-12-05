import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Cell = styled.View`
  flex-direction: row;
  align-items: center;
  height: 38px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-color: #232A3010;
`;

export default class SettingsScreen extends Component {
  state = {

  }

  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor="#232A3030"
          onPress={() => this.props.screenProps.signOut()}
        >
          <Cell>
            <Icon name="exit-to-app" size={24} color="#ff8c00" />
            <Text> Logout </Text>
          </Cell>
        </TouchableHighlight>

      </View>
    );
  }
}
