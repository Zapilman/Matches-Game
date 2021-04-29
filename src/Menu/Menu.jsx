import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setGameRules} from "../redux/gameReducer";
import s from '../Menu/Menu.module.css'
import '../App.css'


const Menu = () => {
    const dispatch = useDispatch();
    const setRules = (matchesCount, maxTake, isUserFirst) => {
        dispatch(setGameRules(matchesCount, maxTake, isUserFirst))
    }

    return (
        <div className={s.wrapper}>
            <div>
                <NavLink onClick={() => setRules(25, 3, true)} to='/game'>
                    <button className={'btn'}>Player First</button>
                </NavLink>
            </div>
            <div>

                <NavLink onClick={() => setRules(25, 3, false)} to='/game'>
                    <button className={'btn'}>Computer First</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='/custom'>
                    <button className={'btn'}>Custom</button>
                </NavLink>
            </div>
        </div>
    )
}


export default Menu