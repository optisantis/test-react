import React from 'react';
import { fireEvent, waitFor } from '@testing-library/dom';
import App from './App';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

it('render layout with all cards', async () => {
  const { baseElement } = render(<App />)

  const header = baseElement.querySelector('.header');
  const memoryTable = baseElement.querySelector('.memoryTable');
  const memoryTableItems = baseElement.querySelectorAll('.memoryTableItem');

  await expect(header).toBeTruthy();
  await expect(memoryTable).toBeTruthy();
  await expect(memoryTableItems).toHaveLength(16);

  await expect(baseElement).toMatchSnapshot();
});

it('display active cards then display found cards when we find a pair', async () => {
  const { baseElement } = render(<App />)

  const memoryTable = baseElement.querySelector('.memoryTable');
  const memoryTableItems = baseElement.querySelectorAll('.memoryTableItem');

  await expect(memoryTable).toBeTruthy();
  await expect(memoryTableItems).toBeTruthy();

  fireEvent.click(memoryTableItems[0]);
  fireEvent.click(memoryTableItems[4]);

  const memoryTableItemsActive = baseElement.querySelectorAll('.memoryTableItemActive');
  expect(memoryTableItemsActive).toHaveLength(2);

  await waitFor(() => {
    const memoryTableItemsFound = baseElement.querySelectorAll('.memoryTableItemFound');
    expect(memoryTableItemsFound).toHaveLength(2);
  });


  await expect(baseElement).toMatchSnapshot();
});

it('display active cards then display idle cards when we dont find a pair', async () => {
  const { baseElement } = render(<App />)

  const memoryTable = baseElement.querySelector('.memoryTable');
  const memoryTableItems = baseElement.querySelectorAll('.memoryTableItem');

  await expect(memoryTable).toBeTruthy();
  await expect(memoryTableItems).toBeTruthy();

  fireEvent.click(memoryTableItems[0]);
  fireEvent.click(memoryTableItems[1]);

  const memoryTableItemsActive = baseElement.querySelectorAll('.memoryTableItemActive');
  expect(memoryTableItemsActive).toHaveLength(2);

  await waitFor(() => {
    const memoryTableItemsFound = baseElement.querySelectorAll('.memoryTableItemIdle');
    expect(memoryTableItemsFound).toHaveLength(16);
  });


  await expect(baseElement).toMatchSnapshot();
});

it('start clock when playing and count hits', async () => {
  const { baseElement } = render(<App />)

  const memoryTable = baseElement.querySelector('.memoryTable');
  const memoryTableItems = baseElement.querySelectorAll('.memoryTableItem');
  const headerInfosTimeClock = baseElement.querySelector('.headerInfosTimeClock');
  const headerInfosHitsNumber = baseElement.querySelector('.headerInfosHitsNumber');

  await expect(memoryTable).toBeTruthy();
  await expect(memoryTableItems).toBeTruthy();

  expect(headerInfosTimeClock.innerHTML).toEqual('00:00');
  expect(headerInfosHitsNumber.innerHTML).toEqual('0');

  fireEvent.click(memoryTableItems[0]);
  fireEvent.click(memoryTableItems[1]);

  await waitFor(() => {
    expect(headerInfosTimeClock.innerHTML).not.toEqual('00:00');
    expect(headerInfosHitsNumber.innerHTML).toEqual('1');
  });


  await expect(baseElement).toMatchSnapshot();
});

it('can reset game', async () => {
  const { baseElement } = render(<App />)

  const memoryTable = baseElement.querySelector('.memoryTable');
  const memoryTableItems = baseElement.querySelectorAll('.memoryTableItem');
  const headerInfosTimeClock = baseElement.querySelector('.headerInfosTimeClock');
  const headerInfosHitsNumber = baseElement.querySelector('.headerInfosHitsNumber');
  const resetButton = baseElement.querySelector('.resetButton');

  await expect(memoryTable).toBeTruthy();
  await expect(memoryTableItems).toBeTruthy();

  expect(headerInfosTimeClock.innerHTML).toEqual('00:00');
  expect(headerInfosHitsNumber.innerHTML).toEqual('0');

  fireEvent.click(memoryTableItems[0]);
  fireEvent.click(memoryTableItems[4]);

  await waitFor(() => {
    expect(headerInfosTimeClock.innerHTML).not.toEqual('00:00');
    expect(headerInfosHitsNumber.innerHTML).toEqual('1');
  });

  fireEvent.click(resetButton);

  await waitFor(() => {
    expect(headerInfosTimeClock.innerHTML).toEqual('00:00');
    expect(headerInfosHitsNumber.innerHTML).toEqual('0');
  });

  await expect(baseElement).toMatchSnapshot();
});