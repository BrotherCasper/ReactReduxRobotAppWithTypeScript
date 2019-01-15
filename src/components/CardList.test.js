import {shallow} from 'enzyme';
import React from 'react'
import CardList from './CardList'

it('cardlist component test', ()=>{

    const mockRobots = [
        {
            id:1,
            name:"John Snow",
            username: "John John",
            email: "john@gmail.com"
        }
    ]

    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})