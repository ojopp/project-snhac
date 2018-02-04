import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getEvents } from '../../firebase/events/api';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Events = styled.SectionList``;

const EventButton = styled.TouchableHighlight``;

const EventTitle = styled.Text`
  font-size: 18;
  padding-vertical: 0px;
  padding-left: 10px;
`;

const EventQuickInfo = styled.Text`
  padding-left: 10px;
  padding-bottom: 2px;
`;

const SectionHeader = styled.Text`
  padding-vertical: 2;
  padding-horizontal: 10;
  font-size: 14;
  font-weight: bold;
  background-color: rgba(247, 247, 247, 1);
`;

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="event" size={34} color={tintColor} />,
  };

  componentDidMount() {
    getEvents((snap) => {
      this.setState({
        events: snap,
      });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Events
          sections={[
            { title: 'January', data: ['EA Senior & U20 CE', 'EA Age group championships'] },
            { title: 'February', data: ['London Indoor Games'] },
            { title: 'April', data: ['Youth Development League'] },
          ]}
          renderItem={({ item }) => (
            <EventButton underlayColor="#232A3030" onPress={() => navigate('EventDetailAthlete')}>
              <View>
                <EventTitle>{item}</EventTitle>
                <EventQuickInfo>28th - Stevenage </EventQuickInfo>
              </View>
            </EventButton>
          )}
          renderSectionHeader={({ section }) => <SectionHeader>{section.title}</SectionHeader>}
          keyExtractor={(item, index) => index}
        />
      </Container>
    );
  }
}
