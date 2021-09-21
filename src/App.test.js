import React from 'react';
import { configure, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });
describe("Rendering app", () => {
  it("should render App", () => {
    render(<App/>);
  });
});