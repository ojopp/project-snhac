import React, { Component } from 'react';
import styled from 'styled-components/native';

const TeamSheetRow = styled.View`
  flex-direction: row;
  width: 100%
  height: 30px;
`;

const TeamSheetSmallCellLeft = styled.View`
  width: 16.65%%;
  border-color: #232a30;
  border-width: 2px;
  border-right-width: 1px;
  border-top-width: 0px;
  align-items: center;
  justify-content: center;
`;

const TeamSheetSmallCellRight = styled.View`
  flex: 1
  border-color: #232a30;
  border-width: 2px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 0px;
  align-items: center;
  justify-content: center;
`;

const TeamSheetBigCellLeft = styled.View`
  width: 33.3%;
  border-color: #232a30;
  border-width: 2px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 0px;
  align-items: center;
  justify-content: center;
`;

const TeamSheetBigCellRight = styled.View`
  width: 33.3%;
  border-color: #232a30;
  border-width: 2px;
  border-left-width: 1px;
  border-top-width: 0px;
  align-items: center;
  justify-content: center;
`;

const EventText = styled.Text`
  font-size: 14;
  font-weight: bold;
`;

export default class TeamSheetHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <TeamSheetRow>
        <TeamSheetSmallCellLeft>
          <EventText> Event </EventText>
        </TeamSheetSmallCellLeft>
        <TeamSheetSmallCellRight>
          <EventText> Time </EventText>
        </TeamSheetSmallCellRight>
        <TeamSheetBigCellLeft>
          <EventText> A String </EventText>
        </TeamSheetBigCellLeft>
        <TeamSheetBigCellRight>
          <EventText> B String</EventText>
        </TeamSheetBigCellRight>
      </TeamSheetRow>
    );
  }
}
