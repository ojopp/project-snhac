import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TouchButton = styled.TouchableOpacity`
    height: 36px;
    width: 100px;
    align-self: center;
    background-color: #232A30dd;
    border-radius: 18px;
    align-items: center;
    margin-top: 4px;
`;

const Text = styled.Text`
    flex: 1;
    color: #ffffff;
    padding-top: 9px;
    font-size: 16;
`;

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {

  };

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const {
      onPress,
      text,
    } = this.props;

    return (
      <TouchButton
        onPress={() => onPress()}
      >
        <Text>
          {text}
        </Text>
      </TouchButton>
    );
  }
}
