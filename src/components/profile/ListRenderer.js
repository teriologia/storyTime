import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';

const ListRenderer = ({params, data}) => (
  <TouchableOpacity style={styles.container}>
    <Icon
      type="material-community"
      name={'book-open-page-variant-outline'}
      size={20}
    />
    <Text style={styles.title}>{data.listName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 10,
    flexDirection: 'row',
  },
  title: {
    color: Colors.black,
    fontSize: 16,
    paddingLeft: 10,
  },
});

export default ListRenderer;
