import React from 'react' ;

import nock from 'nock';

import configureStore from 'redux-mock-store' ;
import thunk from 'redux-thunk';

// Actions to be tested
import { collectionsList } from '../../firebase/database';
import FirebaseReducer from '../../redux/reducers/firebase';
import ActionTypes from '../../redux/actions/actionTypes';

const middlewares = [thunk] ;
const testStore = configureStore(middlewares)({
    collectionsList : []
}) ;

const TestCollectionsList = () => async dispatch => {
    try {
        return dispatch({
            type : ActionTypes.CollectionsList,
            payload : [{
                "collection_id": "uaVxpJQ0HOeXQbb7DIus",
                "sub_category_id": "fv4Yf6xY7RsBZXRkXabn",
                "category_id": "WwFn0mN7PAnu4uNq3nAC",
                "user_id": "m9nMxsv0nlrH8MHcofqX",
                "sols_count": 1,
                "sols": [
                    {
                        "collection_id": "uaVxpJQ0HOeXQbb7DIus",
                        "url": "http://10.10.10.169:3001/movie.mp4",
                        "vote_count": 0,
                        "user_id": "m9nMxsv0nlrH8MHcofqX",
                        "download_count": 0,
                        "createdAt": {
                            "seconds": 1647961105,
                            "nanoseconds": 203000000
                        },
                        "id": "6gWETkhsx11KtwpcWAnn"
                    }
                ],
                "collection_name": "React",
                "user_email": "im.christopher.groe@gmail.com"
            }]
        })

    } catch(err) {
        console.log(err) ;
    }
}


describe("Test CollectionsList action and collectionsList state in Firebase Redux", () => {

    // test redux
    // 1. We have to clear all actions from our mock store before running each test.
    beforeEach(async () => {
        testStore.clearActions() ;
    })

    // 2. test actions and reducer
    test('Dispatches the correct action and payload(CollectionsList)', () => {

        const expectedActions = [
            {
                type : ActionTypes.CollectionsList,
                payload : [
                    {
                        "collection_id": "uaVxpJQ0HOeXQbb7DIus",
                        "sub_category_id": "fv4Yf6xY7RsBZXRkXabn",
                        "category_id": "WwFn0mN7PAnu4uNq3nAC",
                        "user_id": "m9nMxsv0nlrH8MHcofqX",
                        "sols_count": 1,
                        "sols": [
                            {
                                "collection_id": "uaVxpJQ0HOeXQbb7DIus",
                                "url": "http://10.10.10.169:3001/movie.mp4",
                                "vote_count": 0,
                                "user_id": "m9nMxsv0nlrH8MHcofqX",
                                "download_count": 0,
                                "createdAt": {
                                    "seconds": 1647961105,
                                    "nanoseconds": 203000000
                                },
                                "id": "6gWETkhsx11KtwpcWAnn"
                            }
                        ],
                        "collection_name": "React",
                        "user_email": "im.christopher.groe@gmail.com"
                    }
                ]
            }
        ] ;
    
        const expectedState = {
            categoryList : null,
            collectionsList : [
                {
                    "collection_id": "uaVxpJQ0HOeXQbb7DIus",
                    "sub_category_id": "fv4Yf6xY7RsBZXRkXabn",
                    "category_id": "WwFn0mN7PAnu4uNq3nAC",
                    "user_id": "m9nMxsv0nlrH8MHcofqX",
                    "sols_count": 1,
                    "sols": [
                        {
                            "collection_id": "uaVxpJQ0HOeXQbb7DIus",
                            "url": "http://10.10.10.169:3001/movie.mp4",
                            "vote_count": 0,
                            "user_id": "m9nMxsv0nlrH8MHcofqX",
                            "download_count": 0,
                            "createdAt": {
                                "seconds": 1647961105,
                                "nanoseconds": 203000000
                            },
                            "id": "6gWETkhsx11KtwpcWAnn"
                        }
                    ],
                    "collection_name": "React",
                    "user_email": "im.christopher.groe@gmail.com"
                }
            ]
        }
        
        testStore.dispatch(TestCollectionsList()).then(() => {
            console.log(testStore.getActions()) ;
            console.log(testStore.getState());

            expect(testStore.getActions()).toEqual(expectedActions) ;
        }).catch(err => {
            console.log(err)
        }) ;
    }) ;
})
