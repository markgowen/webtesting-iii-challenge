// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('it renders correctly', () => {
  expect(render(<Display />)).toMatchSnapshot();
});

test('defaults to unlocked and open', () => {
  const { getByText } = render(<Display />);

  getByText(/open/i);
  getByText(/unlocked/i);
});

test('displays if gate is open/closed and if it is locked/unlocked', () => {
  const { getByText } = render(<Display />);

  getByText(/open/i);
  getByText(/unlocked/i);
});

test('displays if gate is open/closed and if it is locked/unlocked', () => {
  const { getByText } = render(<Display closed={true} />);

  getByText(/closed/i);
  getByText(/locked/i);
});

test('when locked or closed use the red-led class', () => {
  const { getByText } = render(<Display closed={true} />);
  //   const label = getByText(/closed/i);
  getByText((content, element) => element.className.includes('red-led'));
  //   expect(label.className.includes('green-led'));
});

test('when unlocked or open use the green-led class', () => {
  const { getByText } = render(<Display closed={true} />);
  //   const label = getByText(/closed/i);
  getByText((content, element) => element.className.includes('green-led'));
  //   expect(label.className.includes('green-led'));
});

test('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
  const { queryByText } = render(<Display locked={true} />);
  const label = queryByText(/unlocked/i);
  expect(label).toBeNull();
});

test('displays Closed if the closed prop is true and Open if otherwise', () => {
  const { queryByText } = render(<Display closed={true} />);
  const label = queryByText(/open/i);
  expect(label).toBeNull();
});
