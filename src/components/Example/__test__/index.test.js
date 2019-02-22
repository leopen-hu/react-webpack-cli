import React from 'react';
import { create } from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import Example from '../index';

describe('Example component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Example />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('count added when clicked', () => {
    const component = create(<Example />);
    const rootInstance = component.root;
    const button = rootInstance.findByType('button');
    const p = rootInstance.findByType('p');
    expect(p.children[1]).toBe('0');
    act(() => {
      button.props.onClick();
    });
    expect(p.children[1]).toBe('1');
  });
});
