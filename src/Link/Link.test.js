import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import {StyleSheetTestUtils} from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Link change the class when hovered', done => {
  const component = renderer.create(
    <Link page='https://hissues.herokuapp.com'>HIssues</Link>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const style = component.get(0).style;
  expect(style).toHaveProperty('color', 'red');

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  return done();
});
