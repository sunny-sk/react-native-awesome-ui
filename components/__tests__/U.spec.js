import { render } from '@testing-library/react-native';
import React from 'react';

import U from '../U';

const props = {
  text: 'this is text',
};

test('form submits two answers', () => {
  const { queryByText } = render(<U {...props} />);
  const text = queryByText('this is text');
  expect(text).toBeTruthy();
});
