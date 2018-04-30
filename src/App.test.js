import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Topic from './Topic';

it('should display topics', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('div').length).toBe(1);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Topics');
  expect(wrapper.find('Topic').length).toBe(1);
});
