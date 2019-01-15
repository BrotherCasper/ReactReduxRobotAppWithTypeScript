import {shallow} from 'enzyme'
import  React from 'react'
import Header from './Header'

it('expect to render component',() =>{
    expect(shallow(<Header/>)).toMatchSnapshot();
})