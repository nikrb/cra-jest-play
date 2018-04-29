export const getTopics = () =>
  Promise.resolve([{
      _id: '1',
      name: 'Topic 1',
      order: 1,
    }, {
      _id: '2',
      name: 'Topics 2',
      order: 2,
    },
  ]);
