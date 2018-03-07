import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

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
  flex: 1;
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

const AthleteName = styled.Text`
  font-size: 12;
`;

export default class Input extends Component {
  static propTypes = {
    eventName: PropTypes.string,
    eventTime: PropTypes.string,
    aStringAthlete: PropTypes.string,
    bStringAthlete: PropTypes.string,
  };

  static defaultProps = {
    aStringAthlete: 'no athlete',
    bStringAthlete: 'no athlete',
  };

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      eventName, eventTime, aStringAthlete, bStringAthlete,
    } = this.props;

    return (
      <TeamSheetRow>
        <TeamSheetSmallCellLeft>
          <EventText>{eventName}</EventText>
        </TeamSheetSmallCellLeft>
        <TeamSheetSmallCellRight>
          <EventText>{eventTime}</EventText>
        </TeamSheetSmallCellRight>
        <TeamSheetBigCellLeft>
          <AthleteName>{aStringAthlete}</AthleteName>
        </TeamSheetBigCellLeft>
        <TeamSheetBigCellRight>
          <AthleteName>{bStringAthlete}</AthleteName>
        </TeamSheetBigCellRight>
      </TeamSheetRow>
    );
  }
}
