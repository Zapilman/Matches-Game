import Participant from "../Participant/Participant";
import Matches from "../Matches/Matches";
import Options from "../Options/Options";
import s from '../Game/Game.module.css'
import {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {setComputerCountAC, setUserCountAC} from "../redux/gameReducer";
import {compose} from "redux";
import withRedirectHoc from "../RedirectHoc/withRedirectGame";
import {
    getComputerCount,
    getIsLoading,
    getIsUserFirst,
    getMatchesCount,
    getMaxTake,
    getUserCount
} from "../redux/gameSelectors";


const getCount = (count) => {
    return (count > 0) ? (new Array(count)).fill(0).map((a, i) => i + 1) : [];
}

const Pick = (matchesCount, maxTake, count, computerPick) => {
    debugger;
    return (matchesCount - count <= maxTake * 2)
        ? ((computerPick % 2 == 0)
            ? 2
            : (matchesCount - count == maxTake) ? maxTake : 1)
        : computerPick;
}


const Game = (props) => {
    const [isRestart, setIsRestart] = useState(false);
    const [matchesCount, setMatchesCount] = useState(props.matchesCount);

    const userCount = useSelector(getUserCount);
    const computerCount = useSelector(getComputerCount);
    const isUserFirst = useSelector(getIsUserFirst);
    const maxTake = useSelector(getMaxTake);
    const isLoading = useSelector(getIsLoading);

    const dispatch = useDispatch();

    const setUserCount = (count) => {
        dispatch(setUserCountAC(count));
    }
    const setComputerCount = (count) => {
        dispatch(setComputerCountAC(count));
    }


    useEffect(() => {
        setIsRestart(false);
        setUserCount(0);
        if (!isUserFirst) {
            const count = Pick(matchesCount, maxTake, 0, 3);
            setComputerCount(count);
            setMatchesCount(props.matchesCount - count);
        } else {
            setComputerCount(0);
            setMatchesCount(props.matchesCount);
        }
    }, [isRestart])


    const addMatches = (count) => {
        if (matchesCount - count > 0) {
            setUserCount(parseInt(userCount) + parseInt(count));
            const computerPick = Pick(matchesCount, maxTake, count, maxTake + 1 - count);
            setComputerCount(parseInt(computerCount) + parseInt(computerPick));
            setMatchesCount(parseInt(matchesCount) - parseInt(count) - parseInt(computerPick));
        } else {
            setUserCount(parseInt(userCount) + matchesCount);
            setMatchesCount(0);
        }
    }

    return (
        <div className={s.game}>
            <div className={s.game__area}>
                <div className={s.participant}>
                    <Participant isUser={true}
                                 countMatches={getCount(userCount)}
                                 name={'Player'}
                                 isLoading={false}/>
                </div>
                <div className={s.matches}>
                    <Matches countMatches={getCount(matchesCount)} userCount={userCount}/>
                </div>
                <div className={s.participant}>
                    <Participant isUser={false}
                                 countMatches={getCount(computerCount)}
                                 name={'Computer'}
                                 isLoading={isLoading}/>
                </div>
            </div>
            <div className={s.game__options}>
                <Options countMatches={getCount(matchesCount)}
                         countOptions={getCount(maxTake)}
                         addMatches={addMatches}
                         setIsRestart={setIsRestart}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    matchesCount: getMatchesCount(state),
})

export default compose(
    withRedirectHoc,
    connect(mapStateToProps, {})
)(Game)