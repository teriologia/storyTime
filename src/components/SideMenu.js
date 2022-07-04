import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles/Colors';

const SideMenu = ({params}) => {
  const [options, setOptions] = useState([
    'New',
    'Top',
    'Hot',
    'Rising',
    'Most Viewed',
    'Most Played',
  ]);
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.scrollContainer}>
        {options.map((el, i) => (
          <Button
            key={i}
            onPress={() => setSelected(i)}
            type="clear"
            title={el}
            titleStyle={
              selected === i ? styles.buttonTitle : styles.buttonTitleDisable
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  scrollContainer: {
    alignItems: 'flex-start',
  },
  buttonTitle: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  buttonTitleDisable: {
    color: Colors.disable,
  },
});

export default SideMenu;
