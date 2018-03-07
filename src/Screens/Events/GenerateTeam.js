import React from 'react';
import styled from 'styled-components/native';

import { getAthletesEventScores, getEventTimes } from '../../firebase/events/api';
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

export default class GenerateTeamScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.ScoreAthletes();
  }

  convertTimeToMins(time) {
    const hours = time[0] + time[1];
    const mins = time[3] + time[4];
    return parseInt(hours * 60 + parseInt(mins));
  }

  findClashes(timetable) {
    const eventObjects = [];
    for (let i = 0; i < Object.keys(timetable).length; i++) {
      const mainPreTime = this.convertTimeToMins(timetable[Object.keys(timetable)[i]]) - 50;
      const mainPostTime = this.convertTimeToMins(timetable[Object.keys(timetable)[i]]) + 50;
      const eventClashes = [];
      for (let x = 0; x < Object.keys(timetable).length; x++) {
        if (Object.keys(timetable)[i] !== Object.keys(timetable)[x]) {
          const checkTime = this.convertTimeToMins(timetable[Object.keys(timetable)[x]]);
          if (mainPreTime < checkTime && mainPostTime > checkTime) {
            eventClashes.push(Object.keys(timetable)[x]);
          }
        }
      }
      eventObjects.push({
        event: Object.keys(timetable)[i],
        clashes: eventClashes,
      });
    }
    return eventObjects;
  }

  ScoreAthletes() {
    // object = [
    //   {
    //     uid: 'uid',
    //     events: [{
    //       eventName: 'eventName',
    //       eventScore: 'eventscore'
    //     }]
    //   }
    // ]
    const { maleAthleteUIDs, femaleAthleteUIDs, event } = this.props.navigation.state.params;
    const maleEventScores = [];
    const femaleEventScores = [];
    const eventClashes = [];

    // Gets initial scores and creates the array of male athlete objects
    for (let athlete = 0; athlete < maleAthleteUIDs.length; athlete++) {
      getAthletesEventScores(maleAthleteUIDs[athlete], (athletesEventScores) => {
        maleEventScores.push(athletesEventScores);
      });
    }
    // Gets initial scores and creates the array of female athlete objects
    for (let athlete = 0; athlete < femaleAthleteUIDs.length; athlete++) {
      getAthletesEventScores(femaleAthleteUIDs[athlete], (athletesEventScores) => {
        femaleEventScores.push(athletesEventScores);
      });
    }

    getEventTimes(event.id, timetable => eventClashes.push(this.findClashes(timetable)));
    console.warn(eventClashes);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <MainContainer scroll="enabled">
        <Header> Men's Team </Header>
        <TeamSheet>
          <TeamSheetHeader />
          <TeamSheetRow
            eventName="100m"
            eventTime="10:00"
            aStringAthlete="Oscar Jopp"
            bStringAthlete="Peter Keefe"
          />
        </TeamSheet>
      </MainContainer>
    );
  }
}
