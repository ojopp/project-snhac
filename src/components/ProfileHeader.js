import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DP from './DisplayPicture';

const SubContainer = styled.View`
  height: 108px;
  flex-direction: row;
`;

const RightContainer = styled.View`
  flex: 1;
`;

const DPContainer = styled.View`
  height: 108px;
  width: 108px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 54px;
  position: absolute;
  z-index: 2;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  margin-left: 118px;
`;

const Info = styled.View`
  height: 72px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.Text`
  color: #000000;
  padding: 5px;
  font-weight: bold;
`;

const TabNavContainer = styled.View`
  height: 36px;
  flex: 1;
  background-color: #f0f0f0;
  margin-left: 64px;
  flex-direction: row;
  padding-left: 54px;
  align-items: center;
`;

const TabNavButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

const TabNavButtonText = styled.Text``;

export default class Logo extends Component {
  static propTypes = {
    ageGroup: PropTypes.string,
    leadCoach: PropTypes.string,
  };

  static defaultProps = {
    ageGroup: 'unknown',
    leadCoach: 'unknown',
  };

  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { ageGroup, leadCoach } = this.props;

    return (
      <SubContainer>
        <DPContainer>
          <DP />
        </DPContainer>
        <RightContainer>
          <InfoContainer>
            <Info>
              <InfoText>Age Group</InfoText>
              <InfoText>{ageGroup}</InfoText>
            </Info>
            <Info>
              <InfoText>Lead Coach</InfoText>
              <InfoText>{leadCoach}</InfoText>
            </Info>
          </InfoContainer>
          <TabNavContainer>
            <TabNavButton>
              <Icon name="reorder" size={24} color="#232A30" />
            </TabNavButton>
            <TabNavButton>
              <Icon name="library-books" size={24} color="#232A30" />
            </TabNavButton>
            <TabNavButton>
              <Icon name="trending-up" size={24} color="#232A30" />
            </TabNavButton>
          </TabNavContainer>
        </RightContainer>
      </SubContainer>
    );
  }
}
