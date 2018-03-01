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

const Athletes = styled.Text`
  font-size: 16;
  padding: 1px;
`;

export default class EventDetailAthleteScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  checkThenCreateEvent = () => {};

  render() {
    const { navigate } = this.props.navigation;

    return (
      <MainContainer scroll="enabled">
        <SubContainer>
          <Coloum>
            <Header> Male </Header>
            <Athletes> {this.props.navigation.state.params.AttendingAthletesMale[0]} </Athletes>
          </Coloum>
          <Coloum>
            <Header> Female </Header>
          </Coloum>
        </SubContainer>
      </MainContainer>
    );
  }
}
