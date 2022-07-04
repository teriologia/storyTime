import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import StoryTextRenderer from '../../components/StoryTextRenderer';
import {storyHolder} from '../../Helpers/StoryFactory';
import bg from '../../Assets/bg1.jpg';

const StoryCreator = ({params}) => {
  const [section, setSection] = useState(null);
  const [storyData, setStoryData] = useState([]);
  const [storyIndex, setStoryIndex] = useState(0);

  useEffect(() => {
    setSection(storyHolder.getSection());
  }, []);

  useEffect(() => {
    if (section) addItem();
  }, [section]);

  const addItem = () => {
    if (storyIndex > section.story.length - 1) {
      return;
    }
    const data = storyData;
    data.push(section.story[storyIndex]);
    setStoryIndex(storyIndex + 1);
    setStoryData(data);
  };
  return (
    <ImageBackground blurRadius={5} style={styles.bg} source={bg}>
      <FlatList
        data={section && storyData}
        renderItem={({item, index}) => (
          <StoryTextRenderer
            data={item}
            story={section}
            delay={item.delay}
            index={index + 1}
            cb={() => addItem()}
          />
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default StoryCreator;
