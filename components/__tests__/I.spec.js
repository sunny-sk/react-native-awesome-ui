import { render } from '@testing-library/react-native';
import React from 'react';

import I from '../I';

const props = {
  text: 'this is italic text',
};

describe('<U></U>', () => {
  test('should render text successfully', async () => {
    const { queryByText } = render(<I>{props.text}</I>);
    const text = queryByText('this is italic text');
    expect(text).toBeTruthy();
  });
});
