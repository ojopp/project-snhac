import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DP from '../../components/DisplayPicture';

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
  flex:1;
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
  margin-left: 64px;
`;

const TabNavButton = styled.TouchableOpacity``;

const PerformanceTable = styled.FlatList`
  margin-horizontal: 12px;
  margin-top: 18px;
`;

const TableHeader = styled.View`
  flex: 1;
  height: 25px;
  flex-direction: row;
  background-color: #ff8c00;
  align-items: center;
  border-top-left-radius: 6;
  border-top-right-radius: 6;
`;

const TableRow = styled.View`
  flex: 1;
  height: 25px;
  justify-content: center;
  padding-left: 4px;
  flex-direction: row;
  align-items: center;
`;

const TableText = styled.Text`
  flex: 1;
  font-size: 16;
`;

const HeaderText = styled.Text`
  flex:1;
  font-size: 18;
  background-color: transparent;
`;

const TableRowItem = ({ data }) => (
  (data.index % 2 === 0 ?
    <TableRow style={{ backgroundColor: '#232A3055' }}>
      <TableText >{data.item.event}</TableText>
      <TableText >{data.item.pb}</TableText>
      <TableText >{data.item.sb}</TableText>
      <TableText >{data.item.target}</TableText>
    </TableRow> :
    <TableRow style={{ backgroundColor: '#232A3022' }}>
      <TableText >{data.item.event}</TableText>
      <TableText >{data.item.pb}</TableText>
      <TableText >{data.item.sb}</TableText>
      <TableText >{data.item.target}</TableText>
    </TableRow>)
);

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ screenProps, navigation }) => ({
    title: screenProps.name,
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
          <DPContainer >
            <DP />
          </DPContainer>
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
        <PerformanceTable
          ListHeaderComponent={
            <TableHeader>
              <HeaderText> Event </HeaderText>
              <HeaderText> PB </HeaderText>
              <HeaderText> SB </HeaderText>
              <HeaderText> Target </HeaderText>
            </TableHeader>
            }
          data={[
            { event: '60m', pb: '7.73', sb: '7.73', target: '7.50' },
            { event: '100m', pb: '11.94', sb: '12.04', target: '11.75' },
            { event: '400m', pb: '58.0', sb: '', target: '57.00' },
            { event: '1000m', pb: '3:13.16', sb: '3:13.16', target: '3:10.00' },
            { event: '1500m', pb: '5:16.70', sb: '', target: '5:00.00' },
            { event: '60HU20M', pb: '8.63', sb: '8.63', target: '8.40' },
            { event: '110HU20M', pb: '15.52', sb: '', target: '15.00' },
            { event: 'HJ', pb: '1.88', sb: '1.80', target: '1.90' },
            { event: 'PV', pb: '4.22', sb: '4.22', target: '4.40' },
            { event: 'LJ', pb: '6.17', sb: '6.04', target: '6.30' },
          ]}
          renderItem={data => <TableRowItem data={data} />}
        />
      </MainContainer>
    );
  }
}
