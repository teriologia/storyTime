import {AirbnbRating, Divider, Icon, Image, Text} from '@rneui/base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../styles/Colors';

const Comments = ({src, name, rating, text}) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Icon
            type="material-community"
            name="account-circle"
            size={30}
            style={{paddingRight: 20}}
            color={'#d1d1d1'}
          />
          <View>
            <Text style={styles.title}>{name}</Text>
            <AirbnbRating
              defaultRating={rating}
              size={10}
              showRating={false}
              starContainerStyle={{marginVertical: 10}}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 60, marginTop: 10}}>
          <Text>{text}</Text>
        </View>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop: 15,
    paddingVertical: 10,
  },
  img: {
    width: 120,
    height: 120,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Comments;
