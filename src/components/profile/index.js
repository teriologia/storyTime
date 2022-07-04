import {Button, Divider, Icon} from '@rneui/themed';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {userData} from '../../Helpers/UserFactory';
import {Colors} from '../../styles/Colors';
import ListRenderer from './ListRenderer';

const ProfileRenderer = ({params}) => (
  <View>
    <Icon type="material-community" name="account-circle" size={70} />
    <Text style={styles.userName}>{userData.userName}</Text>
    <Button
      buttonStyle={styles.edit}
      type="outline"
      title={'Edit Profile'}
      icon={{type: 'material-community', name: 'pencil-outline'}}
    />
    <Divider style={styles.divider} />
    <Text style={styles.book}>{'Book Lists'}</Text>
    {userData.list.map(e => (
      <ListRenderer key={e.id} data={e} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
  },
  userName: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginVertical: 10,
  },
  edit: {
    marginBottom: 10,
  },
  book: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    marginVertical: 10,
  },
});

export default ProfileRenderer;
