import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarComponent: React.FC = () => {
    return (
        <div className="navbar">
            <Link to="/" >
                <i className="fas fa-home fa-3x navbar__icons"></i>
            </Link>
            
            <Link to={{pathname:"https://github.com/luisVidal97/react-coding-test-tf"}}  target="_blank">
                <i className="fab fa-github fa-3x navbar__icons"></i>
            </Link>
        </div>
    )
}
