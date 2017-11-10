import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNaV />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />)
    })

    it('Should fire the onInfo callback when the "what" button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onInfo={callback} />);
        wrapper.find('.what').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it('Should fire the onNewGame callback when the "new game" button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onNewGame={callback} />);
        wrapper.find('.new').simulate('click');
        expect(callback).toHaveBeenCalled();
    });


})