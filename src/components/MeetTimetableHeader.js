import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const MainContainer = styled.View``;

const DoubleCell = styled.View`
  width: 100%;
  height: 20px;
  border-color: #232a30;
  border-width: 2px;
  align-items: center;
  justify-content: center;
  border-top-width: 0px;
`;

const MeetTimetableRow = styled.View`
  flex-direction: row;
  width:300px
  height: 30px;
`;

const MeetTimetableCellLeft = styled.View`
  width: 50%;
  height: 30px;
  border-color: #232a30;
  border-width: 2px;
  border-right-width: 1px;
  align-items: center;
  justify-content: center;
  border-top-width: 0px;
`;

const MeetTimetableCellRight = styled.View`
  width: 50%;
  height: 30px;
  border-color: #232a30;
  border-width: 2px;
  border-left-width: 1px;
  border-top-width: 0px;
  align-items: center;
  justify-content: center;
`;

const HeadingText = styled.Text`
  font-size: 15;
  font-weight: bold;
`;

const MeetInput = styled.TextInput`
  flex: 1;
`;

export default class Input extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { title } = this.props;

    return (
      <MainContainer>
        <DoubleCell>
          <HeadingText>{title}</HeadingText>
        </DoubleCell>
        <MeetTimetableRow>
          <MeetTimetableCellLeft>
            <HeadingText>Events</HeadingText>
          </MeetTimetableCellLeft>
          <MeetTimetableCellRight>
            <HeadingText> Time </HeadingText>
          </MeetTimetableCellRight>
        </MeetTimetableRow>
      </MainContainer>
    );
  }
}
