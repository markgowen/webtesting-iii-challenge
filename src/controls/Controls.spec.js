// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('it renders correctly', () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

test('toggleLocked is called on lock buttons', () => {
  const toggleLockedMock = jest.fn();
  const { getByText } = render(
    <Controls toggleLocked={toggleLockedMock} closed={true} />
  );

  fireEvent.click(getByText(/lock gate/i));

  expect(toggleLockedMock).toHaveBeenCalled();
});

test('toggleClosed is called on close buttons', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleClosedMock} closed={false} />
  );

  fireEvent.click(getByText(/close gate/i));

  expect(toggleClosedMock).toHaveBeenCalled();
});

test('Cannot be closed if locked', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleClosedMock} locked={true} />
  );

  fireEvent.click(getByText(/lock gate/i));

  expect(toggleClosedMock).not.toHaveBeenCalled();
});

// Closed toggle button is disabled if gate is locked
// test('Closed toggle button is disabled if gate is locked', () => {
//     const props = {disabled: 'locked'},

// })