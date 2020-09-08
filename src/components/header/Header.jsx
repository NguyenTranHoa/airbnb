import React, { Component } from 'react'
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">

                <Link to="/">
                    <img 
                        className="header__icon" 
                        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                        alt="" />
                </Link>

                <div className="header__center">
                    <input type="text" />
                    <SearchIcon />
                </div>

                <div className="header__right">
                    <p>Become a host</p>
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                    <AccountCircleIcon/>
                </div>
            </div>
        )
    }
}
