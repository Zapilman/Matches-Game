import {useDispatch, useSelector} from "react-redux";
import {setComputerPick} from "../redux/gameReducer";
import {getIsLoading} from "../redux/gameSelectors";

const Options = (props) => {
    const dispatch = useDispatch();
    const setIsLoading = () => {
        dispatch(setComputerPick());
    }

    const isLoading = useSelector(getIsLoading);


    return (
        <div>
            {
                props.countMatches.length
                    ? props.countOptions.map(option => {
                        return <button onClick={(event) => {
                            props.addMatches(event.target.value);
                            setIsLoading()
                        }}
                                       className={'btn'} value={option} disabled={isLoading} >{option}</button>
                    }) : <button className={'btn'} onClick={() => props.setIsRestart(true)}>Restart</button>
            }

        </div>
    )
}


export default Options