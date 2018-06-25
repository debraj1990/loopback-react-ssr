import userReducer from './userReducer';
import { FETCH_USERS } from '../../actions'

describe('User Reducer', () => {
    it('should return the initial state when no action is dispatched', () => {
        expect(userReducer([], {})).toHaveLength(0)
    });


    it('should set the state when fetch_user action is dispatched ', () => {
        let res = {
            data: ['Odehi','Josh']
        }
        expect(userReducer([], {type: FETCH_USERS, payload:res})).toEqual(res.data)
    })

    it('should set the state to empty array when fetch_user action has error ', () => {
        let res = {
            error: {msg: 'Error fetching data'}
        }
        expect(userReducer([], {type: FETCH_USERS, payload:res})).toEqual([])
    })
});