import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='left'>
                    <Link to='/' className='logo'>WIKI</Link>
                    <Link to='/' className='recent'>
                        <i className='material-icons'>access_time</i>
                        <div>최근변경</div>
                    </Link>
                    <Link to='/' className='argument'>
                        <i className='material-icons'>chat</i>
                        <div>최근토론</div>
                    </Link>
                    <Link to='/' className='special'>
                        <i className='material-icons'>settings</i>
                        <div>특수기능</div>
                    </Link>
                    <Link to='/' className='random'>
                        <i className='material-icons'>shuffle</i>
                        <div>랜덤문서</div>
                    </Link>
                </div>
                <div className='center'></div>
                <div className='right'>
                    <div className='search'>
                        <input />
                        <a className='material-icons'>search</a>
                    </div>
                    <a className='material-icons'>person</a>
                </div>
            </div>
        );
    }
}

export default Header;