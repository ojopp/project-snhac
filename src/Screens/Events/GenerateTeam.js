import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import getAthleteName from '../../firebase/events/api';

import generateEventList from '../../utils/generateEventList';
import ScoreAthletes from '../../utils/scoreAthletes';
import selectTeam from '../../utils/selectTeam';

import TeamSheetHeader from '../../components/TeamSheetHeader';
import TeamSheetRow from '../../components/TeamSheetRow';

const MainContainer = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
`;

const TeamSheet = styled.View`
  width: 95%;
  align-self: center;
  border-top-width: 2px;
  border-color: #232a30;
`;

const Header = styled.Text`
  align-self: center;
  font-size: 20;
  padding-top: 8px;
  padding-bottom: 4px;
  text-decoration-line: underline;
`;

const View = styled.View``;

export default class GenerateTeamScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      maleTeam: {},
      femaleTeam: {},
      name: '',
    };
  }

  componentWillMount() {
    const { maleAthleteUIDs, femaleAthleteUIDs, event } = this.props.navigation.state.params;

    const maleEventScores = ScoreAthletes(maleAthleteUIDs, event);
    const femaleEventScores = ScoreAthletes(femaleAthleteUIDs, event);
    const eventLists = [];

    for (let eventNo = 0; eventNo < Object.keys(event.time).length; eventNo++) {
      const eventName = Object.keys(event.time)[eventNo].replace('time', '');
      eventLists.push(generateEventList(eventName, maleEventScores));
    }
    selectTeam(event.time, eventLists).then((value) => {
      this.setState({ maleTeam: value });
    });

    for (let eventNo = 0; eventNo < Object.keys(event.time).length; eventNo++) {
      const eventName = Object.keys(event.time)[eventNo].replace('time', '');
      eventLists.push(generateEventList(eventName, femaleEventScores));
    }
    selectTeam(event.time, eventLists).then((value) => {
      this.setState({ femaleTeam: value });
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <MainContainer scroll="enabled">
        <Header> Men's Team </Header>
        <TeamSheet>
          <TeamSheetHeader />
          <View>
            {this.state.maleTeam
              ? Object.keys(this.state.maleTeam).map(item => (
                <TeamSheetRow
                  key={item}
                  eventName={item}
                  eventTime={this.state.maleTeam[item].time}
                  aStringAthleteuid={this.state.maleTeam[item].athlete}
                />
                ))
              : null}
          </View>
        </TeamSheet>
        <Header> Women's Team </Header>
        <TeamSheet>
          <TeamSheetHeader />
          <View>
            {this.state.team
              ? Object.keys(this.state.femaleTeam).map(item => (
                <TeamSheetRow
                  key={item}
                  eventName={item}
                  eventTime={this.state.femaleTeam[item].time}
                  aStringAthleteuid={this.state.femaleTeam[item].athlete}
                />
                ))
              : null}
          </View>
        </TeamSheet>
      </MainContainer>
    );
  }
}
