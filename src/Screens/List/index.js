import {Divider} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text, ScrollView} from 'react-native';
import AnimetedListItem from '../../components/animatedListItem';
import BottomMenu from '../../components/BottomMenu';
import ContentLister from '../../components/ContentLister';
import CustomHeader from '../../components/CustomHeader';
import SideMenu from '../../components/SideMenu';
import TopContent from '../../components/TopContent';
import bookStore from '../../Helpers/BookFactory';
import {Colors} from '../../styles/Colors';
import {TestData} from '../../TestArea/TestData';

const List = ({params, navigation}) => {
  const [listData, setListData] = useState([
    'sword',
    'incognito',
    'heart-half-full',
    'book-open-page-variant',
    'ufo-outline',
    'dice-6',
  ]);
  const [social, setsocial] = useState([
    'facebook',
    'instagram',
    'twitter',
    'linkedin',
    'account-circle',
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <TopContent />
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.leftBar}>
        <FlatList
          extraData={activeIndex}
          data={listData}
          renderItem={({item, index}) => {
            return (
              <AnimetedListItem
                icon={item}
                index={index}
                delay={index * 100}
                activeIndex={activeIndex}
                onPress={index => setActiveIndex(index)}
              />
            );
          }}
        />
        <FlatList
          style={{maxHeight: '38%'}}
          contentContainerStyle={{justifyContent: 'flex-end'}}
          extraData={activeIndex}
          data={social}
          renderItem={({item, index}) => {
            return (
              <AnimetedListItem
                icon={item}
                index={index}
                delay={index * 100}
                activeIndex={-1}
              />
            );
          }}
        />
      </View> */}
          <View style={styles.contentContainer}>
            {/* <SideMenu onChange={() => console.log('log1')} /> */}
            <Text style={styles.title}>Okumaya Devam Et</Text>
            <ContentLister
              onPress={data => {
                bookStore.setBook(data.item);
                navigation.navigate('Detail');
              }}
              data={[TestData[0]]}
            />
            <Divider />
            <Text style={styles.title}>Önerilen</Text>
            <ContentLister
              onPress={data => {
                bookStore.setBook(data.item);
                navigation.navigate('Detail');
              }}
              data={TestData}
            />
          </View>
        </View>
      </ScrollView>
      <BottomMenu />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  leftBar: {
    backgroundColor: Colors.primary_darker,
    minWidth: 50,
    height: '100%',
    justifyContent: 'space-between',
  },
  contentContainer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  title: {
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16,
  },
});

export default List;
