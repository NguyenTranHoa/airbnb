import React from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

import "./SearchResult.css"

export default function SearchResult(props) {
    const val = props.value;
    return (
        <div className="searchResult">
            <img src={val.img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{val.location}</p>
                    <h3>{val.title}</h3>
                    <p>____</p>
                    <p>{val.description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{val.star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{val.price}</h2>
                        <p>{val.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
