import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className='nav-link' exact to='/'>Home</NavLink>
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                        <NavLink className='nav-link' to='/private'>Privada</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar