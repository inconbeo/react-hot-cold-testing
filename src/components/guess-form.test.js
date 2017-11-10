import React from 'react';

import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    })

    it('Fire onGuess callback when the form is submited', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = 1;
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    })

    it('NOT Fire onGuess callback when the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalledWith();
    })

    it('Clear the input value after submit', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = 1;
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(wrapper.find('input[type="text"]').instance().value).toEqual('');
    })
 })

   