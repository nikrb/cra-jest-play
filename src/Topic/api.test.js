import { getTopics } from './api';

afterEach(() => {
  jest.resetAllMocks();
});

it('should call topics api', () => {
  const fetchSpy = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({json: () => {}}));
  return getTopics()
    .then(() => {
      expect(fetchSpy).toHaveBeenCalledWith('/api/v1/topics');
    });
});

it('should return topic list', () => {
  const expectedResults = [{
      _id: '1',
      name: 'Topic 1',
      order: 1,
    }, {
      _id: '2',
      name: 'Topics 2',
      order: 2,
    },
  ];
  const fetchSpy = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      json: () => (expectedResults),
    }));
  return getTopics()
    .then(response => {
      expect(response).toEqual(expectedResults);
    });
});
