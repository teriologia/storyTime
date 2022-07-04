import {Button, Divider, Icon} from '@rneui/base';
import {SearchBar} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles/Colors';

const TopContent = ({params}) => {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState(0);
  return (
    <>
      <View style={styles.container}>
        <Icon type="material-community" name={'square-rounded'} size={40} />
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          value={text}
          onChangeText={setText}
          round
          inputContainerStyle={{maxHeight: 30, margin: 0}}
          inputStyle={{margin: 0}}
          containerStyle={{
            flex: 1,
            borderRadius: 100,
          }}
        />
        <Icon type="material-community" name={'bell-badge'} size={30} />
      </View>
      <View style={styles.options}>
        <Button
          onPress={() => setSelected(0)}
          title={'Home'}
          type={'clear'}
          titleStyle={{color: selected == 0 ? Colors.primary : Colors.disable}}
        />
        <Button
          onPress={() => setSelected(1)}
          title={'Discover'}
          type={'clear'}
          titleStyle={{color: selected == 1 ? Colors.primary : Colors.disable}}
        />
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  options: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default TopContent;
