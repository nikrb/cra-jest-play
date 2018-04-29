import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';
import Topic from './Topic';

it('should display topics', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.children).toEqual(
    <Topic />
  );
});
