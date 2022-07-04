import {Divider, FAB, Image} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import bg from '../../Assets/bg1.jpg';
import {Colors} from '../../styles/Colors';
import BookInfo from '../../components/BookInfo';
import Comments from '../../components/Comments';
import {commentsData} from '../../TestArea/comments';

const {height, width} = Dimensions.get('window');

const Detail = ({params, navigation}) => {
  return (
    <View style={styles.flex}>
      <CustomHeader onLeft={() => navigation.goBack()} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image source={bg} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <BookInfo />
          <Divider inset={true} insetType="middle" style={styles.divider} />
          <Text style={styles.title}>Comments</Text>
          <Divider insetType="middle" />
          {commentsData.map((e, i) => (
            <Comments
              key={i}
              src={bg}
              name={e.name}
              rating={e.rating}
              text={e.text}
            />
          ))}
        </View>
        <View style={styles.safeView} />
      </ScrollView>
      <FAB
        visible={true}
        onPress={() => navigation.navigate('StoryMain')}
        title="Okumaya Başla"
        style={styles.FAB}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height / 2.5,
    alignSelf: 'center',
  },
  imageContainer: {
    padding: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  infoContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFF',
    flex: 1,
    marginHorizontal: 5,
  },
  FAB: {
    marginVertical: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 18,
    paddingTop: 15,
    paddingLeft: 5,
  },
  divider: {
    paddingTop: 10,
  },
  safeView: {
    backgroundColor: '#FFF',
    minHeight: 50,
    minWidth: '100%',
  },
});

export default Detail;
