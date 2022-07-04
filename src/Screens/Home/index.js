import React from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Text, Card, Button, Input} from '@rneui/themed';
import bg from '../../Assets/bg1.jpg';
import {Colors} from '../../styles/Colors';

const {width} = Dimensions.get('window');

const Home = ({params, navigation}) => (
  <ImageBackground blurRadius={5} source={bg} style={styles.bg}>
    <Card containerStyle={styles.loginContainer}>
      <Card.Title>WELCOME</Card.Title>
      <Card.Divider />
      <Input
        labelStyle={styles.label}
        label={'EMAIL'}
        textContentType={'emailAddress'}
        keyboardType={'email-address'}
        containerStyle={styles.inputs}
      />
      <Input
        labelStyle={styles.label}
        label={'Password'}
        textContentType={'password'}
        secureTextEntry={true}
        containerStyle={styles.inputs}
      />
      <View style={styles.bottom}>
        <Button
          onPress={() => navigation.navigate('List')}
          title={'LOGIN'}
          containerStyle={styles.button}
          buttonStyle={styles.buttonInner}
        />
        <View style={styles.divider} />
        <Button
          buttonStyle={styles.buttonInner}
          title={'REGISTER'}
          containerStyle={styles.button}
        />
      </View>
      <Button
        title="Login With Google"
        type="outline"
        icon={{
          name: 'google-plus',
          type: 'material-community',
          color: '#2089dc',
        }}
      />
    </Card>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 7,
  },
  inputs: {
    minWidth: width / 1.5,
  },
  label: {
    color: '#000',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    flex: 1,
  },
  buttonInner: {},
  divider: {width: 20},
});

export default Home;
