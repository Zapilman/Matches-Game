import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setGameRulesDefault} from "../redux/gameReducer";
import s from '../Menu/Menu.module.css'
import '../App.css'


const Menu = (props) => {
    return (
        <div className={s.wrapper}>
            <div>
                <NavLink onClick={() => {
                    props.setGameRulesDefault(true);
                }} to='/game'>
                    <button className={'btn'}>Player First</button>
                </NavLink>
            </div>
            <div>

                <NavLink onClick={() => {
                    props.setGameRulesDefault(false);
                }} to='/game'>
                    <button className={'btn'}>Computer First</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='/custom'><button className={'btn'}>Custom</button></NavLink>
            </div>
        </div>
    )
}


export default connect(() => ({}), {
    setGameRulesDefault
})(Menu);