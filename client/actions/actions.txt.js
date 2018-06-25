// import configureMockStore from 'redux-mock-store';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import moxios from 'moxios';
// import expect from 'expect';
// import * as actions from './';
// import UserMock from './UserMock';

// //const middlewares = [thunk];
// const mockStore = configureMockStore({},applyMiddleware(thunk.withExtraArgument(moxios)));

// describe('Actions', () => {

//   beforeEach(function () {
//     moxios.install();
//   });

//   afterEach(function () {
//     moxios.uninstall();
//   });

//   it('creates FETCH_USERS after successfuly fetching users', () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: UserMock,
//       });
//     });

   
//     const expectedActions = [
//       { type: actions.FETCH_USERS, users: UserMock },
//     ];

//     const store = mockStore({ users: [] })

//     return store.dispatch(actions.fetchUsers()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });