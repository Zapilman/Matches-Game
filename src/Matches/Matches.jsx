import s from '../Matches/Matches.module.css'
import {useEffect, useState} from "react";

const Matches = (props) => {
    let [userStatus, setUserStatus] = useState('lose');

    useEffect(() => {
        (props.userCount % 2 == 0)
            ? setUserStatus('won')
            : setUserStatus('lose');
    }, [props.countMatches.length])

    return (
        <div className={s.mathces_area}>
            <div className={s.number}>{(props.countMatches.length) ? props.countMatches.length : ''}</div>
            <div className={s.mathces}>{props.countMatches.length ? props.countMatches.map(() => {
                return <p>&#128205;</p>
            }) : <p className={s.status}>You {userStatus}!</p>}</div>
        </div>
    )
}


export default Matches