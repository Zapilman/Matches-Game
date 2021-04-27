
import s from '../Participant/Participant.module.css'


const Participant = (props) => {
    return (
        <div className={s.wrapper}>
            {props.isUser ? <p>&#128521;</p> : <p>&#128187;</p>}
            <div className={s.info}>
                <p className={s.name}>{props.name}</p>
                <p className={s.number}>{props.countMatches.length}</p>
            </div>
            <div className={s.matches}>
                {props.countMatches.map(()=>{
                    return <p>&#128205;</p>
                })}
            </div>
        </div>
    )
}

export default Participant