export const exampleStory = [
  {
    section: 1,
    name: 'prologue',
    story: [
      {
        type: 'Narrator',
        from: 'Narrator',
        delay: 350,
        text: 'Hi! this story created for testing.',
      },
      {
        type: 'Narrator',
        from: 'Narrator',
        delay: 1500,
        text: 'Im narrator testing testing testing testing testing testing testing testing testing testing testing testing ',
      },
      {
        type: 'player',
        from: 'player',
        delay: 1500,
        text: 'Im player testing testing testing testing testing testing testing testing testing testing testing testing ',
      },
      {
        type: 'Character',
        from: 'side-Character',
        delay: 1500,
        text: 'Im side-Character testing testing testing testing testing testing testing testing testing testing testing testing ',
      },
      {
        type: 'choose',
        from: 'player',
        delay: 1500,
        text: 'Choose One ',
        options: [
          {
            id: 1,
            text: 'option 1',
          },
          {
            id: 2,
            text: 'option 2',
          },
        ],
      },
    ],
  },
  {
    section: 2,
    name: 'New Day',
    story: [
      {
        type: 'Narrator',
        from: 'Narrator',
        text: 'Hi! this is Section 2 and this story created for testing.',
      },
      {
        type: 'Narrator',
        from: 'Narrator',
        text: 'Im narrator testing testing testing testing testing testing testing testing testing testing testing testing ',
      },
      {
        type: 'player',
        from: 'player',
        text: 'Im player testing testing testing testing testing testing testing testing testing testing testing testing ',
      },
      {
        type: 'Character',
        from: 'side-Character',
        text: 'Im side-Character testing testing testing testing testing testing testing testing testing testing testing testing ',
      },
      {
        type: 'choose',
        from: 'player',
        text: 'Choose One ',
        options: [
          {
            id: 1,
            text: 'option 1',
          },
          {
            id: 2,
            text: 'option 2',
          },
        ],
      },
    ],
  },
];
