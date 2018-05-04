import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

const topics = [
  { _id: '1', name: 'Voyage', order: 1 },
];
const subTopics = [
  { _id: '2', parent: '1', name: 'About Voyages', order: 2 },
];

it('should display topic list', () => {
  const topicSpy = jest
    .spyOn(App.prototype, 'loadData')
    .mockImplementation(() => {
      return new Promise(resolve => resolve([topics, subTopics]))
    });

  const comp = shallow(<App />);

  expect(topicSpy).toHaveBeenCalled();

  return Promise.resolve().then(async () => {
    comp.update();
    const topicList = comp.find('ul').at(0);
    const tele = topicList.find('li').at(0).childAt(0);
    expect(tele.text()).toBe('Voyage');
    const subList = comp.find('ul').at(1);
    const sele = subList.find('li').at(0).childAt(0);
    expect(sele.text()).toBe('About Voyages');
  });
});
