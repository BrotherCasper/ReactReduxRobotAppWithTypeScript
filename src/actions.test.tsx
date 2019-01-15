import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

import * as actions from './actions'

it('test setSearchField action',() =>{
    expect(actions.setSearchField('test')).toEqual({type: CHANGE_SEARCH_FIELD, payload:'test'})
})