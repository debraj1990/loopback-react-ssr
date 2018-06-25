import authReducer from './authReducer';
import { FETCH_CURRENT_USER } from '../../actions'

describe('Auth Reducer', () => {
    it('should return the initial state of null when no action is dispatched', () => {
        expect(authReducer(null, {})).toBeNull()
    });


    it('should set the state when fetch_current_user action is dispatched ', () => {
        let res = {
            data: {token:'dkdkaksskskdkdkdkdkdk'}
        }
        expect(authReducer(null, {type: FETCH_CURRENT_USER, payload:res})).toEqual(res.data)
    })

    it('should set the state to false when fetch_current_user action does not have data property ', () => {
        let res = {
            error: {msg:'sorry authentication error'}
        }
        expect(authReducer(null, {type: FETCH_CURRENT_USER, payload:res})).toBeFalsy()
    })
});