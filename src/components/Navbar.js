import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
const Navbar = (props) => {
    // console.log(props);
    // setTimeout(()=> {
    //     props.history.push('/about')
    // },2000);
    return (
        <nav className="nav-wrapper red darken-3" style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-between',alignItems:'center'}}>
                <a style={{marginInline: '10px',fontSize: 'x-large',fontWeight: '600'}}>Poke' times</a>
                <ul className="right" style={{display:'flex',justifyContent: 'space-between',alignItems:'center'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
        </nav>
    )
}

export default withRouter(Navbar)//higher order component
