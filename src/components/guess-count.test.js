import React from 'react';
import GuessCount from './guess-count';
import {shallow, mount} from 'enzyme';

describe('<GuessCount />', () => {
    it('Render without crashing', () => {
        shallow(<GuessCount />)
    })

    it('render the correct number', () => {
        const count = 10;
        const wrapper = shallow(<GuessCount count={count} />)
        expect(wrapper.contains(<p>
            Guess #<span id="count">{count}</span>!
        </p>)).toEqual(true);
    })
    
})