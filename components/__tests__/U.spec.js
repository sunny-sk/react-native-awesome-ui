import { render } from '@testing-library/react-native';
import React from 'react';

import U from '../U';

const props = {
  text: 'this is text',
};

describe('<U></U>', () => {
  test('should render text successfully', async () => {
    const { queryByText } = render(<U>{props.text}</U>);
    const text = queryByText('this is text');
    expect(text).toBeTruthy();
  });
  //TODO : check for underline property
});
