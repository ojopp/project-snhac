import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileHeader from '../../components/ProfileHeader';

const SettingsButton = styled.TouchableOpacity`
  padding-right: 8px;
`;

const MainContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const PerformanceTable = styled.FlatList`
  margin-horizontal: 12px;
  margin-top: 18px;
  flex: 1;
`;

const TableHeader = styled.View`
  height: 25px;
  width: 100%;
  flex-direction: row;
  background-color: #ff8c00;
  align-items: center;
  border-top-left-radius: 6;
  border-top-right-radius: 6;
`;

const TableRow = styled.View`
  height: 25px;
  width: 100%;
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
  flex: 1;
  font-size: 18;
  background-color: transparent;
`;

const TableRowItem = ({ data }) =>
  (data.index % 2 === 0 ? (
    <TableRow style={{ backgroundColor: '#232A3055' }}>
      <TableText>{data.item.event}</TableText>
      <TableText>{data.item.pb}</TableText>
      <TableText>{data.item.sb}</TableText>
      <TableText>{data.item.target}</TableText>
    </TableRow>
  ) : (
    <TableRow style={{ backgroundColor: '#232A3022' }}>
      <TableText>{data.item.event}</TableText>
      <TableText>{data.item.pb}</TableText>
      <TableText>{data.item.sb}</TableText>
      <TableText>{data.item.target}</TableText>
    </TableRow>
  ));

const tableData = [
  {
    event: '60m',
    pb: '7.73',
    sb: '7.73',
    target: '7.50',
  },
  {
    event: '100m',
    pb: '11.94',
    sb: '',
    target: '11.75',
  },
  {
    event: '200m',
    pb: '24.7',
    sb: '',
    target: '24.00',
  },
  {
    event: '400m',
    pb: '58.0',
    sb: '',
    target: '57.00',
  },
  {
    event: '800m',
    pb: '2:33.9',
    sb: '',
    target: '2:20.00',
  },
  {
    event: '1000m',
    pb: '3:13.16',
    sb: '3:13.16',
    target: '3:10.00',
  },
  {
    event: '1500m',
    pb: '5:16.70',
    sb: '',
    target: '5:00.00',
  },
  {
    event: '60HU20M',
    pb: '8.63',
    sb: '8.63',
    target: '8.40',
  },
  {
    event: '110H',
    pb: '16.80',
    sb: '',
    target: '16.0',
  },
  {
    event: '110HU20M',
    pb: '15.52',
    sb: '',
    target: '15.00',
  },
  {
    event: '400H',
    pb: '68.95',
    sb: '',
    target: '65.00',
  },
  {
    event: 'HJ',
    pb: '1.88',
    sb: '1.80',
    target: '1.90',
  },
  {
    event: 'PV',
    pb: '4.22',
    sb: '4.22',
    target: '4.40',
  },
  {
    event: 'LJ',
    pb: '6.17',
    sb: '6.04',
    target: '6.30',
  },
  {
    event: 'TJ',
    pb: '11.39',
    sb: '',
    target: '11.5',
  },
  {
    event: 'SP6K',
    pb: '10.08',
    sb: '9.85',
    target: '11.00',
  },
  {
    event: 'DT2K',
    pb: '26.63',
    sb: '',
    target: '30.00',
  },
  {
    event: 'DT1.5K',
    pb: '32.25',
    sb: '',
    target: '37.50',
  },
  {
    event: 'JT800',
    pb: '40.63',
    sb: '',
    target: '45.00',
  },
  {
    event: 'HeplU20M',
    pb: '4346',
    sb: '4346',
    target: '4450',
  },
  {
    event: 'DecU20M',
    pb: '5467',
    sb: '',
    target: '6000',
  },

  // var data =[{EVENT,PB,SB,TARGET}]
];

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ screenProps, navigation }) => ({
    title: screenProps.name,
    headerRight: (
      <SettingsButton onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings" size={24} color="#232A30" />
      </SettingsButton>
    ),
  });

  render() {
    return (
      <MainContainer>
        <ProfileHeader ageGroup="U20" leadCoach="Norma Harris" />
        <PerformanceTable
          keyExtractor={item => item.event}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <TableHeader>
              <HeaderText> Event </HeaderText>
              <HeaderText> PB </HeaderText>
              <HeaderText> SB </HeaderText>
              <HeaderText> Target </HeaderText>
            </TableHeader>
          }
          data={tableData}
          renderItem={data => <TableRowItem data={data} />}
        />
      </MainContainer>
    );
  }
}
