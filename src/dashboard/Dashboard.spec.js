// Test away
import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'

import Dashboard from './Dashboard'

test('it renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

test('Display and Controls are rendering correctly', () => {
    const { getByTestId } = render(<Dashboard />);

    // Display 
    getByTestId(/display-panel/i);
    // Controls
    getByTestId(/button-lock/i);
});