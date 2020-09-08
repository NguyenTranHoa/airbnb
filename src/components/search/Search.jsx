import React, { useState } from 'react'
import { DateRangePicker } from "react-date-range"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from "@material-ui/core";

import "./Search.css"

export default function Search(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    
    let classname = "search";
    if(props.showSearch) {
        classname += " animation";
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className={classname}>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <hr/>
            <div className="searchGuest">
                <h3>Number of guests</h3>
                <input min={0} defaultValue={2} type="number" />
            </div>
            <Button onClick={() => props.closeSearch()} >Search Airbnb</Button>
        </div>
    )
}
