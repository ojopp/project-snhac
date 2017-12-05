import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Events = styled.SectionList`

`;

const EventButton = styled.TouchableHighlight`
  
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
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
    tabBarIcon: ({ tintColor }) => (
      <Icon name="event" size={34} color={tintColor} />
    ),
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} >
        <Events
          sections={[
            { title: 'January', data: ['EA Senior & U20 CE', 'EA Age group championships'] },
            { title: 'February', data: ['London Indoor Games'] },
          ]}
          renderItem={({ item }) => (
            <EventButton
              underlayColor="#232A3030"
              onPress={() => navigate('EventDetail')}
            >
              <Text style={styles.item}>{item}</Text>
            </EventButton>
            )
          }
          renderSectionHeader={({ section }) =>
            <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
