import Game from "./Game/Game";
import {Route} from "react-router-dom";
import Menu from "./Menu/Menu";
import Custom from "./Cutom/Custom";





const App = (props) => {
    return (
        <div>
            <Route path='/game' render={()=><Game store={props.store}/>}></Route>
            <Route exact path='/' render={()=><Menu store={props.store}/>}></Route>
            <Route path='/custom' render={()=><Custom store={props.store}/>}></Route>
        </div>
    )
}

export default App;
