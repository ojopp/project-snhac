import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { getAthleteName } from '../firebase/events/api';

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
    aStringAthleteuid: PropTypes.string,
    bStringAthleteuid: PropTypes.string,
  };

  static defaultProps = {
    aStringAthleteuid: 'no athlete',
    bStringAthleteuid: 'no athlete',
  };

  constructor() {
    super();

    this.state = {
      aStringAthleteName: 'no athlete',
      bStringAthleteName: 'no athlete',
    };
  }

  componentDidMount() {
    const { aStringAthleteuid, bStringAthleteuid } = this.props;

    if (aStringAthleteuid !== 'no athlete') {
      getAthleteName(aStringAthleteuid, (athlete) => {
        this.setState({
          aStringAthleteName: athlete[0],
        });
      });
    }

    if (bStringAthleteuid !== 'no athlete') {
      getAthleteName(bStringAthleteuid, (athlete) => {
        this.setState({
          aStringAthleteName: athlete[0],
        });
      });
    }
  }

  render() {
    const { eventName, eventTime } = this.props;

    return (
      <TeamSheetRow>
        <TeamSheetSmallCellLeft>
          <EventText>{eventName}</EventText>
        </TeamSheetSmallCellLeft>
        <TeamSheetSmallCellRight>
          <EventText>{eventTime}</EventText>
        </TeamSheetSmallCellRight>
        <TeamSheetBigCellLeft>
          <AthleteName>{this.state.aStringAthleteName}</AthleteName>
        </TeamSheetBigCellLeft>
        <TeamSheetBigCellRight>
          <AthleteName>{this.state.bStringAthleteName}</AthleteName>
        </TeamSheetBigCellRight>
      </TeamSheetRow>
    );
  }
}
