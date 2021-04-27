import Participant from "../Participant/Participant";
import Matches from "../Matches/Matches";
import Options from "../Options/Options";
import s from '../Game/Game.module.css'
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import {setMatchesCountAC} from "../redux/gameReducer";
import {compose} from "redux";
import withRedirectHoc from "../RedirectHoc/withRedirectGame";


let getCount = (count) => {
    let countArr = [];
    for (let el = 1; el <= count; el++) {
        countArr.push(el);
    }
    return countArr;
}
const Pick = (matchesCount, isEven) => {
    let lel = matchesCount;
    let res;
    if (isEven) {
        res = (Math.round((lel - 1) / 3) * 3) + 1;
        while (res >= lel) {
            lel -= 1;
            res = (Math.round((lel - 1) / 3) * 3) + 1
        }

    } else {
        res = (Math.round((lel + 1) / 3) * 3) - 1;
        while (res >= lel) {
            lel -= 1;
            res = (Math.round((lel + 1) / 3) * 3) - 1
        }
    }
    return res;
}


const Game = (props) => {


    let [userCount, setUserCount] = useState(props.userCount);
    let [computerCount, setComputerCount] = useState(props.computerCount);
    let [matchesCount, setMatchesCount] = useState(props.matchesCount);
    let [isRestart, setIsRestart] = useState(false);


    useEffect(() => {
        setIsRestart(false);
        setUserCount(props.userCount);
        if (!props.isUserFirst) {
            let count = props.matchesCount - Pick(props.matchesCount, true);
            setComputerCount(count);
            setMatchesCount(props.matchesCount - count);
        } else {
            setComputerCount(props.computerCount);
            setMatchesCount(props.matchesCount);
        }
    }, [isRestart])


    const addMatches = (count) => {
        let computerPick = matchesCount - count;

        if (computerPick > 0) {
            setUserCount(parseInt(userCount) + parseInt(count));
            computerPick = (computerPick < props.maxTake * 3)
                ? ((computerCount % 2 == 0 && matchesCount - count >= 2) ? 2 : 1)
                : (computerPick - Pick(computerPick, (computerCount % 2 == 0)))
            setComputerCount(parseInt(computerCount) + parseInt(computerPick));
            setMatchesCount(parseInt(matchesCount) - parseInt(count) - parseInt(computerPick));
        } else {
            setUserCount(parseInt(userCount) + parseInt(matchesCount));
            setMatchesCount(0);
        }

    }

    return (
        <div className={s.game}>
            <div className={s.game__area}>
                <div className={s.participant}>
                    <Participant isUser={true} countMatches={getCount(userCount)} name={'Player'}/>
                </div>
                <div className={s.matches}>
                    <Matches countMatches={getCount(matchesCount)} userCount={userCount}/>
                </div>
                <div className={s.participant}>
                    <Participant isUser={false} countMatches={getCount(computerCount)} name={'Computer'}/>
                </div>
            </div>
            <div className={s.game__options}>
                <Options countMatches={getCount(matchesCount)}
                         countOptions={getCount(props.maxTake)}
                         addMatches={addMatches}
                         setIsRestart={setIsRestart}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    matchesCount: state.game.matchesCount,
    userCount: state.game.userCount,
    computerCount: state.game.computerCount,
    isUserFirst: state.game.isUserFirst,
    maxTake: state.game.maxTake

})


export default compose(
    withRedirectHoc,
    connect(mapStateToProps, setMatchesCountAC)
)(Game)