import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const MeetTimetableRow = styled.View`
  flex-direction: row;
  width:300px
  height: 30px;
`;

const MeetTimetableCellLeft = styled.View`
  width: 50%;
  border-color: #232a30;
  border-width: 2px;
  border-right-width: 1px;
  padding-horizontal: 12px;
  align-items: center;
  justify-content: center;
  border-top-width: 0px;
`;

const MeetTimetableCellRight = styled.View`
  width: 50%;
  border-color: #232a30;
  border-width: 2px;
  border-left-width: 1px;
  border-top-width: 0px;
  padding-horizontal: 12px;
  align-items: center;
  justify-content: center;
`;

const MeetText = styled.Text``;

const MeetInput = styled.TextInput`
  flex: 1;
`;

export default class Input extends Component {
  static propTypes = {
    eventName: PropTypes.string,
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
      eventName,
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
      <MeetTimetableRow>
        <MeetTimetableCellLeft>
          <MeetText>{eventName}</MeetText>
        </MeetTimetableCellLeft>
        <MeetTimetableCellRight>
          <MeetInput
            onChangeText={onChangeText}
            value={value}
            placeholder="00:00"
            placeholderTextColor={placeholderTextColor}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
            underlineColorAndroid={underlineColorAndroid}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
          />
        </MeetTimetableCellRight>
      </MeetTimetableRow>
      // <TextInput
      //   onChangeText={onChangeText}
      //   value={value}
      //   placeholder={placeholder}
      //   placeholderTextColor={placeholderTextColor}
      //   autoCorrect={autoCorrect}
      //   secureTextEntry={secureTextEntry}
      //   underlineColorAndroid={underlineColorAndroid}
      //   autoCapitalize={autoCapitalize}
      //   keyboardType={keyboardType}
      // />
    );
  }
}
