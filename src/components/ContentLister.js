import {ListItem} from '@rneui/themed';
import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import bg from '../Assets/bg1.jpg';
import Sound from 'react-native-sound';
import {Divider} from '@rneui/base';

const ContentLister = ({data, onPress}) => {
  // const playSound = () => {
  //   let sound = new Sound(
  //     require('../Assets/sound-effect-yamete-kudasai.mp3'),
  //     error => {
  //       if (error) {
  //         console.log('failed to load the sound', error);
  //       } else {
  //         sound.setVolume(2);
  //         sound.play(success => {
  //           if (success) {
  //             sound.release();
  //           }
  //         }); // have to put the call to play() in the onload callback
  //       }
  //     },
  //   );
  // };
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPress({item, index})}>
        <ListItem style={styles.contentContainer}>
          <Image source={bg} style={styles.genreImg} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.desc}</ListItem.Subtitle>
            <View style={styles.genre}>
              {item.genres.map((e, i) => (
                <Text key={i} style={styles.genreText}>
                  {e}
                  {i < item.genres.length - 1 ? ',' : ''}
                </Text>
              ))}
            </View>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.container}
        renderItem={({item, index}) => renderItem(item, index)}
      /> */}
      {data.map((e, i) => renderItem(e, i))}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#FFF',
    elevation: 5,
    marginBottom: 10,
  },
  container: {
    padding: 10,
    paddingBottom: 20,
  },
  genre: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreText: {
    marginRight: 3,
  },
  genreImg: {
    width: 64,
    height: 64,
  },
});

export default ContentLister;
