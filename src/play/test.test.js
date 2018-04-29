import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';

const Button = styled.button`
  color: red;
  @media (max-width: 640px) {
    &:hover {
      color:green;
    }
  }
`;

test('it works', () => {
  const tree = renderer.create(<Button />).toJSON();
  // expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'red');
});
