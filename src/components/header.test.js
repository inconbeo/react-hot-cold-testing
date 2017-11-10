import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoModal from './info-modal';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    })
})

    it('Renders modal when the toggleInfoModal is executed', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal();
        wrapper.update();
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    })

    it('Renders the title', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
    })