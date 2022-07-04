import {Icon} from '@rneui/base';
import {Overlay} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {userData} from '../Helpers/UserFactory';
import {Colors} from '../styles/Colors';
import {ListData} from '../TestArea/listData';
import ProfileRenderer from './profile';

const BottomMenu = ({params}) => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('Profile');

  const renderRuler = () => {
    switch (type) {
      case 'Profile':
        return <ProfileRenderer />;
      case 'Category':
        return (
          <View>
            <Text>Category</Text>
          </View>
        );
      case 'Settings':
        return (
          <View>
            <Text>Settigns</Text>
          </View>
        );
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Overlay
        overlayStyle={{minWidth: '70%'}}
        animationType="fade"
        isVisible={visible}
        onBackdropPress={setVisible}>
        {renderRuler()}
      </Overlay>
      <TouchableOpacity
        onPress={() => {
          userData.createUser(
            'TestUser',
            undefined,
            'Profile description bla bla bla',
            ListData,
          );
          setType('Profile');
          setVisible(true);
        }}>
        <Icon type="material-community" name="account-circle" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setType('Category');
          setVisible(true);
        }}>
        <Icon type="material-community" name="shape" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setType('Settings');
          setVisible(true);
        }}>
        <Icon type="material-community" name="cog-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    minHeight: 50,
    paddingTop: 10,
    backgroundColor: Colors.primary_darker,
  },
});

export default BottomMenu;
