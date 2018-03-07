import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { createEvent } from '../../firebase/events/api';
import Input from '../../components/Input';
import MeetTimetableHeader from '../../components/MeetTimetableHeader';
import MeetTimetableRow from '../../components/MeetTimetableRow';

const MainContainer = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
`;

const SubContainer = styled.KeyboardAvoidingView``;

const EventInformation = styled.TextInput`
  width: 300px;
  height: 300px;
  font-size: 16px;
  margin-top: 10px;
  color: #232a30ee;
  padding-left: 12px;
  align-self: center;
  border-radius: 18px;
  border-color: #232a30;
  border-width: 2px;
  background-color: #232a3000;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  width: 300px;
  border-radius: 20px;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 15px;
  background-color: #ff8c00;
`;

const MeetTimetable = styled.View`
  flex: 1;
  width: 300px;
  height: 700px;
  align-self: center;
  margin-top: 10px;
  border-top-width: 2px;
  border-color: #232a30;
`;

const ButtonText = styled.Text``;

export default class CreateEventScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      date: '',
      id: Date(),
      eventInfo: '',
      location: '',
      time100mMale: '',
      time200mMale: '',
      time400mMale: '',
      time800mMale: '',
      time1500mMale: '',
      time110mHMale: '',
      timeHJMale: '',
      timeLJMale: '',
      timePVMale: '',
      timeTJMale: '',
      time100mFemale: '',
      time200mFemale: '',
      time400mFemale: '',
      time800mFemale: '',
      time1500mFemale: '',
      time110mHFemale: '',
      timeHJFemale: '',
      timeLJFemale: '',
      timePVFemale: '',
      timeTJFemale: '',
    };
  }

  checkThenCreateEvent = () => {};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <MainContainer scroll="enabled">
        <SubContainer behavior="padding">
          <Input
            placeholder="Event name"
            onChangeText={value => this.setState({ eventName: value })}
            value={this.state.eventName}
            autoCapitalize="words"
          />
          <Input
            placeholder="Location"
            onChangeText={value => this.setState({ location: value })}
            value={this.state.location}
            autoCapitalize="sentences"
          />
          <Input
            placeholder="Date - YYMMDD"
            onChangeText={value => this.setState({ date: value })}
            value={this.state.date}
          />
          <EventInformation
            placeholderTextColor="#232A3090"
            underlineColorAndroid="transparent"
            placeholder="Event information"
            multiline
            onChangeText={value => this.setState({ eventInfo: value })}
            value={this.state.eventInfo}
          />
          <MeetTimetable>
            <MeetTimetableHeader title="Men's Timetable" />
            <MeetTimetableRow
              eventName="100m"
              onChangeText={value => this.setState({ time100mMale: value })}
              value={this.state.time100mMale}
            />
            <MeetTimetableRow
              eventName="200m"
              onChangeText={value => this.setState({ time200mMale: value })}
              value={this.state.time200mMale}
            />
            <MeetTimetableRow
              eventName="400m"
              onChangeText={value => this.setState({ time400mMale: value })}
              value={this.state.time400mMale}
            />
            <MeetTimetableRow
              eventName="800m"
              onChangeText={value => this.setState({ time800mMale: value })}
              value={this.state.time800mMale}
            />
            <MeetTimetableRow
              eventName="1500m"
              onChangeText={value => this.setState({ time1500mMale: value })}
              value={this.state.time1500mMale}
            />
            <MeetTimetableRow
              eventName="110mH"
              onChangeText={value => this.setState({ time110mHMale: value })}
              value={this.state.time110mHMale}
            />
            <MeetTimetableRow
              eventName="HJ"
              onChangeText={value => this.setState({ timeHJMale: value })}
              value={this.state.timeHJMale}
            />
            <MeetTimetableRow
              eventName="LJ"
              onChangeText={value => this.setState({ timeLJMale: value })}
              value={this.state.timeLJMale}
            />
            <MeetTimetableRow
              eventName="PV"
              onChangeText={value => this.setState({ timePVMale: value })}
              value={this.state.timePVMale}
            />
            <MeetTimetableRow
              eventName="TJ"
              onChangeText={value => this.setState({ timeTJMale: value })}
              value={this.state.timeTJMale}
            />
            <MeetTimetableHeader title="Women's Timetable" />
            <MeetTimetableRow
              eventName="100m"
              onChangeText={value => this.setState({ time100mFemale: value })}
              value={this.state.time100mFemale}
            />
            <MeetTimetableRow
              eventName="200m"
              onChangeText={value => this.setState({ time200mFemale: value })}
              value={this.state.time200mFemale}
            />
            <MeetTimetableRow
              eventName="400m"
              onChangeText={value => this.setState({ time400mFemale: value })}
              value={this.state.time400mFemale}
            />
            <MeetTimetableRow
              eventName="800m"
              onChangeText={value => this.setState({ time800mFemale: value })}
              value={this.state.time800mFemale}
            />
            <MeetTimetableRow
              eventName="1500m"
              onChangeText={value => this.setState({ time1500mFemale: value })}
              value={this.state.time1500mFemale}
            />
            <MeetTimetableRow
              eventName="110mH"
              onChangeText={value => this.setState({ time110mHFemale: value })}
              value={this.state.time110mHFemale}
            />
            <MeetTimetableRow
              eventName="HJ"
              onChangeText={value => this.setState({ timeHJFemale: value })}
              value={this.state.timeHJFemale}
            />
            <MeetTimetableRow
              eventName="LJ"
              onChangeText={value => this.setState({ timeLJFemale: value })}
              value={this.state.timeLJFemale}
            />
            <MeetTimetableRow
              eventName="PV"
              onChangeText={value => this.setState({ timePVFemale: value })}
              value={this.state.timePVFemale}
            />
            <MeetTimetableRow
              eventName="TJ"
              onChangeText={value => this.setState({ timeTJFemale: value })}
              value={this.state.timeTJFemale}
            />
          </MeetTimetable>

          <Button
            onPress={() => {
              createEvent(
                this.state.eventName,
                this.state.date,
                this.state.eventInfo,
                this.state.location,
                this.state.id,
                this.state.time100mMale,
                this.state.time200mMale,
                this.state.time400mMale,
                this.state.time800mMale,
                this.state.time1500mMale,
                this.state.time110mHMale,
                this.state.timeHJMale,
                this.state.timeLJMale,
                this.state.timePVMale,
                this.state.timeTJMale,
                this.state.time100mFemale,
                this.state.time200mFemale,
                this.state.time400mFemale,
                this.state.time800mFemale,
                this.state.time1500mFemale,
                this.state.time110mHFemale,
                this.state.timeHJFemale,
                this.state.timeLJFemale,
                this.state.timePVFemale,
                this.state.timeTJFemale,
              );
              this.props.navigation.goBack();
            }}
          >
            <ButtonText> Create Event </ButtonText>
          </Button>
        </SubContainer>
      </MainContainer>
    );
  }
}
