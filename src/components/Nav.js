import React from 'react'
import {BsFillBagFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div className='nav'>
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/">
                        <img src="/images/logo.webp" alt="Logo" />
                        </Link>
                    </div>
                    <div className="nav__right">
                        <Link to='/cart'>
                                <div className="basket">
                                    <BsFillBagFill className='cart-icon' />
                                    <span>4</span>
                                </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
