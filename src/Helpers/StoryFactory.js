import {exampleStory} from '../TestArea/StoryData';

class Story {
  constructor() {
    this.story = [];
    this.currentSection = 1;
  }

  setStory(story, section = 1) {
    this.story = story;
    this.currentSection = section;
  }

  getSection() {
    const section =
      this.story && this.story.find(e => e.section == this.currentSection);
    return section;
  }
}

export const storyHolder = new Story();
