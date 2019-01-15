import {shallow} from 'enzyme'
import  React from 'react'
import MainPage from './MainPage'

let wrapper;


beforeEach(()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots:[],
        searchField:'',
        isPending:false
    }
    wrapper = shallow(<MainPage {... mockProps}/>)
})

describe('example tests for main page', () => {
    it('test filtered robots',() =>{
        expect(wrapper.instance().filteredRobots()).toEqual([]);
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots:[{
                name:'john',
                email:'johnnyboy'
            }],
            searchField:'j',
            isPending:false
        }
        const filteredRobots = [{
            name:'john',
            email:'johnnyboy'
        }];
        const wrapper2 = shallow(<MainPage {... mockProps2}/>)
        expect(wrapper2.instance().filteredRobots()).toEqual(filteredRobots)
    })

    it('expect to render component',() =>{
        expect(wrapper).toMatchSnapshot();
    })

    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots:[{
            name:'john',
            email:'johnnyboy'
        }],
        searchField:'j',
        isPending:true
    }

    it('testing is pending ',()=>{
        const wrapper3 = shallow(<MainPage {...mockProps3}/>)
        expect(wrapper3.instance().isPending(true)).toEqual(true);
    })
    
})



