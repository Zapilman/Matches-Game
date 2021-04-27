const SET_USER_COUNT = 'SET_USER_COUNT';
const SET_COMPUTER_COUNT = 'SET_COMPUTER_COUNT';
const SET_MATCHES_COUNT = 'SET_MATCHES_COUNT';
const SET_IS_USER_FIRST = 'SET_IS_USER_FIRST';
const SET_MAX_TAKE = 'SET_MAX_TAKE';
const SET_IS_RULES_EXISTS = 'SET_IS_RULES_EXISTS';

const initialState = {
    matchesCount: 0,
    userCount: 0,
    computerCount:0,
    isUserFirst: true,
    maxTake: 0,
    isRulesExists: false
};


export const setUserCountAC = (count) => ({type: SET_USER_COUNT, count})
export const setComputerCountAC = (count) => ({type: SET_COMPUTER_COUNT, count})
export const setMatchesCountAC = (count) => ({type: SET_MATCHES_COUNT, count})
export const isUserFirstAC = (isFirst) => ({type:SET_IS_USER_FIRST, isFirst})
export const setMaxTake = (max) => ({type:SET_MAX_TAKE, max})
export const setIsRulesExists = (isExists) => ({type: SET_IS_RULES_EXISTS, isExists})

const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_COUNT:{
            return({
                ...state,
                userCount: action.count
            })
        }
        case SET_COMPUTER_COUNT:{
            return({
                ...state,
                computerCount: action.count
            })
        }
        case SET_MATCHES_COUNT:{
            return({
                ...state,
                matchesCount: action.count
            })
        }
        case SET_IS_USER_FIRST:{
            return ({
                ...state,
                isUserFirst: action.isFirst
            })
        }
        case SET_MAX_TAKE:{
            return ({
                ...state,
                maxTake: action.max
            })
        }
        case SET_IS_RULES_EXISTS:{
            return ({
                ...state,
                isRulesExists: action.isExists
            })
        }
    }

    return state;
}



export const setGameRulesDefault = (isUserFirst) => {
    return (dispatch) => {
        dispatch(setMatchesCountAC(25));
        dispatch(isUserFirstAC(isUserFirst));
        dispatch(setMaxTake(3))
        dispatch(setIsRulesExists(true));
    }
}

export const setGameRulesCustom = (maxTakes, macthesCount, isUserFirst) => {
    return (dispatch) => {
        dispatch(setMatchesCountAC(macthesCount));
        dispatch(isUserFirstAC(isUserFirst));
        dispatch(setMaxTake(maxTakes))
        dispatch(setIsRulesExists(true));
    }
}

export default gameReducer