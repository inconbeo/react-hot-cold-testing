import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Renders the List', () => {
        const test = [1,2,3,4,5,6,7,10];
        console.log(test[0]);
        const wrapper = shallow(<GuessList guesses={test}/>)
        const values = wrapper.find('.list');
        console.log(values);
        console.log(test);
        expect(values.length).toEqual(test.length);

        test.forEach((num, index) => {
            expect(values.at(index).text()).toEqual(num.toString());
        } )
        console.log(values.at(1).text());
        
    })
})
