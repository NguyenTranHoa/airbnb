import React , { useState } from 'react'
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

import "./Banner.css"
import Search from '../search/Search';

export default function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    function closeSearch() {
        setShowSearch(false)
    }

    return (
        <div className="banner">
            <div className="banner-search">
                <Search showSearch={showSearch} closeSearch={closeSearch}/>
                <Button 
                    className="banner__searchButton" variant="outlined"
                    onClick={() => setShowSearch(!showSearch)}
                >
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                <Button><Link to="/page">Explore Nearby</Link></Button>
            </div>
        </div>
    )
}
