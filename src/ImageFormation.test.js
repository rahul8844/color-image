import React from 'react';
import { configure, shallow,  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageFormation from './components/ImageFormation';
import { IMAGE_SIZE, TOTAL_COLORS } from './utils/constants';
import { getColors, getImageUrl } from './utils/util';

configure({ adapter: new Adapter() });

describe("Image Resolution", () => {
    it("should match with Number of colors", () => {
        const Resolution = IMAGE_SIZE.width * IMAGE_SIZE.height;
        expect(Resolution).toEqual(TOTAL_COLORS);
    });
});

describe("getColors() method", () => {
    it("should give the array of rgb combination of numbers with same length of image resolution", () => {
        const colors = getColors();
        expect(colors instanceof Array).toBeTruthy();
        expect(colors.length).toEqual(TOTAL_COLORS);
    });
});

describe("Each Color", () => {
    it("should be unique", () => {
        const colors = getColors().map(rgb=>JSON.stringify(rgb));
        const uniqueColors = new Set(colors);
        expect(colors.length).toEqual(uniqueColors.size);
    });
});

describe("getImageUrl() method", () => {
    it("should give the image url base64 string", () => {
        const imageUrl = getImageUrl(getColors());
        expect(imageUrl).toContain('data:image/png;base64,')
    });
});



describe("ImageFormation", () => {
    it("should render ImageFormation Component", () => {
        const wrapper = shallow(<ImageFormation />);
        const downloadButton = wrapper.find('button');
        const Image = wrapper.find('img');
        expect(downloadButton.text()).toContain('Download');
        expect(Image.exists()).toEqual(true);
    });
});