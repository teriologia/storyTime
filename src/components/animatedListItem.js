import {Button, Icon} from '@rneui/themed';
import React, {useState, useRef} from 'react';
import {Text, Animated, View, Dimensions, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/Colors';

const {width, height} = Dimensions.get('window');

const AnimetedListItem = ({icon, delay, index, activeIndex, onPress}) => {
  const slideIn = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(slideIn, {
      toValue: 1,
      delay: delay,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        maxWidth: 50,
      }}>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginVertical: 10,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          transform: [
            {
              translateX: slideIn.interpolate({
                inputRange: [0, 1],
                outputRange: [-25, 10],
              }),
            },
          ],
        }}>
        <TouchableOpacity
          onPress={() => (onPress ? onPress(index) : null)}
          style={{
            borderRadius: 100,
            padding: 4,
            backgroundColor:
              index == activeIndex
                ? Colors.primary_selected
                : Colors.primary_darker,
          }}>
          <Icon
            name={icon}
            type="material-community"
            color={index == activeIndex ? '#FFF' : '#000'}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AnimetedListItem;
