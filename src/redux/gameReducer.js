const SET_USER_COUNT = 'SET_USER_COUNT';
const SET_COMPUTER_COUNT = 'SET_COMPUTER_COUNT';
const SET_MATCHES_COUNT = 'SET_MATCHES_COUNT';
const SET_MAX_TAKE = 'SET_MAX_TAKE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_GAME_RULES = 'SET_GAME_RULES';

const initialState = {
    matchesCount: 0,
    userCount: 0,
    computerCount: 0,
    isUserFirst: true,
    maxTake: 3,
    isRulesExists: false,
    isLoading: false
};


export const setUserCountAC = (count) => ({type: SET_USER_COUNT, count})
export const setComputerCountAC = (count) => ({type: SET_COMPUTER_COUNT, count})
export const setMaxTake = (max) => ({type: SET_MAX_TAKE, max})
export const setIsLoadingAC = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const setGameRules = (matchesCount, maxTake, isUserFirst) => ({
    type: SET_GAME_RULES,
    matchesCount,
    maxTake,
    isUserFirst
})

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_COUNT: {
            return ({
                ...state,
                userCount: action.count
            })
        }
        case SET_COMPUTER_COUNT: {
            return ({
                ...state,
                computerCount: action.count
            })
        }
        case SET_MATCHES_COUNT: {
            return ({
                ...state,
                matchesCount: action.count
            })
        }
        case SET_MAX_TAKE: {
            return ({
                ...state,
                maxTake: action.max
            })
        }
        case SET_IS_LOADING: {
            return ({
                ...state,
                isLoading: action.isLoading
            })
        }
        case SET_GAME_RULES: {
            return ({
                ...state,
                matchesCount: action.matchesCount,
                maxTake: action.maxTake,
                isUserFirst: action.isUserFirst,
                isRulesExists: true
            })
        }
    }

    return state;
}

export const setComputerPick = () => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true));
        setTimeout(() => {
            dispatch(setIsLoadingAC(false))
        }, 1000)
    }
}

export default gameReducer