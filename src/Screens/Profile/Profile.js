import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsButton = styled.TouchableOpacity`
  padding-right: 8px;
`;

const MainContainer = styled.View`
  background-color: #ffffff;
  flex:1;
`;

const SubContainer = styled.View`
  height: 108px;
  flex-direction: row;
`;

const RightContainer = styled.View`
  flex:1
`;

const DPContainer = styled.View`
  height: 108px;
  width: 108px;
  background-color: #00ff0090;
  margin-left: 20px;
`;

const InfoContainer = styled.View`
  flex-direction: row;
`;

const Info = styled.View`
  height: 72px;
  flex:1;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.Text`
  color: #000000;
  padding:5px;
  font-weight: bold;
`;

const TabNavContainer = styled.View`
  height: 36px;
  flex:1;
  background-color: #f0f0f0;
`;

const TabNavButton = styled.TouchableOpacity``;

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ screenProps, navigation }) => ({
    headerRight: (
      <SettingsButton
        onPress={() => navigation.navigate('Settings')}
      >
        <Icon name="settings" size={24} color="#232A30" />
      </SettingsButton>
    ),
  })

  render() {
    return (
      <MainContainer>
        <SubContainer>
          <DPContainer />
          <RightContainer>
            <InfoContainer>
              <Info>
                <InfoText>
                  Age Group
                </InfoText>
                <InfoText>
                  U20
                </InfoText>
              </Info>
              <Info>
                <InfoText>
                  Lead Coach
                </InfoText>
                <InfoText>
                  Norma Harris
                </InfoText>
              </Info>
            </InfoContainer>
            <TabNavContainer />
          </RightContainer>
        </SubContainer>
      </MainContainer>
    );
  }
}
