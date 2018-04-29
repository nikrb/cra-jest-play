import React from 'react';
import { shallow } from 'enzyme';

jest.mock('./api');
import Topic from './Topic';

it('should display topic list', () => {
  const wrapper = shallow(<Topic />);
  return Promise.resolve()
    .then(() => {
      wrapper.update();
      expect(wrapper.find('li').length).toBe(2);
      expect(wrapper).toMatchSnapshot();
    });
});
