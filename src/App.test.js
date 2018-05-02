import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

const topics = [
  { _id: '1', name: 'Voyage', order: 1 },
];

it('should display topic list', () => {
  const topicSpy = jest
    .spyOn(App.prototype, 'loadTopics')
    .mockImplementation(() => {
      return new Promise(resolve => resolve(topics))
    });

  const comp = shallow(<App />);

  expect(topicSpy).toHaveBeenCalled();

  return Promise.resolve().then(async () => {
    comp.update();
    // expect(comp.instance().state).toEqual({ topics });
    expect(comp.find('li').length).toBe(1);
  });
});
