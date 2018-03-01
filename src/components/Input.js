import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextInput = styled.TextInput`
  width: 300px;
  height: 36px;
  font-size: 16px;
  margin-top: 10px;
  color: #232a30ee;
  padding-horizontal: 12px;
  align-self: center;
  border-radius: 18px;
  border-color: #232a30;
  border-width: 2px;
  background-color: #232a3000;
`;

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    underlineColorAndroid: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    autoCapitalize: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    keyboardType: PropTypes.string,
    autoCorrect: PropTypes.bool,
  };

  static defaultProps = {
    autoCorrect: false,
    autoCapitalize: 'none',
    secureTextEntry: false,
    keyboardType: 'default',
    placeholderTextColor: '#232A3090',
    underlineColorAndroid: 'transparent',
  };

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      placeholder,
      placeholderTextColor,
      onChangeText,
      value,
      secureTextEntry,
      underlineColorAndroid,
      autoCorrect,
      autoCapitalize,
      keyboardType,
    } = this.props;

    return (
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid={underlineColorAndroid}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
    );
  }
}
