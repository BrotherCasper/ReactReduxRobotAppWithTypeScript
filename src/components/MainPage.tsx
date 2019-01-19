import React ,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './MainPage.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import { IProps, IState } from '../containers/App';

class MainPage extends Component<IProps,IState>{
    
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