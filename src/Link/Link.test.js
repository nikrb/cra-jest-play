import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

test('Link change the class when hovered', () => {
  const component = renderer.create(
    <Link page='https://hissues.herokuapp.com'>HIssues</Link>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
