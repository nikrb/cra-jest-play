import React from 'react';
import { shallow } from 'enzyme';

import AddGroceryForm from './AddGroceryForm';

describe('AddGroceryForm', () => {
  const mockGrocery = { name: 'Oranges', quantity: 3 }

  const mockGroceries = [
    {id: 1, name: 'Pineapples', quantity: 10},
    {id: 2, name: 'Oranges', quantity: 3}
  ]

  const mockEvent = { preventDefault: jest.fn() }

  const mockUpdateGroceryList = jest.fn()

  // FIXME: global?
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
      groceries: mockGroceries,
    })
  }));
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <AddGroceryForm
        updateGroceryList={mockUpdateGroceryList}
      />
    );
  });
  it('calls fetch with correct data when adding a new grocery', () => {
    const expectedFetchBody = {
      method: 'POST',
      body: JSON.stringify({ grocery: mockGrocery }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    renderedComponent.setState({ grocery: mockGrocery });
    renderedComponent.instance().handleAddGrocery(mockEvent);
    expect(window.fetch).toHaveBeenCalledWith('/api/v1/groceries', expectedFetchBody);
  });
  it('resets state after adding a new grocery', () => {
    renderedComponent.setState({ grocery: mockGrocery });
    new Promise(resolve => {
      resolve(renderedComponent.instance().handleAddGrocery(mockEvent));
    }).then(() => {
      renderedComponent.update();
    }).then(() => {
      expect(renderedComponent.state('grocery')).toEqual({ name: '', quantity: ''});
    });
  });
  it('calls the updateGroceryList callback after adding new grocery', () => {
    new Promise(resolve => {
      resolve(renderedComponent.instance().handleAddGrocery(mockEvent));
    }).then(() => {
      expect(mockUpdateGroceryList).toHaveBeenCalledWith(mockGroceries);
    });
  });
  it('sets error when fetch fails', () => {
    window.fetch = jest.fn().mockImplementationOnce(() => new Promise((resolve, reject) => {
      reject(new Error('failed'))
    }))

    new Promise((resolve) => {
      resolve(renderedComponent.instance().handleAddGrocery(mockEvent))
    }).then(() => {
      renderedComponent.update()
    }).then(() => {
      renderedComponent.update()
    }).then(() => {
      expect(renderedComponent.state('errorStatus')).toEqual('Error adding grocery')
    })
  });
});
