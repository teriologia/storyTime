import {Icon} from '@rneui/themed';
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../styles/Colors';
import Player from '../Assets/player.png';
import Player2 from '../Assets/player2.png';

const {width, height} = Dimensions.get('window');

const StoryTextRenderer = ({data, delay, index, cb}) => {
  const textAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 750,
      delay: index * delay,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        cb();
      }
    });
  }, []);
  const toRight = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0],
  });
  const toLeft = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
  });
  const renderDecider = () => {
    switch (data.type) {
      case 'Narrator':
        return (
          <Animated.View
            style={[{transform: [{translateX: toLeft}]}, styles.narrator]}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{data.from}</Text>
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.insideView}>
                <Text style={{flexWrap: 'wrap'}}>{data.text}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.line} />
              </View>
              <View style={styles.image}>
                <Icon type="material-community" name="book-open-variant" />
              </View>
            </View>
          </Animated.View>
        );
      case 'player':
        return (
          <Animated.View
            style={[{transform: [{translateX: toLeft}]}, styles.narrator]}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{data.from}</Text>
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.insideView}>
                <Text style={{flexWrap: 'wrap'}}>{data.text}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.line} />
              </View>
              <View style={styles.playerImage}>
                <Image
                  source={Player}
                  style={{width: 64, height: 64}}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Animated.View>
        );
      case 'Character':
        return (
          <Animated.View
            style={[{transform: [{translateX: toRight}]}, styles.character]}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{data.from}</Text>
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.playerImage}>
                <Image
                  source={Player2}
                  style={{width: 64, height: 64}}
                  resizeMode="contain"
                />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.line} />
              </View>
              <View style={styles.characterInnerview}>
                <Text>{data.text}</Text>
              </View>
            </View>
          </Animated.View>
        );
      case 'choose':
        return (
          <Animated.View
            style={[{transform: [{translateX: toLeft}]}, styles.choose]}>
            <Text>{data.text}</Text>
          </Animated.View>
        );

      default:
        return <View />;
    }
  };
  return <View>{renderDecider()}</View>;
};

const styles = StyleSheet.create({
  narrator: {
    width: width * 0.8,
    alignSelf: 'flex-end',
    marginVertical: 15,
    flex: 1,
  },
  line: {
    backgroundColor: Colors.textBoxBorder,
    width: 5,
    height: 5,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    backgroundColor: Colors.textBox,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderColor: Colors.textBoxBorder,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 2,
  },
  insideView: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.textBox,
    borderWidth: 5,
    borderColor: Colors.textBoxBorder,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: Colors.textBox,
    borderWidth: 5,
    borderColor: Colors.textBoxBorder,
    paddingVertical: 15,
  },
  player: {
    backgroundColor: 'blue',
    maxWidth: width * 0.6,
    alignSelf: 'flex-end',
  },
  playerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.textBox,
    borderWidth: 5,
    borderColor: Colors.textBoxBorder,
  },
  character: {
    width: width * 0.8,
    flex: 1,
    alignSelf: 'flex-start',
  },
  characterInnerview: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.textBox,
    borderWidth: 5,
    borderColor: Colors.textBoxBorder,
  },
  choose: {},
});

export default StoryTextRenderer;
