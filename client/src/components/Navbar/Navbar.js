import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = ({ user }) => {
    return (
        <div className="navbar">
            <span className="logo"><Link className='link' to="/">Ilgor Dev</Link></span>
            {
                user ?
                    (
                        <ul className="list">
                            <li className="listItem">
                                <img
                                    src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                                    alt="no connected internet"
                                    className="avatar"
                                />
                            </li>
                            <li className="listItem">Abdumalikov Ilgorbek</li>
                            <li className="listItem">Log Out</li>
                        </ul>
                    )
                    :
                    (
                        <Link className='link' to={'login'}>Login</Link>
                    )
            }
        </div>
    )
}

export default Navbar
