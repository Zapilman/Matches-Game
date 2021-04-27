import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    isRulesExists: state.game.isRulesExists
});

const withRedirectHoc = (Component) => {
    const withRedirectComponent = (props) => {
        if (!props.isRulesExists) return <Redirect to='/'/>
        return <Component {...props}/>
    }

    return connect(mapStateToProps)(withRedirectComponent);
}


export default withRedirectHoc;