import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Portada from '../../containers/pages/public/Portada'
import Productos from '../../containers/pages/public/Productos'
import Login from '../../containers/pages/public/Login'
import Mantenedor from '../../containers/pages/private/Mantenedor'
import error404 from '../../containers/pages/public/error404'
import PrivateRouter from '../privateRouter/PrivateRouter'

const AppRouter = () => {
    const isLogin = useSelector(state => state.login.success)
    //console.log(isLogin)
    
    return (
        <div>
            <Router>
                <Switch>
                    <PrivateRouter path='/mantenedor' isLogin={isLogin} component={Mantenedor} />
                    <Route path='/productos' component={Productos} />
                    <Route path='/login' component={Login} />
                    <Route exact path='/' component={Portada} />
                    <Route path='*' component={error404}/>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
