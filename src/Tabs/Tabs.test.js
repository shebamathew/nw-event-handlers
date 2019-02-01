import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'; 
import Tabs from './Tabs';

describe(`Tabs Component`, () => {
  const tabsProp = [{name:'', content:''}];
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})