const SET_MISSIONS = 'SET_MISSIONS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FETCH_ERROR = 'SET_FETCH_ERROR'
const SET_ORDER_BY = 'SET_ORDER_BY'

const defaultState = {
    items: [],
    isFetching: false,
    isFetchError: false,
    orderBy: true,
}

export default function missionsReducer(state = defaultState, action){
    switch (action.type) {
        case SET_MISSIONS:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload
            }
        case SET_ORDER_BY:
            return {
                ...state,
                orderBy: action.payload
            }
        default:
            return state
    }
}

export const setMissions = (missions) => ({type: SET_MISSIONS, payload: missions})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setFetchError = (bool) => ({type: SET_FETCH_ERROR, payload: bool})
export const setOrderBy = (bool) => ({type: SET_ORDER_BY, payload: bool})
