import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

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
    slideUp: new Animated.Value(-10),
    slideMargin: new Animated.Value(0),
    unselectedOpacity: new Animated.Value(1),
  };

  slide = () => {
    Animated.parallel([
      Animated.timing(this.state.slideUp, {
        toValue: 60,
        duration: 100,
      }),
      Animated.timing(this.state.slideMargin, {
        toValue: 70,
        duration: 100,
      }),
      Animated.timing(this.state.unselectedOpacity, {
        toValue: 0.6,
        duration: 100,
      }),
    ]).start();
  };

  render() {
    let { coachTime, coachText } = this.props;

    coachTime === 'unknown'
      ? (coachText = 'The coach time is currently ')
      : (coachText = 'The coach will be leavimng form Ridlins at ');

    return (
      <MainContainer>
        <Header>
          <EventTitle> Youth Development League </EventTitle>
          <EventSub> Saturday 28th April </EventSub>
          <EventSub> Stevenage </EventSub>
        </Header>
        <AnimatedNotesContainer style={{ marginBottom: this.state.slideMargin }}>
          <EventNotes>
            The SAL is open to all athletes u17 upwards including veterans. We will need an A and B
            string athlete for each event and there are also non scoring opportunities available for
            every event. You will also need to be a first claim or higher claim member to compete in
            the match.
          </EventNotes>
          <EventNotes>
            For the longer distance races the distances vary at each match. At this match there will
            be a 3000 for Women and a 5000m for Men. There will be a 2000m Steeple chase for men and
            a 2000m Steeple Chase for Women.
          </EventNotes>
          <EventNotes>
            After 2 matches we are 2nd in the league by half a point. We will need to field a full
            team in order to keep this position and hopefully get promoted at the end of the season!
            So it would be great to see as many of you as possible..
          </EventNotes>
          <EventNotes>
            Please let your team manager know as soon as possible if you are available to compete .
            It is essential that you let us know even if you are unable to compete. We will need to
            have received all replies by Wednesday 14th April to so we are able to write the team
            sheets in time.
          </EventNotes>
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
            <AttendanceButton style={{ backgroundColor: '#00C853' }} onPress={() => this.slide()}>
              <AttendanceText> Can go </AttendanceText>
            </AttendanceButton>
            <AnimatedAttendanceButton
              style={{ backgroundColor: '#ff0000', opacity: this.state.unselectedOpacity }}
            >
              <AttendanceText> Can't go </AttendanceText>
            </AnimatedAttendanceButton>
          </AttendanceContainer>
        </BottomContainer>
      </MainContainer>
    );
  }
}
