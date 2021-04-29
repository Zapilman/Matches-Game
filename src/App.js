import Game from "./Game/Game";
import {Route} from "react-router-dom";
import Menu from "./Menu/Menu";
import Custom from "./Cutom/Custom";
import {Provider} from "react-redux";
import React from "react";


const App = (props) => {
    return (
        <div>
            <Provider store={props.store}>
                <Route path='/game' render={() => <Game/>}></Route>
                <Route exact path='/' render={() => <Menu/>}></Route>
                <Route path='/custom' render={() => <Custom/>}></Route>
            </Provider>
        </div>
    )
}

export default App;
