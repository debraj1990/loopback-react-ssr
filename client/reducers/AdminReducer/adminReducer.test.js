import adminReducers from './adminReducers';
import { FETCH_ADMINS } from '../../actions'

describe('Admin Reducer', () => {
    it('should return the initial state when no action is dispatched', () => {
        expect(adminReducers([], {})).toHaveLength(0)
    });


    it('should set the state when fetch_user action is dispatched ', () => {
        let res = {
            data: ['Odehi','Josh']
        }
        expect(adminReducers([], {type: FETCH_ADMINS, payload:res})).toEqual(res.data)
    })

    it('should set the state to empty array when fetch_user action has error ', () => {
        let res = {
            error: {msg: 'Error fetching data'}
        }
        expect(adminReducers([], {type: FETCH_ADMINS, payload:res})).toBeUndefined()
    })
});