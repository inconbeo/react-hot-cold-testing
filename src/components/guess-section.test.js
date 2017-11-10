import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';
import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    })
})

    it('Renders the feedback', () => {
        const feedback = 'make a guess';
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(<h2 id="feedback">{feedback}</h2>)).toEqual(true);
    })

    

