import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageFormation from './components/ImageFormation';

configure({ adapter: new Adapter() });
describe("ImageFormation", () => {
    it("should render ImageFormation Component", () => {
        const wrapper = shallow(<ImageFormation />);
        expect(wrapper.find('img')).toBeDefined();
    });
});