import React from 'react';
import { render } from '@testing-library/react';

import Page from '../src/pages';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
