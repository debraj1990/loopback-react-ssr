import React from 'react'

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                React SSR
                </Link>
                <ul className="right">
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/admins">Admins</Link>
                </li>
                <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    )
}

