import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'; 
import Accordion from './Accordion';

describe(`Accordion Component`, () => {
  const sections = [{name:'', content:''}];
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the first section by default', () => {
    const tree = renderer.create(<Accordion />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})