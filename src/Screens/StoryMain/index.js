import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import bookStore from '../../Helpers/BookFactory';
import {storyHolder} from '../../Helpers/StoryFactory';
import {Colors} from '../../styles/Colors';
import {exampleStory} from '../../TestArea/StoryData';

const StoryMain = ({params, navigation}) => {
  const textAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    storyHolder.setStory(exampleStory, 1);
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        Animated.timing(textAnim, {
          toValue: 0,
          delay: 1000,
          duration: 2000,
          useNativeDriver: true,
        }).start(() => navigation.navigate('StoryCreator'));
      }
    });
  });
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.titleText, {opacity: textAnim}]}>
        {bookStore.bookName}
      </Animated.Text>
      <Animated.Text style={[styles.episodeText, {opacity: textAnim}]}>
        {'Episode 1'}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  episodeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default StoryMain;
