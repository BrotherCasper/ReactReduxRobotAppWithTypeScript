import React ,{Component} from 'react'
import './App.css';
import {connect} from 'react-redux'
import {setSearchField, requestRobots} from '../actions';
import MainPage from '../components/MainPage';
import { isPending } from 'q';

export interface IProps{
    onSearchChange?: ()=> any,
    onRequestRobots?:()=> any,
    robots?:Array<IRobots>,
    searchField?:string,
    isPending?:boolean,
    
}

export interface IState{
   robots?:Array<IRobots>,
   searchfield?:string,
   isPending?:boolean,
   error?:Error
}

export interface IRobots{
    id:number,
    name:string,
    email:string
}

const mapStateToProps = state =>
{
    return {
        searchField:state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => 
        dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

class App extends Component{
    
    render(){
      return <MainPage {... this.props}/>
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);