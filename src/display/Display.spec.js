// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('it renders correctly', () => {
  expect(render(<Display />)).toMatchSnapshot();
});

test('displays if gate is open/closed and if it is locked/unlocked', () => {
  const { getByText } = render(<Display />);

  getByText(/open/i);
  getByText(/unlocked/i);
});

test('displays Closed if the closed prop is true and Open if otherwise', () => {
  const { getByText } = render(<Display closed={false} />);
//   const label = getByText(/closed/i);
  getByText((content, element) => element.className.includes('red-led'))
//   expect(label.className.includes('green-led'));
});

test('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
  const { queryByText } = render(<Display locked={true} />);
  const label = queryByText(/unlocked/i);
  expect(label).toBeNull();
});
