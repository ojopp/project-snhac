import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import firebaseApp from '../../firebase/firebaseConfig';
import { getAttendance, addAttendee, removeAttendee } from '../../firebase/events/api';
import monthParser from '../../utils/monthParser';
import dateSuffix from '../../utils/dateSuffix';
import eliminateZero from '../../utils/eliminateZero';

const MainContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const Header = styled.View`
  padding-left: 5px;
  height: 80px;
`;

const EventTitle = styled.Text`
  font-size: 22;
  padding-top: 5px;
`;

const EventSub = styled.Text`
  font-size: 16;
  padding-vertical: 2px;
`;

const NotesContainer = styled.ScrollView`
  padding: 10px;
  flex: 1;
`;

const AnimatedNotesContainer = Animated.createAnimatedComponent(NotesContainer);

const EventNotes = styled.Text`
  flex: 1;
  margin-bottom: 10px;
`;

const BottomContainer = styled.View`
  justify-content: flex-end;
`;

const BusSwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1;
  border-color: #232a3030;
  height: 40px;
  justify-content: center;
  width: 100%;
`;

const BusContainer = styled.View`
  background-color: #ffffff;
  align-items: center;
  height: 70px;
  position: absolute;
  align-self: center;
  width: 100%;
`;

const AnimatedBusContainer = Animated.createAnimatedComponent(BusContainer);

const BusSwitchText = styled.Text`
  color: #000000;
  font-size: 17;
  margin-right: 40px;
`;

const BusSwitch = styled.Switch`
  justify-content: flex-end;
`;

const AttendanceContainer = styled.View`
  align-items: flex-end;
  flex-direction: row;
  padding: 5px;
  border-top-width: 1;
  border-color: #232a3030;
  height: 60px;
  background-color: #ffffff;
`;

const AttendanceButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const AnimatedAttendanceButton = Animated.createAnimatedComponent(AttendanceButton);

const AttendanceText = styled.Text`
  color: #000000;
  font-size: 17;
`;

export default class EventDetailAthleteScreen extends React.Component {
  static propTypes = {
    coachTime: PropTypes.string,
    coachText: PropTypes.string,
  };

  static defaultProps = {
    coachTime: 'unknown',
    coachText: 'The coach will be leaving from ridlins at ',
  };

  state = {
    teamBus: 'false',
    slideUp: new Animated.Value(-10),
    slideMargin: new Animated.Value(0),
    notGoingOpacity: new Animated.Value(1),
    goingOpacity: new Animated.Value(1),
  };

  componentWillMount() {
    getAttendance(this.props.navigation.state.params.item.id, (snap) => {
      console.warn(snap);
      if (snap) {
        this.canGo();
      } else {
        this.notGoing();
      }
    });
  }

  canGo = () => {
    Animated.parallel([
      // Animated.timing(this.state.slideUp, {
      //   toValue: 60,
      //   duration: 100,
      // }),
      // Animated.timing(this.state.slideMargin, {
      //   toValue: 70,
      //   duration: 100,
      // }),
      Animated.timing(this.state.notGoingOpacity, {
        toValue: 0.6,
        duration: 100,
      }),
      Animated.timing(this.state.goingOpacity, {
        toValue: 1,
        duration: 100,
      }),
    ]).start();
  };

  notGoing = () => {
    Animated.parallel([
      // Animated.timing(this.state.slideUp, {
      //   toValue: -10,
      //   duration: 100,
      // }),
      // Animated.timing(this.state.slideMargin, {
      //   toValue: 0,
      //   duration: 100,
      // }),
      Animated.timing(this.state.notGoingOpacity, {
        toValue: 1,
        duration: 100,
      }),
      Animated.timing(this.state.goingOpacity, {
        toValue: 0.6,
        duration: 100,
      }),
    ]).start();
  };

  // teamBusBoolean() {
  //   if ((this.state.teamBus = 'true')) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    let { coachTime, coachText } = this.props;

    coachTime === 'unknown'
      ? (coachText = 'The coach time is currently ')
      : (coachText = 'The coach will be leavimng form Ridlins at ');

    return (
      <MainContainer>
        <Header>
          <EventTitle> {this.props.navigation.state.params.item.eventName} </EventTitle>
          <EventSub>
            {' '}
            {eliminateZero(this.props.navigation.state.params.item.date[4])}
            {''}
            {this.props.navigation.state.params.item.date[5]}
            {dateSuffix(this.props.navigation.state.params.item.date[4] +
                this.props.navigation.state.params.item.date[5])}{' '}
            {monthParser(this.props.navigation.state.params.item.date[2] +
                this.props.navigation.state.params.item.date[3])}
          </EventSub>
          <EventSub> {this.props.navigation.state.params.item.location} </EventSub>
        </Header>
        <AnimatedNotesContainer style={{ marginBottom: this.state.slideMargin }}>
          <EventNotes>{this.props.navigation.state.params.item.information}</EventNotes>
        </AnimatedNotesContainer>
        <BottomContainer>
          <AnimatedBusContainer style={{ bottom: this.state.slideUp }}>
            <BusSwitchContainer>
              <BusSwitchText> Taking the team coach? </BusSwitchText>
              <BusSwitch />
            </BusSwitchContainer>
            <EventSub style={{ alignSelf: 'center' }}>
              {coachText} {coachTime}
            </EventSub>
          </AnimatedBusContainer>
          <AttendanceContainer>
            <AnimatedAttendanceButton
              style={{ backgroundColor: '#00C853', opacity: this.state.goingOpacity }}
              onPress={() => {
                console.warn(this.state.teamBus);
                addAttendee(this.props.navigation.state.params.item.id, this.state.teamBus);
                this.canGo();
              }}
            >
              <AttendanceText> Can go </AttendanceText>
            </AnimatedAttendanceButton>
            <AnimatedAttendanceButton
              style={{ backgroundColor: '#ff0000', opacity: this.state.notGoingOpacity }}
              onPress={() => {
                removeAttendee(this.props.navigation.state.params.item.id);
                this.notGoing();
              }}
            >
              <AttendanceText> Can't go </AttendanceText>
            </AnimatedAttendanceButton>
          </AttendanceContainer>
        </BottomContainer>
      </MainContainer>
    );
  }
}
