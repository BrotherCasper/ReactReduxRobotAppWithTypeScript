import React ,{Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './MainPage.css';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

class MainPage extends Component{
    
    componentDidMount(){
        this.props.onRequestRobots();
    }

    isPending = (isPending) =>{
        if(isPending){
            return true;
        }
        return false;
    }
    
    filteredRobots = () => {
    return this.props.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()); 
    })}
    render(){
        const {onSearchChange,isPending} =this.props;       
        
        return this.isPending(isPending) ?
            (<h1>Loading</h1>):     
        (
                <div className = 'tc'>
                    <Header/>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                    <CardList robots = {this.filteredRobots()}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
        )  
    }
}

export default MainPage;