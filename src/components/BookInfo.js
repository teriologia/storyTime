import {AirbnbRating} from '@rneui/base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import bookStore from '../Helpers/BookFactory';
import {Colors} from '../styles/Colors';
const desc =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const BookInfo = ({params}) => {
  const bookInfo = bookStore;
  const RowRenderer = ({title, text, component}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowTitle}>{title}: </Text>
        {component ? component() : <Text style={styles.rowText}>{text}</Text>}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <RowRenderer title={'Title'} text={bookInfo.bookName.toUpperCase()} />
      <RowRenderer title={'Genres'} text={bookInfo.bookGenresAsString} />
      <RowRenderer
        title={'Rating'}
        text={bookInfo.ratingInfo}
        component={() => (
          <AirbnbRating
            ratingContainerStyle={{flexDirection: 'row'}}
            reviewSize={10}
            size={20}
            defaultRating={bookInfo.ratingInfo}
            isDisabled={true}
          />
        )}
      />
      <View style={styles.descContainer}>
        <Text>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rowTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black,
  },
  rowText: {},
  descContainer: {
    paddingHorizontal: 5,
  },
});

export default BookInfo;
