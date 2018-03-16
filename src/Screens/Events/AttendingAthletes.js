import React from 'react';
import styled from 'styled-components/native';

import { createEvent } from '../../firebase/events/api';
import Input from '../../components/Input';
import MeetTimetableRow from '../../components/MeetTimetableRow';

const MainContainer = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
`;

const SubContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Coloum = styled.View`
  width: 50%;
  align-items: center;
`;

const Header = styled.Text`
  font-size: 20;
  padding-top: 8px;
  text-decoration-line: underline;
`;

const Athletes = styled.View``;

const Athlete = styled.Text`
  font-size: 16;
  padding: 1px;
`;

export default class AttendingAthleteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AttendingAthletesMale: props.navigation.state.params.AttendingAthletesMale,
      AttendingAthletesFemale: props.navigation.state.params.AttendingAthletesFemale,
    };
  }

  checkThenCreateEvent = () => {};

  render() {
    const { navigate } = this.props.navigation;

    return (
      <MainContainer scroll="enabled">
        <SubContainer>
          <Coloum>
            <Header> Men </Header>
            <Athletes>
              {this.state.AttendingAthletesMale.map(athlete => (
                <Athlete key={athlete}> {athlete} </Athlete>
              ))}
            </Athletes>
          </Coloum>
          <Coloum>
            <Header> Women </Header>
            <Athletes>
              {this.state.AttendingAthletesFemale.map(athlete => (
                <Athlete key={athlete}> {athlete} </Athlete>
              ))}
            </Athletes>
          </Coloum>
        </SubContainer>
      </MainContainer>
    );
  }
}
