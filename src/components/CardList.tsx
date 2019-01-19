import React from 'react';
import Card from './Card'
import { IProps,IRobots } from '../containers/App';
import { object } from 'prop-types';
const CardList = ({robots}:IProps) =>{ 
 
    if(robots == undefined){
        return <h1>Error robots undefined</h1>
    }

    return (<div>
        {robots.map((user:string, i:number)=>
    {
        return (<Card 
            key ={robots[i].id} 
            id ={robots[i].id} 
            name = {robots[i].name} 
            email= {robots[i].email}>
            </Card>)
    })}
        </div>)
   
}

export default CardList;