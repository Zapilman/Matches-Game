import s from '../Participant/Participant.module.css'
import Preloader from "../Preloader/Preloader";


const Participant = (props) => {
    return (
        <div className={s.wrapper}>
            {props.isUser ? <p>&#128521;</p> : <p>&#128187;</p>}
            <p className={s.name}>{props.name}</p>
            {!props.isLoading ? (<div className={s.info}>
                <p className={s.number}>{props.countMatches.length}</p>
                <div className={s.matches}>
                    {props.countMatches.map(() => {
                        return <p>&#128205;</p>
                    })}
                </div>
            </div>) : <Preloader/>}

        </div>
    )
}

export default Participant