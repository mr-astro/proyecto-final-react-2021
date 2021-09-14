import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import About from '../../containers/pages/public/About'
import Home from '../../containers/pages/public/Home'
import Private from '../../containers/pages/private/Private'
import PrivateRouter from '../privateRouter/PrivateRouter'

const AppRouter = () => {
    const isLogin = useSelector(state => state.success)
    
    return (
        <div>
            <Router>
                <Switch>
                    <PrivateRouter path='/private' isLogin={isLogin} component={Private} />
                    <Route path='/about' component={About} />
                    <Route path='/' component={Home} />
                    <Route path='*'><h1>404 Not Found</h1></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
