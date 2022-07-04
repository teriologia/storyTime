import {Divider, Icon} from '@rneui/base';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import bookStore from '../Helpers/BookFactory';
import {Colors} from '../styles/Colors';

const CustomHeader = ({params, onLeft}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={onLeft}>
          <Icon type="material-community" name="arrow-left" />
        </TouchableOpacity>
        <Text style={styles.titleText}>{bookStore.name.toUpperCase()}</Text>
        <View />
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    color: Colors.black,
  },
  container: {
    backgroundColor: Colors.primary_darker,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default CustomHeader;
