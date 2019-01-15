import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

import * as reducers from './reducers'

describe('searchRobotsReducer',()=>{
    
    const initialStateSearch = {
        searchField:''
    }
    
    it('should return the initial state',()=>{
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField:''});
    })

    it('should handle change search field event',()=>{
        expect(reducers.searchRobots(initialStateSearch,{type: CHANGE_SEARCH_FIELD,payload:'abc'})).toEqual({searchField:'abc'});
    })
})

describe('requestRobotsReducer',() =>{
    const initialStateRobots = {
        isPending: false,
        robots:[],
        error:''
    }


    it('should return the initial state',()=>{
        expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots);
    })

    it('should handle request is pending',()=>{
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_PENDING}).isPending).toEqual(true);
    })

    it('should handle request is success',()=>{
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_SUCCESS,payload:[{name:'123'}]})).toEqual({
            isPending: false,
            robots:[{name:'123'}],
            error:''
        });
    })

    it('should handle request is failed',()=>{
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_FAILED,payload:'You got served'})).toEqual({
            isPending: false,
            robots:[],
            error:'You got served'
        });
    })
})

