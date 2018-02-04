import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Schedule from '../../assets/Dec-Feb.png';

const MainContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Training = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 40%;
`;

const SectionHeader = styled.Text`
  padding-vertical: 2;
  padding-horizontal: 10;
  font-size: 14;
  font-weight: bold;
  background-color: rgba(247, 247, 247, 1);
`;

const ImageButton = styled.TouchableOpacity``;

const TrainingSchedule = styled.SectionList``;

export default class TrainingScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="fitness-center" size={34} color={tintColor} />,
  };

  render() {
    return (
      <MainContainer>
        <TrainingSchedule
          sections={[{ title: '31 Dec - 8 Feb', data: [{ Schedule }] }]}
          renderItem={({ item }) => (
            <ImageButton underlayColor="#232A3030" onPress={() => navigate('EventDetailAthlete')}>
              <Training source={item} />
            </ImageButton>
          )}
          renderSectionHeader={({ section }) => <SectionHeader>{section.title}</SectionHeader>}
          keyExtractor={(item, index) => index}
        />
      </MainContainer>
    );
  }
}
